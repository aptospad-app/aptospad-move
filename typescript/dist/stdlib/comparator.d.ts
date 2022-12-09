import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U8 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
export declare const packageName = "AptosStdlib";
export declare const moduleAddress: HexString;
export declare const moduleName = "comparator";
export declare const EQUAL: U8;
export declare const GREATER: U8;
export declare const SMALLER: U8;
export declare class Result {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    inner: U8;
    constructor(proto: any, typeTag: TypeTag);
    static ResultParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): Result;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function compare_(left: any, right: any, $c: AptosDataCache, $p: TypeTag[]): Result;
export declare function compare_u8_vector_(left: U8[], right: U8[], $c: AptosDataCache): Result;
export declare function is_equal_(result: Result, $c: AptosDataCache): boolean;
export declare function is_greater_than_(result: Result, $c: AptosDataCache): boolean;
export declare function is_smaller_than_(result: Result, $c: AptosDataCache): boolean;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get Result(): typeof Result;
}
//# sourceMappingURL=comparator.d.ts.map