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
exports.initialize_ = exports.getWhiteLists_ = exports.getWhiteList_ = exports.getSwapTotalBid_ = exports.distributeSeasonV3_ = exports.distributeSeasonV2_ = exports.distributeSeason_ = exports.distributePerAccountV2_ = exports.distributePerAccount_ = exports.distributeAtppV3_ = exports.distributeAtppV2_ = exports.distributeAtpp_ = exports.distributeAllV3_ = exports.distributeAllV2_ = exports.distributeAll_ = exports.checkBidOverflow_ = exports.bidAptosPadV5_ = exports.bidAptosPadV4_ = exports.bidAptosPadV3_ = exports.bidAptosPadV2_ = exports.bidAptosPad_ = exports.assert_no_emergency_ = exports.assert_admin_ = exports.addWhiteList_ = exports.WhiteListEvent = exports.TokenDistribute = exports.LaunchPadRegistry = exports.DistributeAptospadEvent = exports.BidAptosPadEvent = exports.STATE_WL = exports.STATE_LAUNCHPAD = exports.STATE_INIT = exports.STATE_ENDED = exports.STATE_DISTRIBUTE2 = exports.STATE_DISTRIBUTE = exports.REFUND_CHARGE_RATE_PER_100K = exports.ERR_SEASON_STATE = exports.ERR_SEASON_NOT_RESET = exports.ERR_SEASON_ENDED = exports.ERR_SEASON_ACTIVE = exports.ERR_PERMISSIONS = exports.ERR_NOT_IN_WHITELIST = exports.ERR_HARDCAP_REACHED = exports.ERR_EMERGENCY = exports.ERR_BID_OVERFLOW = exports.DEFAULT_OVERFLOW_100 = exports.DEFAULT_CAP_1K = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
exports.App = exports.loadParsers = exports.withdrawAptosPad_ = exports.withdrawAptos_ = exports.whiteListSeason_ = exports.resetSeason_ = exports.refundAptosV3_ = exports.refundAptosV2_ = exports.refundAptos_ = exports.refundAllV3_ = exports.refundAllV2_ = exports.refundAll_ = exports.paycoinAndRefund_ = exports.payCoinAndRefund_ = exports.launchPadSeason_ = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Stdlib = __importStar(require("../stdlib"));
const Config = __importStar(require("./config"));
const Iterable_table = __importStar(require("./iterable_table"));
exports.packageName = "AptosPad";
exports.moduleAddress = new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0");
exports.moduleName = "aptospad_swap";
exports.DEFAULT_CAP_1K = ((0, move_to_ts_1.u64)("100000000")).mul((0, move_to_ts_1.u64)("100"));
exports.DEFAULT_OVERFLOW_100 = ((0, move_to_ts_1.u64)("100000000")).mul((0, move_to_ts_1.u64)("100"));
exports.ERR_BID_OVERFLOW = (0, move_to_ts_1.u64)("412");
exports.ERR_EMERGENCY = (0, move_to_ts_1.u64)("405");
exports.ERR_HARDCAP_REACHED = (0, move_to_ts_1.u64)("410");
exports.ERR_NOT_IN_WHITELIST = (0, move_to_ts_1.u64)("411");
exports.ERR_PERMISSIONS = (0, move_to_ts_1.u64)("403");
exports.ERR_SEASON_ACTIVE = (0, move_to_ts_1.u64)("408");
exports.ERR_SEASON_ENDED = (0, move_to_ts_1.u64)("406");
exports.ERR_SEASON_NOT_RESET = (0, move_to_ts_1.u64)("407");
exports.ERR_SEASON_STATE = (0, move_to_ts_1.u64)("409");
exports.REFUND_CHARGE_RATE_PER_100K = (0, move_to_ts_1.u64)("100");
exports.STATE_DISTRIBUTE = (0, move_to_ts_1.u8)("4");
exports.STATE_DISTRIBUTE2 = (0, move_to_ts_1.u8)("5");
exports.STATE_ENDED = (0, move_to_ts_1.u8)("5");
exports.STATE_INIT = (0, move_to_ts_1.u8)("1");
exports.STATE_LAUNCHPAD = (0, move_to_ts_1.u8)("3");
exports.STATE_WL = (0, move_to_ts_1.u8)("2");
class BidAptosPadEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.cap = proto['cap'];
        this.bid = proto['bid'];
        this.investor = proto['investor'];
    }
    static BidAptosPadEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, BidAptosPadEvent);
        return new BidAptosPadEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "BidAptosPadEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.BidAptosPadEvent = BidAptosPadEvent;
BidAptosPadEvent.moduleAddress = exports.moduleAddress;
BidAptosPadEvent.moduleName = exports.moduleName;
BidAptosPadEvent.structName = "BidAptosPadEvent";
BidAptosPadEvent.typeParameters = [];
BidAptosPadEvent.fields = [
    { name: "cap", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "bid", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "investor", typeTag: move_to_ts_2.AtomicTypeTag.Address }
];
class DistributeAptospadEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.cap = proto['cap'];
        this.bid = proto['bid'];
        this.distributedToken = proto['distributedToken'];
        this.refund = proto['refund'];
        this.investor = proto['investor'];
    }
    static DistributeAptospadEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, DistributeAptospadEvent);
        return new DistributeAptospadEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "DistributeAptospadEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.DistributeAptospadEvent = DistributeAptospadEvent;
DistributeAptospadEvent.moduleAddress = exports.moduleAddress;
DistributeAptospadEvent.moduleName = exports.moduleName;
DistributeAptospadEvent.structName = "DistributeAptospadEvent";
DistributeAptospadEvent.typeParameters = [];
DistributeAptospadEvent.fields = [
    { name: "cap", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "bid", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "distributedToken", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "refund", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "investor", typeTag: move_to_ts_2.AtomicTypeTag.Address }
];
class LaunchPadRegistry {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.investors = proto['investors'];
        this.totalBid = proto['totalBid'];
        this.bidaptospad_events = proto['bidaptospad_events'];
        this.distributeaptospad_events = proto['distributeaptospad_events'];
        this.whitelist_events = proto['whitelist_events'];
    }
    static LaunchPadRegistryParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, LaunchPadRegistry);
        return new LaunchPadRegistry(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, LaunchPadRegistry, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, LaunchPadRegistry, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "LaunchPadRegistry", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.investors.loadFullState(app);
            yield this.bidaptospad_events.loadFullState(app);
            yield this.distributeaptospad_events.loadFullState(app);
            yield this.whitelist_events.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.LaunchPadRegistry = LaunchPadRegistry;
LaunchPadRegistry.moduleAddress = exports.moduleAddress;
LaunchPadRegistry.moduleName = exports.moduleName;
LaunchPadRegistry.structName = "LaunchPadRegistry";
LaunchPadRegistry.typeParameters = [];
LaunchPadRegistry.fields = [
    { name: "investors", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0"), "iterable_table", "IterableTable", [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.StructTag(new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0"), "aptospad_swap", "TokenDistribute", [])]) },
    { name: "totalBid", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "bidaptospad_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0"), "aptospad_swap", "BidAptosPadEvent", [])]) },
    { name: "distributeaptospad_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0"), "aptospad_swap", "DistributeAptospadEvent", [])]) },
    { name: "whitelist_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0"), "aptospad_swap", "WhiteListEvent", [])]) }
];
class TokenDistribute {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.cap = proto['cap'];
        this.bid = proto['bid'];
        this.distributed = proto['distributed'];
        this.distributedToken = proto['distributedToken'];
        this.refund = proto['refund'];
        this.investor = proto['investor'];
    }
    static TokenDistributeParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, TokenDistribute);
        return new TokenDistribute(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, TokenDistribute, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, TokenDistribute, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "TokenDistribute", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.TokenDistribute = TokenDistribute;
TokenDistribute.moduleAddress = exports.moduleAddress;
TokenDistribute.moduleName = exports.moduleName;
TokenDistribute.structName = "TokenDistribute";
TokenDistribute.typeParameters = [];
TokenDistribute.fields = [
    { name: "cap", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "bid", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "distributed", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "distributedToken", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "refund", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "investor", typeTag: move_to_ts_2.AtomicTypeTag.Address }
];
class WhiteListEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.cap = proto['cap'];
        this.bid = proto['bid'];
        this.distributed = proto['distributed'];
        this.distributedToken = proto['distributedToken'];
        this.refund = proto['refund'];
        this.investor = proto['investor'];
    }
    static WhiteListEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, WhiteListEvent);
        return new WhiteListEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "WhiteListEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.WhiteListEvent = WhiteListEvent;
