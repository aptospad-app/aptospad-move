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
exports.get_signer_capability_address_ = exports.get_sequence_number_ = exports.get_guid_next_creation_num_ = exports.get_authentication_key_ = exports.exists_at_ = exports.create_signer_with_capability_ = exports.create_signer_ = exports.create_resource_address_ = exports.create_resource_account_ = exports.create_guid_ = exports.create_framework_reserved_account_ = exports.create_authorized_signer_ = exports.create_account_unchecked_ = exports.create_account_ = exports.assert_valid_signature_and_get_auth_key_ = exports.SignerCapabilityOfferProofChallengeV2 = exports.SignerCapabilityOfferProofChallenge = exports.SignerCapability = exports.RotationProofChallenge = exports.RotationCapabilityOfferProofChallenge = exports.RotationCapability = exports.OriginatingAddress = exports.KeyRotationEvent = exports.CoinRegisterEvent = exports.CapabilityOffer = exports.Account = exports.ZERO_AUTH_KEY = exports.MULTI_ED25519_SCHEME = exports.MAX_U64 = exports.EWRONG_CURRENT_PUBLIC_KEY = exports.ESEQUENCE_NUMBER_TOO_BIG = exports.ERESOURCE_ACCCOUNT_EXISTS = exports.EOUT_OF_GAS = exports.ENO_VALID_FRAMEWORK_RESERVED_ADDRESS = exports.ENO_SUCH_SIGNER_CAPABILITY = exports.ENO_CAPABILITY = exports.EMALFORMED_AUTHENTICATION_KEY = exports.EINVALID_SCHEME = exports.EINVALID_PROOF_OF_KNOWLEDGE = exports.EINVALID_ORIGINATING_ADDRESS = exports.EINVALID_ACCEPT_ROTATION_CAPABILITY = exports.ED25519_SCHEME = exports.ECANNOT_RESERVED_ADDRESS = exports.EACCOUNT_DOES_NOT_EXIST = exports.EACCOUNT_ALREADY_USED = exports.EACCOUNT_ALREADY_EXISTS = exports.DERIVE_RESOURCE_ACCOUNT_SCHEME = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
exports.App = exports.loadParsers = exports.rotate_authentication_key_internal_ = exports.buildPayload_rotate_authentication_key = exports.rotate_authentication_key_ = exports.buildPayload_revoke_signer_capability = exports.revoke_signer_capability_ = exports.register_coin_ = exports.buildPayload_offer_signer_capability = exports.offer_signer_capability_ = exports.new_event_handle_ = exports.initialize_ = exports.increment_sequence_number_ = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Bcs = __importStar(require("./bcs"));
const Ed25519 = __importStar(require("./ed25519"));
const Error = __importStar(require("./error"));
const Event = __importStar(require("./event"));
const From_bcs = __importStar(require("./from_bcs"));
const Guid = __importStar(require("./guid"));
const Hash = __importStar(require("./hash"));
const Multi_ed25519 = __importStar(require("./multi_ed25519"));
const Option = __importStar(require("./option"));
const Signer = __importStar(require("./signer"));
const System_addresses = __importStar(require("./system_addresses"));
const Table = __importStar(require("./table"));
const Type_info = __importStar(require("./type_info"));
const Vector = __importStar(require("./vector"));
exports.packageName = "AptosFramework";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "account";
exports.DERIVE_RESOURCE_ACCOUNT_SCHEME = (0, move_to_ts_1.u8)("255");
exports.EACCOUNT_ALREADY_EXISTS = (0, move_to_ts_1.u64)("1");
exports.EACCOUNT_ALREADY_USED = (0, move_to_ts_1.u64)("16");
exports.EACCOUNT_DOES_NOT_EXIST = (0, move_to_ts_1.u64)("2");
exports.ECANNOT_RESERVED_ADDRESS = (0, move_to_ts_1.u64)("5");
exports.ED25519_SCHEME = (0, move_to_ts_1.u8)("0");
exports.EINVALID_ACCEPT_ROTATION_CAPABILITY = (0, move_to_ts_1.u64)("10");
exports.EINVALID_ORIGINATING_ADDRESS = (0, move_to_ts_1.u64)("13");
exports.EINVALID_PROOF_OF_KNOWLEDGE = (0, move_to_ts_1.u64)("8");
exports.EINVALID_SCHEME = (0, move_to_ts_1.u64)("12");
exports.EMALFORMED_AUTHENTICATION_KEY = (0, move_to_ts_1.u64)("4");
exports.ENO_CAPABILITY = (0, move_to_ts_1.u64)("9");
exports.ENO_SUCH_SIGNER_CAPABILITY = (0, move_to_ts_1.u64)("14");
exports.ENO_VALID_FRAMEWORK_RESERVED_ADDRESS = (0, move_to_ts_1.u64)("11");
exports.EOUT_OF_GAS = (0, move_to_ts_1.u64)("6");
exports.ERESOURCE_ACCCOUNT_EXISTS = (0, move_to_ts_1.u64)("15");
exports.ESEQUENCE_NUMBER_TOO_BIG = (0, move_to_ts_1.u64)("3");
exports.EWRONG_CURRENT_PUBLIC_KEY = (0, move_to_ts_1.u64)("7");
exports.MAX_U64 = (0, move_to_ts_1.u128)("18446744073709551615");
exports.MULTI_ED25519_SCHEME = (0, move_to_ts_1.u8)("1");
exports.ZERO_AUTH_KEY = [(0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0")];
class Account {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.authentication_key = proto['authentication_key'];
        this.sequence_number = proto['sequence_number'];
        this.guid_creation_num = proto['guid_creation_num'];
        this.coin_register_events = proto['coin_register_events'];
        this.key_rotation_events = proto['key_rotation_events'];
        this.rotation_capability_offer = proto['rotation_capability_offer'];
        this.signer_capability_offer = proto['signer_capability_offer'];
    }
    static AccountParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Account);
        return new Account(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, Account, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, Account, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Account", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.coin_register_events.loadFullState(app);
            yield this.key_rotation_events.loadFullState(app);
            yield this.rotation_capability_offer.loadFullState(app);
            yield this.signer_capability_offer.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.Account = Account;
Account.moduleAddress = exports.moduleAddress;
Account.moduleName = exports.moduleName;
Account.structName = "Account";
Account.typeParameters = [];
Account.fields = [
    { name: "authentication_key", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) },
    { name: "sequence_number", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "guid_creation_num", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "coin_register_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "account", "CoinRegisterEvent", [])]) },
    { name: "key_rotation_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "account", "KeyRotationEvent", [])]) },
    { name: "rotation_capability_offer", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "account", "CapabilityOffer", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "account", "RotationCapability", [])]) },
    { name: "signer_capability_offer", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "account", "CapabilityOffer", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "account", "SignerCapability", [])]) }
];
class CapabilityOffer {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.for__ = proto['for__'];
    }
    static CapabilityOfferParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, CapabilityOffer);
        return new CapabilityOffer(proto, typeTag);
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "CapabilityOffer", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.for__.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.CapabilityOffer = CapabilityOffer;
CapabilityOffer.moduleAddress = exports.moduleAddress;
CapabilityOffer.moduleName = exports.moduleName;
CapabilityOffer.structName = "CapabilityOffer";
CapabilityOffer.typeParameters = [
    { name: "T", isPhantom: true }
];
CapabilityOffer.fields = [
    { name: "for__", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "option", "Option", [move_to_ts_2.AtomicTypeTag.Address]) }
];
class CoinRegisterEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.type_info = proto['type_info'];
    }
    static CoinRegisterEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, CoinRegisterEvent);
        return new CoinRegisterEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "CoinRegisterEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.type_info.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.CoinRegisterEvent = CoinRegisterEvent;
