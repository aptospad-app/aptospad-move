import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
export declare const packageName = "AptosFramework";
export declare const moduleAddress: HexString;
export declare const moduleName = "guid";
export declare const EGUID_GENERATOR_NOT_PUBLISHED: U64;
export declare class GUID {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    id: ID;
    constructor(proto: any, typeTag: TypeTag);
    static GUIDParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): GUID;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class ID {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    creation_num: U64;
    addr: HexString;
    constructor(proto: any, typeTag: TypeTag);
    static IDParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): ID;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function create_(addr: HexString, creation_num_ref: U64, $c: AptosDataCache): GUID;
export declare function create_id_(addr: HexString, creation_num: U64, $c: AptosDataCache): ID;
export declare function creation_num_(guid: GUID, $c: AptosDataCache): U64;
export declare function creator_address_(guid: GUID, $c: AptosDataCache): HexString;
export declare function eq_id_(guid: GUID, id: ID, $c: AptosDataCache): boolean;
export declare function id_(guid: GUID, $c: AptosDataCache): ID;
export declare function id_creation_num_(id: ID, $c: AptosDataCache): U64;
export declare function id_creator_address_(id: ID, $c: AptosDataCache): HexString;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get GUID(): typeof GUID;
    get ID(): typeof ID;
}
//# sourceMappingURL=guid.d.ts.map