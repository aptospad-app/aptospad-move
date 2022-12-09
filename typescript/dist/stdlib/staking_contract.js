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
exports.buildPayload_switch_operator = exports.switch_operator_ = exports.staking_contract_exists_ = exports.staking_contract_amounts_ = exports.stake_pool_address_ = exports.buildPayload_reset_lockup = exports.reset_lockup_ = exports.request_commission_internal_ = exports.buildPayload_request_commission = exports.request_commission_ = exports.pending_distribution_counts_ = exports.new_staking_contracts_holder_ = exports.last_recorded_principal_ = exports.get_staking_contract_amounts_internal_ = exports.distribute_internal_ = exports.buildPayload_distribute = exports.distribute_ = exports.create_staking_contract_with_coins_ = exports.buildPayload_create_staking_contract = exports.create_staking_contract_ = exports.create_stake_pool_ = exports.commission_percentage_ = exports.assert_staking_contract_exists_ = exports.buildPayload_add_stake = exports.add_stake_ = exports.add_distribution_ = exports.UpdateVoterEvent = exports.UnlockStakeEvent = exports.SwitchOperatorEvent = exports.Store = exports.StakingContract = exports.ResetLockupEvent = exports.RequestCommissionEvent = exports.DistributeEvent = exports.CreateStakingContractEvent = exports.AddStakeEvent = exports.AddDistributionEvent = exports.SALT = exports.MAXIMUM_PENDING_DISTRIBUTIONS = exports.ESTAKING_CONTRACT_ALREADY_EXISTS = exports.ENO_STAKING_CONTRACT_FOUND_FOR_STAKER = exports.ENO_STAKING_CONTRACT_FOUND_FOR_OPERATOR = exports.ENOT_STAKER_OR_OPERATOR = exports.EINVALID_COMMISSION_PERCENTAGE = exports.EINSUFFICIENT_STAKE_AMOUNT = exports.EINSUFFICIENT_ACTIVE_STAKE_TO_WITHDRAW = exports.ECANT_MERGE_STAKING_CONTRACTS = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
exports.App = exports.loadParsers = exports.buildPayload_update_voter = exports.update_voter_ = exports.update_distribution_pool_ = exports.buildPayload_unlock_stake = exports.unlock_stake_ = exports.buildPayload_unlock_rewards = exports.unlock_rewards_ = exports.buildPayload_switch_operator_with_same_commission = exports.switch_operator_with_same_commission_ = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Account = __importStar(require("./account"));
const Bcs = __importStar(require("./bcs"));
const Coin = __importStar(require("./coin"));
const Error = __importStar(require("./error"));
const Event = __importStar(require("./event"));
const Pool_u64 = __importStar(require("./pool_u64"));
const Signer = __importStar(require("./signer"));
const Simple_map = __importStar(require("./simple_map"));
const Stake = __importStar(require("./stake"));
const Staking_config = __importStar(require("./staking_config"));
const Vector = __importStar(require("./vector"));
exports.packageName = "AptosFramework";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "staking_contract";
exports.ECANT_MERGE_STAKING_CONTRACTS = (0, move_to_ts_1.u64)("5");
exports.EINSUFFICIENT_ACTIVE_STAKE_TO_WITHDRAW = (0, move_to_ts_1.u64)("7");
exports.EINSUFFICIENT_STAKE_AMOUNT = (0, move_to_ts_1.u64)("1");
exports.EINVALID_COMMISSION_PERCENTAGE = (0, move_to_ts_1.u64)("2");
exports.ENOT_STAKER_OR_OPERATOR = (0, move_to_ts_1.u64)("8");
exports.ENO_STAKING_CONTRACT_FOUND_FOR_OPERATOR = (0, move_to_ts_1.u64)("4");
exports.ENO_STAKING_CONTRACT_FOUND_FOR_STAKER = (0, move_to_ts_1.u64)("3");
exports.ESTAKING_CONTRACT_ALREADY_EXISTS = (0, move_to_ts_1.u64)("6");
exports.MAXIMUM_PENDING_DISTRIBUTIONS = (0, move_to_ts_1.u64)("20");
exports.SALT = [(0, move_to_ts_1.u8)("97"), (0, move_to_ts_1.u8)("112"), (0, move_to_ts_1.u8)("116"), (0, move_to_ts_1.u8)("111"), (0, move_to_ts_1.u8)("115"), (0, move_to_ts_1.u8)("95"), (0, move_to_ts_1.u8)("102"), (0, move_to_ts_1.u8)("114"), (0, move_to_ts_1.u8)("97"), (0, move_to_ts_1.u8)("109"), (0, move_to_ts_1.u8)("101"), (0, move_to_ts_1.u8)("119"), (0, move_to_ts_1.u8)("111"), (0, move_to_ts_1.u8)("114"), (0, move_to_ts_1.u8)("107"), (0, move_to_ts_1.u8)("58"), (0, move_to_ts_1.u8)("58"), (0, move_to_ts_1.u8)("115"), (0, move_to_ts_1.u8)("116"), (0, move_to_ts_1.u8)("97"), (0, move_to_ts_1.u8)("107"), (0, move_to_ts_1.u8)("105"), (0, move_to_ts_1.u8)("110"), (0, move_to_ts_1.u8)("103"), (0, move_to_ts_1.u8)("95"), (0, move_to_ts_1.u8)("99"), (0, move_to_ts_1.u8)("111"), (0, move_to_ts_1.u8)("110"), (0, move_to_ts_1.u8)("116"), (0, move_to_ts_1.u8)("114"), (0, move_to_ts_1.u8)("97"), (0, move_to_ts_1.u8)("99"), (0, move_to_ts_1.u8)("116")];
class AddDistributionEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.operator = proto['operator'];
        this.pool_address = proto['pool_address'];
        this.amount = proto['amount'];
    }
    static AddDistributionEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, AddDistributionEvent);
        return new AddDistributionEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "AddDistributionEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.AddDistributionEvent = AddDistributionEvent;