CoinRegisterEvent.moduleAddress = exports.moduleAddress;
CoinRegisterEvent.moduleName = exports.moduleName;
CoinRegisterEvent.structName = "CoinRegisterEvent";
CoinRegisterEvent.typeParameters = [];
CoinRegisterEvent.fields = [
    { name: "type_info", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "type_info", "TypeInfo", []) }
];
class KeyRotationEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.old_authentication_key = proto['old_authentication_key'];
        this.new_authentication_key = proto['new_authentication_key'];
    }
    static KeyRotationEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, KeyRotationEvent);
        return new KeyRotationEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "KeyRotationEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.KeyRotationEvent = KeyRotationEvent;
KeyRotationEvent.moduleAddress = exports.moduleAddress;
KeyRotationEvent.moduleName = exports.moduleName;
KeyRotationEvent.structName = "KeyRotationEvent";
KeyRotationEvent.typeParameters = [];
KeyRotationEvent.fields = [
    { name: "old_authentication_key", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) },
    { name: "new_authentication_key", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) }
];
class OriginatingAddress {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.address_map = proto['address_map'];
    }
    static OriginatingAddressParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, OriginatingAddress);
        return new OriginatingAddress(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, OriginatingAddress, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, OriginatingAddress, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "OriginatingAddress", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.address_map.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.OriginatingAddress = OriginatingAddress;
OriginatingAddress.moduleAddress = exports.moduleAddress;
OriginatingAddress.moduleName = exports.moduleName;
OriginatingAddress.structName = "OriginatingAddress";
OriginatingAddress.typeParameters = [];
OriginatingAddress.fields = [
    { name: "address_map", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "table", "Table", [move_to_ts_2.AtomicTypeTag.Address, move_to_ts_2.AtomicTypeTag.Address]) }
];
class RotationCapability {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.account = proto['account'];
    }
    static RotationCapabilityParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, RotationCapability);
        return new RotationCapability(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "RotationCapability", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.RotationCapability = RotationCapability;
RotationCapability.moduleAddress = exports.moduleAddress;
RotationCapability.moduleName = exports.moduleName;
RotationCapability.structName = "RotationCapability";
RotationCapability.typeParameters = [];
RotationCapability.fields = [
    { name: "account", typeTag: move_to_ts_2.AtomicTypeTag.Address }
];
class RotationCapabilityOfferProofChallenge {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.sequence_number = proto['sequence_number'];
        this.recipient_address = proto['recipient_address'];
    }
    static RotationCapabilityOfferProofChallengeParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, RotationCapabilityOfferProofChallenge);
        return new RotationCapabilityOfferProofChallenge(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "RotationCapabilityOfferProofChallenge", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.RotationCapabilityOfferProofChallenge = RotationCapabilityOfferProofChallenge;
RotationCapabilityOfferProofChallenge.moduleAddress = exports.moduleAddress;
RotationCapabilityOfferProofChallenge.moduleName = exports.moduleName;
RotationCapabilityOfferProofChallenge.structName = "RotationCapabilityOfferProofChallenge";
RotationCapabilityOfferProofChallenge.typeParameters = [];
RotationCapabilityOfferProofChallenge.fields = [
    { name: "sequence_number", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "recipient_address", typeTag: move_to_ts_2.AtomicTypeTag.Address }
];
class RotationProofChallenge {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.sequence_number = proto['sequence_number'];
        this.originator = proto['originator'];
        this.current_auth_key = proto['current_auth_key'];
        this.new_public_key = proto['new_public_key'];
    }
    static RotationProofChallengeParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, RotationProofChallenge);
        return new RotationProofChallenge(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "RotationProofChallenge", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.RotationProofChallenge = RotationProofChallenge;
RotationProofChallenge.moduleAddress = exports.moduleAddress;
RotationProofChallenge.moduleName = exports.moduleName;
RotationProofChallenge.structName = "RotationProofChallenge";
RotationProofChallenge.typeParameters = [];
RotationProofChallenge.fields = [
    { name: "sequence_number", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "originator", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "current_auth_key", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "new_public_key", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) }
];
class SignerCapability {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.account = proto['account'];
    }
    static SignerCapabilityParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, SignerCapability);
        return new SignerCapability(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "SignerCapability", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.SignerCapability = SignerCapability;
SignerCapability.moduleAddress = exports.moduleAddress;
SignerCapability.moduleName = exports.moduleName;
SignerCapability.structName = "SignerCapability";
SignerCapability.typeParameters = [];
SignerCapability.fields = [
    { name: "account", typeTag: move_to_ts_2.AtomicTypeTag.Address }
];
class SignerCapabilityOfferProofChallenge {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.sequence_number = proto['sequence_number'];
        this.recipient_address = proto['recipient_address'];
    }
    static SignerCapabilityOfferProofChallengeParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, SignerCapabilityOfferProofChallenge);
        return new SignerCapabilityOfferProofChallenge(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "SignerCapabilityOfferProofChallenge", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.SignerCapabilityOfferProofChallenge = SignerCapabilityOfferProofChallenge;
SignerCapabilityOfferProofChallenge.moduleAddress = exports.moduleAddress;
SignerCapabilityOfferProofChallenge.moduleName = exports.moduleName;
SignerCapabilityOfferProofChallenge.structName = "SignerCapabilityOfferProofChallenge";
SignerCapabilityOfferProofChallenge.typeParameters = [];
SignerCapabilityOfferProofChallenge.fields = [
    { name: "sequence_number", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "recipient_address", typeTag: move_to_ts_2.AtomicTypeTag.Address }
];
class SignerCapabilityOfferProofChallengeV2 {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.sequence_number = proto['sequence_number'];
        this.source_address = proto['source_address'];
        this.recipient_address = proto['recipient_address'];
    }
    static SignerCapabilityOfferProofChallengeV2Parser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, SignerCapabilityOfferProofChallengeV2);
        return new SignerCapabilityOfferProofChallengeV2(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "SignerCapabilityOfferProofChallengeV2", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.SignerCapabilityOfferProofChallengeV2 = SignerCapabilityOfferProofChallengeV2;
SignerCapabilityOfferProofChallengeV2.moduleAddress = exports.moduleAddress;
SignerCapabilityOfferProofChallengeV2.moduleName = exports.moduleName;
SignerCapabilityOfferProofChallengeV2.structName = "SignerCapabilityOfferProofChallengeV2";
SignerCapabilityOfferProofChallengeV2.typeParameters = [];
SignerCapabilityOfferProofChallengeV2.fields = [
    { name: "sequence_number", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "source_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "recipient_address", typeTag: move_to_ts_2.AtomicTypeTag.Address }
];
function assert_valid_signature_and_get_auth_key_(scheme, public_key_bytes, signature, challenge, $c) {
    let temp$3, temp$4, pk, pk__1, sig, sig__2;
    if (($.copy(scheme)).eq(($.copy(exports.ED25519_SCHEME)))) {
        pk = Ed25519.new_unvalidated_public_key_from_bytes_($.copy(public_key_bytes), $c);
        sig = Ed25519.new_signature_from_bytes_($.copy(signature), $c);
        if (!Ed25519.signature_verify_strict_t_(sig, pk, $.copy(challenge), $c, [new move_to_ts_2.SimpleStructTag(RotationProofChallenge)])) {
            throw $.abortCode(Error.invalid_argument_($.copy(exports.EINVALID_PROOF_OF_KNOWLEDGE), $c));
        }
        temp$4 = Ed25519.unvalidated_public_key_to_authentication_key_(pk, $c);
    }
    else {
        if (($.copy(scheme)).eq(($.copy(exports.MULTI_ED25519_SCHEME)))) {
            pk__1 = Multi_ed25519.new_unvalidated_public_key_from_bytes_($.copy(public_key_bytes), $c);
            sig__2 = Multi_ed25519.new_signature_from_bytes_($.copy(signature), $c);
            if (!Multi_ed25519.signature_verify_strict_t_(sig__2, pk__1, $.copy(challenge), $c, [new move_to_ts_2.SimpleStructTag(RotationProofChallenge)])) {
                throw $.abortCode(Error.invalid_argument_($.copy(exports.EINVALID_PROOF_OF_KNOWLEDGE), $c));
            }
            temp$3 = Multi_ed25519.unvalidated_public_key_to_authentication_key_(pk__1, $c);
        }
        else {
            throw $.abortCode(Error.invalid_argument_($.copy(exports.EINVALID_SCHEME), $c));
        }
        temp$4 = temp$3;
    }
    return temp$4;
}
exports.assert_valid_signature_and_get_auth_key_ = assert_valid_signature_and_get_auth_key_;
function create_account_(new_address, $c) {
    let temp$1, temp$2;
    if (!!$c.exists(new move_to_ts_2.SimpleStructTag(Account), $.copy(new_address))) {
        throw $.abortCode(Error.already_exists_($.copy(exports.EACCOUNT_ALREADY_EXISTS), $c));
    }
    if ((($.copy(new_address)).hex() !== (new aptos_1.HexString("0x0")).hex())) {
        temp$1 = (($.copy(new_address)).hex() !== (new aptos_1.HexString("0x1")).hex());
    }
    else {
        temp$1 = false;
    }
    if (temp$1) {
        temp$2 = (($.copy(new_address)).hex() !== (new aptos_1.HexString("0x3")).hex());
    }
    else {
        temp$2 = false;
    }
    if (!temp$2) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.ECANNOT_RESERVED_ADDRESS), $c));
    }
    return create_account_unchecked_($.copy(new_address), $c);
}
exports.create_account_ = create_account_;
function create_account_unchecked_(new_address, $c) {
    let authentication_key, coin_register_events, guid_creation_num, guid_for_coin, guid_for_rotation, key_rotation_events, new_account;
    new_account = create_signer_($.copy(new_address), $c);
    authentication_key = Bcs.to_bytes_(new_address, $c, [move_to_ts_2.AtomicTypeTag.Address]);
    if (!(Vector.length_(authentication_key, $c, [move_to_ts_2.AtomicTypeTag.U8])).eq(((0, move_to_ts_1.u64)("32")))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EMALFORMED_AUTHENTICATION_KEY), $c));
    }
    guid_creation_num = (0, move_to_ts_1.u64)("0");
    guid_for_coin = Guid.create_($.copy(new_address), guid_creation_num, $c);
    coin_register_events = Event.new_event_handle_(guid_for_coin, $c, [new move_to_ts_2.SimpleStructTag(CoinRegisterEvent)]);
    guid_for_rotation = Guid.create_($.copy(new_address), guid_creation_num, $c);
    key_rotation_events = Event.new_event_handle_(guid_for_rotation, $c, [new move_to_ts_2.SimpleStructTag(KeyRotationEvent)]);
    $c.move_to(new move_to_ts_2.SimpleStructTag(Account), new_account, new Account({ authentication_key: $.copy(authentication_key), sequence_number: (0, move_to_ts_1.u64)("0"), guid_creation_num: $.copy(guid_creation_num), coin_register_events: coin_register_events, key_rotation_events: key_rotation_events, rotation_capability_offer: new CapabilityOffer({ for: Option.none_($c, [move_to_ts_2.AtomicTypeTag.Address]) }, new move_to_ts_2.SimpleStructTag(CapabilityOffer, [new move_to_ts_2.SimpleStructTag(RotationCapability)])), signer_capability_offer: new CapabilityOffer({ for: Option.none_($c, [move_to_ts_2.AtomicTypeTag.Address]) }, new move_to_ts_2.SimpleStructTag(CapabilityOffer, [new move_to_ts_2.SimpleStructTag(SignerCapability)])) }, new move_to_ts_2.SimpleStructTag(Account)));
    return new_account;
}
exports.create_account_unchecked_ = create_account_unchecked_;
function create_authorized_signer_(account, offerer_address, $c) {
    let account_resource, addr;
    if (!exists_at_($.copy(offerer_address), $c)) {
        throw $.abortCode(Error.not_found_($.copy(exports.EACCOUNT_DOES_NOT_EXIST), $c));
    }
    account_resource = $c.borrow_global(new move_to_ts_2.SimpleStructTag(Account), $.copy(offerer_address));
    addr = Signer.address_of_(account, $c);
    if (!Option.contains_(account_resource.signer_capability_offer.for__, addr, $c, [move_to_ts_2.AtomicTypeTag.Address])) {
        throw $.abortCode(Error.not_found_($.copy(exports.ENO_SUCH_SIGNER_CAPABILITY), $c));
    }
    return create_signer_($.copy(offerer_address), $c);
}
exports.create_authorized_signer_ = create_authorized_signer_;
function create_framework_reserved_account_(addr, $c) {
    let temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7, temp$8, temp$9, signer, signer_cap;
    if ((($.copy(addr)).hex() === (new aptos_1.HexString("0x1")).hex())) {
        temp$1 = true;
    }
    else {
        temp$1 = (($.copy(addr)).hex() === (new aptos_1.HexString("0x2")).hex());
    }
    if (temp$1) {
        temp$2 = true;
    }
    else {
        temp$2 = (($.copy(addr)).hex() === (new aptos_1.HexString("0x3")).hex());
    }
    if (temp$2) {
        temp$3 = true;
    }
    else {
        temp$3 = (($.copy(addr)).hex() === (new aptos_1.HexString("0x4")).hex());
    }
    if (temp$3) {
        temp$4 = true;
    }
    else {
        temp$4 = (($.copy(addr)).hex() === (new aptos_1.HexString("0x5")).hex());
    }
    if (temp$4) {
        temp$5 = true;
    }
    else {
        temp$5 = (($.copy(addr)).hex() === (new aptos_1.HexString("0x6")).hex());
    }
    if (temp$5) {
        temp$6 = true;
    }
    else {
        temp$6 = (($.copy(addr)).hex() === (new aptos_1.HexString("0x7")).hex());
    }
    if (temp$6) {
        temp$7 = true;
    }
    else {
        temp$7 = (($.copy(addr)).hex() === (new aptos_1.HexString("0x8")).hex());
    }
    if (temp$7) {
        temp$8 = true;
    }
    else {
        temp$8 = (($.copy(addr)).hex() === (new aptos_1.HexString("0x9")).hex());
    }
    if (temp$8) {
        temp$9 = true;
    }
    else {
        temp$9 = (($.copy(addr)).hex() === (new aptos_1.HexString("0xa")).hex());
    }
    if (!temp$9) {
        throw $.abortCode(Error.permission_denied_($.copy(exports.ENO_VALID_FRAMEWORK_RESERVED_ADDRESS), $c));
    }
    signer = create_account_unchecked_($.copy(addr), $c);
    signer_cap = new SignerCapability({ account: $.copy(addr) }, new move_to_ts_2.SimpleStructTag(SignerCapability));
    return [signer, signer_cap];
}
exports.create_framework_reserved_account_ = create_framework_reserved_account_;
function create_guid_(account_signer, $c) {
    let account, addr;
    addr = Signer.address_of_(account_signer, $c);
    account = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(Account), $.copy(addr));
    return Guid.create_($.copy(addr), account.guid_creation_num, $c);
}
exports.create_guid_ = create_guid_;
function create_resource_account_(source, seed, $c) {
    let temp$1, temp$2, account, account__3, resource, resource_addr, signer_cap;
    temp$1 = Signer.address_of_(source, $c);
    resource_addr = create_resource_address_(temp$1, $.copy(seed), $c);
    if (exists_at_($.copy(resource_addr), $c)) {
        account = $c.borrow_global(new move_to_ts_2.SimpleStructTag(Account), $.copy(resource_addr));
        if (!Option.is_none_(account.signer_capability_offer.for__, $c, [move_to_ts_2.AtomicTypeTag.Address])) {
            throw $.abortCode(Error.already_exists_($.copy(exports.ERESOURCE_ACCCOUNT_EXISTS), $c));
        }
        if (!($.copy(account.sequence_number)).eq(((0, move_to_ts_1.u64)("0")))) {
            throw $.abortCode(Error.invalid_state_($.copy(exports.EACCOUNT_ALREADY_USED), $c));
        }
        temp$2 = create_signer_($.copy(resource_addr), $c);
    }
    else {
        temp$2 = create_account_unchecked_($.copy(resource_addr), $c);
    }
    resource = temp$2;
    rotate_authentication_key_internal_(resource, $.copy(exports.ZERO_AUTH_KEY), $c);
    account__3 = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(Account), $.copy(resource_addr));
    account__3.signer_capability_offer.for__ = Option.some_($.copy(resource_addr), $c, [move_to_ts_2.AtomicTypeTag.Address]);
    signer_cap = new SignerCapability({ account: $.copy(resource_addr) }, new move_to_ts_2.SimpleStructTag(SignerCapability));
    return [resource, signer_cap];
}
exports.create_resource_account_ = create_resource_account_;
function create_resource_address_(source, seed, $c) {
    let bytes;
    bytes = Bcs.to_bytes_(source, $c, [move_to_ts_2.AtomicTypeTag.Address]);
    Vector.append_(bytes, $.copy(seed), $c, [move_to_ts_2.AtomicTypeTag.U8]);
    Vector.push_back_(bytes, $.copy(exports.DERIVE_RESOURCE_ACCOUNT_SCHEME), $c, [move_to_ts_2.AtomicTypeTag.U8]);
    return From_bcs.to_address_(Hash.sha3_256_($.copy(bytes), $c), $c);
}
exports.create_resource_address_ = create_resource_address_;
function create_signer_(addr, $c) {
    return $.aptos_framework_account_create_signer(addr, $c);
}
exports.create_signer_ = create_signer_;
function create_signer_with_capability_(capability, $c) {
    let addr;
    addr = capability.account;
    return create_signer_($.copy(addr), $c);
}
exports.create_signer_with_capability_ = create_signer_with_capability_;
function exists_at_(addr, $c) {
    return $c.exists(new move_to_ts_2.SimpleStructTag(Account), $.copy(addr));
}
exports.exists_at_ = exists_at_;
function get_authentication_key_(addr, $c) {
    return $.copy($c.borrow_global(new move_to_ts_2.SimpleStructTag(Account), $.copy(addr)).authentication_key);
}
exports.get_authentication_key_ = get_authentication_key_;
function get_guid_next_creation_num_(addr, $c) {
    return $.copy($c.borrow_global(new move_to_ts_2.SimpleStructTag(Account), $.copy(addr)).guid_creation_num);
}
exports.get_guid_next_creation_num_ = get_guid_next_creation_num_;
function get_sequence_number_(addr, $c) {
    return $.copy($c.borrow_global(new move_to_ts_2.SimpleStructTag(Account), $.copy(addr)).sequence_number);
}
exports.get_sequence_number_ = get_sequence_number_;
function get_signer_capability_address_(capability, $c) {
    return $.copy(capability.account);
}
exports.get_signer_capability_address_ = get_signer_capability_address_;
function increment_sequence_number_(addr, $c) {
    let sequence_number;
    sequence_number = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(Account), $.copy(addr)).sequence_number;
    if (!((0, move_to_ts_1.u128)($.copy(sequence_number))).lt($.copy(exports.MAX_U64))) {
        throw $.abortCode(Error.out_of_range_($.copy(exports.ESEQUENCE_NUMBER_TOO_BIG), $c));
    }
    $.set(sequence_number, ($.copy(sequence_number)).add((0, move_to_ts_1.u64)("1")));
    return;
}
exports.increment_sequence_number_ = increment_sequence_number_;
function initialize_(aptos_framework, $c) {
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    $c.move_to(new move_to_ts_2.SimpleStructTag(OriginatingAddress), aptos_framework, new OriginatingAddress({ address_map: Table.new___($c, [move_to_ts_2.AtomicTypeTag.Address, move_to_ts_2.AtomicTypeTag.Address]) }, new move_to_ts_2.SimpleStructTag(OriginatingAddress)));
    return;
}
exports.initialize_ = initialize_;
function new_event_handle_(account, $c, $p) {
    return Event.new_event_handle_(create_guid_(account, $c), $c, [$p[0]]);
}
exports.new_event_handle_ = new_event_handle_;
function offer_signer_capability_(account, signer_capability_sig_bytes, account_scheme, account_public_key_bytes, recipient_address, $c) {
    let account_resource, expected_auth_key, expected_auth_key__2, proof_challenge, pubkey, pubkey__1, signer_capability_sig, signer_capability_sig__3, source_address;
    source_address = Signer.address_of_(account, $c);
    if (!exists_at_($.copy(recipient_address), $c)) {
        throw $.abortCode(Error.not_found_($.copy(exports.EACCOUNT_DOES_NOT_EXIST), $c));
    }
    account_resource = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(Account), $.copy(source_address));
    proof_challenge = new SignerCapabilityOfferProofChallengeV2({ sequence_number: $.copy(account_resource.sequence_number), source_address: $.copy(source_address), recipient_address: $.copy(recipient_address) }, new move_to_ts_2.SimpleStructTag(SignerCapabilityOfferProofChallengeV2));
    if (($.copy(account_scheme)).eq(($.copy(exports.ED25519_SCHEME)))) {
        pubkey = Ed25519.new_unvalidated_public_key_from_bytes_($.copy(account_public_key_bytes), $c);
        expected_auth_key = Ed25519.unvalidated_public_key_to_authentication_key_(pubkey, $c);
        if (!$.veq($.copy(account_resource.authentication_key), $.copy(expected_auth_key))) {
            throw $.abortCode(Error.invalid_argument_($.copy(exports.EWRONG_CURRENT_PUBLIC_KEY), $c));
        }
        signer_capability_sig = Ed25519.new_signature_from_bytes_($.copy(signer_capability_sig_bytes), $c);
        if (!Ed25519.signature_verify_strict_t_(signer_capability_sig, pubkey, proof_challenge, $c, [new move_to_ts_2.SimpleStructTag(SignerCapabilityOfferProofChallengeV2)])) {
            throw $.abortCode(Error.invalid_argument_($.copy(exports.EINVALID_PROOF_OF_KNOWLEDGE), $c));
        }
    }
    else {
        if (($.copy(account_scheme)).eq(($.copy(exports.MULTI_ED25519_SCHEME)))) {
            pubkey__1 = Multi_ed25519.new_unvalidated_public_key_from_bytes_($.copy(account_public_key_bytes), $c);
            expected_auth_key__2 = Multi_ed25519.unvalidated_public_key_to_authentication_key_(pubkey__1, $c);
            if (!$.veq($.copy(account_resource.authentication_key), $.copy(expected_auth_key__2))) {
                throw $.abortCode(Error.invalid_argument_($.copy(exports.EWRONG_CURRENT_PUBLIC_KEY), $c));
            }
            signer_capability_sig__3 = Multi_ed25519.new_signature_from_bytes_($.copy(signer_capability_sig_bytes), $c);
            if (!Multi_ed25519.signature_verify_strict_t_(signer_capability_sig__3, pubkey__1, proof_challenge, $c, [new move_to_ts_2.SimpleStructTag(SignerCapabilityOfferProofChallengeV2)])) {
                throw $.abortCode(Error.invalid_argument_($.copy(exports.EINVALID_PROOF_OF_KNOWLEDGE), $c));
            }
        }
        else {
            throw $.abortCode(Error.invalid_argument_($.copy(exports.EINVALID_SCHEME), $c));
        }
    }
    Option.swap_or_fill_(account_resource.signer_capability_offer.for__, $.copy(recipient_address), $c, [move_to_ts_2.AtomicTypeTag.Address]);
    return;
}
exports.offer_signer_capability_ = offer_signer_capability_;
function buildPayload_offer_signer_capability(signer_capability_sig_bytes, account_scheme, account_public_key_bytes, recipient_address, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "account", "offer_signer_capability", typeParamStrings, [
        signer_capability_sig_bytes,
        account_scheme,
        account_public_key_bytes,
        recipient_address,
    ], isJSON);
}
exports.buildPayload_offer_signer_capability = buildPayload_offer_signer_capability;
function register_coin_(account_addr, $c, $p) {
    let account;
    account = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(Account), $.copy(account_addr));
    Event.emit_event_(account.coin_register_events, new CoinRegisterEvent({ type_info: Type_info.type_of_($c, [$p[0]]) }, new move_to_ts_2.SimpleStructTag(CoinRegisterEvent)), $c, [new move_to_ts_2.SimpleStructTag(CoinRegisterEvent)]);
    return;
}
exports.register_coin_ = register_coin_;
function revoke_signer_capability_(account, to_be_revoked_address, $c) {
    let account_resource, addr;
    if (!exists_at_($.copy(to_be_revoked_address), $c)) {
        throw $.abortCode(Error.not_found_($.copy(exports.EACCOUNT_DOES_NOT_EXIST), $c));
    }
    addr = Signer.address_of_(account, $c);
    account_resource = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(Account), $.copy(addr));
    if (!Option.contains_(account_resource.signer_capability_offer.for__, to_be_revoked_address, $c, [move_to_ts_2.AtomicTypeTag.Address])) {
        throw $.abortCode(Error.not_found_($.copy(exports.ENO_SUCH_SIGNER_CAPABILITY), $c));
    }
    Option.extract_(account_resource.signer_capability_offer.for__, $c, [move_to_ts_2.AtomicTypeTag.Address]);
    return;
}
exports.revoke_signer_capability_ = revoke_signer_capability_;
function buildPayload_revoke_signer_capability(to_be_revoked_address, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "account", "revoke_signer_capability", typeParamStrings, [
        to_be_revoked_address,
    ], isJSON);
}
exports.buildPayload_revoke_signer_capability = buildPayload_revoke_signer_capability;
function rotate_authentication_key_(account, from_scheme, from_public_key_bytes, to_scheme, to_public_key_bytes, cap_rotate_key, cap_update_table, $c) {
    let temp$3, temp$4, account_resource, addr, address_map, challenge, curr_auth_key, curr_auth_key_as_address, from_auth_key, from_auth_key__2, from_pk, from_pk__1, new_auth_key, new_auth_key_as_address;
    addr = Signer.address_of_(account, $c);
    if (!exists_at_($.copy(addr), $c)) {
        throw $.abortCode(Error.not_found_($.copy(exports.EACCOUNT_DOES_NOT_EXIST), $c));
    }
    account_resource = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(Account), $.copy(addr));
    if (($.copy(from_scheme)).eq(($.copy(exports.ED25519_SCHEME)))) {
        from_pk = Ed25519.new_unvalidated_public_key_from_bytes_($.copy(from_public_key_bytes), $c);
        from_auth_key = Ed25519.unvalidated_public_key_to_authentication_key_(from_pk, $c);
        if (!$.veq($.copy(account_resource.authentication_key), $.copy(from_auth_key))) {
            throw $.abortCode(Error.unauthenticated_($.copy(exports.EWRONG_CURRENT_PUBLIC_KEY), $c));
        }
    }
    else {
        if (($.copy(from_scheme)).eq(($.copy(exports.MULTI_ED25519_SCHEME)))) {
            from_pk__1 = Multi_ed25519.new_unvalidated_public_key_from_bytes_($.copy(from_public_key_bytes), $c);
            from_auth_key__2 = Multi_ed25519.unvalidated_public_key_to_authentication_key_(from_pk__1, $c);
            if (!$.veq($.copy(account_resource.authentication_key), $.copy(from_auth_key__2))) {
                throw $.abortCode(Error.unauthenticated_($.copy(exports.EWRONG_CURRENT_PUBLIC_KEY), $c));
            }
        }
        else {
            throw $.abortCode(Error.invalid_argument_($.copy(exports.EINVALID_SCHEME), $c));
        }
    }
    curr_auth_key_as_address = From_bcs.to_address_($.copy(account_resource.authentication_key), $c);
    challenge = new RotationProofChallenge({ sequence_number: $.copy(account_resource.sequence_number), originator: $.copy(addr), current_auth_key: $.copy(curr_auth_key_as_address), new_public_key: $.copy(to_public_key_bytes) }, new move_to_ts_2.SimpleStructTag(RotationProofChallenge));
    curr_auth_key = assert_valid_signature_and_get_auth_key_($.copy(from_scheme), $.copy(from_public_key_bytes), $.copy(cap_rotate_key), challenge, $c);
    new_auth_key = assert_valid_signature_and_get_auth_key_($.copy(to_scheme), $.copy(to_public_key_bytes), $.copy(cap_update_table), challenge, $c);
    address_map = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(OriginatingAddress), new aptos_1.HexString("0x1")).address_map;
    new_auth_key_as_address = From_bcs.to_address_($.copy(new_auth_key), $c);
    [temp$3, temp$4] = [address_map, $.copy(curr_auth_key_as_address)];
    if (Table.contains_(temp$3, temp$4, $c, [move_to_ts_2.AtomicTypeTag.Address, move_to_ts_2.AtomicTypeTag.Address])) {
        if (!(($.copy(addr)).hex() === (Table.remove_(address_map, $.copy(curr_auth_key_as_address), $c, [move_to_ts_2.AtomicTypeTag.Address, move_to_ts_2.AtomicTypeTag.Address])).hex())) {
            throw $.abortCode(Error.not_found_($.copy(exports.EINVALID_ORIGINATING_ADDRESS), $c));
        }
    }
    else {
    }
    Table.add_(address_map, $.copy(new_auth_key_as_address), $.copy(addr), $c, [move_to_ts_2.AtomicTypeTag.Address, move_to_ts_2.AtomicTypeTag.Address]);
    Event.emit_event_(account_resource.key_rotation_events, new KeyRotationEvent({ old_authentication_key: $.copy(curr_auth_key), new_authentication_key: $.copy(new_auth_key) }, new move_to_ts_2.SimpleStructTag(KeyRotationEvent)), $c, [new move_to_ts_2.SimpleStructTag(KeyRotationEvent)]);
    account_resource.authentication_key = $.copy(new_auth_key);
    return;
}
exports.rotate_authentication_key_ = rotate_authentication_key_;
function buildPayload_rotate_authentication_key(from_scheme, from_public_key_bytes, to_scheme, to_public_key_bytes, cap_rotate_key, cap_update_table, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "account", "rotate_authentication_key", typeParamStrings, [
        from_scheme,
        from_public_key_bytes,
        to_scheme,
        to_public_key_bytes,
        cap_rotate_key,
        cap_update_table,
    ], isJSON);
}
exports.buildPayload_rotate_authentication_key = buildPayload_rotate_authentication_key;
function rotate_authentication_key_internal_(account, new_auth_key, $c) {
    let account_resource, addr;
    addr = Signer.address_of_(account, $c);
    if (!exists_at_($.copy(addr), $c)) {
        throw $.abortCode(Error.not_found_($.copy(exports.EACCOUNT_DOES_NOT_EXIST), $c));
    }
    if (!(Vector.length_(new_auth_key, $c, [move_to_ts_2.AtomicTypeTag.U8])).eq(((0, move_to_ts_1.u64)("32")))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EMALFORMED_AUTHENTICATION_KEY), $c));
    }
    account_resource = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(Account), $.copy(addr));
    account_resource.authentication_key = $.copy(new_auth_key);
    return;
}
exports.rotate_authentication_key_internal_ = rotate_authentication_key_internal_;
function loadParsers(repo) {
    repo.addParser("0x1::account::Account", Account.AccountParser);
    repo.addParser("0x1::account::CapabilityOffer", CapabilityOffer.CapabilityOfferParser);
    repo.addParser("0x1::account::CoinRegisterEvent", CoinRegisterEvent.CoinRegisterEventParser);
    repo.addParser("0x1::account::KeyRotationEvent", KeyRotationEvent.KeyRotationEventParser);
    repo.addParser("0x1::account::OriginatingAddress", OriginatingAddress.OriginatingAddressParser);
    repo.addParser("0x1::account::RotationCapability", RotationCapability.RotationCapabilityParser);
    repo.addParser("0x1::account::RotationCapabilityOfferProofChallenge", RotationCapabilityOfferProofChallenge.RotationCapabilityOfferProofChallengeParser);
    repo.addParser("0x1::account::RotationProofChallenge", RotationProofChallenge.RotationProofChallengeParser);
    repo.addParser("0x1::account::SignerCapability", SignerCapability.SignerCapabilityParser);
    repo.addParser("0x1::account::SignerCapabilityOfferProofChallenge", SignerCapabilityOfferProofChallenge.SignerCapabilityOfferProofChallengeParser);
    repo.addParser("0x1::account::SignerCapabilityOfferProofChallengeV2", SignerCapabilityOfferProofChallengeV2.SignerCapabilityOfferProofChallengeV2Parser);
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
    get Account() { return Account; }
    loadAccount(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield Account.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get CapabilityOffer() { return CapabilityOffer; }
    get CoinRegisterEvent() { return CoinRegisterEvent; }
    get KeyRotationEvent() { return KeyRotationEvent; }
    get OriginatingAddress() { return OriginatingAddress; }
    loadOriginatingAddress(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield OriginatingAddress.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get RotationCapability() { return RotationCapability; }
    get RotationCapabilityOfferProofChallenge() { return RotationCapabilityOfferProofChallenge; }
    get RotationProofChallenge() { return RotationProofChallenge; }
    get SignerCapability() { return SignerCapability; }
    get SignerCapabilityOfferProofChallenge() { return SignerCapabilityOfferProofChallenge; }
    get SignerCapabilityOfferProofChallengeV2() { return SignerCapabilityOfferProofChallengeV2; }
    payload_offer_signer_capability(signer_capability_sig_bytes, account_scheme, account_public_key_bytes, recipient_address, isJSON = false) {
        return buildPayload_offer_signer_capability(signer_capability_sig_bytes, account_scheme, account_public_key_bytes, recipient_address, isJSON);
    }
    offer_signer_capability(_account, signer_capability_sig_bytes, account_scheme, account_public_key_bytes, recipient_address, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_offer_signer_capability(signer_capability_sig_bytes, account_scheme, account_public_key_bytes, recipient_address, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_revoke_signer_capability(to_be_revoked_address, isJSON = false) {
        return buildPayload_revoke_signer_capability(to_be_revoked_address, isJSON);
    }
    revoke_signer_capability(_account, to_be_revoked_address, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_revoke_signer_capability(to_be_revoked_address, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_rotate_authentication_key(from_scheme, from_public_key_bytes, to_scheme, to_public_key_bytes, cap_rotate_key, cap_update_table, isJSON = false) {
        return buildPayload_rotate_authentication_key(from_scheme, from_public_key_bytes, to_scheme, to_public_key_bytes, cap_rotate_key, cap_update_table, isJSON);
    }
    rotate_authentication_key(_account, from_scheme, from_public_key_bytes, to_scheme, to_public_key_bytes, cap_rotate_key, cap_update_table, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_rotate_authentication_key(from_scheme, from_public_key_bytes, to_scheme, to_public_key_bytes, cap_rotate_key, cap_update_table, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
}
exports.App = App;
//# sourceMappingURL=account.js.map