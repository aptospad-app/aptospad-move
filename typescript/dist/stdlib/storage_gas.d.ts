import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
export declare const packageName = "AptosFramework";
export declare const moduleAddress: HexString;
export declare const moduleName = "storage_gas";
export declare const BASIS_POINT_DENOMINATION: U64;
export declare const EINVALID_GAS_RANGE: U64;
export declare const EINVALID_MONOTONICALLY_NON_DECREASING_CURVE: U64;
export declare const EINVALID_POINT_RANGE: U64;
export declare const ESTORAGE_GAS: U64;
export declare const ESTORAGE_GAS_CONFIG: U64;
export declare const ETARGET_USAGE_TOO_BIG: U64;
export declare const EZERO_TARGET_USAGE: U64;
export declare const MAX_U64: U64;
export declare class GasCurve {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    min_gas: U64;
    max_gas: U64;
    points: Point[];
    constructor(proto: any, typeTag: TypeTag);
    static GasCurveParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): GasCurve;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class Point {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    x: U64;
    y: U64;
    constructor(proto: any, typeTag: TypeTag);
    static PointParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): Point;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class StorageGas {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    per_item_read: U64;
    per_item_create: U64;
    per_item_write: U64;
    per_byte_read: U64;
    per_byte_create: U64;
    per_byte_write: U64;
    constructor(proto: any, typeTag: TypeTag);
    static StorageGasParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): StorageGas;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<StorageGas>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<StorageGas>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class StorageGasConfig {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    item_config: UsageGasConfig;
    byte_config: UsageGasConfig;
    constructor(proto: any, typeTag: TypeTag);
    static StorageGasConfigParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): StorageGasConfig;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<StorageGasConfig>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<StorageGasConfig>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class UsageGasConfig {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    target_usage: U64;
    read_curve: GasCurve;
    create_curve: GasCurve;
    write_curve: GasCurve;
    constructor(proto: any, typeTag: TypeTag);
    static UsageGasConfigParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): UsageGasConfig;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function base_8192_exponential_curve_(min_gas: U64, max_gas: U64, $c: AptosDataCache): GasCurve;
export declare function calculate_create_gas_(config: UsageGasConfig, usage: U64, $c: AptosDataCache): U64;
export declare function calculate_gas_(max_usage: U64, current_usage: U64, curve: GasCurve, $c: AptosDataCache): U64;
export declare function calculate_read_gas_(config: UsageGasConfig, usage: U64, $c: AptosDataCache): U64;
export declare function calculate_write_gas_(config: UsageGasConfig, usage: U64, $c: AptosDataCache): U64;
export declare function initialize_(aptos_framework: HexString, $c: AptosDataCache): void;
export declare function interpolate_(x0: U64, x1: U64, y0: U64, y1: U64, x: U64, $c: AptosDataCache): U64;
export declare function new_gas_curve_(min_gas: U64, max_gas: U64, points: Point[], $c: AptosDataCache): GasCurve;
export declare function new_point_(x: U64, y: U64, $c: AptosDataCache): Point;
export declare function new_storage_gas_config_(item_config: UsageGasConfig, byte_config: UsageGasConfig, $c: AptosDataCache): StorageGasConfig;
export declare function new_usage_gas_config_(target_usage: U64, read_curve: GasCurve, create_curve: GasCurve, write_curve: GasCurve, $c: AptosDataCache): UsageGasConfig;
export declare function on_reconfig_($c: AptosDataCache): void;
export declare function set_config_(aptos_framework: HexString, config: StorageGasConfig, $c: AptosDataCache): void;
export declare function validate_points_(points: Point[], $c: AptosDataCache): void;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get GasCurve(): typeof GasCurve;
    get Point(): typeof Point;
    get StorageGas(): typeof StorageGas;
    loadStorageGas(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<StorageGas>;
    get StorageGasConfig(): typeof StorageGasConfig;
    loadStorageGasConfig(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<StorageGasConfig>;
    get UsageGasConfig(): typeof UsageGasConfig;
}
//# sourceMappingURL=storage_gas.d.ts.map