WhiteListEvent.moduleAddress = exports.moduleAddress;
WhiteListEvent.moduleName = exports.moduleName;
WhiteListEvent.structName = "WhiteListEvent";
WhiteListEvent.typeParameters = [];
WhiteListEvent.fields = [
    { name: "cap", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "bid", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "distributed", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "distributedToken", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "refund", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "investor", typeTag: move_to_ts_2.AtomicTypeTag.Address }
];
function addWhiteList_(aptospadAdmin, account, cap, $c) {
    let temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7, temp$8, investors, registry, wl, wlEventHandler;
    assert_admin_(aptospadAdmin, $c);
    if (!(Config.getSwapState_($c)).eq(($.copy(exports.STATE_WL)))) {
        throw $.abortCode($.copy(exports.ERR_SEASON_STATE));
    }
    registry = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
    investors = registry.investors;
    wlEventHandler = registry.whitelist_events;
    temp$8 = investors;
    temp$7 = $.copy(account);
    temp$1 = (0, move_to_ts_1.u64)("0");
    temp$2 = (0, move_to_ts_1.u64)("0");
    temp$3 = (0, move_to_ts_1.u64)("0");
    temp$4 = (0, move_to_ts_1.u64)("0");
    temp$5 = (0, move_to_ts_1.u64)("0");
    temp$6 = $.copy(account);
    wl = Iterable_table.borrow_mut_with_default_(temp$8, temp$7, new TokenDistribute({ cap: temp$1, bid: temp$4, distributed: temp$2, distributedToken: temp$3, refund: temp$5, investor: temp$6 }, new move_to_ts_2.SimpleStructTag(TokenDistribute)), $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
    wl.cap = $.copy(cap);
    Stdlib.Event.emit_event_(wlEventHandler, new WhiteListEvent({ cap: $.copy(wl.cap), bid: $.copy(wl.bid), distributed: $.copy(wl.distributedToken), distributedToken: $.copy(wl.refund), refund: $.copy(wl.refund), investor: $.copy(wl.investor) }, new move_to_ts_2.SimpleStructTag(WhiteListEvent)), $c, [new move_to_ts_2.SimpleStructTag(WhiteListEvent)]);
    return;
}
exports.addWhiteList_ = addWhiteList_;
function assert_admin_(aptosAdmin, $c) {
    if (!((Stdlib.Signer.address_of_(aptosAdmin, $c)).hex() === (new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).hex())) {
        throw $.abortCode($.copy(exports.ERR_PERMISSIONS));
    }
    return;
}
exports.assert_admin_ = assert_admin_;
function assert_no_emergency_($c) {
    if (!!Config.isEmergency_($c)) {
        throw $.abortCode($.copy(exports.ERR_EMERGENCY));
    }
    return;
}
exports.assert_no_emergency_ = assert_no_emergency_;
function bidAptosPad_(user, aptosAmount, $c) {
    let temp$1, temp$2, bypassWhitelistEnabled, eventHandler, hardCap, isWhitelisted, registry, wl;
    assert_no_emergency_($c);
    if (!(Config.getSwapState_($c)).eq(($.copy(exports.STATE_LAUNCHPAD)))) {
        throw $.abortCode($.copy(exports.ERR_SEASON_STATE));
    }
    hardCap = Config.getSwapConfigHardCap_($c);
    registry = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
    bypassWhitelistEnabled = Config.isBypassWhiteList_($c);
    [temp$1, temp$2] = [registry.investors, Stdlib.Signer.address_of_(user, $c)];
    isWhitelisted = Iterable_table.contains_(temp$1, temp$2, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
    if (!(bypassWhitelistEnabled || isWhitelisted)) {
        throw $.abortCode($.copy(exports.ERR_NOT_IN_WHITELIST));
    }
    if (!($.copy(registry.totalBid)).le($.copy(hardCap))) {
        throw $.abortCode($.copy(exports.ERR_HARDCAP_REACHED));
    }
    registry.totalBid = ($.copy(registry.totalBid)).add($.copy(aptosAmount));
    eventHandler = registry.bidaptospad_events;
    Stdlib.Coin.transfer_(user, Config.getResourceAddress_($c), $.copy(aptosAmount), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    Stdlib.Coin.register_(user, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0xd227f6b4afc330dae10d99c9ae176fd3b45314a0f351d2a3e88b79aeb71db2b0"), "aptospad_coin", "AptosPadCoin", [])]);
    wl = Iterable_table.borrow_mut_with_default_(registry.investors, Stdlib.Signer.address_of_(user, $c), new TokenDistribute({ cap: $.copy(exports.DEFAULT_CAP_1K), bid: (0, move_to_ts_1.u64)("0"), distributed: (0, move_to_ts_1.u64)("0"), distributedToken: (0, move_to_ts_1.u64)("0"), refund: (0, move_to_ts_1.u64)("0"), investor: Stdlib.Signer.address_of_(user, $c) }, new move_to_ts_2.SimpleStructTag(TokenDistribute)), $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
    wl.bid = $.copy(aptosAmount);
    Stdlib.Event.emit_event_(eventHandler, new BidAptosPadEvent({ cap: $.copy(wl.cap), bid: $.copy(wl.bid), investor: $.copy(wl.investor) }, new move_to_ts_2.SimpleStructTag(BidAptosPadEvent)), $c, [new move_to_ts_2.SimpleStructTag(BidAptosPadEvent)]);
    return;
}
exports.bidAptosPad_ = bidAptosPad_;
function bidAptosPadV2_(user, aptosAmount, $c) {
    let temp$1, temp$2, bypassWhitelistEnabled, eventHandler, hardCap, isWhitelisted, registry, wl;
    assert_no_emergency_($c);
    if (!(Config.getSwapState_($c)).eq(($.copy(exports.STATE_LAUNCHPAD)))) {
        throw $.abortCode($.copy(exports.ERR_SEASON_STATE));
    }
    hardCap = Config.getSwapConfigHardCap_($c);
    registry = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
    bypassWhitelistEnabled = Config.isBypassWhiteList_($c);
    [temp$1, temp$2] = [registry.investors, Stdlib.Signer.address_of_(user, $c)];
    isWhitelisted = Iterable_table.contains_(temp$1, temp$2, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
    if (!(bypassWhitelistEnabled || isWhitelisted)) {
        throw $.abortCode($.copy(exports.ERR_NOT_IN_WHITELIST));
    }
    if (!($.copy(registry.totalBid)).le($.copy(hardCap))) {
        throw $.abortCode($.copy(exports.ERR_HARDCAP_REACHED));
    }
    registry.totalBid = ($.copy(registry.totalBid)).add($.copy(aptosAmount));
    eventHandler = registry.bidaptospad_events;
    Stdlib.Coin.transfer_(user, Config.getResourceAddress_($c), $.copy(aptosAmount), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    if (!Stdlib.Coin.is_account_registered_(Stdlib.Signer.address_of_(user, $c), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0xd227f6b4afc330dae10d99c9ae176fd3b45314a0f351d2a3e88b79aeb71db2b0"), "aptospad_coin", "AptosPadCoin", [])])) {
        Stdlib.Coin.register_(user, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0xd227f6b4afc330dae10d99c9ae176fd3b45314a0f351d2a3e88b79aeb71db2b0"), "aptospad_coin", "AptosPadCoin", [])]);
    }
    else {
    }
    wl = Iterable_table.borrow_mut_with_default_(registry.investors, Stdlib.Signer.address_of_(user, $c), new TokenDistribute({ cap: $.copy(exports.DEFAULT_CAP_1K), bid: (0, move_to_ts_1.u64)("0"), distributed: (0, move_to_ts_1.u64)("0"), distributedToken: (0, move_to_ts_1.u64)("0"), refund: (0, move_to_ts_1.u64)("0"), investor: Stdlib.Signer.address_of_(user, $c) }, new move_to_ts_2.SimpleStructTag(TokenDistribute)), $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
    wl.bid = ($.copy(wl.bid)).add($.copy(aptosAmount));
    Stdlib.Event.emit_event_(eventHandler, new BidAptosPadEvent({ cap: $.copy(wl.cap), bid: $.copy(wl.bid), investor: $.copy(wl.investor) }, new move_to_ts_2.SimpleStructTag(BidAptosPadEvent)), $c, [new move_to_ts_2.SimpleStructTag(BidAptosPadEvent)]);
    return;
}
exports.bidAptosPadV2_ = bidAptosPadV2_;
function bidAptosPadV3_(user, aptosAmount, $c) {
    let temp$1, temp$2, bypassWhitelistEnabled, eventHandler, hardCap, isWhitelisted, registry, wl;
    assert_no_emergency_($c);
    if (!(Config.getSwapState_($c)).eq(($.copy(exports.STATE_LAUNCHPAD)))) {
        throw $.abortCode($.copy(exports.ERR_SEASON_STATE));
    }
    hardCap = Config.getSwapConfigHardCap_($c);
    registry = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
    bypassWhitelistEnabled = Config.isBypassWhiteList_($c);
    [temp$1, temp$2] = [registry.investors, Stdlib.Signer.address_of_(user, $c)];
    isWhitelisted = Iterable_table.contains_(temp$1, temp$2, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
    if (!(bypassWhitelistEnabled || isWhitelisted)) {
        throw $.abortCode($.copy(exports.ERR_NOT_IN_WHITELIST));
    }
    if (!($.copy(registry.totalBid)).le($.copy(hardCap))) {
        throw $.abortCode($.copy(exports.ERR_HARDCAP_REACHED));
    }
    wl = Iterable_table.borrow_mut_with_default_(registry.investors, Stdlib.Signer.address_of_(user, $c), new TokenDistribute({ cap: $.copy(exports.DEFAULT_CAP_1K), bid: (0, move_to_ts_1.u64)("0"), distributed: (0, move_to_ts_1.u64)("0"), distributedToken: (0, move_to_ts_1.u64)("0"), refund: (0, move_to_ts_1.u64)("0"), investor: Stdlib.Signer.address_of_(user, $c) }, new move_to_ts_2.SimpleStructTag(TokenDistribute)), $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
    wl.bid = ($.copy(wl.bid)).add($.copy(aptosAmount));
    checkBidOverflow_($.copy(wl.bid), $.copy(wl.cap), $c);
    registry.totalBid = ($.copy(registry.totalBid)).add($.copy(aptosAmount));
    eventHandler = registry.bidaptospad_events;
    Stdlib.Coin.transfer_(user, Config.getResourceAddress_($c), $.copy(aptosAmount), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    if (!Stdlib.Coin.is_account_registered_(Stdlib.Signer.address_of_(user, $c), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0xd227f6b4afc330dae10d99c9ae176fd3b45314a0f351d2a3e88b79aeb71db2b0"), "aptospad_coin", "AptosPadCoin", [])])) {
        Stdlib.Coin.register_(user, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0xd227f6b4afc330dae10d99c9ae176fd3b45314a0f351d2a3e88b79aeb71db2b0"), "aptospad_coin", "AptosPadCoin", [])]);
    }
    else {
    }
    Stdlib.Event.emit_event_(eventHandler, new BidAptosPadEvent({ cap: $.copy(wl.cap), bid: $.copy(wl.bid), investor: $.copy(wl.investor) }, new move_to_ts_2.SimpleStructTag(BidAptosPadEvent)), $c, [new move_to_ts_2.SimpleStructTag(BidAptosPadEvent)]);
    return;
}
exports.bidAptosPadV3_ = bidAptosPadV3_;
function bidAptosPadV4_(user, aptosAmount, $c) {
    let temp$1, temp$2, bypassWhitelistEnabled, eventHandler, hardCap, isWhitelisted, registry, userAddr, wl;
    assert_no_emergency_($c);
    if (!(Config.getSwapState_($c)).eq(($.copy(exports.STATE_LAUNCHPAD)))) {
        throw $.abortCode($.copy(exports.ERR_SEASON_STATE));
    }
    userAddr = Stdlib.Signer.address_of_(user, $c);
    hardCap = Config.getSwapConfigHardCap_($c);
    registry = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
    bypassWhitelistEnabled = Config.isBypassWhiteList_($c);
    [temp$1, temp$2] = [registry.investors, Stdlib.Signer.address_of_(user, $c)];
    isWhitelisted = Iterable_table.contains_(temp$1, temp$2, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
    if (!(bypassWhitelistEnabled || isWhitelisted)) {
        throw $.abortCode($.copy(exports.ERR_NOT_IN_WHITELIST));
    }
    if (!($.copy(registry.totalBid)).le($.copy(hardCap))) {
        throw $.abortCode($.copy(exports.ERR_HARDCAP_REACHED));
    }
    wl = Iterable_table.borrow_mut_with_default_(registry.investors, Stdlib.Signer.address_of_(user, $c), new TokenDistribute({ cap: $.copy(exports.DEFAULT_CAP_1K), bid: (0, move_to_ts_1.u64)("0"), distributed: (0, move_to_ts_1.u64)("0"), distributedToken: (0, move_to_ts_1.u64)("0"), refund: (0, move_to_ts_1.u64)("0"), investor: Stdlib.Signer.address_of_(user, $c) }, new move_to_ts_2.SimpleStructTag(TokenDistribute)), $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
    wl.bid = ($.copy(wl.bid)).add($.copy(aptosAmount));
    checkBidOverflow_($.copy(wl.bid), $.copy(wl.cap), $c);
    if ($c.exists(new move_to_ts_2.SimpleStructTag(TokenDistribute), $.copy(userAddr))) {
        $c.move_from(new move_to_ts_2.SimpleStructTag(TokenDistribute), Stdlib.Signer.address_of_(user, $c));
    }
    else {
    }
    $c.move_to(new move_to_ts_2.SimpleStructTag(TokenDistribute), user, $.copy(wl));
    registry.totalBid = ($.copy(registry.totalBid)).add($.copy(aptosAmount));
    eventHandler = registry.bidaptospad_events;
    Stdlib.Coin.transfer_(user, Config.getResourceAddress_($c), $.copy(aptosAmount), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    if (!Stdlib.Coin.is_account_registered_(Stdlib.Signer.address_of_(user, $c), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0xd227f6b4afc330dae10d99c9ae176fd3b45314a0f351d2a3e88b79aeb71db2b0"), "aptospad_coin", "AptosPadCoin", [])])) {
        Stdlib.Coin.register_(user, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0xd227f6b4afc330dae10d99c9ae176fd3b45314a0f351d2a3e88b79aeb71db2b0"), "aptospad_coin", "AptosPadCoin", [])]);
    }
    else {
    }
    Stdlib.Event.emit_event_(eventHandler, new BidAptosPadEvent({ cap: $.copy(wl.cap), bid: $.copy(wl.bid), investor: $.copy(wl.investor) }, new move_to_ts_2.SimpleStructTag(BidAptosPadEvent)), $c, [new move_to_ts_2.SimpleStructTag(BidAptosPadEvent)]);
    return;
}
exports.bidAptosPadV4_ = bidAptosPadV4_;
function bidAptosPadV5_(user, aptosAmount, $c) {
    let temp$1, temp$2, bill, bypassWhitelistEnabled, eventHandler, hardCap, isWhitelisted, registry, userAddr, wl;
    assert_no_emergency_($c);
    if (!(Config.getSwapState_($c)).eq(($.copy(exports.STATE_LAUNCHPAD)))) {
        throw $.abortCode($.copy(exports.ERR_SEASON_STATE));
    }
    userAddr = Stdlib.Signer.address_of_(user, $c);
    hardCap = Config.getSwapConfigHardCap_($c);
    registry = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
    bypassWhitelistEnabled = Config.isBypassWhiteList_($c);
    [temp$1, temp$2] = [registry.investors, Stdlib.Signer.address_of_(user, $c)];
    isWhitelisted = Iterable_table.contains_(temp$1, temp$2, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
    if (!(bypassWhitelistEnabled || isWhitelisted)) {
        throw $.abortCode($.copy(exports.ERR_NOT_IN_WHITELIST));
    }
    if (!($.copy(registry.totalBid)).le($.copy(hardCap))) {
        throw $.abortCode($.copy(exports.ERR_HARDCAP_REACHED));
    }
    wl = Iterable_table.borrow_mut_with_default_(registry.investors, Stdlib.Signer.address_of_(user, $c), new TokenDistribute({ cap: $.copy(exports.DEFAULT_CAP_1K), bid: (0, move_to_ts_1.u64)("0"), distributed: (0, move_to_ts_1.u64)("0"), distributedToken: (0, move_to_ts_1.u64)("0"), refund: (0, move_to_ts_1.u64)("0"), investor: Stdlib.Signer.address_of_(user, $c) }, new move_to_ts_2.SimpleStructTag(TokenDistribute)), $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
    wl.bid = ($.copy(wl.bid)).add($.copy(aptosAmount));
    registry.totalBid = ($.copy(registry.totalBid)).add($.copy(aptosAmount));
    checkBidOverflow_($.copy(wl.bid), $.copy(wl.cap), $c);
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(TokenDistribute), $.copy(userAddr))) {
        $c.move_to(new move_to_ts_2.SimpleStructTag(TokenDistribute), user, $.copy(wl));
    }
    else {
        bill = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(TokenDistribute), Stdlib.Signer.address_of_(user, $c));
        bill.bid = ($.copy(bill.bid)).add($.copy(aptosAmount));
    }
    eventHandler = registry.bidaptospad_events;
    Stdlib.Coin.transfer_(user, Config.getResourceAddress_($c), $.copy(aptosAmount), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    if (!Stdlib.Coin.is_account_registered_(Stdlib.Signer.address_of_(user, $c), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0xd227f6b4afc330dae10d99c9ae176fd3b45314a0f351d2a3e88b79aeb71db2b0"), "aptospad_coin", "AptosPadCoin", [])])) {
        Stdlib.Coin.register_(user, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0xd227f6b4afc330dae10d99c9ae176fd3b45314a0f351d2a3e88b79aeb71db2b0"), "aptospad_coin", "AptosPadCoin", [])]);
    }
    else {
    }
    Stdlib.Event.emit_event_(eventHandler, new BidAptosPadEvent({ cap: $.copy(wl.cap), bid: $.copy(wl.bid), investor: $.copy(wl.investor) }, new move_to_ts_2.SimpleStructTag(BidAptosPadEvent)), $c, [new move_to_ts_2.SimpleStructTag(BidAptosPadEvent)]);
    return;
}
exports.bidAptosPadV5_ = bidAptosPadV5_;
function checkBidOverflow_(_bid, _cap, $c) {
    return;
}
exports.checkBidOverflow_ = checkBidOverflow_;
function distributeAll_($c) {
    let temp$14, temp$2, temp$22, temp$28, temp$6, _prev, _prev__17, _prev__25, _prev__9, allocatedApt, availToAllocate, bidApt, bidApt__27, capApt, distributed, eventHandler, eventHandler__13, eventHandler__21, eventHandler__5, hardCapApt, investor, investor__16, investor__24, investor__8, investors, investors__12, investors__20, investors__4, looper, looper__15, looper__23, looper__7, moreAllocated, morePad, next, next__10, next__18, next__26, registry, registry__1, registry__11, registry__19, registry__3, toPadRate, totalBidApt;
    hardCapApt = Config.getSwapConfigHardCap_($c);
    toPadRate = Config.getSwapConfigAptToApttRate_($c);
    registry = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
    totalBidApt = $.copy(registry.totalBid);
    if (($.copy(totalBidApt)).le($.copy(hardCapApt))) {
        registry__1 = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
        investors = registry__1.investors;
        eventHandler = registry__1.distributeaptospad_events;
        temp$2 = Iterable_table.head_key_(investors, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
        looper = temp$2;
        while (Stdlib.Option.is_some_(looper, $c, [move_to_ts_2.AtomicTypeTag.Address])) {
            {
                [investor, _prev, next] = Iterable_table.borrow_iter_mut_(investors, Stdlib.Option.extract_(looper, $c, [move_to_ts_2.AtomicTypeTag.Address]), $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
                investor.distributed = $.copy(investor.bid);
                investor.distributedToken = ($.copy(investor.distributed)).mul($.copy(toPadRate));
                Config.mintAtppTo_($.copy(investor.investor), $.copy(investor.distributedToken), $c);
                Stdlib.Event.emit_event_(eventHandler, new DistributeAptospadEvent({ cap: $.copy(investor.cap), bid: $.copy(investor.bid), distributedToken: $.copy(investor.distributedToken), refund: $.copy(investor.refund), investor: $.copy(investor.investor) }, new move_to_ts_2.SimpleStructTag(DistributeAptospadEvent)), $c, [new move_to_ts_2.SimpleStructTag(DistributeAptospadEvent)]);
                looper = next;
            }
        }
    }
    else {
        availToAllocate = $.copy(hardCapApt);
        registry__3 = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
        investors__4 = registry__3.investors;
        eventHandler__5 = registry__3.distributeaptospad_events;
        temp$6 = Iterable_table.head_key_(investors__4, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
        looper__7 = temp$6;
        while (Stdlib.Option.is_some_(looper__7, $c, [move_to_ts_2.AtomicTypeTag.Address])) {
            {
                [investor__8, _prev__9, next__10] = Iterable_table.borrow_iter_mut_(investors__4, Stdlib.Option.extract_(looper__7, $c, [move_to_ts_2.AtomicTypeTag.Address]), $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
                capApt = $.copy(investor__8.cap);
                bidApt = $.copy(investor__8.bid);
                allocatedApt = Stdlib.Math64.min_(Stdlib.Math64.min_($.copy(capApt), $.copy(bidApt), $c), $.copy(availToAllocate), $c);
                if (($.copy(allocatedApt)).gt((0, move_to_ts_1.u64)("0"))) {
                    investor__8.distributed = $.copy(allocatedApt);
                    investor__8.distributedToken = ($.copy(allocatedApt)).mul($.copy(toPadRate));
                    availToAllocate = ($.copy(availToAllocate)).sub($.copy(allocatedApt));
                    Config.mintAtppTo_($.copy(investor__8.investor), $.copy(investor__8.distributedToken), $c);
                    Stdlib.Event.emit_event_(eventHandler__5, new DistributeAptospadEvent({ cap: $.copy(investor__8.cap), bid: $.copy(investor__8.bid), distributedToken: $.copy(investor__8.distributedToken), refund: $.copy(investor__8.refund), investor: $.copy(investor__8.investor) }, new move_to_ts_2.SimpleStructTag(DistributeAptospadEvent)), $c, [new move_to_ts_2.SimpleStructTag(DistributeAptospadEvent)]);
                }
                else {
                }
                if (($.copy(availToAllocate)).le((0, move_to_ts_1.u64)("0"))) {
                    break;
                }
                else {
                    looper__7 = next__10;
                    continue;
                }
            }
        }
        if (($.copy(availToAllocate)).gt((0, move_to_ts_1.u64)("0"))) {
            registry__11 = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
            investors__12 = registry__11.investors;
            eventHandler__13 = registry__11.distributeaptospad_events;
            temp$14 = Iterable_table.head_key_(investors__12, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
            looper__15 = temp$14;
            while (Stdlib.Option.is_some_(looper__15, $c, [move_to_ts_2.AtomicTypeTag.Address])) {
                {
                    [investor__16, _prev__17, next__18] = Iterable_table.borrow_iter_mut_(investors__12, Stdlib.Option.extract_(looper__15, $c, [move_to_ts_2.AtomicTypeTag.Address]), $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
                    moreAllocated = Stdlib.Math64.min_(Stdlib.Math64.max_(($.copy(investor__16.bid)).sub($.copy(investor__16.distributed)), (0, move_to_ts_1.u64)("0"), $c), $.copy(availToAllocate), $c);
                    if (($.copy(moreAllocated)).gt((0, move_to_ts_1.u64)("0"))) {
                        investor__16.distributed = ($.copy(investor__16.distributed)).add($.copy(moreAllocated));
                        morePad = ($.copy(moreAllocated)).mul($.copy(toPadRate));
                        investor__16.distributedToken = ($.copy(investor__16.distributedToken)).add($.copy(morePad));
                        availToAllocate = ($.copy(availToAllocate)).sub($.copy(moreAllocated));
                        Config.mintAtppTo_($.copy(investor__16.investor), $.copy(morePad), $c);
                        Stdlib.Event.emit_event_(eventHandler__13, new DistributeAptospadEvent({ cap: $.copy(investor__16.cap), bid: $.copy(investor__16.bid), distributedToken: $.copy(investor__16.distributedToken), refund: $.copy(investor__16.refund), investor: $.copy(investor__16.investor) }, new move_to_ts_2.SimpleStructTag(DistributeAptospadEvent)), $c, [new move_to_ts_2.SimpleStructTag(DistributeAptospadEvent)]);
                    }
                    else {
                    }
                    if (($.copy(availToAllocate)).le((0, move_to_ts_1.u64)("0"))) {
                        break;
                    }
                    else {
                        looper__15 = next__18;
                        continue;
                    }
                }
            }
        }
        else {
        }
        if (!($.copy(availToAllocate)).le((0, move_to_ts_1.u64)("0"))) {
            throw $.abortCode((0, move_to_ts_1.u64)("100001"));
        }
        registry__19 = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
        investors__20 = registry__19.investors;
        eventHandler__21 = registry__19.distributeaptospad_events;
        temp$22 = Iterable_table.head_key_(investors__20, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
        looper__23 = temp$22;
        while (Stdlib.Option.is_some_(looper__23, $c, [move_to_ts_2.AtomicTypeTag.Address])) {
            {
                [investor__24, _prev__25, next__26] = Iterable_table.borrow_iter_mut_(investors__20, Stdlib.Option.extract_(looper__23, $c, [move_to_ts_2.AtomicTypeTag.Address]), $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
                bidApt__27 = $.copy(investor__24.bid);
                distributed = $.copy(investor__24.distributed);
                if (!($.copy(bidApt__27)).ge($.copy(distributed))) {
                    throw $.abortCode((0, move_to_ts_1.u64)("10001"));
                }
                investor__24.refund = Stdlib.Math64.max_(($.copy(bidApt__27)).sub($.copy(distributed)), (0, move_to_ts_1.u64)("0"), $c);
                if (($.copy(investor__24.refund)).gt((0, move_to_ts_1.u64)("0"))) {
                    temp$28 = Config.getResourceSigner_($c);
                    refundAptos_(temp$28, $.copy(investor__24.investor), $.copy(investor__24.refund), $c);
                    Stdlib.Event.emit_event_(eventHandler__21, new DistributeAptospadEvent({ cap: $.copy(investor__24.cap), bid: $.copy(investor__24.bid), distributedToken: $.copy(investor__24.distributedToken), refund: $.copy(investor__24.refund), investor: $.copy(investor__24.investor) }, new move_to_ts_2.SimpleStructTag(DistributeAptospadEvent)), $c, [new move_to_ts_2.SimpleStructTag(DistributeAptospadEvent)]);
                }
                else {
                }
                looper__23 = next__26;
            }
        }
    }
    return;
}
exports.distributeAll_ = distributeAll_;
function distributeAllV2_($c) {
    let temp$14, temp$2, temp$22, temp$27, temp$6, _prev, _prev__17, _prev__25, _prev__9, allocatedApt, availToAllocate, eventHandler, eventHandler__13, eventHandler__21, eventHandler__5, hardCapApt, investors, investors__12, investors__20, investors__4, looper, looper__15, looper__23, looper__7, moreAllocated, moreAptAllocated, next, next__10, next__18, next__26, poolBill, poolBill__16, poolBill__24, poolBill__8, refundAmt, registry, registry__1, registry__11, registry__19, registry__3, toPadRate, totalBidApt;
    hardCapApt = Config.getSwapConfigHardCap_($c);
    toPadRate = Config.getSwapConfigAptToApttRate_($c);
    registry = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
    totalBidApt = $.copy(registry.totalBid);
    if (($.copy(totalBidApt)).le($.copy(hardCapApt))) {
        registry__1 = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
        investors = registry__1.investors;
        eventHandler = registry__1.distributeaptospad_events;
        temp$2 = Iterable_table.head_key_(investors, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
        looper = temp$2;
        while (Stdlib.Option.is_some_(looper, $c, [move_to_ts_2.AtomicTypeTag.Address])) {
            {
                [poolBill, _prev, next] = Iterable_table.borrow_iter_mut_(investors, Stdlib.Option.extract_(looper, $c, [move_to_ts_2.AtomicTypeTag.Address]), $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
                moreAptAllocated = $.copy(poolBill.bid);
                distributePerAccount_(poolBill, $.copy(toPadRate), $.copy(moreAptAllocated), $c);
                Stdlib.Event.emit_event_(eventHandler, new DistributeAptospadEvent({ cap: $.copy(poolBill.cap), bid: $.copy(poolBill.bid), distributedToken: $.copy(poolBill.distributedToken), refund: $.copy(poolBill.refund), investor: $.copy(poolBill.investor) }, new move_to_ts_2.SimpleStructTag(DistributeAptospadEvent)), $c, [new move_to_ts_2.SimpleStructTag(DistributeAptospadEvent)]);
                looper = next;
            }
        }
    }
    else {
        availToAllocate = $.copy(hardCapApt);
        registry__3 = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
        investors__4 = registry__3.investors;
        eventHandler__5 = registry__3.distributeaptospad_events;
        temp$6 = Iterable_table.head_key_(investors__4, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
        looper__7 = temp$6;
        while (Stdlib.Option.is_some_(looper__7, $c, [move_to_ts_2.AtomicTypeTag.Address])) {
            {
                [poolBill__8, _prev__9, next__10] = Iterable_table.borrow_iter_mut_(investors__4, Stdlib.Option.extract_(looper__7, $c, [move_to_ts_2.AtomicTypeTag.Address]), $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
                allocatedApt = Stdlib.Math64.min_(Stdlib.Math64.min_($.copy(poolBill__8.cap), $.copy(poolBill__8.bid), $c), $.copy(availToAllocate), $c);
                if (($.copy(allocatedApt)).gt((0, move_to_ts_1.u64)("0"))) {
                    availToAllocate = ($.copy(availToAllocate)).sub($.copy(allocatedApt));
                    distributePerAccount_(poolBill__8, $.copy(toPadRate), $.copy(allocatedApt), $c);
                    Stdlib.Event.emit_event_(eventHandler__5, new DistributeAptospadEvent({ cap: $.copy(poolBill__8.cap), bid: $.copy(poolBill__8.bid), distributedToken: $.copy(poolBill__8.distributedToken), refund: $.copy(poolBill__8.refund), investor: $.copy(poolBill__8.investor) }, new move_to_ts_2.SimpleStructTag(DistributeAptospadEvent)), $c, [new move_to_ts_2.SimpleStructTag(DistributeAptospadEvent)]);
                }
                else {
                }
                if (($.copy(availToAllocate)).le((0, move_to_ts_1.u64)("0"))) {
                    break;
                }
                else {
                    looper__7 = next__10;
                    continue;
                }
            }
        }
        if (($.copy(availToAllocate)).gt((0, move_to_ts_1.u64)("0"))) {
            registry__11 = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
            investors__12 = registry__11.investors;
            eventHandler__13 = registry__11.distributeaptospad_events;
            temp$14 = Iterable_table.head_key_(investors__12, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
            looper__15 = temp$14;
            while (Stdlib.Option.is_some_(looper__15, $c, [move_to_ts_2.AtomicTypeTag.Address])) {
                {
                    [poolBill__16, _prev__17, next__18] = Iterable_table.borrow_iter_mut_(investors__12, Stdlib.Option.extract_(looper__15, $c, [move_to_ts_2.AtomicTypeTag.Address]), $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
                    moreAllocated = Stdlib.Math64.min_(Stdlib.Math64.max_(($.copy(poolBill__16.bid)).sub($.copy(poolBill__16.distributed)), (0, move_to_ts_1.u64)("0"), $c), $.copy(availToAllocate), $c);
                    if (($.copy(moreAllocated)).gt((0, move_to_ts_1.u64)("0"))) {
                        availToAllocate = ($.copy(availToAllocate)).sub($.copy(moreAllocated));
                        distributePerAccount_(poolBill__16, $.copy(toPadRate), $.copy(moreAllocated), $c);
                        Stdlib.Event.emit_event_(eventHandler__13, new DistributeAptospadEvent({ cap: $.copy(poolBill__16.cap), bid: $.copy(poolBill__16.bid), distributedToken: $.copy(poolBill__16.distributedToken), refund: $.copy(poolBill__16.refund), investor: $.copy(poolBill__16.investor) }, new move_to_ts_2.SimpleStructTag(DistributeAptospadEvent)), $c, [new move_to_ts_2.SimpleStructTag(DistributeAptospadEvent)]);
                    }
                    else {
                    }
                    if (($.copy(availToAllocate)).le((0, move_to_ts_1.u64)("0"))) {
                        break;
                    }
                    else {
                        looper__15 = next__18;
                        continue;
                    }
                }
            }
        }
        else {
        }
        if (!($.copy(availToAllocate)).le((0, move_to_ts_1.u64)("0"))) {
            throw $.abortCode((0, move_to_ts_1.u64)("100001"));
        }
        registry__19 = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
        investors__20 = registry__19.investors;
        eventHandler__21 = registry__19.distributeaptospad_events;
        temp$22 = Iterable_table.head_key_(investors__20, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
        looper__23 = temp$22;
        while (Stdlib.Option.is_some_(looper__23, $c, [move_to_ts_2.AtomicTypeTag.Address])) {
            {
                [poolBill__24, _prev__25, next__26] = Iterable_table.borrow_iter_mut_(investors__20, Stdlib.Option.extract_(looper__23, $c, [move_to_ts_2.AtomicTypeTag.Address]), $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
                if (!($.copy(poolBill__24.bid)).ge($.copy(poolBill__24.distributed))) {
                    throw $.abortCode((0, move_to_ts_1.u64)("10001"));
                }
                refundAmt = Stdlib.Math64.max_(($.copy(poolBill__24.bid)).sub($.copy(poolBill__24.distributed)), (0, move_to_ts_1.u64)("0"), $c);
                if (($.copy(refundAmt)).gt((0, move_to_ts_1.u64)("0"))) {
                    temp$27 = Config.getResourceSigner_($c);
                    refundAptosV2_(temp$27, poolBill__24, $.copy(refundAmt), $c);
                    Stdlib.Event.emit_event_(eventHandler__21, new DistributeAptospadEvent({ cap: $.copy(poolBill__24.cap), bid: $.copy(poolBill__24.bid), distributedToken: $.copy(poolBill__24.distributedToken), refund: $.copy(poolBill__24.refund), investor: $.copy(poolBill__24.investor) }, new move_to_ts_2.SimpleStructTag(DistributeAptospadEvent)), $c, [new move_to_ts_2.SimpleStructTag(DistributeAptospadEvent)]);
                }
                else {
                }
                looper__23 = next__26;
            }
        }
    }
    return;
}
exports.distributeAllV2_ = distributeAllV2_;
function distributeAllV3_($c) {
    let temp$12, temp$19, temp$2, temp$24, temp$5, _prev, _prev__15, _prev__22, _prev__8, allocatedApt, availToAllocate, hardCapApt, investors, investors__11, investors__18, investors__4, looper, looper__13, looper__20, looper__6, moreAllocated, moreAptAllocated, next, next__16, next__23, next__9, poolBill, poolBill__14, poolBill__21, poolBill__7, refundAmt, registry, registry__1, registry__10, registry__17, registry__3, toPadRate, totalBidApt;
    hardCapApt = Config.getSwapConfigHardCap_($c);
    toPadRate = Config.getSwapConfigAptToApttRate_($c);
    registry = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
    totalBidApt = $.copy(registry.totalBid);
    if (($.copy(totalBidApt)).le($.copy(hardCapApt))) {
        registry__1 = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
        investors = registry__1.investors;
        temp$2 = Iterable_table.head_key_(investors, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
        looper = temp$2;
        while (Stdlib.Option.is_some_(looper, $c, [move_to_ts_2.AtomicTypeTag.Address])) {
            {
                [poolBill, _prev, next] = Iterable_table.borrow_iter_mut_(investors, Stdlib.Option.extract_(looper, $c, [move_to_ts_2.AtomicTypeTag.Address]), $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
                moreAptAllocated = $.copy(poolBill.bid);
                distributePerAccountV2_(poolBill, $.copy(toPadRate), $.copy(moreAptAllocated), $c);
                looper = next;
            }
        }
    }
    else {
        availToAllocate = $.copy(hardCapApt);
        registry__3 = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
        investors__4 = registry__3.investors;
        temp$5 = Iterable_table.head_key_(investors__4, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
        looper__6 = temp$5;
        while (Stdlib.Option.is_some_(looper__6, $c, [move_to_ts_2.AtomicTypeTag.Address])) {
            {
                [poolBill__7, _prev__8, next__9] = Iterable_table.borrow_iter_mut_(investors__4, Stdlib.Option.extract_(looper__6, $c, [move_to_ts_2.AtomicTypeTag.Address]), $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
                allocatedApt = Stdlib.Math64.min_(Stdlib.Math64.min_($.copy(poolBill__7.cap), $.copy(poolBill__7.bid), $c), $.copy(availToAllocate), $c);
                if (($.copy(allocatedApt)).gt((0, move_to_ts_1.u64)("0"))) {
                    availToAllocate = ($.copy(availToAllocate)).sub($.copy(allocatedApt));
                    distributePerAccountV2_(poolBill__7, $.copy(toPadRate), $.copy(allocatedApt), $c);
                }
                else {
                }
                if (($.copy(availToAllocate)).le((0, move_to_ts_1.u64)("0"))) {
                    break;
                }
                else {
                    looper__6 = next__9;
                    continue;
                }
            }
        }
        if (($.copy(availToAllocate)).gt((0, move_to_ts_1.u64)("0"))) {
            registry__10 = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
            investors__11 = registry__10.investors;
            temp$12 = Iterable_table.head_key_(investors__11, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
            looper__13 = temp$12;
            while (Stdlib.Option.is_some_(looper__13, $c, [move_to_ts_2.AtomicTypeTag.Address])) {
                {
                    [poolBill__14, _prev__15, next__16] = Iterable_table.borrow_iter_mut_(investors__11, Stdlib.Option.extract_(looper__13, $c, [move_to_ts_2.AtomicTypeTag.Address]), $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
                    moreAllocated = Stdlib.Math64.min_(Stdlib.Math64.max_(($.copy(poolBill__14.bid)).sub($.copy(poolBill__14.distributed)), (0, move_to_ts_1.u64)("0"), $c), $.copy(availToAllocate), $c);
                    if (($.copy(moreAllocated)).gt((0, move_to_ts_1.u64)("0"))) {
                        availToAllocate = ($.copy(availToAllocate)).sub($.copy(moreAllocated));
                        distributePerAccountV2_(poolBill__14, $.copy(toPadRate), $.copy(moreAllocated), $c);
                    }
                    else {
                    }
                    if (($.copy(availToAllocate)).le((0, move_to_ts_1.u64)("0"))) {
                        break;
                    }
                    else {
                        looper__13 = next__16;
                        continue;
                    }
                }
            }
        }
        else {
        }
        if (!($.copy(availToAllocate)).le((0, move_to_ts_1.u64)("0"))) {
            throw $.abortCode((0, move_to_ts_1.u64)("100001"));
        }
        registry__17 = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
        investors__18 = registry__17.investors;
        temp$19 = Iterable_table.head_key_(investors__18, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
        looper__20 = temp$19;
        while (Stdlib.Option.is_some_(looper__20, $c, [move_to_ts_2.AtomicTypeTag.Address])) {
            {
                [poolBill__21, _prev__22, next__23] = Iterable_table.borrow_iter_mut_(investors__18, Stdlib.Option.extract_(looper__20, $c, [move_to_ts_2.AtomicTypeTag.Address]), $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
                if (!($.copy(poolBill__21.bid)).ge($.copy(poolBill__21.distributed))) {
                    throw $.abortCode((0, move_to_ts_1.u64)("10001"));
                }
                refundAmt = Stdlib.Math64.max_(($.copy(poolBill__21.bid)).sub($.copy(poolBill__21.distributed)), (0, move_to_ts_1.u64)("0"), $c);
                if (($.copy(refundAmt)).gt((0, move_to_ts_1.u64)("0"))) {
                    temp$24 = Config.getResourceSigner_($c);
                    refundAptosV3_(temp$24, poolBill__21, $.copy(refundAmt), $c);
                }
                else {
                }
                looper__20 = next__23;
            }
        }
    }
    return;
}
exports.distributeAllV3_ = distributeAllV3_;
function distributeAtpp_($c) {
    let temp$1, enableRefund, softCap, totalBuy;
    softCap = Config.getSwapConfigSoftCap_($c);
    totalBuy = $.copy($c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c)).totalBid);
    enableRefund = Config.getSwapConfigEnableRefund_($c);
    if (enableRefund) {
        temp$1 = ($.copy(totalBuy)).lt($.copy(softCap));
    }
    else {
        temp$1 = false;
    }
    if (temp$1) {
        refundAll_($c);
    }
    else {
        distributeAll_($c);
    }
    return;
}
exports.distributeAtpp_ = distributeAtpp_;
function distributeAtppV2_($c) {
    let temp$1, enableRefund, softCap, totalBuy;
    softCap = Config.getSwapConfigSoftCap_($c);
    totalBuy = $.copy($c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c)).totalBid);
    enableRefund = Config.getSwapConfigEnableRefund_($c);
    if (enableRefund) {
        temp$1 = ($.copy(totalBuy)).lt($.copy(softCap));
    }
    else {
        temp$1 = false;
    }
    if (temp$1) {
        refundAllV2_($c);
    }
    else {
        distributeAllV2_($c);
    }
    return;
}
exports.distributeAtppV2_ = distributeAtppV2_;
function distributeAtppV3_($c) {
    let temp$1, enableRefund, softCap, totalBuy;
    softCap = Config.getSwapConfigSoftCap_($c);
    totalBuy = $.copy($c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c)).totalBid);
    enableRefund = Config.getSwapConfigEnableRefund_($c);
    if (enableRefund) {
        temp$1 = ($.copy(totalBuy)).lt($.copy(softCap));
    }
    else {
        temp$1 = false;
    }
    if (temp$1) {
        refundAllV3_($c);
    }
    else {
        distributeAllV3_($c);
    }
    return;
}
exports.distributeAtppV3_ = distributeAtppV3_;
function distributePerAccount_(poolBill, toPadRate, moreAptAllocated, $c) {
    let morePad, userBill;
    poolBill.distributed = ($.copy(poolBill.distributed)).add($.copy(moreAptAllocated));
    morePad = ($.copy(moreAptAllocated)).mul($.copy(toPadRate));
    poolBill.distributedToken = ($.copy(poolBill.distributedToken)).add($.copy(morePad));
    if ($c.exists(new move_to_ts_2.SimpleStructTag(TokenDistribute), $.copy(poolBill.investor))) {
        userBill = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(TokenDistribute), $.copy(poolBill.investor));
        userBill.distributed = $.copy(poolBill.distributed);
        userBill.distributedToken = $.copy(poolBill.distributedToken);
    }
    else {
    }
    Config.mintAtppTo_($.copy(poolBill.investor), $.copy(morePad), $c);
    return;
}
exports.distributePerAccount_ = distributePerAccount_;
function distributePerAccountV2_(poolBill, toPadRate, moreAptAllocated, $c) {
    let morePad, userBill;
    poolBill.distributed = ($.copy(poolBill.distributed)).add($.copy(moreAptAllocated));
    morePad = ($.copy(moreAptAllocated)).mul($.copy(toPadRate));
    poolBill.distributedToken = ($.copy(poolBill.distributedToken)).add($.copy(morePad));
    if ($c.exists(new move_to_ts_2.SimpleStructTag(TokenDistribute), $.copy(poolBill.investor))) {
        userBill = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(TokenDistribute), $.copy(poolBill.investor));
        userBill.distributed = $.copy(poolBill.distributed);
        userBill.distributedToken = $.copy(poolBill.distributedToken);
    }
    else {
    }
    return;
}
exports.distributePerAccountV2_ = distributePerAccountV2_;
function distributeSeason_(account, $c) {
    assert_admin_(account, $c);
    assert_no_emergency_($c);
    if (!(Config.getSwapState_($c)).eq(($.copy(exports.STATE_LAUNCHPAD)))) {
        throw $.abortCode($.copy(exports.ERR_SEASON_STATE));
    }
    Config.setSwapState_($.copy(exports.STATE_DISTRIBUTE), $c);
    distributeAtpp_($c);
    Config.setSwapState_($.copy(exports.STATE_ENDED), $c);
    return;
}
exports.distributeSeason_ = distributeSeason_;
function distributeSeasonV2_(account, $c) {
    assert_admin_(account, $c);
    assert_no_emergency_($c);
    if (!(Config.getSwapState_($c)).eq(($.copy(exports.STATE_LAUNCHPAD)))) {
        throw $.abortCode($.copy(exports.ERR_SEASON_STATE));
    }
    Config.setSwapState_($.copy(exports.STATE_DISTRIBUTE), $c);
    distributeAtppV2_($c);
    Config.setSwapState_($.copy(exports.STATE_ENDED), $c);
    return;
}
exports.distributeSeasonV2_ = distributeSeasonV2_;
function distributeSeasonV3_(account, $c) {
    assert_admin_(account, $c);
    assert_no_emergency_($c);
    if (!(Config.getSwapState_($c)).eq(($.copy(exports.STATE_LAUNCHPAD)))) {
        throw $.abortCode($.copy(exports.ERR_SEASON_STATE));
    }
    Config.setSwapState_($.copy(exports.STATE_DISTRIBUTE), $c);
    distributeAtppV3_($c);
    return;
}
exports.distributeSeasonV3_ = distributeSeasonV3_;
function getSwapTotalBid_($c) {
    return $.copy($c.borrow_global(new move_to_ts_2.SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c)).totalBid);
}
exports.getSwapTotalBid_ = getSwapTotalBid_;
function getWhiteList_(account, $c) {
    let temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7, temp$8, details, wl;
    details = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c)).investors;
    temp$8 = details;
    temp$7 = $.copy(account);
    temp$1 = (0, move_to_ts_1.u64)("0");
    temp$2 = (0, move_to_ts_1.u64)("0");
    temp$3 = (0, move_to_ts_1.u64)("0");
    temp$4 = (0, move_to_ts_1.u64)("0");
    temp$5 = (0, move_to_ts_1.u64)("0");
    temp$6 = $.copy(account);
    wl = Iterable_table.borrow_mut_with_default_(temp$8, temp$7, new TokenDistribute({ cap: temp$1, bid: temp$4, distributed: temp$2, distributedToken: temp$3, refund: temp$5, investor: temp$6 }, new move_to_ts_2.SimpleStructTag(TokenDistribute)), $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
    return [$.copy(wl.cap), $.copy(wl.bid), $.copy(wl.distributed), $.copy(wl.distributedToken), $.copy(wl.refund)];
}
exports.getWhiteList_ = getWhiteList_;
function getWhiteLists_($c) {
    let temp$1, _prev, investor, investors, looper, next, output;
    investors = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c)).investors;
    output = Stdlib.Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.Address]);
    temp$1 = Iterable_table.head_key_(investors, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
    looper = temp$1;
    while (Stdlib.Option.is_some_(looper, $c, [move_to_ts_2.AtomicTypeTag.Address])) {
        {
            [investor, _prev, next] = Iterable_table.borrow_iter_mut_(investors, Stdlib.Option.extract_(looper, $c, [move_to_ts_2.AtomicTypeTag.Address]), $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
            Stdlib.Vector.push_back_(output, $.copy(investor.investor), $c, [move_to_ts_2.AtomicTypeTag.Address]);
            looper = next;
        }
    }
    return $.copy(output);
}
exports.getWhiteLists_ = getWhiteLists_;
function initialize_(account, $c) {
    let temp$1, temp$10, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7, temp$8, temp$9;
    assert_admin_(account, $c);
    temp$9 = Config.getResourceSigner_($c);
    temp$10 = temp$9;
    temp$1 = Iterable_table.new___($c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
    temp$2 = (0, move_to_ts_1.u64)("0");
    temp$3 = Config.getResourceSigner_($c);
    temp$4 = Stdlib.Account.new_event_handle_(temp$3, $c, [new move_to_ts_2.SimpleStructTag(WhiteListEvent)]);
    temp$5 = Config.getResourceSigner_($c);
    temp$6 = Stdlib.Account.new_event_handle_(temp$5, $c, [new move_to_ts_2.SimpleStructTag(BidAptosPadEvent)]);
    temp$7 = Config.getResourceSigner_($c);
    temp$8 = Stdlib.Account.new_event_handle_(temp$7, $c, [new move_to_ts_2.SimpleStructTag(DistributeAptospadEvent)]);
    $c.move_to(new move_to_ts_2.SimpleStructTag(LaunchPadRegistry), temp$10, new LaunchPadRegistry({ investors: temp$1, totalBid: temp$2, bidaptospad_events: temp$6, distributeaptospad_events: temp$8, whitelist_events: temp$4 }, new move_to_ts_2.SimpleStructTag(LaunchPadRegistry)));
    Config.setSwapState_($.copy(exports.STATE_INIT), $c);
    return;
}
exports.initialize_ = initialize_;
function launchPadSeason_(account, $c) {
    assert_admin_(account, $c);
    if (!(Config.getSwapState_($c)).eq(($.copy(exports.STATE_WL)))) {
        throw $.abortCode($.copy(exports.ERR_SEASON_STATE));
    }
    Config.setSwapState_($.copy(exports.STATE_LAUNCHPAD), $c);
    return;
}
exports.launchPadSeason_ = launchPadSeason_;
function payCoinAndRefund_($c) {
    let temp$1, temp$2, _prev, investor, investors, looper, next, poolBill, refundAmt, registry, resourceSigner, tokenAmt;
    registry = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
    investors = registry.investors;
    temp$1 = Config.getResourceSigner_($c);
    resourceSigner = temp$1;
    temp$2 = Iterable_table.head_key_(investors, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
    looper = temp$2;
    while (Stdlib.Option.is_some_(looper, $c, [move_to_ts_2.AtomicTypeTag.Address])) {
        {
            [poolBill, _prev, next] = Iterable_table.borrow_iter_mut_(investors, Stdlib.Option.extract_(looper, $c, [move_to_ts_2.AtomicTypeTag.Address]), $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
            investor = $.copy(poolBill.investor);
            tokenAmt = $.copy(poolBill.distributedToken);
            refundAmt = $.copy(poolBill.refund);
            if (($.copy(tokenAmt)).gt((0, move_to_ts_1.u64)("0"))) {
                Config.mintAtppTo_($.copy(investor), $.copy(tokenAmt), $c);
            }
            else {
            }
            if (($.copy(refundAmt)).gt((0, move_to_ts_1.u64)("0"))) {
                Stdlib.Coin.transfer_(resourceSigner, $.copy(investor), $.copy(refundAmt), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
            }
            else {
            }
            looper = next;
        }
    }
    return;
}
exports.payCoinAndRefund_ = payCoinAndRefund_;
function paycoinAndRefund_(account, $c) {
    assert_admin_(account, $c);
    assert_no_emergency_($c);
    if (!(Config.getSwapState_($c)).eq(($.copy(exports.STATE_DISTRIBUTE)))) {
        throw $.abortCode($.copy(exports.ERR_SEASON_STATE));
    }
    payCoinAndRefund_($c);
    Config.setSwapState_($.copy(exports.STATE_ENDED), $c);
    return;
}
exports.paycoinAndRefund_ = paycoinAndRefund_;
function refundAll_($c) {
    let temp$1, temp$2, temp$3, temp$4, _prev, eventHandler, investor, investors, looper, next, registry, resourceSigner;
    registry = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
    investors = registry.investors;
    eventHandler = registry.distributeaptospad_events;
    temp$1 = Iterable_table.head_key_(investors, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
    looper = temp$1;
    temp$2 = Config.getResourceSigner_($c);
    resourceSigner = temp$2;
    while (Stdlib.Option.is_some_(looper, $c, [move_to_ts_2.AtomicTypeTag.Address])) {
        {
            [temp$3, temp$4] = [investors, Stdlib.Option.extract_(looper, $c, [move_to_ts_2.AtomicTypeTag.Address])];
            [investor, _prev, next] = Iterable_table.borrow_iter_(temp$3, temp$4, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
            refundAptos_(resourceSigner, $.copy(investor.investor), $.copy(investor.bid), $c);
            Stdlib.Event.emit_event_(eventHandler, new DistributeAptospadEvent({ cap: $.copy(investor.cap), bid: $.copy(investor.bid), distributedToken: $.copy(investor.distributedToken), refund: $.copy(investor.refund), investor: $.copy(investor.investor) }, new move_to_ts_2.SimpleStructTag(DistributeAptospadEvent)), $c, [new move_to_ts_2.SimpleStructTag(DistributeAptospadEvent)]);
            looper = next;
        }
    }
    return;
}
exports.refundAll_ = refundAll_;
function refundAllV2_($c) {
    let temp$1, temp$2, _prev, eventHandler, investors, looper, moreRefundAptAmt, next, poolBill, registry, resourceSigner;
    registry = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
    investors = registry.investors;
    eventHandler = registry.distributeaptospad_events;
    temp$1 = Iterable_table.head_key_(investors, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
    looper = temp$1;
    temp$2 = Config.getResourceSigner_($c);
    resourceSigner = temp$2;
    while (Stdlib.Option.is_some_(looper, $c, [move_to_ts_2.AtomicTypeTag.Address])) {
        {
            [poolBill, _prev, next] = Iterable_table.borrow_iter_mut_(investors, Stdlib.Option.extract_(looper, $c, [move_to_ts_2.AtomicTypeTag.Address]), $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
            moreRefundAptAmt = $.copy(poolBill.bid);
            refundAptosV2_(resourceSigner, poolBill, $.copy(moreRefundAptAmt), $c);
            Stdlib.Event.emit_event_(eventHandler, new DistributeAptospadEvent({ cap: $.copy(poolBill.cap), bid: $.copy(poolBill.bid), distributedToken: $.copy(poolBill.distributedToken), refund: $.copy(poolBill.refund), investor: $.copy(poolBill.investor) }, new move_to_ts_2.SimpleStructTag(DistributeAptospadEvent)), $c, [new move_to_ts_2.SimpleStructTag(DistributeAptospadEvent)]);
            looper = next;
        }
    }
    return;
}
exports.refundAllV2_ = refundAllV2_;
function refundAllV3_($c) {
    let temp$1, temp$2, _prev, investors, looper, moreRefundAptAmt, next, poolBill, registry, resourceSigner;
    registry = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
    investors = registry.investors;
    temp$1 = Iterable_table.head_key_(investors, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
    looper = temp$1;
    temp$2 = Config.getResourceSigner_($c);
    resourceSigner = temp$2;
    while (Stdlib.Option.is_some_(looper, $c, [move_to_ts_2.AtomicTypeTag.Address])) {
        {
            [poolBill, _prev, next] = Iterable_table.borrow_iter_mut_(investors, Stdlib.Option.extract_(looper, $c, [move_to_ts_2.AtomicTypeTag.Address]), $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(TokenDistribute)]);
            moreRefundAptAmt = $.copy(poolBill.bid);
            refundAptosV3_(resourceSigner, poolBill, $.copy(moreRefundAptAmt), $c);
            looper = next;
        }
    }
    return;
}
exports.refundAllV3_ = refundAllV3_;
function refundAptos_(resourceSigner, investor, bidAmt, $c) {
    Stdlib.Coin.transfer_(resourceSigner, $.copy(investor), $.copy(bidAmt), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    return;
}
exports.refundAptos_ = refundAptos_;
function refundAptosV2_(resourceSigner, poolBill, moreRefundAptAmt, $c) {
    let investorBill, realRefund;
    realRefund = ($.copy(moreRefundAptAmt)).sub((($.copy(moreRefundAptAmt)).mul($.copy(exports.REFUND_CHARGE_RATE_PER_100K))).div((0, move_to_ts_1.u64)("100000")));
    poolBill.refund = ($.copy(poolBill.refund)).add($.copy(realRefund));
    Stdlib.Coin.transfer_(resourceSigner, $.copy(poolBill.investor), $.copy(realRefund), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    if ($c.exists(new move_to_ts_2.SimpleStructTag(TokenDistribute), $.copy(poolBill.investor))) {
        investorBill = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(TokenDistribute), $.copy(poolBill.investor));
        investorBill.refund = ($.copy(investorBill.refund)).add($.copy(realRefund));
    }
    else {
    }
    return;
}
exports.refundAptosV2_ = refundAptosV2_;
function refundAptosV3_(_resourceSigner, poolBill, moreRefundAptAmt, $c) {
    let investorBill, realRefund;
    realRefund = $.copy(moreRefundAptAmt);
    poolBill.refund = ($.copy(poolBill.refund)).add($.copy(realRefund));
    if ($c.exists(new move_to_ts_2.SimpleStructTag(TokenDistribute), $.copy(poolBill.investor))) {
        investorBill = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(TokenDistribute), $.copy(poolBill.investor));
        investorBill.refund = ($.copy(investorBill.refund)).add($.copy(realRefund));
    }
    else {
    }
    return;
}
exports.refundAptosV3_ = refundAptosV3_;
function resetSeason_(account, $c) {
    assert_admin_(account, $c);
    if (!(Config.getSwapState_($c)).eq(($.copy(exports.STATE_ENDED)))) {
        throw $.abortCode($.copy(exports.ERR_SEASON_ENDED));
    }
    Config.setSwapState_($.copy(exports.STATE_INIT), $c);
    return;
}
exports.resetSeason_ = resetSeason_;
function whiteListSeason_(account, $c) {
    assert_admin_(account, $c);
    if (!(Config.getSwapState_($c)).eq(($.copy(exports.STATE_INIT)))) {
        throw $.abortCode($.copy(exports.ERR_SEASON_NOT_RESET));
    }
    Config.setSwapState_($.copy(exports.STATE_WL), $c);
    return;
}
exports.whiteListSeason_ = whiteListSeason_;
function withdrawAptos_(admin, debit, amount, $c) {
    let temp$1;
    assert_admin_(admin, $c);
    temp$1 = Config.getResourceSigner_($c);
    Stdlib.Coin.transfer_(temp$1, $.copy(debit), $.copy(amount), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    return;
}
exports.withdrawAptos_ = withdrawAptos_;
function withdrawAptosPad_(admin, debit, amount, $c) {
    let temp$1;
    assert_admin_(admin, $c);
    temp$1 = Config.getResourceSigner_($c);
    Stdlib.Coin.transfer_(temp$1, $.copy(debit), $.copy(amount), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0xd227f6b4afc330dae10d99c9ae176fd3b45314a0f351d2a3e88b79aeb71db2b0"), "aptospad_coin", "AptosPadCoin", [])]);
    return;
}
exports.withdrawAptosPad_ = withdrawAptosPad_;
function loadParsers(repo) {
    repo.addParser("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0::aptospad_swap::BidAptosPadEvent", BidAptosPadEvent.BidAptosPadEventParser);
    repo.addParser("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0::aptospad_swap::DistributeAptospadEvent", DistributeAptospadEvent.DistributeAptospadEventParser);
    repo.addParser("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0::aptospad_swap::LaunchPadRegistry", LaunchPadRegistry.LaunchPadRegistryParser);
    repo.addParser("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0::aptospad_swap::TokenDistribute", TokenDistribute.TokenDistributeParser);
    repo.addParser("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0::aptospad_swap::WhiteListEvent", WhiteListEvent.WhiteListEventParser);
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
    get BidAptosPadEvent() { return BidAptosPadEvent; }
    get DistributeAptospadEvent() { return DistributeAptospadEvent; }
    get LaunchPadRegistry() { return LaunchPadRegistry; }
    loadLaunchPadRegistry(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield LaunchPadRegistry.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get TokenDistribute() { return TokenDistribute; }
    loadTokenDistribute(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield TokenDistribute.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get WhiteListEvent() { return WhiteListEvent; }
}
exports.App = App;
//# sourceMappingURL=aptospad_swap.js.map