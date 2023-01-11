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
exports.setSwapState_ = exports.setEmergency_ = exports.setBypassWhitelist_ = exports.setApttSwapConfigV2_ = exports.setApttSwapConfig_ = exports.mintAtppTo_ = exports.isEmergency_ = exports.isBypassWhiteList_ = exports.initializeAptosPad_ = exports.getSwapState_ = exports.getSwapConfigSoftCap_ = exports.getSwapConfigHardCap_ = exports.getSwapConfigEnableRefund_ = exports.getSwapConfigAptToApttRate_ = exports.getSwapConfig_ = exports.getResourceSigner_ = exports.getResourceAddress_ = exports.getResourceAddr_ = exports.CapsStore = exports.ApttSwapConfig = exports.STATE_WL = exports.STATE_RELEASE = exports.STATE_INIT = exports.STATE_ENDED = exports.STATE_BUY = exports.ERR_SEASON_STATE = exports.ERR_SEASON_NOT_RESET = exports.ERR_SEASON_ENDED = exports.ERR_SEASON_ACTIVE = exports.ERR_PERMISSIONS = exports.ERR_INVALID_SUPPLY = exports.ERR_INVALID_RATE = exports.ERR_INVALID_CAP = exports.ERR_INITIALIZED = exports.ERR_HARDCAP_REACHED = exports.ERR_EMERGENCY = exports.CAP_80K = exports.CAP_50K = exports.CAP_500K = exports.CAP_40K = exports.CAP_400K = exports.CAP_300K = exports.CAP_20K = exports.CAP_200K = exports.CAP_190K = exports.CAP_10K = exports.CAP_100K = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
exports.App = exports.loadParsers = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Stdlib = __importStar(require("../stdlib"));
const Aptospad_coin_boot = __importStar(require("./aptospad_coin_boot"));
exports.packageName = "AptosPad";
exports.moduleAddress = new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0");
exports.moduleName = "config";
exports.CAP_100K = ((0, move_to_ts_1.u64)("100000000")).mul((0, move_to_ts_1.u64)("100000"));
exports.CAP_10K = ((0, move_to_ts_1.u64)("100000000")).mul((0, move_to_ts_1.u64)("10000"));
exports.CAP_190K = ((0, move_to_ts_1.u64)("100000000")).mul((0, move_to_ts_1.u64)("190000"));
exports.CAP_200K = ((0, move_to_ts_1.u64)("100000000")).mul((0, move_to_ts_1.u64)("200000"));
exports.CAP_20K = ((0, move_to_ts_1.u64)("100000000")).mul((0, move_to_ts_1.u64)("20000"));
exports.CAP_300K = ((0, move_to_ts_1.u64)("100000000")).mul((0, move_to_ts_1.u64)("300000"));
exports.CAP_400K = ((0, move_to_ts_1.u64)("100000000")).mul((0, move_to_ts_1.u64)("400000"));
exports.CAP_40K = ((0, move_to_ts_1.u64)("100000000")).mul((0, move_to_ts_1.u64)("40000"));
exports.CAP_500K = ((0, move_to_ts_1.u64)("100000000")).mul((0, move_to_ts_1.u64)("500000"));
exports.CAP_50K = ((0, move_to_ts_1.u64)("100000000")).mul((0, move_to_ts_1.u64)("50000"));
exports.CAP_80K = ((0, move_to_ts_1.u64)("100000000")).mul((0, move_to_ts_1.u64)("80000"));
exports.ERR_EMERGENCY = (0, move_to_ts_1.u64)("405");
exports.ERR_HARDCAP_REACHED = (0, move_to_ts_1.u64)("410");
exports.ERR_INITIALIZED = (0, move_to_ts_1.u64)("412");
exports.ERR_INVALID_CAP = (0, move_to_ts_1.u64)("414");
exports.ERR_INVALID_RATE = (0, move_to_ts_1.u64)("413");
exports.ERR_INVALID_SUPPLY = (0, move_to_ts_1.u64)("411");
exports.ERR_PERMISSIONS = (0, move_to_ts_1.u64)("403");
exports.ERR_SEASON_ACTIVE = (0, move_to_ts_1.u64)("408");
exports.ERR_SEASON_ENDED = (0, move_to_ts_1.u64)("406");
exports.ERR_SEASON_NOT_RESET = (0, move_to_ts_1.u64)("407");
exports.ERR_SEASON_STATE = (0, move_to_ts_1.u64)("409");
exports.STATE_BUY = (0, move_to_ts_1.u8)("3");
exports.STATE_ENDED = (0, move_to_ts_1.u8)("5");
exports.STATE_INIT = (0, move_to_ts_1.u8)("1");
exports.STATE_RELEASE = (0, move_to_ts_1.u8)("4");
exports.STATE_WL = (0, move_to_ts_1.u8)("2");
class ApttSwapConfig {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.emgergency = proto['emgergency'];
        this.softCap = proto['softCap'];
        this.hardCap = proto['hardCap'];
        this.refund = proto['refund'];
        this.aptToApttRate = proto['aptToApttRate'];
        this.state = proto['state'];
        this.bypassWhiteList = proto['bypassWhiteList'];
    }
    static ApttSwapConfigParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, ApttSwapConfig);
        return new ApttSwapConfig(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, ApttSwapConfig, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, ApttSwapConfig, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "ApttSwapConfig", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.ApttSwapConfig = ApttSwapConfig;
ApttSwapConfig.moduleAddress = exports.moduleAddress;
ApttSwapConfig.moduleName = exports.moduleName;
ApttSwapConfig.structName = "ApttSwapConfig";
ApttSwapConfig.typeParameters = [];
ApttSwapConfig.fields = [
    { name: "emgergency", typeTag: move_to_ts_2.AtomicTypeTag.Bool },
    { name: "softCap", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "hardCap", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "refund", typeTag: move_to_ts_2.AtomicTypeTag.Bool },
    { name: "aptToApttRate", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "state", typeTag: move_to_ts_2.AtomicTypeTag.U8 },
    { name: "bypassWhiteList", typeTag: move_to_ts_2.AtomicTypeTag.Bool }
];
class CapsStore {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.signer_cap = proto['signer_cap'];
        this.mint_cap = proto['mint_cap'];
        this.burn_cap = proto['burn_cap'];
        this.freeze_cap = proto['freeze_cap'];
    }
    static CapsStoreParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, CapsStore);
        return new CapsStore(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, CapsStore, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, CapsStore, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "CapsStore", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.signer_cap.loadFullState(app);
            yield this.mint_cap.loadFullState(app);
            yield this.burn_cap.loadFullState(app);
            yield this.freeze_cap.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.CapsStore = CapsStore;
CapsStore.moduleAddress = exports.moduleAddress;
CapsStore.moduleName = exports.moduleName;
CapsStore.structName = "CapsStore";
CapsStore.typeParameters = [];
CapsStore.fields = [
    { name: "signer_cap", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "account", "SignerCapability", []) },
    { name: "mint_cap", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "MintCapability", [new move_to_ts_2.StructTag(new aptos_1.HexString("0xd227f6b4afc330dae10d99c9ae176fd3b45314a0f351d2a3e88b79aeb71db2b0"), "aptospad_coin", "AptosPadCoin", [])]) },
    { name: "burn_cap", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "BurnCapability", [new move_to_ts_2.StructTag(new aptos_1.HexString("0xd227f6b4afc330dae10d99c9ae176fd3b45314a0f351d2a3e88b79aeb71db2b0"), "aptospad_coin", "AptosPadCoin", [])]) },
    { name: "freeze_cap", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "FreezeCapability", [new move_to_ts_2.StructTag(new aptos_1.HexString("0xd227f6b4afc330dae10d99c9ae176fd3b45314a0f351d2a3e88b79aeb71db2b0"), "aptospad_coin", "AptosPadCoin", [])]) }
];
function getResourceAddr_($c) {
    let temp$1;
    temp$1 = getResourceSigner_($c);
    return Stdlib.Signer.address_of_(temp$1, $c);
}
exports.getResourceAddr_ = getResourceAddr_;
function getResourceAddress_($c) {
    let signerCap;
    signerCap = $c.borrow_global(new move_to_ts_2.SimpleStructTag(CapsStore), new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).signer_cap;
    return Stdlib.Account.get_signer_capability_address_(signerCap, $c);
}
exports.getResourceAddress_ = getResourceAddress_;
function getResourceSigner_($c) {
    let signerCap;
    signerCap = $c.borrow_global(new move_to_ts_2.SimpleStructTag(CapsStore), new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).signer_cap;
    return Stdlib.Account.create_signer_with_capability_(signerCap, $c);
}
exports.getResourceSigner_ = getResourceSigner_;
function getSwapConfig_($c) {
    let config, signerCap;
    signerCap = $c.borrow_global(new move_to_ts_2.SimpleStructTag(CapsStore), new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).signer_cap;
    config = $c.borrow_global(new move_to_ts_2.SimpleStructTag(ApttSwapConfig), Stdlib.Account.get_signer_capability_address_(signerCap, $c));
    return [$.copy(config.hardCap), $.copy(config.softCap), $.copy(config.refund), $.copy(config.aptToApttRate)];
}
exports.getSwapConfig_ = getSwapConfig_;
function getSwapConfigAptToApttRate_($c) {
    let rate;
    [, , , rate] = getSwapConfig_($c);
    return $.copy(rate);
}
exports.getSwapConfigAptToApttRate_ = getSwapConfigAptToApttRate_;
function getSwapConfigEnableRefund_($c) {
    let enableRefund;
    [, , enableRefund,] = getSwapConfig_($c);
    return enableRefund;
}
exports.getSwapConfigEnableRefund_ = getSwapConfigEnableRefund_;
function getSwapConfigHardCap_($c) {
    let hardcap;
    [hardcap, , ,] = getSwapConfig_($c);
    return $.copy(hardcap);
}
exports.getSwapConfigHardCap_ = getSwapConfigHardCap_;
function getSwapConfigSoftCap_($c) {
    let softcap;
    [, softcap, ,] = getSwapConfig_($c);
    return $.copy(softcap);
}
exports.getSwapConfigSoftCap_ = getSwapConfigSoftCap_;
function getSwapState_($c) {
    let config, signerCap;
    signerCap = $c.borrow_global(new move_to_ts_2.SimpleStructTag(CapsStore), new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).signer_cap;
    config = $c.borrow_global(new move_to_ts_2.SimpleStructTag(ApttSwapConfig), Stdlib.Account.get_signer_capability_address_(signerCap, $c));
    return $.copy(config.state);
}
exports.getSwapState_ = getSwapState_;
function initializeAptosPad_(aptospadAdmin, padAptosFund, $c) {
    let temp$1, burn_cap, config, freeze_cap, mint_cap, resourceSigner, resourceSignerCap;
    if (!((Stdlib.Signer.address_of_(aptospadAdmin, $c)).hex() === (new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).hex())) {
        throw $.abortCode($.copy(exports.ERR_PERMISSIONS));
    }
    resourceSignerCap = Aptospad_coin_boot.retrieveResourceSignerCap_(aptospadAdmin, $c);
    temp$1 = Stdlib.Account.create_signer_with_capability_(resourceSignerCap, $c);
    resourceSigner = temp$1;
    if (!!$c.exists(new move_to_ts_2.SimpleStructTag(ApttSwapConfig), Stdlib.Signer.address_of_(resourceSigner, $c))) {
        throw $.abortCode($.copy(exports.ERR_INITIALIZED));
    }
    [burn_cap, freeze_cap, mint_cap] = Stdlib.Coin.initialize_(resourceSigner, Stdlib.String.utf8_([(0, move_to_ts_1.u8)("65"), (0, move_to_ts_1.u8)("112"), (0, move_to_ts_1.u8)("116"), (0, move_to_ts_1.u8)("111"), (0, move_to_ts_1.u8)("115"), (0, move_to_ts_1.u8)("80"), (0, move_to_ts_1.u8)("97"), (0, move_to_ts_1.u8)("100"), (0, move_to_ts_1.u8)("32"), (0, move_to_ts_1.u8)("67"), (0, move_to_ts_1.u8)("111"), (0, move_to_ts_1.u8)("105"), (0, move_to_ts_1.u8)("110")], $c), Stdlib.String.utf8_([(0, move_to_ts_1.u8)("65"), (0, move_to_ts_1.u8)("80"), (0, move_to_ts_1.u8)("68")], $c), (0, move_to_ts_1.u8)("8"), true, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0xd227f6b4afc330dae10d99c9ae176fd3b45314a0f351d2a3e88b79aeb71db2b0"), "aptospad_coin", "AptosPadCoin", [])]);
    Stdlib.Coin.register_(resourceSigner, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    Stdlib.Coin.register_(resourceSigner, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0xd227f6b4afc330dae10d99c9ae176fd3b45314a0f351d2a3e88b79aeb71db2b0"), "aptospad_coin", "AptosPadCoin", [])]);
    Stdlib.Coin.transfer_(aptospadAdmin, Stdlib.Signer.address_of_(resourceSigner, $c), $.copy(padAptosFund), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    $c.move_to(new move_to_ts_2.SimpleStructTag(CapsStore), aptospadAdmin, new CapsStore({ signer_cap: resourceSignerCap, mint_cap: $.copy(mint_cap), burn_cap: $.copy(burn_cap), freeze_cap: $.copy(freeze_cap) }, new move_to_ts_2.SimpleStructTag(CapsStore)));
    config = new ApttSwapConfig({ emgergency: false, softCap: $.copy(exports.CAP_10K), hardCap: $.copy(exports.CAP_50K), refund: false, aptToApttRate: (0, move_to_ts_1.u64)("1000"), state: $.copy(exports.STATE_INIT), bypassWhiteList: false }, new move_to_ts_2.SimpleStructTag(ApttSwapConfig));
    $c.move_to(new move_to_ts_2.SimpleStructTag(ApttSwapConfig), resourceSigner, config);
    Stdlib.Coin.destroy_mint_cap_($.copy(mint_cap), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0xd227f6b4afc330dae10d99c9ae176fd3b45314a0f351d2a3e88b79aeb71db2b0"), "aptospad_coin", "AptosPadCoin", [])]);
    Stdlib.Coin.destroy_freeze_cap_($.copy(freeze_cap), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0xd227f6b4afc330dae10d99c9ae176fd3b45314a0f351d2a3e88b79aeb71db2b0"), "aptospad_coin", "AptosPadCoin", [])]);
    Stdlib.Coin.destroy_burn_cap_($.copy(burn_cap), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0xd227f6b4afc330dae10d99c9ae176fd3b45314a0f351d2a3e88b79aeb71db2b0"), "aptospad_coin", "AptosPadCoin", [])]);
    return;
}
exports.initializeAptosPad_ = initializeAptosPad_;
function isBypassWhiteList_($c) {
    let signerCap;
    signerCap = $c.borrow_global(new move_to_ts_2.SimpleStructTag(CapsStore), new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).signer_cap;
    return $.copy($c.borrow_global(new move_to_ts_2.SimpleStructTag(ApttSwapConfig), Stdlib.Account.get_signer_capability_address_(signerCap, $c)).bypassWhiteList);
}
exports.isBypassWhiteList_ = isBypassWhiteList_;
function isEmergency_($c) {
    let config, signerCap;
    signerCap = $c.borrow_global(new move_to_ts_2.SimpleStructTag(CapsStore), new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).signer_cap;
    config = $c.borrow_global(new move_to_ts_2.SimpleStructTag(ApttSwapConfig), Stdlib.Account.get_signer_capability_address_(signerCap, $c));
    return $.copy(config.emgergency);
}
exports.isEmergency_ = isEmergency_;
function mintAtppTo_(investor, amount, $c) {
    let mintCap;
    mintCap = $c.borrow_global(new move_to_ts_2.SimpleStructTag(CapsStore), new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).mint_cap;
    Stdlib.Coin.deposit_($.copy(investor), Stdlib.Coin.mint_($.copy(amount), mintCap, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0xd227f6b4afc330dae10d99c9ae176fd3b45314a0f351d2a3e88b79aeb71db2b0"), "aptospad_coin", "AptosPadCoin", [])]), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0xd227f6b4afc330dae10d99c9ae176fd3b45314a0f351d2a3e88b79aeb71db2b0"), "aptospad_coin", "AptosPadCoin", [])]);
    return;
}
exports.mintAtppTo_ = mintAtppTo_;
function setApttSwapConfig_(aptospadAdmin, softCap, hardCap, refund, aptToApttRate, bypassWhitelist, $c) {
    let temp$1, temp$2, config, signerCap;
    if (!((Stdlib.Signer.address_of_(aptospadAdmin, $c)).hex() === (new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).hex())) {
        throw $.abortCode($.copy(exports.ERR_PERMISSIONS));
    }
    if (!(getSwapState_($c)).eq(($.copy(exports.STATE_INIT)))) {
        throw $.abortCode($.copy(exports.ERR_SEASON_STATE));
    }
    if (($.copy(softCap)).gt((0, move_to_ts_1.u64)("0"))) {
        temp$1 = ($.copy(hardCap)).gt((0, move_to_ts_1.u64)("0"));
    }
    else {
        temp$1 = false;
    }
    if (temp$1) {
        temp$2 = ($.copy(hardCap)).gt($.copy(softCap));
    }
    else {
        temp$2 = false;
    }
    if (!temp$2) {
        throw $.abortCode($.copy(exports.ERR_INVALID_CAP));
    }
    if (!($.copy(aptToApttRate)).gt((0, move_to_ts_1.u64)("0"))) {
        throw $.abortCode($.copy(exports.ERR_INVALID_RATE));
    }
    signerCap = $c.borrow_global(new move_to_ts_2.SimpleStructTag(CapsStore), new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).signer_cap;
    config = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(ApttSwapConfig), Stdlib.Account.get_signer_capability_address_(signerCap, $c));
    config.softCap = $.copy(softCap);
    config.hardCap = $.copy(hardCap);
    config.refund = refund;
    config.aptToApttRate = $.copy(aptToApttRate);
    config.bypassWhiteList = bypassWhitelist;
    return;
}
exports.setApttSwapConfig_ = setApttSwapConfig_;
function setApttSwapConfigV2_(aptospadAdmin, softCap, hardCap, refund, aptToApttRate, bypassWhitelist, $c) {
    let temp$1, temp$2, config, signerCap;
    if (!((Stdlib.Signer.address_of_(aptospadAdmin, $c)).hex() === (new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).hex())) {
        throw $.abortCode($.copy(exports.ERR_PERMISSIONS));
    }
    if (($.copy(softCap)).gt((0, move_to_ts_1.u64)("0"))) {
        temp$1 = ($.copy(hardCap)).gt((0, move_to_ts_1.u64)("0"));
    }
    else {
        temp$1 = false;
    }
    if (temp$1) {
        temp$2 = ($.copy(hardCap)).gt($.copy(softCap));
    }
    else {
        temp$2 = false;
    }
    if (!temp$2) {
        throw $.abortCode($.copy(exports.ERR_INVALID_CAP));
    }
    if (!($.copy(aptToApttRate)).gt((0, move_to_ts_1.u64)("0"))) {
        throw $.abortCode($.copy(exports.ERR_INVALID_RATE));
    }
    signerCap = $c.borrow_global(new move_to_ts_2.SimpleStructTag(CapsStore), new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).signer_cap;
    config = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(ApttSwapConfig), Stdlib.Account.get_signer_capability_address_(signerCap, $c));
    config.softCap = $.copy(softCap);
    config.hardCap = $.copy(hardCap);
    config.refund = refund;
    config.aptToApttRate = $.copy(aptToApttRate);
    config.bypassWhiteList = bypassWhitelist;
    return;
}
exports.setApttSwapConfigV2_ = setApttSwapConfigV2_;
function setBypassWhitelist_(aptospadAdmin, bypass, $c) {
    let config, signerCap;
    if (!((Stdlib.Signer.address_of_(aptospadAdmin, $c)).hex() === (new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).hex())) {
        throw $.abortCode($.copy(exports.ERR_PERMISSIONS));
    }
    signerCap = $c.borrow_global(new move_to_ts_2.SimpleStructTag(CapsStore), new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).signer_cap;
    config = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(ApttSwapConfig), Stdlib.Account.get_signer_capability_address_(signerCap, $c));
    config.bypassWhiteList = bypass;
    return;
}
exports.setBypassWhitelist_ = setBypassWhitelist_;
function setEmergency_(aptospadAdmin, emergency, $c) {
    let config, signerCap;
    if (!((Stdlib.Signer.address_of_(aptospadAdmin, $c)).hex() === (new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).hex())) {
        throw $.abortCode($.copy(exports.ERR_PERMISSIONS));
    }
    signerCap = $c.borrow_global(new move_to_ts_2.SimpleStructTag(CapsStore), new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).signer_cap;
    config = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(ApttSwapConfig), Stdlib.Account.get_signer_capability_address_(signerCap, $c));
    config.emgergency = emergency;
    return;
}
exports.setEmergency_ = setEmergency_;
function setSwapState_(state, $c) {
    let config, signerCap;
    signerCap = $c.borrow_global(new move_to_ts_2.SimpleStructTag(CapsStore), new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).signer_cap;
    config = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(ApttSwapConfig), Stdlib.Account.get_signer_capability_address_(signerCap, $c));
    config.state = $.copy(state);
    return;
}
exports.setSwapState_ = setSwapState_;
function loadParsers(repo) {
    repo.addParser("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0::config::ApttSwapConfig", ApttSwapConfig.ApttSwapConfigParser);
    repo.addParser("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0::config::CapsStore", CapsStore.CapsStoreParser);
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
    get ApttSwapConfig() { return ApttSwapConfig; }
    loadApttSwapConfig(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield ApttSwapConfig.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get CapsStore() { return CapsStore; }
    loadCapsStore(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield CapsStore.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
}
exports.App = App;
//# sourceMappingURL=config.js.map