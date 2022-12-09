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
exports.App = exports.loadParsers = exports.unpack_ = exports.type_name_ = exports.pack_ = exports.Any = exports.ETYPE_MISMATCH = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Bcs = __importStar(require("./bcs"));
const Error = __importStar(require("./error"));
const From_bcs = __importStar(require("./from_bcs"));
const Type_info = __importStar(require("./type_info"));
exports.packageName = "AptosStdlib";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "any";
exports.ETYPE_MISMATCH = (0, move_to_ts_1.u64)("1");
class Any {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.type_name = proto['type_name'];
        this.data = proto['data'];
    }
    static AnyParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Any);
        return new Any(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Any", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.type_name.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.Any = Any;
Any.moduleAddress = exports.moduleAddress;
Any.moduleName = exports.moduleName;
Any.structName = "Any";
Any.typeParameters = [];
Any.fields = [
    { name: "type_name", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []) },
    { name: "data", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) }
];
function pack_(x, $c, $p) {
    return new Any({ type_name: Type_info.type_name_($c, [$p[0]]), data: Bcs.to_bytes_(x, $c, [$p[0]]) }, new move_to_ts_2.SimpleStructTag(Any));
}
exports.pack_ = pack_;
function type_name_(x, $c) {
    return x.type_name;
}
exports.type_name_ = type_name_;
function unpack_(x, $c, $p) {
    if (!$.deep_eq(Type_info.type_name_($c, [$p[0]]), $.copy(x.type_name))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.ETYPE_MISMATCH), $c));
    }
    return From_bcs.from_bytes_($.copy(x.data), $c, [$p[0]]);
}
exports.unpack_ = unpack_;
function loadParsers(repo) {
    repo.addParser("0x1::any::Any", Any.AnyParser);
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
    get Any() { return Any; }
}
exports.App = App;
//# sourceMappingURL=any.js.map