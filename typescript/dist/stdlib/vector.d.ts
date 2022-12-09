import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U64 } from "@manahippo/move-to-ts";
import { TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
export declare const packageName = "MoveStdlib";
export declare const moduleAddress: HexString;
export declare const moduleName = "vector";
export declare const EINDEX_OUT_OF_BOUNDS: U64;
export declare function append_(lhs: any[], other: any[], $c: AptosDataCache, $p: TypeTag[]): void;
export declare function borrow_(v: any[], i: U64, $c: AptosDataCache, $p: TypeTag[]): any;
export declare function borrow_mut_(v: any[], i: U64, $c: AptosDataCache, $p: TypeTag[]): any;
export declare function contains_(v: any[], e: any, $c: AptosDataCache, $p: TypeTag[]): boolean;
export declare function destroy_empty_(v: any[], $c: AptosDataCache, $p: TypeTag[]): void;
export declare function empty_($c: AptosDataCache, $p: TypeTag[]): any[];
export declare function index_of_(v: any[], e: any, $c: AptosDataCache, $p: TypeTag[]): [boolean, U64];
export declare function is_empty_(v: any[], $c: AptosDataCache, $p: TypeTag[]): boolean;
export declare function length_(v: any[], $c: AptosDataCache, $p: TypeTag[]): U64;
export declare function pop_back_(v: any[], $c: AptosDataCache, $p: TypeTag[]): any;
export declare function push_back_(v: any[], e: any, $c: AptosDataCache, $p: TypeTag[]): void;
export declare function remove_(v: any[], i: U64, $c: AptosDataCache, $p: TypeTag[]): any;
export declare function reverse_(v: any[], $c: AptosDataCache, $p: TypeTag[]): void;
export declare function singleton_(e: any, $c: AptosDataCache, $p: TypeTag[]): any[];
export declare function swap_(v: any[], i: U64, j: U64, $c: AptosDataCache, $p: TypeTag[]): void;
export declare function swap_remove_(v: any[], i: U64, $c: AptosDataCache, $p: TypeTag[]): any;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
}
//# sourceMappingURL=vector.d.ts.map