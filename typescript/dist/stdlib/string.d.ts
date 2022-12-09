import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U8, U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
import * as Option from "./option";
export declare const packageName = "MoveStdlib";
export declare const moduleAddress: HexString;
export declare const moduleName = "string";
export declare const EINVALID_INDEX: U64;
export declare const EINVALID_UTF8: U64;
export declare class String {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    bytes: U8[];
    constructor(proto: any, typeTag: TypeTag);
    static StringParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): String;
    static getTag(): StructTag;
    str(): string;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function append_(s: String, r: String, $c: AptosDataCache): void;
export declare function append_utf8_(s: String, bytes: U8[], $c: AptosDataCache): void;
export declare function bytes_(s: String, $c: AptosDataCache): U8[];
export declare function index_of_(s: String, r: String, $c: AptosDataCache): U64;
export declare function insert_(s: String, at: U64, o: String, $c: AptosDataCache): void;
export declare function internal_check_utf8_(v: U8[], $c: AptosDataCache): boolean;
export declare function internal_index_of_(v: U8[], r: U8[], $c: AptosDataCache): U64;
export declare function internal_is_char_boundary_(v: U8[], i: U64, $c: AptosDataCache): boolean;
export declare function internal_sub_string_(v: U8[], i: U64, j: U64, $c: AptosDataCache): U8[];
export declare function is_empty_(s: String, $c: AptosDataCache): boolean;
export declare function length_(s: String, $c: AptosDataCache): U64;
export declare function sub_string_(s: String, i: U64, j: U64, $c: AptosDataCache): String;
export declare function try_utf8_(bytes: U8[], $c: AptosDataCache): Option.Option;
export declare function utf8_(bytes: U8[], $c: AptosDataCache): String;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get String(): typeof String;
}
//# sourceMappingURL=string.d.ts.map