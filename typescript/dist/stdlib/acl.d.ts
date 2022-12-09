import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
export declare const packageName = "MoveStdlib";
export declare const moduleAddress: HexString;
export declare const moduleName = "acl";
export declare const ECONTAIN: U64;
export declare const ENOT_CONTAIN: U64;
export declare class ACL {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    list: HexString[];
    constructor(proto: any, typeTag: TypeTag);
    static ACLParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): ACL;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function add_(acl: ACL, addr: HexString, $c: AptosDataCache): void;
export declare function assert_contains_(acl: ACL, addr: HexString, $c: AptosDataCache): void;
export declare function contains_(acl: ACL, addr: HexString, $c: AptosDataCache): boolean;
export declare function empty_($c: AptosDataCache): ACL;
export declare function remove_(acl: ACL, addr: HexString, $c: AptosDataCache): void;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get ACL(): typeof ACL;
}
//# sourceMappingURL=acl.d.ts.map