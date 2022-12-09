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
exports.App = exports.loadParsers = exports.set_genesis_end_ = exports.initialize_validator_ = exports.initialize_for_verification_ = exports.initialize_core_resources_and_aptos_coin_ = exports.initialize_aptos_coin_ = exports.initialize_ = exports.create_signer_ = exports.create_initialize_validators_with_commission_ = exports.create_initialize_validators_ = exports.create_initialize_validator_ = exports.create_employee_validators_ = exports.create_accounts_ = exports.create_account_ = exports.ValidatorConfigurationWithCommission = exports.ValidatorConfiguration = exports.EmployeeAccountMap = exports.AccountMap = exports.EDUPLICATE_ACCOUNT = exports.EACCOUNT_DOES_NOT_EXIST = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Account = __importStar(require("./account"));
const Aggregator_factory = __importStar(require("./aggregator_factory"));
const Aptos_coin = __importStar(require("./aptos_coin"));
const Aptos_governance = __importStar(require("./aptos_governance"));
const Block = __importStar(require("./block"));
const Chain_id = __importStar(require("./chain_id"));
const Chain_status = __importStar(require("./chain_status"));
const Coin = __importStar(require("./coin"));
const Consensus_config = __importStar(require("./consensus_config"));
const Error = __importStar(require("./error"));
const Fixed_point32 = __importStar(require("./fixed_point32"));
const Gas_schedule = __importStar(require("./gas_schedule"));
const Reconfiguration = __importStar(require("./reconfiguration"));
const Simple_map = __importStar(require("./simple_map"));
const Stake = __importStar(require("./stake"));
const Staking_config = __importStar(require("./staking_config"));
const Staking_contract = __importStar(require("./staking_contract"));
const State_storage = __importStar(require("./state_storage"));
const Storage_gas = __importStar(require("./storage_gas"));
const Timestamp = __importStar(require("./timestamp"));
const Transaction_fee = __importStar(require("./transaction_fee"));
const Transaction_validation = __importStar(require("./transaction_validation"));
const Vector = __importStar(require("./vector"));
const Version = __importStar(require("./version"));
const Vesting = __importStar(require("./vesting"));
exports.packageName = "AptosFramework";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "genesis";
exports.EACCOUNT_DOES_NOT_EXIST = (0, move_to_ts_1.u64)("2");
exports.EDUPLICATE_ACCOUNT = (0, move_to_ts_1.u64)("1");
class AccountMap {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.account_address = proto['account_address'];
        this.balance = proto['balance'];
    }
    static AccountMapParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, AccountMap);
        return new AccountMap(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "AccountMap", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.AccountMap = AccountMap;
AccountMap.moduleAddress = exports.moduleAddress;
AccountMap.moduleName = exports.moduleName;
AccountMap.structName = "AccountMap";
AccountMap.typeParameters = [];
AccountMap.fields = [
    { name: "account_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "balance", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class EmployeeAccountMap {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.accounts = proto['accounts'];
        this.validator = proto['validator'];
        this.vesting_schedule_numerator = proto['vesting_schedule_numerator'];
        this.vesting_schedule_denominator = proto['vesting_schedule_denominator'];
        this.beneficiary_resetter = proto['beneficiary_resetter'];
    }
    static EmployeeAccountMapParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, EmployeeAccountMap);
        return new EmployeeAccountMap(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "EmployeeAccountMap", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.validator.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.EmployeeAccountMap = EmployeeAccountMap;
EmployeeAccountMap.moduleAddress = exports.moduleAddress;
EmployeeAccountMap.moduleName = exports.moduleName;
EmployeeAccountMap.structName = "EmployeeAccountMap";
EmployeeAccountMap.typeParameters = [];
EmployeeAccountMap.fields = [
    { name: "accounts", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.Address) },
    { name: "validator", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "genesis", "ValidatorConfigurationWithCommission", []) },
    { name: "vesting_schedule_numerator", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U64) },
    { name: "vesting_schedule_denominator", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "beneficiary_resetter", typeTag: move_to_ts_2.AtomicTypeTag.Address }
];
class ValidatorConfiguration {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.owner_address = proto['owner_address'];
        this.operator_address = proto['operator_address'];
        this.voter_address = proto['voter_address'];
        this.stake_amount = proto['stake_amount'];
        this.consensus_pubkey = proto['consensus_pubkey'];
        this.proof_of_possession = proto['proof_of_possession'];
        this.network_addresses = proto['network_addresses'];
        this.full_node_network_addresses = proto['full_node_network_addresses'];
    }
    static ValidatorConfigurationParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, ValidatorConfiguration);
        return new ValidatorConfiguration(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "ValidatorConfiguration", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.ValidatorConfiguration = ValidatorConfiguration;
ValidatorConfiguration.moduleAddress = exports.moduleAddress;
ValidatorConfiguration.moduleName = exports.moduleName;
ValidatorConfiguration.structName = "ValidatorConfiguration";
ValidatorConfiguration.typeParameters = [];
ValidatorConfiguration.fields = [
    { name: "owner_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "operator_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "voter_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "stake_amount", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "consensus_pubkey", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) },
    { name: "proof_of_possession", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) },
    { name: "network_addresses", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) },
    { name: "full_node_network_addresses", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) }
];
class ValidatorConfigurationWithCommission {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.validator_config = proto['validator_config'];
        this.commission_percentage = proto['commission_percentage'];
        this.join_during_genesis = proto['join_during_genesis'];
    }
    static ValidatorConfigurationWithCommissionParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, ValidatorConfigurationWithCommission);
        return new ValidatorConfigurationWithCommission(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "ValidatorConfigurationWithCommission", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.validator_config.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.ValidatorConfigurationWithCommission = ValidatorConfigurationWithCommission;
ValidatorConfigurationWithCommission.moduleAddress = exports.moduleAddress;
ValidatorConfigurationWithCommission.moduleName = exports.moduleName;
ValidatorConfigurationWithCommission.structName = "ValidatorConfigurationWithCommission";
ValidatorConfigurationWithCommission.typeParameters = [];
ValidatorConfigurationWithCommission.fields = [
    { name: "validator_config", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "genesis", "ValidatorConfiguration", []) },
    { name: "commission_percentage", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "join_during_genesis", typeTag: move_to_ts_2.AtomicTypeTag.Bool }
];
function create_account_(aptos_framework, account_address, balance, $c) {
    let temp$1, account;
    if (Account.exists_at_($.copy(account_address), $c)) {
        temp$1 = create_signer_($.copy(account_address), $c);
    }
    else {
        account = Account.create_account_($.copy(account_address), $c);
        Coin.register_(account, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
        Aptos_coin.mint_(aptos_framework, $.copy(account_address), $.copy(balance), $c);
        temp$1 = account;
    }
    return temp$1;
}
exports.create_account_ = create_account_;
function create_accounts_(aptos_framework, accounts, $c) {
    let account_map, i, num_accounts, unique_accounts;
    i = (0, move_to_ts_1.u64)("0");
    num_accounts = Vector.length_(accounts, $c, [new move_to_ts_2.SimpleStructTag(AccountMap)]);
    unique_accounts = Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.Address]);
    while (($.copy(i)).lt($.copy(num_accounts))) {
        {
            account_map = Vector.borrow_(accounts, $.copy(i), $c, [new move_to_ts_2.SimpleStructTag(AccountMap)]);
            if (!!Vector.contains_(unique_accounts, account_map.account_address, $c, [move_to_ts_2.AtomicTypeTag.Address])) {
                throw $.abortCode(Error.already_exists_($.copy(exports.EDUPLICATE_ACCOUNT), $c));
            }
            Vector.push_back_(unique_accounts, $.copy(account_map.account_address), $c, [move_to_ts_2.AtomicTypeTag.Address]);
            create_account_(aptos_framework, $.copy(account_map.account_address), $.copy(account_map.balance), $c);
            i = ($.copy(i)).add((0, move_to_ts_1.u64)("1"));
        }
    }
    return;
}
exports.create_accounts_ = create_accounts_;
function create_employee_validators_(employee_vesting_start, employee_vesting_period_duration, employees, $c) {
    let temp$2, account, admin, admin_signer, buy_ins, coins, contract_address, employee, employee_group, event, i, j, j__1, num_employee_groups, num_employees_in_group, num_vesting_events, numerator, pool_address, schedule, total, unique_accounts, validator, vesting_schedule;
    i = (0, move_to_ts_1.u64)("0");
    num_employee_groups = Vector.length_(employees, $c, [new move_to_ts_2.SimpleStructTag(EmployeeAccountMap)]);
    unique_accounts = Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.Address]);
    while (($.copy(i)).lt($.copy(num_employee_groups))) {
        {
            j = (0, move_to_ts_1.u64)("0");
            employee_group = Vector.borrow_(employees, $.copy(i), $c, [new move_to_ts_2.SimpleStructTag(EmployeeAccountMap)]);
            num_employees_in_group = Vector.length_(employee_group.accounts, $c, [move_to_ts_2.AtomicTypeTag.Address]);
            buy_ins = Simple_map.create_($c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])])]);
            while (($.copy(j)).lt($.copy(num_employees_in_group))) {
                {
                    account = Vector.borrow_(employee_group.accounts, $.copy(j), $c, [move_to_ts_2.AtomicTypeTag.Address]);
                    if (!!Vector.contains_(unique_accounts, account, $c, [move_to_ts_2.AtomicTypeTag.Address])) {
                        throw $.abortCode(Error.already_exists_($.copy(exports.EDUPLICATE_ACCOUNT), $c));
                    }
                    Vector.push_back_(unique_accounts, $.copy(account), $c, [move_to_ts_2.AtomicTypeTag.Address]);
                    employee = create_signer_($.copy(account), $c);
                    total = Coin.balance_($.copy(account), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
                    coins = Coin.withdraw_(employee, $.copy(total), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
                    Simple_map.add_(buy_ins, $.copy(account), coins, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])])]);
                    j = ($.copy(j)).add((0, move_to_ts_1.u64)("1"));
                }
            }
            j__1 = (0, move_to_ts_1.u64)("0");
            num_vesting_events = Vector.length_(employee_group.vesting_schedule_numerator, $c, [move_to_ts_2.AtomicTypeTag.U64]);
            schedule = Vector.empty_($c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "fixed_point32", "FixedPoint32", [])]);
            while (($.copy(j__1)).lt($.copy(num_vesting_events))) {
                {
                    numerator = Vector.borrow_(employee_group.vesting_schedule_numerator, $.copy(j__1), $c, [move_to_ts_2.AtomicTypeTag.U64]);
                    event = Fixed_point32.create_from_rational_($.copy(numerator), $.copy(employee_group.vesting_schedule_denominator), $c);
                    Vector.push_back_(schedule, $.copy(event), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "fixed_point32", "FixedPoint32", [])]);
                    j__1 = ($.copy(j__1)).add((0, move_to_ts_1.u64)("1"));
                }
            }
            vesting_schedule = Vesting.create_vesting_schedule_($.copy(schedule), $.copy(employee_vesting_start), $.copy(employee_vesting_period_duration), $c);
            admin = $.copy(employee_group.validator.validator_config.owner_address);
            temp$2 = create_signer_($.copy(admin), $c);
            admin_signer = temp$2;
            contract_address = Vesting.create_vesting_contract_(admin_signer, employee_group.accounts, buy_ins, $.copy(vesting_schedule), $.copy(admin), $.copy(employee_group.validator.validator_config.operator_address), $.copy(employee_group.validator.validator_config.voter_address), $.copy(employee_group.validator.commission_percentage), [], $c);
            pool_address = Vesting.stake_pool_address_($.copy(contract_address), $c);
            if ((($.copy(employee_group.beneficiary_resetter)).hex() !== (new aptos_1.HexString("0x0")).hex())) {
                Vesting.set_beneficiary_resetter_(admin_signer, $.copy(contract_address), $.copy(employee_group.beneficiary_resetter), $c);
            }
            else {
            }
            validator = employee_group.validator.validator_config;
            if (!Account.exists_at_($.copy(validator.owner_address), $c)) {
                throw $.abortCode(Error.not_found_($.copy(exports.EACCOUNT_DOES_NOT_EXIST), $c));
            }
            if (!Account.exists_at_($.copy(validator.operator_address), $c)) {
                throw $.abortCode(Error.not_found_($.copy(exports.EACCOUNT_DOES_NOT_EXIST), $c));
            }
            if (!Account.exists_at_($.copy(validator.voter_address), $c)) {
                throw $.abortCode(Error.not_found_($.copy(exports.EACCOUNT_DOES_NOT_EXIST), $c));
            }
            if ($.copy(employee_group.validator.join_during_genesis)) {
                initialize_validator_($.copy(pool_address), validator, $c);
            }
            else {
            }
            i = ($.copy(i)).add((0, move_to_ts_1.u64)("1"));
        }
    }
    return;
}
exports.create_employee_validators_ = create_employee_validators_;
function create_initialize_validator_(aptos_framework, commission_config, use_staking_contract, $c) {
    let temp$1, temp$2, owner, pool_address, validator;
    validator = commission_config.validator_config;
    temp$1 = create_account_(aptos_framework, $.copy(validator.owner_address), $.copy(validator.stake_amount), $c);
    owner = temp$1;
    create_account_(aptos_framework, $.copy(validator.operator_address), (0, move_to_ts_1.u64)("0"), $c);
    create_account_(aptos_framework, $.copy(validator.voter_address), (0, move_to_ts_1.u64)("0"), $c);
    if (use_staking_contract) {
        Staking_contract.create_staking_contract_(owner, $.copy(validator.operator_address), $.copy(validator.voter_address), $.copy(validator.stake_amount), $.copy(commission_config.commission_percentage), [], $c);
        temp$2 = Staking_contract.stake_pool_address_($.copy(validator.owner_address), $.copy(validator.operator_address), $c);
    }
    else {
        Stake.initialize_stake_owner_(owner, $.copy(validator.stake_amount), $.copy(validator.operator_address), $.copy(validator.voter_address), $c);
        temp$2 = $.copy(validator.owner_address);
    }
    pool_address = temp$2;
    if ($.copy(commission_config.join_during_genesis)) {
        initialize_validator_($.copy(pool_address), validator, $c);
    }
    else {
    }
    return;
}
exports.create_initialize_validator_ = create_initialize_validator_;
function create_initialize_validators_(aptos_framework, validators, $c) {
    let i, num_validators, validator_with_commission, validators_with_commission;
    i = (0, move_to_ts_1.u64)("0");
    num_validators = Vector.length_(validators, $c, [new move_to_ts_2.SimpleStructTag(ValidatorConfiguration)]);
    validators_with_commission = Vector.empty_($c, [new move_to_ts_2.SimpleStructTag(ValidatorConfigurationWithCommission)]);
    while (($.copy(i)).lt($.copy(num_validators))) {
        {
            validator_with_commission = new ValidatorConfigurationWithCommission({ validator_config: Vector.pop_back_(validators, $c, [new move_to_ts_2.SimpleStructTag(ValidatorConfiguration)]), commission_percentage: (0, move_to_ts_1.u64)("0"), join_during_genesis: true }, new move_to_ts_2.SimpleStructTag(ValidatorConfigurationWithCommission));
            Vector.push_back_(validators_with_commission, $.copy(validator_with_commission), $c, [new move_to_ts_2.SimpleStructTag(ValidatorConfigurationWithCommission)]);
            i = ($.copy(i)).add((0, move_to_ts_1.u64)("1"));
        }
    }
    create_initialize_validators_with_commission_(aptos_framework, false, $.copy(validators_with_commission), $c);
    return;
}
exports.create_initialize_validators_ = create_initialize_validators_;
function create_initialize_validators_with_commission_(aptos_framework, use_staking_contract, validators, $c) {
    let i, num_validators, validator;
    i = (0, move_to_ts_1.u64)("0");
    num_validators = Vector.length_(validators, $c, [new move_to_ts_2.SimpleStructTag(ValidatorConfigurationWithCommission)]);
    while (($.copy(i)).lt($.copy(num_validators))) {
        {
            validator = Vector.borrow_(validators, $.copy(i), $c, [new move_to_ts_2.SimpleStructTag(ValidatorConfigurationWithCommission)]);
            create_initialize_validator_(aptos_framework, validator, use_staking_contract, $c);
            i = ($.copy(i)).add((0, move_to_ts_1.u64)("1"));
        }
    }
    Aptos_coin.destroy_mint_cap_(aptos_framework, $c);
    Stake.on_new_epoch_($c);
    return;
}
exports.create_initialize_validators_with_commission_ = create_initialize_validators_with_commission_;
function create_signer_(addr, $c) {
    return $.aptos_framework_genesis_create_signer(addr, $c);
}
exports.create_signer_ = create_signer_;
function initialize_(gas_schedule, chain_id, initial_version, consensus_config, epoch_interval_microsecs, minimum_stake, maximum_stake, recurring_lockup_duration_secs, allow_validator_set_change, rewards_rate, rewards_rate_denominator, voting_power_increase_limit, $c) {
    let address, aptos_account, aptos_framework_account, aptos_framework_signer_cap, framework_reserved_addresses, framework_signer_cap;
    [aptos_framework_account, aptos_framework_signer_cap] = Account.create_framework_reserved_account_(new aptos_1.HexString("0x1"), $c);
    Account.initialize_(aptos_framework_account, $c);
    Transaction_validation.initialize_(aptos_framework_account, [(0, move_to_ts_1.u8)("115"), (0, move_to_ts_1.u8)("99"), (0, move_to_ts_1.u8)("114"), (0, move_to_ts_1.u8)("105"), (0, move_to_ts_1.u8)("112"), (0, move_to_ts_1.u8)("116"), (0, move_to_ts_1.u8)("95"), (0, move_to_ts_1.u8)("112"), (0, move_to_ts_1.u8)("114"), (0, move_to_ts_1.u8)("111"), (0, move_to_ts_1.u8)("108"), (0, move_to_ts_1.u8)("111"), (0, move_to_ts_1.u8)("103"), (0, move_to_ts_1.u8)("117"), (0, move_to_ts_1.u8)("101")], [(0, move_to_ts_1.u8)("109"), (0, move_to_ts_1.u8)("111"), (0, move_to_ts_1.u8)("100"), (0, move_to_ts_1.u8)("117"), (0, move_to_ts_1.u8)("108"), (0, move_to_ts_1.u8)("101"), (0, move_to_ts_1.u8)("95"), (0, move_to_ts_1.u8)("112"), (0, move_to_ts_1.u8)("114"), (0, move_to_ts_1.u8)("111"), (0, move_to_ts_1.u8)("108"), (0, move_to_ts_1.u8)("111"), (0, move_to_ts_1.u8)("103"), (0, move_to_ts_1.u8)("117"), (0, move_to_ts_1.u8)("101")], [(0, move_to_ts_1.u8)("109"), (0, move_to_ts_1.u8)("117"), (0, move_to_ts_1.u8)("108"), (0, move_to_ts_1.u8)("116"), (0, move_to_ts_1.u8)("105"), (0, move_to_ts_1.u8)("95"), (0, move_to_ts_1.u8)("97"), (0, move_to_ts_1.u8)("103"), (0, move_to_ts_1.u8)("101"), (0, move_to_ts_1.u8)("110"), (0, move_to_ts_1.u8)("116"), (0, move_to_ts_1.u8)("95"), (0, move_to_ts_1.u8)("115"), (0, move_to_ts_1.u8)("99"), (0, move_to_ts_1.u8)("114"), (0, move_to_ts_1.u8)("105"), (0, move_to_ts_1.u8)("112"), (0, move_to_ts_1.u8)("116"), (0, move_to_ts_1.u8)("95"), (0, move_to_ts_1.u8)("112"), (0, move_to_ts_1.u8)("114"), (0, move_to_ts_1.u8)("111"), (0, move_to_ts_1.u8)("108"), (0, move_to_ts_1.u8)("111"), (0, move_to_ts_1.u8)("103"), (0, move_to_ts_1.u8)("117"), (0, move_to_ts_1.u8)("101")], [(0, move_to_ts_1.u8)("101"), (0, move_to_ts_1.u8)("112"), (0, move_to_ts_1.u8)("105"), (0, move_to_ts_1.u8)("108"), (0, move_to_ts_1.u8)("111"), (0, move_to_ts_1.u8)("103"), (0, move_to_ts_1.u8)("117"), (0, move_to_ts_1.u8)("101")], $c);
    Aptos_governance.store_signer_cap_(aptos_framework_account, new aptos_1.HexString("0x1"), aptos_framework_signer_cap, $c);
    framework_reserved_addresses = [new aptos_1.HexString("0x2"), new aptos_1.HexString("0x3"), new aptos_1.HexString("0x4"), new aptos_1.HexString("0x5"), new aptos_1.HexString("0x6"), new aptos_1.HexString("0x7"), new aptos_1.HexString("0x8"), new aptos_1.HexString("0x9"), new aptos_1.HexString("0xa")];
    while (!Vector.is_empty_(framework_reserved_addresses, $c, [move_to_ts_2.AtomicTypeTag.Address])) {
        {
            address = Vector.pop_back_(framework_reserved_addresses, $c, [move_to_ts_2.AtomicTypeTag.Address]);
            [aptos_account, framework_signer_cap] = Account.create_framework_reserved_account_($.copy(address), $c);
            Aptos_governance.store_signer_cap_(aptos_account, $.copy(address), framework_signer_cap, $c);
        }
    }
    Consensus_config.initialize_(aptos_framework_account, $.copy(consensus_config), $c);
    Version.initialize_(aptos_framework_account, $.copy(initial_version), $c);
    Stake.initialize_(aptos_framework_account, $c);
    Staking_config.initialize_(aptos_framework_account, $.copy(minimum_stake), $.copy(maximum_stake), $.copy(recurring_lockup_duration_secs), allow_validator_set_change, $.copy(rewards_rate), $.copy(rewards_rate_denominator), $.copy(voting_power_increase_limit), $c);
    Storage_gas.initialize_(aptos_framework_account, $c);
    Gas_schedule.initialize_(aptos_framework_account, $.copy(gas_schedule), $c);
    Aggregator_factory.initialize_aggregator_factory_(aptos_framework_account, $c);
    Coin.initialize_supply_config_(aptos_framework_account, $c);
    Chain_id.initialize_(aptos_framework_account, $.copy(chain_id), $c);
    Reconfiguration.initialize_(aptos_framework_account, $c);
    Block.initialize_(aptos_framework_account, $.copy(epoch_interval_microsecs), $c);
    State_storage.initialize_(aptos_framework_account, $c);
    Timestamp.set_time_has_started_(aptos_framework_account, $c);
    return;
}
exports.initialize_ = initialize_;
function initialize_aptos_coin_(aptos_framework, $c) {
    let burn_cap, mint_cap;
    [burn_cap, mint_cap] = Aptos_coin.initialize_(aptos_framework, $c);
    Stake.store_aptos_coin_mint_cap_(aptos_framework, $.copy(mint_cap), $c);
    Transaction_fee.store_aptos_coin_burn_cap_(aptos_framework, $.copy(burn_cap), $c);
    return;
}
exports.initialize_aptos_coin_ = initialize_aptos_coin_;
function initialize_core_resources_and_aptos_coin_(aptos_framework, core_resources_auth_key, $c) {
    let burn_cap, core_resources, mint_cap;
    [burn_cap, mint_cap] = Aptos_coin.initialize_(aptos_framework, $c);
    Stake.store_aptos_coin_mint_cap_(aptos_framework, $.copy(mint_cap), $c);
    Transaction_fee.store_aptos_coin_burn_cap_(aptos_framework, $.copy(burn_cap), $c);
    core_resources = Account.create_account_(new aptos_1.HexString("0xa550c18"), $c);
    Account.rotate_authentication_key_internal_(core_resources, $.copy(core_resources_auth_key), $c);
    Aptos_coin.configure_accounts_for_test_(aptos_framework, core_resources, $.copy(mint_cap), $c);
    return;
}
exports.initialize_core_resources_and_aptos_coin_ = initialize_core_resources_and_aptos_coin_;
function initialize_for_verification_(gas_schedule, chain_id, initial_version, consensus_config, epoch_interval_microsecs, minimum_stake, maximum_stake, recurring_lockup_duration_secs, allow_validator_set_change, rewards_rate, rewards_rate_denominator, voting_power_increase_limit, aptos_framework, validators, min_voting_threshold, required_proposer_stake, voting_duration_secs, $c) {
    initialize_($.copy(gas_schedule), $.copy(chain_id), $.copy(initial_version), $.copy(consensus_config), $.copy(epoch_interval_microsecs), $.copy(minimum_stake), $.copy(maximum_stake), $.copy(recurring_lockup_duration_secs), allow_validator_set_change, $.copy(rewards_rate), $.copy(rewards_rate_denominator), $.copy(voting_power_increase_limit), $c);
    initialize_aptos_coin_(aptos_framework, $c);
    Aptos_governance.initialize_for_verification_(aptos_framework, $.copy(min_voting_threshold), $.copy(required_proposer_stake), $.copy(voting_duration_secs), $c);
    create_initialize_validators_(aptos_framework, $.copy(validators), $c);
    set_genesis_end_(aptos_framework, $c);
    return;
}
exports.initialize_for_verification_ = initialize_for_verification_;
function initialize_validator_(pool_address, validator, $c) {
    let temp$1, operator;
    temp$1 = create_signer_($.copy(validator.operator_address), $c);
    operator = temp$1;
    Stake.rotate_consensus_key_(operator, $.copy(pool_address), $.copy(validator.consensus_pubkey), $.copy(validator.proof_of_possession), $c);
    Stake.update_network_and_fullnode_addresses_(operator, $.copy(pool_address), $.copy(validator.network_addresses), $.copy(validator.full_node_network_addresses), $c);
    Stake.join_validator_set_internal_(operator, $.copy(pool_address), $c);
    return;
}
exports.initialize_validator_ = initialize_validator_;
function set_genesis_end_(aptos_framework, $c) {
    Chain_status.set_genesis_end_(aptos_framework, $c);
    return;
}
exports.set_genesis_end_ = set_genesis_end_;
function loadParsers(repo) {
    repo.addParser("0x1::genesis::AccountMap", AccountMap.AccountMapParser);
    repo.addParser("0x1::genesis::EmployeeAccountMap", EmployeeAccountMap.EmployeeAccountMapParser);
    repo.addParser("0x1::genesis::ValidatorConfiguration", ValidatorConfiguration.ValidatorConfigurationParser);
    repo.addParser("0x1::genesis::ValidatorConfigurationWithCommission", ValidatorConfigurationWithCommission.ValidatorConfigurationWithCommissionParser);
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
    get AccountMap() { return AccountMap; }
    get EmployeeAccountMap() { return EmployeeAccountMap; }
    get ValidatorConfiguration() { return ValidatorConfiguration; }
    get ValidatorConfigurationWithCommission() { return ValidatorConfigurationWithCommission; }
}
exports.App = App;
//# sourceMappingURL=genesis.js.map