import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U8, U64, U128 } from "@manahippo/move-to-ts";
import { TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
import * as String from "./string";
export declare const packageName = "AptosStdlib";
export declare const moduleAddress: HexString;
export declare const moduleName = "from_bcs";
export declare const EINVALID_UTF8: U64;
export declare function from_bytes_(bytes: U8[], $c: AptosDataCache, $p: TypeTag[]): any;
export declare function to_address_(v: U8[], $c: AptosDataCache): HexString;
export declare function to_bool_(v: U8[], $c: AptosDataCache): boolean;
export declare function to_string_(v: U8[], $c: AptosDataCache): String.String;
export declare function to_u128_(v: U8[], $c: AptosDataCache): U128;
export declare function to_u64_(v: U8[], $c: AptosDataCache): U64;
export declare function to_u8_(v: U8[], $c: AptosDataCache): U8;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
}
//# sourceMappingURL=from_bcs.d.ts.map