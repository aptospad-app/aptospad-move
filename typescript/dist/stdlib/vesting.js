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
exports.get_role_holder_ = exports.get_beneficiary_ = exports.buildPayload_distribute = exports.distribute_ = exports.create_vesting_schedule_ = exports.create_vesting_contract_account_ = exports.create_vesting_contract_ = exports.beneficiary_ = exports.assert_vesting_contract_exists_ = exports.assert_active_vesting_contract_ = exports.buildPayload_admin_withdraw = exports.admin_withdraw_ = exports.VestingSchedule = exports.VestingContract = exports.VestingAccountManagement = exports.VestEvent = exports.UpdateVoterEvent = exports.UpdateOperatorEvent = exports.UnlockRewardsEvent = exports.TerminateEvent = exports.StakingInfo = exports.SetBeneficiaryEvent = exports.ResetLockupEvent = exports.DistributeEvent = exports.CreateVestingContractEvent = exports.AdminWithdrawEvent = exports.AdminStore = exports.VESTING_POOL_TERMINATED = exports.VESTING_POOL_SALT = exports.VESTING_POOL_ACTIVE = exports.ROLE_BENEFICIARY_RESETTER = exports.MAXIMUM_SHAREHOLDERS = exports.EZERO_VESTING_SCHEDULE_PERIOD = exports.EZERO_GRANT = exports.EVESTING_START_TOO_SOON = exports.EVESTING_CONTRACT_STILL_ACTIVE = exports.EVESTING_CONTRACT_NOT_FOUND = exports.EVESTING_CONTRACT_NOT_ACTIVE = exports.EVESTING_ACCOUNT_HAS_NO_ROLES = exports.ESHARES_LENGTH_MISMATCH = exports.EROLE_NOT_FOUND = exports.EPERMISSION_DENIED = exports.EPENDING_STAKE_FOUND = exports.ENO_SHAREHOLDERS = exports.ENOT_ADMIN = exports.EINVALID_WITHDRAWAL_ADDRESS = exports.EEMPTY_VESTING_SCHEDULE = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
exports.App = exports.loadParsers = exports.withdraw_stake_ = exports.voter_ = exports.vesting_start_secs_ = exports.vesting_contracts_ = exports.buildPayload_vest = exports.vest_ = exports.verify_admin_ = exports.buildPayload_update_voter = exports.update_voter_ = exports.buildPayload_update_operator_with_same_commission = exports.update_operator_with_same_commission_ = exports.buildPayload_update_operator = exports.update_operator_ = exports.unlock_stake_ = exports.buildPayload_unlock_rewards = exports.unlock_rewards_ = exports.buildPayload_terminate_vesting_contract = exports.terminate_vesting_contract_ = exports.stake_pool_address_ = exports.buildPayload_set_management_role = exports.set_management_role_ = exports.buildPayload_set_beneficiary_resetter = exports.set_beneficiary_resetter_ = exports.buildPayload_set_beneficiary = exports.set_beneficiary_ = exports.buildPayload_reset_lockup = exports.reset_lockup_ = exports.buildPayload_reset_beneficiary = exports.reset_beneficiary_ = exports.remaining_grant_ = exports.operator_commission_percentage_ = exports.operator_ = exports.get_vesting_account_signer_internal_ = exports.get_vesting_account_signer_ = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Account = __importStar(require("./account"));
const Aptos_account = __importStar(require("./aptos_account"));
const Bcs = __importStar(require("./bcs"));
const Coin = __importStar(require("./coin"));
const Error = __importStar(require("./error"));
const Event = __importStar(require("./event"));
const Fixed_point32 = __importStar(require("./fixed_point32"));
const Math64 = __importStar(require("./math64"));
const Pool_u64 = __importStar(require("./pool_u64"));
const Signer = __importStar(require("./signer"));
const Simple_map = __importStar(require("./simple_map"));
const Stake = __importStar(require("./stake"));
const Staking_contract = __importStar(require("./staking_contract"));
const String = __importStar(require("./string"));
const System_addresses = __importStar(require("./system_addresses"));
const Timestamp = __importStar(require("./timestamp"));
const Vector = __importStar(require("./vector"));
exports.packageName = "AptosFramework";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "vesting";
exports.EEMPTY_VESTING_SCHEDULE = (0, move_to_ts_1.u64)("2");
exports.EINVALID_WITHDRAWAL_ADDRESS = (0, move_to_ts_1.u64)("1");
exports.ENOT_ADMIN = (0, move_to_ts_1.u64)("7");
exports.ENO_SHAREHOLDERS = (0, move_to_ts_1.u64)("4");
exports.EPENDING_STAKE_FOUND = (0, move_to_ts_1.u64)("11");
exports.EPERMISSION_DENIED = (0, move_to_ts_1.u64)("15");
exports.EROLE_NOT_FOUND = (0, move_to_ts_1.u64)("14");
exports.ESHARES_LENGTH_MISMATCH = (0, move_to_ts_1.u64)("5");
exports.EVESTING_ACCOUNT_HAS_NO_ROLES = (0, move_to_ts_1.u64)("13");
exports.EVESTING_CONTRACT_NOT_ACTIVE = (0, move_to_ts_1.u64)("8");
exports.EVESTING_CONTRACT_NOT_FOUND = (0, move_to_ts_1.u64)("10");
exports.EVESTING_CONTRACT_STILL_ACTIVE = (0, move_to_ts_1.u64)("9");
exports.EVESTING_START_TOO_SOON = (0, move_to_ts_1.u64)("6");
exports.EZERO_GRANT = (0, move_to_ts_1.u64)("12");
exports.EZERO_VESTING_SCHEDULE_PERIOD = (0, move_to_ts_1.u64)("3");
exports.MAXIMUM_SHAREHOLDERS = (0, move_to_ts_1.u64)("30");
exports.ROLE_BENEFICIARY_RESETTER = [(0, move_to_ts_1.u8)("82"), (0, move_to_ts_1.u8)("79"), (0, move_to_ts_1.u8)("76"), (0, move_to_ts_1.u8)("69"), (0, move_to_ts_1.u8)("95"), (0, move_to_ts_1.u8)("66"), (0, move_to_ts_1.u8)("69"), (0, move_to_ts_1.u8)("78"), (0, move_to_ts_1.u8)("69"), (0, move_to_ts_1.u8)("70"), (0, move_to_ts_1.u8)("73"), (0, move_to_ts_1.u8)("67"), (0, move_to_ts_1.u8)("73"), (0, move_to_ts_1.u8)("65"), (0, move_to_ts_1.u8)("82"), (0, move_to_ts_1.u8)("89"), (0, move_to_ts_1.u8)("95"), (0, move_to_ts_1.u8)("82"), (0, move_to_ts_1.u8)("69"), (0, move_to_ts_1.u8)("83"), (0, move_to_ts_1.u8)("69"), (0, move_to_ts_1.u8)("84"), (0, move_to_ts_1.u8)("84"), (0, move_to_ts_1.u8)("69"), (0, move_to_ts_1.u8)("82")];
exports.VESTING_POOL_ACTIVE = (0, move_to_ts_1.u64)("1");
exports.VESTING_POOL_SALT = [(0, move_to_ts_1.u8)("97"), (0, move_to_ts_1.u8)("112"), (0, move_to_ts_1.u8)("116"), (0, move_to_ts_1.u8)("111"), (0, move_to_ts_1.u8)("115"), (0, move_to_ts_1.u8)("95"), (0, move_to_ts_1.u8)("102"), (0, move_to_ts_1.u8)("114"), (0, move_to_ts_1.u8)("97"), (0, move_to_ts_1.u8)("109"), (0, move_to_ts_1.u8)("101"), (0, move_to_ts_1.u8)("119"), (0, move_to_ts_1.u8)("111"), (0, move_to_ts_1.u8)("114"), (0, move_to_ts_1.u8)("107"), (0, move_to_ts_1.u8)("58"), (0, move_to_ts_1.u8)("58"), (0, move_to_ts_1.u8)("118"), (0, move_to_ts_1.u8)("101"), (0, move_to_ts_1.u8)("115"), (0, move_to_ts_1.u8)("116"), (0, move_to_ts_1.u8)("105"), (0, move_to_ts_1.u8)("110"), (0, move_to_ts_1.u8)("103")];
exports.VESTING_POOL_TERMINATED = (0, move_to_ts_1.u64)("2");
class AdminStore {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.vesting_contracts = proto['vesting_contracts'];
        this.nonce = proto['nonce'];
        this.create_events = proto['create_events'];
    }
    static AdminStoreParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, AdminStore);
        return new AdminStore(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, AdminStore, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, AdminStore, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "AdminStore", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.create_events.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.AdminStore = AdminStore;
AdminStore.moduleAddress = exports.moduleAddress;
AdminStore.moduleName = exports.moduleName;
AdminStore.structName = "AdminStore";
AdminStore.typeParameters = [];
AdminStore.fields = [
    { name: "vesting_contracts", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.Address) },
    { name: "nonce", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "create_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "vesting", "CreateVestingContractEvent", [])]) }
];
class AdminWithdrawEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.admin = proto['admin'];
        this.vesting_contract_address = proto['vesting_contract_address'];
        this.amount = proto['amount'];
    }
    static AdminWithdrawEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, AdminWithdrawEvent);
        return new AdminWithdrawEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "AdminWithdrawEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.AdminWithdrawEvent = AdminWithdrawEvent;
