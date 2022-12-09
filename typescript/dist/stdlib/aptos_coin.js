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
exports.App = exports.loadParsers = exports.buildPayload_mint = exports.mint_ = exports.initialize_ = exports.has_mint_capability_ = exports.find_delegation_ = exports.destroy_mint_cap_ = exports.buildPayload_delegate_mint_capability = exports.delegate_mint_capability_ = exports.configure_accounts_for_test_ = exports.buildPayload_claim_mint_capability = exports.claim_mint_capability_ = exports.MintCapStore = exports.Delegations = exports.DelegatedMintCapability = exports.AptosCoin = exports.ENO_CAPABILITIES = exports.EDELEGATION_NOT_FOUND = exports.EALREADY_DELEGATED = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Coin = __importStar(require("./coin"));
const Error = __importStar(require("./error"));
const Option = __importStar(require("./option"));
const Signer = __importStar(require("./signer"));
const String = __importStar(require("./string"));
const System_addresses = __importStar(require("./system_addresses"));
const Vector = __importStar(require("./vector"));
exports.packageName = "AptosFramework";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "aptos_coin";
exports.EALREADY_DELEGATED = (0, move_to_ts_1.u64)("2");
exports.EDELEGATION_NOT_FOUND = (0, move_to_ts_1.u64)("3");
exports.ENO_CAPABILITIES = (0, move_to_ts_1.u64)("1");
class AptosCoin {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
    }
    static AptosCoinParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, AptosCoin);
        return new AptosCoin(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, AptosCoin, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, AptosCoin, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "AptosCoin", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.AptosCoin = AptosCoin;
AptosCoin.moduleAddress = exports.moduleAddress;
AptosCoin.moduleName = exports.moduleName;
AptosCoin.structName = "AptosCoin";
AptosCoin.typeParameters = [];
AptosCoin.fields = [];
class DelegatedMintCapability {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.to = proto['to'];
    }
    static DelegatedMintCapabilityParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, DelegatedMintCapability);
        return new DelegatedMintCapability(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "DelegatedMintCapability", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.DelegatedMintCapability = DelegatedMintCapability;
DelegatedMintCapability.moduleAddress = exports.moduleAddress;
DelegatedMintCapability.moduleName = exports.moduleName;
DelegatedMintCapability.structName = "DelegatedMintCapability";
DelegatedMintCapability.typeParameters = [];
DelegatedMintCapability.fields = [
    { name: "to", typeTag: move_to_ts_2.AtomicTypeTag.Address }
];
class Delegations {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.inner = proto['inner'];
    }
    static DelegationsParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Delegations);
        return new Delegations(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, Delegations, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, Delegations, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Delegations", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.Delegations = Delegations;
Delegations.moduleAddress = exports.moduleAddress;
Delegations.moduleName = exports.moduleName;
Delegations.structName = "Delegations";
Delegations.typeParameters = [];
Delegations.fields = [
    { name: "inner", typeTag: new move_to_ts_2.VectorTag(new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "DelegatedMintCapability", [])) }
];
class MintCapStore {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.mint_cap = proto['mint_cap'];
    }
    static MintCapStoreParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, MintCapStore);
        return new MintCapStore(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, MintCapStore, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, MintCapStore, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "MintCapStore", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.mint_cap.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.MintCapStore = MintCapStore;
MintCapStore.moduleAddress = exports.moduleAddress;
MintCapStore.moduleName = exports.moduleName;
MintCapStore.structName = "MintCapStore";
MintCapStore.typeParameters = [];
MintCapStore.fields = [
    { name: "mint_cap", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "MintCapability", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]) }
];
function claim_mint_capability_(account, $c) {
    let delegations, idx, maybe_index, mint_cap;
    maybe_index = find_delegation_(Signer.address_of_(account, $c), $c);
    if (!Option.is_some_(maybe_index, $c, [move_to_ts_2.AtomicTypeTag.U64])) {
        throw $.abortCode($.copy(exports.EDELEGATION_NOT_FOUND));
    }
    idx = $.copy(Option.borrow_(maybe_index, $c, [move_to_ts_2.AtomicTypeTag.U64]));
    delegations = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(Delegations), new aptos_1.HexString("0xa550c18")).inner;
    Vector.swap_remove_(delegations, $.copy(idx), $c, [new move_to_ts_2.SimpleStructTag(DelegatedMintCapability)]);
    mint_cap = $.copy($c.borrow_global(new move_to_ts_2.SimpleStructTag(MintCapStore), new aptos_1.HexString("0xa550c18")).mint_cap);
    $c.move_to(new move_to_ts_2.SimpleStructTag(MintCapStore), account, new MintCapStore({ mint_cap: $.copy(mint_cap) }, new move_to_ts_2.SimpleStructTag(MintCapStore)));
    return;
}
exports.claim_mint_capability_ = claim_mint_capability_;
function buildPayload_claim_mint_capability(isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "aptos_coin", "claim_mint_capability", typeParamStrings, [], isJSON);
}
exports.buildPayload_claim_mint_capability = buildPayload_claim_mint_capability;
function configure_accounts_for_test_(aptos_framework, core_resources, mint_cap, $c) {
    let coins;
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    Coin.register_(core_resources, $c, [new move_to_ts_2.SimpleStructTag(AptosCoin)]);
    coins = Coin.mint_((0, move_to_ts_1.u64)("18446744073709551615"), mint_cap, $c, [new move_to_ts_2.SimpleStructTag(AptosCoin)]);
    Coin.deposit_(Signer.address_of_(core_resources, $c), coins, $c, [new move_to_ts_2.SimpleStructTag(AptosCoin)]);
    $c.move_to(new move_to_ts_2.SimpleStructTag(MintCapStore), core_resources, new MintCapStore({ mint_cap: $.copy(mint_cap) }, new move_to_ts_2.SimpleStructTag(MintCapStore)));
    $c.move_to(new move_to_ts_2.SimpleStructTag(Delegations), core_resources, new Delegations({ inner: Vector.empty_($c, [new move_to_ts_2.SimpleStructTag(DelegatedMintCapability)]) }, new move_to_ts_2.SimpleStructTag(Delegations)));
    return;
}
exports.configure_accounts_for_test_ = configure_accounts_for_test_;
function delegate_mint_capability_(account, to, $c) {
    let temp$1, temp$2, delegations, element, i;
    System_addresses.assert_core_resource_(account, $c);
    delegations = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(Delegations), new aptos_1.HexString("0xa550c18")).inner;
    i = (0, move_to_ts_1.u64)("0");
    while (($.copy(i)).lt(Vector.length_(delegations, $c, [new move_to_ts_2.SimpleStructTag(DelegatedMintCapability)]))) {
        {
            [temp$1, temp$2] = [delegations, $.copy(i)];
            element = Vector.borrow_(temp$1, temp$2, $c, [new move_to_ts_2.SimpleStructTag(DelegatedMintCapability)]);
            if (!(($.copy(element.to)).hex() !== ($.copy(to)).hex())) {
                throw $.abortCode(Error.invalid_argument_($.copy(exports.EALREADY_DELEGATED), $c));
            }
            i = ($.copy(i)).add((0, move_to_ts_1.u64)("1"));
        }
    }
    Vector.push_back_(delegations, new DelegatedMintCapability({ to: $.copy(to) }, new move_to_ts_2.SimpleStructTag(DelegatedMintCapability)), $c, [new move_to_ts_2.SimpleStructTag(DelegatedMintCapability)]);
    return;
}
exports.delegate_mint_capability_ = delegate_mint_capability_;
function buildPayload_delegate_mint_capability(to, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "aptos_coin", "delegate_mint_capability", typeParamStrings, [
        to,
    ], isJSON);
}
exports.buildPayload_delegate_mint_capability = buildPayload_delegate_mint_capability;
function destroy_mint_cap_(aptos_framework, $c) {
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    let { mint_cap: mint_cap } = $c.move_from(new move_to_ts_2.SimpleStructTag(MintCapStore), new aptos_1.HexString("0x1"));
    Coin.destroy_mint_cap_($.copy(mint_cap), $c, [new move_to_ts_2.SimpleStructTag(AptosCoin)]);
    return;
}
exports.destroy_mint_cap_ = destroy_mint_cap_;
function find_delegation_(addr, $c) {
    let delegations, element, i, index, len;
    delegations = $c.borrow_global(new move_to_ts_2.SimpleStructTag(Delegations), new aptos_1.HexString("0xa550c18")).inner;
    i = (0, move_to_ts_1.u64)("0");
    len = Vector.length_(delegations, $c, [new move_to_ts_2.SimpleStructTag(DelegatedMintCapability)]);
    index = Option.none_($c, [move_to_ts_2.AtomicTypeTag.U64]);
    while (($.copy(i)).lt($.copy(len))) {
        {
            element = Vector.borrow_(delegations, $.copy(i), $c, [new move_to_ts_2.SimpleStructTag(DelegatedMintCapability)]);
            if ((($.copy(element.to)).hex() === ($.copy(addr)).hex())) {
                index = Option.some_($.copy(i), $c, [move_to_ts_2.AtomicTypeTag.U64]);
                break;
            }
            else {
            }
            i = ($.copy(i)).add((0, move_to_ts_1.u64)("1"));
        }
    }
    return $.copy(index);
}
exports.find_delegation_ = find_delegation_;
function has_mint_capability_(account, $c) {
    return $c.exists(new move_to_ts_2.SimpleStructTag(MintCapStore), Signer.address_of_(account, $c));
}
exports.has_mint_capability_ = has_mint_capability_;
function initialize_(aptos_framework, $c) {
    let burn_cap, freeze_cap, mint_cap;
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    [burn_cap, freeze_cap, mint_cap] = Coin.initialize_with_parallelizable_supply_(aptos_framework, String.utf8_([(0, move_to_ts_1.u8)("65"), (0, move_to_ts_1.u8)("112"), (0, move_to_ts_1.u8)("116"), (0, move_to_ts_1.u8)("111"), (0, move_to_ts_1.u8)("115"), (0, move_to_ts_1.u8)("32"), (0, move_to_ts_1.u8)("67"), (0, move_to_ts_1.u8)("111"), (0, move_to_ts_1.u8)("105"), (0, move_to_ts_1.u8)("110")], $c), String.utf8_([(0, move_to_ts_1.u8)("65"), (0, move_to_ts_1.u8)("80"), (0, move_to_ts_1.u8)("84")], $c), (0, move_to_ts_1.u8)("8"), true, $c, [new move_to_ts_2.SimpleStructTag(AptosCoin)]);
    $c.move_to(new move_to_ts_2.SimpleStructTag(MintCapStore), aptos_framework, new MintCapStore({ mint_cap: $.copy(mint_cap) }, new move_to_ts_2.SimpleStructTag(MintCapStore)));
    Coin.destroy_freeze_cap_($.copy(freeze_cap), $c, [new move_to_ts_2.SimpleStructTag(AptosCoin)]);
    return [$.copy(burn_cap), $.copy(mint_cap)];
}
exports.initialize_ = initialize_;
function mint_(account, dst_addr, amount, $c) {
    let account_addr, coins_minted, mint_cap;
    account_addr = Signer.address_of_(account, $c);
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(MintCapStore), $.copy(account_addr))) {
        throw $.abortCode(Error.not_found_($.copy(exports.ENO_CAPABILITIES), $c));
    }
    mint_cap = $c.borrow_global(new move_to_ts_2.SimpleStructTag(MintCapStore), $.copy(account_addr)).mint_cap;
    coins_minted = Coin.mint_($.copy(amount), mint_cap, $c, [new move_to_ts_2.SimpleStructTag(AptosCoin)]);
    Coin.deposit_($.copy(dst_addr), coins_minted, $c, [new move_to_ts_2.SimpleStructTag(AptosCoin)]);
    return;
}
exports.mint_ = mint_;
function buildPayload_mint(dst_addr, amount, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "aptos_coin", "mint", typeParamStrings, [
        dst_addr,
        amount,
    ], isJSON);
}
exports.buildPayload_mint = buildPayload_mint;
function loadParsers(repo) {
    repo.addParser("0x1::aptos_coin::AptosCoin", AptosCoin.AptosCoinParser);
    repo.addParser("0x1::aptos_coin::DelegatedMintCapability", DelegatedMintCapability.DelegatedMintCapabilityParser);
    repo.addParser("0x1::aptos_coin::Delegations", Delegations.DelegationsParser);
    repo.addParser("0x1::aptos_coin::MintCapStore", MintCapStore.MintCapStoreParser);
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
    get AptosCoin() { return AptosCoin; }
    loadAptosCoin(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield AptosCoin.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get DelegatedMintCapability() { return DelegatedMintCapability; }
    get Delegations() { return Delegations; }
    loadDelegations(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield Delegations.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get MintCapStore() { return MintCapStore; }
    loadMintCapStore(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield MintCapStore.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    payload_claim_mint_capability(isJSON = false) {
        return buildPayload_claim_mint_capability(isJSON);
    }
    claim_mint_capability(_account, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_claim_mint_capability(_isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_delegate_mint_capability(to, isJSON = false) {
        return buildPayload_delegate_mint_capability(to, isJSON);
    }
    delegate_mint_capability(_account, to, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_delegate_mint_capability(to, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_mint(dst_addr, amount, isJSON = false) {
        return buildPayload_mint(dst_addr, amount, isJSON);
    }
    mint(_account, dst_addr, amount, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_mint(dst_addr, amount, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
}
exports.App = App;
//# sourceMappingURL=aptos_coin.js.map