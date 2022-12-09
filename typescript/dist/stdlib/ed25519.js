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
exports.App = exports.loadParsers = exports.validated_public_key_to_bytes_ = exports.validated_public_key_to_authentication_key_ = exports.unvalidated_public_key_to_bytes_ = exports.unvalidated_public_key_to_authentication_key_ = exports.signature_verify_strict_t_ = exports.signature_verify_strict_internal_ = exports.signature_verify_strict_ = exports.signature_to_bytes_ = exports.public_key_validate_internal_ = exports.public_key_validate_ = exports.public_key_to_unvalidated_ = exports.public_key_into_unvalidated_ = exports.public_key_bytes_to_authentication_key_ = exports.new_validated_public_key_from_bytes_ = exports.new_unvalidated_public_key_from_bytes_ = exports.new_signed_message_ = exports.new_signature_from_bytes_ = exports.ValidatedPublicKey = exports.UnvalidatedPublicKey = exports.SignedMessage = exports.Signature = exports.SIGNATURE_SCHEME_ID = exports.SIGNATURE_NUM_BYTES = exports.PUBLIC_KEY_NUM_BYTES = exports.E_WRONG_SIGNATURE_SIZE = exports.E_WRONG_PUBKEY_SIZE = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Bcs = __importStar(require("./bcs"));
const Error = __importStar(require("./error"));
const Hash = __importStar(require("./hash"));
const Option = __importStar(require("./option"));
const Type_info = __importStar(require("./type_info"));
const Vector = __importStar(require("./vector"));
exports.packageName = "AptosStdlib";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "ed25519";
exports.E_WRONG_PUBKEY_SIZE = (0, move_to_ts_1.u64)("1");
exports.E_WRONG_SIGNATURE_SIZE = (0, move_to_ts_1.u64)("2");
exports.PUBLIC_KEY_NUM_BYTES = (0, move_to_ts_1.u64)("32");
exports.SIGNATURE_NUM_BYTES = (0, move_to_ts_1.u64)("64");
exports.SIGNATURE_SCHEME_ID = (0, move_to_ts_1.u8)("0");
class Signature {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.bytes = proto['bytes'];
    }
    static SignatureParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Signature);
        return new Signature(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Signature", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.Signature = Signature;
Signature.moduleAddress = exports.moduleAddress;
Signature.moduleName = exports.moduleName;
Signature.structName = "Signature";
Signature.typeParameters = [];
Signature.fields = [
    { name: "bytes", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) }
];
class SignedMessage {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.type_info = proto['type_info'];
        this.inner = proto['inner'];
    }
    static SignedMessageParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, SignedMessage);
        return new SignedMessage(proto, typeTag);
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "SignedMessage", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.type_info.loadFullState(app);
            if (this.inner.typeTag instanceof move_to_ts_2.StructTag) {
                yield this.inner.loadFullState(app);
            }
            this.__app = app;
        });
    }
}
exports.SignedMessage = SignedMessage;
SignedMessage.moduleAddress = exports.moduleAddress;
SignedMessage.moduleName = exports.moduleName;
SignedMessage.structName = "SignedMessage";
SignedMessage.typeParameters = [
    { name: "MessageType", isPhantom: false }
];
SignedMessage.fields = [
    { name: "type_info", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "type_info", "TypeInfo", []) },
    { name: "inner", typeTag: new $.TypeParamIdx(0) }
];
class UnvalidatedPublicKey {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.bytes = proto['bytes'];
    }
    static UnvalidatedPublicKeyParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, UnvalidatedPublicKey);
        return new UnvalidatedPublicKey(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "UnvalidatedPublicKey", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.UnvalidatedPublicKey = UnvalidatedPublicKey;
UnvalidatedPublicKey.moduleAddress = exports.moduleAddress;
UnvalidatedPublicKey.moduleName = exports.moduleName;
UnvalidatedPublicKey.structName = "UnvalidatedPublicKey";
UnvalidatedPublicKey.typeParameters = [];
UnvalidatedPublicKey.fields = [
    { name: "bytes", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) }
];
class ValidatedPublicKey {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.bytes = proto['bytes'];
    }
    static ValidatedPublicKeyParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, ValidatedPublicKey);
        return new ValidatedPublicKey(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "ValidatedPublicKey", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.ValidatedPublicKey = ValidatedPublicKey;
ValidatedPublicKey.moduleAddress = exports.moduleAddress;
ValidatedPublicKey.moduleName = exports.moduleName;
ValidatedPublicKey.structName = "ValidatedPublicKey";
ValidatedPublicKey.typeParameters = [];
ValidatedPublicKey.fields = [
    { name: "bytes", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) }
];
function new_signature_from_bytes_(bytes, $c) {
    if (!(Vector.length_(bytes, $c, [move_to_ts_2.AtomicTypeTag.U8])).eq(($.copy(exports.SIGNATURE_NUM_BYTES)))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.E_WRONG_SIGNATURE_SIZE), $c));
    }
    return new Signature({ bytes: $.copy(bytes) }, new move_to_ts_2.SimpleStructTag(Signature));
}
exports.new_signature_from_bytes_ = new_signature_from_bytes_;
function new_signed_message_(data, $c, $p) {
    return new SignedMessage({ type_info: Type_info.type_of_($c, [$p[0]]), inner: data }, new move_to_ts_2.SimpleStructTag(SignedMessage, [$p[0]]));
}
exports.new_signed_message_ = new_signed_message_;
function new_unvalidated_public_key_from_bytes_(bytes, $c) {
    if (!(Vector.length_(bytes, $c, [move_to_ts_2.AtomicTypeTag.U8])).eq(($.copy(exports.PUBLIC_KEY_NUM_BYTES)))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.E_WRONG_PUBKEY_SIZE), $c));
    }
    return new UnvalidatedPublicKey({ bytes: $.copy(bytes) }, new move_to_ts_2.SimpleStructTag(UnvalidatedPublicKey));
}
exports.new_unvalidated_public_key_from_bytes_ = new_unvalidated_public_key_from_bytes_;
function new_validated_public_key_from_bytes_(bytes, $c) {
    let temp$1;
    if (public_key_validate_internal_($.copy(bytes), $c)) {
        temp$1 = Option.some_(new ValidatedPublicKey({ bytes: $.copy(bytes) }, new move_to_ts_2.SimpleStructTag(ValidatedPublicKey)), $c, [new move_to_ts_2.SimpleStructTag(ValidatedPublicKey)]);
    }
    else {
        temp$1 = Option.none_($c, [new move_to_ts_2.SimpleStructTag(ValidatedPublicKey)]);
    }
    return temp$1;
}
exports.new_validated_public_key_from_bytes_ = new_validated_public_key_from_bytes_;
function public_key_bytes_to_authentication_key_(pk_bytes, $c) {
    Vector.push_back_(pk_bytes, $.copy(exports.SIGNATURE_SCHEME_ID), $c, [move_to_ts_2.AtomicTypeTag.U8]);
    return Hash.sha3_256_($.copy(pk_bytes), $c);
}
exports.public_key_bytes_to_authentication_key_ = public_key_bytes_to_authentication_key_;
function public_key_into_unvalidated_(pk, $c) {
    return new UnvalidatedPublicKey({ bytes: $.copy(pk.bytes) }, new move_to_ts_2.SimpleStructTag(UnvalidatedPublicKey));
}
exports.public_key_into_unvalidated_ = public_key_into_unvalidated_;
function public_key_to_unvalidated_(pk, $c) {
    return new UnvalidatedPublicKey({ bytes: $.copy(pk.bytes) }, new move_to_ts_2.SimpleStructTag(UnvalidatedPublicKey));
}
exports.public_key_to_unvalidated_ = public_key_to_unvalidated_;
function public_key_validate_(pk, $c) {
    return new_validated_public_key_from_bytes_($.copy(pk.bytes), $c);
}
exports.public_key_validate_ = public_key_validate_;
function public_key_validate_internal_(bytes, $c) {
    return $.aptos_std_ed25519_public_key_validate_internal(bytes, $c);
}
exports.public_key_validate_internal_ = public_key_validate_internal_;
function signature_to_bytes_(sig, $c) {
    return $.copy(sig.bytes);
}
exports.signature_to_bytes_ = signature_to_bytes_;
function signature_verify_strict_(signature, public_key, message, $c) {
    return signature_verify_strict_internal_($.copy(signature.bytes), $.copy(public_key.bytes), $.copy(message), $c);
}
exports.signature_verify_strict_ = signature_verify_strict_;
function signature_verify_strict_internal_(signature, public_key, message, $c) {
    return $.aptos_std_ed25519_signature_verify_strict_internal(signature, public_key, message, $c);
}
exports.signature_verify_strict_internal_ = signature_verify_strict_internal_;
function signature_verify_strict_t_(signature, public_key, data, $c, $p) {
    let encoded;
    encoded = new SignedMessage({ type_info: Type_info.type_of_($c, [$p[0]]), inner: data }, new move_to_ts_2.SimpleStructTag(SignedMessage, [$p[0]]));
    return signature_verify_strict_internal_($.copy(signature.bytes), $.copy(public_key.bytes), Bcs.to_bytes_(encoded, $c, [new move_to_ts_2.SimpleStructTag(SignedMessage, [$p[0]])]), $c);
}
exports.signature_verify_strict_t_ = signature_verify_strict_t_;
function unvalidated_public_key_to_authentication_key_(pk, $c) {
    return public_key_bytes_to_authentication_key_($.copy(pk.bytes), $c);
}
exports.unvalidated_public_key_to_authentication_key_ = unvalidated_public_key_to_authentication_key_;
function unvalidated_public_key_to_bytes_(pk, $c) {
    return $.copy(pk.bytes);
}
exports.unvalidated_public_key_to_bytes_ = unvalidated_public_key_to_bytes_;
function validated_public_key_to_authentication_key_(pk, $c) {
    return public_key_bytes_to_authentication_key_($.copy(pk.bytes), $c);
}
exports.validated_public_key_to_authentication_key_ = validated_public_key_to_authentication_key_;
function validated_public_key_to_bytes_(pk, $c) {
    return $.copy(pk.bytes);
}
exports.validated_public_key_to_bytes_ = validated_public_key_to_bytes_;
function loadParsers(repo) {
    repo.addParser("0x1::ed25519::Signature", Signature.SignatureParser);
    repo.addParser("0x1::ed25519::SignedMessage", SignedMessage.SignedMessageParser);
    repo.addParser("0x1::ed25519::UnvalidatedPublicKey", UnvalidatedPublicKey.UnvalidatedPublicKeyParser);
    repo.addParser("0x1::ed25519::ValidatedPublicKey", ValidatedPublicKey.ValidatedPublicKeyParser);
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
    get Signature() { return Signature; }
    get SignedMessage() { return SignedMessage; }
    get UnvalidatedPublicKey() { return UnvalidatedPublicKey; }
    get ValidatedPublicKey() { return ValidatedPublicKey; }
}
exports.App = App;
//# sourceMappingURL=ed25519.js.map