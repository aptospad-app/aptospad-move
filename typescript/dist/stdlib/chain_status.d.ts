import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
export declare const packageName = "AptosFramework";
export declare const moduleAddress: HexString;
export declare const moduleName = "chain_status";
export declare const ENOT_GENESIS: U64;
export declare const ENOT_OPERATING: U64;
export declare class GenesisEndMarker {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    constructor(proto: any, typeTag: TypeTag);
    static GenesisEndMarkerParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): GenesisEndMarker;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<GenesisEndMarker>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<GenesisEndMarker>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function assert_genesis_($c: AptosDataCache): void;
export declare function assert_operating_($c: AptosDataCache): void;
export declare function is_genesis_($c: AptosDataCache): boolean;
export declare function is_operating_($c: AptosDataCache): boolean;
export declare function set_genesis_end_(aptos_framework: HexString, $c: AptosDataCache): void;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get GenesisEndMarker(): typeof GenesisEndMarker;
    loadGenesisEndMarker(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<GenesisEndMarker>;
}
//# sourceMappingURL=chain_status.d.ts.map