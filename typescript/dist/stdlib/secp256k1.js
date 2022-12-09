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
exports.App = exports.loadParsers = exports.ecdsa_signature_to_bytes_ = exports.ecdsa_signature_from_bytes_ = exports.ecdsa_recover_internal_ = exports.ecdsa_recover_ = exports.ecdsa_raw_public_key_to_bytes_ = exports.ecdsa_raw_public_key_from_64_bytes_ = exports.ECDSASignature = exports.ECDSARawPublicKey = exports.SIGNATURE_NUM_BYTES = exports.RAW_PUBLIC_KEY_NUM_BYTES = exports.E_DESERIALIZE = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Error = __importStar(require("./error"));
const Option = __importStar(require("./option"));
const Vector = __importStar(require("./vector"));
exports.packageName = "AptosStdlib";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "secp256k1";
exports.E_DESERIALIZE = (0, move_to_ts_1.u64)("1");
exports.RAW_PUBLIC_KEY_NUM_BYTES = (0, move_to_ts_1.u64)("64");
exports.SIGNATURE_NUM_BYTES = (0, move_to_ts_1.u64)("64");
class ECDSARawPublicKey {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.bytes = proto['bytes'];
    }
    static ECDSARawPublicKeyParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, ECDSARawPublicKey);
        return new ECDSARawPublicKey(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "ECDSARawPublicKey", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.ECDSARawPublicKey = ECDSARawPublicKey;
ECDSARawPublicKey.moduleAddress = exports.moduleAddress;
ECDSARawPublicKey.moduleName = exports.moduleName;
ECDSARawPublicKey.structName = "ECDSARawPublicKey";
ECDSARawPublicKey.typeParameters = [];
ECDSARawPublicKey.fields = [
    { name: "bytes", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) }
];
class ECDSASignature {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.bytes = proto['bytes'];
    }
    static ECDSASignatureParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, ECDSASignature);
        return new ECDSASignature(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "ECDSASignature", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.ECDSASignature = ECDSASignature;
ECDSASignature.moduleAddress = exports.moduleAddress;
ECDSASignature.moduleName = exports.moduleName;
ECDSASignature.structName = "ECDSASignature";
ECDSASignature.typeParameters = [];
ECDSASignature.fields = [
    { name: "bytes", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) }
];
function ecdsa_raw_public_key_from_64_bytes_(bytes, $c) {
    if (!(Vector.length_(bytes, $c, [move_to_ts_2.AtomicTypeTag.U8])).eq(($.copy(exports.RAW_PUBLIC_KEY_NUM_BYTES)))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.E_DESERIALIZE), $c));
    }
    return new ECDSARawPublicKey({ bytes: $.copy(bytes) }, new move_to_ts_2.SimpleStructTag(ECDSARawPublicKey));
}
exports.ecdsa_raw_public_key_from_64_bytes_ = ecdsa_raw_public_key_from_64_bytes_;
function ecdsa_raw_public_key_to_bytes_(pk, $c) {
    return $.copy(pk.bytes);
}
exports.ecdsa_raw_public_key_to_bytes_ = ecdsa_raw_public_key_to_bytes_;
function ecdsa_recover_(message, recovery_id, signature, $c) {
    let temp$1, pk, success;
    [pk, success] = ecdsa_recover_internal_($.copy(message), $.copy(recovery_id), $.copy(signature.bytes), $c);
    if (success) {
        temp$1 = Option.some_(ecdsa_raw_public_key_from_64_bytes_($.copy(pk), $c), $c, [new move_to_ts_2.SimpleStructTag(ECDSARawPublicKey)]);
    }
    else {
        temp$1 = Option.none_($c, [new move_to_ts_2.SimpleStructTag(ECDSARawPublicKey)]);
    }
    return temp$1;
}
exports.ecdsa_recover_ = ecdsa_recover_;
function ecdsa_recover_internal_(message, recovery_id, signature, $c) {
    return $.aptos_std_secp256k1_ecdsa_recover_internal(message, recovery_id, signature, $c);
}
exports.ecdsa_recover_internal_ = ecdsa_recover_internal_;
function ecdsa_signature_from_bytes_(bytes, $c) {
    if (!(Vector.length_(bytes, $c, [move_to_ts_2.AtomicTypeTag.U8])).eq(($.copy(exports.SIGNATURE_NUM_BYTES)))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.E_DESERIALIZE), $c));
    }
    return new ECDSASignature({ bytes: $.copy(bytes) }, new move_to_ts_2.SimpleStructTag(ECDSASignature));
}
exports.ecdsa_signature_from_bytes_ = ecdsa_signature_from_bytes_;
function ecdsa_signature_to_bytes_(sig, $c) {
    return $.copy(sig.bytes);
}
exports.ecdsa_signature_to_bytes_ = ecdsa_signature_to_bytes_;
function loadParsers(repo) {
    repo.addParser("0x1::secp256k1::ECDSARawPublicKey", ECDSARawPublicKey.ECDSARawPublicKeyParser);
    repo.addParser("0x1::secp256k1::ECDSASignature", ECDSASignature.ECDSASignatureParser);
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
    get ECDSARawPublicKey() { return ECDSARawPublicKey; }
    get ECDSASignature() { return ECDSASignature; }
}
exports.App = App;
//# sourceMappingURL=secp256k1.js.map