AddDistributionEvent.moduleAddress = exports.moduleAddress;
AddDistributionEvent.moduleName = exports.moduleName;
AddDistributionEvent.structName = "AddDistributionEvent";
AddDistributionEvent.typeParameters = [];
AddDistributionEvent.fields = [
    { name: "operator", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "pool_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "amount", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class AddStakeEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.operator = proto['operator'];
        this.pool_address = proto['pool_address'];
        this.amount = proto['amount'];
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
    { name: "operator", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "pool_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "amount", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class CreateStakingContractEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.operator = proto['operator'];
        this.voter = proto['voter'];
        this.pool_address = proto['pool_address'];
        this.principal = proto['principal'];
        this.commission_percentage = proto['commission_percentage'];
    }
    static CreateStakingContractEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, CreateStakingContractEvent);
        return new CreateStakingContractEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "CreateStakingContractEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.CreateStakingContractEvent = CreateStakingContractEvent;
CreateStakingContractEvent.moduleAddress = exports.moduleAddress;
CreateStakingContractEvent.moduleName = exports.moduleName;
CreateStakingContractEvent.structName = "CreateStakingContractEvent";
CreateStakingContractEvent.typeParameters = [];
CreateStakingContractEvent.fields = [
    { name: "operator", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "voter", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "pool_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "principal", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "commission_percentage", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class DistributeEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.operator = proto['operator'];
        this.pool_address = proto['pool_address'];
        this.recipient = proto['recipient'];
        this.amount = proto['amount'];
    }
    static DistributeEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, DistributeEvent);
        return new DistributeEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "DistributeEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.DistributeEvent = DistributeEvent;
DistributeEvent.moduleAddress = exports.moduleAddress;
DistributeEvent.moduleName = exports.moduleName;
DistributeEvent.structName = "DistributeEvent";
DistributeEvent.typeParameters = [];
DistributeEvent.fields = [
    { name: "operator", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "pool_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "recipient", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "amount", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class RequestCommissionEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.operator = proto['operator'];
        this.pool_address = proto['pool_address'];
        this.accumulated_rewards = proto['accumulated_rewards'];
        this.commission_amount = proto['commission_amount'];
    }
    static RequestCommissionEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, RequestCommissionEvent);
        return new RequestCommissionEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "RequestCommissionEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.RequestCommissionEvent = RequestCommissionEvent;
RequestCommissionEvent.moduleAddress = exports.moduleAddress;
RequestCommissionEvent.moduleName = exports.moduleName;
RequestCommissionEvent.structName = "RequestCommissionEvent";
RequestCommissionEvent.typeParameters = [];
RequestCommissionEvent.fields = [
    { name: "operator", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "pool_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "accumulated_rewards", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "commission_amount", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class ResetLockupEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.operator = proto['operator'];
        this.pool_address = proto['pool_address'];
    }
    static ResetLockupEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, ResetLockupEvent);
        return new ResetLockupEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "ResetLockupEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.ResetLockupEvent = ResetLockupEvent;
ResetLockupEvent.moduleAddress = exports.moduleAddress;
ResetLockupEvent.moduleName = exports.moduleName;
ResetLockupEvent.structName = "ResetLockupEvent";
ResetLockupEvent.typeParameters = [];
ResetLockupEvent.fields = [
    { name: "operator", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "pool_address", typeTag: move_to_ts_2.AtomicTypeTag.Address }
];
class StakingContract {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.principal = proto['principal'];
        this.pool_address = proto['pool_address'];
        this.owner_cap = proto['owner_cap'];
        this.commission_percentage = proto['commission_percentage'];
        this.distribution_pool = proto['distribution_pool'];
        this.signer_cap = proto['signer_cap'];
    }
    static StakingContractParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, StakingContract);
        return new StakingContract(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "StakingContract", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.owner_cap.loadFullState(app);
            yield this.distribution_pool.loadFullState(app);
            yield this.signer_cap.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.StakingContract = StakingContract;
StakingContract.moduleAddress = exports.moduleAddress;
StakingContract.moduleName = exports.moduleName;
StakingContract.structName = "StakingContract";
StakingContract.typeParameters = [];
StakingContract.fields = [
    { name: "principal", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "pool_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "owner_cap", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "stake", "OwnerCapability", []) },
    { name: "commission_percentage", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "distribution_pool", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "pool_u64", "Pool", []) },
    { name: "signer_cap", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "account", "SignerCapability", []) }
];
class Store {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.staking_contracts = proto['staking_contracts'];
        this.create_staking_contract_events = proto['create_staking_contract_events'];
        this.update_voter_events = proto['update_voter_events'];
        this.reset_lockup_events = proto['reset_lockup_events'];
        this.add_stake_events = proto['add_stake_events'];
        this.request_commission_events = proto['request_commission_events'];
        this.unlock_stake_events = proto['unlock_stake_events'];
        this.switch_operator_events = proto['switch_operator_events'];
        this.add_distribution_events = proto['add_distribution_events'];
        this.distribute_events = proto['distribute_events'];
    }
    static StoreParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Store);
        return new Store(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, Store, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, Store, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Store", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.staking_contracts.loadFullState(app);
            yield this.create_staking_contract_events.loadFullState(app);
            yield this.update_voter_events.loadFullState(app);
            yield this.reset_lockup_events.loadFullState(app);
            yield this.add_stake_events.loadFullState(app);
            yield this.request_commission_events.loadFullState(app);
            yield this.unlock_stake_events.loadFullState(app);
            yield this.switch_operator_events.loadFullState(app);
            yield this.add_distribution_events.loadFullState(app);
            yield this.distribute_events.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.Store = Store;
Store.moduleAddress = exports.moduleAddress;
Store.moduleName = exports.moduleName;
Store.structName = "Store";
Store.typeParameters = [];
Store.fields = [
    { name: "staking_contracts", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "simple_map", "SimpleMap", [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "staking_contract", "StakingContract", [])]) },
    { name: "create_staking_contract_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "staking_contract", "CreateStakingContractEvent", [])]) },
    { name: "update_voter_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "staking_contract", "UpdateVoterEvent", [])]) },
    { name: "reset_lockup_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "staking_contract", "ResetLockupEvent", [])]) },
    { name: "add_stake_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "staking_contract", "AddStakeEvent", [])]) },
    { name: "request_commission_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "staking_contract", "RequestCommissionEvent", [])]) },
    { name: "unlock_stake_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "staking_contract", "UnlockStakeEvent", [])]) },
    { name: "switch_operator_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "staking_contract", "SwitchOperatorEvent", [])]) },
    { name: "add_distribution_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "staking_contract", "AddDistributionEvent", [])]) },
    { name: "distribute_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "staking_contract", "DistributeEvent", [])]) }
];
class SwitchOperatorEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.old_operator = proto['old_operator'];
        this.new_operator = proto['new_operator'];
        this.pool_address = proto['pool_address'];
    }
    static SwitchOperatorEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, SwitchOperatorEvent);
        return new SwitchOperatorEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "SwitchOperatorEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.SwitchOperatorEvent = SwitchOperatorEvent;
SwitchOperatorEvent.moduleAddress = exports.moduleAddress;
SwitchOperatorEvent.moduleName = exports.moduleName;
SwitchOperatorEvent.structName = "SwitchOperatorEvent";
SwitchOperatorEvent.typeParameters = [];
SwitchOperatorEvent.fields = [
    { name: "old_operator", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "new_operator", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "pool_address", typeTag: move_to_ts_2.AtomicTypeTag.Address }
];
class UnlockStakeEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.operator = proto['operator'];
        this.pool_address = proto['pool_address'];
        this.amount = proto['amount'];
        this.commission_paid = proto['commission_paid'];
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
    { name: "operator", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "pool_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "amount", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "commission_paid", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class UpdateVoterEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.operator = proto['operator'];
        this.pool_address = proto['pool_address'];
        this.old_voter = proto['old_voter'];
        this.new_voter = proto['new_voter'];
    }
    static UpdateVoterEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, UpdateVoterEvent);
        return new UpdateVoterEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "UpdateVoterEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.UpdateVoterEvent = UpdateVoterEvent;
UpdateVoterEvent.moduleAddress = exports.moduleAddress;
UpdateVoterEvent.moduleName = exports.moduleName;
UpdateVoterEvent.structName = "UpdateVoterEvent";
UpdateVoterEvent.typeParameters = [];
UpdateVoterEvent.fields = [
    { name: "operator", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "pool_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "old_voter", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "new_voter", typeTag: move_to_ts_2.AtomicTypeTag.Address }
];
function add_distribution_(operator, staking_contract, recipient, coins_amount, add_distribution_events, $c) {
    let distribution_pool, pool_address, total_distribution_amount;
    distribution_pool = staking_contract.distribution_pool;
    [, , , total_distribution_amount] = Stake.get_stake_($.copy(staking_contract.pool_address), $c);
    update_distribution_pool_(distribution_pool, $.copy(total_distribution_amount), $.copy(operator), $.copy(staking_contract.commission_percentage), $c);
    Pool_u64.buy_in_(distribution_pool, $.copy(recipient), $.copy(coins_amount), $c);
    pool_address = $.copy(staking_contract.pool_address);
    Event.emit_event_(add_distribution_events, new AddDistributionEvent({ operator: $.copy(operator), pool_address: $.copy(pool_address), amount: $.copy(coins_amount) }, new move_to_ts_2.SimpleStructTag(AddDistributionEvent)), $c, [new move_to_ts_2.SimpleStructTag(AddDistributionEvent)]);
    return;
}
exports.add_distribution_ = add_distribution_;
function add_stake_(staker, operator, amount, $c) {
    let pool_address, staked_coins, staker_address, staking_contract, store;
    staker_address = Signer.address_of_(staker, $c);
    assert_staking_contract_exists_($.copy(staker_address), $.copy(operator), $c);
    store = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(Store), $.copy(staker_address));
    staking_contract = Simple_map.borrow_mut_(store.staking_contracts, operator, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(StakingContract)]);
    staked_coins = Coin.withdraw_(staker, $.copy(amount), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    Stake.add_stake_with_cap_(staking_contract.owner_cap, staked_coins, $c);
    staking_contract.principal = ($.copy(staking_contract.principal)).add($.copy(amount));
    pool_address = $.copy(staking_contract.pool_address);
    Event.emit_event_(store.add_stake_events, new AddStakeEvent({ operator: $.copy(operator), pool_address: $.copy(pool_address), amount: $.copy(amount) }, new move_to_ts_2.SimpleStructTag(AddStakeEvent)), $c, [new move_to_ts_2.SimpleStructTag(AddStakeEvent)]);
    return;
}
exports.add_stake_ = add_stake_;
function buildPayload_add_stake(operator, amount, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "staking_contract", "add_stake", typeParamStrings, [
        operator,
        amount,
    ], isJSON);
}
exports.buildPayload_add_stake = buildPayload_add_stake;
function assert_staking_contract_exists_(staker, operator, $c) {
    let temp$1, temp$2, staking_contracts;
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(Store), $.copy(staker))) {
        throw $.abortCode(Error.not_found_($.copy(exports.ENO_STAKING_CONTRACT_FOUND_FOR_STAKER), $c));
    }
    staking_contracts = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(Store), $.copy(staker)).staking_contracts;
    [temp$1, temp$2] = [staking_contracts, operator];
    if (!Simple_map.contains_key_(temp$1, temp$2, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(StakingContract)])) {
        throw $.abortCode(Error.not_found_($.copy(exports.ENO_STAKING_CONTRACT_FOUND_FOR_OPERATOR), $c));
    }
    return;
}
exports.assert_staking_contract_exists_ = assert_staking_contract_exists_;
function commission_percentage_(staker, operator, $c) {
    let staking_contracts;
    assert_staking_contract_exists_($.copy(staker), $.copy(operator), $c);
    staking_contracts = $c.borrow_global(new move_to_ts_2.SimpleStructTag(Store), $.copy(staker)).staking_contracts;
    return $.copy(Simple_map.borrow_(staking_contracts, operator, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(StakingContract)]).commission_percentage);
}
exports.commission_percentage_ = commission_percentage_;
function create_stake_pool_(staker, operator, voter, contract_creation_seed, $c) {
    let temp$1, owner_cap, seed, stake_pool_signer, stake_pool_signer_cap;
    temp$1 = Signer.address_of_(staker, $c);
    seed = Bcs.to_bytes_(temp$1, $c, [move_to_ts_2.AtomicTypeTag.Address]);
    Vector.append_(seed, Bcs.to_bytes_(operator, $c, [move_to_ts_2.AtomicTypeTag.Address]), $c, [move_to_ts_2.AtomicTypeTag.U8]);
    Vector.append_(seed, $.copy(exports.SALT), $c, [move_to_ts_2.AtomicTypeTag.U8]);
    Vector.append_(seed, $.copy(contract_creation_seed), $c, [move_to_ts_2.AtomicTypeTag.U8]);
    [stake_pool_signer, stake_pool_signer_cap] = Account.create_resource_account_(staker, $.copy(seed), $c);
    Stake.initialize_stake_owner_(stake_pool_signer, (0, move_to_ts_1.u64)("0"), $.copy(operator), $.copy(voter), $c);
    owner_cap = Stake.extract_owner_cap_(stake_pool_signer, $c);
    return [stake_pool_signer, stake_pool_signer_cap, owner_cap];
}
exports.create_stake_pool_ = create_stake_pool_;
function create_staking_contract_(staker, operator, voter, amount, commission_percentage, contract_creation_seed, $c) {
    let staked_coins;
    staked_coins = Coin.withdraw_(staker, $.copy(amount), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    create_staking_contract_with_coins_(staker, $.copy(operator), $.copy(voter), staked_coins, $.copy(commission_percentage), $.copy(contract_creation_seed), $c);
    return;
}
exports.create_staking_contract_ = create_staking_contract_;
function buildPayload_create_staking_contract(operator, voter, amount, commission_percentage, contract_creation_seed, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "staking_contract", "create_staking_contract", typeParamStrings, [
        operator,
        voter,
        amount,
        commission_percentage,
        contract_creation_seed,
    ], isJSON);
}
exports.buildPayload_create_staking_contract = buildPayload_create_staking_contract;
function create_staking_contract_with_coins_(staker, operator, voter, coins, commission_percentage, contract_creation_seed, $c) {
    let temp$1, temp$2, temp$3, temp$4, min_stake_required, owner_cap, pool_address, principal, stake_pool_signer, stake_pool_signer_cap, staker_address, staking_contracts, store;
    if (($.copy(commission_percentage)).ge((0, move_to_ts_1.u64)("0"))) {
        temp$1 = ($.copy(commission_percentage)).le((0, move_to_ts_1.u64)("100"));
    }
    else {
        temp$1 = false;
    }
    if (!temp$1) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EINVALID_COMMISSION_PERCENTAGE), $c));
    }
    temp$2 = Staking_config.get_($c);
    [min_stake_required,] = Staking_config.get_required_stake_(temp$2, $c);
    principal = Coin.value_(coins, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    if (!($.copy(principal)).ge($.copy(min_stake_required))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EINSUFFICIENT_STAKE_AMOUNT), $c));
    }
    staker_address = Signer.address_of_(staker, $c);
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(Store), $.copy(staker_address))) {
        $c.move_to(new move_to_ts_2.SimpleStructTag(Store), staker, new_staking_contracts_holder_(staker, $c));
    }
    else {
    }
    store = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(Store), $.copy(staker_address));
    staking_contracts = store.staking_contracts;
    [temp$3, temp$4] = [staking_contracts, operator];
    if (!!Simple_map.contains_key_(temp$3, temp$4, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(StakingContract)])) {
        throw $.abortCode(Error.already_exists_($.copy(exports.ESTAKING_CONTRACT_ALREADY_EXISTS), $c));
    }
    [stake_pool_signer, stake_pool_signer_cap, owner_cap] = create_stake_pool_(staker, $.copy(operator), $.copy(voter), $.copy(contract_creation_seed), $c);
    Stake.add_stake_with_cap_(owner_cap, coins, $c);
    pool_address = Signer.address_of_(stake_pool_signer, $c);
    Simple_map.add_(staking_contracts, $.copy(operator), new StakingContract({ principal: $.copy(principal), pool_address: $.copy(pool_address), owner_cap: owner_cap, commission_percentage: $.copy(commission_percentage), distribution_pool: Pool_u64.create_($.copy(exports.MAXIMUM_PENDING_DISTRIBUTIONS), $c), signer_cap: stake_pool_signer_cap }, new move_to_ts_2.SimpleStructTag(StakingContract)), $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(StakingContract)]);
    Event.emit_event_(store.create_staking_contract_events, new CreateStakingContractEvent({ operator: $.copy(operator), voter: $.copy(voter), pool_address: $.copy(pool_address), principal: $.copy(principal), commission_percentage: $.copy(commission_percentage) }, new move_to_ts_2.SimpleStructTag(CreateStakingContractEvent)), $c, [new move_to_ts_2.SimpleStructTag(CreateStakingContractEvent)]);
    return $.copy(pool_address);
}
exports.create_staking_contract_with_coins_ = create_staking_contract_with_coins_;
function distribute_(staker, operator, $c) {
    let staking_contract, store;
    assert_staking_contract_exists_($.copy(staker), $.copy(operator), $c);
    store = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(Store), $.copy(staker));
    staking_contract = Simple_map.borrow_mut_(store.staking_contracts, operator, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(StakingContract)]);
    distribute_internal_($.copy(staker), $.copy(operator), staking_contract, store.distribute_events, $c);
    return;
}
exports.distribute_ = distribute_;
function buildPayload_distribute(staker, operator, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "staking_contract", "distribute", typeParamStrings, [
        staker,
        operator,
    ], isJSON);
}
exports.buildPayload_distribute = buildPayload_distribute;
function distribute_internal_(staker, operator, staking_contract, distribute_events, $c) {
    let temp$1, temp$2, temp$3, temp$4, amount_to_distribute, coins, current_shares, distribution_amount, distribution_pool, inactive, pending_inactive, pool_address, recipient, recipients, total_potential_withdrawable;
    pool_address = $.copy(staking_contract.pool_address);
    [, inactive, , pending_inactive] = Stake.get_stake_($.copy(pool_address), $c);
    total_potential_withdrawable = ($.copy(inactive)).add($.copy(pending_inactive));
    coins = Stake.withdraw_with_cap_(staking_contract.owner_cap, $.copy(total_potential_withdrawable), $c);
    distribution_amount = Coin.value_(coins, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    if (($.copy(distribution_amount)).eq(((0, move_to_ts_1.u64)("0")))) {
        Coin.destroy_zero_(coins, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
        return;
    }
    else {
    }
    distribution_pool = staking_contract.distribution_pool;
    update_distribution_pool_(distribution_pool, $.copy(distribution_amount), $.copy(operator), $.copy(staking_contract.commission_percentage), $c);
    while ((Pool_u64.shareholders_count_(distribution_pool, $c)).gt((0, move_to_ts_1.u64)("0"))) {
        {
            recipients = Pool_u64.shareholders_(distribution_pool, $c);
            [temp$1, temp$2] = [recipients, (0, move_to_ts_1.u64)("0")];
            recipient = $.copy(Vector.borrow_(temp$1, temp$2, $c, [move_to_ts_2.AtomicTypeTag.Address]));
            [temp$3, temp$4] = [distribution_pool, $.copy(recipient)];
            current_shares = Pool_u64.shares_(temp$3, temp$4, $c);
            amount_to_distribute = Pool_u64.redeem_shares_(distribution_pool, $.copy(recipient), $.copy(current_shares), $c);
            Coin.deposit_($.copy(recipient), Coin.extract_(coins, $.copy(amount_to_distribute), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
            Event.emit_event_(distribute_events, new DistributeEvent({ operator: $.copy(operator), pool_address: $.copy(pool_address), recipient: $.copy(recipient), amount: $.copy(amount_to_distribute) }, new move_to_ts_2.SimpleStructTag(DistributeEvent)), $c, [new move_to_ts_2.SimpleStructTag(DistributeEvent)]);
        }
    }
    if ((Coin.value_(coins, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])])).gt((0, move_to_ts_1.u64)("0"))) {
        Coin.deposit_($.copy(staker), coins, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
        Pool_u64.update_total_coins_(distribution_pool, (0, move_to_ts_1.u64)("0"), $c);
    }
    else {
        Coin.destroy_zero_(coins, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    }
    return;
}
exports.distribute_internal_ = distribute_internal_;
function get_staking_contract_amounts_internal_(staking_contract, $c) {
    let accumulated_rewards, active, commission_amount, pending_active, total_active_stake;
    [active, , pending_active,] = Stake.get_stake_($.copy(staking_contract.pool_address), $c);
    total_active_stake = ($.copy(active)).add($.copy(pending_active));
    accumulated_rewards = ($.copy(total_active_stake)).sub($.copy(staking_contract.principal));
    commission_amount = (($.copy(accumulated_rewards)).mul($.copy(staking_contract.commission_percentage))).div((0, move_to_ts_1.u64)("100"));
    return [$.copy(total_active_stake), $.copy(accumulated_rewards), $.copy(commission_amount)];
}
exports.get_staking_contract_amounts_internal_ = get_staking_contract_amounts_internal_;
function last_recorded_principal_(staker, operator, $c) {
    let staking_contracts;
    assert_staking_contract_exists_($.copy(staker), $.copy(operator), $c);
    staking_contracts = $c.borrow_global(new move_to_ts_2.SimpleStructTag(Store), $.copy(staker)).staking_contracts;
    return $.copy(Simple_map.borrow_(staking_contracts, operator, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(StakingContract)]).principal);
}
exports.last_recorded_principal_ = last_recorded_principal_;
function new_staking_contracts_holder_(staker, $c) {
    return new Store({ staking_contracts: Simple_map.create_($c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(StakingContract)]), create_staking_contract_events: Account.new_event_handle_(staker, $c, [new move_to_ts_2.SimpleStructTag(CreateStakingContractEvent)]), update_voter_events: Account.new_event_handle_(staker, $c, [new move_to_ts_2.SimpleStructTag(UpdateVoterEvent)]), reset_lockup_events: Account.new_event_handle_(staker, $c, [new move_to_ts_2.SimpleStructTag(ResetLockupEvent)]), add_stake_events: Account.new_event_handle_(staker, $c, [new move_to_ts_2.SimpleStructTag(AddStakeEvent)]), request_commission_events: Account.new_event_handle_(staker, $c, [new move_to_ts_2.SimpleStructTag(RequestCommissionEvent)]), unlock_stake_events: Account.new_event_handle_(staker, $c, [new move_to_ts_2.SimpleStructTag(UnlockStakeEvent)]), switch_operator_events: Account.new_event_handle_(staker, $c, [new move_to_ts_2.SimpleStructTag(SwitchOperatorEvent)]), add_distribution_events: Account.new_event_handle_(staker, $c, [new move_to_ts_2.SimpleStructTag(AddDistributionEvent)]), distribute_events: Account.new_event_handle_(staker, $c, [new move_to_ts_2.SimpleStructTag(DistributeEvent)]) }, new move_to_ts_2.SimpleStructTag(Store));
}
exports.new_staking_contracts_holder_ = new_staking_contracts_holder_;
function pending_distribution_counts_(staker, operator, $c) {
    let staking_contracts;
    assert_staking_contract_exists_($.copy(staker), $.copy(operator), $c);
    staking_contracts = $c.borrow_global(new move_to_ts_2.SimpleStructTag(Store), $.copy(staker)).staking_contracts;
    return Pool_u64.shareholders_count_(Simple_map.borrow_(staking_contracts, operator, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(StakingContract)]).distribution_pool, $c);
}
exports.pending_distribution_counts_ = pending_distribution_counts_;
function request_commission_(account, staker, operator, $c) {
    let temp$1, account_addr, staking_contract, store;
    account_addr = Signer.address_of_(account, $c);
    if ((($.copy(account_addr)).hex() === ($.copy(staker)).hex())) {
        temp$1 = true;
    }
    else {
        temp$1 = (($.copy(account_addr)).hex() === ($.copy(operator)).hex());
    }
    if (!temp$1) {
        throw $.abortCode(Error.unauthenticated_($.copy(exports.ENOT_STAKER_OR_OPERATOR), $c));
    }
    assert_staking_contract_exists_($.copy(staker), $.copy(operator), $c);
    store = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(Store), $.copy(staker));
    staking_contract = Simple_map.borrow_mut_(store.staking_contracts, operator, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(StakingContract)]);
    if (($.copy(staking_contract.commission_percentage)).eq(((0, move_to_ts_1.u64)("0")))) {
        return;
    }
    else {
    }
    distribute_internal_($.copy(staker), $.copy(operator), staking_contract, store.distribute_events, $c);
    request_commission_internal_($.copy(operator), staking_contract, store.add_distribution_events, store.request_commission_events, $c);
    return;
}
exports.request_commission_ = request_commission_;
function buildPayload_request_commission(staker, operator, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "staking_contract", "request_commission", typeParamStrings, [
        staker,
        operator,
    ], isJSON);
}
exports.buildPayload_request_commission = buildPayload_request_commission;
function request_commission_internal_(operator, staking_contract, add_distribution_events, request_commission_events, $c) {
    let accumulated_rewards, commission_amount, pool_address, total_active_stake;
    [total_active_stake, accumulated_rewards, commission_amount] = get_staking_contract_amounts_internal_(staking_contract, $c);
    staking_contract.principal = ($.copy(total_active_stake)).sub($.copy(commission_amount));
    if (($.copy(commission_amount)).eq(((0, move_to_ts_1.u64)("0")))) {
        return (0, move_to_ts_1.u64)("0");
    }
    else {
    }
    add_distribution_($.copy(operator), staking_contract, $.copy(operator), $.copy(commission_amount), add_distribution_events, $c);
    Stake.unlock_with_cap_($.copy(commission_amount), staking_contract.owner_cap, $c);
    pool_address = $.copy(staking_contract.pool_address);
    Event.emit_event_(request_commission_events, new RequestCommissionEvent({ operator: $.copy(operator), pool_address: $.copy(pool_address), accumulated_rewards: $.copy(accumulated_rewards), commission_amount: $.copy(commission_amount) }, new move_to_ts_2.SimpleStructTag(RequestCommissionEvent)), $c, [new move_to_ts_2.SimpleStructTag(RequestCommissionEvent)]);
    return $.copy(commission_amount);
}
exports.request_commission_internal_ = request_commission_internal_;
function reset_lockup_(staker, operator, $c) {
    let pool_address, staker_address, staking_contract, store;
    staker_address = Signer.address_of_(staker, $c);
    assert_staking_contract_exists_($.copy(staker_address), $.copy(operator), $c);
    store = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(Store), $.copy(staker_address));
    staking_contract = Simple_map.borrow_mut_(store.staking_contracts, operator, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(StakingContract)]);
    pool_address = $.copy(staking_contract.pool_address);
    Stake.increase_lockup_with_cap_(staking_contract.owner_cap, $c);
    Event.emit_event_(store.reset_lockup_events, new ResetLockupEvent({ operator: $.copy(operator), pool_address: $.copy(pool_address) }, new move_to_ts_2.SimpleStructTag(ResetLockupEvent)), $c, [new move_to_ts_2.SimpleStructTag(ResetLockupEvent)]);
    return;
}
exports.reset_lockup_ = reset_lockup_;
function buildPayload_reset_lockup(operator, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "staking_contract", "reset_lockup", typeParamStrings, [
        operator,
    ], isJSON);
}
exports.buildPayload_reset_lockup = buildPayload_reset_lockup;
function stake_pool_address_(staker, operator, $c) {
    let staking_contracts;
    assert_staking_contract_exists_($.copy(staker), $.copy(operator), $c);
    staking_contracts = $c.borrow_global(new move_to_ts_2.SimpleStructTag(Store), $.copy(staker)).staking_contracts;
    return $.copy(Simple_map.borrow_(staking_contracts, operator, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(StakingContract)]).pool_address);
}
exports.stake_pool_address_ = stake_pool_address_;
function staking_contract_amounts_(staker, operator, $c) {
    let staking_contract, staking_contracts;
    assert_staking_contract_exists_($.copy(staker), $.copy(operator), $c);
    staking_contracts = $c.borrow_global(new move_to_ts_2.SimpleStructTag(Store), $.copy(staker)).staking_contracts;
    staking_contract = Simple_map.borrow_(staking_contracts, operator, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(StakingContract)]);
    return get_staking_contract_amounts_internal_(staking_contract, $c);
}
exports.staking_contract_amounts_ = staking_contract_amounts_;
function staking_contract_exists_(staker, operator, $c) {
    let store;
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(Store), $.copy(staker))) {
        return false;
    }
    else {
    }
    store = $c.borrow_global(new move_to_ts_2.SimpleStructTag(Store), $.copy(staker));
    return Simple_map.contains_key_(store.staking_contracts, operator, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(StakingContract)]);
}
exports.staking_contract_exists_ = staking_contract_exists_;
function switch_operator_(staker, old_operator, new_operator, new_commission_percentage, $c) {
    let temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, pool_address, staker_address, staking_contract, staking_contracts, store;
    staker_address = Signer.address_of_(staker, $c);
    assert_staking_contract_exists_($.copy(staker_address), $.copy(old_operator), $c);
    store = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(Store), $.copy(staker_address));
    staking_contracts = store.staking_contracts;
    [temp$1, temp$2] = [staking_contracts, new_operator];
    if (!!Simple_map.contains_key_(temp$1, temp$2, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(StakingContract)])) {
        throw $.abortCode(Error.invalid_state_($.copy(exports.ECANT_MERGE_STAKING_CONTRACTS), $c));
    }
    [, staking_contract] = Simple_map.remove_(staking_contracts, old_operator, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(StakingContract)]);
    distribute_internal_($.copy(staker_address), $.copy(old_operator), staking_contract, store.distribute_events, $c);
    request_commission_internal_($.copy(old_operator), staking_contract, store.add_distribution_events, store.request_commission_events, $c);
    Stake.set_operator_with_cap_(staking_contract.owner_cap, $.copy(new_operator), $c);
    staking_contract.commission_percentage = $.copy(new_commission_percentage);
    pool_address = $.copy(staking_contract.pool_address);
    Simple_map.add_(staking_contracts, $.copy(new_operator), staking_contract, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(StakingContract)]);
    temp$6 = store.switch_operator_events;
    temp$3 = $.copy(pool_address);
    temp$4 = $.copy(old_operator);
    temp$5 = $.copy(new_operator);
    Event.emit_event_(temp$6, new SwitchOperatorEvent({ old_operator: temp$4, new_operator: temp$5, pool_address: temp$3 }, new move_to_ts_2.SimpleStructTag(SwitchOperatorEvent)), $c, [new move_to_ts_2.SimpleStructTag(SwitchOperatorEvent)]);
    return;
}
exports.switch_operator_ = switch_operator_;
function buildPayload_switch_operator(old_operator, new_operator, new_commission_percentage, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "staking_contract", "switch_operator", typeParamStrings, [
        old_operator,
        new_operator,
        new_commission_percentage,
    ], isJSON);
}
exports.buildPayload_switch_operator = buildPayload_switch_operator;
function switch_operator_with_same_commission_(staker, old_operator, new_operator, $c) {
    let commission_percentage, staker_address;
    staker_address = Signer.address_of_(staker, $c);
    assert_staking_contract_exists_($.copy(staker_address), $.copy(old_operator), $c);
    commission_percentage = commission_percentage_($.copy(staker_address), $.copy(old_operator), $c);
    switch_operator_(staker, $.copy(old_operator), $.copy(new_operator), $.copy(commission_percentage), $c);
    return;
}
exports.switch_operator_with_same_commission_ = switch_operator_with_same_commission_;
function buildPayload_switch_operator_with_same_commission(old_operator, new_operator, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "staking_contract", "switch_operator_with_same_commission", typeParamStrings, [
        old_operator,
        new_operator,
    ], isJSON);
}
exports.buildPayload_switch_operator_with_same_commission = buildPayload_switch_operator_with_same_commission;
function unlock_rewards_(staker, operator, $c) {
    let accumulated_rewards, staker_address, staker_rewards, unpaid_commission;
    staker_address = Signer.address_of_(staker, $c);
    assert_staking_contract_exists_($.copy(staker_address), $.copy(operator), $c);
    [, accumulated_rewards, unpaid_commission] = staking_contract_amounts_($.copy(staker_address), $.copy(operator), $c);
    staker_rewards = ($.copy(accumulated_rewards)).sub($.copy(unpaid_commission));
    unlock_stake_(staker, $.copy(operator), $.copy(staker_rewards), $c);
    return;
}
exports.unlock_rewards_ = unlock_rewards_;
function buildPayload_unlock_rewards(operator, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "staking_contract", "unlock_rewards", typeParamStrings, [
        operator,
    ], isJSON);
}
exports.buildPayload_unlock_rewards = buildPayload_unlock_rewards;
function unlock_stake_(staker, operator, amount, $c) {
    let temp$1, temp$2, temp$3, temp$4, temp$5, active, commission_paid, pool_address, staker_address, staking_contract, store;
    if (($.copy(amount)).eq(((0, move_to_ts_1.u64)("0")))) {
        return;
    }
    else {
    }
    staker_address = Signer.address_of_(staker, $c);
    assert_staking_contract_exists_($.copy(staker_address), $.copy(operator), $c);
    store = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(Store), $.copy(staker_address));
    staking_contract = Simple_map.borrow_mut_(store.staking_contracts, operator, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(StakingContract)]);
    distribute_internal_($.copy(staker_address), $.copy(operator), staking_contract, store.distribute_events, $c);
    commission_paid = request_commission_internal_($.copy(operator), staking_contract, store.add_distribution_events, store.request_commission_events, $c);
    [active, , ,] = Stake.get_stake_($.copy(staking_contract.pool_address), $c);
    if (($.copy(active)).lt($.copy(amount))) {
        amount = $.copy(active);
    }
    else {
    }
    staking_contract.principal = ($.copy(staking_contract.principal)).sub($.copy(amount));
    add_distribution_($.copy(operator), staking_contract, $.copy(staker_address), $.copy(amount), store.add_distribution_events, $c);
    Stake.unlock_with_cap_($.copy(amount), staking_contract.owner_cap, $c);
    pool_address = $.copy(staking_contract.pool_address);
    temp$5 = store.unlock_stake_events;
    temp$1 = $.copy(pool_address);
    temp$2 = $.copy(operator);
    temp$3 = $.copy(amount);
    temp$4 = $.copy(commission_paid);
    Event.emit_event_(temp$5, new UnlockStakeEvent({ operator: temp$2, pool_address: temp$1, amount: temp$3, commission_paid: temp$4 }, new move_to_ts_2.SimpleStructTag(UnlockStakeEvent)), $c, [new move_to_ts_2.SimpleStructTag(UnlockStakeEvent)]);
    return;
}
exports.unlock_stake_ = unlock_stake_;
function buildPayload_unlock_stake(operator, amount, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "staking_contract", "unlock_stake", typeParamStrings, [
        operator,
        amount,
    ], isJSON);
}
exports.buildPayload_unlock_stake = buildPayload_unlock_stake;
function update_distribution_pool_(distribution_pool, updated_total_coins, operator, commission_percentage, $c) {
    let temp$1, temp$10, temp$11, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7, temp$8, temp$9, current_worth, i, len, previous_worth, shareholder, shareholders, shares, shares_to_transfer, unpaid_commission;
    if ((Pool_u64.total_coins_(distribution_pool, $c)).eq(($.copy(updated_total_coins)))) {
        return;
    }
    else {
    }
    temp$1 = Pool_u64.shareholders_(distribution_pool, $c);
    shareholders = temp$1;
    len = Vector.length_(shareholders, $c, [move_to_ts_2.AtomicTypeTag.Address]);
    i = (0, move_to_ts_1.u64)("0");
    while (($.copy(i)).lt($.copy(len))) {
        {
            shareholder = $.copy(Vector.borrow_(shareholders, $.copy(i), $c, [move_to_ts_2.AtomicTypeTag.Address]));
            if ((($.copy(shareholder)).hex() !== ($.copy(operator)).hex())) {
                [temp$2, temp$3] = [distribution_pool, $.copy(shareholder)];
                shares = Pool_u64.shares_(temp$2, temp$3, $c);
                [temp$4, temp$5] = [distribution_pool, $.copy(shareholder)];
                previous_worth = Pool_u64.balance_(temp$4, temp$5, $c);
                [temp$6, temp$7, temp$8] = [distribution_pool, $.copy(shares), $.copy(updated_total_coins)];
                current_worth = Pool_u64.shares_to_amount_with_total_coins_(temp$6, temp$7, temp$8, $c);
                unpaid_commission = ((($.copy(current_worth)).sub($.copy(previous_worth))).mul($.copy(commission_percentage))).div((0, move_to_ts_1.u64)("100"));
                [temp$9, temp$10, temp$11] = [distribution_pool, $.copy(unpaid_commission), $.copy(updated_total_coins)];
                shares_to_transfer = Pool_u64.amount_to_shares_with_total_coins_(temp$9, temp$10, temp$11, $c);
                Pool_u64.transfer_shares_(distribution_pool, $.copy(shareholder), $.copy(operator), $.copy(shares_to_transfer), $c);
            }
            else {
            }
            i = ($.copy(i)).add((0, move_to_ts_1.u64)("1"));
        }
    }
    Pool_u64.update_total_coins_(distribution_pool, $.copy(updated_total_coins), $c);
    return;
}
exports.update_distribution_pool_ = update_distribution_pool_;
function update_voter_(staker, operator, new_voter, $c) {
    let old_voter, pool_address, staker_address, staking_contract, store;
    staker_address = Signer.address_of_(staker, $c);
    assert_staking_contract_exists_($.copy(staker_address), $.copy(operator), $c);
    store = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(Store), $.copy(staker_address));
    staking_contract = Simple_map.borrow_mut_(store.staking_contracts, operator, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.SimpleStructTag(StakingContract)]);
    pool_address = $.copy(staking_contract.pool_address);
    old_voter = Stake.get_delegated_voter_($.copy(pool_address), $c);
    Stake.set_delegated_voter_with_cap_(staking_contract.owner_cap, $.copy(new_voter), $c);
    Event.emit_event_(store.update_voter_events, new UpdateVoterEvent({ operator: $.copy(operator), pool_address: $.copy(pool_address), old_voter: $.copy(old_voter), new_voter: $.copy(new_voter) }, new move_to_ts_2.SimpleStructTag(UpdateVoterEvent)), $c, [new move_to_ts_2.SimpleStructTag(UpdateVoterEvent)]);
    return;
}
exports.update_voter_ = update_voter_;
function buildPayload_update_voter(operator, new_voter, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "staking_contract", "update_voter", typeParamStrings, [
        operator,
        new_voter,
    ], isJSON);
}
exports.buildPayload_update_voter = buildPayload_update_voter;
function loadParsers(repo) {
    repo.addParser("0x1::staking_contract::AddDistributionEvent", AddDistributionEvent.AddDistributionEventParser);
    repo.addParser("0x1::staking_contract::AddStakeEvent", AddStakeEvent.AddStakeEventParser);
    repo.addParser("0x1::staking_contract::CreateStakingContractEvent", CreateStakingContractEvent.CreateStakingContractEventParser);
    repo.addParser("0x1::staking_contract::DistributeEvent", DistributeEvent.DistributeEventParser);
    repo.addParser("0x1::staking_contract::RequestCommissionEvent", RequestCommissionEvent.RequestCommissionEventParser);
    repo.addParser("0x1::staking_contract::ResetLockupEvent", ResetLockupEvent.ResetLockupEventParser);
    repo.addParser("0x1::staking_contract::StakingContract", StakingContract.StakingContractParser);
    repo.addParser("0x1::staking_contract::Store", Store.StoreParser);
    repo.addParser("0x1::staking_contract::SwitchOperatorEvent", SwitchOperatorEvent.SwitchOperatorEventParser);
    repo.addParser("0x1::staking_contract::UnlockStakeEvent", UnlockStakeEvent.UnlockStakeEventParser);
    repo.addParser("0x1::staking_contract::UpdateVoterEvent", UpdateVoterEvent.UpdateVoterEventParser);
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
    get AddDistributionEvent() { return AddDistributionEvent; }
    get AddStakeEvent() { return AddStakeEvent; }
    get CreateStakingContractEvent() { return CreateStakingContractEvent; }
    get DistributeEvent() { return DistributeEvent; }
    get RequestCommissionEvent() { return RequestCommissionEvent; }
    get ResetLockupEvent() { return ResetLockupEvent; }
    get StakingContract() { return StakingContract; }
    get Store() { return Store; }
    loadStore(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield Store.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get SwitchOperatorEvent() { return SwitchOperatorEvent; }
    get UnlockStakeEvent() { return UnlockStakeEvent; }
    get UpdateVoterEvent() { return UpdateVoterEvent; }
    payload_add_stake(operator, amount, isJSON = false) {
        return buildPayload_add_stake(operator, amount, isJSON);
    }
    add_stake(_account, operator, amount, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_add_stake(operator, amount, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_create_staking_contract(operator, voter, amount, commission_percentage, contract_creation_seed, isJSON = false) {
        return buildPayload_create_staking_contract(operator, voter, amount, commission_percentage, contract_creation_seed, isJSON);
    }
    create_staking_contract(_account, operator, voter, amount, commission_percentage, contract_creation_seed, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_create_staking_contract(operator, voter, amount, commission_percentage, contract_creation_seed, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_distribute(staker, operator, isJSON = false) {
        return buildPayload_distribute(staker, operator, isJSON);
    }
    distribute(_account, staker, operator, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_distribute(staker, operator, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_request_commission(staker, operator, isJSON = false) {
        return buildPayload_request_commission(staker, operator, isJSON);
    }
    request_commission(_account, staker, operator, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_request_commission(staker, operator, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_reset_lockup(operator, isJSON = false) {
        return buildPayload_reset_lockup(operator, isJSON);
    }
    reset_lockup(_account, operator, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_reset_lockup(operator, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_switch_operator(old_operator, new_operator, new_commission_percentage, isJSON = false) {
        return buildPayload_switch_operator(old_operator, new_operator, new_commission_percentage, isJSON);
    }
    switch_operator(_account, old_operator, new_operator, new_commission_percentage, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_switch_operator(old_operator, new_operator, new_commission_percentage, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_switch_operator_with_same_commission(old_operator, new_operator, isJSON = false) {
        return buildPayload_switch_operator_with_same_commission(old_operator, new_operator, isJSON);
    }
    switch_operator_with_same_commission(_account, old_operator, new_operator, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_switch_operator_with_same_commission(old_operator, new_operator, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_unlock_rewards(operator, isJSON = false) {
        return buildPayload_unlock_rewards(operator, isJSON);
    }
    unlock_rewards(_account, operator, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_unlock_rewards(operator, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_unlock_stake(operator, amount, isJSON = false) {
        return buildPayload_unlock_stake(operator, amount, isJSON);
    }
    unlock_stake(_account, operator, amount, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_unlock_stake(operator, amount, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_update_voter(operator, new_voter, isJSON = false) {
        return buildPayload_update_voter(operator, new_voter, isJSON);
    }
    update_voter(_account, operator, new_voter, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_update_voter(operator, new_voter, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
}
exports.App = App;
//# sourceMappingURL=staking_contract.js.map