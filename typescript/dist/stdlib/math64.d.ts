import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U64 } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
export declare const packageName = "AptosStdlib";
export declare const moduleAddress: HexString;
export declare const moduleName = "math64";
export declare function average_(a: U64, b: U64, $c: AptosDataCache): U64;
export declare function max_(a: U64, b: U64, $c: AptosDataCache): U64;
export declare function min_(a: U64, b: U64, $c: AptosDataCache): U64;
export declare function pow_(n: U64, e: U64, $c: AptosDataCache): U64;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
}
//# sourceMappingURL=math64.d.ts.map