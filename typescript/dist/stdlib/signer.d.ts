import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
export declare const packageName = "MoveStdlib";
export declare const moduleAddress: HexString;
export declare const moduleName = "signer";
export declare function address_of_(s: HexString, $c: AptosDataCache): HexString;
export declare function borrow_address_(s: HexString, $c: AptosDataCache): HexString;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
}
//# sourceMappingURL=signer.d.ts.map