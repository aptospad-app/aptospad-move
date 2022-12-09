import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U8 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
import * as String from "./string";
export declare const packageName = "AptosStdlib";
export declare const moduleAddress: HexString;
export declare const moduleName = "type_info";
export declare class TypeInfo {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    account_address: HexString;
    module_name: U8[];
    struct_name: U8[];
    constructor(proto: any, typeTag: TypeTag);
    static TypeInfoParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): TypeInfo;
    static getTag(): StructTag;
    typeFullname(): string;
    toTypeTag(): $.TypeTag;
    moduleName(): string;
    structName(): string;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function account_address_(type_info: TypeInfo, $c: AptosDataCache): HexString;
export declare function module_name_(type_info: TypeInfo, $c: AptosDataCache): U8[];
export declare function struct_name_(type_info: TypeInfo, $c: AptosDataCache): U8[];
export declare function type_name_($c: AptosDataCache, $p: TypeTag[]): String.String;
export declare function type_of_($c: AptosDataCache, $p: TypeTag[]): TypeInfo;
export declare function verify_type_of_($c: AptosDataCache): void;
export declare function verify_type_of_generic_($c: AptosDataCache, $p: TypeTag[]): void;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get TypeInfo(): typeof TypeInfo;
}
//# sourceMappingURL=type_info.d.ts.map