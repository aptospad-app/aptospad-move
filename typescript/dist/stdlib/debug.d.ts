import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
export declare const packageName = "AptosStdlib";
export declare const moduleAddress: HexString;
export declare const moduleName = "debug";
export declare function print_(x: any, $c: AptosDataCache, $p: TypeTag[]): void;
export declare function print_stack_trace_($c: AptosDataCache): void;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
}
//# sourceMappingURL=debug.d.ts.map