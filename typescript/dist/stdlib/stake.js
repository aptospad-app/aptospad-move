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
exports.buildPayload_add_stake = exports.add_stake_ = exports.WithdrawStakeEvent = exports.ValidatorSet = exports.ValidatorPerformance = exports.ValidatorInfo = exports.ValidatorConfig = exports.UpdateNetworkAndFullnodeAddressesEvent = exports.UnlockStakeEvent = exports.StakePool = exports.SetOperatorEvent = exports.RotateConsensusKeyEvent = exports.RegisterValidatorCandidateEvent = exports.ReactivateStakeEvent = exports.OwnerCapability = exports.LeaveValidatorSetEvent = exports.JoinValidatorSetEvent = exports.IndividualValidatorPerformance = exports.IncreaseLockupEvent = exports.DistributeRewardsEvent = exports.AptosCoinCapabilities = exports.AllowedValidators = exports.AddStakeEvent = exports.VALIDATOR_STATUS_PENDING_INACTIVE = exports.VALIDATOR_STATUS_PENDING_ACTIVE = exports.VALIDATOR_STATUS_INACTIVE = exports.VALIDATOR_STATUS_ACTIVE = exports.MAX_VALIDATOR_SET_SIZE = exports.MAX_REWARDS_RATE = exports.EVOTING_POWER_INCREASE_EXCEEDS_LIMIT = exports.EVALIDATOR_SET_TOO_LARGE = exports.EVALIDATOR_CONFIG = exports.ESTAKE_TOO_LOW = exports.ESTAKE_TOO_HIGH = exports.ESTAKE_POOL_DOES_NOT_EXIST = exports.ESTAKE_EXCEEDS_MAX = exports.EOWNER_CAP_NOT_FOUND = exports.EOWNER_CAP_ALREADY_EXISTS = exports.ENO_POST_GENESIS_VALIDATOR_SET_CHANGE_ALLOWED = exports.ENOT_VALIDATOR = exports.ENOT_OPERATOR = exports.ELAST_VALIDATOR = exports.EINVALID_PUBLIC_KEY = exports.EINVALID_LOCKUP = exports.EINELIGIBLE_VALIDATOR = exports.EALREADY_REGISTERED = exports.EALREADY_ACTIVE_VALIDATOR = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
exports.set_delegated_voter_with_cap_ = exports.buildPayload_set_delegated_voter = exports.set_delegated_voter_ = exports.buildPayload_rotate_consensus_key = exports.rotate_consensus_key_ = exports.remove_validators_ = exports.reactivate_stake_with_cap_ = exports.buildPayload_reactivate_stake = exports.reactivate_stake_ = exports.on_new_epoch_ = exports.buildPayload_leave_validator_set = exports.leave_validator_set_ = exports.join_validator_set_internal_ = exports.buildPayload_join_validator_set = exports.join_validator_set_ = exports.is_current_epoch_validator_ = exports.is_allowed_ = exports.buildPayload_initialize_validator = exports.initialize_validator_ = exports.buildPayload_initialize_stake_owner = exports.initialize_stake_owner_ = exports.initialize_owner_ = exports.initialize_ = exports.increase_lockup_with_cap_ = exports.buildPayload_increase_lockup = exports.increase_lockup_ = exports.get_validator_state_ = exports.get_validator_index_ = exports.get_validator_config_ = exports.get_stake_ = exports.get_remaining_lockup_secs_ = exports.get_owned_pool_address_ = exports.get_operator_ = exports.get_next_epoch_voting_power_ = exports.get_lockup_secs_ = exports.get_delegated_voter_ = exports.get_current_epoch_voting_power_ = exports.get_current_epoch_proposal_counts_ = exports.generate_validator_info_ = exports.find_validator_ = exports.extract_owner_cap_ = exports.distribute_rewards_ = exports.destroy_owner_cap_ = exports.deposit_owner_cap_ = exports.configure_allowed_validators_ = exports.calculate_rewards_amount_ = exports.assert_stake_pool_exists_ = exports.assert_owner_cap_exists_ = exports.append_ = exports.add_stake_with_cap_ = void 0;
exports.App = exports.loadParsers = exports.withdraw_with_cap_ = exports.buildPayload_withdraw = exports.withdraw_ = exports.update_voting_power_increase_ = exports.update_stake_pool_ = exports.update_performance_statistics_ = exports.buildPayload_update_network_and_fullnode_addresses = exports.update_network_and_fullnode_addresses_ = exports.unlock_with_cap_ = exports.buildPayload_unlock = exports.unlock_ = exports.store_aptos_coin_mint_cap_ = exports.stake_pool_exists_ = exports.set_operator_with_cap_ = exports.buildPayload_set_operator = exports.set_operator_ = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Account = __importStar(require("./account"));
const Bls12381 = __importStar(require("./bls12381"));
const Coin = __importStar(require("./coin"));
const Error = __importStar(require("./error"));
const Event = __importStar(require("./event"));
const Math64 = __importStar(require("./math64"));
const Option = __importStar(require("./option"));
const Signer = __importStar(require("./signer"));
const Staking_config = __importStar(require("./staking_config"));
const System_addresses = __importStar(require("./system_addresses"));
const Timestamp = __importStar(require("./timestamp"));
const Vector = __importStar(require("./vector"));
exports.packageName = "AptosFramework";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "stake";
exports.EALREADY_ACTIVE_VALIDATOR = (0, move_to_ts_1.u64)("4");
exports.EALREADY_REGISTERED = (0, move_to_ts_1.u64)("8");
exports.EINELIGIBLE_VALIDATOR = (0, move_to_ts_1.u64)("17");
exports.EINVALID_LOCKUP = (0, move_to_ts_1.u64)("18");
exports.EINVALID_PUBLIC_KEY = (0, move_to_ts_1.u64)("11");
exports.ELAST_VALIDATOR = (0, move_to_ts_1.u64)("6");
exports.ENOT_OPERATOR = (0, move_to_ts_1.u64)("9");
exports.ENOT_VALIDATOR = (0, move_to_ts_1.u64)("5");
exports.ENO_POST_GENESIS_VALIDATOR_SET_CHANGE_ALLOWED = (0, move_to_ts_1.u64)("10");
exports.EOWNER_CAP_ALREADY_EXISTS = (0, move_to_ts_1.u64)("16");
exports.EOWNER_CAP_NOT_FOUND = (0, move_to_ts_1.u64)("15");
exports.ESTAKE_EXCEEDS_MAX = (0, move_to_ts_1.u64)("7");
exports.ESTAKE_POOL_DOES_NOT_EXIST = (0, move_to_ts_1.u64)("14");
exports.ESTAKE_TOO_HIGH = (0, move_to_ts_1.u64)("3");
exports.ESTAKE_TOO_LOW = (0, move_to_ts_1.u64)("2");
exports.EVALIDATOR_CONFIG = (0, move_to_ts_1.u64)("1");
exports.EVALIDATOR_SET_TOO_LARGE = (0, move_to_ts_1.u64)("12");
exports.EVOTING_POWER_INCREASE_EXCEEDS_LIMIT = (0, move_to_ts_1.u64)("13");
exports.MAX_REWARDS_RATE = (0, move_to_ts_1.u64)("1000000");
exports.MAX_VALIDATOR_SET_SIZE = (0, move_to_ts_1.u64)("65536");
exports.VALIDATOR_STATUS_ACTIVE = (0, move_to_ts_1.u64)("2");
exports.VALIDATOR_STATUS_INACTIVE = (0, move_to_ts_1.u64)("4");
exports.VALIDATOR_STATUS_PENDING_ACTIVE = (0, move_to_ts_1.u64)("1");
exports.VALIDATOR_STATUS_PENDING_INACTIVE = (0, move_to_ts_1.u64)("3");
class AddStakeEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.pool_address = proto['pool_address'];
        this.amount_added = proto['amount_added'];
    }
    static AddStakeEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, AddStakeEvent);
        return new AddStakeEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "AddStakeEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.AddStakeEvent = AddStakeEvent;
AddStakeEvent.moduleAddress = exports.moduleAddress;
AddStakeEvent.moduleName = exports.moduleName;
AddStakeEvent.structName = "AddStakeEvent";
AddStakeEvent.typeParameters = [];
AddStakeEvent.fields = [
    { name: "pool_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "amount_added", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class AllowedValidators {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.accounts = proto['accounts'];
    }
    static AllowedValidatorsParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, AllowedValidators);
        return new AllowedValidators(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, AllowedValidators, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, AllowedValidators, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "AllowedValidators", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.AllowedValidators = AllowedValidators;
AllowedValidators.moduleAddress = exports.moduleAddress;
AllowedValidators.moduleName = exports.moduleName;
AllowedValidators.structName = "AllowedValidators";
AllowedValidators.typeParameters = [];
AllowedValidators.fields = [
    { name: "accounts", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.Address) }
];
class AptosCoinCapabilities {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.mint_cap = proto['mint_cap'];
    }
    static AptosCoinCapabilitiesParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, AptosCoinCapabilities);
        return new AptosCoinCapabilities(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, AptosCoinCapabilities, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, AptosCoinCapabilities, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "AptosCoinCapabilities", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.mint_cap.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.AptosCoinCapabilities = AptosCoinCapabilities;
AptosCoinCapabilities.moduleAddress = exports.moduleAddress;
AptosCoinCapabilities.moduleName = exports.moduleName;
AptosCoinCapabilities.structName = "AptosCoinCapabilities";
AptosCoinCapabilities.typeParameters = [];
AptosCoinCapabilities.fields = [
    { name: "mint_cap", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "MintCapability", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]) }
];
class DistributeRewardsEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.pool_address = proto['pool_address'];
        this.rewards_amount = proto['rewards_amount'];
    }
    static DistributeRewardsEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, DistributeRewardsEvent);
        return new DistributeRewardsEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "DistributeRewardsEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.DistributeRewardsEvent = DistributeRewardsEvent;
DistributeRewardsEvent.moduleAddress = exports.moduleAddress;
DistributeRewardsEvent.moduleName = exports.moduleName;
DistributeRewardsEvent.structName = "DistributeRewardsEvent";
DistributeRewardsEvent.typeParameters = [];
DistributeRewardsEvent.fields = [
    { name: "pool_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "rewards_amount", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class IncreaseLockupEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.pool_address = proto['pool_address'];
        this.old_locked_until_secs = proto['old_locked_until_secs'];
        this.new_locked_until_secs = proto['new_locked_until_secs'];
    }
    static IncreaseLockupEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, IncreaseLockupEvent);
        return new IncreaseLockupEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "IncreaseLockupEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.IncreaseLockupEvent = IncreaseLockupEvent;
IncreaseLockupEvent.moduleAddress = exports.moduleAddress;
IncreaseLockupEvent.moduleName = exports.moduleName;
IncreaseLockupEvent.structName = "IncreaseLockupEvent";
IncreaseLockupEvent.typeParameters = [];
IncreaseLockupEvent.fields = [
    { name: "pool_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "old_locked_until_secs", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "new_locked_until_secs", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class IndividualValidatorPerformance {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.successful_proposals = proto['successful_proposals'];
        this.failed_proposals = proto['failed_proposals'];
    }
    static IndividualValidatorPerformanceParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, IndividualValidatorPerformance);
        return new IndividualValidatorPerformance(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "IndividualValidatorPerformance", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.IndividualValidatorPerformance = IndividualValidatorPerformance;
IndividualValidatorPerformance.moduleAddress = exports.moduleAddress;
IndividualValidatorPerformance.moduleName = exports.moduleName;
IndividualValidatorPerformance.structName = "IndividualValidatorPerformance";
IndividualValidatorPerformance.typeParameters = [];
IndividualValidatorPerformance.fields = [
    { name: "successful_proposals", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "failed_proposals", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class JoinValidatorSetEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.pool_address = proto['pool_address'];
    }
    static JoinValidatorSetEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, JoinValidatorSetEvent);
        return new JoinValidatorSetEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "JoinValidatorSetEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.JoinValidatorSetEvent = JoinValidatorSetEvent;
JoinValidatorSetEvent.moduleAddress = exports.moduleAddress;
JoinValidatorSetEvent.moduleName = exports.moduleName;
JoinValidatorSetEvent.structName = "JoinValidatorSetEvent";
JoinValidatorSetEvent.typeParameters = [];
JoinValidatorSetEvent.fields = [
    { name: "pool_address", typeTag: move_to_ts_2.AtomicTypeTag.Address }
];
class LeaveValidatorSetEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.pool_address = proto['pool_address'];
    }
    static LeaveValidatorSetEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, LeaveValidatorSetEvent);
        return new LeaveValidatorSetEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "LeaveValidatorSetEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.LeaveValidatorSetEvent = LeaveValidatorSetEvent;
