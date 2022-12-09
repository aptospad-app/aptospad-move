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
exports.name_ = exports.mint_ = exports.merge_ = exports.is_coin_initialized_ = exports.is_account_registered_ = exports.initialize_with_parallelizable_supply_ = exports.initialize_supply_config_ = exports.initialize_internal_ = exports.initialize_ = exports.freeze_coin_store_ = exports.extract_all_ = exports.extract_ = exports.destroy_zero_ = exports.destroy_mint_cap_ = exports.destroy_freeze_cap_ = exports.destroy_burn_cap_ = exports.deposit_ = exports.decimals_ = exports.coin_address_ = exports.burn_from_ = exports.burn_ = exports.balance_ = exports.allow_supply_upgrades_ = exports.WithdrawEvent = exports.SupplyConfig = exports.MintCapability = exports.FreezeCapability = exports.DepositEvent = exports.CoinStore = exports.CoinInfo = exports.Coin = exports.BurnCapability = exports.MAX_U128 = exports.MAX_COIN_SYMBOL_LENGTH = exports.MAX_COIN_NAME_LENGTH = exports.EZERO_COIN_AMOUNT = exports.EINSUFFICIENT_BALANCE = exports.EFROZEN = exports.EDESTRUCTION_OF_NONZERO_TOKEN = exports.ECOIN_SYMBOL_TOO_LONG = exports.ECOIN_SUPPLY_UPGRADE_NOT_SUPPORTED = exports.ECOIN_STORE_NOT_PUBLISHED = exports.ECOIN_STORE_ALREADY_PUBLISHED = exports.ECOIN_NAME_TOO_LONG = exports.ECOIN_INFO_NOT_PUBLISHED = exports.ECOIN_INFO_ALREADY_PUBLISHED = exports.ECOIN_INFO_ADDRESS_MISMATCH = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
exports.App = exports.loadParsers = exports.zero_ = exports.withdraw_ = exports.value_ = exports.buildPayload_upgrade_supply = exports.upgrade_supply_ = exports.unfreeze_coin_store_ = exports.buildPayload_transfer = exports.transfer_ = exports.symbol_ = exports.supply_ = exports.register_ = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Account = __importStar(require("./account"));
const Error = __importStar(require("./error"));
const Event = __importStar(require("./event"));
const Option = __importStar(require("./option"));
const Optional_aggregator = __importStar(require("./optional_aggregator"));
const Signer = __importStar(require("./signer"));
const String = __importStar(require("./string"));
const System_addresses = __importStar(require("./system_addresses"));
const Type_info = __importStar(require("./type_info"));
exports.packageName = "AptosFramework";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "coin";
exports.ECOIN_INFO_ADDRESS_MISMATCH = (0, move_to_ts_1.u64)("1");
exports.ECOIN_INFO_ALREADY_PUBLISHED = (0, move_to_ts_1.u64)("2");
exports.ECOIN_INFO_NOT_PUBLISHED = (0, move_to_ts_1.u64)("3");
exports.ECOIN_NAME_TOO_LONG = (0, move_to_ts_1.u64)("12");
exports.ECOIN_STORE_ALREADY_PUBLISHED = (0, move_to_ts_1.u64)("4");
exports.ECOIN_STORE_NOT_PUBLISHED = (0, move_to_ts_1.u64)("5");
exports.ECOIN_SUPPLY_UPGRADE_NOT_SUPPORTED = (0, move_to_ts_1.u64)("11");
exports.ECOIN_SYMBOL_TOO_LONG = (0, move_to_ts_1.u64)("13");
exports.EDESTRUCTION_OF_NONZERO_TOKEN = (0, move_to_ts_1.u64)("7");
exports.EFROZEN = (0, move_to_ts_1.u64)("10");
exports.EINSUFFICIENT_BALANCE = (0, move_to_ts_1.u64)("6");
exports.EZERO_COIN_AMOUNT = (0, move_to_ts_1.u64)("9");
exports.MAX_COIN_NAME_LENGTH = (0, move_to_ts_1.u64)("32");
exports.MAX_COIN_SYMBOL_LENGTH = (0, move_to_ts_1.u64)("10");
exports.MAX_U128 = (0, move_to_ts_1.u128)("340282366920938463463374607431768211455");
class BurnCapability {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
    }
    static BurnCapabilityParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, BurnCapability);
        return new BurnCapability(proto, typeTag);
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "BurnCapability", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.BurnCapability = BurnCapability;
BurnCapability.moduleAddress = exports.moduleAddress;
BurnCapability.moduleName = exports.moduleName;
BurnCapability.structName = "BurnCapability";
BurnCapability.typeParameters = [
    { name: "CoinType", isPhantom: true }
];
BurnCapability.fields = [];
class Coin {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.value = proto['value'];
    }
    static CoinParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Coin);
        return new Coin(proto, typeTag);
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Coin", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.Coin = Coin;
Coin.moduleAddress = exports.moduleAddress;
Coin.moduleName = exports.moduleName;
Coin.structName = "Coin";
Coin.typeParameters = [
    { name: "CoinType", isPhantom: true }
];
Coin.fields = [
    { name: "value", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class CoinInfo {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.name = proto['name'];
        this.symbol = proto['symbol'];
        this.decimals = proto['decimals'];
        this.supply = proto['supply'];
    }
    static CoinInfoParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, CoinInfo);
        return new CoinInfo(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, CoinInfo, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, CoinInfo, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "CoinInfo", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.name.loadFullState(app);
            yield this.symbol.loadFullState(app);
            yield this.supply.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.CoinInfo = CoinInfo;
CoinInfo.moduleAddress = exports.moduleAddress;
CoinInfo.moduleName = exports.moduleName;
CoinInfo.structName = "CoinInfo";
CoinInfo.typeParameters = [
    { name: "CoinType", isPhantom: true }
];
CoinInfo.fields = [
    { name: "name", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []) },
    { name: "symbol", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []) },
    { name: "decimals", typeTag: move_to_ts_2.AtomicTypeTag.U8 },
    { name: "supply", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "option", "Option", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "optional_aggregator", "OptionalAggregator", [])]) }
];
class CoinStore {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.coin = proto['coin'];
        this.frozen = proto['frozen'];
        this.deposit_events = proto['deposit_events'];
        this.withdraw_events = proto['withdraw_events'];
    }
    static CoinStoreParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, CoinStore);
        return new CoinStore(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, CoinStore, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, CoinStore, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "CoinStore", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.coin.loadFullState(app);
            yield this.deposit_events.loadFullState(app);
            yield this.withdraw_events.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.CoinStore = CoinStore;
CoinStore.moduleAddress = exports.moduleAddress;
CoinStore.moduleName = exports.moduleName;
CoinStore.structName = "CoinStore";
CoinStore.typeParameters = [
    { name: "CoinType", isPhantom: true }
];
CoinStore.fields = [
    { name: "coin", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [new $.TypeParamIdx(0)]) },
    { name: "frozen", typeTag: move_to_ts_2.AtomicTypeTag.Bool },
    { name: "deposit_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "DepositEvent", [])]) },
    { name: "withdraw_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "WithdrawEvent", [])]) }
];
class DepositEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.amount = proto['amount'];
    }
    static DepositEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, DepositEvent);
        return new DepositEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "DepositEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.DepositEvent = DepositEvent;
