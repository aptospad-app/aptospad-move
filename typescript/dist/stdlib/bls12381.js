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
exports.App = exports.loadParsers = exports.verify_signature_share_internal_ = exports.verify_signature_share_ = exports.verify_proof_of_possession_internal_ = exports.verify_normal_signature_internal_ = exports.verify_normal_signature_ = exports.verify_multisignature_internal_ = exports.verify_multisignature_ = exports.verify_aggregate_signature_internal_ = exports.verify_aggregate_signature_ = exports.validate_pubkey_internal_ = exports.signature_to_bytes_ = exports.signature_subgroup_check_internal_ = exports.signature_subgroup_check_ = exports.signature_from_bytes_ = exports.public_key_with_pop_to_bytes_ = exports.public_key_to_bytes_ = exports.public_key_from_bytes_with_pop_ = exports.public_key_from_bytes_ = exports.proof_of_possession_to_bytes_ = exports.proof_of_possession_from_bytes_ = exports.aggregate_signatures_internal_ = exports.aggregate_signatures_ = exports.aggregate_pubkeys_internal_ = exports.aggregate_pubkeys_ = exports.aggregate_pubkey_to_bytes_ = exports.aggr_or_multi_signature_to_bytes_ = exports.aggr_or_multi_signature_subgroup_check_ = exports.aggr_or_multi_signature_from_bytes_ = exports.Signature = exports.PublicKeyWithPoP = exports.PublicKey = exports.ProofOfPossession = exports.AggrPublicKeysWithPoP = exports.AggrOrMultiSignature = exports.SIGNATURE_SIZE = exports.RANDOM_SIGNATURE = exports.RANDOM_PK = exports.PUBLIC_KEY_NUM_BYTES = exports.EZERO_PUBKEYS = exports.EWRONG_SIZE = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Error = __importStar(require("./error"));
const Option = __importStar(require("./option"));
const Vector = __importStar(require("./vector"));
exports.packageName = "AptosStdlib";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "bls12381";
exports.EWRONG_SIZE = (0, move_to_ts_1.u64)("2");
exports.EZERO_PUBKEYS = (0, move_to_ts_1.u64)("1");
exports.PUBLIC_KEY_NUM_BYTES = (0, move_to_ts_1.u64)("48");
exports.RANDOM_PK = [(0, move_to_ts_1.u8)("138"), (0, move_to_ts_1.u8)("83"), (0, move_to_ts_1.u8)("231"), (0, move_to_ts_1.u8)("174"), (0, move_to_ts_1.u8)("82"), (0, move_to_ts_1.u8)("112"), (0, move_to_ts_1.u8)("227"), (0, move_to_ts_1.u8)("231"), (0, move_to_ts_1.u8)("101"), (0, move_to_ts_1.u8)("205"), (0, move_to_ts_1.u8)("138"), (0, move_to_ts_1.u8)("64"), (0, move_to_ts_1.u8)("50"), (0, move_to_ts_1.u8)("194"), (0, move_to_ts_1.u8)("231"), (0, move_to_ts_1.u8)("124"), (0, move_to_ts_1.u8)("111"), (0, move_to_ts_1.u8)("126"), (0, move_to_ts_1.u8)("135"), (0, move_to_ts_1.u8)("164"), (0, move_to_ts_1.u8)("78"), (0, move_to_ts_1.u8)("187"), (0, move_to_ts_1.u8)("133"), (0, move_to_ts_1.u8)("191"), (0, move_to_ts_1.u8)("40"), (0, move_to_ts_1.u8)("164"), (0, move_to_ts_1.u8)("215"), (0, move_to_ts_1.u8)("134"), (0, move_to_ts_1.u8)("85"), (0, move_to_ts_1.u8)("101"), (0, move_to_ts_1.u8)("105"), (0, move_to_ts_1.u8)("143"), (0, move_to_ts_1.u8)("151"), (0, move_to_ts_1.u8)("83"), (0, move_to_ts_1.u8)("70"), (0, move_to_ts_1.u8)("113"), (0, move_to_ts_1.u8)("66"), (0, move_to_ts_1.u8)("98"), (0, move_to_ts_1.u8)("249"), (0, move_to_ts_1.u8)("228"), (0, move_to_ts_1.u8)("124"), (0, move_to_ts_1.u8)("111"), (0, move_to_ts_1.u8)("62"), (0, move_to_ts_1.u8)("13"), (0, move_to_ts_1.u8)("93"), (0, move_to_ts_1.u8)("149"), (0, move_to_ts_1.u8)("22"), (0, move_to_ts_1.u8)("96")];
exports.RANDOM_SIGNATURE = [(0, move_to_ts_1.u8)("160"), (0, move_to_ts_1.u8)("26"), (0, move_to_ts_1.u8)("101"), (0, move_to_ts_1.u8)("133"), (0, move_to_ts_1.u8)("79"), (0, move_to_ts_1.u8)("152"), (0, move_to_ts_1.u8)("125"), (0, move_to_ts_1.u8)("52"), (0, move_to_ts_1.u8)("52"), (0, move_to_ts_1.u8)("20"), (0, move_to_ts_1.u8)("155"), (0, move_to_ts_1.u8)("127"), (0, move_to_ts_1.u8)("8"), (0, move_to_ts_1.u8)("247"), (0, move_to_ts_1.u8)("7"), (0, move_to_ts_1.u8)("48"), (0, move_to_ts_1.u8)("227"), (0, move_to_ts_1.u8)("11"), (0, move_to_ts_1.u8)("36"), (0, move_to_ts_1.u8)("25"), (0, move_to_ts_1.u8)("132"), (0, move_to_ts_1.u8)("232"), (0, move_to_ts_1.u8)("113"), (0, move_to_ts_1.u8)("43"), (0, move_to_ts_1.u8)("194"), (0, move_to_ts_1.u8)("172"), (0, move_to_ts_1.u8)("168"), (0, move_to_ts_1.u8)("133"), (0, move_to_ts_1.u8)("214"), (0, move_to_ts_1.u8)("50"), (0, move_to_ts_1.u8)("170"), (0, move_to_ts_1.u8)("252"), (0, move_to_ts_1.u8)("237"), (0, move_to_ts_1.u8)("76"), (0, move_to_ts_1.u8)("63"), (0, move_to_ts_1.u8)("102"), (0, move_to_ts_1.u8)("18"), (0, move_to_ts_1.u8)("9"), (0, move_to_ts_1.u8)("222"), (0, move_to_ts_1.u8)("187"), (0, move_to_ts_1.u8)("107"), (0, move_to_ts_1.u8)("28"), (0, move_to_ts_1.u8)("134"), (0, move_to_ts_1.u8)("1"), (0, move_to_ts_1.u8)("50"), (0, move_to_ts_1.u8)("102"), (0, move_to_ts_1.u8)("35"), (0, move_to_ts_1.u8)("204"), (0, move_to_ts_1.u8)("22"), (0, move_to_ts_1.u8)("202"), (0, move_to_ts_1.u8)("47"), (0, move_to_ts_1.u8)("108"), (0, move_to_ts_1.u8)("158"), (0, move_to_ts_1.u8)("220"), (0, move_to_ts_1.u8)("83"), (0, move_to_ts_1.u8)("183"), (0, move_to_ts_1.u8)("184"), (0, move_to_ts_1.u8)("139"), (0, move_to_ts_1.u8)("116"), (0, move_to_ts_1.u8)("53"), (0, move_to_ts_1.u8)("251"), (0, move_to_ts_1.u8)("107"), (0, move_to_ts_1.u8)("5"), (0, move_to_ts_1.u8)("221"), (0, move_to_ts_1.u8)("236"), (0, move_to_ts_1.u8)("228"), (0, move_to_ts_1.u8)("24"), (0, move_to_ts_1.u8)("210"), (0, move_to_ts_1.u8)("195"), (0, move_to_ts_1.u8)("77"), (0, move_to_ts_1.u8)("198"), (0, move_to_ts_1.u8)("172"), (0, move_to_ts_1.u8)("162"), (0, move_to_ts_1.u8)("245"), (0, move_to_ts_1.u8)("161"), (0, move_to_ts_1.u8)("26"), (0, move_to_ts_1.u8)("121"), (0, move_to_ts_1.u8)("230"), (0, move_to_ts_1.u8)("119"), (0, move_to_ts_1.u8)("116"), (0, move_to_ts_1.u8)("88"), (0, move_to_ts_1.u8)("44"), (0, move_to_ts_1.u8)("20"), (0, move_to_ts_1.u8)("8"), (0, move_to_ts_1.u8)("74"), (0, move_to_ts_1.u8)("1"), (0, move_to_ts_1.u8)("220"), (0, move_to_ts_1.u8)("183"), (0, move_to_ts_1.u8)("130"), (0, move_to_ts_1.u8)("14"), (0, move_to_ts_1.u8)("76"), (0, move_to_ts_1.u8)("180"), (0, move_to_ts_1.u8)("186"), (0, move_to_ts_1.u8)("208"), (0, move_to_ts_1.u8)("234"), (0, move_to_ts_1.u8)("141")];
exports.SIGNATURE_SIZE = (0, move_to_ts_1.u64)("96");
class AggrOrMultiSignature {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.bytes = proto['bytes'];
    }
    static AggrOrMultiSignatureParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, AggrOrMultiSignature);
        return new AggrOrMultiSignature(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "AggrOrMultiSignature", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.AggrOrMultiSignature = AggrOrMultiSignature;
AggrOrMultiSignature.moduleAddress = exports.moduleAddress;
AggrOrMultiSignature.moduleName = exports.moduleName;
AggrOrMultiSignature.structName = "AggrOrMultiSignature";
AggrOrMultiSignature.typeParameters = [];
AggrOrMultiSignature.fields = [
    { name: "bytes", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) }
];
class AggrPublicKeysWithPoP {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.bytes = proto['bytes'];
    }
    static AggrPublicKeysWithPoPParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, AggrPublicKeysWithPoP);
        return new AggrPublicKeysWithPoP(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "AggrPublicKeysWithPoP", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.AggrPublicKeysWithPoP = AggrPublicKeysWithPoP;
AggrPublicKeysWithPoP.moduleAddress = exports.moduleAddress;
AggrPublicKeysWithPoP.moduleName = exports.moduleName;
AggrPublicKeysWithPoP.structName = "AggrPublicKeysWithPoP";
AggrPublicKeysWithPoP.typeParameters = [];
AggrPublicKeysWithPoP.fields = [
    { name: "bytes", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) }
];
class ProofOfPossession {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.bytes = proto['bytes'];
    }
    static ProofOfPossessionParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, ProofOfPossession);
        return new ProofOfPossession(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "ProofOfPossession", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.ProofOfPossession = ProofOfPossession;
ProofOfPossession.moduleAddress = exports.moduleAddress;
ProofOfPossession.moduleName = exports.moduleName;
ProofOfPossession.structName = "ProofOfPossession";
ProofOfPossession.typeParameters = [];
ProofOfPossession.fields = [
    { name: "bytes", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) }
];
class PublicKey {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.bytes = proto['bytes'];
    }
    static PublicKeyParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, PublicKey);
        return new PublicKey(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "PublicKey", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.PublicKey = PublicKey;
PublicKey.moduleAddress = exports.moduleAddress;
PublicKey.moduleName = exports.moduleName;
PublicKey.structName = "PublicKey";
PublicKey.typeParameters = [];
PublicKey.fields = [
    { name: "bytes", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) }
];
class PublicKeyWithPoP {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.bytes = proto['bytes'];
    }
    static PublicKeyWithPoPParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, PublicKeyWithPoP);
        return new PublicKeyWithPoP(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "PublicKeyWithPoP", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.PublicKeyWithPoP = PublicKeyWithPoP;
PublicKeyWithPoP.moduleAddress = exports.moduleAddress;
PublicKeyWithPoP.moduleName = exports.moduleName;
PublicKeyWithPoP.structName = "PublicKeyWithPoP";
PublicKeyWithPoP.typeParameters = [];
PublicKeyWithPoP.fields = [
    { name: "bytes", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) }
];
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
function aggr_or_multi_signature_from_bytes_(bytes, $c) {
    if (!(Vector.length_(bytes, $c, [move_to_ts_2.AtomicTypeTag.U8])).eq(($.copy(exports.SIGNATURE_SIZE)))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EWRONG_SIZE), $c));
    }
    return new AggrOrMultiSignature({ bytes: $.copy(bytes) }, new move_to_ts_2.SimpleStructTag(AggrOrMultiSignature));
}
exports.aggr_or_multi_signature_from_bytes_ = aggr_or_multi_signature_from_bytes_;
function aggr_or_multi_signature_subgroup_check_(signature, $c) {
    return signature_subgroup_check_internal_($.copy(signature.bytes), $c);
}
exports.aggr_or_multi_signature_subgroup_check_ = aggr_or_multi_signature_subgroup_check_;
function aggr_or_multi_signature_to_bytes_(sig, $c) {
    return $.copy(sig.bytes);
}
exports.aggr_or_multi_signature_to_bytes_ = aggr_or_multi_signature_to_bytes_;
function aggregate_pubkey_to_bytes_(apk, $c) {
    return $.copy(apk.bytes);
}
exports.aggregate_pubkey_to_bytes_ = aggregate_pubkey_to_bytes_;
function aggregate_pubkeys_(public_keys, $c) {
    let bytes, success;
    [bytes, success] = aggregate_pubkeys_internal_($.copy(public_keys), $c);
    if (!success) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EZERO_PUBKEYS), $c));
    }
    return new AggrPublicKeysWithPoP({ bytes: $.copy(bytes) }, new move_to_ts_2.SimpleStructTag(AggrPublicKeysWithPoP));
}
exports.aggregate_pubkeys_ = aggregate_pubkeys_;
function aggregate_pubkeys_internal_(public_keys, $c) {
    return $.aptos_std_bls12381_aggregate_pubkeys_internal(public_keys, $c);
}
exports.aggregate_pubkeys_internal_ = aggregate_pubkeys_internal_;
function aggregate_signatures_(signatures, $c) {
    let temp$1, bytes, success;
    [bytes, success] = aggregate_signatures_internal_($.copy(signatures), $c);
    if (success) {
        temp$1 = Option.some_(new AggrOrMultiSignature({ bytes: $.copy(bytes) }, new move_to_ts_2.SimpleStructTag(AggrOrMultiSignature)), $c, [new move_to_ts_2.SimpleStructTag(AggrOrMultiSignature)]);
    }
    else {
        temp$1 = Option.none_($c, [new move_to_ts_2.SimpleStructTag(AggrOrMultiSignature)]);
    }
    return temp$1;
}
exports.aggregate_signatures_ = aggregate_signatures_;
function aggregate_signatures_internal_(signatures, $c) {
    return $.aptos_std_bls12381_aggregate_signatures_internal(signatures, $c);
}
exports.aggregate_signatures_internal_ = aggregate_signatures_internal_;
function proof_of_possession_from_bytes_(bytes, $c) {
    return new ProofOfPossession({ bytes: $.copy(bytes) }, new move_to_ts_2.SimpleStructTag(ProofOfPossession));
}
exports.proof_of_possession_from_bytes_ = proof_of_possession_from_bytes_;
function proof_of_possession_to_bytes_(pop, $c) {
    return $.copy(pop.bytes);
}
exports.proof_of_possession_to_bytes_ = proof_of_possession_to_bytes_;
function public_key_from_bytes_(bytes, $c) {
    let temp$1;
    if (validate_pubkey_internal_($.copy(bytes), $c)) {
        temp$1 = Option.some_(new PublicKey({ bytes: $.copy(bytes) }, new move_to_ts_2.SimpleStructTag(PublicKey)), $c, [new move_to_ts_2.SimpleStructTag(PublicKey)]);
    }
    else {
        temp$1 = Option.none_($c, [new move_to_ts_2.SimpleStructTag(PublicKey)]);
    }
    return temp$1;
}
exports.public_key_from_bytes_ = public_key_from_bytes_;
function public_key_from_bytes_with_pop_(pk_bytes, pop, $c) {
    let temp$1;
    if (verify_proof_of_possession_internal_($.copy(pk_bytes), $.copy(pop.bytes), $c)) {
        temp$1 = Option.some_(new PublicKeyWithPoP({ bytes: $.copy(pk_bytes) }, new move_to_ts_2.SimpleStructTag(PublicKeyWithPoP)), $c, [new move_to_ts_2.SimpleStructTag(PublicKeyWithPoP)]);
    }
    else {
        temp$1 = Option.none_($c, [new move_to_ts_2.SimpleStructTag(PublicKeyWithPoP)]);
    }
    return temp$1;
}
exports.public_key_from_bytes_with_pop_ = public_key_from_bytes_with_pop_;
function public_key_to_bytes_(pk, $c) {
    return $.copy(pk.bytes);
}
exports.public_key_to_bytes_ = public_key_to_bytes_;
function public_key_with_pop_to_bytes_(pk, $c) {
    return $.copy(pk.bytes);
}
exports.public_key_with_pop_to_bytes_ = public_key_with_pop_to_bytes_;
function signature_from_bytes_(bytes, $c) {
    return new Signature({ bytes: $.copy(bytes) }, new move_to_ts_2.SimpleStructTag(Signature));
}
exports.signature_from_bytes_ = signature_from_bytes_;
function signature_subgroup_check_(signature, $c) {
    return signature_subgroup_check_internal_($.copy(signature.bytes), $c);
}
exports.signature_subgroup_check_ = signature_subgroup_check_;
function signature_subgroup_check_internal_(signature, $c) {
    return $.aptos_std_bls12381_signature_subgroup_check_internal(signature, $c);
}
exports.signature_subgroup_check_internal_ = signature_subgroup_check_internal_;
function signature_to_bytes_(sig, $c) {
    return $.copy(sig.bytes);
}
exports.signature_to_bytes_ = signature_to_bytes_;
function validate_pubkey_internal_(public_key, $c) {
    return $.aptos_std_bls12381_validate_pubkey_internal(public_key, $c);
}
exports.validate_pubkey_internal_ = validate_pubkey_internal_;
function verify_aggregate_signature_(aggr_sig, public_keys, messages, $c) {
    return verify_aggregate_signature_internal_($.copy(aggr_sig.bytes), $.copy(public_keys), $.copy(messages), $c);
}
exports.verify_aggregate_signature_ = verify_aggregate_signature_;
function verify_aggregate_signature_internal_(aggsig, public_keys, messages, $c) {
    return $.aptos_std_bls12381_verify_aggregate_signature_internal(aggsig, public_keys, messages, $c);
}
exports.verify_aggregate_signature_internal_ = verify_aggregate_signature_internal_;
function verify_multisignature_(multisig, aggr_public_key, message, $c) {
    return verify_multisignature_internal_($.copy(multisig.bytes), $.copy(aggr_public_key.bytes), $.copy(message), $c);
}
exports.verify_multisignature_ = verify_multisignature_;
function verify_multisignature_internal_(multisignature, agg_public_key, message, $c) {
    return $.aptos_std_bls12381_verify_multisignature_internal(multisignature, agg_public_key, message, $c);
}
exports.verify_multisignature_internal_ = verify_multisignature_internal_;
function verify_normal_signature_(signature, public_key, message, $c) {
    return verify_normal_signature_internal_($.copy(signature.bytes), $.copy(public_key.bytes), $.copy(message), $c);
}
exports.verify_normal_signature_ = verify_normal_signature_;
function verify_normal_signature_internal_(signature, public_key, message, $c) {
    return $.aptos_std_bls12381_verify_normal_signature_internal(signature, public_key, message, $c);
}
exports.verify_normal_signature_internal_ = verify_normal_signature_internal_;
function verify_proof_of_possession_internal_(public_key, proof_of_possesion, $c) {
    return $.aptos_std_bls12381_verify_proof_of_possession_internal(public_key, proof_of_possesion, $c);
}
exports.verify_proof_of_possession_internal_ = verify_proof_of_possession_internal_;
function verify_signature_share_(signature_share, public_key, message, $c) {
    return verify_signature_share_internal_($.copy(signature_share.bytes), $.copy(public_key.bytes), $.copy(message), $c);
}
exports.verify_signature_share_ = verify_signature_share_;
function verify_signature_share_internal_(signature_share, public_key, message, $c) {
    return $.aptos_std_bls12381_verify_signature_share_internal(signature_share, public_key, message, $c);
}
exports.verify_signature_share_internal_ = verify_signature_share_internal_;
function loadParsers(repo) {
    repo.addParser("0x1::bls12381::AggrOrMultiSignature", AggrOrMultiSignature.AggrOrMultiSignatureParser);
    repo.addParser("0x1::bls12381::AggrPublicKeysWithPoP", AggrPublicKeysWithPoP.AggrPublicKeysWithPoPParser);
    repo.addParser("0x1::bls12381::ProofOfPossession", ProofOfPossession.ProofOfPossessionParser);
    repo.addParser("0x1::bls12381::PublicKey", PublicKey.PublicKeyParser);
    repo.addParser("0x1::bls12381::PublicKeyWithPoP", PublicKeyWithPoP.PublicKeyWithPoPParser);
    repo.addParser("0x1::bls12381::Signature", Signature.SignatureParser);
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
    get AggrOrMultiSignature() { return AggrOrMultiSignature; }
    get AggrPublicKeysWithPoP() { return AggrPublicKeysWithPoP; }
    get ProofOfPossession() { return ProofOfPossession; }
    get PublicKey() { return PublicKey; }
    get PublicKeyWithPoP() { return PublicKeyWithPoP; }
    get Signature() { return Signature; }
}
exports.App = App;
//# sourceMappingURL=bls12381.js.map