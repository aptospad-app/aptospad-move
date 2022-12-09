import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U8, U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
import * as String from "./string";
export declare const packageName = "AptosStdlib";
export declare const moduleAddress: HexString;
export declare const moduleName = "any";
export declare const ETYPE_MISMATCH: U64;
export declare class Any {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    type_name: String.String;
    data: U8[];
    constructor(proto: any, typeTag: TypeTag);
    static AnyParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): Any;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function pack_(x: any, $c: AptosDataCache, $p: TypeTag[]): Any;
export declare function type_name_(x: Any, $c: AptosDataCache): String.String;
export declare function unpack_(x: Any, $c: AptosDataCache, $p: TypeTag[]): any;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get Any(): typeof Any;
}
//# sourceMappingURL=any.d.ts.map