LeaveValidatorSetEvent.moduleAddress = exports.moduleAddress;
LeaveValidatorSetEvent.moduleName = exports.moduleName;
LeaveValidatorSetEvent.structName = "LeaveValidatorSetEvent";
LeaveValidatorSetEvent.typeParameters = [];
LeaveValidatorSetEvent.fields = [
    { name: "pool_address", typeTag: move_to_ts_2.AtomicTypeTag.Address }
];
class OwnerCapability {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.pool_address = proto['pool_address'];
    }
    static OwnerCapabilityParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, OwnerCapability);
        return new OwnerCapability(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, OwnerCapability, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, OwnerCapability, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "OwnerCapability", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.OwnerCapability = OwnerCapability;
OwnerCapability.moduleAddress = exports.moduleAddress;
OwnerCapability.moduleName = exports.moduleName;
OwnerCapability.structName = "OwnerCapability";
OwnerCapability.typeParameters = [];
OwnerCapability.fields = [
    { name: "pool_address", typeTag: move_to_ts_2.AtomicTypeTag.Address }
];
class ReactivateStakeEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.pool_address = proto['pool_address'];
        this.amount = proto['amount'];
    }
    static ReactivateStakeEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, ReactivateStakeEvent);
        return new ReactivateStakeEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "ReactivateStakeEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.ReactivateStakeEvent = ReactivateStakeEvent;
ReactivateStakeEvent.moduleAddress = exports.moduleAddress;
ReactivateStakeEvent.moduleName = exports.moduleName;
ReactivateStakeEvent.structName = "ReactivateStakeEvent";
ReactivateStakeEvent.typeParameters = [];
ReactivateStakeEvent.fields = [
    { name: "pool_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "amount", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class RegisterValidatorCandidateEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.pool_address = proto['pool_address'];
    }
    static RegisterValidatorCandidateEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, RegisterValidatorCandidateEvent);
        return new RegisterValidatorCandidateEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "RegisterValidatorCandidateEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.RegisterValidatorCandidateEvent = RegisterValidatorCandidateEvent;
RegisterValidatorCandidateEvent.moduleAddress = exports.moduleAddress;
RegisterValidatorCandidateEvent.moduleName = exports.moduleName;
RegisterValidatorCandidateEvent.structName = "RegisterValidatorCandidateEvent";
RegisterValidatorCandidateEvent.typeParameters = [];
RegisterValidatorCandidateEvent.fields = [
    { name: "pool_address", typeTag: move_to_ts_2.AtomicTypeTag.Address }
];
class RotateConsensusKeyEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.pool_address = proto['pool_address'];
        this.old_consensus_pubkey = proto['old_consensus_pubkey'];
        this.new_consensus_pubkey = proto['new_consensus_pubkey'];
    }
    static RotateConsensusKeyEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, RotateConsensusKeyEvent);
        return new RotateConsensusKeyEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "RotateConsensusKeyEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.RotateConsensusKeyEvent = RotateConsensusKeyEvent;
RotateConsensusKeyEvent.moduleAddress = exports.moduleAddress;
RotateConsensusKeyEvent.moduleName = exports.moduleName;
RotateConsensusKeyEvent.structName = "RotateConsensusKeyEvent";
RotateConsensusKeyEvent.typeParameters = [];
RotateConsensusKeyEvent.fields = [
    { name: "pool_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "old_consensus_pubkey", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) },
    { name: "new_consensus_pubkey", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) }
];
class SetOperatorEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.pool_address = proto['pool_address'];
        this.old_operator = proto['old_operator'];
        this.new_operator = proto['new_operator'];
    }
    static SetOperatorEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, SetOperatorEvent);
        return new SetOperatorEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "SetOperatorEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.SetOperatorEvent = SetOperatorEvent;
SetOperatorEvent.moduleAddress = exports.moduleAddress;
SetOperatorEvent.moduleName = exports.moduleName;
SetOperatorEvent.structName = "SetOperatorEvent";
SetOperatorEvent.typeParameters = [];
SetOperatorEvent.fields = [
    { name: "pool_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "old_operator", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "new_operator", typeTag: move_to_ts_2.AtomicTypeTag.Address }
];
class StakePool {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.active = proto['active'];
        this.inactive = proto['inactive'];
        this.pending_active = proto['pending_active'];
        this.pending_inactive = proto['pending_inactive'];
        this.locked_until_secs = proto['locked_until_secs'];
        this.operator_address = proto['operator_address'];
        this.delegated_voter = proto['delegated_voter'];
        this.initialize_validator_events = proto['initialize_validator_events'];
        this.set_operator_events = proto['set_operator_events'];
        this.add_stake_events = proto['add_stake_events'];
        this.reactivate_stake_events = proto['reactivate_stake_events'];
        this.rotate_consensus_key_events = proto['rotate_consensus_key_events'];
        this.update_network_and_fullnode_addresses_events = proto['update_network_and_fullnode_addresses_events'];
        this.increase_lockup_events = proto['increase_lockup_events'];
        this.join_validator_set_events = proto['join_validator_set_events'];
        this.distribute_rewards_events = proto['distribute_rewards_events'];
        this.unlock_stake_events = proto['unlock_stake_events'];
        this.withdraw_stake_events = proto['withdraw_stake_events'];
        this.leave_validator_set_events = proto['leave_validator_set_events'];
    }
    static StakePoolParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, StakePool);
        return new StakePool(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, StakePool, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, StakePool, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "StakePool", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.active.loadFullState(app);
            yield this.inactive.loadFullState(app);
            yield this.pending_active.loadFullState(app);
            yield this.pending_inactive.loadFullState(app);
            yield this.initialize_validator_events.loadFullState(app);
            yield this.set_operator_events.loadFullState(app);
            yield this.add_stake_events.loadFullState(app);
            yield this.reactivate_stake_events.loadFullState(app);
            yield this.rotate_consensus_key_events.loadFullState(app);
            yield this.update_network_and_fullnode_addresses_events.loadFullState(app);
            yield this.increase_lockup_events.loadFullState(app);
            yield this.join_validator_set_events.loadFullState(app);
            yield this.distribute_rewards_events.loadFullState(app);
            yield this.unlock_stake_events.loadFullState(app);
            yield this.withdraw_stake_events.loadFullState(app);
            yield this.leave_validator_set_events.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.StakePool = StakePool;
StakePool.moduleAddress = exports.moduleAddress;
StakePool.moduleName = exports.moduleName;
StakePool.structName = "StakePool";
StakePool.typeParameters = [];
StakePool.fields = [
    { name: "active", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]) },
    { name: "inactive", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]) },
    { name: "pending_active", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]) },
    { name: "pending_inactive", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]) },
    { name: "locked_until_secs", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "operator_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "delegated_voter", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "initialize_validator_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "stake", "RegisterValidatorCandidateEvent", [])]) },
    { name: "set_operator_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "stake", "SetOperatorEvent", [])]) },
    { name: "add_stake_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "stake", "AddStakeEvent", [])]) },
    { name: "reactivate_stake_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "stake", "ReactivateStakeEvent", [])]) },
    { name: "rotate_consensus_key_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "stake", "RotateConsensusKeyEvent", [])]) },
    { name: "update_network_and_fullnode_addresses_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "stake", "UpdateNetworkAndFullnodeAddressesEvent", [])]) },
    { name: "increase_lockup_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "stake", "IncreaseLockupEvent", [])]) },
    { name: "join_validator_set_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "stake", "JoinValidatorSetEvent", [])]) },
    { name: "distribute_rewards_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "stake", "DistributeRewardsEvent", [])]) },
    { name: "unlock_stake_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "stake", "UnlockStakeEvent", [])]) },
    { name: "withdraw_stake_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "stake", "WithdrawStakeEvent", [])]) },
    { name: "leave_validator_set_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "stake", "LeaveValidatorSetEvent", [])]) }
];
class UnlockStakeEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.pool_address = proto['pool_address'];
        this.amount_unlocked = proto['amount_unlocked'];
    }
    static UnlockStakeEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, UnlockStakeEvent);
        return new UnlockStakeEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "UnlockStakeEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.UnlockStakeEvent = UnlockStakeEvent;
UnlockStakeEvent.moduleAddress = exports.moduleAddress;
UnlockStakeEvent.moduleName = exports.moduleName;
UnlockStakeEvent.structName = "UnlockStakeEvent";
UnlockStakeEvent.typeParameters = [];
UnlockStakeEvent.fields = [
    { name: "pool_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "amount_unlocked", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class UpdateNetworkAndFullnodeAddressesEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.pool_address = proto['pool_address'];
        this.old_network_addresses = proto['old_network_addresses'];
        this.new_network_addresses = proto['new_network_addresses'];
        this.old_fullnode_addresses = proto['old_fullnode_addresses'];
        this.new_fullnode_addresses = proto['new_fullnode_addresses'];
    }
    static UpdateNetworkAndFullnodeAddressesEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, UpdateNetworkAndFullnodeAddressesEvent);
        return new UpdateNetworkAndFullnodeAddressesEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "UpdateNetworkAndFullnodeAddressesEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.UpdateNetworkAndFullnodeAddressesEvent = UpdateNetworkAndFullnodeAddressesEvent;
UpdateNetworkAndFullnodeAddressesEvent.moduleAddress = exports.moduleAddress;
UpdateNetworkAndFullnodeAddressesEvent.moduleName = exports.moduleName;
UpdateNetworkAndFullnodeAddressesEvent.structName = "UpdateNetworkAndFullnodeAddressesEvent";
UpdateNetworkAndFullnodeAddressesEvent.typeParameters = [];
UpdateNetworkAndFullnodeAddressesEvent.fields = [
    { name: "pool_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "old_network_addresses", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) },
    { name: "new_network_addresses", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) },
    { name: "old_fullnode_addresses", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) },
    { name: "new_fullnode_addresses", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) }
];
class ValidatorConfig {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.consensus_pubkey = proto['consensus_pubkey'];
        this.network_addresses = proto['network_addresses'];
        this.fullnode_addresses = proto['fullnode_addresses'];
        this.validator_index = proto['validator_index'];
    }
    static ValidatorConfigParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, ValidatorConfig);
        return new ValidatorConfig(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, ValidatorConfig, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, ValidatorConfig, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "ValidatorConfig", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.ValidatorConfig = ValidatorConfig;
ValidatorConfig.moduleAddress = exports.moduleAddress;
ValidatorConfig.moduleName = exports.moduleName;
ValidatorConfig.structName = "ValidatorConfig";
ValidatorConfig.typeParameters = [];
ValidatorConfig.fields = [
    { name: "consensus_pubkey", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) },
    { name: "network_addresses", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) },
    { name: "fullnode_addresses", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) },
    { name: "validator_index", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class ValidatorInfo {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.addr = proto['addr'];
        this.voting_power = proto['voting_power'];
        this.config = proto['config'];
    }
    static ValidatorInfoParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, ValidatorInfo);
        return new ValidatorInfo(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "ValidatorInfo", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.config.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.ValidatorInfo = ValidatorInfo;
ValidatorInfo.moduleAddress = exports.moduleAddress;
ValidatorInfo.moduleName = exports.moduleName;
ValidatorInfo.structName = "ValidatorInfo";
ValidatorInfo.typeParameters = [];
ValidatorInfo.fields = [
    { name: "addr", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "voting_power", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "config", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "stake", "ValidatorConfig", []) }
];
class ValidatorPerformance {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.validators = proto['validators'];
    }
    static ValidatorPerformanceParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, ValidatorPerformance);
        return new ValidatorPerformance(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, ValidatorPerformance, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, ValidatorPerformance, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "ValidatorPerformance", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.ValidatorPerformance = ValidatorPerformance;
ValidatorPerformance.moduleAddress = exports.moduleAddress;
ValidatorPerformance.moduleName = exports.moduleName;
ValidatorPerformance.structName = "ValidatorPerformance";
ValidatorPerformance.typeParameters = [];
ValidatorPerformance.fields = [
    { name: "validators", typeTag: new move_to_ts_2.VectorTag(new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "stake", "IndividualValidatorPerformance", [])) }
];
class ValidatorSet {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.consensus_scheme = proto['consensus_scheme'];
        this.active_validators = proto['active_validators'];
        this.pending_inactive = proto['pending_inactive'];
        this.pending_active = proto['pending_active'];
        this.total_voting_power = proto['total_voting_power'];
        this.total_joining_power = proto['total_joining_power'];
    }
    static ValidatorSetParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, ValidatorSet);
        return new ValidatorSet(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, ValidatorSet, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, ValidatorSet, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "ValidatorSet", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.ValidatorSet = ValidatorSet;
ValidatorSet.moduleAddress = exports.moduleAddress;
ValidatorSet.moduleName = exports.moduleName;
ValidatorSet.structName = "ValidatorSet";
ValidatorSet.typeParameters = [];
ValidatorSet.fields = [
    { name: "consensus_scheme", typeTag: move_to_ts_2.AtomicTypeTag.U8 },
    { name: "active_validators", typeTag: new move_to_ts_2.VectorTag(new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "stake", "ValidatorInfo", [])) },
    { name: "pending_inactive", typeTag: new move_to_ts_2.VectorTag(new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "stake", "ValidatorInfo", [])) },
    { name: "pending_active", typeTag: new move_to_ts_2.VectorTag(new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "stake", "ValidatorInfo", [])) },
    { name: "total_voting_power", typeTag: move_to_ts_2.AtomicTypeTag.U128 },
    { name: "total_joining_power", typeTag: move_to_ts_2.AtomicTypeTag.U128 }
];
class WithdrawStakeEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.pool_address = proto['pool_address'];
        this.amount_withdrawn = proto['amount_withdrawn'];
    }
    static WithdrawStakeEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, WithdrawStakeEvent);
        return new WithdrawStakeEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "WithdrawStakeEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.WithdrawStakeEvent = WithdrawStakeEvent;
