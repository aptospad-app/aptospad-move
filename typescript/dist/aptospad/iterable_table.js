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
exports.App = exports.loadParsers = exports.tail_key_ = exports.remove_iter_ = exports.remove_ = exports.new___ = exports.length_ = exports.head_key_ = exports.empty_ = exports.destroy_empty_ = exports.contains_ = exports.borrow_mut_with_default_ = exports.borrow_mut_ = exports.borrow_iter_mut_ = exports.borrow_iter_ = exports.borrow_ = exports.append_ = exports.add_ = exports.IterableValue = exports.IterableTable = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Stdlib = __importStar(require("../stdlib"));
exports.packageName = "AptosPad";
exports.moduleAddress = new aptos_1.HexString("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea");
exports.moduleName = "iterable_table";
class IterableTable {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.inner = proto['inner'];
        this.head = proto['head'];
        this.tail = proto['tail'];
    }
    static IterableTableParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, IterableTable);
        return new IterableTable(proto, typeTag);
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "IterableTable", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.inner.loadFullState(app);
            yield this.head.loadFullState(app);
            yield this.tail.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.IterableTable = IterableTable;
IterableTable.moduleAddress = exports.moduleAddress;
IterableTable.moduleName = exports.moduleName;
IterableTable.structName = "IterableTable";
IterableTable.typeParameters = [
    { name: "K", isPhantom: false },
    { name: "V", isPhantom: false }
];
IterableTable.fields = [
    { name: "inner", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "table_with_length", "TableWithLength", [new $.TypeParamIdx(0), new move_to_ts_2.StructTag(new aptos_1.HexString("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea"), "iterable_table", "IterableValue", [new $.TypeParamIdx(0), new $.TypeParamIdx(1)])]) },
    { name: "head", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "option", "Option", [new $.TypeParamIdx(0)]) },
    { name: "tail", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "option", "Option", [new $.TypeParamIdx(0)]) }
];
class IterableValue {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.val = proto['val'];
        this.prev = proto['prev'];
        this.next = proto['next'];
    }
    static IterableValueParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, IterableValue);
        return new IterableValue(proto, typeTag);
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "IterableValue", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.val.typeTag instanceof move_to_ts_2.StructTag) {
                yield this.val.loadFullState(app);
            }
            yield this.prev.loadFullState(app);
            yield this.next.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.IterableValue = IterableValue;
