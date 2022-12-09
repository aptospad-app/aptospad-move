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
exports.App = exports.loadParsers = exports.buildPayload_transfer = exports.transfer_ = exports.buildPayload_create_account = exports.create_account_ = exports.assert_account_is_registered_for_apt_ = exports.assert_account_exists_ = exports.EACCOUNT_NOT_REGISTERED_FOR_APT = exports.EACCOUNT_NOT_FOUND = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Account = __importStar(require("./account"));
const Coin = __importStar(require("./coin"));
const Error = __importStar(require("./error"));
exports.packageName = "AptosFramework";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "aptos_account";
exports.EACCOUNT_NOT_FOUND = (0, move_to_ts_1.u64)("1");
exports.EACCOUNT_NOT_REGISTERED_FOR_APT = (0, move_to_ts_1.u64)("2");
function assert_account_exists_(addr, $c) {
    if (!Account.exists_at_($.copy(addr), $c)) {
        throw $.abortCode(Error.not_found_($.copy(exports.EACCOUNT_NOT_FOUND), $c));
    }
    return;
}
exports.assert_account_exists_ = assert_account_exists_;
function assert_account_is_registered_for_apt_(addr, $c) {
    assert_account_exists_($.copy(addr), $c);
    if (!Coin.is_account_registered_($.copy(addr), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])])) {
        throw $.abortCode(Error.not_found_($.copy(exports.EACCOUNT_NOT_REGISTERED_FOR_APT), $c));
    }
    return;
}
exports.assert_account_is_registered_for_apt_ = assert_account_is_registered_for_apt_;
function create_account_(auth_key, $c) {
    let signer;
    signer = Account.create_account_($.copy(auth_key), $c);
    Coin.register_(signer, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    return;
}
exports.create_account_ = create_account_;
function buildPayload_create_account(auth_key, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "aptos_account", "create_account", typeParamStrings, [
        auth_key,
    ], isJSON);
}
exports.buildPayload_create_account = buildPayload_create_account;
function transfer_(source, to, amount, $c) {
    if (!Account.exists_at_($.copy(to), $c)) {
        create_account_($.copy(to), $c);
    }
    else {
    }
    return Coin.transfer_(source, $.copy(to), $.copy(amount), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
}
exports.transfer_ = transfer_;
function buildPayload_transfer(to, amount, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "aptos_account", "transfer", typeParamStrings, [
        to,
        amount,
    ], isJSON);
}
exports.buildPayload_transfer = buildPayload_transfer;
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
    payload_create_account(auth_key, isJSON = false) {
        return buildPayload_create_account(auth_key, isJSON);
    }
    create_account(_account, auth_key, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_create_account(auth_key, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_transfer(to, amount, isJSON = false) {
        return buildPayload_transfer(to, amount, isJSON);
    }
    transfer(_account, to, amount, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_transfer(to, amount, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
}
exports.App = App;
//# sourceMappingURL=aptos_account.js.map