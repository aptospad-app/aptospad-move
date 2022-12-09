import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U8, U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
export declare const packageName = "MoveStdlib";
export declare const moduleAddress: HexString;
export declare const moduleName = "features";
export declare const CODE_DEPENDENCY_CHECK: U64;
export declare const EFRAMEWORK_SIGNER_NEEDED: U64;
export declare const TREAT_FRIEND_AS_PRIVATE: U64;
export declare class Features {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    features: U8[];
    constructor(proto: any, typeTag: TypeTag);
    static FeaturesParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): Features;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<Features>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<Features>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function change_feature_flags_(framework: HexString, enable: U64[], disable: U64[], $c: AptosDataCache): void;
export declare function code_dependency_check_enabled_($c: AptosDataCache): boolean;
export declare function contains_(features: U8[], feature: U64, $c: AptosDataCache): boolean;
export declare function is_enabled_(feature: U64, $c: AptosDataCache): boolean;
export declare function set_(features: U8[], feature: U64, include: boolean, $c: AptosDataCache): void;
export declare function treat_friend_as_private_($c: AptosDataCache): boolean;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get Features(): typeof Features;
    loadFeatures(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<Features>;
}
//# sourceMappingURL=features.d.ts.map