AdminWithdrawEvent.moduleAddress = exports.moduleAddress;
AdminWithdrawEvent.moduleName = exports.moduleName;
AdminWithdrawEvent.structName = "AdminWithdrawEvent";
AdminWithdrawEvent.typeParameters = [];
AdminWithdrawEvent.fields = [
    { name: "admin", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "vesting_contract_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "amount", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class CreateVestingContractEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.operator = proto['operator'];
        this.voter = proto['voter'];
        this.grant_amount = proto['grant_amount'];
        this.withdrawal_address = proto['withdrawal_address'];
        this.vesting_contract_address = proto['vesting_contract_address'];
        this.staking_pool_address = proto['staking_pool_address'];
        this.commission_percentage = proto['commission_percentage'];
    }
    static CreateVestingContractEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, CreateVestingContractEvent);
        return new CreateVestingContractEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "CreateVestingContractEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.CreateVestingContractEvent = CreateVestingContractEvent;
CreateVestingContractEvent.moduleAddress = exports.moduleAddress;
CreateVestingContractEvent.moduleName = exports.moduleName;
CreateVestingContractEvent.structName = "CreateVestingContractEvent";
CreateVestingContractEvent.typeParameters = [];
CreateVestingContractEvent.fields = [
    { name: "operator", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "voter", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "grant_amount", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "withdrawal_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "vesting_contract_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "staking_pool_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "commission_percentage", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class DistributeEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.admin = proto['admin'];
        this.vesting_contract_address = proto['vesting_contract_address'];
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
    { name: "admin", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "vesting_contract_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "amount", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class ResetLockupEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.admin = proto['admin'];
        this.vesting_contract_address = proto['vesting_contract_address'];
        this.staking_pool_address = proto['staking_pool_address'];
        this.new_lockup_expiration_secs = proto['new_lockup_expiration_secs'];
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
    { name: "admin", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "vesting_contract_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "staking_pool_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "new_lockup_expiration_secs", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class SetBeneficiaryEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.admin = proto['admin'];
        this.vesting_contract_address = proto['vesting_contract_address'];
        this.shareholder = proto['shareholder'];
        this.old_beneficiary = proto['old_beneficiary'];
        this.new_beneficiary = proto['new_beneficiary'];
    }
    static SetBeneficiaryEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, SetBeneficiaryEvent);
        return new SetBeneficiaryEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "SetBeneficiaryEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.SetBeneficiaryEvent = SetBeneficiaryEvent;
SetBeneficiaryEvent.moduleAddress = exports.moduleAddress;
SetBeneficiaryEvent.moduleName = exports.moduleName;
SetBeneficiaryEvent.structName = "SetBeneficiaryEvent";
SetBeneficiaryEvent.typeParameters = [];
SetBeneficiaryEvent.fields = [
    { name: "admin", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "vesting_contract_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "shareholder", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "old_beneficiary", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "new_beneficiary", typeTag: move_to_ts_2.AtomicTypeTag.Address }
];
class StakingInfo {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.pool_address = proto['pool_address'];
        this.operator = proto['operator'];
        this.voter = proto['voter'];
        this.commission_percentage = proto['commission_percentage'];
    }
    static StakingInfoParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, StakingInfo);
        return new StakingInfo(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "StakingInfo", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.StakingInfo = StakingInfo;
StakingInfo.moduleAddress = exports.moduleAddress;
StakingInfo.moduleName = exports.moduleName;
StakingInfo.structName = "StakingInfo";
StakingInfo.typeParameters = [];
StakingInfo.fields = [
    { name: "pool_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "operator", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "voter", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "commission_percentage", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class TerminateEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.admin = proto['admin'];
        this.vesting_contract_address = proto['vesting_contract_address'];
    }
    static TerminateEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, TerminateEvent);
        return new TerminateEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "TerminateEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.TerminateEvent = TerminateEvent;
TerminateEvent.moduleAddress = exports.moduleAddress;
TerminateEvent.moduleName = exports.moduleName;
TerminateEvent.structName = "TerminateEvent";
TerminateEvent.typeParameters = [];
TerminateEvent.fields = [
    { name: "admin", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "vesting_contract_address", typeTag: move_to_ts_2.AtomicTypeTag.Address }
];
class UnlockRewardsEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.admin = proto['admin'];
        this.vesting_contract_address = proto['vesting_contract_address'];
        this.staking_pool_address = proto['staking_pool_address'];
        this.amount = proto['amount'];
    }
    static UnlockRewardsEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, UnlockRewardsEvent);
        return new UnlockRewardsEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "UnlockRewardsEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.UnlockRewardsEvent = UnlockRewardsEvent;
UnlockRewardsEvent.moduleAddress = exports.moduleAddress;
UnlockRewardsEvent.moduleName = exports.moduleName;
UnlockRewardsEvent.structName = "UnlockRewardsEvent";
UnlockRewardsEvent.typeParameters = [];
UnlockRewardsEvent.fields = [
    { name: "admin", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "vesting_contract_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "staking_pool_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "amount", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class UpdateOperatorEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.admin = proto['admin'];
        this.vesting_contract_address = proto['vesting_contract_address'];
        this.staking_pool_address = proto['staking_pool_address'];
        this.old_operator = proto['old_operator'];
        this.new_operator = proto['new_operator'];
        this.commission_percentage = proto['commission_percentage'];
    }
    static UpdateOperatorEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, UpdateOperatorEvent);
        return new UpdateOperatorEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "UpdateOperatorEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.UpdateOperatorEvent = UpdateOperatorEvent;
UpdateOperatorEvent.moduleAddress = exports.moduleAddress;
UpdateOperatorEvent.moduleName = exports.moduleName;
UpdateOperatorEvent.structName = "UpdateOperatorEvent";
UpdateOperatorEvent.typeParameters = [];
UpdateOperatorEvent.fields = [
    { name: "admin", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "vesting_contract_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "staking_pool_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "old_operator", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "new_operator", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "commission_percentage", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class UpdateVoterEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.admin = proto['admin'];
        this.vesting_contract_address = proto['vesting_contract_address'];
        this.staking_pool_address = proto['staking_pool_address'];
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
    { name: "admin", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "vesting_contract_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "staking_pool_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "old_voter", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "new_voter", typeTag: move_to_ts_2.AtomicTypeTag.Address }
];
class VestEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.admin = proto['admin'];
        this.vesting_contract_address = proto['vesting_contract_address'];
        this.staking_pool_address = proto['staking_pool_address'];
        this.period_vested = proto['period_vested'];
        this.amount = proto['amount'];
    }
    static VestEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, VestEvent);
        return new VestEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "VestEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.VestEvent = VestEvent;
