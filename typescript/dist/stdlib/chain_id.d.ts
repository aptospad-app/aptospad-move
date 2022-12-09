import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U8 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
export declare const packageName = "AptosFramework";
export declare const moduleAddress: HexString;
export declare const moduleName = "chain_id";
export declare class ChainId {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    id: U8;
    constructor(proto: any, typeTag: TypeTag);
    static ChainIdParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): ChainId;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<ChainId>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<ChainId>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function get_($c: AptosDataCache): U8;
export declare function initialize_(aptos_framework: HexString, id: U8, $c: AptosDataCache): void;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get ChainId(): typeof ChainId;
    loadChainId(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<ChainId>;
}
//# sourceMappingURL=chain_id.d.ts.map