import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U64 } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
export declare const packageName = "AptosFramework";
export declare const moduleAddress: HexString;
export declare const moduleName = "system_addresses";
export declare const ENOT_APTOS_FRAMEWORK_ADDRESS: U64;
export declare const ENOT_CORE_RESOURCE_ADDRESS: U64;
export declare const ENOT_FRAMEWORK_RESERVED_ADDRESS: U64;
export declare const EVM: U64;
export declare function assert_aptos_framework_(account: HexString, $c: AptosDataCache): void;
export declare function assert_core_resource_(account: HexString, $c: AptosDataCache): void;
export declare function assert_core_resource_address_(addr: HexString, $c: AptosDataCache): void;
export declare function assert_framework_reserved_address_(account: HexString, $c: AptosDataCache): void;
export declare function assert_vm_(account: HexString, $c: AptosDataCache): void;
export declare function is_aptos_framework_address_(addr: HexString, $c: AptosDataCache): boolean;
export declare function is_core_resource_address_(addr: HexString, $c: AptosDataCache): boolean;
export declare function is_framework_reserved_address_(addr: HexString, $c: AptosDataCache): boolean;
export declare function is_reserved_address_(addr: HexString, $c: AptosDataCache): boolean;
export declare function is_vm_(account: HexString, $c: AptosDataCache): boolean;
export declare function is_vm_address_(addr: HexString, $c: AptosDataCache): boolean;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
}
//# sourceMappingURL=system_addresses.d.ts.map