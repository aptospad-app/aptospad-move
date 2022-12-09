import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
export declare const packageName = "AptosStdlib";
export declare const moduleAddress: HexString;
export declare const moduleName = "capability";
export declare const ECAPABILITY_ALREADY_EXISTS: U64;
export declare const ECAPABILITY_NOT_FOUND: U64;
export declare const EDELEGATE: U64;
export declare class Cap {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    root: HexString;
    constructor(proto: any, typeTag: TypeTag);
    static CapParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): Cap;
    static makeTag($p: TypeTag[]): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class CapDelegateState {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    root: HexString;
    constructor(proto: any, typeTag: TypeTag);
    static CapDelegateStateParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): CapDelegateState;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<CapDelegateState>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<CapDelegateState>;
    static makeTag($p: TypeTag[]): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class CapState {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    delegates: HexString[];
    constructor(proto: any, typeTag: TypeTag);
    static CapStateParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): CapState;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<CapState>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<CapState>;
    static makeTag($p: TypeTag[]): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class LinearCap {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    root: HexString;
    constructor(proto: any, typeTag: TypeTag);
    static LinearCapParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): LinearCap;
    static makeTag($p: TypeTag[]): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function acquire_(requester: HexString, _feature_witness: any, $c: AptosDataCache, $p: TypeTag[]): Cap;
export declare function acquire_linear_(requester: HexString, _feature_witness: any, $c: AptosDataCache, $p: TypeTag[]): LinearCap;
export declare function add_element_(v: any[], x: any, $c: AptosDataCache, $p: TypeTag[]): void;
export declare function create_(owner: HexString, _feature_witness: any, $c: AptosDataCache, $p: TypeTag[]): void;
export declare function delegate_(cap: Cap, _feature_witness: any, to: HexString, $c: AptosDataCache, $p: TypeTag[]): void;
export declare function linear_root_addr_(cap: LinearCap, _feature_witness: any, $c: AptosDataCache, $p: TypeTag[]): HexString;
export declare function remove_element_(v: any[], x: any, $c: AptosDataCache, $p: TypeTag[]): void;
export declare function revoke_(cap: Cap, _feature_witness: any, from: HexString, $c: AptosDataCache, $p: TypeTag[]): void;
export declare function root_addr_(cap: Cap, _feature_witness: any, $c: AptosDataCache, $p: TypeTag[]): HexString;
export declare function validate_acquire_(requester: HexString, $c: AptosDataCache, $p: TypeTag[]): HexString;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get Cap(): typeof Cap;
    get CapDelegateState(): typeof CapDelegateState;
    loadCapDelegateState(owner: HexString, $p: TypeTag[], /* <Feature> */ loadFull?: boolean, fillCache?: boolean): Promise<CapDelegateState>;
    get CapState(): typeof CapState;
    loadCapState(owner: HexString, $p: TypeTag[], /* <Feature> */ loadFull?: boolean, fillCache?: boolean): Promise<CapState>;
    get LinearCap(): typeof LinearCap;
}
//# sourceMappingURL=capability.d.ts.map