DepositEvent.moduleAddress = exports.moduleAddress;
DepositEvent.moduleName = exports.moduleName;
DepositEvent.structName = "DepositEvent";
DepositEvent.typeParameters = [];
DepositEvent.fields = [
    { name: "amount", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class FreezeCapability {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
    }
    static FreezeCapabilityParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, FreezeCapability);
        return new FreezeCapability(proto, typeTag);
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "FreezeCapability", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.FreezeCapability = FreezeCapability;
FreezeCapability.moduleAddress = exports.moduleAddress;
FreezeCapability.moduleName = exports.moduleName;
FreezeCapability.structName = "FreezeCapability";
FreezeCapability.typeParameters = [
    { name: "CoinType", isPhantom: true }
];
FreezeCapability.fields = [];
class MintCapability {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
    }
    static MintCapabilityParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, MintCapability);
        return new MintCapability(proto, typeTag);
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "MintCapability", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.MintCapability = MintCapability;
MintCapability.moduleAddress = exports.moduleAddress;
MintCapability.moduleName = exports.moduleName;
MintCapability.structName = "MintCapability";
MintCapability.typeParameters = [
    { name: "CoinType", isPhantom: true }
];
MintCapability.fields = [];
class SupplyConfig {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.allow_upgrades = proto['allow_upgrades'];
    }
    static SupplyConfigParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, SupplyConfig);
        return new SupplyConfig(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, SupplyConfig, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, SupplyConfig, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "SupplyConfig", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.SupplyConfig = SupplyConfig;
SupplyConfig.moduleAddress = exports.moduleAddress;
SupplyConfig.moduleName = exports.moduleName;
SupplyConfig.structName = "SupplyConfig";
SupplyConfig.typeParameters = [];
SupplyConfig.fields = [
    { name: "allow_upgrades", typeTag: move_to_ts_2.AtomicTypeTag.Bool }
];
class WithdrawEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.amount = proto['amount'];
    }
    static WithdrawEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, WithdrawEvent);
        return new WithdrawEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "WithdrawEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.WithdrawEvent = WithdrawEvent;
