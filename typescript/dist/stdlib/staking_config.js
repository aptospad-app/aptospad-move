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
exports.App = exports.loadParsers = exports.validate_required_stake_ = exports.update_voting_power_increase_limit_ = exports.update_rewards_rate_ = exports.update_required_stake_ = exports.update_recurring_lockup_duration_secs_ = exports.initialize_ = exports.get_voting_power_increase_limit_ = exports.get_reward_rate_ = exports.get_required_stake_ = exports.get_recurring_lockup_duration_ = exports.get_allow_validator_set_change_ = exports.get_ = exports.StakingConfig = exports.MAX_REWARDS_RATE = exports.EZERO_REWARDS_RATE_DENOMINATOR = exports.EZERO_LOCKUP_DURATION = exports.EINVALID_VOTING_POWER_INCREASE_LIMIT = exports.EINVALID_STAKE_RANGE = exports.EINVALID_REWARDS_RATE = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Error = __importStar(require("./error"));
const System_addresses = __importStar(require("./system_addresses"));
exports.packageName = "AptosFramework";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "staking_config";
exports.EINVALID_REWARDS_RATE = (0, move_to_ts_1.u64)("5");
exports.EINVALID_STAKE_RANGE = (0, move_to_ts_1.u64)("3");
exports.EINVALID_VOTING_POWER_INCREASE_LIMIT = (0, move_to_ts_1.u64)("4");
exports.EZERO_LOCKUP_DURATION = (0, move_to_ts_1.u64)("1");
exports.EZERO_REWARDS_RATE_DENOMINATOR = (0, move_to_ts_1.u64)("2");
exports.MAX_REWARDS_RATE = (0, move_to_ts_1.u64)("1000000");
class StakingConfig {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.minimum_stake = proto['minimum_stake'];
        this.maximum_stake = proto['maximum_stake'];
        this.recurring_lockup_duration_secs = proto['recurring_lockup_duration_secs'];
        this.allow_validator_set_change = proto['allow_validator_set_change'];
        this.rewards_rate = proto['rewards_rate'];
        this.rewards_rate_denominator = proto['rewards_rate_denominator'];
        this.voting_power_increase_limit = proto['voting_power_increase_limit'];
    }
    static StakingConfigParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, StakingConfig);
        return new StakingConfig(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, StakingConfig, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, StakingConfig, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "StakingConfig", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.StakingConfig = StakingConfig;
StakingConfig.moduleAddress = exports.moduleAddress;
StakingConfig.moduleName = exports.moduleName;
StakingConfig.structName = "StakingConfig";
StakingConfig.typeParameters = [];
StakingConfig.fields = [
    { name: "minimum_stake", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "maximum_stake", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "recurring_lockup_duration_secs", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "allow_validator_set_change", typeTag: move_to_ts_2.AtomicTypeTag.Bool },
    { name: "rewards_rate", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "rewards_rate_denominator", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "voting_power_increase_limit", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
function get_($c) {
    return $.copy($c.borrow_global(new move_to_ts_2.SimpleStructTag(StakingConfig), new aptos_1.HexString("0x1")));
}
exports.get_ = get_;
function get_allow_validator_set_change_(config, $c) {
    return $.copy(config.allow_validator_set_change);
}
exports.get_allow_validator_set_change_ = get_allow_validator_set_change_;
function get_recurring_lockup_duration_(config, $c) {
    return $.copy(config.recurring_lockup_duration_secs);
}
exports.get_recurring_lockup_duration_ = get_recurring_lockup_duration_;
function get_required_stake_(config, $c) {
    return [$.copy(config.minimum_stake), $.copy(config.maximum_stake)];
}
exports.get_required_stake_ = get_required_stake_;
function get_reward_rate_(config, $c) {
    return [$.copy(config.rewards_rate), $.copy(config.rewards_rate_denominator)];
}
exports.get_reward_rate_ = get_reward_rate_;
function get_voting_power_increase_limit_(config, $c) {
    return $.copy(config.voting_power_increase_limit);
}
exports.get_voting_power_increase_limit_ = get_voting_power_increase_limit_;
function initialize_(aptos_framework, minimum_stake, maximum_stake, recurring_lockup_duration_secs, allow_validator_set_change, rewards_rate, rewards_rate_denominator, voting_power_increase_limit, $c) {
    let temp$1;
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    validate_required_stake_($.copy(minimum_stake), $.copy(maximum_stake), $c);
    if (!($.copy(recurring_lockup_duration_secs)).gt((0, move_to_ts_1.u64)("0"))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EZERO_LOCKUP_DURATION), $c));
    }
    if (!($.copy(rewards_rate_denominator)).gt((0, move_to_ts_1.u64)("0"))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EZERO_REWARDS_RATE_DENOMINATOR), $c));
    }
    if (($.copy(voting_power_increase_limit)).gt((0, move_to_ts_1.u64)("0"))) {
        temp$1 = ($.copy(voting_power_increase_limit)).le((0, move_to_ts_1.u64)("50"));
    }
    else {
        temp$1 = false;
    }
    if (!temp$1) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EINVALID_VOTING_POWER_INCREASE_LIMIT), $c));
    }
    if (!($.copy(rewards_rate)).le($.copy(exports.MAX_REWARDS_RATE))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EINVALID_REWARDS_RATE), $c));
    }
    if (!($.copy(rewards_rate)).le($.copy(rewards_rate_denominator))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EINVALID_REWARDS_RATE), $c));
    }
    $c.move_to(new move_to_ts_2.SimpleStructTag(StakingConfig), aptos_framework, new StakingConfig({ minimum_stake: $.copy(minimum_stake), maximum_stake: $.copy(maximum_stake), recurring_lockup_duration_secs: $.copy(recurring_lockup_duration_secs), allow_validator_set_change: allow_validator_set_change, rewards_rate: $.copy(rewards_rate), rewards_rate_denominator: $.copy(rewards_rate_denominator), voting_power_increase_limit: $.copy(voting_power_increase_limit) }, new move_to_ts_2.SimpleStructTag(StakingConfig)));
    return;
}
exports.initialize_ = initialize_;
function update_recurring_lockup_duration_secs_(aptos_framework, new_recurring_lockup_duration_secs, $c) {
    let staking_config;
    if (!($.copy(new_recurring_lockup_duration_secs)).gt((0, move_to_ts_1.u64)("0"))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EZERO_LOCKUP_DURATION), $c));
    }
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    staking_config = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(StakingConfig), new aptos_1.HexString("0x1"));
    staking_config.recurring_lockup_duration_secs = $.copy(new_recurring_lockup_duration_secs);
    return;
}
exports.update_recurring_lockup_duration_secs_ = update_recurring_lockup_duration_secs_;
function update_required_stake_(aptos_framework, minimum_stake, maximum_stake, $c) {
    let staking_config;
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    validate_required_stake_($.copy(minimum_stake), $.copy(maximum_stake), $c);
    staking_config = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(StakingConfig), new aptos_1.HexString("0x1"));
    staking_config.minimum_stake = $.copy(minimum_stake);
    staking_config.maximum_stake = $.copy(maximum_stake);
    return;
}
exports.update_required_stake_ = update_required_stake_;
function update_rewards_rate_(aptos_framework, new_rewards_rate, new_rewards_rate_denominator, $c) {
    let staking_config;
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    if (!($.copy(new_rewards_rate_denominator)).gt((0, move_to_ts_1.u64)("0"))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EZERO_REWARDS_RATE_DENOMINATOR), $c));
    }
    if (!($.copy(new_rewards_rate)).le($.copy(exports.MAX_REWARDS_RATE))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EINVALID_REWARDS_RATE), $c));
    }
    if (!($.copy(new_rewards_rate)).le($.copy(new_rewards_rate_denominator))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EINVALID_REWARDS_RATE), $c));
    }
    staking_config = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(StakingConfig), new aptos_1.HexString("0x1"));
    staking_config.rewards_rate = $.copy(new_rewards_rate);
    staking_config.rewards_rate_denominator = $.copy(new_rewards_rate_denominator);
    return;
}
exports.update_rewards_rate_ = update_rewards_rate_;
function update_voting_power_increase_limit_(aptos_framework, new_voting_power_increase_limit, $c) {
    let temp$1, staking_config;
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    if (($.copy(new_voting_power_increase_limit)).gt((0, move_to_ts_1.u64)("0"))) {
        temp$1 = ($.copy(new_voting_power_increase_limit)).le((0, move_to_ts_1.u64)("50"));
    }
    else {
        temp$1 = false;
    }
    if (!temp$1) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EINVALID_VOTING_POWER_INCREASE_LIMIT), $c));
    }
    staking_config = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(StakingConfig), new aptos_1.HexString("0x1"));
    staking_config.voting_power_increase_limit = $.copy(new_voting_power_increase_limit);
    return;
}
exports.update_voting_power_increase_limit_ = update_voting_power_increase_limit_;
function validate_required_stake_(minimum_stake, maximum_stake, $c) {
    let temp$1;
    if (($.copy(minimum_stake)).le($.copy(maximum_stake))) {
        temp$1 = ($.copy(maximum_stake)).gt((0, move_to_ts_1.u64)("0"));
    }
    else {
        temp$1 = false;
    }
    if (!temp$1) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EINVALID_STAKE_RANGE), $c));
    }
    return;
}
exports.validate_required_stake_ = validate_required_stake_;
function loadParsers(repo) {
    repo.addParser("0x1::staking_config::StakingConfig", StakingConfig.StakingConfigParser);
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
    get StakingConfig() { return StakingConfig; }
    loadStakingConfig(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield StakingConfig.load(this.repo, this.client, owner, []);
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
//# sourceMappingURL=staking_config.js.map