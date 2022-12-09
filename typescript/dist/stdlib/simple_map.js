"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = exports.loadParsers = exports.remove_ = exports.length_ = exports.find_ = exports.destroy_empty_ = exports.create_ = exports.contains_key_ = exports.borrow_mut_ = exports.borrow_ = exports.add_ = exports.SimpleMap = exports.Element = exports.EKEY_NOT_FOUND = exports.EKEY_ALREADY_EXISTS = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Comparator = __importStar(require("./comparator"));
const Error = __importStar(require("./error"));
const Option = __importStar(require("./option"));
const Vector = __importStar(require("./vector"));
exports.packageName = "AptosStdlib";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "simple_map";
exports.EKEY_ALREADY_EXISTS = (0, move_to_ts_1.u64)("1");
exports.EKEY_NOT_FOUND = (0, move_to_ts_1.u64)("2");
class Element {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.key = proto['key'];
        this.value = proto['value'];
    }
    static ElementParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Element);
        return new Element(proto, typeTag);
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Element", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.key.typeTag instanceof move_to_ts_2.StructTag) {
                yield this.key.loadFullState(app);
            }
            if (this.value.typeTag instanceof move_to_ts_2.StructTag) {
                yield this.value.loadFullState(app);
            }
            this.__app = app;
        });
    }
}
exports.Element = Element;
Element.moduleAddress = exports.moduleAddress;
Element.moduleName = exports.moduleName;
Element.structName = "Element";
Element.typeParameters = [
    { name: "Key", isPhantom: false },
    { name: "Value", isPhantom: false }
];
Element.fields = [
    { name: "key", typeTag: new $.TypeParamIdx(0) },
    { name: "value", typeTag: new $.TypeParamIdx(1) }
];
class SimpleMap {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.data = proto['data'];
    }
    static SimpleMapParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, SimpleMap);
        return new SimpleMap(proto, typeTag);
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "SimpleMap", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.SimpleMap = SimpleMap;
SimpleMap.moduleAddress = exports.moduleAddress;
SimpleMap.moduleName = exports.moduleName;
SimpleMap.structName = "SimpleMap";
SimpleMap.typeParameters = [
    { name: "Key", isPhantom: false },
    { name: "Value", isPhantom: false }
];
SimpleMap.fields = [
    { name: "data", typeTag: new move_to_ts_2.VectorTag(new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "simple_map", "Element", [new $.TypeParamIdx(0), new $.TypeParamIdx(1)])) }
];
function add_(map, key, value, $c, $p) {
    let temp$1, temp$2, end, maybe_idx, maybe_placement, placement;
    [temp$1, temp$2] = [map, key];
    [maybe_idx, maybe_placement] = find_(temp$1, temp$2, $c, [$p[0], $p[1]]);
    if (!Option.is_none_(maybe_idx, $c, [move_to_ts_2.AtomicTypeTag.U64])) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EKEY_ALREADY_EXISTS), $c));
    }
    Vector.push_back_(map.data, new Element({ key: key, value: value }, new move_to_ts_2.SimpleStructTag(Element, [$p[0], $p[1]])), $c, [new move_to_ts_2.SimpleStructTag(Element, [$p[0], $p[1]])]);
    placement = Option.extract_(maybe_placement, $c, [move_to_ts_2.AtomicTypeTag.U64]);
    end = (Vector.length_(map.data, $c, [new move_to_ts_2.SimpleStructTag(Element, [$p[0], $p[1]])])).sub((0, move_to_ts_1.u64)("1"));
    while (($.copy(placement)).lt($.copy(end))) {
        {
            Vector.swap_(map.data, $.copy(placement), $.copy(end), $c, [new move_to_ts_2.SimpleStructTag(Element, [$p[0], $p[1]])]);
            placement = ($.copy(placement)).add((0, move_to_ts_1.u64)("1"));
        }
    }
    return;
}
exports.add_ = add_;
function borrow_(map, key, $c, $p) {
    let idx, maybe_idx;
    [maybe_idx,] = find_(map, key, $c, [$p[0], $p[1]]);
    if (!Option.is_some_(maybe_idx, $c, [move_to_ts_2.AtomicTypeTag.U64])) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EKEY_NOT_FOUND), $c));
    }
    idx = Option.extract_(maybe_idx, $c, [move_to_ts_2.AtomicTypeTag.U64]);
    return Vector.borrow_(map.data, $.copy(idx), $c, [new move_to_ts_2.SimpleStructTag(Element, [$p[0], $p[1]])]).value;
}
exports.borrow_ = borrow_;
function borrow_mut_(map, key, $c, $p) {
    let temp$1, temp$2, idx, maybe_idx;
    [temp$1, temp$2] = [map, key];
    [maybe_idx,] = find_(temp$1, temp$2, $c, [$p[0], $p[1]]);
    if (!Option.is_some_(maybe_idx, $c, [move_to_ts_2.AtomicTypeTag.U64])) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EKEY_NOT_FOUND), $c));
    }
    idx = Option.extract_(maybe_idx, $c, [move_to_ts_2.AtomicTypeTag.U64]);
    return Vector.borrow_mut_(map.data, $.copy(idx), $c, [new move_to_ts_2.SimpleStructTag(Element, [$p[0], $p[1]])]).value;
}
exports.borrow_mut_ = borrow_mut_;
function contains_key_(map, key, $c, $p) {
    let maybe_idx;
    [maybe_idx,] = find_(map, key, $c, [$p[0], $p[1]]);
    return Option.is_some_(maybe_idx, $c, [move_to_ts_2.AtomicTypeTag.U64]);
}
exports.contains_key_ = contains_key_;
function create_($c, $p) {
    return new SimpleMap({ data: Vector.empty_($c, [new move_to_ts_2.SimpleStructTag(Element, [$p[0], $p[1]])]) }, new move_to_ts_2.SimpleStructTag(SimpleMap, [$p[0], $p[1]]));
}
exports.create_ = create_;
function destroy_empty_(map, $c, $p) {
    let { data: data } = map;
    Vector.destroy_empty_(data, $c, [new move_to_ts_2.SimpleStructTag(Element, [$p[0], $p[1]])]);
    return;
}
exports.destroy_empty_ = destroy_empty_;
function find_(map, key, $c, $p) {
    let temp$1, temp$2, temp$3, temp$4, left, length, mid, potential_key, right;
    length = Vector.length_(map.data, $c, [new move_to_ts_2.SimpleStructTag(Element, [$p[0], $p[1]])]);
    if (($.copy(length)).eq(((0, move_to_ts_1.u64)("0")))) {
        return [Option.none_($c, [move_to_ts_2.AtomicTypeTag.U64]), Option.some_((0, move_to_ts_1.u64)("0"), $c, [move_to_ts_2.AtomicTypeTag.U64])];
    }
    else {
    }
    left = (0, move_to_ts_1.u64)("0");
    right = $.copy(length);
    while (($.copy(left)).neq($.copy(right))) {
        {
            mid = ($.copy(left)).add((($.copy(right)).sub($.copy(left))).div((0, move_to_ts_1.u64)("2")));
            potential_key = Vector.borrow_(map.data, $.copy(mid), $c, [new move_to_ts_2.SimpleStructTag(Element, [$p[0], $p[1]])]).key;
            temp$1 = Comparator.compare_(potential_key, key, $c, [$p[0]]);
            if (Comparator.is_smaller_than_(temp$1, $c)) {
                left = ($.copy(mid)).add((0, move_to_ts_1.u64)("1"));
            }
            else {
                right = $.copy(mid);
            }
        }
    }
    if (($.copy(left)).neq($.copy(length))) {
        temp$2 = $.dyn_eq($p[0], key, Vector.borrow_(map.data, $.copy(left), $c, [new move_to_ts_2.SimpleStructTag(Element, [$p[0], $p[1]])]).key);
    }
    else {
        temp$2 = false;
    }
    if (temp$2) {
        [temp$3, temp$4] = [Option.some_($.copy(left), $c, [move_to_ts_2.AtomicTypeTag.U64]), Option.none_($c, [move_to_ts_2.AtomicTypeTag.U64])];
    }
    else {
        [temp$3, temp$4] = [Option.none_($c, [move_to_ts_2.AtomicTypeTag.U64]), Option.some_($.copy(left), $c, [move_to_ts_2.AtomicTypeTag.U64])];
    }
    return [temp$3, temp$4];
}
exports.find_ = find_;
function length_(map, $c, $p) {
    return Vector.length_(map.data, $c, [new move_to_ts_2.SimpleStructTag(Element, [$p[0], $p[1]])]);
}
exports.length_ = length_;
function remove_(map, key, $c, $p) {
    let temp$1, temp$2, end, maybe_idx, placement;
    [temp$1, temp$2] = [map, key];
    [maybe_idx,] = find_(temp$1, temp$2, $c, [$p[0], $p[1]]);
    if (!Option.is_some_(maybe_idx, $c, [move_to_ts_2.AtomicTypeTag.U64])) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EKEY_NOT_FOUND), $c));
    }
    placement = Option.extract_(maybe_idx, $c, [move_to_ts_2.AtomicTypeTag.U64]);
    end = (Vector.length_(map.data, $c, [new move_to_ts_2.SimpleStructTag(Element, [$p[0], $p[1]])])).sub((0, move_to_ts_1.u64)("1"));
    while (($.copy(placement)).lt($.copy(end))) {
        {
            Vector.swap_(map.data, $.copy(placement), ($.copy(placement)).add((0, move_to_ts_1.u64)("1")), $c, [new move_to_ts_2.SimpleStructTag(Element, [$p[0], $p[1]])]);
            placement = ($.copy(placement)).add((0, move_to_ts_1.u64)("1"));
        }
    }
    let { key: key__3, value: value } = Vector.pop_back_(map.data, $c, [new move_to_ts_2.SimpleStructTag(Element, [$p[0], $p[1]])]);
    return [key__3, value];
}
exports.remove_ = remove_;
function loadParsers(repo) {
    repo.addParser("0x1::simple_map::Element", Element.ElementParser);
    repo.addParser("0x1::simple_map::SimpleMap", SimpleMap.SimpleMapParser);
}
exports.loadParsers = loadParsers;
class App {
    constructor(client, repo, cache) {
        this.client = client;
        this.repo = repo;
        this.cache = cache;
    }
    get moduleAddress() { {
        return exports.moduleAddress;
    } }
    get moduleName() { {
        return exports.moduleName;
    } }
    get Element() { return Element; }
    get SimpleMap() { return SimpleMap; }
}
exports.App = App;
//# sourceMappingURL=simple_map.js.map