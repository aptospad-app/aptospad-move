import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { OptionTransaction } from "@manahippo/move-to-ts";
import { HexString, AptosClient, AptosAccount, TxnBuilderTypes, Types } from "aptos";
export declare const packageName = "AptosFramework";
export declare const moduleAddress: HexString;
export declare const moduleName = "version";
export declare const EINVALID_MAJOR_VERSION_NUMBER: U64;
export declare const ENOT_AUTHORIZED: U64;
export declare class SetVersionCapability {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    constructor(proto: any, typeTag: TypeTag);
    static SetVersionCapabilityParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): SetVersionCapability;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<SetVersionCapability>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<SetVersionCapability>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class Version {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    major: U64;
    constructor(proto: any, typeTag: TypeTag);
    static VersionParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): Version;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<Version>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<Version>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function initialize_(aptos_framework: HexString, initial_version: U64, $c: AptosDataCache): void;
export declare function initialize_for_test_(core_resources: HexString, $c: AptosDataCache): void;
export declare function set_version_(account: HexString, major: U64, $c: AptosDataCache): void;
export declare function buildPayload_set_version(major: U64, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get SetVersionCapability(): typeof SetVersionCapability;
    loadSetVersionCapability(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<SetVersionCapability>;
    get Version(): typeof Version;
    loadVersion(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<Version>;
    payload_set_version(major: U64, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    set_version(_account: AptosAccount, major: U64, option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
}
//# sourceMappingURL=version.d.ts.map