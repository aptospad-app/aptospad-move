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
exports.App = exports.loadParsers = exports.verify_type_of_generic_ = exports.verify_type_of_ = exports.type_of_ = exports.type_name_ = exports.struct_name_ = exports.module_name_ = exports.account_address_ = exports.TypeInfo = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
exports.packageName = "AptosStdlib";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "type_info";
class TypeInfo {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.account_address = proto['account_address'];
        this.module_name = proto['module_name'];
        this.struct_name = proto['struct_name'];
    }
    static TypeInfoParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, TypeInfo);
        return new TypeInfo(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_1.StructTag(exports.moduleAddress, exports.moduleName, "TypeInfo", []);
    }
    typeFullname() {
        return `${this.account_address.toShortString()}::${$.u8str(this.module_name)}::${$.u8str(this.struct_name)}`;
    }
    toTypeTag() { return $.parseTypeTagOrThrow(this.typeFullname()); }
    moduleName() { return this.toTypeTag().module; }
    structName() { return this.toTypeTag().name; }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.TypeInfo = TypeInfo;
TypeInfo.moduleAddress = exports.moduleAddress;
TypeInfo.moduleName = exports.moduleName;
TypeInfo.structName = "TypeInfo";
TypeInfo.typeParameters = [];
TypeInfo.fields = [
    { name: "account_address", typeTag: move_to_ts_1.AtomicTypeTag.Address },
    { name: "module_name", typeTag: new move_to_ts_1.VectorTag(move_to_ts_1.AtomicTypeTag.U8) },
    { name: "struct_name", typeTag: new move_to_ts_1.VectorTag(move_to_ts_1.AtomicTypeTag.U8) }
];
function account_address_(type_info, $c) {
    return $.copy(type_info.account_address);
}
exports.account_address_ = account_address_;
function module_name_(type_info, $c) {
    return $.copy(type_info.module_name);
}
exports.module_name_ = module_name_;
function struct_name_(type_info, $c) {
    return $.copy(type_info.struct_name);
}
exports.struct_name_ = struct_name_;
function type_name_($c, $p) {
    return $.aptos_std_type_info_type_name($c, [$p[0]]);
}
exports.type_name_ = type_name_;
function type_of_($c, $p) {
    return $.aptos_std_type_info_type_of($c, [$p[0]]);
}
exports.type_of_ = type_of_;
function verify_type_of_($c) {
    let account_address, module_name, struct_name, type_info;
    type_info = type_of_($c, [new move_to_ts_1.SimpleStructTag(TypeInfo)]);
    account_address = account_address_(type_info, $c);
    module_name = module_name_(type_info, $c);
    struct_name = struct_name_(type_info, $c);
    ;
    return;
}
exports.verify_type_of_ = verify_type_of_;
function verify_type_of_generic_($c, $p) {
    let account_address, module_name, struct_name, type_info;
    type_info = type_of_($c, [$p[0]]);
    account_address = account_address_(type_info, $c);
    module_name = module_name_(type_info, $c);
    struct_name = struct_name_(type_info, $c);
    ;
    return;
}
exports.verify_type_of_generic_ = verify_type_of_generic_;
function loadParsers(repo) {
    repo.addParser("0x1::type_info::TypeInfo", TypeInfo.TypeInfoParser);
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
    get TypeInfo() { return TypeInfo; }
}
exports.App = App;
//# sourceMappingURL=type_info.js.map