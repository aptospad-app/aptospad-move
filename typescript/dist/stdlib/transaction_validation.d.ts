import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U8, U64, U128 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
export declare const packageName = "AptosFramework";
export declare const moduleAddress: HexString;
export declare const moduleName = "transaction_validation";
export declare const EOUT_OF_GAS: U64;
export declare const MAX_U64: U128;
export declare const PROLOGUE_EACCOUNT_DOES_NOT_EXIST: U64;
export declare const PROLOGUE_EBAD_CHAIN_ID: U64;
export declare const PROLOGUE_ECANT_PAY_GAS_DEPOSIT: U64;
export declare const PROLOGUE_EINVALID_ACCOUNT_AUTH_KEY: U64;
export declare const PROLOGUE_ESECONDARY_KEYS_ADDRESSES_COUNT_MISMATCH: U64;
export declare const PROLOGUE_ESEQUENCE_NUMBER_TOO_BIG: U64;
export declare const PROLOGUE_ESEQUENCE_NUMBER_TOO_NEW: U64;
export declare const PROLOGUE_ESEQUENCE_NUMBER_TOO_OLD: U64;
export declare const PROLOGUE_ETRANSACTION_EXPIRED: U64;
export declare class TransactionValidation {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    module_addr: HexString;
    module_name: U8[];
    script_prologue_name: U8[];
    module_prologue_name: U8[];
    multi_agent_prologue_name: U8[];
    user_epilogue_name: U8[];
    constructor(proto: any, typeTag: TypeTag);
    static TransactionValidationParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): TransactionValidation;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<TransactionValidation>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<TransactionValidation>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function epilogue_(account: HexString, _txn_sequence_number: U64, txn_gas_price: U64, txn_max_gas_units: U64, gas_units_remaining: U64, $c: AptosDataCache): void;
export declare function initialize_(aptos_framework: HexString, script_prologue_name: U8[], module_prologue_name: U8[], multi_agent_prologue_name: U8[], user_epilogue_name: U8[], $c: AptosDataCache): void;
export declare function module_prologue_(sender: HexString, txn_sequence_number: U64, txn_public_key: U8[], txn_gas_price: U64, txn_max_gas_units: U64, txn_expiration_time: U64, chain_id: U8, $c: AptosDataCache): void;
export declare function multi_agent_script_prologue_(sender: HexString, txn_sequence_number: U64, txn_sender_public_key: U8[], secondary_signer_addresses: HexString[], secondary_signer_public_key_hashes: U8[][], txn_gas_price: U64, txn_max_gas_units: U64, txn_expiration_time: U64, chain_id: U8, $c: AptosDataCache): void;
export declare function prologue_common_(sender: HexString, txn_sequence_number: U64, txn_authentication_key: U8[], txn_gas_price: U64, txn_max_gas_units: U64, txn_expiration_time: U64, chain_id: U8, $c: AptosDataCache): void;
export declare function script_prologue_(sender: HexString, txn_sequence_number: U64, txn_public_key: U8[], txn_gas_price: U64, txn_max_gas_units: U64, txn_expiration_time: U64, chain_id: U8, _script_hash: U8[], $c: AptosDataCache): void;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get TransactionValidation(): typeof TransactionValidation;
    loadTransactionValidation(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<TransactionValidation>;
}
//# sourceMappingURL=transaction_validation.d.ts.map