IterableValue.moduleAddress = exports.moduleAddress;
IterableValue.moduleName = exports.moduleName;
IterableValue.structName = "IterableValue";
IterableValue.typeParameters = [
    { name: "K", isPhantom: false },
    { name: "V", isPhantom: false }
];
IterableValue.fields = [
    { name: "val", typeTag: new $.TypeParamIdx(1) },
    { name: "prev", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "option", "Option", [new $.TypeParamIdx(0)]) },
    { name: "next", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "option", "Option", [new $.TypeParamIdx(0)]) }
];
function add_(table, key, val, $c, $p) {
    let k, wrapped_value;
    wrapped_value = new IterableValue({ val: val, prev: $.copy(table.tail), next: Stdlib.Option.none_($c, [$p[0]]) }, new move_to_ts_2.SimpleStructTag(IterableValue, [$p[0], $p[1]]));
    Stdlib.Table_with_length.add_(table.inner, $.copy(key), wrapped_value, $c, [$p[0], new move_to_ts_2.SimpleStructTag(IterableValue, [$p[0], $p[1]])]);
    if (Stdlib.Option.is_some_(table.tail, $c, [$p[0]])) {
        k = Stdlib.Option.borrow_(table.tail, $c, [$p[0]]);
        Stdlib.Table_with_length.borrow_mut_(table.inner, $.copy(k), $c, [$p[0], new move_to_ts_2.SimpleStructTag(IterableValue, [$p[0], $p[1]])]).next = Stdlib.Option.some_($.copy(key), $c, [$p[0]]);
    }
    else {
        table.head = Stdlib.Option.some_($.copy(key), $c, [$p[0]]);
    }
    table.tail = Stdlib.Option.some_($.copy(key), $c, [$p[0]]);
    return;
}
exports.add_ = add_;
function append_(v1, v2, $c, $p) {
    let key, next, val;
    key = head_key_(v2, $c, [$p[0], $p[1]]);
    while (Stdlib.Option.is_some_(key, $c, [$p[0]])) {
        {
            [val, , next] = remove_iter_(v2, $.copy(Stdlib.Option.borrow_(key, $c, [$p[0]])), $c, [$p[0], $p[1]]);
            add_(v1, $.copy(Stdlib.Option.borrow_(key, $c, [$p[0]])), val, $c, [$p[0], $p[1]]);
            key = $.copy(next);
        }
    }
    return;
}
exports.append_ = append_;
function borrow_(table, key, $c, $p) {
    return Stdlib.Table_with_length.borrow_(table.inner, $.copy(key), $c, [$p[0], new move_to_ts_2.SimpleStructTag(IterableValue, [$p[0], $p[1]])]).val;
}
exports.borrow_ = borrow_;
function borrow_iter_(table, key, $c, $p) {
    let v;
    v = Stdlib.Table_with_length.borrow_(table.inner, $.copy(key), $c, [$p[0], new move_to_ts_2.SimpleStructTag(IterableValue, [$p[0], $p[1]])]);
    return [v.val, $.copy(v.prev), $.copy(v.next)];
}
exports.borrow_iter_ = borrow_iter_;
function borrow_iter_mut_(table, key, $c, $p) {
    let v;
    v = Stdlib.Table_with_length.borrow_mut_(table.inner, $.copy(key), $c, [$p[0], new move_to_ts_2.SimpleStructTag(IterableValue, [$p[0], $p[1]])]);
    return [v.val, $.copy(v.prev), $.copy(v.next)];
}
exports.borrow_iter_mut_ = borrow_iter_mut_;
function borrow_mut_(table, key, $c, $p) {
    return Stdlib.Table_with_length.borrow_mut_(table.inner, $.copy(key), $c, [$p[0], new move_to_ts_2.SimpleStructTag(IterableValue, [$p[0], $p[1]])]).val;
}
exports.borrow_mut_ = borrow_mut_;
function borrow_mut_with_default_(table, key, default__, $c, $p) {
    let temp$1, temp$2;
    [temp$1, temp$2] = [table, $.copy(key)];
    if (!contains_(temp$1, temp$2, $c, [$p[0], $p[1]])) {
        add_(table, $.copy(key), default__, $c, [$p[0], $p[1]]);
    }
    else {
    }
    return borrow_mut_(table, $.copy(key), $c, [$p[0], $p[1]]);
}
exports.borrow_mut_with_default_ = borrow_mut_with_default_;
function contains_(table, key, $c, $p) {
    return Stdlib.Table_with_length.contains_(table.inner, $.copy(key), $c, [$p[0], new move_to_ts_2.SimpleStructTag(IterableValue, [$p[0], $p[1]])]);
}
exports.contains_ = contains_;
function destroy_empty_(table, $c, $p) {
    if (!empty_(table, $c, [$p[0], $p[1]])) {
        throw $.abortCode((0, move_to_ts_1.u64)("0"));
    }
    if (!Stdlib.Option.is_none_(table.head, $c, [$p[0]])) {
        throw $.abortCode((0, move_to_ts_1.u64)("0"));
    }
    if (!Stdlib.Option.is_none_(table.tail, $c, [$p[0]])) {
        throw $.abortCode((0, move_to_ts_1.u64)("0"));
    }
    let { inner: inner } = table;
    Stdlib.Table_with_length.destroy_empty_(inner, $c, [$p[0], new move_to_ts_2.SimpleStructTag(IterableValue, [$p[0], $p[1]])]);
    return;
}
exports.destroy_empty_ = destroy_empty_;
function empty_(table, $c, $p) {
    return Stdlib.Table_with_length.empty_(table.inner, $c, [$p[0], new move_to_ts_2.SimpleStructTag(IterableValue, [$p[0], $p[1]])]);
}
exports.empty_ = empty_;
function head_key_(table, $c, $p) {
    return $.copy(table.head);
}
exports.head_key_ = head_key_;
function length_(table, $c, $p) {
    return Stdlib.Table_with_length.length_(table.inner, $c, [$p[0], new move_to_ts_2.SimpleStructTag(IterableValue, [$p[0], $p[1]])]);
}
exports.length_ = length_;
function new___($c, $p) {
    return new IterableTable({ inner: Stdlib.Table_with_length.new___($c, [$p[0], new move_to_ts_2.SimpleStructTag(IterableValue, [$p[0], $p[1]])]), head: Stdlib.Option.none_($c, [$p[0]]), tail: Stdlib.Option.none_($c, [$p[0]]) }, new move_to_ts_2.SimpleStructTag(IterableTable, [$p[0], $p[1]]));
}
exports.new___ = new___;
function remove_(table, key, $c, $p) {
    let val;
    [val, ,] = remove_iter_(table, $.copy(key), $c, [$p[0], $p[1]]);
    return val;
}
exports.remove_ = remove_;
function remove_iter_(table, key, $c, $p) {
    let key__1, key__2, val;
    val = Stdlib.Table_with_length.remove_(table.inner, $.copy(key), $c, [$p[0], new move_to_ts_2.SimpleStructTag(IterableValue, [$p[0], $p[1]])]);
    if (Stdlib.Option.contains_(table.tail, key, $c, [$p[0]])) {
        table.tail = $.copy(val.prev);
    }
    else {
    }
    if (Stdlib.Option.contains_(table.head, key, $c, [$p[0]])) {
        table.head = $.copy(val.next);
    }
    else {
    }
    if (Stdlib.Option.is_some_(val.prev, $c, [$p[0]])) {
        key__1 = Stdlib.Option.borrow_(val.prev, $c, [$p[0]]);
        Stdlib.Table_with_length.borrow_mut_(table.inner, $.copy(key__1), $c, [$p[0], new move_to_ts_2.SimpleStructTag(IterableValue, [$p[0], $p[1]])]).next = $.copy(val.next);
    }
    else {
    }
    if (Stdlib.Option.is_some_(val.next, $c, [$p[0]])) {
        key__2 = Stdlib.Option.borrow_(val.next, $c, [$p[0]]);
        Stdlib.Table_with_length.borrow_mut_(table.inner, $.copy(key__2), $c, [$p[0], new move_to_ts_2.SimpleStructTag(IterableValue, [$p[0], $p[1]])]).prev = $.copy(val.prev);
    }
    else {
    }
    let { val: val__3, prev: prev, next: next } = val;
    return [val__3, $.copy(prev), $.copy(next)];
}
exports.remove_iter_ = remove_iter_;
function tail_key_(table, $c, $p) {
    return $.copy(table.tail);
}
exports.tail_key_ = tail_key_;
function loadParsers(repo) {
    repo.addParser("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea::iterable_table::IterableTable", IterableTable.IterableTableParser);
    repo.addParser("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea::iterable_table::IterableValue", IterableValue.IterableValueParser);
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
    get IterableTable() { return IterableTable; }
    get IterableValue() { return IterableValue; }
}
exports.App = App;
//# sourceMappingURL=iterable_table.js.map