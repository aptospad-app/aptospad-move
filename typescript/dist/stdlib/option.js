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
exports.App = exports.loadParsers = exports.to_vec_ = exports.swap_or_fill_ = exports.swap_ = exports.some_ = exports.none_ = exports.is_some_ = exports.is_none_ = exports.get_with_default_ = exports.fill_ = exports.extract_ = exports.destroy_with_default_ = exports.destroy_some_ = exports.destroy_none_ = exports.contains_ = exports.borrow_with_default_ = exports.borrow_mut_ = exports.borrow_ = exports.Option = exports.EOPTION_NOT_SET = exports.EOPTION_IS_SET = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Vector = __importStar(require("./vector"));
exports.packageName = "MoveStdlib";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "option";
exports.EOPTION_IS_SET = (0, move_to_ts_1.u64)("262144");
exports.EOPTION_NOT_SET = (0, move_to_ts_1.u64)("262145");
class Option {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.vec = proto['vec'];
    }
    static OptionParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Option);
        return new Option(proto, typeTag);
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Option", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.Option = Option;
Option.moduleAddress = exports.moduleAddress;
Option.moduleName = exports.moduleName;
Option.structName = "Option";
Option.typeParameters = [
    { name: "Element", isPhantom: false }
];
Option.fields = [
    { name: "vec", typeTag: new move_to_ts_2.VectorTag(new $.TypeParamIdx(0)) }
];
function borrow_(t, $c, $p) {
    if (!is_some_(t, $c, [$p[0]])) {
        throw $.abortCode($.copy(exports.EOPTION_NOT_SET));
    }
    return Vector.borrow_(t.vec, (0, move_to_ts_1.u64)("0"), $c, [$p[0]]);
}
exports.borrow_ = borrow_;
function borrow_mut_(t, $c, $p) {
    if (!is_some_(t, $c, [$p[0]])) {
        throw $.abortCode($.copy(exports.EOPTION_NOT_SET));
    }
    return Vector.borrow_mut_(t.vec, (0, move_to_ts_1.u64)("0"), $c, [$p[0]]);
}
exports.borrow_mut_ = borrow_mut_;
function borrow_with_default_(t, default_ref, $c, $p) {
    let temp$1, vec_ref;
    vec_ref = t.vec;
    if (Vector.is_empty_(vec_ref, $c, [$p[0]])) {
        temp$1 = default_ref;
    }
    else {
        temp$1 = Vector.borrow_(vec_ref, (0, move_to_ts_1.u64)("0"), $c, [$p[0]]);
    }
    return temp$1;
}
exports.borrow_with_default_ = borrow_with_default_;
function contains_(t, e_ref, $c, $p) {
    return Vector.contains_(t.vec, e_ref, $c, [$p[0]]);
}
exports.contains_ = contains_;
function destroy_none_(t, $c, $p) {
    if (!is_none_(t, $c, [$p[0]])) {
        throw $.abortCode($.copy(exports.EOPTION_IS_SET));
    }
    let { vec: vec } = t;
    return Vector.destroy_empty_(vec, $c, [$p[0]]);
}
exports.destroy_none_ = destroy_none_;
function destroy_some_(t, $c, $p) {
    let elem;
    if (!is_some_(t, $c, [$p[0]])) {
        throw $.abortCode($.copy(exports.EOPTION_NOT_SET));
    }
    let { vec: vec } = t;
    elem = Vector.pop_back_(vec, $c, [$p[0]]);
    Vector.destroy_empty_(vec, $c, [$p[0]]);
    return elem;
}
exports.destroy_some_ = destroy_some_;
function destroy_with_default_(t, default__, $c, $p) {
    let temp$1;
    let { vec: vec } = t;
    if (Vector.is_empty_(vec, $c, [$p[0]])) {
        temp$1 = default__;
    }
    else {
        temp$1 = Vector.pop_back_(vec, $c, [$p[0]]);
    }
    return temp$1;
}
exports.destroy_with_default_ = destroy_with_default_;
function extract_(t, $c, $p) {
    if (!is_some_(t, $c, [$p[0]])) {
        throw $.abortCode($.copy(exports.EOPTION_NOT_SET));
    }
    return Vector.pop_back_(t.vec, $c, [$p[0]]);
}
exports.extract_ = extract_;
function fill_(t, e, $c, $p) {
    let vec_ref;
    vec_ref = t.vec;
    if (Vector.is_empty_(vec_ref, $c, [$p[0]])) {
        Vector.push_back_(vec_ref, e, $c, [$p[0]]);
    }
    else {
        throw $.abortCode($.copy(exports.EOPTION_IS_SET));
    }
    return;
}
exports.fill_ = fill_;
function get_with_default_(t, default__, $c, $p) {
    let temp$1, vec_ref;
    vec_ref = t.vec;
    if (Vector.is_empty_(vec_ref, $c, [$p[0]])) {
        temp$1 = $.copy(default__);
    }
    else {
        temp$1 = $.copy(Vector.borrow_(vec_ref, (0, move_to_ts_1.u64)("0"), $c, [$p[0]]));
    }
    return temp$1;
}
exports.get_with_default_ = get_with_default_;
function is_none_(t, $c, $p) {
    return Vector.is_empty_(t.vec, $c, [$p[0]]);
}
exports.is_none_ = is_none_;
function is_some_(t, $c, $p) {
    return !Vector.is_empty_(t.vec, $c, [$p[0]]);
}
exports.is_some_ = is_some_;
function none_($c, $p) {
    return new Option({ vec: Vector.empty_($c, [$p[0]]) }, new move_to_ts_2.SimpleStructTag(Option, [$p[0]]));
}
exports.none_ = none_;
function some_(e, $c, $p) {
    return new Option({ vec: Vector.singleton_(e, $c, [$p[0]]) }, new move_to_ts_2.SimpleStructTag(Option, [$p[0]]));
}
exports.some_ = some_;
function swap_(t, e, $c, $p) {
    let old_value, vec_ref;
    if (!is_some_(t, $c, [$p[0]])) {
        throw $.abortCode($.copy(exports.EOPTION_NOT_SET));
    }
    vec_ref = t.vec;
    old_value = Vector.pop_back_(vec_ref, $c, [$p[0]]);
    Vector.push_back_(vec_ref, e, $c, [$p[0]]);
    return old_value;
}
exports.swap_ = swap_;
function swap_or_fill_(t, e, $c, $p) {
    let temp$1, old_value, vec_ref;
    vec_ref = t.vec;
    if (Vector.is_empty_(vec_ref, $c, [$p[0]])) {
        temp$1 = none_($c, [$p[0]]);
    }
    else {
        temp$1 = some_(Vector.pop_back_(vec_ref, $c, [$p[0]]), $c, [$p[0]]);
    }
    old_value = temp$1;
    Vector.push_back_(vec_ref, e, $c, [$p[0]]);
    return old_value;
}
exports.swap_or_fill_ = swap_or_fill_;
function to_vec_(t, $c, $p) {
    let { vec: vec } = t;
    return vec;
}
exports.to_vec_ = to_vec_;
function loadParsers(repo) {
    repo.addParser("0x1::option::Option", Option.OptionParser);
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
    get Option() { return Option; }
}
exports.App = App;
//# sourceMappingURL=option.js.map