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
exports.App = exports.loadParsers = exports.buildPayload_withdrawAptosPad = exports.withdrawAptosPad_ = exports.buildPayload_withdrawAptos = exports.withdrawAptos_ = exports.buildPayload_whiteListSeason = exports.whiteListSeason_ = exports.buildPayload_setEmergency = exports.setEmergency_ = exports.buildPayload_setBypassWhiteList = exports.setBypassWhiteList_ = exports.buildPayload_setApttSwapConfig = exports.setApttSwapConfig_ = exports.buildPayload_resetSeason = exports.resetSeason_ = exports.buildPayload_paycoinAndRefund = exports.paycoinAndRefund_ = exports.buildPayload_launchPadSeason = exports.launchPadSeason_ = exports.buildPayload_initializeAptosPad = exports.initializeAptosPad_ = exports.buildPayload_distributeSeason = exports.distributeSeason_ = exports.buildPayload_bidAptosPad = exports.bidAptosPad_ = exports.buildPayload_addWhiteList = exports.addWhiteList_ = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const aptos_1 = require("aptos");
const Aptospad_swap = __importStar(require("./aptospad_swap"));
const Config = __importStar(require("./config"));
exports.packageName = "AptosPad";
exports.moduleAddress = new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0");
exports.moduleName = "scripts";
function addWhiteList_(admin, user, cap, $c) {
    Aptospad_swap.addWhiteList_(admin, $.copy(user), $.copy(cap), $c);
    return;
}
exports.addWhiteList_ = addWhiteList_;
function buildPayload_addWhiteList(user, cap, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0"), "scripts", "addWhiteList", typeParamStrings, [
        user,
        cap,
    ], isJSON);
}
exports.buildPayload_addWhiteList = buildPayload_addWhiteList;
function bidAptosPad_(user, amount, $c) {
    Aptospad_swap.bidAptosPadV5_(user, $.copy(amount), $c);
    return;
}
exports.bidAptosPad_ = bidAptosPad_;
function buildPayload_bidAptosPad(amount, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0"), "scripts", "bidAptosPad", typeParamStrings, [
        amount,
    ], isJSON);
}
exports.buildPayload_bidAptosPad = buildPayload_bidAptosPad;
function distributeSeason_(admin, $c) {
    Aptospad_swap.distributeSeasonV3_(admin, $c);
    return;
}
exports.distributeSeason_ = distributeSeason_;
function buildPayload_distributeSeason(isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0"), "scripts", "distributeSeason", typeParamStrings, [], isJSON);
}
exports.buildPayload_distributeSeason = buildPayload_distributeSeason;
function initializeAptosPad_(admin, preFundAptos, $c) {
    Config.initializeAptosPad_(admin, $.copy(preFundAptos), $c);
    Aptospad_swap.initialize_(admin, $c);
    return;
}
exports.initializeAptosPad_ = initializeAptosPad_;
function buildPayload_initializeAptosPad(preFundAptos, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0"), "scripts", "initializeAptosPad", typeParamStrings, [
        preFundAptos,
    ], isJSON);
}
exports.buildPayload_initializeAptosPad = buildPayload_initializeAptosPad;
function launchPadSeason_(admin, $c) {
    Aptospad_swap.launchPadSeason_(admin, $c);
    return;
}
exports.launchPadSeason_ = launchPadSeason_;
function buildPayload_launchPadSeason(isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0"), "scripts", "launchPadSeason", typeParamStrings, [], isJSON);
}
exports.buildPayload_launchPadSeason = buildPayload_launchPadSeason;
function paycoinAndRefund_(admin, $c) {
    Aptospad_swap.paycoinAndRefund_(admin, $c);
    return;
}
exports.paycoinAndRefund_ = paycoinAndRefund_;
function buildPayload_paycoinAndRefund(isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0"), "scripts", "paycoinAndRefund", typeParamStrings, [], isJSON);
}
exports.buildPayload_paycoinAndRefund = buildPayload_paycoinAndRefund;
function resetSeason_(admin, $c) {
    Aptospad_swap.resetSeason_(admin, $c);
    return;
}
exports.resetSeason_ = resetSeason_;
function buildPayload_resetSeason(isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0"), "scripts", "resetSeason", typeParamStrings, [], isJSON);
}
exports.buildPayload_resetSeason = buildPayload_resetSeason;
function setApttSwapConfig_(admin, softCap, hardCap, enableRefund, aptToApttRate, bypassWhitelist, $c) {
    Config.setApttSwapConfigV2_(admin, $.copy(softCap), $.copy(hardCap), enableRefund, $.copy(aptToApttRate), bypassWhitelist, $c);
    return;
}
exports.setApttSwapConfig_ = setApttSwapConfig_;
function buildPayload_setApttSwapConfig(softCap, hardCap, enableRefund, aptToApttRate, bypassWhitelist, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0"), "scripts", "setApttSwapConfig", typeParamStrings, [
        softCap,
        hardCap,
        enableRefund,
        aptToApttRate,
        bypassWhitelist,
    ], isJSON);
}
exports.buildPayload_setApttSwapConfig = buildPayload_setApttSwapConfig;
function setBypassWhiteList_(admin, bypass, $c) {
    Config.setBypassWhitelist_(admin, bypass, $c);
    return;
}
exports.setBypassWhiteList_ = setBypassWhiteList_;
function buildPayload_setBypassWhiteList(bypass, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0"), "scripts", "setBypassWhiteList", typeParamStrings, [
        bypass,
    ], isJSON);
}
exports.buildPayload_setBypassWhiteList = buildPayload_setBypassWhiteList;
function setEmergency_(admin, emergency, $c) {
    Config.setEmergency_(admin, emergency, $c);
    return;
}
exports.setEmergency_ = setEmergency_;
function buildPayload_setEmergency(emergency, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0"), "scripts", "setEmergency", typeParamStrings, [
        emergency,
    ], isJSON);
}
exports.buildPayload_setEmergency = buildPayload_setEmergency;
function whiteListSeason_(admin, $c) {
    Aptospad_swap.whiteListSeason_(admin, $c);
    return;
}
exports.whiteListSeason_ = whiteListSeason_;
function buildPayload_whiteListSeason(isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0"), "scripts", "whiteListSeason", typeParamStrings, [], isJSON);
}
exports.buildPayload_whiteListSeason = buildPayload_whiteListSeason;
function withdrawAptos_(admin, debit, amount, $c) {
    Aptospad_swap.withdrawAptos_(admin, $.copy(debit), $.copy(amount), $c);
    return;
}
exports.withdrawAptos_ = withdrawAptos_;
function buildPayload_withdrawAptos(debit, amount, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0"), "scripts", "withdrawAptos", typeParamStrings, [
        debit,
        amount,
    ], isJSON);
}
exports.buildPayload_withdrawAptos = buildPayload_withdrawAptos;
function withdrawAptosPad_(admin, debit, amount, $c) {
    Aptospad_swap.withdrawAptosPad_(admin, $.copy(debit), $.copy(amount), $c);
    return;
}
exports.withdrawAptosPad_ = withdrawAptosPad_;
function buildPayload_withdrawAptosPad(debit, amount, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0"), "scripts", "withdrawAptosPad", typeParamStrings, [
        debit,
        amount,
    ], isJSON);
}
exports.buildPayload_withdrawAptosPad = buildPayload_withdrawAptosPad;
function loadParsers(repo) {
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
    payload_addWhiteList(user, cap, isJSON = false) {
        return buildPayload_addWhiteList(user, cap, isJSON);
    }
    addWhiteList(_account, user, cap, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_addWhiteList(user, cap, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_bidAptosPad(amount, isJSON = false) {
        return buildPayload_bidAptosPad(amount, isJSON);
    }
    bidAptosPad(_account, amount, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_bidAptosPad(amount, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_distributeSeason(isJSON = false) {
        return buildPayload_distributeSeason(isJSON);
    }
    distributeSeason(_account, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_distributeSeason(_isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_initializeAptosPad(preFundAptos, isJSON = false) {
        return buildPayload_initializeAptosPad(preFundAptos, isJSON);
    }
    initializeAptosPad(_account, preFundAptos, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_initializeAptosPad(preFundAptos, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_launchPadSeason(isJSON = false) {
        return buildPayload_launchPadSeason(isJSON);
    }
    launchPadSeason(_account, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_launchPadSeason(_isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_paycoinAndRefund(isJSON = false) {
        return buildPayload_paycoinAndRefund(isJSON);
    }
    paycoinAndRefund(_account, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_paycoinAndRefund(_isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_resetSeason(isJSON = false) {
        return buildPayload_resetSeason(isJSON);
    }
    resetSeason(_account, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_resetSeason(_isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_setApttSwapConfig(softCap, hardCap, enableRefund, aptToApttRate, bypassWhitelist, isJSON = false) {
        return buildPayload_setApttSwapConfig(softCap, hardCap, enableRefund, aptToApttRate, bypassWhitelist, isJSON);
    }
    setApttSwapConfig(_account, softCap, hardCap, enableRefund, aptToApttRate, bypassWhitelist, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_setApttSwapConfig(softCap, hardCap, enableRefund, aptToApttRate, bypassWhitelist, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_setBypassWhiteList(bypass, isJSON = false) {
        return buildPayload_setBypassWhiteList(bypass, isJSON);
    }
    setBypassWhiteList(_account, bypass, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_setBypassWhiteList(bypass, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_setEmergency(emergency, isJSON = false) {
        return buildPayload_setEmergency(emergency, isJSON);
    }
    setEmergency(_account, emergency, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_setEmergency(emergency, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_whiteListSeason(isJSON = false) {
        return buildPayload_whiteListSeason(isJSON);
    }
    whiteListSeason(_account, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_whiteListSeason(_isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_withdrawAptos(debit, amount, isJSON = false) {
        return buildPayload_withdrawAptos(debit, amount, isJSON);
    }
    withdrawAptos(_account, debit, amount, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_withdrawAptos(debit, amount, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_withdrawAptosPad(debit, amount, isJSON = false) {
        return buildPayload_withdrawAptosPad(debit, amount, isJSON);
    }
    withdrawAptosPad(_account, debit, amount, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_withdrawAptosPad(debit, amount, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
}
exports.App = App;
//# sourceMappingURL=scripts.js.map