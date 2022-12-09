import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U8, U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { OptionTransaction } from "@manahippo/move-to-ts";
import { HexString, AptosClient, AptosAccount, TxnBuilderTypes, Types } from "aptos";
import * as Option from "./option";
import * as String from "./string";
export declare const packageName = "AptosFramework";
export declare const moduleAddress: HexString;
export declare const moduleName = "code";
export declare const EDEP_ARBITRARY_NOT_SAME_ADDRESS: U64;
export declare const EDEP_WEAKER_POLICY: U64;
export declare const EINCOMPATIBLE_POLICY_DISABLED: U64;
export declare const EMODULE_MISSING: U64;
export declare const EMODULE_NAME_CLASH: U64;
export declare const EPACKAGE_DEP_MISSING: U64;
export declare const EUPGRADE_IMMUTABLE: U64;
export declare const EUPGRADE_WEAKER_POLICY: U64;
export declare class AllowedDep {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    account: HexString;
    module_name: String.String;
    constructor(proto: any, typeTag: TypeTag);
    static AllowedDepParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): AllowedDep;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class ModuleMetadata {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    name: String.String;
    source: U8[];
    source_map: U8[];
    extension: Option.Option;
    constructor(proto: any, typeTag: TypeTag);
    static ModuleMetadataParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): ModuleMetadata;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class PackageDep {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    account: HexString;
    package_name: String.String;
    constructor(proto: any, typeTag: TypeTag);
    static PackageDepParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): PackageDep;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class PackageMetadata {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    name: String.String;
    upgrade_policy: UpgradePolicy;
    upgrade_number: U64;
    source_digest: String.String;
    manifest: U8[];
    modules: ModuleMetadata[];
    deps: PackageDep[];
    extension: Option.Option;
    constructor(proto: any, typeTag: TypeTag);
    static PackageMetadataParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): PackageMetadata;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class PackageRegistry {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    packages: PackageMetadata[];
    constructor(proto: any, typeTag: TypeTag);
    static PackageRegistryParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): PackageRegistry;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<PackageRegistry>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<PackageRegistry>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class UpgradePolicy {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    policy: U8;
    constructor(proto: any, typeTag: TypeTag);
    static UpgradePolicyParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): UpgradePolicy;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function can_change_upgrade_policy_to_(from: UpgradePolicy, to: UpgradePolicy, $c: AptosDataCache): boolean;
export declare function check_coexistence_(old_pack: PackageMetadata, new_modules: String.String[], $c: AptosDataCache): void;
export declare function check_dependencies_(publish_address: HexString, pack: PackageMetadata, $c: AptosDataCache): AllowedDep[];
export declare function check_upgradability_(old_pack: PackageMetadata, new_pack: PackageMetadata, new_modules: String.String[], $c: AptosDataCache): void;
export declare function get_module_names_(pack: PackageMetadata, $c: AptosDataCache): String.String[];
export declare function initialize_(aptos_framework: HexString, package_owner: HexString, metadata: PackageMetadata, $c: AptosDataCache): void;
export declare function is_policy_exempted_address_(addr: HexString, $c: AptosDataCache): boolean;
export declare function publish_package_(owner: HexString, pack: PackageMetadata, code: U8[][], $c: AptosDataCache): void;
export declare function publish_package_txn_(owner: HexString, metadata_serialized: U8[], code: U8[][], $c: AptosDataCache): void;
export declare function buildPayload_publish_package_txn(metadata_serialized: U8[], code: U8[][], isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function request_publish_(owner: HexString, expected_modules: String.String[], bundle: U8[][], policy: U8, $c: AptosDataCache): void;
export declare function request_publish_with_allowed_deps_(owner: HexString, expected_modules: String.String[], allowed_deps: AllowedDep[], bundle: U8[][], policy: U8, $c: AptosDataCache): void;
export declare function upgrade_policy_arbitrary_($c: AptosDataCache): UpgradePolicy;
export declare function upgrade_policy_compat_($c: AptosDataCache): UpgradePolicy;
export declare function upgrade_policy_immutable_($c: AptosDataCache): UpgradePolicy;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get AllowedDep(): typeof AllowedDep;
    get ModuleMetadata(): typeof ModuleMetadata;
    get PackageDep(): typeof PackageDep;
    get PackageMetadata(): typeof PackageMetadata;
    get PackageRegistry(): typeof PackageRegistry;
    loadPackageRegistry(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<PackageRegistry>;
    get UpgradePolicy(): typeof UpgradePolicy;
    payload_publish_package_txn(metadata_serialized: U8[], code: U8[][], isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    publish_package_txn(_account: AptosAccount, metadata_serialized: U8[], code: U8[][], option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
}
//# sourceMappingURL=code.d.ts.map