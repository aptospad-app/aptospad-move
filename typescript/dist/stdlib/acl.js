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
exports.App = exports.loadParsers = exports.remove_ = exports.empty_ = exports.contains_ = exports.assert_contains_ = exports.add_ = exports.ACL = exports.ENOT_CONTAIN = exports.ECONTAIN = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Error = __importStar(require("./error"));
const Vector = __importStar(require("./vector"));
exports.packageName = "MoveStdlib";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "acl";
exports.ECONTAIN = (0, move_to_ts_1.u64)("0");
exports.ENOT_CONTAIN = (0, move_to_ts_1.u64)("1");
class ACL {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.list = proto['list'];
    }
    static ACLParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, ACL);
        return new ACL(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "ACL", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.ACL = ACL;
ACL.moduleAddress = exports.moduleAddress;
ACL.moduleName = exports.moduleName;
ACL.structName = "ACL";
ACL.typeParameters = [];
ACL.fields = [
    { name: "list", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.Address) }
];
function add_(acl, addr, $c) {
    let temp$1, temp$2;
    [temp$1, temp$2] = [acl.list, addr];
    if (!!Vector.contains_(temp$1, temp$2, $c, [move_to_ts_2.AtomicTypeTag.Address])) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.ECONTAIN), $c));
    }
    Vector.push_back_(acl.list, $.copy(addr), $c, [move_to_ts_2.AtomicTypeTag.Address]);
    return;
}
exports.add_ = add_;
function assert_contains_(acl, addr, $c) {
    if (!contains_(acl, $.copy(addr), $c)) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.ENOT_CONTAIN), $c));
    }
    return;
}
exports.assert_contains_ = assert_contains_;
function contains_(acl, addr, $c) {
    return Vector.contains_(acl.list, addr, $c, [move_to_ts_2.AtomicTypeTag.Address]);
}
exports.contains_ = contains_;
function empty_($c) {
    return new ACL({ list: Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.Address]) }, new move_to_ts_2.SimpleStructTag(ACL));
}
exports.empty_ = empty_;
function remove_(acl, addr, $c) {
    let temp$1, temp$2, found, index;
    [temp$1, temp$2] = [acl.list, addr];
    [found, index] = Vector.index_of_(temp$1, temp$2, $c, [move_to_ts_2.AtomicTypeTag.Address]);
    if (!found) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.ENOT_CONTAIN), $c));
    }
    Vector.remove_(acl.list, $.copy(index), $c, [move_to_ts_2.AtomicTypeTag.Address]);
    return;
}
exports.remove_ = remove_;
function loadParsers(repo) {
    repo.addParser("0x1::acl::ACL", ACL.ACLParser);
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
    get ACL() { return ACL; }
}
exports.App = App;
//# sourceMappingURL=acl.js.map