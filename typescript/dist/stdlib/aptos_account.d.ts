import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U64 } from "@manahippo/move-to-ts";
import { OptionTransaction } from "@manahippo/move-to-ts";
import { HexString, AptosClient, AptosAccount, TxnBuilderTypes, Types } from "aptos";
export declare const packageName = "AptosFramework";
export declare const moduleAddress: HexString;
export declare const moduleName = "aptos_account";
export declare const EACCOUNT_NOT_FOUND: U64;
export declare const EACCOUNT_NOT_REGISTERED_FOR_APT: U64;
export declare function assert_account_exists_(addr: HexString, $c: AptosDataCache): void;
export declare function assert_account_is_registered_for_apt_(addr: HexString, $c: AptosDataCache): void;
export declare function create_account_(auth_key: HexString, $c: AptosDataCache): void;
export declare function buildPayload_create_account(auth_key: HexString, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function transfer_(source: HexString, to: HexString, amount: U64, $c: AptosDataCache): void;
export declare function buildPayload_transfer(to: HexString, amount: U64, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    payload_create_account(auth_key: HexString, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    create_account(_account: AptosAccount, auth_key: HexString, option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
    payload_transfer(to: HexString, amount: U64, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    transfer(_account: AptosAccount, to: HexString, amount: U64, option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
}
//# sourceMappingURL=aptos_account.d.ts.map