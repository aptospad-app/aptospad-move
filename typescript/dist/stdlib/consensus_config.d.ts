import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U8, U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
export declare const packageName = "AptosFramework";
export declare const moduleAddress: HexString;
export declare const moduleName = "consensus_config";
export declare const EINVALID_CONFIG: U64;
export declare class ConsensusConfig {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    config: U8[];
    constructor(proto: any, typeTag: TypeTag);
    static ConsensusConfigParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): ConsensusConfig;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<ConsensusConfig>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<ConsensusConfig>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function initialize_(aptos_framework: HexString, config: U8[], $c: AptosDataCache): void;
export declare function set_(account: HexString, config: U8[], $c: AptosDataCache): void;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get ConsensusConfig(): typeof ConsensusConfig;
    loadConsensusConfig(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<ConsensusConfig>;
}
//# sourceMappingURL=consensus_config.d.ts.map