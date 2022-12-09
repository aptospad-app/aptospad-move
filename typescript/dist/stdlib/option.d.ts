import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
export declare const packageName = "MoveStdlib";
export declare const moduleAddress: HexString;
export declare const moduleName = "option";
export declare const EOPTION_IS_SET: U64;
export declare const EOPTION_NOT_SET: U64;
export declare class Option {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    vec: any[];
    constructor(proto: any, typeTag: TypeTag);
    static OptionParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): Option;
    static makeTag($p: TypeTag[]): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function borrow_(t: Option, $c: AptosDataCache, $p: TypeTag[]): any;
export declare function borrow_mut_(t: Option, $c: AptosDataCache, $p: TypeTag[]): any;
export declare function borrow_with_default_(t: Option, default_ref: any, $c: AptosDataCache, $p: TypeTag[]): any;
export declare function contains_(t: Option, e_ref: any, $c: AptosDataCache, $p: TypeTag[]): boolean;
export declare function destroy_none_(t: Option, $c: AptosDataCache, $p: TypeTag[]): void;
export declare function destroy_some_(t: Option, $c: AptosDataCache, $p: TypeTag[]): any;
export declare function destroy_with_default_(t: Option, default__: any, $c: AptosDataCache, $p: TypeTag[]): any;
export declare function extract_(t: Option, $c: AptosDataCache, $p: TypeTag[]): any;
export declare function fill_(t: Option, e: any, $c: AptosDataCache, $p: TypeTag[]): void;
export declare function get_with_default_(t: Option, default__: any, $c: AptosDataCache, $p: TypeTag[]): any;
export declare function is_none_(t: Option, $c: AptosDataCache, $p: TypeTag[]): boolean;
export declare function is_some_(t: Option, $c: AptosDataCache, $p: TypeTag[]): boolean;
export declare function none_($c: AptosDataCache, $p: TypeTag[]): Option;
export declare function some_(e: any, $c: AptosDataCache, $p: TypeTag[]): Option;
export declare function swap_(t: Option, e: any, $c: AptosDataCache, $p: TypeTag[]): any;
export declare function swap_or_fill_(t: Option, e: any, $c: AptosDataCache, $p: TypeTag[]): Option;
export declare function to_vec_(t: Option, $c: AptosDataCache, $p: TypeTag[]): any[];
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get Option(): typeof Option;
}
//# sourceMappingURL=option.d.ts.map