WithdrawEvent.moduleAddress = exports.moduleAddress;
WithdrawEvent.moduleName = exports.moduleName;
WithdrawEvent.structName = "WithdrawEvent";
WithdrawEvent.typeParameters = [];
WithdrawEvent.fields = [
    { name: "amount", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
function allow_supply_upgrades_(aptos_framework, allowed, $c) {
    let allow_upgrades;
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    allow_upgrades = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(SupplyConfig), new aptos_1.HexString("0x1")).allow_upgrades;
    $.set(allow_upgrades, allowed);
    return;
}
exports.allow_supply_upgrades_ = allow_supply_upgrades_;
function balance_(owner, $c, $p) {
    if (!is_account_registered_($.copy(owner), $c, [$p[0]])) {
        throw $.abortCode(Error.not_found_($.copy(exports.ECOIN_STORE_NOT_PUBLISHED), $c));
    }
    return $.copy($c.borrow_global(new move_to_ts_2.SimpleStructTag(CoinStore, [$p[0]]), $.copy(owner)).coin.value);
}
exports.balance_ = balance_;
function burn_(coin, _cap, $c, $p) {
    let maybe_supply, supply;
    let { value: amount } = coin;
    if (!($.copy(amount)).gt((0, move_to_ts_1.u64)("0"))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EZERO_COIN_AMOUNT), $c));
    }
    maybe_supply = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(CoinInfo, [$p[0]]), coin_address_($c, [$p[0]])).supply;
    if (Option.is_some_(maybe_supply, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "optional_aggregator", "OptionalAggregator", [])])) {
        supply = Option.borrow_mut_(maybe_supply, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "optional_aggregator", "OptionalAggregator", [])]);
        Optional_aggregator.sub_(supply, (0, move_to_ts_1.u128)($.copy(amount)), $c);
    }
    else {
    }
    return;
}
exports.burn_ = burn_;
function burn_from_(account_addr, amount, burn_cap, $c, $p) {
    let coin_store, coin_to_burn;
    if (($.copy(amount)).eq(((0, move_to_ts_1.u64)("0")))) {
        return;
    }
    else {
    }
    coin_store = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(CoinStore, [$p[0]]), $.copy(account_addr));
    coin_to_burn = extract_(coin_store.coin, $.copy(amount), $c, [$p[0]]);
    burn_(coin_to_burn, burn_cap, $c, [$p[0]]);
    return;
}
exports.burn_from_ = burn_from_;
function coin_address_($c, $p) {
    let type_info;
    type_info = Type_info.type_of_($c, [$p[0]]);
    return Type_info.account_address_(type_info, $c);
}
exports.coin_address_ = coin_address_;
function decimals_($c, $p) {
    return $.copy($c.borrow_global(new move_to_ts_2.SimpleStructTag(CoinInfo, [$p[0]]), coin_address_($c, [$p[0]])).decimals);
}
exports.decimals_ = decimals_;
function deposit_(account_addr, coin, $c, $p) {
    let coin_store;
    if (!is_account_registered_($.copy(account_addr), $c, [$p[0]])) {
        throw $.abortCode(Error.not_found_($.copy(exports.ECOIN_STORE_NOT_PUBLISHED), $c));
    }
    coin_store = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(CoinStore, [$p[0]]), $.copy(account_addr));
    if (!!$.copy(coin_store.frozen)) {
        throw $.abortCode(Error.permission_denied_($.copy(exports.EFROZEN), $c));
    }
    Event.emit_event_(coin_store.deposit_events, new DepositEvent({ amount: $.copy(coin.value) }, new move_to_ts_2.SimpleStructTag(DepositEvent)), $c, [new move_to_ts_2.SimpleStructTag(DepositEvent)]);
    merge_(coin_store.coin, coin, $c, [$p[0]]);
    return;
}
exports.deposit_ = deposit_;
function destroy_burn_cap_(burn_cap, $c, $p) {
    $.copy(burn_cap);
    return;
}
exports.destroy_burn_cap_ = destroy_burn_cap_;
function destroy_freeze_cap_(freeze_cap, $c, $p) {
    $.copy(freeze_cap);
    return;
}
exports.destroy_freeze_cap_ = destroy_freeze_cap_;
function destroy_mint_cap_(mint_cap, $c, $p) {
    $.copy(mint_cap);
    return;
}
exports.destroy_mint_cap_ = destroy_mint_cap_;
function destroy_zero_(zero_coin, $c, $p) {
    let { value: value } = zero_coin;
    if (!($.copy(value)).eq(((0, move_to_ts_1.u64)("0")))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EDESTRUCTION_OF_NONZERO_TOKEN), $c));
    }
    return;
}
exports.destroy_zero_ = destroy_zero_;
function extract_(coin, amount, $c, $p) {
    if (!($.copy(coin.value)).ge($.copy(amount))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EINSUFFICIENT_BALANCE), $c));
    }
    coin.value = ($.copy(coin.value)).sub($.copy(amount));
    return new Coin({ value: $.copy(amount) }, new move_to_ts_2.SimpleStructTag(Coin, [$p[0]]));
}
exports.extract_ = extract_;
function extract_all_(coin, $c, $p) {
    let total_value;
    total_value = $.copy(coin.value);
    coin.value = (0, move_to_ts_1.u64)("0");
    return new Coin({ value: $.copy(total_value) }, new move_to_ts_2.SimpleStructTag(Coin, [$p[0]]));
}
exports.extract_all_ = extract_all_;
function freeze_coin_store_(account_addr, _freeze_cap, $c, $p) {
    let coin_store;
    coin_store = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(CoinStore, [$p[0]]), $.copy(account_addr));
    coin_store.frozen = true;
    return;
}
exports.freeze_coin_store_ = freeze_coin_store_;
function initialize_(account, name, symbol, decimals, monitor_supply, $c, $p) {
    return initialize_internal_(account, $.copy(name), $.copy(symbol), $.copy(decimals), monitor_supply, false, $c, [$p[0]]);
}
exports.initialize_ = initialize_;
function initialize_internal_(account, name, symbol, decimals, monitor_supply, parallelizable, $c, $p) {
    let temp$1, temp$2, temp$3, temp$4, account_addr, coin_info;
    account_addr = Signer.address_of_(account, $c);
    if (!((coin_address_($c, [$p[0]])).hex() === ($.copy(account_addr)).hex())) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.ECOIN_INFO_ADDRESS_MISMATCH), $c));
    }
    if (!!$c.exists(new move_to_ts_2.SimpleStructTag(CoinInfo, [$p[0]]), $.copy(account_addr))) {
        throw $.abortCode(Error.already_exists_($.copy(exports.ECOIN_INFO_ALREADY_PUBLISHED), $c));
    }
    if (!(String.length_(name, $c)).le($.copy(exports.MAX_COIN_NAME_LENGTH))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.ECOIN_NAME_TOO_LONG), $c));
    }
    if (!(String.length_(symbol, $c)).le($.copy(exports.MAX_COIN_SYMBOL_LENGTH))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.ECOIN_SYMBOL_TOO_LONG), $c));
    }
    temp$4 = $.copy(name);
    temp$3 = $.copy(symbol);
    temp$2 = $.copy(decimals);
    if (monitor_supply) {
        temp$1 = Option.some_(Optional_aggregator.new___($.copy(exports.MAX_U128), parallelizable, $c), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "optional_aggregator", "OptionalAggregator", [])]);
    }
    else {
        temp$1 = Option.none_($c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "optional_aggregator", "OptionalAggregator", [])]);
    }
    coin_info = new CoinInfo({ name: temp$4, symbol: temp$3, decimals: temp$2, supply: temp$1 }, new move_to_ts_2.SimpleStructTag(CoinInfo, [$p[0]]));
    $c.move_to(new move_to_ts_2.SimpleStructTag(CoinInfo, [$p[0]]), account, coin_info);
    return [new BurnCapability({}, new move_to_ts_2.SimpleStructTag(BurnCapability, [$p[0]])), new FreezeCapability({}, new move_to_ts_2.SimpleStructTag(FreezeCapability, [$p[0]])), new MintCapability({}, new move_to_ts_2.SimpleStructTag(MintCapability, [$p[0]]))];
}
exports.initialize_internal_ = initialize_internal_;
function initialize_supply_config_(aptos_framework, $c) {
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    $c.move_to(new move_to_ts_2.SimpleStructTag(SupplyConfig), aptos_framework, new SupplyConfig({ allow_upgrades: false }, new move_to_ts_2.SimpleStructTag(SupplyConfig)));
    return;
}
exports.initialize_supply_config_ = initialize_supply_config_;
function initialize_with_parallelizable_supply_(account, name, symbol, decimals, monitor_supply, $c, $p) {
    System_addresses.assert_aptos_framework_(account, $c);
    return initialize_internal_(account, $.copy(name), $.copy(symbol), $.copy(decimals), monitor_supply, true, $c, [$p[0]]);
}
exports.initialize_with_parallelizable_supply_ = initialize_with_parallelizable_supply_;
function is_account_registered_(account_addr, $c, $p) {
    return $c.exists(new move_to_ts_2.SimpleStructTag(CoinStore, [$p[0]]), $.copy(account_addr));
}
exports.is_account_registered_ = is_account_registered_;
function is_coin_initialized_($c, $p) {
    return $c.exists(new move_to_ts_2.SimpleStructTag(CoinInfo, [$p[0]]), coin_address_($c, [$p[0]]));
}
exports.is_coin_initialized_ = is_coin_initialized_;
function merge_(dst_coin, source_coin, $c, $p) {
    ;
    dst_coin.value = ($.copy(dst_coin.value)).add($.copy(source_coin.value));
    source_coin;
    return;
}
exports.merge_ = merge_;
function mint_(amount, _cap, $c, $p) {
    let maybe_supply, supply;
    if (($.copy(amount)).eq(((0, move_to_ts_1.u64)("0")))) {
        return zero_($c, [$p[0]]);
    }
    else {
    }
    maybe_supply = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(CoinInfo, [$p[0]]), coin_address_($c, [$p[0]])).supply;
    if (Option.is_some_(maybe_supply, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "optional_aggregator", "OptionalAggregator", [])])) {
        supply = Option.borrow_mut_(maybe_supply, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "optional_aggregator", "OptionalAggregator", [])]);
        Optional_aggregator.add_(supply, (0, move_to_ts_1.u128)($.copy(amount)), $c);
    }
    else {
    }
    return new Coin({ value: $.copy(amount) }, new move_to_ts_2.SimpleStructTag(Coin, [$p[0]]));
}
exports.mint_ = mint_;
function name_($c, $p) {
    return $.copy($c.borrow_global(new move_to_ts_2.SimpleStructTag(CoinInfo, [$p[0]]), coin_address_($c, [$p[0]])).name);
}
exports.name_ = name_;
function register_(account, $c, $p) {
    let account_addr, coin_store;
    account_addr = Signer.address_of_(account, $c);
    if (!!is_account_registered_($.copy(account_addr), $c, [$p[0]])) {
        throw $.abortCode(Error.already_exists_($.copy(exports.ECOIN_STORE_ALREADY_PUBLISHED), $c));
    }
    Account.register_coin_($.copy(account_addr), $c, [$p[0]]);
    coin_store = new CoinStore({ coin: new Coin({ value: (0, move_to_ts_1.u64)("0") }, new move_to_ts_2.SimpleStructTag(Coin, [$p[0]])), frozen: false, deposit_events: Account.new_event_handle_(account, $c, [new move_to_ts_2.SimpleStructTag(DepositEvent)]), withdraw_events: Account.new_event_handle_(account, $c, [new move_to_ts_2.SimpleStructTag(WithdrawEvent)]) }, new move_to_ts_2.SimpleStructTag(CoinStore, [$p[0]]));
    $c.move_to(new move_to_ts_2.SimpleStructTag(CoinStore, [$p[0]]), account, coin_store);
    return;
}
exports.register_ = register_;
function supply_($c, $p) {
    let temp$1, maybe_supply, supply, value;
    maybe_supply = $c.borrow_global(new move_to_ts_2.SimpleStructTag(CoinInfo, [$p[0]]), coin_address_($c, [$p[0]])).supply;
    if (Option.is_some_(maybe_supply, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "optional_aggregator", "OptionalAggregator", [])])) {
        supply = Option.borrow_(maybe_supply, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "optional_aggregator", "OptionalAggregator", [])]);
        value = Optional_aggregator.read_(supply, $c);
        temp$1 = Option.some_($.copy(value), $c, [move_to_ts_2.AtomicTypeTag.U128]);
    }
    else {
        temp$1 = Option.none_($c, [move_to_ts_2.AtomicTypeTag.U128]);
    }
    return temp$1;
}
exports.supply_ = supply_;
function symbol_($c, $p) {
    return $.copy($c.borrow_global(new move_to_ts_2.SimpleStructTag(CoinInfo, [$p[0]]), coin_address_($c, [$p[0]])).symbol);
}
exports.symbol_ = symbol_;
function transfer_(from, to, amount, $c, $p) {
    let coin;
    coin = withdraw_(from, $.copy(amount), $c, [$p[0]]);
    deposit_($.copy(to), coin, $c, [$p[0]]);
    return;
}
exports.transfer_ = transfer_;
function buildPayload_transfer(to, amount, $p, /* <CoinType>*/ isJSON = false) {
    const typeParamStrings = $p.map(t => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x1"), "coin", "transfer", typeParamStrings, [
        to,
        amount,
    ], isJSON);
}
exports.buildPayload_transfer = buildPayload_transfer;
function unfreeze_coin_store_(account_addr, _freeze_cap, $c, $p) {
    let coin_store;
    coin_store = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(CoinStore, [$p[0]]), $.copy(account_addr));
    coin_store.frozen = false;
    return;
}
exports.unfreeze_coin_store_ = unfreeze_coin_store_;
function upgrade_supply_(account, $c, $p) {
    let account_addr, maybe_supply, supply;
    account_addr = Signer.address_of_(account, $c);
    if (!((coin_address_($c, [$p[0]])).hex() === ($.copy(account_addr)).hex())) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.ECOIN_INFO_ADDRESS_MISMATCH), $c));
    }
    if (!$.copy($c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(SupplyConfig), new aptos_1.HexString("0x1")).allow_upgrades)) {
        throw $.abortCode(Error.permission_denied_($.copy(exports.ECOIN_SUPPLY_UPGRADE_NOT_SUPPORTED), $c));
    }
    maybe_supply = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(CoinInfo, [$p[0]]), $.copy(account_addr)).supply;
    if (Option.is_some_(maybe_supply, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "optional_aggregator", "OptionalAggregator", [])])) {
        supply = Option.borrow_mut_(maybe_supply, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "optional_aggregator", "OptionalAggregator", [])]);
        if (!Optional_aggregator.is_parallelizable_(supply, $c)) {
            Optional_aggregator.switch_(supply, $c);
        }
        else {
        }
    }
    else {
    }
    return;
}
exports.upgrade_supply_ = upgrade_supply_;
function buildPayload_upgrade_supply($p, /* <CoinType>*/ isJSON = false) {
    const typeParamStrings = $p.map(t => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x1"), "coin", "upgrade_supply", typeParamStrings, [], isJSON);
}
exports.buildPayload_upgrade_supply = buildPayload_upgrade_supply;
function value_(coin, $c, $p) {
    return $.copy(coin.value);
}
exports.value_ = value_;
function withdraw_(account, amount, $c, $p) {
    let account_addr, coin_store;
    account_addr = Signer.address_of_(account, $c);
    if (!is_account_registered_($.copy(account_addr), $c, [$p[0]])) {
        throw $.abortCode(Error.not_found_($.copy(exports.ECOIN_STORE_NOT_PUBLISHED), $c));
    }
    coin_store = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(CoinStore, [$p[0]]), $.copy(account_addr));
    if (!!$.copy(coin_store.frozen)) {
        throw $.abortCode(Error.permission_denied_($.copy(exports.EFROZEN), $c));
    }
    Event.emit_event_(coin_store.withdraw_events, new WithdrawEvent({ amount: $.copy(amount) }, new move_to_ts_2.SimpleStructTag(WithdrawEvent)), $c, [new move_to_ts_2.SimpleStructTag(WithdrawEvent)]);
    return extract_(coin_store.coin, $.copy(amount), $c, [$p[0]]);
}
exports.withdraw_ = withdraw_;
function zero_($c, $p) {
    return new Coin({ value: (0, move_to_ts_1.u64)("0") }, new move_to_ts_2.SimpleStructTag(Coin, [$p[0]]));
}
exports.zero_ = zero_;
function loadParsers(repo) {
    repo.addParser("0x1::coin::BurnCapability", BurnCapability.BurnCapabilityParser);
    repo.addParser("0x1::coin::Coin", Coin.CoinParser);
    repo.addParser("0x1::coin::CoinInfo", CoinInfo.CoinInfoParser);
    repo.addParser("0x1::coin::CoinStore", CoinStore.CoinStoreParser);
    repo.addParser("0x1::coin::DepositEvent", DepositEvent.DepositEventParser);
    repo.addParser("0x1::coin::FreezeCapability", FreezeCapability.FreezeCapabilityParser);
    repo.addParser("0x1::coin::MintCapability", MintCapability.MintCapabilityParser);
    repo.addParser("0x1::coin::SupplyConfig", SupplyConfig.SupplyConfigParser);
    repo.addParser("0x1::coin::WithdrawEvent", WithdrawEvent.WithdrawEventParser);
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
    get BurnCapability() { return BurnCapability; }
    get Coin() { return Coin; }
    get CoinInfo() { return CoinInfo; }
    loadCoinInfo(owner, $p, /* <CoinType> */ loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield CoinInfo.load(this.repo, this.client, owner, $p);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get CoinStore() { return CoinStore; }
    loadCoinStore(owner, $p, /* <CoinType> */ loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield CoinStore.load(this.repo, this.client, owner, $p);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get DepositEvent() { return DepositEvent; }
    get FreezeCapability() { return FreezeCapability; }
    get MintCapability() { return MintCapability; }
    get SupplyConfig() { return SupplyConfig; }
    loadSupplyConfig(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield SupplyConfig.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get WithdrawEvent() { return WithdrawEvent; }
    payload_transfer(to, amount, $p, /* <CoinType>*/ isJSON = false) {
        return buildPayload_transfer(to, amount, $p, isJSON);
    }
    transfer(_account, to, amount, $p, /* <CoinType>*/ option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_transfer(to, amount, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_upgrade_supply($p, /* <CoinType>*/ isJSON = false) {
        return buildPayload_upgrade_supply($p, isJSON);
    }
    upgrade_supply(_account, $p, /* <CoinType>*/ option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_upgrade_supply($p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
}
exports.App = App;
//# sourceMappingURL=coin.js.map