WithdrawStakeEvent.moduleAddress = exports.moduleAddress;
WithdrawStakeEvent.moduleName = exports.moduleName;
WithdrawStakeEvent.structName = "WithdrawStakeEvent";
WithdrawStakeEvent.typeParameters = [];
WithdrawStakeEvent.fields = [
    { name: "pool_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "amount_withdrawn", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
function add_stake_(owner, amount, $c) {
    let owner_address, ownership_cap;
    owner_address = Signer.address_of_(owner, $c);
    assert_owner_cap_exists_($.copy(owner_address), $c);
    ownership_cap = $c.borrow_global(new move_to_ts_2.SimpleStructTag(OwnerCapability), $.copy(owner_address));
    add_stake_with_cap_(ownership_cap, Coin.withdraw_(owner, $.copy(amount), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]), $c);
    return;
}
exports.add_stake_ = add_stake_;
function buildPayload_add_stake(amount, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "stake", "add_stake", typeParamStrings, [
        amount,
    ], isJSON);
}
exports.buildPayload_add_stake = buildPayload_add_stake;
function add_stake_with_cap_(owner_cap, coins, $c) {
    let temp$1, temp$2, temp$3, temp$4, amount, maximum_stake, pool_address, stake_pool, validator_set, voting_power;
    pool_address = $.copy(owner_cap.pool_address);
    assert_stake_pool_exists_($.copy(pool_address), $c);
    amount = Coin.value_(coins, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    if (($.copy(amount)).eq(((0, move_to_ts_1.u64)("0")))) {
        Coin.destroy_zero_(coins, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
        return;
    }
    else {
    }
    validator_set = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(ValidatorSet), new aptos_1.HexString("0x1"));
    temp$1 = find_validator_(validator_set.active_validators, $.copy(pool_address), $c);
    if (Option.is_some_(temp$1, $c, [move_to_ts_2.AtomicTypeTag.U64])) {
        temp$3 = true;
    }
    else {
        temp$2 = find_validator_(validator_set.pending_active, $.copy(pool_address), $c);
        temp$3 = Option.is_some_(temp$2, $c, [move_to_ts_2.AtomicTypeTag.U64]);
    }
    if (temp$3) {
        update_voting_power_increase_($.copy(amount), $c);
    }
    else {
    }
    stake_pool = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(StakePool), $.copy(pool_address));
    if (is_current_epoch_validator_($.copy(pool_address), $c)) {
        Coin.merge_(stake_pool.pending_active, coins, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    }
    else {
        Coin.merge_(stake_pool.active, coins, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    }
    temp$4 = Staking_config.get_($c);
    [, maximum_stake] = Staking_config.get_required_stake_(temp$4, $c);
    voting_power = get_next_epoch_voting_power_(stake_pool, $c);
    if (!($.copy(voting_power)).le($.copy(maximum_stake))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.ESTAKE_EXCEEDS_MAX), $c));
    }
    Event.emit_event_(stake_pool.add_stake_events, new AddStakeEvent({ pool_address: $.copy(pool_address), amount_added: $.copy(amount) }, new move_to_ts_2.SimpleStructTag(AddStakeEvent)), $c, [new move_to_ts_2.SimpleStructTag(AddStakeEvent)]);
    return;
}
exports.add_stake_with_cap_ = add_stake_with_cap_;
function append_(v1, v2, $c, $p) {
    while (!Vector.is_empty_(v2, $c, [$p[0]])) {
        {
            Vector.push_back_(v1, Vector.pop_back_(v2, $c, [$p[0]]), $c, [$p[0]]);
        }
    }
    return;
}
exports.append_ = append_;
function assert_owner_cap_exists_(owner, $c) {
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(OwnerCapability), $.copy(owner))) {
        throw $.abortCode(Error.not_found_($.copy(exports.EOWNER_CAP_NOT_FOUND), $c));
    }
    return;
}
exports.assert_owner_cap_exists_ = assert_owner_cap_exists_;
function assert_stake_pool_exists_(pool_address, $c) {
    if (!stake_pool_exists_($.copy(pool_address), $c)) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.ESTAKE_POOL_DOES_NOT_EXIST), $c));
    }
    return;
}
exports.assert_stake_pool_exists_ = assert_stake_pool_exists_;
function calculate_rewards_amount_(stake_amount, num_successful_proposals, num_total_proposals, rewards_rate, rewards_rate_denominator, $c) {
    let temp$1, rewards_denominator, rewards_numerator;
    ;
    rewards_numerator = (((0, move_to_ts_1.u128)($.copy(stake_amount))).mul((0, move_to_ts_1.u128)($.copy(rewards_rate)))).mul((0, move_to_ts_1.u128)($.copy(num_successful_proposals)));
    rewards_denominator = ((0, move_to_ts_1.u128)($.copy(rewards_rate_denominator))).mul((0, move_to_ts_1.u128)($.copy(num_total_proposals)));
    if (($.copy(rewards_denominator)).gt((0, move_to_ts_1.u128)("0"))) {
        temp$1 = (0, move_to_ts_1.u64)(($.copy(rewards_numerator)).div($.copy(rewards_denominator)));
    }
    else {
        temp$1 = (0, move_to_ts_1.u64)("0");
    }
    return temp$1;
}
exports.calculate_rewards_amount_ = calculate_rewards_amount_;
function configure_allowed_validators_(aptos_framework, accounts, $c) {
    let allowed, aptos_framework_address;
    aptos_framework_address = Signer.address_of_(aptos_framework, $c);
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(AllowedValidators), $.copy(aptos_framework_address))) {
        $c.move_to(new move_to_ts_2.SimpleStructTag(AllowedValidators), aptos_framework, new AllowedValidators({ accounts: $.copy(accounts) }, new move_to_ts_2.SimpleStructTag(AllowedValidators)));
    }
    else {
        allowed = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(AllowedValidators), $.copy(aptos_framework_address));
        allowed.accounts = $.copy(accounts);
    }
    return;
}
exports.configure_allowed_validators_ = configure_allowed_validators_;
function deposit_owner_cap_(owner, owner_cap, $c) {
    if (!!$c.exists(new move_to_ts_2.SimpleStructTag(OwnerCapability), Signer.address_of_(owner, $c))) {
        throw $.abortCode(Error.not_found_($.copy(exports.EOWNER_CAP_ALREADY_EXISTS), $c));
    }
    $c.move_to(new move_to_ts_2.SimpleStructTag(OwnerCapability), owner, owner_cap);
    return;
}
exports.deposit_owner_cap_ = deposit_owner_cap_;
function destroy_owner_cap_(owner_cap, $c) {
    owner_cap;
    return;
}
exports.destroy_owner_cap_ = destroy_owner_cap_;
function distribute_rewards_(stake, num_successful_proposals, num_total_proposals, rewards_rate, rewards_rate_denominator, $c) {
    let temp$1, mint_cap, rewards, rewards_amount, stake_amount;
    stake_amount = Coin.value_(stake, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    if (($.copy(stake_amount)).gt((0, move_to_ts_1.u64)("0"))) {
        temp$1 = calculate_rewards_amount_($.copy(stake_amount), $.copy(num_successful_proposals), $.copy(num_total_proposals), $.copy(rewards_rate), $.copy(rewards_rate_denominator), $c);
    }
    else {
        temp$1 = (0, move_to_ts_1.u64)("0");
    }
    rewards_amount = temp$1;
    if (($.copy(rewards_amount)).gt((0, move_to_ts_1.u64)("0"))) {
        mint_cap = $c.borrow_global(new move_to_ts_2.SimpleStructTag(AptosCoinCapabilities), new aptos_1.HexString("0x1")).mint_cap;
        rewards = Coin.mint_($.copy(rewards_amount), mint_cap, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
        Coin.merge_(stake, rewards, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    }
    else {
    }
    return $.copy(rewards_amount);
}
exports.distribute_rewards_ = distribute_rewards_;
function extract_owner_cap_(owner, $c) {
    let owner_address;
    owner_address = Signer.address_of_(owner, $c);
    assert_owner_cap_exists_($.copy(owner_address), $c);
    return $c.move_from(new move_to_ts_2.SimpleStructTag(OwnerCapability), $.copy(owner_address));
}
exports.extract_owner_cap_ = extract_owner_cap_;
function find_validator_(v, addr, $c) {
    let i, len;
    i = (0, move_to_ts_1.u64)("0");
    len = Vector.length_(v, $c, [new move_to_ts_2.SimpleStructTag(ValidatorInfo)]);
    while (true) {
        {
            ;
        }
        if (!(($.copy(i)).lt($.copy(len))))
            break;
        {
            if ((($.copy(Vector.borrow_(v, $.copy(i), $c, [new move_to_ts_2.SimpleStructTag(ValidatorInfo)]).addr)).hex() === ($.copy(addr)).hex())) {
                return Option.some_($.copy(i), $c, [move_to_ts_2.AtomicTypeTag.U64]);
            }
            else {
            }
            i = ($.copy(i)).add((0, move_to_ts_1.u64)("1"));
        }
    }
    return Option.none_($c, [move_to_ts_2.AtomicTypeTag.U64]);
}
exports.find_validator_ = find_validator_;
function generate_validator_info_(addr, stake_pool, config, $c) {
    let voting_power;
    voting_power = get_next_epoch_voting_power_(stake_pool, $c);
    return new ValidatorInfo({ addr: $.copy(addr), voting_power: $.copy(voting_power), config: $.copy(config) }, new move_to_ts_2.SimpleStructTag(ValidatorInfo));
}
exports.generate_validator_info_ = generate_validator_info_;
function get_current_epoch_proposal_counts_(validator_index, $c) {
    let validator_performance, validator_performances;
    validator_performances = $c.borrow_global(new move_to_ts_2.SimpleStructTag(ValidatorPerformance), new aptos_1.HexString("0x1")).validators;
    validator_performance = Vector.borrow_(validator_performances, $.copy(validator_index), $c, [new move_to_ts_2.SimpleStructTag(IndividualValidatorPerformance)]);
    return [$.copy(validator_performance.successful_proposals), $.copy(validator_performance.failed_proposals)];
}
exports.get_current_epoch_proposal_counts_ = get_current_epoch_proposal_counts_;
function get_current_epoch_voting_power_(pool_address, $c) {
    let temp$1, temp$2, active_stake, pending_inactive_stake, validator_state;
    assert_stake_pool_exists_($.copy(pool_address), $c);
    validator_state = get_validator_state_($.copy(pool_address), $c);
    if (($.copy(validator_state)).eq(($.copy(exports.VALIDATOR_STATUS_ACTIVE)))) {
        temp$1 = true;
    }
    else {
        temp$1 = ($.copy(validator_state)).eq(($.copy(exports.VALIDATOR_STATUS_PENDING_INACTIVE)));
    }
    if (temp$1) {
        active_stake = Coin.value_($c.borrow_global(new move_to_ts_2.SimpleStructTag(StakePool), $.copy(pool_address)).active, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
        pending_inactive_stake = Coin.value_($c.borrow_global(new move_to_ts_2.SimpleStructTag(StakePool), $.copy(pool_address)).pending_inactive, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
        temp$2 = ($.copy(active_stake)).add($.copy(pending_inactive_stake));
    }
    else {
        temp$2 = (0, move_to_ts_1.u64)("0");
    }
    return temp$2;
}
exports.get_current_epoch_voting_power_ = get_current_epoch_voting_power_;
function get_delegated_voter_(pool_address, $c) {
    assert_stake_pool_exists_($.copy(pool_address), $c);
    return $.copy($c.borrow_global(new move_to_ts_2.SimpleStructTag(StakePool), $.copy(pool_address)).delegated_voter);
}
exports.get_delegated_voter_ = get_delegated_voter_;
function get_lockup_secs_(pool_address, $c) {
    assert_stake_pool_exists_($.copy(pool_address), $c);
    return $.copy($c.borrow_global(new move_to_ts_2.SimpleStructTag(StakePool), $.copy(pool_address)).locked_until_secs);
}
exports.get_lockup_secs_ = get_lockup_secs_;
function get_next_epoch_voting_power_(stake_pool, $c) {
    let value_active, value_pending_active, value_pending_inactive;
    value_pending_active = Coin.value_(stake_pool.pending_active, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    value_active = Coin.value_(stake_pool.active, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    value_pending_inactive = Coin.value_(stake_pool.pending_inactive, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    ;
    return (($.copy(value_pending_active)).add($.copy(value_active))).add($.copy(value_pending_inactive));
}
exports.get_next_epoch_voting_power_ = get_next_epoch_voting_power_;
function get_operator_(pool_address, $c) {
    assert_stake_pool_exists_($.copy(pool_address), $c);
    return $.copy($c.borrow_global(new move_to_ts_2.SimpleStructTag(StakePool), $.copy(pool_address)).operator_address);
}
exports.get_operator_ = get_operator_;
function get_owned_pool_address_(owner_cap, $c) {
    return $.copy(owner_cap.pool_address);
}
exports.get_owned_pool_address_ = get_owned_pool_address_;
function get_remaining_lockup_secs_(pool_address, $c) {
    let temp$1, lockup_time;
    assert_stake_pool_exists_($.copy(pool_address), $c);
    lockup_time = $.copy($c.borrow_global(new move_to_ts_2.SimpleStructTag(StakePool), $.copy(pool_address)).locked_until_secs);
    if (($.copy(lockup_time)).le(Timestamp.now_seconds_($c))) {
        temp$1 = (0, move_to_ts_1.u64)("0");
    }
    else {
        temp$1 = ($.copy(lockup_time)).sub(Timestamp.now_seconds_($c));
    }
    return temp$1;
}
exports.get_remaining_lockup_secs_ = get_remaining_lockup_secs_;
function get_stake_(pool_address, $c) {
    let stake_pool;
    assert_stake_pool_exists_($.copy(pool_address), $c);
    stake_pool = $c.borrow_global(new move_to_ts_2.SimpleStructTag(StakePool), $.copy(pool_address));
    return [Coin.value_(stake_pool.active, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]), Coin.value_(stake_pool.inactive, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]), Coin.value_(stake_pool.pending_active, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]), Coin.value_(stake_pool.pending_inactive, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])])];
}
exports.get_stake_ = get_stake_;
function get_validator_config_(pool_address, $c) {
    let validator_config;
    assert_stake_pool_exists_($.copy(pool_address), $c);
    validator_config = $c.borrow_global(new move_to_ts_2.SimpleStructTag(ValidatorConfig), $.copy(pool_address));
    return [$.copy(validator_config.consensus_pubkey), $.copy(validator_config.network_addresses), $.copy(validator_config.fullnode_addresses)];
}
exports.get_validator_config_ = get_validator_config_;
function get_validator_index_(pool_address, $c) {
    assert_stake_pool_exists_($.copy(pool_address), $c);
    return $.copy($c.borrow_global(new move_to_ts_2.SimpleStructTag(ValidatorConfig), $.copy(pool_address)).validator_index);
}
exports.get_validator_index_ = get_validator_index_;
function get_validator_state_(pool_address, $c) {
    let temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, validator_set;
    validator_set = $c.borrow_global(new move_to_ts_2.SimpleStructTag(ValidatorSet), new aptos_1.HexString("0x1"));
    temp$1 = find_validator_(validator_set.pending_active, $.copy(pool_address), $c);
    if (Option.is_some_(temp$1, $c, [move_to_ts_2.AtomicTypeTag.U64])) {
        temp$6 = $.copy(exports.VALIDATOR_STATUS_PENDING_ACTIVE);
    }
    else {
        temp$2 = find_validator_(validator_set.active_validators, $.copy(pool_address), $c);
        if (Option.is_some_(temp$2, $c, [move_to_ts_2.AtomicTypeTag.U64])) {
            temp$5 = $.copy(exports.VALIDATOR_STATUS_ACTIVE);
        }
        else {
            temp$3 = find_validator_(validator_set.pending_inactive, $.copy(pool_address), $c);
            if (Option.is_some_(temp$3, $c, [move_to_ts_2.AtomicTypeTag.U64])) {
                temp$4 = $.copy(exports.VALIDATOR_STATUS_PENDING_INACTIVE);
            }
            else {
                temp$4 = $.copy(exports.VALIDATOR_STATUS_INACTIVE);
            }
            temp$5 = temp$4;
        }
        temp$6 = temp$5;
    }
    return temp$6;
}
exports.get_validator_state_ = get_validator_state_;
function increase_lockup_(owner, $c) {
    let owner_address, ownership_cap;
    owner_address = Signer.address_of_(owner, $c);
    assert_owner_cap_exists_($.copy(owner_address), $c);
    ownership_cap = $c.borrow_global(new move_to_ts_2.SimpleStructTag(OwnerCapability), $.copy(owner_address));
    increase_lockup_with_cap_(ownership_cap, $c);
    return;
}
exports.increase_lockup_ = increase_lockup_;
function buildPayload_increase_lockup(isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "stake", "increase_lockup", typeParamStrings, [], isJSON);
}
exports.buildPayload_increase_lockup = buildPayload_increase_lockup;
function increase_lockup_with_cap_(owner_cap, $c) {
    let config, new_locked_until_secs, old_locked_until_secs, pool_address, stake_pool;
    pool_address = $.copy(owner_cap.pool_address);
    assert_stake_pool_exists_($.copy(pool_address), $c);
    config = Staking_config.get_($c);
    stake_pool = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(StakePool), $.copy(pool_address));
    old_locked_until_secs = $.copy(stake_pool.locked_until_secs);
    new_locked_until_secs = (Timestamp.now_seconds_($c)).add(Staking_config.get_recurring_lockup_duration_(config, $c));
    if (!($.copy(old_locked_until_secs)).lt($.copy(new_locked_until_secs))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EINVALID_LOCKUP), $c));
    }
    stake_pool.locked_until_secs = $.copy(new_locked_until_secs);
    Event.emit_event_(stake_pool.increase_lockup_events, new IncreaseLockupEvent({ pool_address: $.copy(pool_address), old_locked_until_secs: $.copy(old_locked_until_secs), new_locked_until_secs: $.copy(new_locked_until_secs) }, new move_to_ts_2.SimpleStructTag(IncreaseLockupEvent)), $c, [new move_to_ts_2.SimpleStructTag(IncreaseLockupEvent)]);
    return;
}
exports.increase_lockup_with_cap_ = increase_lockup_with_cap_;
function initialize_(aptos_framework, $c) {
    let temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7;
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    temp$7 = aptos_framework;
    temp$1 = (0, move_to_ts_1.u8)("0");
    temp$2 = Vector.empty_($c, [new move_to_ts_2.SimpleStructTag(ValidatorInfo)]);
    temp$3 = Vector.empty_($c, [new move_to_ts_2.SimpleStructTag(ValidatorInfo)]);
    temp$4 = Vector.empty_($c, [new move_to_ts_2.SimpleStructTag(ValidatorInfo)]);
    temp$5 = (0, move_to_ts_1.u128)("0");
    temp$6 = (0, move_to_ts_1.u128)("0");
    $c.move_to(new move_to_ts_2.SimpleStructTag(ValidatorSet), temp$7, new ValidatorSet({ consensus_scheme: temp$1, active_validators: temp$2, pending_inactive: temp$4, pending_active: temp$3, total_voting_power: temp$5, total_joining_power: temp$6 }, new move_to_ts_2.SimpleStructTag(ValidatorSet)));
    $c.move_to(new move_to_ts_2.SimpleStructTag(ValidatorPerformance), aptos_framework, new ValidatorPerformance({ validators: Vector.empty_($c, [new move_to_ts_2.SimpleStructTag(IndividualValidatorPerformance)]) }, new move_to_ts_2.SimpleStructTag(ValidatorPerformance)));
    return;
}
exports.initialize_ = initialize_;
function initialize_owner_(owner, $c) {
    let temp$1, temp$10, temp$11, temp$12, temp$13, temp$14, temp$15, temp$16, temp$17, temp$18, temp$19, temp$2, temp$20, temp$3, temp$4, temp$5, temp$6, temp$7, temp$8, temp$9, owner_address;
    owner_address = Signer.address_of_(owner, $c);
    if (!is_allowed_($.copy(owner_address), $c)) {
        throw $.abortCode(Error.not_found_($.copy(exports.EINELIGIBLE_VALIDATOR), $c));
    }
    if (!!stake_pool_exists_($.copy(owner_address), $c)) {
        throw $.abortCode(Error.already_exists_($.copy(exports.EALREADY_REGISTERED), $c));
    }
    temp$20 = owner;
    temp$1 = Coin.zero_($c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    temp$2 = Coin.zero_($c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    temp$3 = Coin.zero_($c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    temp$4 = Coin.zero_($c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    temp$5 = (0, move_to_ts_1.u64)("0");
    temp$6 = $.copy(owner_address);
    temp$7 = $.copy(owner_address);
    temp$8 = Account.new_event_handle_(owner, $c, [new move_to_ts_2.SimpleStructTag(RegisterValidatorCandidateEvent)]);
    temp$9 = Account.new_event_handle_(owner, $c, [new move_to_ts_2.SimpleStructTag(SetOperatorEvent)]);
    temp$10 = Account.new_event_handle_(owner, $c, [new move_to_ts_2.SimpleStructTag(AddStakeEvent)]);
    temp$11 = Account.new_event_handle_(owner, $c, [new move_to_ts_2.SimpleStructTag(ReactivateStakeEvent)]);
    temp$12 = Account.new_event_handle_(owner, $c, [new move_to_ts_2.SimpleStructTag(RotateConsensusKeyEvent)]);
    temp$13 = Account.new_event_handle_(owner, $c, [new move_to_ts_2.SimpleStructTag(UpdateNetworkAndFullnodeAddressesEvent)]);
    temp$14 = Account.new_event_handle_(owner, $c, [new move_to_ts_2.SimpleStructTag(IncreaseLockupEvent)]);
    temp$15 = Account.new_event_handle_(owner, $c, [new move_to_ts_2.SimpleStructTag(JoinValidatorSetEvent)]);
    temp$16 = Account.new_event_handle_(owner, $c, [new move_to_ts_2.SimpleStructTag(DistributeRewardsEvent)]);
    temp$17 = Account.new_event_handle_(owner, $c, [new move_to_ts_2.SimpleStructTag(UnlockStakeEvent)]);
    temp$18 = Account.new_event_handle_(owner, $c, [new move_to_ts_2.SimpleStructTag(WithdrawStakeEvent)]);
    temp$19 = Account.new_event_handle_(owner, $c, [new move_to_ts_2.SimpleStructTag(LeaveValidatorSetEvent)]);
    $c.move_to(new move_to_ts_2.SimpleStructTag(StakePool), temp$20, new StakePool({ active: temp$1, inactive: temp$4, pending_active: temp$2, pending_inactive: temp$3, locked_until_secs: temp$5, operator_address: temp$6, delegated_voter: temp$7, initialize_validator_events: temp$8, set_operator_events: temp$9, add_stake_events: temp$10, reactivate_stake_events: temp$11, rotate_consensus_key_events: temp$12, update_network_and_fullnode_addresses_events: temp$13, increase_lockup_events: temp$14, join_validator_set_events: temp$15, distribute_rewards_events: temp$16, unlock_stake_events: temp$17, withdraw_stake_events: temp$18, leave_validator_set_events: temp$19 }, new move_to_ts_2.SimpleStructTag(StakePool)));
    $c.move_to(new move_to_ts_2.SimpleStructTag(OwnerCapability), owner, new OwnerCapability({ pool_address: $.copy(owner_address) }, new move_to_ts_2.SimpleStructTag(OwnerCapability)));
    return;
}
exports.initialize_owner_ = initialize_owner_;
function initialize_stake_owner_(owner, initial_stake_amount, operator, voter, $c) {
    let account_address;
    initialize_owner_(owner, $c);
    $c.move_to(new move_to_ts_2.SimpleStructTag(ValidatorConfig), owner, new ValidatorConfig({ consensus_pubkey: Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.U8]), network_addresses: Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.U8]), fullnode_addresses: Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.U8]), validator_index: (0, move_to_ts_1.u64)("0") }, new move_to_ts_2.SimpleStructTag(ValidatorConfig)));
    if (($.copy(initial_stake_amount)).gt((0, move_to_ts_1.u64)("0"))) {
        add_stake_(owner, $.copy(initial_stake_amount), $c);
    }
    else {
    }
    account_address = Signer.address_of_(owner, $c);
    if ((($.copy(account_address)).hex() !== ($.copy(operator)).hex())) {
        set_operator_(owner, $.copy(operator), $c);
    }
    else {
    }
    if ((($.copy(account_address)).hex() !== ($.copy(voter)).hex())) {
        set_delegated_voter_(owner, $.copy(voter), $c);
    }
    else {
    }
    return;
}
exports.initialize_stake_owner_ = initialize_stake_owner_;
function buildPayload_initialize_stake_owner(initial_stake_amount, operator, voter, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "stake", "initialize_stake_owner", typeParamStrings, [
        initial_stake_amount,
        operator,
        voter,
    ], isJSON);
}
exports.buildPayload_initialize_stake_owner = buildPayload_initialize_stake_owner;
function initialize_validator_(account, consensus_pubkey, proof_of_possession, network_addresses, fullnode_addresses, $c) {
    let temp$1, temp$2, temp$3, pubkey_from_pop;
    temp$2 = $.copy(consensus_pubkey);
    temp$1 = Bls12381.proof_of_possession_from_bytes_($.copy(proof_of_possession), $c);
    temp$3 = Bls12381.public_key_from_bytes_with_pop_(temp$2, temp$1, $c);
    pubkey_from_pop = temp$3;
    if (!Option.is_some_(pubkey_from_pop, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "bls12381", "PublicKeyWithPoP", [])])) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EINVALID_PUBLIC_KEY), $c));
    }
    initialize_owner_(account, $c);
    $c.move_to(new move_to_ts_2.SimpleStructTag(ValidatorConfig), account, new ValidatorConfig({ consensus_pubkey: $.copy(consensus_pubkey), network_addresses: $.copy(network_addresses), fullnode_addresses: $.copy(fullnode_addresses), validator_index: (0, move_to_ts_1.u64)("0") }, new move_to_ts_2.SimpleStructTag(ValidatorConfig)));
    return;
}
exports.initialize_validator_ = initialize_validator_;
function buildPayload_initialize_validator(consensus_pubkey, proof_of_possession, network_addresses, fullnode_addresses, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "stake", "initialize_validator", typeParamStrings, [
        consensus_pubkey,
        proof_of_possession,
        network_addresses,
        fullnode_addresses,
    ], isJSON);
}
exports.buildPayload_initialize_validator = buildPayload_initialize_validator;
function is_allowed_(account, $c) {
    let temp$1, allowed;
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(AllowedValidators), new aptos_1.HexString("0x1"))) {
        temp$1 = true;
    }
    else {
        allowed = $c.borrow_global(new move_to_ts_2.SimpleStructTag(AllowedValidators), new aptos_1.HexString("0x1"));
        temp$1 = Vector.contains_(allowed.accounts, account, $c, [move_to_ts_2.AtomicTypeTag.Address]);
    }
    return temp$1;
}
exports.is_allowed_ = is_allowed_;
function is_current_epoch_validator_(pool_address, $c) {
    let temp$1, validator_state;
    assert_stake_pool_exists_($.copy(pool_address), $c);
    validator_state = get_validator_state_($.copy(pool_address), $c);
    if (($.copy(validator_state)).eq(($.copy(exports.VALIDATOR_STATUS_ACTIVE)))) {
        temp$1 = true;
    }
    else {
        temp$1 = ($.copy(validator_state)).eq(($.copy(exports.VALIDATOR_STATUS_PENDING_INACTIVE)));
    }
    return temp$1;
}
exports.is_current_epoch_validator_ = is_current_epoch_validator_;
function join_validator_set_(operator, pool_address, $c) {
    let temp$1;
    temp$1 = Staking_config.get_($c);
    if (!Staking_config.get_allow_validator_set_change_(temp$1, $c)) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.ENO_POST_GENESIS_VALIDATOR_SET_CHANGE_ALLOWED), $c));
    }
    join_validator_set_internal_(operator, $.copy(pool_address), $c);
    return;
}
exports.join_validator_set_ = join_validator_set_;
function buildPayload_join_validator_set(pool_address, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "stake", "join_validator_set", typeParamStrings, [
        pool_address,
    ], isJSON);
}
exports.buildPayload_join_validator_set = buildPayload_join_validator_set;
function join_validator_set_internal_(operator, pool_address, $c) {
    let temp$1, temp$2, temp$3, temp$4, config, maximum_stake, minimum_stake, stake_pool, validator_config, validator_set, validator_set_size, voting_power;
    assert_stake_pool_exists_($.copy(pool_address), $c);
    stake_pool = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(StakePool), $.copy(pool_address));
    if (!((Signer.address_of_(operator, $c)).hex() === ($.copy(stake_pool.operator_address)).hex())) {
        throw $.abortCode(Error.unauthenticated_($.copy(exports.ENOT_OPERATOR), $c));
    }
    if (!(get_validator_state_($.copy(pool_address), $c)).eq(($.copy(exports.VALIDATOR_STATUS_INACTIVE)))) {
        throw $.abortCode(Error.invalid_state_($.copy(exports.EALREADY_ACTIVE_VALIDATOR), $c));
    }
    config = Staking_config.get_($c);
    [minimum_stake, maximum_stake] = Staking_config.get_required_stake_(config, $c);
    voting_power = get_next_epoch_voting_power_(stake_pool, $c);
    if (!($.copy(voting_power)).ge($.copy(minimum_stake))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.ESTAKE_TOO_LOW), $c));
    }
    if (!($.copy(voting_power)).le($.copy(maximum_stake))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.ESTAKE_TOO_HIGH), $c));
    }
    update_voting_power_increase_($.copy(voting_power), $c);
    validator_config = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(ValidatorConfig), $.copy(pool_address));
    if (!!Vector.is_empty_(validator_config.consensus_pubkey, $c, [move_to_ts_2.AtomicTypeTag.U8])) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EINVALID_PUBLIC_KEY), $c));
    }
    validator_set = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(ValidatorSet), new aptos_1.HexString("0x1"));
    temp$4 = validator_set.pending_active;
    [temp$1, temp$2, temp$3] = [$.copy(pool_address), stake_pool, $.copy(validator_config)];
    Vector.push_back_(temp$4, generate_validator_info_(temp$1, temp$2, temp$3, $c), $c, [new move_to_ts_2.SimpleStructTag(ValidatorInfo)]);
    validator_set_size = (Vector.length_(validator_set.active_validators, $c, [new move_to_ts_2.SimpleStructTag(ValidatorInfo)])).add(Vector.length_(validator_set.pending_active, $c, [new move_to_ts_2.SimpleStructTag(ValidatorInfo)]));
    if (!($.copy(validator_set_size)).le($.copy(exports.MAX_VALIDATOR_SET_SIZE))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EVALIDATOR_SET_TOO_LARGE), $c));
    }
    Event.emit_event_(stake_pool.join_validator_set_events, new JoinValidatorSetEvent({ pool_address: $.copy(pool_address) }, new move_to_ts_2.SimpleStructTag(JoinValidatorSetEvent)), $c, [new move_to_ts_2.SimpleStructTag(JoinValidatorSetEvent)]);
    return;
}
exports.join_validator_set_internal_ = join_validator_set_internal_;
function leave_validator_set_(operator, pool_address, $c) {
    let config, maybe_active_index, maybe_pending_active_index, stake_pool, validator_info, validator_set, validator_stake;
    config = Staking_config.get_($c);
    if (!Staking_config.get_allow_validator_set_change_(config, $c)) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.ENO_POST_GENESIS_VALIDATOR_SET_CHANGE_ALLOWED), $c));
    }
    assert_stake_pool_exists_($.copy(pool_address), $c);
    stake_pool = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(StakePool), $.copy(pool_address));
    if (!((Signer.address_of_(operator, $c)).hex() === ($.copy(stake_pool.operator_address)).hex())) {
        throw $.abortCode(Error.unauthenticated_($.copy(exports.ENOT_OPERATOR), $c));
    }
    validator_set = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(ValidatorSet), new aptos_1.HexString("0x1"));
    maybe_pending_active_index = find_validator_(validator_set.pending_active, $.copy(pool_address), $c);
    if (Option.is_some_(maybe_pending_active_index, $c, [move_to_ts_2.AtomicTypeTag.U64])) {
        Vector.swap_remove_(validator_set.pending_active, Option.extract_(maybe_pending_active_index, $c, [move_to_ts_2.AtomicTypeTag.U64]), $c, [new move_to_ts_2.SimpleStructTag(ValidatorInfo)]);
        validator_stake = (0, move_to_ts_1.u128)(get_next_epoch_voting_power_(stake_pool, $c));
        if (($.copy(validator_set.total_joining_power)).gt($.copy(validator_stake))) {
            validator_set.total_joining_power = ($.copy(validator_set.total_joining_power)).sub($.copy(validator_stake));
        }
        else {
            validator_set.total_joining_power = (0, move_to_ts_1.u128)("0");
        }
    }
    else {
        maybe_active_index = find_validator_(validator_set.active_validators, $.copy(pool_address), $c);
        if (!Option.is_some_(maybe_active_index, $c, [move_to_ts_2.AtomicTypeTag.U64])) {
            throw $.abortCode(Error.invalid_state_($.copy(exports.ENOT_VALIDATOR), $c));
        }
        validator_info = Vector.swap_remove_(validator_set.active_validators, Option.extract_(maybe_active_index, $c, [move_to_ts_2.AtomicTypeTag.U64]), $c, [new move_to_ts_2.SimpleStructTag(ValidatorInfo)]);
        if (!(Vector.length_(validator_set.active_validators, $c, [new move_to_ts_2.SimpleStructTag(ValidatorInfo)])).gt((0, move_to_ts_1.u64)("0"))) {
            throw $.abortCode(Error.invalid_state_($.copy(exports.ELAST_VALIDATOR), $c));
        }
        Vector.push_back_(validator_set.pending_inactive, $.copy(validator_info), $c, [new move_to_ts_2.SimpleStructTag(ValidatorInfo)]);
        Event.emit_event_(stake_pool.leave_validator_set_events, new LeaveValidatorSetEvent({ pool_address: $.copy(pool_address) }, new move_to_ts_2.SimpleStructTag(LeaveValidatorSetEvent)), $c, [new move_to_ts_2.SimpleStructTag(LeaveValidatorSetEvent)]);
    }
    return;
}
exports.leave_validator_set_ = leave_validator_set_;
function buildPayload_leave_validator_set(pool_address, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "stake", "leave_validator_set", typeParamStrings, [
        pool_address,
    ], isJSON);
}
exports.buildPayload_leave_validator_set = buildPayload_leave_validator_set;
function on_new_epoch_($c) {
    let temp$1, temp$11, temp$12, temp$13, temp$2, temp$3, temp$7, temp$8, temp$9, config, i, i__10, i__4, len, len__5, minimum_stake, new_validator_info, next_epoch_validators, old_validator_info, pool_address, recurring_lockup_duration_secs, stake_pool, stake_pool__16, total_voting_power, validator, validator__6, validator_config, validator_config__15, validator_index, validator_info, validator_perf, validator_set, vlen, vlen__14;
    validator_set = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(ValidatorSet), new aptos_1.HexString("0x1"));
    config = Staking_config.get_($c);
    validator_perf = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(ValidatorPerformance), new aptos_1.HexString("0x1"));
    i = (0, move_to_ts_1.u64)("0");
    len = Vector.length_(validator_set.active_validators, $c, [new move_to_ts_2.SimpleStructTag(ValidatorInfo)]);
    while (($.copy(i)).lt($.copy(len))) {
        {
            validator = Vector.borrow_(validator_set.active_validators, $.copy(i), $c, [new move_to_ts_2.SimpleStructTag(ValidatorInfo)]);
            [temp$1, temp$2, temp$3] = [validator_perf, $.copy(validator.addr), config];
            update_stake_pool_(temp$1, temp$2, temp$3, $c);
            i = ($.copy(i)).add((0, move_to_ts_1.u64)("1"));
        }
    }
    i__4 = (0, move_to_ts_1.u64)("0");
    len__5 = Vector.length_(validator_set.pending_inactive, $c, [new move_to_ts_2.SimpleStructTag(ValidatorInfo)]);
    while (($.copy(i__4)).lt($.copy(len__5))) {
        {
            validator__6 = Vector.borrow_(validator_set.pending_inactive, $.copy(i__4), $c, [new move_to_ts_2.SimpleStructTag(ValidatorInfo)]);
            [temp$7, temp$8, temp$9] = [validator_perf, $.copy(validator__6.addr), config];
            update_stake_pool_(temp$7, temp$8, temp$9, $c);
            i__4 = ($.copy(i__4)).add((0, move_to_ts_1.u64)("1"));
        }
    }
    append_(validator_set.active_validators, validator_set.pending_active, $c, [new move_to_ts_2.SimpleStructTag(ValidatorInfo)]);
    validator_set.pending_inactive = Vector.empty_($c, [new move_to_ts_2.SimpleStructTag(ValidatorInfo)]);
    next_epoch_validators = Vector.empty_($c, [new move_to_ts_2.SimpleStructTag(ValidatorInfo)]);
    [minimum_stake,] = Staking_config.get_required_stake_(config, $c);
    vlen = Vector.length_(validator_set.active_validators, $c, [new move_to_ts_2.SimpleStructTag(ValidatorInfo)]);
    total_voting_power = (0, move_to_ts_1.u128)("0");
    i__10 = (0, move_to_ts_1.u64)("0");
    while (true) {
        {
            ;
        }
        if (!(($.copy(i__10)).lt($.copy(vlen))))
            break;
        {
            old_validator_info = Vector.borrow_mut_(validator_set.active_validators, $.copy(i__10), $c, [new move_to_ts_2.SimpleStructTag(ValidatorInfo)]);
            pool_address = $.copy(old_validator_info.addr);
            validator_config = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(ValidatorConfig), $.copy(pool_address));
            stake_pool = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(StakePool), $.copy(pool_address));
            [temp$11, temp$12, temp$13] = [$.copy(pool_address), stake_pool, $.copy(validator_config)];
            new_validator_info = generate_validator_info_(temp$11, temp$12, temp$13, $c);
            if (($.copy(new_validator_info.voting_power)).ge($.copy(minimum_stake))) {
                ;
                total_voting_power = ($.copy(total_voting_power)).add((0, move_to_ts_1.u128)($.copy(new_validator_info.voting_power)));
                Vector.push_back_(next_epoch_validators, $.copy(new_validator_info), $c, [new move_to_ts_2.SimpleStructTag(ValidatorInfo)]);
            }
            else {
            }
            i__10 = ($.copy(i__10)).add((0, move_to_ts_1.u64)("1"));
        }
    }
    validator_set.active_validators = $.copy(next_epoch_validators);
    validator_set.total_voting_power = $.copy(total_voting_power);
    validator_set.total_joining_power = (0, move_to_ts_1.u128)("0");
    validator_perf.validators = Vector.empty_($c, [new move_to_ts_2.SimpleStructTag(IndividualValidatorPerformance)]);
    recurring_lockup_duration_secs = Staking_config.get_recurring_lockup_duration_(config, $c);
    vlen__14 = Vector.length_(validator_set.active_validators, $c, [new move_to_ts_2.SimpleStructTag(ValidatorInfo)]);
    validator_index = (0, move_to_ts_1.u64)("0");
    while (true) {
        {
            ;
        }
        if (!(($.copy(validator_index)).lt($.copy(vlen__14))))
            break;
        {
            validator_info = Vector.borrow_mut_(validator_set.active_validators, $.copy(validator_index), $c, [new move_to_ts_2.SimpleStructTag(ValidatorInfo)]);
            validator_info.config.validator_index = $.copy(validator_index);
            validator_config__15 = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(ValidatorConfig), $.copy(validator_info.addr));
            validator_config__15.validator_index = $.copy(validator_index);
            Vector.push_back_(validator_perf.validators, new IndividualValidatorPerformance({ successful_proposals: (0, move_to_ts_1.u64)("0"), failed_proposals: (0, move_to_ts_1.u64)("0") }, new move_to_ts_2.SimpleStructTag(IndividualValidatorPerformance)), $c, [new move_to_ts_2.SimpleStructTag(IndividualValidatorPerformance)]);
            stake_pool__16 = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(StakePool), $.copy(validator_info.addr));
            if (($.copy(stake_pool__16.locked_until_secs)).le(Timestamp.now_seconds_($c))) {
                ;
                stake_pool__16.locked_until_secs = (Timestamp.now_seconds_($c)).add($.copy(recurring_lockup_duration_secs));
            }
            else {
            }
            validator_index = ($.copy(validator_index)).add((0, move_to_ts_1.u64)("1"));
        }
    }
    return;
}
exports.on_new_epoch_ = on_new_epoch_;
function reactivate_stake_(owner, amount, $c) {
    let owner_address, ownership_cap;
    owner_address = Signer.address_of_(owner, $c);
    assert_owner_cap_exists_($.copy(owner_address), $c);
    ownership_cap = $c.borrow_global(new move_to_ts_2.SimpleStructTag(OwnerCapability), $.copy(owner_address));
    reactivate_stake_with_cap_(ownership_cap, $.copy(amount), $c);
    return;
}
exports.reactivate_stake_ = reactivate_stake_;
function buildPayload_reactivate_stake(amount, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "stake", "reactivate_stake", typeParamStrings, [
        amount,
    ], isJSON);
}
exports.buildPayload_reactivate_stake = buildPayload_reactivate_stake;
function reactivate_stake_with_cap_(owner_cap, amount, $c) {
    let pool_address, reactivated_coins, stake_pool, total_pending_inactive;
    pool_address = $.copy(owner_cap.pool_address);
    assert_stake_pool_exists_($.copy(pool_address), $c);
    stake_pool = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(StakePool), $.copy(pool_address));
    total_pending_inactive = Coin.value_(stake_pool.pending_inactive, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    amount = Math64.min_($.copy(amount), $.copy(total_pending_inactive), $c);
    reactivated_coins = Coin.extract_(stake_pool.pending_inactive, $.copy(amount), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    Coin.merge_(stake_pool.active, reactivated_coins, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    Event.emit_event_(stake_pool.reactivate_stake_events, new ReactivateStakeEvent({ pool_address: $.copy(pool_address), amount: $.copy(amount) }, new move_to_ts_2.SimpleStructTag(ReactivateStakeEvent)), $c, [new move_to_ts_2.SimpleStructTag(ReactivateStakeEvent)]);
    return;
}
exports.reactivate_stake_with_cap_ = reactivate_stake_with_cap_;
function remove_validators_(aptos_framework, validators, $c) {
    let temp$1, temp$2, active_validators, i, len, pending_inactive, validator, validator_index, validator_info, validator_set;
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    validator_set = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(ValidatorSet), new aptos_1.HexString("0x1"));
    active_validators = validator_set.active_validators;
    pending_inactive = validator_set.pending_inactive;
    len = Vector.length_(validators, $c, [move_to_ts_2.AtomicTypeTag.Address]);
    i = (0, move_to_ts_1.u64)("0");
    while (true) {
        {
            ;
        }
        if (!(($.copy(i)).lt($.copy(len))))
            break;
        {
            validator = $.copy(Vector.borrow_(validators, $.copy(i), $c, [move_to_ts_2.AtomicTypeTag.Address]));
            [temp$1, temp$2] = [active_validators, $.copy(validator)];
            validator_index = find_validator_(temp$1, temp$2, $c);
            if (Option.is_some_(validator_index, $c, [move_to_ts_2.AtomicTypeTag.U64])) {
                validator_info = Vector.swap_remove_(active_validators, $.copy(Option.borrow_(validator_index, $c, [move_to_ts_2.AtomicTypeTag.U64])), $c, [new move_to_ts_2.SimpleStructTag(ValidatorInfo)]);
                Vector.push_back_(pending_inactive, $.copy(validator_info), $c, [new move_to_ts_2.SimpleStructTag(ValidatorInfo)]);
            }
            else {
            }
            i = ($.copy(i)).add((0, move_to_ts_1.u64)("1"));
        }
    }
    return;
}
exports.remove_validators_ = remove_validators_;
function rotate_consensus_key_(operator, pool_address, new_consensus_pubkey, proof_of_possession, $c) {
    let temp$1, temp$2, temp$3, old_consensus_pubkey, pubkey_from_pop, stake_pool, validator_info;
    assert_stake_pool_exists_($.copy(pool_address), $c);
    stake_pool = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(StakePool), $.copy(pool_address));
    if (!((Signer.address_of_(operator, $c)).hex() === ($.copy(stake_pool.operator_address)).hex())) {
        throw $.abortCode(Error.unauthenticated_($.copy(exports.ENOT_OPERATOR), $c));
    }
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(ValidatorConfig), $.copy(pool_address))) {
        throw $.abortCode(Error.not_found_($.copy(exports.EVALIDATOR_CONFIG), $c));
    }
    validator_info = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(ValidatorConfig), $.copy(pool_address));
    old_consensus_pubkey = $.copy(validator_info.consensus_pubkey);
    temp$2 = $.copy(new_consensus_pubkey);
    temp$1 = Bls12381.proof_of_possession_from_bytes_($.copy(proof_of_possession), $c);
    temp$3 = Bls12381.public_key_from_bytes_with_pop_(temp$2, temp$1, $c);
    pubkey_from_pop = temp$3;
    if (!Option.is_some_(pubkey_from_pop, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "bls12381", "PublicKeyWithPoP", [])])) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EINVALID_PUBLIC_KEY), $c));
    }
    validator_info.consensus_pubkey = $.copy(new_consensus_pubkey);
    Event.emit_event_(stake_pool.rotate_consensus_key_events, new RotateConsensusKeyEvent({ pool_address: $.copy(pool_address), old_consensus_pubkey: $.copy(old_consensus_pubkey), new_consensus_pubkey: $.copy(new_consensus_pubkey) }, new move_to_ts_2.SimpleStructTag(RotateConsensusKeyEvent)), $c, [new move_to_ts_2.SimpleStructTag(RotateConsensusKeyEvent)]);
    return;
}
exports.rotate_consensus_key_ = rotate_consensus_key_;
function buildPayload_rotate_consensus_key(pool_address, new_consensus_pubkey, proof_of_possession, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "stake", "rotate_consensus_key", typeParamStrings, [
        pool_address,
        new_consensus_pubkey,
        proof_of_possession,
    ], isJSON);
}
exports.buildPayload_rotate_consensus_key = buildPayload_rotate_consensus_key;
function set_delegated_voter_(owner, new_voter, $c) {
    let owner_address, ownership_cap;
    owner_address = Signer.address_of_(owner, $c);
    assert_owner_cap_exists_($.copy(owner_address), $c);
    ownership_cap = $c.borrow_global(new move_to_ts_2.SimpleStructTag(OwnerCapability), $.copy(owner_address));
    set_delegated_voter_with_cap_(ownership_cap, $.copy(new_voter), $c);
    return;
}
exports.set_delegated_voter_ = set_delegated_voter_;
function buildPayload_set_delegated_voter(new_voter, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "stake", "set_delegated_voter", typeParamStrings, [
        new_voter,
    ], isJSON);
}
exports.buildPayload_set_delegated_voter = buildPayload_set_delegated_voter;
function set_delegated_voter_with_cap_(owner_cap, new_voter, $c) {
    let pool_address, stake_pool;
    pool_address = $.copy(owner_cap.pool_address);
    assert_stake_pool_exists_($.copy(pool_address), $c);
    stake_pool = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(StakePool), $.copy(pool_address));
    stake_pool.delegated_voter = $.copy(new_voter);
    return;
}
exports.set_delegated_voter_with_cap_ = set_delegated_voter_with_cap_;
function set_operator_(owner, new_operator, $c) {
    let owner_address, ownership_cap;
    owner_address = Signer.address_of_(owner, $c);
    assert_owner_cap_exists_($.copy(owner_address), $c);
    ownership_cap = $c.borrow_global(new move_to_ts_2.SimpleStructTag(OwnerCapability), $.copy(owner_address));
    set_operator_with_cap_(ownership_cap, $.copy(new_operator), $c);
    return;
}
exports.set_operator_ = set_operator_;
function buildPayload_set_operator(new_operator, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "stake", "set_operator", typeParamStrings, [
        new_operator,
    ], isJSON);
}
exports.buildPayload_set_operator = buildPayload_set_operator;
function set_operator_with_cap_(owner_cap, new_operator, $c) {
    let old_operator, pool_address, stake_pool;
    pool_address = $.copy(owner_cap.pool_address);
    assert_stake_pool_exists_($.copy(pool_address), $c);
    stake_pool = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(StakePool), $.copy(pool_address));
    old_operator = $.copy(stake_pool.operator_address);
    stake_pool.operator_address = $.copy(new_operator);
    Event.emit_event_(stake_pool.set_operator_events, new SetOperatorEvent({ pool_address: $.copy(pool_address), old_operator: $.copy(old_operator), new_operator: $.copy(new_operator) }, new move_to_ts_2.SimpleStructTag(SetOperatorEvent)), $c, [new move_to_ts_2.SimpleStructTag(SetOperatorEvent)]);
    return;
}
exports.set_operator_with_cap_ = set_operator_with_cap_;
function stake_pool_exists_(addr, $c) {
    return $c.exists(new move_to_ts_2.SimpleStructTag(StakePool), $.copy(addr));
}
exports.stake_pool_exists_ = stake_pool_exists_;
function store_aptos_coin_mint_cap_(aptos_framework, mint_cap, $c) {
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    return $c.move_to(new move_to_ts_2.SimpleStructTag(AptosCoinCapabilities), aptos_framework, new AptosCoinCapabilities({ mint_cap: $.copy(mint_cap) }, new move_to_ts_2.SimpleStructTag(AptosCoinCapabilities)));
}
exports.store_aptos_coin_mint_cap_ = store_aptos_coin_mint_cap_;
function unlock_(owner, amount, $c) {
    let owner_address, ownership_cap;
    owner_address = Signer.address_of_(owner, $c);
    assert_owner_cap_exists_($.copy(owner_address), $c);
    ownership_cap = $c.borrow_global(new move_to_ts_2.SimpleStructTag(OwnerCapability), $.copy(owner_address));
    unlock_with_cap_($.copy(amount), ownership_cap, $c);
    return;
}
exports.unlock_ = unlock_;
function buildPayload_unlock(amount, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "stake", "unlock", typeParamStrings, [
        amount,
    ], isJSON);
}
exports.buildPayload_unlock = buildPayload_unlock;
function unlock_with_cap_(amount, owner_cap, $c) {
    let amount__1, pool_address, stake_pool, unlocked_stake;
    if (($.copy(amount)).eq(((0, move_to_ts_1.u64)("0")))) {
        return;
    }
    else {
    }
    pool_address = $.copy(owner_cap.pool_address);
    assert_stake_pool_exists_($.copy(pool_address), $c);
    stake_pool = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(StakePool), $.copy(pool_address));
    amount__1 = Math64.min_($.copy(amount), Coin.value_(stake_pool.active, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]), $c);
    unlocked_stake = Coin.extract_(stake_pool.active, $.copy(amount__1), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    Coin.merge_(stake_pool.pending_inactive, unlocked_stake, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    Event.emit_event_(stake_pool.unlock_stake_events, new UnlockStakeEvent({ pool_address: $.copy(pool_address), amount_unlocked: $.copy(amount__1) }, new move_to_ts_2.SimpleStructTag(UnlockStakeEvent)), $c, [new move_to_ts_2.SimpleStructTag(UnlockStakeEvent)]);
    return;
}
exports.unlock_with_cap_ = unlock_with_cap_;
function update_network_and_fullnode_addresses_(operator, pool_address, new_network_addresses, new_fullnode_addresses, $c) {
    let old_fullnode_addresses, old_network_addresses, stake_pool, validator_info;
    assert_stake_pool_exists_($.copy(pool_address), $c);
    stake_pool = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(StakePool), $.copy(pool_address));
    if (!((Signer.address_of_(operator, $c)).hex() === ($.copy(stake_pool.operator_address)).hex())) {
        throw $.abortCode(Error.unauthenticated_($.copy(exports.ENOT_OPERATOR), $c));
    }
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(ValidatorConfig), $.copy(pool_address))) {
        throw $.abortCode(Error.not_found_($.copy(exports.EVALIDATOR_CONFIG), $c));
    }
    validator_info = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(ValidatorConfig), $.copy(pool_address));
    old_network_addresses = $.copy(validator_info.network_addresses);
    validator_info.network_addresses = $.copy(new_network_addresses);
    old_fullnode_addresses = $.copy(validator_info.fullnode_addresses);
    validator_info.fullnode_addresses = $.copy(new_fullnode_addresses);
    Event.emit_event_(stake_pool.update_network_and_fullnode_addresses_events, new UpdateNetworkAndFullnodeAddressesEvent({ pool_address: $.copy(pool_address), old_network_addresses: $.copy(old_network_addresses), new_network_addresses: $.copy(new_network_addresses), old_fullnode_addresses: $.copy(old_fullnode_addresses), new_fullnode_addresses: $.copy(new_fullnode_addresses) }, new move_to_ts_2.SimpleStructTag(UpdateNetworkAndFullnodeAddressesEvent)), $c, [new move_to_ts_2.SimpleStructTag(UpdateNetworkAndFullnodeAddressesEvent)]);
    return;
}
exports.update_network_and_fullnode_addresses_ = update_network_and_fullnode_addresses_;
function buildPayload_update_network_and_fullnode_addresses(pool_address, new_network_addresses, new_fullnode_addresses, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "stake", "update_network_and_fullnode_addresses", typeParamStrings, [
        pool_address,
        new_network_addresses,
        new_fullnode_addresses,
    ], isJSON);
}
exports.buildPayload_update_network_and_fullnode_addresses = buildPayload_update_network_and_fullnode_addresses;
function update_performance_statistics_(proposer_index, failed_proposer_indices, $c) {
    let cur_proposer_index, f, f_len, validator, validator__1, validator_index, validator_len, validator_perf;
    validator_perf = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(ValidatorPerformance), new aptos_1.HexString("0x1"));
    validator_len = Vector.length_(validator_perf.validators, $c, [new move_to_ts_2.SimpleStructTag(IndividualValidatorPerformance)]);
    if (Option.is_some_(proposer_index, $c, [move_to_ts_2.AtomicTypeTag.U64])) {
        cur_proposer_index = Option.extract_(proposer_index, $c, [move_to_ts_2.AtomicTypeTag.U64]);
        if (($.copy(cur_proposer_index)).lt($.copy(validator_len))) {
            validator = Vector.borrow_mut_(validator_perf.validators, $.copy(cur_proposer_index), $c, [new move_to_ts_2.SimpleStructTag(IndividualValidatorPerformance)]);
            ;
            validator.successful_proposals = ($.copy(validator.successful_proposals)).add((0, move_to_ts_1.u64)("1"));
        }
        else {
        }
    }
    else {
    }
    f = (0, move_to_ts_1.u64)("0");
    f_len = Vector.length_(failed_proposer_indices, $c, [move_to_ts_2.AtomicTypeTag.U64]);
    while (true) {
        {
            ;
        }
        if (!(($.copy(f)).lt($.copy(f_len))))
            break;
        {
            validator_index = $.copy(Vector.borrow_(failed_proposer_indices, $.copy(f), $c, [move_to_ts_2.AtomicTypeTag.U64]));
            if (($.copy(validator_index)).lt($.copy(validator_len))) {
                validator__1 = Vector.borrow_mut_(validator_perf.validators, $.copy(validator_index), $c, [new move_to_ts_2.SimpleStructTag(IndividualValidatorPerformance)]);
                ;
                validator__1.failed_proposals = ($.copy(validator__1.failed_proposals)).add((0, move_to_ts_1.u64)("1"));
            }
            else {
            }
            f = ($.copy(f)).add((0, move_to_ts_1.u64)("1"));
        }
    }
    return;
}
exports.update_performance_statistics_ = update_performance_statistics_;
function update_stake_pool_(validator_perf, pool_address, staking_config, $c) {
    let cur_validator_perf, current_lockup_expiration, num_successful_proposals, num_total_proposals, rewards_active, rewards_amount, rewards_pending_inactive, rewards_rate, rewards_rate_denominator, stake_pool, validator_config;
    stake_pool = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(StakePool), $.copy(pool_address));
    validator_config = $c.borrow_global(new move_to_ts_2.SimpleStructTag(ValidatorConfig), $.copy(pool_address));
    cur_validator_perf = Vector.borrow_(validator_perf.validators, $.copy(validator_config.validator_index), $c, [new move_to_ts_2.SimpleStructTag(IndividualValidatorPerformance)]);
    num_successful_proposals = $.copy(cur_validator_perf.successful_proposals);
    ;
    num_total_proposals = ($.copy(cur_validator_perf.successful_proposals)).add($.copy(cur_validator_perf.failed_proposals));
    [rewards_rate, rewards_rate_denominator] = Staking_config.get_reward_rate_(staking_config, $c);
    rewards_active = distribute_rewards_(stake_pool.active, $.copy(num_successful_proposals), $.copy(num_total_proposals), $.copy(rewards_rate), $.copy(rewards_rate_denominator), $c);
    rewards_pending_inactive = distribute_rewards_(stake_pool.pending_inactive, $.copy(num_successful_proposals), $.copy(num_total_proposals), $.copy(rewards_rate), $.copy(rewards_rate_denominator), $c);
    ;
    rewards_amount = ($.copy(rewards_active)).add($.copy(rewards_pending_inactive));
    Coin.merge_(stake_pool.active, Coin.extract_all_(stake_pool.pending_active, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    current_lockup_expiration = $.copy(stake_pool.locked_until_secs);
    if ((Timestamp.now_seconds_($c)).ge($.copy(current_lockup_expiration))) {
        Coin.merge_(stake_pool.inactive, Coin.extract_all_(stake_pool.pending_inactive, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    }
    else {
    }
    Event.emit_event_(stake_pool.distribute_rewards_events, new DistributeRewardsEvent({ pool_address: $.copy(pool_address), rewards_amount: $.copy(rewards_amount) }, new move_to_ts_2.SimpleStructTag(DistributeRewardsEvent)), $c, [new move_to_ts_2.SimpleStructTag(DistributeRewardsEvent)]);
    return;
}
exports.update_stake_pool_ = update_stake_pool_;
function update_voting_power_increase_(increase_amount, $c) {
    let temp$1, validator_set, voting_power_increase_limit;
    validator_set = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(ValidatorSet), new aptos_1.HexString("0x1"));
    temp$1 = Staking_config.get_($c);
    voting_power_increase_limit = (0, move_to_ts_1.u128)(Staking_config.get_voting_power_increase_limit_(temp$1, $c));
    validator_set.total_joining_power = ($.copy(validator_set.total_joining_power)).add((0, move_to_ts_1.u128)($.copy(increase_amount)));
    if (($.copy(validator_set.total_voting_power)).gt((0, move_to_ts_1.u128)("0"))) {
        if (!($.copy(validator_set.total_joining_power)).le((($.copy(validator_set.total_voting_power)).mul($.copy(voting_power_increase_limit))).div((0, move_to_ts_1.u128)("100")))) {
            throw $.abortCode(Error.invalid_argument_($.copy(exports.EVOTING_POWER_INCREASE_EXCEEDS_LIMIT), $c));
        }
    }
    else {
    }
    return;
}
exports.update_voting_power_increase_ = update_voting_power_increase_;
function withdraw_(owner, withdraw_amount, $c) {
    let coins, owner_address, ownership_cap;
    owner_address = Signer.address_of_(owner, $c);
    assert_owner_cap_exists_($.copy(owner_address), $c);
    ownership_cap = $c.borrow_global(new move_to_ts_2.SimpleStructTag(OwnerCapability), $.copy(owner_address));
    coins = withdraw_with_cap_(ownership_cap, $.copy(withdraw_amount), $c);
    Coin.deposit_($.copy(owner_address), coins, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    return;
}
exports.withdraw_ = withdraw_;
function buildPayload_withdraw(withdraw_amount, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "stake", "withdraw", typeParamStrings, [
        withdraw_amount,
    ], isJSON);
}
exports.buildPayload_withdraw = buildPayload_withdraw;
function withdraw_with_cap_(owner_cap, withdraw_amount, $c) {
    let temp$1, pending_inactive_stake, pool_address, stake_pool;
    pool_address = $.copy(owner_cap.pool_address);
    assert_stake_pool_exists_($.copy(pool_address), $c);
    stake_pool = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(StakePool), $.copy(pool_address));
    if ((get_validator_state_($.copy(pool_address), $c)).eq(($.copy(exports.VALIDATOR_STATUS_INACTIVE)))) {
        temp$1 = (Timestamp.now_seconds_($c)).ge($.copy(stake_pool.locked_until_secs));
    }
    else {
        temp$1 = false;
    }
    if (temp$1) {
        pending_inactive_stake = Coin.extract_all_(stake_pool.pending_inactive, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
        Coin.merge_(stake_pool.inactive, pending_inactive_stake, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    }
    else {
    }
    withdraw_amount = Math64.min_($.copy(withdraw_amount), Coin.value_(stake_pool.inactive, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]), $c);
    if (($.copy(withdraw_amount)).eq(((0, move_to_ts_1.u64)("0")))) {
        return Coin.zero_($c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    }
    else {
    }
    Event.emit_event_(stake_pool.withdraw_stake_events, new WithdrawStakeEvent({ pool_address: $.copy(pool_address), amount_withdrawn: $.copy(withdraw_amount) }, new move_to_ts_2.SimpleStructTag(WithdrawStakeEvent)), $c, [new move_to_ts_2.SimpleStructTag(WithdrawStakeEvent)]);
    return Coin.extract_(stake_pool.inactive, $.copy(withdraw_amount), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
}
exports.withdraw_with_cap_ = withdraw_with_cap_;
function loadParsers(repo) {
    repo.addParser("0x1::stake::AddStakeEvent", AddStakeEvent.AddStakeEventParser);
    repo.addParser("0x1::stake::AllowedValidators", AllowedValidators.AllowedValidatorsParser);
    repo.addParser("0x1::stake::AptosCoinCapabilities", AptosCoinCapabilities.AptosCoinCapabilitiesParser);
    repo.addParser("0x1::stake::DistributeRewardsEvent", DistributeRewardsEvent.DistributeRewardsEventParser);
    repo.addParser("0x1::stake::IncreaseLockupEvent", IncreaseLockupEvent.IncreaseLockupEventParser);
    repo.addParser("0x1::stake::IndividualValidatorPerformance", IndividualValidatorPerformance.IndividualValidatorPerformanceParser);
    repo.addParser("0x1::stake::JoinValidatorSetEvent", JoinValidatorSetEvent.JoinValidatorSetEventParser);
    repo.addParser("0x1::stake::LeaveValidatorSetEvent", LeaveValidatorSetEvent.LeaveValidatorSetEventParser);
    repo.addParser("0x1::stake::OwnerCapability", OwnerCapability.OwnerCapabilityParser);
    repo.addParser("0x1::stake::ReactivateStakeEvent", ReactivateStakeEvent.ReactivateStakeEventParser);
    repo.addParser("0x1::stake::RegisterValidatorCandidateEvent", RegisterValidatorCandidateEvent.RegisterValidatorCandidateEventParser);
    repo.addParser("0x1::stake::RotateConsensusKeyEvent", RotateConsensusKeyEvent.RotateConsensusKeyEventParser);
    repo.addParser("0x1::stake::SetOperatorEvent", SetOperatorEvent.SetOperatorEventParser);
    repo.addParser("0x1::stake::StakePool", StakePool.StakePoolParser);
    repo.addParser("0x1::stake::UnlockStakeEvent", UnlockStakeEvent.UnlockStakeEventParser);
    repo.addParser("0x1::stake::UpdateNetworkAndFullnodeAddressesEvent", UpdateNetworkAndFullnodeAddressesEvent.UpdateNetworkAndFullnodeAddressesEventParser);
    repo.addParser("0x1::stake::ValidatorConfig", ValidatorConfig.ValidatorConfigParser);
    repo.addParser("0x1::stake::ValidatorInfo", ValidatorInfo.ValidatorInfoParser);
    repo.addParser("0x1::stake::ValidatorPerformance", ValidatorPerformance.ValidatorPerformanceParser);
    repo.addParser("0x1::stake::ValidatorSet", ValidatorSet.ValidatorSetParser);
    repo.addParser("0x1::stake::WithdrawStakeEvent", WithdrawStakeEvent.WithdrawStakeEventParser);
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
    get AddStakeEvent() { return AddStakeEvent; }
    get AllowedValidators() { return AllowedValidators; }
    loadAllowedValidators(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield AllowedValidators.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get AptosCoinCapabilities() { return AptosCoinCapabilities; }
    loadAptosCoinCapabilities(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield AptosCoinCapabilities.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get DistributeRewardsEvent() { return DistributeRewardsEvent; }
    get IncreaseLockupEvent() { return IncreaseLockupEvent; }
    get IndividualValidatorPerformance() { return IndividualValidatorPerformance; }
    get JoinValidatorSetEvent() { return JoinValidatorSetEvent; }
    get LeaveValidatorSetEvent() { return LeaveValidatorSetEvent; }
    get OwnerCapability() { return OwnerCapability; }
    loadOwnerCapability(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield OwnerCapability.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get ReactivateStakeEvent() { return ReactivateStakeEvent; }
    get RegisterValidatorCandidateEvent() { return RegisterValidatorCandidateEvent; }
    get RotateConsensusKeyEvent() { return RotateConsensusKeyEvent; }
    get SetOperatorEvent() { return SetOperatorEvent; }
    get StakePool() { return StakePool; }
    loadStakePool(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield StakePool.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get UnlockStakeEvent() { return UnlockStakeEvent; }
    get UpdateNetworkAndFullnodeAddressesEvent() { return UpdateNetworkAndFullnodeAddressesEvent; }
    get ValidatorConfig() { return ValidatorConfig; }
    loadValidatorConfig(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield ValidatorConfig.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get ValidatorInfo() { return ValidatorInfo; }
    get ValidatorPerformance() { return ValidatorPerformance; }
    loadValidatorPerformance(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield ValidatorPerformance.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get ValidatorSet() { return ValidatorSet; }
    loadValidatorSet(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield ValidatorSet.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get WithdrawStakeEvent() { return WithdrawStakeEvent; }
    payload_add_stake(amount, isJSON = false) {
        return buildPayload_add_stake(amount, isJSON);
    }
    add_stake(_account, amount, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_add_stake(amount, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_increase_lockup(isJSON = false) {
        return buildPayload_increase_lockup(isJSON);
    }
    increase_lockup(_account, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_increase_lockup(_isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_initialize_stake_owner(initial_stake_amount, operator, voter, isJSON = false) {
        return buildPayload_initialize_stake_owner(initial_stake_amount, operator, voter, isJSON);
    }
    initialize_stake_owner(_account, initial_stake_amount, operator, voter, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_initialize_stake_owner(initial_stake_amount, operator, voter, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_initialize_validator(consensus_pubkey, proof_of_possession, network_addresses, fullnode_addresses, isJSON = false) {
        return buildPayload_initialize_validator(consensus_pubkey, proof_of_possession, network_addresses, fullnode_addresses, isJSON);
    }
    initialize_validator(_account, consensus_pubkey, proof_of_possession, network_addresses, fullnode_addresses, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_initialize_validator(consensus_pubkey, proof_of_possession, network_addresses, fullnode_addresses, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_join_validator_set(pool_address, isJSON = false) {
        return buildPayload_join_validator_set(pool_address, isJSON);
    }
    join_validator_set(_account, pool_address, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_join_validator_set(pool_address, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_leave_validator_set(pool_address, isJSON = false) {
        return buildPayload_leave_validator_set(pool_address, isJSON);
    }
    leave_validator_set(_account, pool_address, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_leave_validator_set(pool_address, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_reactivate_stake(amount, isJSON = false) {
        return buildPayload_reactivate_stake(amount, isJSON);
    }
    reactivate_stake(_account, amount, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_reactivate_stake(amount, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_rotate_consensus_key(pool_address, new_consensus_pubkey, proof_of_possession, isJSON = false) {
        return buildPayload_rotate_consensus_key(pool_address, new_consensus_pubkey, proof_of_possession, isJSON);
    }
    rotate_consensus_key(_account, pool_address, new_consensus_pubkey, proof_of_possession, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_rotate_consensus_key(pool_address, new_consensus_pubkey, proof_of_possession, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_set_delegated_voter(new_voter, isJSON = false) {
        return buildPayload_set_delegated_voter(new_voter, isJSON);
    }
    set_delegated_voter(_account, new_voter, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_set_delegated_voter(new_voter, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_set_operator(new_operator, isJSON = false) {
        return buildPayload_set_operator(new_operator, isJSON);
    }
    set_operator(_account, new_operator, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_set_operator(new_operator, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_unlock(amount, isJSON = false) {
        return buildPayload_unlock(amount, isJSON);
    }
    unlock(_account, amount, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_unlock(amount, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_update_network_and_fullnode_addresses(pool_address, new_network_addresses, new_fullnode_addresses, isJSON = false) {
        return buildPayload_update_network_and_fullnode_addresses(pool_address, new_network_addresses, new_fullnode_addresses, isJSON);
    }
    update_network_and_fullnode_addresses(_account, pool_address, new_network_addresses, new_fullnode_addresses, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_update_network_and_fullnode_addresses(pool_address, new_network_addresses, new_fullnode_addresses, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_withdraw(withdraw_amount, isJSON = false) {
        return buildPayload_withdraw(withdraw_amount, isJSON);
    }
    withdraw(_account, withdraw_amount, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_withdraw(withdraw_amount, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
}
exports.App = App;
//# sourceMappingURL=stake.js.map