VestEvent.moduleAddress = exports.moduleAddress;
VestEvent.moduleName = exports.moduleName;
VestEvent.structName = "VestEvent";
VestEvent.typeParameters = [];
VestEvent.fields = [
    { name: "admin", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "vesting_contract_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "staking_pool_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "period_vested", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "amount", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class VestingAccountManagement {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.roles = proto['roles'];
    }
    static VestingAccountManagementParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, VestingAccountManagement);
        return new VestingAccountManagement(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, VestingAccountManagement, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, VestingAccountManagement, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "VestingAccountManagement", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.roles.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.VestingAccountManagement = VestingAccountManagement;
VestingAccountManagement.moduleAddress = exports.moduleAddress;
VestingAccountManagement.moduleName = exports.moduleName;
VestingAccountManagement.structName = "VestingAccountManagement";
VestingAccountManagement.typeParameters = [];
VestingAccountManagement.fields = [
    { name: "roles", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "simple_map", "SimpleMap", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), move_to_ts_2.AtomicTypeTag.Address]) }
];
class VestingContract {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.state = proto['state'];
        this.admin = proto['admin'];
        this.grant_pool = proto['grant_pool'];
        this.beneficiaries = proto['beneficiaries'];
        this.vesting_schedule = proto['vesting_schedule'];
        this.withdrawal_address = proto['withdrawal_address'];
        this.staking = proto['staking'];
        this.remaining_grant = proto['remaining_grant'];
        this.signer_cap = proto['signer_cap'];
        this.update_operator_events = proto['update_operator_events'];
        this.update_voter_events = proto['update_voter_events'];
        this.reset_lockup_events = proto['reset_lockup_events'];
        this.set_beneficiary_events = proto['set_beneficiary_events'];
        this.unlock_rewards_events = proto['unlock_rewards_events'];
        this.vest_events = proto['vest_events'];
        this.distribute_events = proto['distribute_events'];
        this.terminate_events = proto['terminate_events'];
        this.admin_withdraw_events = proto['admin_withdraw_events'];
    }
    static VestingContractParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, VestingContract);
        return new VestingContract(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, VestingContract, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, VestingContract, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "VestingContract", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.grant_pool.loadFullState(app);
            yield this.beneficiaries.loadFullState(app);
            yield this.vesting_schedule.loadFullState(app);
            yield this.staking.loadFullState(app);
            yield this.signer_cap.loadFullState(app);
            yield this.update_operator_events.loadFullState(app);
            yield this.update_voter_events.loadFullState(app);
            yield this.reset_lockup_events.loadFullState(app);
            yield this.set_beneficiary_events.loadFullState(app);
            yield this.unlock_rewards_events.loadFullState(app);
            yield this.vest_events.loadFullState(app);
            yield this.distribute_events.loadFullState(app);
            yield this.terminate_events.loadFullState(app);
            yield this.admin_withdraw_events.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.VestingContract = VestingContract;
VestingContract.moduleAddress = exports.moduleAddress;
VestingContract.moduleName = exports.moduleName;
VestingContract.structName = "VestingContract";
VestingContract.typeParameters = [];
VestingContract.fields = [
    { name: "state", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "admin", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "grant_pool", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "pool_u64", "Pool", []) },
    { name: "beneficiaries", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "simple_map", "SimpleMap", [move_to_ts_2.AtomicTypeTag.Address, move_to_ts_2.AtomicTypeTag.Address]) },
    { name: "vesting_schedule", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "vesting", "VestingSchedule", []) },
    { name: "withdrawal_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "staking", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "vesting", "StakingInfo", []) },
    { name: "remaining_grant", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "signer_cap", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "account", "SignerCapability", []) },
    { name: "update_operator_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "vesting", "UpdateOperatorEvent", [])]) },
    { name: "update_voter_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "vesting", "UpdateVoterEvent", [])]) },
    { name: "reset_lockup_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "vesting", "ResetLockupEvent", [])]) },
    { name: "set_beneficiary_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "vesting", "SetBeneficiaryEvent", [])]) },
    { name: "unlock_rewards_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "vesting", "UnlockRewardsEvent", [])]) },
    { name: "vest_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "vesting", "VestEvent", [])]) },
    { name: "distribute_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "vesting", "DistributeEvent", [])]) },
    { name: "terminate_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "vesting", "TerminateEvent", [])]) },
    { name: "admin_withdraw_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "vesting", "AdminWithdrawEvent", [])]) }
];
class VestingSchedule {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.schedule = proto['schedule'];
        this.start_timestamp_secs = proto['start_timestamp_secs'];
        this.period_duration = proto['period_duration'];
        this.last_vested_period = proto['last_vested_period'];
    }
    static VestingScheduleParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, VestingSchedule);
        return new VestingSchedule(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "VestingSchedule", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.VestingSchedule = VestingSchedule;
VestingSchedule.moduleAddress = exports.moduleAddress;
VestingSchedule.moduleName = exports.moduleName;
VestingSchedule.structName = "VestingSchedule";
VestingSchedule.typeParameters = [];
VestingSchedule.fields = [
    { name: "schedule", typeTag: new move_to_ts_2.VectorTag(new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "fixed_point32", "FixedPoint32", [])) },
    { name: "start_timestamp_secs", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "period_duration", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "last_vested_period", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
function admin_withdraw_(admin, contract_address, $c) {
    let temp$2, temp$3, temp$4, temp$5, amount, coins, vesting_contract, vesting_contract__1;
    vesting_contract = $c.borrow_global(new move_to_ts_2.SimpleStructTag(VestingContract), $.copy(contract_address));
    if (!($.copy(vesting_contract.state)).eq(($.copy(exports.VESTING_POOL_TERMINATED)))) {
        throw $.abortCode(Error.invalid_state_($.copy(exports.EVESTING_CONTRACT_STILL_ACTIVE), $c));
    }
    vesting_contract__1 = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(VestingContract), $.copy(contract_address));
    [temp$2, temp$3] = [admin, vesting_contract__1];
    verify_admin_(temp$2, temp$3, $c);
    [temp$4, temp$5] = [vesting_contract__1, $.copy(contract_address)];
    coins = withdraw_stake_(temp$4, temp$5, $c);
    amount = Coin.value_(coins, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    if (($.copy(amount)).eq(((0, move_to_ts_1.u64)("0")))) {
        Coin.destroy_zero_(coins, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
        return;
    }
    else {
    }
    Coin.deposit_($.copy(vesting_contract__1.withdrawal_address), coins, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    Event.emit_event_(vesting_contract__1.admin_withdraw_events, new AdminWithdrawEvent({ admin: $.copy(vesting_contract__1.admin), vesting_contract_address: $.copy(contract_address), amount: $.copy(amount) }, new move_to_ts_2.SimpleStructTag(AdminWithdrawEvent)), $c, [new move_to_ts_2.SimpleStructTag(AdminWithdrawEvent)]);
    return;
}
exports.admin_withdraw_ = admin_withdraw_;
function buildPayload_admin_withdraw(contract_address, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "vesting", "admin_withdraw", typeParamStrings, [
        contract_address,
    ], isJSON);
}
exports.buildPayload_admin_withdraw = buildPayload_admin_withdraw;
function assert_active_vesting_contract_(contract_address, $c) {
    let vesting_contract;
    assert_vesting_contract_exists_($.copy(contract_address), $c);
    vesting_contract = $c.borrow_global(new move_to_ts_2.SimpleStructTag(VestingContract), $.copy(contract_address));
    if (!($.copy(vesting_contract.state)).eq(($.copy(exports.VESTING_POOL_ACTIVE)))) {
        throw $.abortCode(Error.invalid_state_($.copy(exports.EVESTING_CONTRACT_NOT_ACTIVE), $c));
    }
    return;
}
exports.assert_active_vesting_contract_ = assert_active_vesting_contract_;
function assert_vesting_contract_exists_(contract_address, $c) {
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(VestingContract), $.copy(contract_address))) {
        throw $.abortCode(Error.not_found_($.copy(exports.EVESTING_CONTRACT_NOT_FOUND), $c));
    }
    return;
}
exports.assert_vesting_contract_exists_ = assert_vesting_contract_exists_;
function beneficiary_(vesting_contract_address, shareholder, $c) {
    assert_vesting_contract_exists_($.copy(vesting_contract_address), $c);
    return get_beneficiary_($c.borrow_global(new move_to_ts_2.SimpleStructTag(VestingContract), $.copy(vesting_contract_address)), $.copy(shareholder), $c);
}
exports.beneficiary_ = beneficiary_;
function create_vesting_contract_(admin, shareholders, buy_ins, vesting_schedule, withdrawal_address, operator, voter, commission_percentage, contract_creation_seed, $c) {
    let temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7, temp$8, admin_address, admin_store, buy_in, buy_in_amount, contract_address, contract_signer, contract_signer_cap, grant, grant_amount, grant_pool, i, len, pool_address, shareholder;
    if (!!System_addresses.is_reserved_address_($.copy(withdrawal_address), $c)) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EINVALID_WITHDRAWAL_ADDRESS), $c));
    }
    Aptos_account.assert_account_is_registered_for_apt_($.copy(withdrawal_address), $c);
    if (!(Vector.length_(shareholders, $c, [move_to_ts_2.AtomicTypeTag.Address])).gt((0, move_to_ts_1.u64)("0"))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.ENO_SHAREHOLDERS), $c));
    }
    if (!(Simple_map.length_(buy_ins, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])])])).eq((Vector.length_(shareholders, $c, [move_to_ts_2.AtomicTypeTag.Address])))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.ESHARES_LENGTH_MISMATCH), $c));
    }
    grant = Coin.zero_($c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    grant_amount = (0, move_to_ts_1.u64)("0");
    grant_pool = Pool_u64.create_($.copy(exports.MAXIMUM_SHAREHOLDERS), $c);
    len = Vector.length_(shareholders, $c, [move_to_ts_2.AtomicTypeTag.Address]);
    i = (0, move_to_ts_1.u64)("0");
    while (($.copy(i)).lt($.copy(len))) {
        {
            shareholder = $.copy(Vector.borrow_(shareholders, $.copy(i), $c, [move_to_ts_2.AtomicTypeTag.Address]));
            [, buy_in] = Simple_map.remove_(buy_ins, shareholder, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])])]);
            buy_in_amount = Coin.value_(buy_in, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
            Coin.merge_(grant, buy_in, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
            Pool_u64.buy_in_(grant_pool, $.copy(Vector.borrow_(shareholders, $.copy(i), $c, [move_to_ts_2.AtomicTypeTag.Address])), $.copy(buy_in_amount), $c);
            grant_amount = ($.copy(grant_amount)).add($.copy(buy_in_amount));
            i = ($.copy(i)).add((0, move_to_ts_1.u64)("1"));
        }
    }
    if (!($.copy(grant_amount)).gt((0, move_to_ts_1.u64)("0"))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EZERO_GRANT), $c));
    }
    admin_address = Signer.address_of_(admin, $c);
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(AdminStore), $.copy(admin_address))) {
        $c.move_to(new move_to_ts_2.SimpleStructTag(AdminStore), admin, new AdminStore({ vesting_contracts: Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.Address]), nonce: (0, move_to_ts_1.u64)("0"), create_events: Account.new_event_handle_(admin, $c, [new move_to_ts_2.SimpleStructTag(CreateVestingContractEvent)]) }, new move_to_ts_2.SimpleStructTag(AdminStore)));
    }
    else {
    }
    [contract_signer, contract_signer_cap] = create_vesting_contract_account_(admin, $.copy(contract_creation_seed), $c);
    pool_address = Staking_contract.create_staking_contract_with_coins_(contract_signer, $.copy(operator), $.copy(voter), grant, $.copy(commission_percentage), $.copy(contract_creation_seed), $c);
    contract_address = Signer.address_of_(contract_signer, $c);
    admin_store = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(AdminStore), $.copy(admin_address));
    Vector.push_back_(admin_store.vesting_contracts, $.copy(contract_address), $c, [move_to_ts_2.AtomicTypeTag.Address]);
    temp$8 = admin_store.create_events;
    temp$1 = $.copy(operator);
    temp$2 = $.copy(voter);
    temp$3 = $.copy(withdrawal_address);
    temp$4 = $.copy(grant_amount);
    temp$5 = $.copy(contract_address);
    temp$6 = $.copy(pool_address);
    temp$7 = $.copy(commission_percentage);
    Event.emit_event_(temp$8, new CreateVestingContractEvent({ operator: temp$1, voter: temp$2, grant_amount: temp$4, withdrawal_address: temp$3, vesting_contract_address: temp$5, staking_pool_address: temp$6, commission_percentage: temp$7 }, new move_to_ts_2.SimpleStructTag(CreateVestingContractEvent)), $c, [new move_to_ts_2.SimpleStructTag(CreateVestingContractEvent)]);
    $c.move_to(new move_to_ts_2.SimpleStructTag(VestingContract), contract_signer, new VestingContract({ state: $.copy(exports.VESTING_POOL_ACTIVE), admin: $.copy(admin_address), grant_pool: grant_pool, beneficiaries: Simple_map.create_($c, [move_to_ts_2.AtomicTypeTag.Address, move_to_ts_2.AtomicTypeTag.Address]), vesting_schedule: $.copy(vesting_schedule), withdrawal_address: $.copy(withdrawal_address), staking: new StakingInfo({ pool_address: $.copy(pool_address), operator: $.copy(operator), voter: $.copy(voter), commission_percentage: $.copy(commission_percentage) }, new move_to_ts_2.SimpleStructTag(StakingInfo)), remaining_grant: $.copy(grant_amount), signer_cap: contract_signer_cap, update_operator_events: Account.new_event_handle_(contract_signer, $c, [new move_to_ts_2.SimpleStructTag(UpdateOperatorEvent)]), update_voter_events: Account.new_event_handle_(contract_signer, $c, [new move_to_ts_2.SimpleStructTag(UpdateVoterEvent)]), reset_lockup_events: Account.new_event_handle_(contract_signer, $c, [new move_to_ts_2.SimpleStructTag(ResetLockupEvent)]), set_beneficiary_events: Account.new_event_handle_(contract_signer, $c, [new move_to_ts_2.SimpleStructTag(SetBeneficiaryEvent)]), unlock_rewards_events: Account.new_event_handle_(contract_signer, $c, [new move_to_ts_2.SimpleStructTag(UnlockRewardsEvent)]), vest_events: Account.new_event_handle_(contract_signer, $c, [new move_to_ts_2.SimpleStructTag(VestEvent)]), distribute_events: Account.new_event_handle_(contract_signer, $c, [new move_to_ts_2.SimpleStructTag(DistributeEvent)]), terminate_events: Account.new_event_handle_(contract_signer, $c, [new move_to_ts_2.SimpleStructTag(TerminateEvent)]), admin_withdraw_events: Account.new_event_handle_(contract_signer, $c, [new move_to_ts_2.SimpleStructTag(AdminWithdrawEvent)]) }, new move_to_ts_2.SimpleStructTag(VestingContract)));
    Simple_map.destroy_empty_(buy_ins, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])])]);
    return $.copy(contract_address);
}
exports.create_vesting_contract_ = create_vesting_contract_;
function create_vesting_contract_account_(admin, contract_creation_seed, $c) {
    let temp$1, account_signer, admin_store, seed, signer_cap;
    admin_store = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(AdminStore), Signer.address_of_(admin, $c));
    temp$1 = Signer.address_of_(admin, $c);
    seed = Bcs.to_bytes_(temp$1, $c, [move_to_ts_2.AtomicTypeTag.Address]);
    Vector.append_(seed, Bcs.to_bytes_(admin_store.nonce, $c, [move_to_ts_2.AtomicTypeTag.U64]), $c, [move_to_ts_2.AtomicTypeTag.U8]);
    admin_store.nonce = ($.copy(admin_store.nonce)).add((0, move_to_ts_1.u64)("1"));
    Vector.append_(seed, $.copy(exports.VESTING_POOL_SALT), $c, [move_to_ts_2.AtomicTypeTag.U8]);
    Vector.append_(seed, $.copy(contract_creation_seed), $c, [move_to_ts_2.AtomicTypeTag.U8]);
    [account_signer, signer_cap] = Account.create_resource_account_(admin, $.copy(seed), $c);
    Coin.register_(account_signer, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    return [account_signer, signer_cap];
}
exports.create_vesting_contract_account_ = create_vesting_contract_account_;
function create_vesting_schedule_(schedule, start_timestamp_secs, period_duration, $c) {
    if (!(Vector.length_(schedule, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "fixed_point32", "FixedPoint32", [])])).gt((0, move_to_ts_1.u64)("0"))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EEMPTY_VESTING_SCHEDULE), $c));
    }
    if (!($.copy(period_duration)).gt((0, move_to_ts_1.u64)("0"))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EZERO_VESTING_SCHEDULE_PERIOD), $c));
    }
    if (!($.copy(start_timestamp_secs)).ge(Timestamp.now_seconds_($c))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EVESTING_START_TOO_SOON), $c));
    }
    return new VestingSchedule({ schedule: $.copy(schedule), start_timestamp_secs: $.copy(start_timestamp_secs), period_duration: $.copy(period_duration), last_vested_period: (0, move_to_ts_1.u64)("0") }, new move_to_ts_2.SimpleStructTag(VestingSchedule));
}
exports.create_vesting_schedule_ = create_vesting_schedule_;
function distribute_(contract_address, $c) {
    let temp$1, temp$2, temp$3, temp$4, temp$5, amount, coins, grant_pool, i, len, recipient_address, share_of_coins, shareholder, shareholders, shares, total_distribution_amount, vesting_contract;
    assert_active_vesting_contract_($.copy(contract_address), $c);
    vesting_contract = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(VestingContract), $.copy(contract_address));
    [temp$1, temp$2] = [vesting_contract, $.copy(contract_address)];
    coins = withdraw_stake_(temp$1, temp$2, $c);
    total_distribution_amount = Coin.value_(coins, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    if (($.copy(total_distribution_amount)).eq(((0, move_to_ts_1.u64)("0")))) {
        Coin.destroy_zero_(coins, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
        return;
    }
    else {
    }
    grant_pool = vesting_contract.grant_pool;
    temp$3 = Pool_u64.shareholders_(grant_pool, $c);
    shareholders = temp$3;
    len = Vector.length_(shareholders, $c, [move_to_ts_2.AtomicTypeTag.Address]);
    i = (0, move_to_ts_1.u64)("0");
    while (($.copy(i)).lt($.copy(len))) {
        {
            shareholder = $.copy(Vector.borrow_(shareholders, $.copy(i), $c, [move_to_ts_2.AtomicTypeTag.Address]));
            shares = Pool_u64.shares_(grant_pool, $.copy(shareholder), $c);
            amount = Pool_u64.shares_to_amount_with_total_coins_(grant_pool, $.copy(shares), $.copy(total_distribution_amount), $c);
            share_of_coins = Coin.extract_(coins, $.copy(amount), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
            [temp$4, temp$5] = [vesting_contract, $.copy(shareholder)];
            recipient_address = get_beneficiary_(temp$4, temp$5, $c);
            Coin.deposit_($.copy(recipient_address), share_of_coins, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
            i = ($.copy(i)).add((0, move_to_ts_1.u64)("1"));
        }
    }
    if ((Coin.value_(coins, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])])).gt((0, move_to_ts_1.u64)("0"))) {
        Coin.deposit_($.copy(vesting_contract.withdrawal_address), coins, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    }
    else {
        Coin.destroy_zero_(coins, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    }
    Event.emit_event_(vesting_contract.distribute_events, new DistributeEvent({ admin: $.copy(vesting_contract.admin), vesting_contract_address: $.copy(contract_address), amount: $.copy(total_distribution_amount) }, new move_to_ts_2.SimpleStructTag(DistributeEvent)), $c, [new move_to_ts_2.SimpleStructTag(DistributeEvent)]);
    return;
}
exports.distribute_ = distribute_;
function buildPayload_distribute(contract_address, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "vesting", "distribute", typeParamStrings, [
        contract_address,
    ], isJSON);
}
exports.buildPayload_distribute = buildPayload_distribute;
function get_beneficiary_(contract, shareholder, $c) {
    let temp$1;
    if (Simple_map.contains_key_(contract.beneficiaries, shareholder, $c, [move_to_ts_2.AtomicTypeTag.Address, move_to_ts_2.AtomicTypeTag.Address])) {
        temp$1 = $.copy(Simple_map.borrow_(contract.beneficiaries, shareholder, $c, [move_to_ts_2.AtomicTypeTag.Address, move_to_ts_2.AtomicTypeTag.Address]));
    }
    else {
        temp$1 = $.copy(shareholder);
    }
    return temp$1;
}
exports.get_beneficiary_ = get_beneficiary_;
function get_role_holder_(contract_address, role, $c) {
    let roles;
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(VestingAccountManagement), $.copy(contract_address))) {
        throw $.abortCode(Error.not_found_($.copy(exports.EVESTING_ACCOUNT_HAS_NO_ROLES), $c));
    }
    roles = $c.borrow_global(new move_to_ts_2.SimpleStructTag(VestingAccountManagement), $.copy(contract_address)).roles;
    if (!Simple_map.contains_key_(roles, role, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), move_to_ts_2.AtomicTypeTag.Address])) {
        throw $.abortCode(Error.not_found_($.copy(exports.EROLE_NOT_FOUND), $c));
    }
    return $.copy(Simple_map.borrow_(roles, role, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), move_to_ts_2.AtomicTypeTag.Address]));
}
exports.get_role_holder_ = get_role_holder_;
function get_vesting_account_signer_(admin, contract_address, $c) {
    let temp$1, temp$2, vesting_contract;
    vesting_contract = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(VestingContract), $.copy(contract_address));
    [temp$1, temp$2] = [admin, vesting_contract];
    verify_admin_(temp$1, temp$2, $c);
    return get_vesting_account_signer_internal_(vesting_contract, $c);
}
exports.get_vesting_account_signer_ = get_vesting_account_signer_;
function get_vesting_account_signer_internal_(vesting_contract, $c) {
    return Account.create_signer_with_capability_(vesting_contract.signer_cap, $c);
}
exports.get_vesting_account_signer_internal_ = get_vesting_account_signer_internal_;
function operator_(vesting_contract_address, $c) {
    assert_vesting_contract_exists_($.copy(vesting_contract_address), $c);
    return $.copy($c.borrow_global(new move_to_ts_2.SimpleStructTag(VestingContract), $.copy(vesting_contract_address)).staking.operator);
}
exports.operator_ = operator_;
function operator_commission_percentage_(vesting_contract_address, $c) {
    assert_vesting_contract_exists_($.copy(vesting_contract_address), $c);
    return $.copy($c.borrow_global(new move_to_ts_2.SimpleStructTag(VestingContract), $.copy(vesting_contract_address)).staking.commission_percentage);
}
exports.operator_commission_percentage_ = operator_commission_percentage_;
function remaining_grant_(vesting_contract_address, $c) {
    assert_vesting_contract_exists_($.copy(vesting_contract_address), $c);
    return $.copy($c.borrow_global(new move_to_ts_2.SimpleStructTag(VestingContract), $.copy(vesting_contract_address)).remaining_grant);
}
exports.remaining_grant_ = remaining_grant_;
function reset_beneficiary_(account, contract_address, shareholder, $c) {
    let temp$1, temp$2, temp$3, addr, beneficiaries, vesting_contract;
    vesting_contract = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(VestingContract), $.copy(contract_address));
    addr = Signer.address_of_(account, $c);
    if ((($.copy(addr)).hex() === ($.copy(vesting_contract.admin)).hex())) {
        temp$1 = true;
    }
    else {
        temp$1 = (($.copy(addr)).hex() === (get_role_holder_($.copy(contract_address), String.utf8_($.copy(exports.ROLE_BENEFICIARY_RESETTER), $c), $c)).hex());
    }
    if (!temp$1) {
        throw $.abortCode(Error.permission_denied_($.copy(exports.EPERMISSION_DENIED), $c));
    }
    beneficiaries = vesting_contract.beneficiaries;
    [temp$2, temp$3] = [beneficiaries, shareholder];
    if (Simple_map.contains_key_(temp$2, temp$3, $c, [move_to_ts_2.AtomicTypeTag.Address, move_to_ts_2.AtomicTypeTag.Address])) {
        Simple_map.remove_(beneficiaries, shareholder, $c, [move_to_ts_2.AtomicTypeTag.Address, move_to_ts_2.AtomicTypeTag.Address]);
    }
    else {
    }
    return;
}
exports.reset_beneficiary_ = reset_beneficiary_;
function buildPayload_reset_beneficiary(contract_address, shareholder, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "vesting", "reset_beneficiary", typeParamStrings, [
        contract_address,
        shareholder,
    ], isJSON);
}
exports.buildPayload_reset_beneficiary = buildPayload_reset_beneficiary;
function reset_lockup_(admin, contract_address, $c) {
    let temp$1, temp$2, temp$3, contract_signer, vesting_contract;
    vesting_contract = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(VestingContract), $.copy(contract_address));
    [temp$1, temp$2] = [admin, vesting_contract];
    verify_admin_(temp$1, temp$2, $c);
    temp$3 = get_vesting_account_signer_internal_(vesting_contract, $c);
    contract_signer = temp$3;
    Staking_contract.reset_lockup_(contract_signer, $.copy(vesting_contract.staking.operator), $c);
    Event.emit_event_(vesting_contract.reset_lockup_events, new ResetLockupEvent({ admin: $.copy(vesting_contract.admin), vesting_contract_address: $.copy(contract_address), staking_pool_address: $.copy(vesting_contract.staking.pool_address), new_lockup_expiration_secs: Stake.get_lockup_secs_($.copy(vesting_contract.staking.pool_address), $c) }, new move_to_ts_2.SimpleStructTag(ResetLockupEvent)), $c, [new move_to_ts_2.SimpleStructTag(ResetLockupEvent)]);
    return;
}
exports.reset_lockup_ = reset_lockup_;
function buildPayload_reset_lockup(contract_address, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "vesting", "reset_lockup", typeParamStrings, [
        contract_address,
    ], isJSON);
}
exports.buildPayload_reset_lockup = buildPayload_reset_lockup;
function set_beneficiary_(admin, contract_address, shareholder, new_beneficiary, $c) {
    let temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, beneficiaries, beneficiary, old_beneficiary, vesting_contract;
    Aptos_account.assert_account_is_registered_for_apt_($.copy(new_beneficiary), $c);
    vesting_contract = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(VestingContract), $.copy(contract_address));
    [temp$1, temp$2] = [admin, vesting_contract];
    verify_admin_(temp$1, temp$2, $c);
    [temp$3, temp$4] = [vesting_contract, $.copy(shareholder)];
    old_beneficiary = get_beneficiary_(temp$3, temp$4, $c);
    beneficiaries = vesting_contract.beneficiaries;
    [temp$5, temp$6] = [beneficiaries, shareholder];
    if (Simple_map.contains_key_(temp$5, temp$6, $c, [move_to_ts_2.AtomicTypeTag.Address, move_to_ts_2.AtomicTypeTag.Address])) {
        beneficiary = Simple_map.borrow_mut_(beneficiaries, shareholder, $c, [move_to_ts_2.AtomicTypeTag.Address, move_to_ts_2.AtomicTypeTag.Address]);
        $.set(beneficiary, $.copy(new_beneficiary));
    }
    else {
        Simple_map.add_(beneficiaries, $.copy(shareholder), $.copy(new_beneficiary), $c, [move_to_ts_2.AtomicTypeTag.Address, move_to_ts_2.AtomicTypeTag.Address]);
    }
    Event.emit_event_(vesting_contract.set_beneficiary_events, new SetBeneficiaryEvent({ admin: $.copy(vesting_contract.admin), vesting_contract_address: $.copy(contract_address), shareholder: $.copy(shareholder), old_beneficiary: $.copy(old_beneficiary), new_beneficiary: $.copy(new_beneficiary) }, new move_to_ts_2.SimpleStructTag(SetBeneficiaryEvent)), $c, [new move_to_ts_2.SimpleStructTag(SetBeneficiaryEvent)]);
    return;
}
exports.set_beneficiary_ = set_beneficiary_;
function buildPayload_set_beneficiary(contract_address, shareholder, new_beneficiary, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "vesting", "set_beneficiary", typeParamStrings, [
        contract_address,
        shareholder,
        new_beneficiary,
    ], isJSON);
}
exports.buildPayload_set_beneficiary = buildPayload_set_beneficiary;
function set_beneficiary_resetter_(admin, contract_address, beneficiary_resetter, $c) {
    set_management_role_(admin, $.copy(contract_address), String.utf8_($.copy(exports.ROLE_BENEFICIARY_RESETTER), $c), $.copy(beneficiary_resetter), $c);
    return;
}
exports.set_beneficiary_resetter_ = set_beneficiary_resetter_;
function buildPayload_set_beneficiary_resetter(contract_address, beneficiary_resetter, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "vesting", "set_beneficiary_resetter", typeParamStrings, [
        contract_address,
        beneficiary_resetter,
    ], isJSON);
}
exports.buildPayload_set_beneficiary_resetter = buildPayload_set_beneficiary_resetter;
function set_management_role_(admin, contract_address, role, role_holder, $c) {
    let temp$1, temp$2, temp$3, temp$4, temp$5, contract_signer, roles, vesting_contract;
    vesting_contract = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(VestingContract), $.copy(contract_address));
    [temp$1, temp$2] = [admin, vesting_contract];
    verify_admin_(temp$1, temp$2, $c);
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(VestingAccountManagement), $.copy(contract_address))) {
        temp$3 = get_vesting_account_signer_internal_(vesting_contract, $c);
        contract_signer = temp$3;
        $c.move_to(new move_to_ts_2.SimpleStructTag(VestingAccountManagement), contract_signer, new VestingAccountManagement({ roles: Simple_map.create_($c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), move_to_ts_2.AtomicTypeTag.Address]) }, new move_to_ts_2.SimpleStructTag(VestingAccountManagement)));
    }
    else {
    }
    roles = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(VestingAccountManagement), $.copy(contract_address)).roles;
    [temp$4, temp$5] = [roles, role];
    if (Simple_map.contains_key_(temp$4, temp$5, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), move_to_ts_2.AtomicTypeTag.Address])) {
        $.set(Simple_map.borrow_mut_(roles, role, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), move_to_ts_2.AtomicTypeTag.Address]), $.copy(role_holder));
    }
    else {
        Simple_map.add_(roles, $.copy(role), $.copy(role_holder), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), move_to_ts_2.AtomicTypeTag.Address]);
    }
    return;
}
exports.set_management_role_ = set_management_role_;
function buildPayload_set_management_role(contract_address, role, role_holder, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "vesting", "set_management_role", typeParamStrings, [
        contract_address,
        role,
        role_holder,
    ], isJSON);
}
exports.buildPayload_set_management_role = buildPayload_set_management_role;
function stake_pool_address_(vesting_contract_address, $c) {
    assert_vesting_contract_exists_($.copy(vesting_contract_address), $c);
    return $.copy($c.borrow_global(new move_to_ts_2.SimpleStructTag(VestingContract), $.copy(vesting_contract_address)).staking.pool_address);
}
exports.stake_pool_address_ = stake_pool_address_;
function terminate_vesting_contract_(admin, contract_address, $c) {
    let temp$1, temp$2, temp$3, temp$4, active_stake, pending_active_stake, vesting_contract;
    assert_active_vesting_contract_($.copy(contract_address), $c);
    distribute_($.copy(contract_address), $c);
    vesting_contract = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(VestingContract), $.copy(contract_address));
    [temp$1, temp$2] = [admin, vesting_contract];
    verify_admin_(temp$1, temp$2, $c);
    [active_stake, , pending_active_stake,] = Stake.get_stake_($.copy(vesting_contract.staking.pool_address), $c);
    if (!($.copy(pending_active_stake)).eq(((0, move_to_ts_1.u64)("0")))) {
        throw $.abortCode(Error.invalid_state_($.copy(exports.EPENDING_STAKE_FOUND), $c));
    }
    vesting_contract.state = $.copy(exports.VESTING_POOL_TERMINATED);
    vesting_contract.remaining_grant = (0, move_to_ts_1.u64)("0");
    [temp$3, temp$4] = [vesting_contract, $.copy(active_stake)];
    unlock_stake_(temp$3, temp$4, $c);
    Event.emit_event_(vesting_contract.terminate_events, new TerminateEvent({ admin: $.copy(vesting_contract.admin), vesting_contract_address: $.copy(contract_address) }, new move_to_ts_2.SimpleStructTag(TerminateEvent)), $c, [new move_to_ts_2.SimpleStructTag(TerminateEvent)]);
    return;
}
exports.terminate_vesting_contract_ = terminate_vesting_contract_;
function buildPayload_terminate_vesting_contract(contract_address, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "vesting", "terminate_vesting_contract", typeParamStrings, [
        contract_address,
    ], isJSON);
}
exports.buildPayload_terminate_vesting_contract = buildPayload_terminate_vesting_contract;
function unlock_rewards_(contract_address, $c) {
    let temp$1, contract_signer, vesting_contract;
    assert_active_vesting_contract_($.copy(contract_address), $c);
    vesting_contract = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(VestingContract), $.copy(contract_address));
    temp$1 = get_vesting_account_signer_internal_(vesting_contract, $c);
    contract_signer = temp$1;
    Staking_contract.unlock_rewards_(contract_signer, $.copy(vesting_contract.staking.operator), $c);
    return;
}
exports.unlock_rewards_ = unlock_rewards_;
function buildPayload_unlock_rewards(contract_address, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "vesting", "unlock_rewards", typeParamStrings, [
        contract_address,
    ], isJSON);
}
exports.buildPayload_unlock_rewards = buildPayload_unlock_rewards;
function unlock_stake_(vesting_contract, amount, $c) {
    let temp$1, contract_signer;
    temp$1 = get_vesting_account_signer_internal_(vesting_contract, $c);
    contract_signer = temp$1;
    Staking_contract.unlock_stake_(contract_signer, $.copy(vesting_contract.staking.operator), $.copy(amount), $c);
    return;
}
exports.unlock_stake_ = unlock_stake_;
function update_operator_(admin, contract_address, new_operator, commission_percentage, $c) {
    let temp$1, temp$2, temp$3, contract_signer, old_operator, vesting_contract;
    vesting_contract = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(VestingContract), $.copy(contract_address));
    [temp$1, temp$2] = [admin, vesting_contract];
    verify_admin_(temp$1, temp$2, $c);
    temp$3 = get_vesting_account_signer_internal_(vesting_contract, $c);
    contract_signer = temp$3;
    old_operator = $.copy(vesting_contract.staking.operator);
    Staking_contract.switch_operator_(contract_signer, $.copy(old_operator), $.copy(new_operator), $.copy(commission_percentage), $c);
    vesting_contract.staking.operator = $.copy(new_operator);
    vesting_contract.staking.commission_percentage = $.copy(commission_percentage);
    Event.emit_event_(vesting_contract.update_operator_events, new UpdateOperatorEvent({ admin: $.copy(vesting_contract.admin), vesting_contract_address: $.copy(contract_address), staking_pool_address: $.copy(vesting_contract.staking.pool_address), old_operator: $.copy(old_operator), new_operator: $.copy(new_operator), commission_percentage: $.copy(commission_percentage) }, new move_to_ts_2.SimpleStructTag(UpdateOperatorEvent)), $c, [new move_to_ts_2.SimpleStructTag(UpdateOperatorEvent)]);
    return;
}
exports.update_operator_ = update_operator_;
function buildPayload_update_operator(contract_address, new_operator, commission_percentage, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "vesting", "update_operator", typeParamStrings, [
        contract_address,
        new_operator,
        commission_percentage,
    ], isJSON);
}
exports.buildPayload_update_operator = buildPayload_update_operator;
function update_operator_with_same_commission_(admin, contract_address, new_operator, $c) {
    let commission_percentage;
    commission_percentage = operator_commission_percentage_($.copy(contract_address), $c);
    update_operator_(admin, $.copy(contract_address), $.copy(new_operator), $.copy(commission_percentage), $c);
    return;
}
exports.update_operator_with_same_commission_ = update_operator_with_same_commission_;
function buildPayload_update_operator_with_same_commission(contract_address, new_operator, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "vesting", "update_operator_with_same_commission", typeParamStrings, [
        contract_address,
        new_operator,
    ], isJSON);
}
exports.buildPayload_update_operator_with_same_commission = buildPayload_update_operator_with_same_commission;
function update_voter_(admin, contract_address, new_voter, $c) {
    let temp$1, temp$2, temp$3, contract_signer, old_voter, vesting_contract;
    vesting_contract = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(VestingContract), $.copy(contract_address));
    [temp$1, temp$2] = [admin, vesting_contract];
    verify_admin_(temp$1, temp$2, $c);
    temp$3 = get_vesting_account_signer_internal_(vesting_contract, $c);
    contract_signer = temp$3;
    old_voter = $.copy(vesting_contract.staking.voter);
    Staking_contract.update_voter_(contract_signer, $.copy(vesting_contract.staking.operator), $.copy(new_voter), $c);
    vesting_contract.staking.voter = $.copy(new_voter);
    Event.emit_event_(vesting_contract.update_voter_events, new UpdateVoterEvent({ admin: $.copy(vesting_contract.admin), vesting_contract_address: $.copy(contract_address), staking_pool_address: $.copy(vesting_contract.staking.pool_address), old_voter: $.copy(old_voter), new_voter: $.copy(new_voter) }, new move_to_ts_2.SimpleStructTag(UpdateVoterEvent)), $c, [new move_to_ts_2.SimpleStructTag(UpdateVoterEvent)]);
    return;
}
exports.update_voter_ = update_voter_;
function buildPayload_update_voter(contract_address, new_voter, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "vesting", "update_voter", typeParamStrings, [
        contract_address,
        new_voter,
    ], isJSON);
}
exports.buildPayload_update_voter = buildPayload_update_voter;
function verify_admin_(admin, vesting_contract, $c) {
    if (!((Signer.address_of_(admin, $c)).hex() === ($.copy(vesting_contract.admin)).hex())) {
        throw $.abortCode(Error.unauthenticated_($.copy(exports.ENOT_ADMIN), $c));
    }
    return;
}
exports.verify_admin_ = verify_admin_;
function vest_(contract_address, $c) {
    let temp$1, temp$2, temp$3, last_completed_period, last_vested_period, next_period_to_vest, schedule, schedule_index, total_grant, vested_amount, vesting_contract, vesting_fraction, vesting_schedule;
    unlock_rewards_($.copy(contract_address), $c);
    vesting_contract = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(VestingContract), $.copy(contract_address));
    if (($.copy(vesting_contract.vesting_schedule.start_timestamp_secs)).gt(Timestamp.now_seconds_($c))) {
        return;
    }
    else {
    }
    vesting_schedule = vesting_contract.vesting_schedule;
    last_vested_period = $.copy(vesting_schedule.last_vested_period);
    next_period_to_vest = ($.copy(last_vested_period)).add((0, move_to_ts_1.u64)("1"));
    last_completed_period = ((Timestamp.now_seconds_($c)).sub($.copy(vesting_schedule.start_timestamp_secs))).div($.copy(vesting_schedule.period_duration));
    if (($.copy(last_completed_period)).lt($.copy(next_period_to_vest))) {
        return;
    }
    else {
    }
    schedule = vesting_schedule.schedule;
    schedule_index = ($.copy(next_period_to_vest)).sub((0, move_to_ts_1.u64)("1"));
    if (($.copy(schedule_index)).lt(Vector.length_(schedule, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "fixed_point32", "FixedPoint32", [])]))) {
        temp$1 = $.copy(Vector.borrow_(schedule, $.copy(schedule_index), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "fixed_point32", "FixedPoint32", [])]));
    }
    else {
        temp$1 = $.copy(Vector.borrow_(schedule, (Vector.length_(schedule, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "fixed_point32", "FixedPoint32", [])])).sub((0, move_to_ts_1.u64)("1")), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "fixed_point32", "FixedPoint32", [])]));
    }
    vesting_fraction = temp$1;
    total_grant = Pool_u64.total_coins_(vesting_contract.grant_pool, $c);
    vested_amount = Fixed_point32.multiply_u64_($.copy(total_grant), $.copy(vesting_fraction), $c);
    vested_amount = Math64.min_($.copy(vested_amount), $.copy(vesting_contract.remaining_grant), $c);
    vesting_contract.remaining_grant = ($.copy(vesting_contract.remaining_grant)).sub($.copy(vested_amount));
    vesting_schedule.last_vested_period = $.copy(next_period_to_vest);
    [temp$2, temp$3] = [vesting_contract, $.copy(vested_amount)];
    unlock_stake_(temp$2, temp$3, $c);
    Event.emit_event_(vesting_contract.vest_events, new VestEvent({ admin: $.copy(vesting_contract.admin), vesting_contract_address: $.copy(contract_address), staking_pool_address: $.copy(vesting_contract.staking.pool_address), period_vested: $.copy(next_period_to_vest), amount: $.copy(vested_amount) }, new move_to_ts_2.SimpleStructTag(VestEvent)), $c, [new move_to_ts_2.SimpleStructTag(VestEvent)]);
    return;
}
exports.vest_ = vest_;
function buildPayload_vest(contract_address, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "vesting", "vest", typeParamStrings, [
        contract_address,
    ], isJSON);
}
exports.buildPayload_vest = buildPayload_vest;
function vesting_contracts_(admin, $c) {
    let temp$1;
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(AdminStore), $.copy(admin))) {
        temp$1 = Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.Address]);
    }
    else {
        temp$1 = $.copy($c.borrow_global(new move_to_ts_2.SimpleStructTag(AdminStore), $.copy(admin)).vesting_contracts);
    }
    return temp$1;
}
exports.vesting_contracts_ = vesting_contracts_;
function vesting_start_secs_(vesting_contract_address, $c) {
    assert_vesting_contract_exists_($.copy(vesting_contract_address), $c);
    return $.copy($c.borrow_global(new move_to_ts_2.SimpleStructTag(VestingContract), $.copy(vesting_contract_address)).vesting_schedule.start_timestamp_secs);
}
exports.vesting_start_secs_ = vesting_start_secs_;
function voter_(vesting_contract_address, $c) {
    assert_vesting_contract_exists_($.copy(vesting_contract_address), $c);
    return $.copy($c.borrow_global(new move_to_ts_2.SimpleStructTag(VestingContract), $.copy(vesting_contract_address)).staking.voter);
}
exports.voter_ = voter_;
function withdraw_stake_(vesting_contract, contract_address, $c) {
    let temp$1, contract_signer, withdrawn_coins;
    Staking_contract.distribute_($.copy(contract_address), $.copy(vesting_contract.staking.operator), $c);
    withdrawn_coins = Coin.balance_($.copy(contract_address), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    temp$1 = get_vesting_account_signer_internal_(vesting_contract, $c);
    contract_signer = temp$1;
    return Coin.withdraw_(contract_signer, $.copy(withdrawn_coins), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
}
exports.withdraw_stake_ = withdraw_stake_;
function loadParsers(repo) {
    repo.addParser("0x1::vesting::AdminStore", AdminStore.AdminStoreParser);
    repo.addParser("0x1::vesting::AdminWithdrawEvent", AdminWithdrawEvent.AdminWithdrawEventParser);
    repo.addParser("0x1::vesting::CreateVestingContractEvent", CreateVestingContractEvent.CreateVestingContractEventParser);
    repo.addParser("0x1::vesting::DistributeEvent", DistributeEvent.DistributeEventParser);
    repo.addParser("0x1::vesting::ResetLockupEvent", ResetLockupEvent.ResetLockupEventParser);
    repo.addParser("0x1::vesting::SetBeneficiaryEvent", SetBeneficiaryEvent.SetBeneficiaryEventParser);
    repo.addParser("0x1::vesting::StakingInfo", StakingInfo.StakingInfoParser);
    repo.addParser("0x1::vesting::TerminateEvent", TerminateEvent.TerminateEventParser);
    repo.addParser("0x1::vesting::UnlockRewardsEvent", UnlockRewardsEvent.UnlockRewardsEventParser);
    repo.addParser("0x1::vesting::UpdateOperatorEvent", UpdateOperatorEvent.UpdateOperatorEventParser);
    repo.addParser("0x1::vesting::UpdateVoterEvent", UpdateVoterEvent.UpdateVoterEventParser);
    repo.addParser("0x1::vesting::VestEvent", VestEvent.VestEventParser);
    repo.addParser("0x1::vesting::VestingAccountManagement", VestingAccountManagement.VestingAccountManagementParser);
    repo.addParser("0x1::vesting::VestingContract", VestingContract.VestingContractParser);
    repo.addParser("0x1::vesting::VestingSchedule", VestingSchedule.VestingScheduleParser);
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
    get AdminStore() { return AdminStore; }
    loadAdminStore(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield AdminStore.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get AdminWithdrawEvent() { return AdminWithdrawEvent; }
    get CreateVestingContractEvent() { return CreateVestingContractEvent; }
    get DistributeEvent() { return DistributeEvent; }
    get ResetLockupEvent() { return ResetLockupEvent; }
    get SetBeneficiaryEvent() { return SetBeneficiaryEvent; }
    get StakingInfo() { return StakingInfo; }
    get TerminateEvent() { return TerminateEvent; }
    get UnlockRewardsEvent() { return UnlockRewardsEvent; }
    get UpdateOperatorEvent() { return UpdateOperatorEvent; }
    get UpdateVoterEvent() { return UpdateVoterEvent; }
    get VestEvent() { return VestEvent; }
    get VestingAccountManagement() { return VestingAccountManagement; }
    loadVestingAccountManagement(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield VestingAccountManagement.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get VestingContract() { return VestingContract; }
    loadVestingContract(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield VestingContract.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get VestingSchedule() { return VestingSchedule; }
    payload_admin_withdraw(contract_address, isJSON = false) {
        return buildPayload_admin_withdraw(contract_address, isJSON);
    }
    admin_withdraw(_account, contract_address, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_admin_withdraw(contract_address, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_distribute(contract_address, isJSON = false) {
        return buildPayload_distribute(contract_address, isJSON);
    }
    distribute(_account, contract_address, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_distribute(contract_address, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_reset_beneficiary(contract_address, shareholder, isJSON = false) {
        return buildPayload_reset_beneficiary(contract_address, shareholder, isJSON);
    }
    reset_beneficiary(_account, contract_address, shareholder, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_reset_beneficiary(contract_address, shareholder, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_reset_lockup(contract_address, isJSON = false) {
        return buildPayload_reset_lockup(contract_address, isJSON);
    }
    reset_lockup(_account, contract_address, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_reset_lockup(contract_address, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_set_beneficiary(contract_address, shareholder, new_beneficiary, isJSON = false) {
        return buildPayload_set_beneficiary(contract_address, shareholder, new_beneficiary, isJSON);
    }
    set_beneficiary(_account, contract_address, shareholder, new_beneficiary, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_set_beneficiary(contract_address, shareholder, new_beneficiary, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_set_beneficiary_resetter(contract_address, beneficiary_resetter, isJSON = false) {
        return buildPayload_set_beneficiary_resetter(contract_address, beneficiary_resetter, isJSON);
    }
    set_beneficiary_resetter(_account, contract_address, beneficiary_resetter, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_set_beneficiary_resetter(contract_address, beneficiary_resetter, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_set_management_role(contract_address, role, role_holder, isJSON = false) {
        return buildPayload_set_management_role(contract_address, role, role_holder, isJSON);
    }
    set_management_role(_account, contract_address, role, role_holder, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_set_management_role(contract_address, role, role_holder, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_terminate_vesting_contract(contract_address, isJSON = false) {
        return buildPayload_terminate_vesting_contract(contract_address, isJSON);
    }
    terminate_vesting_contract(_account, contract_address, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_terminate_vesting_contract(contract_address, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_unlock_rewards(contract_address, isJSON = false) {
        return buildPayload_unlock_rewards(contract_address, isJSON);
    }
    unlock_rewards(_account, contract_address, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_unlock_rewards(contract_address, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_update_operator(contract_address, new_operator, commission_percentage, isJSON = false) {
        return buildPayload_update_operator(contract_address, new_operator, commission_percentage, isJSON);
    }
    update_operator(_account, contract_address, new_operator, commission_percentage, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_update_operator(contract_address, new_operator, commission_percentage, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_update_operator_with_same_commission(contract_address, new_operator, isJSON = false) {
        return buildPayload_update_operator_with_same_commission(contract_address, new_operator, isJSON);
    }
    update_operator_with_same_commission(_account, contract_address, new_operator, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_update_operator_with_same_commission(contract_address, new_operator, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_update_voter(contract_address, new_voter, isJSON = false) {
        return buildPayload_update_voter(contract_address, new_voter, isJSON);
    }
    update_voter(_account, contract_address, new_voter, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_update_voter(contract_address, new_voter, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_vest(contract_address, isJSON = false) {
        return buildPayload_vest(contract_address, isJSON);
    }
    vest(_account, contract_address, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_vest(contract_address, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
}
exports.App = App;
//# sourceMappingURL=vesting.js.map