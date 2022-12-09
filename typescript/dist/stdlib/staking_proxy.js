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
exports.App = exports.loadParsers = exports.buildPayload_set_voter = exports.set_voter_ = exports.buildPayload_set_vesting_contract_voter = exports.set_vesting_contract_voter_ = exports.buildPayload_set_vesting_contract_operator = exports.set_vesting_contract_operator_ = exports.buildPayload_set_staking_contract_voter = exports.set_staking_contract_voter_ = exports.buildPayload_set_staking_contract_operator = exports.set_staking_contract_operator_ = exports.buildPayload_set_stake_pool_voter = exports.set_stake_pool_voter_ = exports.buildPayload_set_stake_pool_operator = exports.set_stake_pool_operator_ = exports.buildPayload_set_operator = exports.set_operator_ = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Signer = __importStar(require("./signer"));
const Stake = __importStar(require("./stake"));
const Staking_contract = __importStar(require("./staking_contract"));
const Vector = __importStar(require("./vector"));
const Vesting = __importStar(require("./vesting"));
exports.packageName = "AptosFramework";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "staking_proxy";
function set_operator_(owner, old_operator, new_operator, $c) {
    set_vesting_contract_operator_(owner, $.copy(old_operator), $.copy(new_operator), $c);
    set_staking_contract_operator_(owner, $.copy(old_operator), $.copy(new_operator), $c);
    set_stake_pool_operator_(owner, $.copy(new_operator), $c);
    return;
}
exports.set_operator_ = set_operator_;
function buildPayload_set_operator(old_operator, new_operator, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "staking_proxy", "set_operator", typeParamStrings, [
        old_operator,
        new_operator,
    ], isJSON);
}
exports.buildPayload_set_operator = buildPayload_set_operator;
function set_stake_pool_operator_(owner, new_operator, $c) {
    let owner_address;
    owner_address = Signer.address_of_(owner, $c);
    if (Stake.stake_pool_exists_($.copy(owner_address), $c)) {
        Stake.set_operator_(owner, $.copy(new_operator), $c);
    }
    else {
    }
    return;
}
exports.set_stake_pool_operator_ = set_stake_pool_operator_;
function buildPayload_set_stake_pool_operator(new_operator, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "staking_proxy", "set_stake_pool_operator", typeParamStrings, [
        new_operator,
    ], isJSON);
}
exports.buildPayload_set_stake_pool_operator = buildPayload_set_stake_pool_operator;
function set_stake_pool_voter_(owner, new_voter, $c) {
    if (Stake.stake_pool_exists_(Signer.address_of_(owner, $c), $c)) {
        Stake.set_delegated_voter_(owner, $.copy(new_voter), $c);
    }
    else {
    }
    return;
}
exports.set_stake_pool_voter_ = set_stake_pool_voter_;
function buildPayload_set_stake_pool_voter(new_voter, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "staking_proxy", "set_stake_pool_voter", typeParamStrings, [
        new_voter,
    ], isJSON);
}
exports.buildPayload_set_stake_pool_voter = buildPayload_set_stake_pool_voter;
function set_staking_contract_operator_(owner, old_operator, new_operator, $c) {
    let current_commission_percentage, owner_address;
    owner_address = Signer.address_of_(owner, $c);
    if (Staking_contract.staking_contract_exists_($.copy(owner_address), $.copy(old_operator), $c)) {
        current_commission_percentage = Staking_contract.commission_percentage_($.copy(owner_address), $.copy(old_operator), $c);
        Staking_contract.switch_operator_(owner, $.copy(old_operator), $.copy(new_operator), $.copy(current_commission_percentage), $c);
    }
    else {
    }
    return;
}
exports.set_staking_contract_operator_ = set_staking_contract_operator_;
function buildPayload_set_staking_contract_operator(old_operator, new_operator, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "staking_proxy", "set_staking_contract_operator", typeParamStrings, [
        old_operator,
        new_operator,
    ], isJSON);
}
exports.buildPayload_set_staking_contract_operator = buildPayload_set_staking_contract_operator;
function set_staking_contract_voter_(owner, operator, new_voter, $c) {
    let owner_address;
    owner_address = Signer.address_of_(owner, $c);
    if (Staking_contract.staking_contract_exists_($.copy(owner_address), $.copy(operator), $c)) {
        Staking_contract.update_voter_(owner, $.copy(operator), $.copy(new_voter), $c);
    }
    else {
    }
    return;
}
exports.set_staking_contract_voter_ = set_staking_contract_voter_;
function buildPayload_set_staking_contract_voter(operator, new_voter, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "staking_proxy", "set_staking_contract_voter", typeParamStrings, [
        operator,
        new_voter,
    ], isJSON);
}
exports.buildPayload_set_staking_contract_voter = buildPayload_set_staking_contract_voter;
function set_vesting_contract_operator_(owner, old_operator, new_operator, $c) {
    let temp$1, current_commission_percentage, i, len, owner_address, vesting_contract, vesting_contracts;
    owner_address = Signer.address_of_(owner, $c);
    temp$1 = Vesting.vesting_contracts_($.copy(owner_address), $c);
    vesting_contracts = temp$1;
    i = (0, move_to_ts_1.u64)("0");
    len = Vector.length_(vesting_contracts, $c, [move_to_ts_2.AtomicTypeTag.Address]);
    while (($.copy(i)).lt($.copy(len))) {
        {
            vesting_contract = $.copy(Vector.borrow_(vesting_contracts, $.copy(i), $c, [move_to_ts_2.AtomicTypeTag.Address]));
            if (((Vesting.operator_($.copy(vesting_contract), $c)).hex() === ($.copy(old_operator)).hex())) {
                current_commission_percentage = Vesting.operator_commission_percentage_($.copy(vesting_contract), $c);
                Vesting.update_operator_(owner, $.copy(vesting_contract), $.copy(new_operator), $.copy(current_commission_percentage), $c);
            }
            else {
            }
            i = ($.copy(i)).add((0, move_to_ts_1.u64)("1"));
        }
    }
    return;
}
exports.set_vesting_contract_operator_ = set_vesting_contract_operator_;
function buildPayload_set_vesting_contract_operator(old_operator, new_operator, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "staking_proxy", "set_vesting_contract_operator", typeParamStrings, [
        old_operator,
        new_operator,
    ], isJSON);
}
exports.buildPayload_set_vesting_contract_operator = buildPayload_set_vesting_contract_operator;
function set_vesting_contract_voter_(owner, operator, new_voter, $c) {
    let temp$1, i, len, owner_address, vesting_contract, vesting_contracts;
    owner_address = Signer.address_of_(owner, $c);
    temp$1 = Vesting.vesting_contracts_($.copy(owner_address), $c);
    vesting_contracts = temp$1;
    i = (0, move_to_ts_1.u64)("0");
    len = Vector.length_(vesting_contracts, $c, [move_to_ts_2.AtomicTypeTag.Address]);
    while (($.copy(i)).lt($.copy(len))) {
        {
            vesting_contract = $.copy(Vector.borrow_(vesting_contracts, $.copy(i), $c, [move_to_ts_2.AtomicTypeTag.Address]));
            if (((Vesting.operator_($.copy(vesting_contract), $c)).hex() === ($.copy(operator)).hex())) {
                Vesting.update_voter_(owner, $.copy(vesting_contract), $.copy(new_voter), $c);
            }
            else {
            }
            i = ($.copy(i)).add((0, move_to_ts_1.u64)("1"));
        }
    }
    return;
}
exports.set_vesting_contract_voter_ = set_vesting_contract_voter_;
function buildPayload_set_vesting_contract_voter(operator, new_voter, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "staking_proxy", "set_vesting_contract_voter", typeParamStrings, [
        operator,
        new_voter,
    ], isJSON);
}
exports.buildPayload_set_vesting_contract_voter = buildPayload_set_vesting_contract_voter;
function set_voter_(owner, operator, new_voter, $c) {
    set_vesting_contract_voter_(owner, $.copy(operator), $.copy(new_voter), $c);
    set_staking_contract_voter_(owner, $.copy(operator), $.copy(new_voter), $c);
    set_stake_pool_voter_(owner, $.copy(new_voter), $c);
    return;
}
exports.set_voter_ = set_voter_;
function buildPayload_set_voter(operator, new_voter, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "staking_proxy", "set_voter", typeParamStrings, [
        operator,
        new_voter,
    ], isJSON);
}
exports.buildPayload_set_voter = buildPayload_set_voter;
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
    payload_set_operator(old_operator, new_operator, isJSON = false) {
        return buildPayload_set_operator(old_operator, new_operator, isJSON);
    }
    set_operator(_account, old_operator, new_operator, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_set_operator(old_operator, new_operator, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_set_stake_pool_operator(new_operator, isJSON = false) {
        return buildPayload_set_stake_pool_operator(new_operator, isJSON);
    }
    set_stake_pool_operator(_account, new_operator, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_set_stake_pool_operator(new_operator, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_set_stake_pool_voter(new_voter, isJSON = false) {
        return buildPayload_set_stake_pool_voter(new_voter, isJSON);
    }
    set_stake_pool_voter(_account, new_voter, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_set_stake_pool_voter(new_voter, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_set_staking_contract_operator(old_operator, new_operator, isJSON = false) {
        return buildPayload_set_staking_contract_operator(old_operator, new_operator, isJSON);
    }
    set_staking_contract_operator(_account, old_operator, new_operator, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_set_staking_contract_operator(old_operator, new_operator, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_set_staking_contract_voter(operator, new_voter, isJSON = false) {
        return buildPayload_set_staking_contract_voter(operator, new_voter, isJSON);
    }
    set_staking_contract_voter(_account, operator, new_voter, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_set_staking_contract_voter(operator, new_voter, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_set_vesting_contract_operator(old_operator, new_operator, isJSON = false) {
        return buildPayload_set_vesting_contract_operator(old_operator, new_operator, isJSON);
    }
    set_vesting_contract_operator(_account, old_operator, new_operator, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_set_vesting_contract_operator(old_operator, new_operator, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_set_vesting_contract_voter(operator, new_voter, isJSON = false) {
        return buildPayload_set_vesting_contract_voter(operator, new_voter, isJSON);
    }
    set_vesting_contract_voter(_account, operator, new_voter, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_set_vesting_contract_voter(operator, new_voter, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_set_voter(operator, new_voter, isJSON = false) {
        return buildPayload_set_voter(operator, new_voter, isJSON);
    }
    set_voter(_account, operator, new_voter, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_set_voter(operator, new_voter, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
}
exports.App = App;
//# sourceMappingURL=staking_proxy.js.map