import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
export declare const packageName = "AptosFramework";
export declare const moduleAddress: HexString;
export declare const moduleName = "state_storage";
export declare const ESTATE_STORAGE_USAGE: U64;
export declare class GasParameter {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    usage: Usage;
    constructor(proto: any, typeTag: TypeTag);
    static GasParameterParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): GasParameter;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<GasParameter>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<GasParameter>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class StateStorageUsage {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    epoch: U64;
    usage: Usage;
    constructor(proto: any, typeTag: TypeTag);
    static StateStorageUsageParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): StateStorageUsage;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<StateStorageUsage>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<StateStorageUsage>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class Usage {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    items: U64;
    bytes: U64;
    constructor(proto: any, typeTag: TypeTag);
    static UsageParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): Usage;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function current_items_and_bytes_($c: AptosDataCache): [U64, U64];
export declare function get_state_storage_usage_only_at_epoch_beginning_($c: AptosDataCache): Usage;
export declare function initialize_(aptos_framework: HexString, $c: AptosDataCache): void;
export declare function on_new_block_(epoch: U64, $c: AptosDataCache): void;
export declare function on_reconfig_($c: AptosDataCache): void;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get GasParameter(): typeof GasParameter;
    loadGasParameter(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<GasParameter>;
    get StateStorageUsage(): typeof StateStorageUsage;
    loadStateStorageUsage(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<StateStorageUsage>;
    get Usage(): typeof Usage;
}
//# sourceMappingURL=state_storage.d.ts.map