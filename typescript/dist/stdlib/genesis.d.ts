import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U8, U64, U128 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
export declare const packageName = "AptosFramework";
export declare const moduleAddress: HexString;
export declare const moduleName = "genesis";
export declare const EACCOUNT_DOES_NOT_EXIST: U64;
export declare const EDUPLICATE_ACCOUNT: U64;
export declare class AccountMap {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    account_address: HexString;
    balance: U64;
    constructor(proto: any, typeTag: TypeTag);
    static AccountMapParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): AccountMap;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class EmployeeAccountMap {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    accounts: HexString[];
    validator: ValidatorConfigurationWithCommission;
    vesting_schedule_numerator: U64[];
    vesting_schedule_denominator: U64;
    beneficiary_resetter: HexString;
    constructor(proto: any, typeTag: TypeTag);
    static EmployeeAccountMapParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): EmployeeAccountMap;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class ValidatorConfiguration {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    owner_address: HexString;
    operator_address: HexString;
    voter_address: HexString;
    stake_amount: U64;
    consensus_pubkey: U8[];
    proof_of_possession: U8[];
    network_addresses: U8[];
    full_node_network_addresses: U8[];
    constructor(proto: any, typeTag: TypeTag);
    static ValidatorConfigurationParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): ValidatorConfiguration;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class ValidatorConfigurationWithCommission {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    validator_config: ValidatorConfiguration;
    commission_percentage: U64;
    join_during_genesis: boolean;
    constructor(proto: any, typeTag: TypeTag);
    static ValidatorConfigurationWithCommissionParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): ValidatorConfigurationWithCommission;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function create_account_(aptos_framework: HexString, account_address: HexString, balance: U64, $c: AptosDataCache): HexString;
export declare function create_accounts_(aptos_framework: HexString, accounts: AccountMap[], $c: AptosDataCache): void;
export declare function create_employee_validators_(employee_vesting_start: U64, employee_vesting_period_duration: U64, employees: EmployeeAccountMap[], $c: AptosDataCache): void;
export declare function create_initialize_validator_(aptos_framework: HexString, commission_config: ValidatorConfigurationWithCommission, use_staking_contract: boolean, $c: AptosDataCache): void;
export declare function create_initialize_validators_(aptos_framework: HexString, validators: ValidatorConfiguration[], $c: AptosDataCache): void;
export declare function create_initialize_validators_with_commission_(aptos_framework: HexString, use_staking_contract: boolean, validators: ValidatorConfigurationWithCommission[], $c: AptosDataCache): void;
export declare function create_signer_(addr: HexString, $c: AptosDataCache): HexString;
export declare function initialize_(gas_schedule: U8[], chain_id: U8, initial_version: U64, consensus_config: U8[], epoch_interval_microsecs: U64, minimum_stake: U64, maximum_stake: U64, recurring_lockup_duration_secs: U64, allow_validator_set_change: boolean, rewards_rate: U64, rewards_rate_denominator: U64, voting_power_increase_limit: U64, $c: AptosDataCache): void;
export declare function initialize_aptos_coin_(aptos_framework: HexString, $c: AptosDataCache): void;
export declare function initialize_core_resources_and_aptos_coin_(aptos_framework: HexString, core_resources_auth_key: U8[], $c: AptosDataCache): void;
export declare function initialize_for_verification_(gas_schedule: U8[], chain_id: U8, initial_version: U64, consensus_config: U8[], epoch_interval_microsecs: U64, minimum_stake: U64, maximum_stake: U64, recurring_lockup_duration_secs: U64, allow_validator_set_change: boolean, rewards_rate: U64, rewards_rate_denominator: U64, voting_power_increase_limit: U64, aptos_framework: HexString, validators: ValidatorConfiguration[], min_voting_threshold: U128, required_proposer_stake: U64, voting_duration_secs: U64, $c: AptosDataCache): void;
export declare function initialize_validator_(pool_address: HexString, validator: ValidatorConfiguration, $c: AptosDataCache): void;
export declare function set_genesis_end_(aptos_framework: HexString, $c: AptosDataCache): void;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get AccountMap(): typeof AccountMap;
    get EmployeeAccountMap(): typeof EmployeeAccountMap;
    get ValidatorConfiguration(): typeof ValidatorConfiguration;
    get ValidatorConfigurationWithCommission(): typeof ValidatorConfigurationWithCommission;
}
//# sourceMappingURL=genesis.d.ts.map