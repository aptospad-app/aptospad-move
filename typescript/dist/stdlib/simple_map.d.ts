import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
import * as Option from "./option";
export declare const packageName = "AptosStdlib";
export declare const moduleAddress: HexString;
export declare const moduleName = "simple_map";
export declare const EKEY_ALREADY_EXISTS: U64;
export declare const EKEY_NOT_FOUND: U64;
export declare class Element {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    key: any;
    value: any;
    constructor(proto: any, typeTag: TypeTag);
    static ElementParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): Element;
    static makeTag($p: TypeTag[]): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class SimpleMap {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    data: Element[];
    constructor(proto: any, typeTag: TypeTag);
    static SimpleMapParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): SimpleMap;
    static makeTag($p: TypeTag[]): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function add_(map: SimpleMap, key: any, value: any, $c: AptosDataCache, $p: TypeTag[]): void;
export declare function borrow_(map: SimpleMap, key: any, $c: AptosDataCache, $p: TypeTag[]): any;
export declare function borrow_mut_(map: SimpleMap, key: any, $c: AptosDataCache, $p: TypeTag[]): any;
export declare function contains_key_(map: SimpleMap, key: any, $c: AptosDataCache, $p: TypeTag[]): boolean;
export declare function create_($c: AptosDataCache, $p: TypeTag[]): SimpleMap;
export declare function destroy_empty_(map: SimpleMap, $c: AptosDataCache, $p: TypeTag[]): void;
export declare function find_(map: SimpleMap, key: any, $c: AptosDataCache, $p: TypeTag[]): [Option.Option, Option.Option];
export declare function length_(map: SimpleMap, $c: AptosDataCache, $p: TypeTag[]): U64;
export declare function remove_(map: SimpleMap, key: any, $c: AptosDataCache, $p: TypeTag[]): [any, any];
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get Element(): typeof Element;
    get SimpleMap(): typeof SimpleMap;
}
//# sourceMappingURL=simple_map.d.ts.map