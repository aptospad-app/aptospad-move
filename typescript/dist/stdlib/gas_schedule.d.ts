import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U8, U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
import * as Storage_gas from "./storage_gas";
import * as String from "./string";
export declare const packageName = "AptosFramework";
export declare const moduleAddress: HexString;
export declare const moduleName = "gas_schedule";
export declare const EINVALID_GAS_FEATURE_VERSION: U64;
export declare const EINVALID_GAS_SCHEDULE: U64;
export declare class GasEntry {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    key: String.String;
    val: U64;
    constructor(proto: any, typeTag: TypeTag);
    static GasEntryParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): GasEntry;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class GasSchedule {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    entries: GasEntry[];
    constructor(proto: any, typeTag: TypeTag);
    static GasScheduleParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): GasSchedule;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<GasSchedule>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<GasSchedule>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class GasScheduleV2 {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    feature_version: U64;
    entries: GasEntry[];
    constructor(proto: any, typeTag: TypeTag);
    static GasScheduleV2Parser(data: any, typeTag: TypeTag, repo: AptosParserRepo): GasScheduleV2;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<GasScheduleV2>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<GasScheduleV2>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function initialize_(aptos_framework: HexString, gas_schedule_blob: U8[], $c: AptosDataCache): void;
export declare function set_gas_schedule_(aptos_framework: HexString, gas_schedule_blob: U8[], $c: AptosDataCache): void;
export declare function set_storage_gas_config_(aptos_framework: HexString, config: Storage_gas.StorageGasConfig, $c: AptosDataCache): void;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get GasEntry(): typeof GasEntry;
    get GasSchedule(): typeof GasSchedule;
    loadGasSchedule(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<GasSchedule>;
    get GasScheduleV2(): typeof GasScheduleV2;
    loadGasScheduleV2(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<GasScheduleV2>;
}
//# sourceMappingURL=gas_schedule.d.ts.map