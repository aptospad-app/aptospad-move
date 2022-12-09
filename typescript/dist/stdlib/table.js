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
exports.TypedTable = exports.App = exports.loadParsers = exports.upsert_ = exports.remove_box_ = exports.remove_ = exports.new_table_handle_ = exports.new___ = exports.drop_unchecked_box_ = exports.destroy_empty_box_ = exports.destroy_ = exports.contains_box_ = exports.contains_ = exports.borrow_mut_with_default_ = exports.borrow_mut_ = exports.borrow_box_mut_ = exports.borrow_box_ = exports.borrow_ = exports.add_box_ = exports.add_ = exports.Table = exports.Box = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
exports.packageName = "AptosStdlib";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "table";
class Box {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.val = proto['val'];
    }
    static BoxParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Box);
        return new Box(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, Box, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, Box, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static makeTag($p) {
        return new move_to_ts_1.StructTag(exports.moduleAddress, exports.moduleName, "Box", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.val.typeTag instanceof move_to_ts_1.StructTag) {
                yield this.val.loadFullState(app);
            }
            this.__app = app;
        });
    }
}
exports.Box = Box;
Box.moduleAddress = exports.moduleAddress;
Box.moduleName = exports.moduleName;
Box.structName = "Box";
Box.typeParameters = [
    { name: "V", isPhantom: false }
];
Box.fields = [
    { name: "val", typeTag: new $.TypeParamIdx(0) }
];
class Table {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.handle = proto['handle'];
    }
    static TableParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Table);
        return new Table(proto, typeTag);
    }
    static makeTag($p) {
        return new move_to_ts_1.StructTag(exports.moduleAddress, exports.moduleName, "Table", $p);
    }
    toTypedTable() { return TypedTable.fromTable(this); }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('Cannot enumertate full state of Table');
        });
    }
}
exports.Table = Table;
Table.moduleAddress = exports.moduleAddress;
Table.moduleName = exports.moduleName;
Table.structName = "Table";
Table.typeParameters = [
    { name: "K", isPhantom: true },
    { name: "V", isPhantom: true }
];
Table.fields = [
    { name: "handle", typeTag: move_to_ts_1.AtomicTypeTag.Address }
];
function add_(table, key, val, $c, $p) {
    return add_box_(table, $.copy(key), new Box({ val: val }, new move_to_ts_1.SimpleStructTag(Box, [$p[1]])), $c, [$p[0], $p[1], new move_to_ts_1.SimpleStructTag(Box, [$p[1]])]);
}
exports.add_ = add_;
function add_box_(table, key, val, $c, $p) {
    return $.aptos_std_table_add_box(table, key, val, $c, [$p[0], $p[1], $p[2]]);
}
exports.add_box_ = add_box_;
function borrow_(table, key, $c, $p) {
    return borrow_box_(table, $.copy(key), $c, [$p[0], $p[1], new move_to_ts_1.SimpleStructTag(Box, [$p[1]])]).val;
}
exports.borrow_ = borrow_;
function borrow_box_(table, key, $c, $p) {
    return $.aptos_std_table_borrow_box(table, key, $c, [$p[0], $p[1], $p[2]]);
}
exports.borrow_box_ = borrow_box_;
function borrow_box_mut_(table, key, $c, $p) {
    return $.aptos_std_table_borrow_box_mut(table, key, $c, [$p[0], $p[1], $p[2]]);
}
exports.borrow_box_mut_ = borrow_box_mut_;
function borrow_mut_(table, key, $c, $p) {
    return borrow_box_mut_(table, $.copy(key), $c, [$p[0], $p[1], new move_to_ts_1.SimpleStructTag(Box, [$p[1]])]).val;
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
    return contains_box_(table, $.copy(key), $c, [$p[0], $p[1], new move_to_ts_1.SimpleStructTag(Box, [$p[1]])]);
}
exports.contains_ = contains_;
function contains_box_(table, key, $c, $p) {
    return $.aptos_std_table_contains_box(table, key, $c, [$p[0], $p[1], $p[2]]);
}
exports.contains_box_ = contains_box_;
function destroy_(table, $c, $p) {
    destroy_empty_box_(table, $c, [$p[0], $p[1], new move_to_ts_1.SimpleStructTag(Box, [$p[1]])]);
    return drop_unchecked_box_(table, $c, [$p[0], $p[1], new move_to_ts_1.SimpleStructTag(Box, [$p[1]])]);
}
exports.destroy_ = destroy_;
function destroy_empty_box_(table, $c, $p) {
    return $.aptos_std_table_destroy_empty_box(table, $c, [$p[0], $p[1], $p[2]]);
}
exports.destroy_empty_box_ = destroy_empty_box_;
function drop_unchecked_box_(table, $c, $p) {
    return $.aptos_std_table_drop_unchecked_box(table, $c, [$p[0], $p[1], $p[2]]);
}
exports.drop_unchecked_box_ = drop_unchecked_box_;
function new___($c, $p) {
    return new Table({ handle: new_table_handle_($c, [$p[0], $p[1]]) }, new move_to_ts_1.SimpleStructTag(Table, [$p[0], $p[1]]));
}
exports.new___ = new___;
function new_table_handle_($c, $p) {
    return $.aptos_std_table_new_table_handle($c, [$p[0], $p[1]]);
}
exports.new_table_handle_ = new_table_handle_;
function remove_(table, key, $c, $p) {
    let { val: val } = remove_box_(table, $.copy(key), $c, [$p[0], $p[1], new move_to_ts_1.SimpleStructTag(Box, [$p[1]])]);
    return val;
}
exports.remove_ = remove_;
function remove_box_(table, key, $c, $p) {
    return $.aptos_std_table_remove_box(table, key, $c, [$p[0], $p[1], $p[2]]);
}
exports.remove_box_ = remove_box_;
function upsert_(table, key, value, $c, $p) {
    let temp$1, temp$2, ref;
    [temp$1, temp$2] = [table, $.copy(key)];
    if (!contains_(temp$1, temp$2, $c, [$p[0], $p[1]])) {
        add_(table, $.copy(key), value, $c, [$p[0], $p[1]]);
    }
    else {
        ref = borrow_mut_(table, $.copy(key), $c, [$p[0], $p[1]]);
        $.set(ref, value);
    }
    return;
}
exports.upsert_ = upsert_;
function loadParsers(repo) {
    repo.addParser("0x1::table::Box", Box.BoxParser);
    repo.addParser("0x1::table::Table", Table.TableParser);
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
    get Box() { return Box; }
    loadBox(owner, $p, /* <V> */ loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield Box.load(this.repo, this.client, owner, $p);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get Table() { return Table; }
}
exports.App = App;
class TypedTable {
    static fromTable(table) {
        const tag = table.typeTag;
        if (!(tag instanceof move_to_ts_1.StructTag)) {
            throw new Error();
        }
        if (tag.getParamlessName() !== '0x1::table::Table') {
            throw new Error();
        }
        if (tag.typeParams.length !== 2) {
            throw new Error();
        }
        const [keyTag, valueTag] = tag.typeParams;
        return new TypedTable(table, keyTag, valueTag);
    }
    constructor(table, keyTag, valueTag) {
        this.table = table;
        this.keyTag = keyTag;
        this.valueTag = valueTag;
    }
    loadEntryRaw(client, key) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield client.getTableItem(this.table.handle.toString(), {
                key_type: $.getTypeTagFullname(this.keyTag),
                value_type: $.getTypeTagFullname(this.valueTag),
                key: $.moveValueToOpenApiObject(key, this.keyTag),
            });
        });
    }
    loadEntry(client, repo, key) {
        return __awaiter(this, void 0, void 0, function* () {
            const rawVal = yield this.loadEntryRaw(client, key);
            return repo.parse(rawVal, this.valueTag);
        });
    }
}
exports.TypedTable = TypedTable;
//# sourceMappingURL=table.js.map