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
exports.App = exports.loadParsers = exports.id_creator_address_ = exports.id_creation_num_ = exports.id_ = exports.eq_id_ = exports.creator_address_ = exports.creation_num_ = exports.create_id_ = exports.create_ = exports.ID = exports.GUID = exports.EGUID_GENERATOR_NOT_PUBLISHED = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
exports.packageName = "AptosFramework";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "guid";
exports.EGUID_GENERATOR_NOT_PUBLISHED = (0, move_to_ts_1.u64)("0");
class GUID {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.id = proto['id'];
    }
    static GUIDParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, GUID);
        return new GUID(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "GUID", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.id.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.GUID = GUID;
GUID.moduleAddress = exports.moduleAddress;
GUID.moduleName = exports.moduleName;
GUID.structName = "GUID";
GUID.typeParameters = [];
GUID.fields = [
    { name: "id", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "guid", "ID", []) }
];
class ID {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.creation_num = proto['creation_num'];
        this.addr = proto['addr'];
    }
    static IDParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, ID);
        return new ID(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "ID", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.ID = ID;
ID.moduleAddress = exports.moduleAddress;
ID.moduleName = exports.moduleName;
ID.structName = "ID";
ID.typeParameters = [];
ID.fields = [
    { name: "creation_num", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "addr", typeTag: move_to_ts_2.AtomicTypeTag.Address }
];
function create_(addr, creation_num_ref, $c) {
    let creation_num;
    creation_num = $.copy(creation_num_ref);
    $.set(creation_num_ref, ($.copy(creation_num)).add((0, move_to_ts_1.u64)("1")));
    return new GUID({ id: new ID({ creation_num: $.copy(creation_num), addr: $.copy(addr) }, new move_to_ts_2.SimpleStructTag(ID)) }, new move_to_ts_2.SimpleStructTag(GUID));
}
exports.create_ = create_;
function create_id_(addr, creation_num, $c) {
    return new ID({ creation_num: $.copy(creation_num), addr: $.copy(addr) }, new move_to_ts_2.SimpleStructTag(ID));
}
exports.create_id_ = create_id_;
function creation_num_(guid, $c) {
    return $.copy(guid.id.creation_num);
}
exports.creation_num_ = creation_num_;
function creator_address_(guid, $c) {
    return $.copy(guid.id.addr);
}
exports.creator_address_ = creator_address_;
function eq_id_(guid, id, $c) {
    return $.deep_eq(guid.id, id);
}
exports.eq_id_ = eq_id_;
function id_(guid, $c) {
    return $.copy(guid.id);
}
exports.id_ = id_;
function id_creation_num_(id, $c) {
    return $.copy(id.creation_num);
}
exports.id_creation_num_ = id_creation_num_;
function id_creator_address_(id, $c) {
    return $.copy(id.addr);
}
exports.id_creator_address_ = id_creator_address_;
function loadParsers(repo) {
    repo.addParser("0x1::guid::GUID", GUID.GUIDParser);
    repo.addParser("0x1::guid::ID", ID.IDParser);
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
    get GUID() { return GUID; }
    get ID() { return ID; }
}
exports.App = App;
//# sourceMappingURL=guid.js.map