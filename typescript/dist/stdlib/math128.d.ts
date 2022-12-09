import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U128 } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
export declare const packageName = "AptosStdlib";
export declare const moduleAddress: HexString;
export declare const moduleName = "math128";
export declare function average_(a: U128, b: U128, $c: AptosDataCache): U128;
export declare function max_(a: U128, b: U128, $c: AptosDataCache): U128;
export declare function min_(a: U128, b: U128, $c: AptosDataCache): U128;
export declare function pow_(n: U128, e: U128, $c: AptosDataCache): U128;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
}
//# sourceMappingURL=math128.d.ts.map