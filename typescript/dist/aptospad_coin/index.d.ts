import { AptosClient } from "aptos";
import { AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import * as Aptospad_coin from './aptospad_coin';
export * as Aptospad_coin from './aptospad_coin';
export declare function loadParsers(repo: AptosParserRepo): void;
export declare function getPackageRepo(): AptosParserRepo;
export type AppType = {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
};
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    aptospad_coin: Aptospad_coin.App;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
}
//# sourceMappingURL=index.d.ts.map