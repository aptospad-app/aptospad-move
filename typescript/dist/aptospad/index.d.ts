import { AptosClient } from "aptos";
import { AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import * as Aptospad_coin_boot from './aptospad_coin_boot';
import * as Aptospad_swap from './aptospad_swap';
import * as Config from './config';
import * as Iterable_table from './iterable_table';
import * as Project from './project';
import * as Scripts from './scripts';
export * as Aptospad_coin_boot from './aptospad_coin_boot';
export * as Aptospad_swap from './aptospad_swap';
export * as Config from './config';
export * as Iterable_table from './iterable_table';
export * as Project from './project';
export * as Scripts from './scripts';
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
    aptospad_coin_boot: Aptospad_coin_boot.App;
    aptospad_swap: Aptospad_swap.App;
    config: Config.App;
    iterable_table: Iterable_table.App;
    project: Project.App;
    scripts: Scripts.App;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
}
//# sourceMappingURL=index.d.ts.map