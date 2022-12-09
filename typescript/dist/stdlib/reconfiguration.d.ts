import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
import * as Event from "./event";
export declare const packageName = "AptosFramework";
export declare const moduleAddress: HexString;
export declare const moduleName = "reconfiguration";
export declare const ECONFIG: U64;
export declare const ECONFIGURATION: U64;
export declare const EINVALID_BLOCK_TIME: U64;
export declare const EINVALID_GUID_FOR_EVENT: U64;
export declare const EMODIFY_CAPABILITY: U64;
export declare class Configuration {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    epoch: U64;
    last_reconfiguration_time: U64;
    events: Event.EventHandle;
    constructor(proto: any, typeTag: TypeTag);
    static ConfigurationParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): Configuration;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<Configuration>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<Configuration>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class DisableReconfiguration {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    constructor(proto: any, typeTag: TypeTag);
    static DisableReconfigurationParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): DisableReconfiguration;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<DisableReconfiguration>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<DisableReconfiguration>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class NewEpochEvent {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    epoch: U64;
    constructor(proto: any, typeTag: TypeTag);
    static NewEpochEventParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): NewEpochEvent;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function current_epoch_($c: AptosDataCache): U64;
export declare function disable_reconfiguration_(aptos_framework: HexString, $c: AptosDataCache): void;
export declare function emit_genesis_reconfiguration_event_($c: AptosDataCache): void;
export declare function enable_reconfiguration_(aptos_framework: HexString, $c: AptosDataCache): void;
export declare function initialize_(aptos_framework: HexString, $c: AptosDataCache): void;
export declare function last_reconfiguration_time_($c: AptosDataCache): U64;
export declare function reconfiguration_enabled_($c: AptosDataCache): boolean;
export declare function reconfigure_($c: AptosDataCache): void;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get Configuration(): typeof Configuration;
    loadConfiguration(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<Configuration>;
    get DisableReconfiguration(): typeof DisableReconfiguration;
    loadDisableReconfiguration(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<DisableReconfiguration>;
    get NewEpochEvent(): typeof NewEpochEvent;
}
//# sourceMappingURL=reconfiguration.d.ts.map