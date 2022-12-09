import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U8, U64 } from "@manahippo/move-to-ts";
import { TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
export declare const packageName = "AptosStdlib";
export declare const moduleAddress: HexString;
export declare const moduleName = "aptos_hash";
export declare function keccak256_(bytes: U8[], $c: AptosDataCache): U8[];
export declare function sip_hash_(bytes: U8[], $c: AptosDataCache): U64;
export declare function sip_hash_from_value_(v: any, $c: AptosDataCache, $p: TypeTag[]): U64;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
}
//# sourceMappingURL=aptos_hash.d.ts.map