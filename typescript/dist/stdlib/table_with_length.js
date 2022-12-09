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
exports.App = exports.loadParsers = exports.upsert_ = exports.remove_ = exports.new___ = exports.length_ = exports.empty_ = exports.destroy_empty_ = exports.contains_ = exports.borrow_mut_with_default_ = exports.borrow_mut_ = exports.borrow_ = exports.add_ = exports.TableWithLength = exports.ENOT_FOUND = exports.ENOT_EMPTY = exports.EALREADY_EXISTS = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Error = __importStar(require("./error"));
const Table = __importStar(require("./table"));
exports.packageName = "AptosStdlib";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "table_with_length";
exports.EALREADY_EXISTS = (0, move_to_ts_1.u64)("100");
exports.ENOT_EMPTY = (0, move_to_ts_1.u64)("102");
exports.ENOT_FOUND = (0, move_to_ts_1.u64)("101");
class TableWithLength {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.inner = proto['inner'];
        this.length = proto['length'];
    }
    static TableWithLengthParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, TableWithLength);
        return new TableWithLength(proto, typeTag);
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "TableWithLength", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.inner.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.TableWithLength = TableWithLength;
TableWithLength.moduleAddress = exports.moduleAddress;
TableWithLength.moduleName = exports.moduleName;
TableWithLength.structName = "TableWithLength";
TableWithLength.typeParameters = [
    { name: "K", isPhantom: true },
    { name: "V", isPhantom: true }
];
TableWithLength.fields = [
    { name: "inner", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "table", "Table", [new $.TypeParamIdx(0), new $.TypeParamIdx(1)]) },
    { name: "length", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
function add_(table, key, val, $c, $p) {
    Table.add_(table.inner, $.copy(key), val, $c, [$p[0], $p[1]]);
    table.length = ($.copy(table.length)).add((0, move_to_ts_1.u64)("1"));
    return;
}
exports.add_ = add_;
function borrow_(table, key, $c, $p) {
    return Table.borrow_(table.inner, $.copy(key), $c, [$p[0], $p[1]]);
}
exports.borrow_ = borrow_;
function borrow_mut_(table, key, $c, $p) {
    return Table.borrow_mut_(table.inner, $.copy(key), $c, [$p[0], $p[1]]);
}
exports.borrow_mut_ = borrow_mut_;
function borrow_mut_with_default_(table, key, default__, $c, $p) {
    let temp$1;
    if (Table.contains_(table.inner, $.copy(key), $c, [$p[0], $p[1]])) {
        temp$1 = Table.borrow_mut_(table.inner, $.copy(key), $c, [$p[0], $p[1]]);
    }
    else {
        Table.add_(table.inner, $.copy(key), default__, $c, [$p[0], $p[1]]);
        table.length = ($.copy(table.length)).add((0, move_to_ts_1.u64)("1"));
        temp$1 = Table.borrow_mut_(table.inner, $.copy(key), $c, [$p[0], $p[1]]);
    }
    return temp$1;
}
exports.borrow_mut_with_default_ = borrow_mut_with_default_;
function contains_(table, key, $c, $p) {
    return Table.contains_(table.inner, $.copy(key), $c, [$p[0], $p[1]]);
}
exports.contains_ = contains_;
function destroy_empty_(table, $c, $p) {
    if (!($.copy(table.length)).eq(((0, move_to_ts_1.u64)("0")))) {
        throw $.abortCode(Error.invalid_state_($.copy(exports.ENOT_EMPTY), $c));
    }
    let { inner: inner } = table;
    return Table.destroy_(inner, $c, [$p[0], $p[1]]);
}
exports.destroy_empty_ = destroy_empty_;
function empty_(table, $c, $p) {
    return ($.copy(table.length)).eq(((0, move_to_ts_1.u64)("0")));
}
exports.empty_ = empty_;
function length_(table, $c, $p) {
    return $.copy(table.length);
}
exports.length_ = length_;
function new___($c, $p) {
    return new TableWithLength({ inner: Table.new___($c, [$p[0], $p[1]]), length: (0, move_to_ts_1.u64)("0") }, new move_to_ts_2.SimpleStructTag(TableWithLength, [$p[0], $p[1]]));
}
exports.new___ = new___;
function remove_(table, key, $c, $p) {
    let val;
    val = Table.remove_(table.inner, $.copy(key), $c, [$p[0], $p[1]]);
    table.length = ($.copy(table.length)).sub((0, move_to_ts_1.u64)("1"));
    return val;
}
exports.remove_ = remove_;
function upsert_(table, key, value, $c, $p) {
    let ref;
    if (!Table.contains_(table.inner, $.copy(key), $c, [$p[0], $p[1]])) {
        add_(table, $.copy(key), value, $c, [$p[0], $p[1]]);
    }
    else {
        ref = Table.borrow_mut_(table.inner, $.copy(key), $c, [$p[0], $p[1]]);
        $.set(ref, value);
    }
    return;
}
exports.upsert_ = upsert_;
function loadParsers(repo) {
    repo.addParser("0x1::table_with_length::TableWithLength", TableWithLength.TableWithLengthParser);
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
    get TableWithLength() { return TableWithLength; }
}
exports.App = App;
//# sourceMappingURL=table_with_length.js.map