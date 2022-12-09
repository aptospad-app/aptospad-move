import { AptosClient } from "aptos";
import { AptosParserRepo, AptosLocalCache, u8, u64, u128 } from "@manahippo/move-to-ts";
import * as aptospad from './aptospad';
import * as aptospad_coin from './aptospad_coin';
import * as stdlib from './stdlib';
export * as aptospad from './aptospad';
export * as aptospad_coin from './aptospad_coin';
export * as stdlib from './stdlib';
export { u8, u64, u128 };
export declare function getProjectRepo(): AptosParserRepo;
export declare class App {
    client: AptosClient;
    parserRepo: AptosParserRepo;
    cache: AptosLocalCache;
    aptospad: aptospad.App;
    aptospad_coin: aptospad_coin.App;
    stdlib: stdlib.App;
    constructor(client: AptosClient);
}
//# sourceMappingURL=index.d.ts.map