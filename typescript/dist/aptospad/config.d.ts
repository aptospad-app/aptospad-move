import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U8, U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
import * as Stdlib from "../stdlib";
export declare const packageName = "AptosPad";
export declare const moduleAddress: HexString;
export declare const moduleName = "config";
export declare const CAP_100K: U64;
export declare const CAP_10K: U64;
export declare const CAP_190K: U64;
export declare const CAP_200K: U64;
export declare const CAP_20K: U64;
export declare const CAP_300K: U64;
export declare const CAP_400K: U64;
export declare const CAP_40K: U64;
export declare const CAP_500K: U64;
export declare const CAP_50K: U64;
export declare const CAP_80K: U64;
export declare const ERR_EMERGENCY: U64;
export declare const ERR_HARDCAP_REACHED: U64;
export declare const ERR_INITIALIZED: U64;
export declare const ERR_INVALID_CAP: U64;
export declare const ERR_INVALID_RATE: U64;
export declare const ERR_INVALID_SUPPLY: U64;
export declare const ERR_PERMISSIONS: U64;
export declare const ERR_SEASON_ACTIVE: U64;
export declare const ERR_SEASON_ENDED: U64;
export declare const ERR_SEASON_NOT_RESET: U64;
export declare const ERR_SEASON_STATE: U64;
export declare const STATE_BUY: U8;
export declare const STATE_ENDED: U8;
export declare const STATE_INIT: U8;
export declare const STATE_RELEASE: U8;
export declare const STATE_WL: U8;
export declare class ApttSwapConfig {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    emgergency: boolean;
    softCap: U64;
    hardCap: U64;
    refund: boolean;
    aptToApttRate: U64;
    state: U8;
    bypassWhiteList: boolean;
    constructor(proto: any, typeTag: TypeTag);
    static ApttSwapConfigParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): ApttSwapConfig;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<ApttSwapConfig>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<ApttSwapConfig>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class CapsStore {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    signer_cap: Stdlib.Account.SignerCapability;
    mint_cap: Stdlib.Coin.MintCapability;
    burn_cap: Stdlib.Coin.BurnCapability;
    freeze_cap: Stdlib.Coin.FreezeCapability;
    constructor(proto: any, typeTag: TypeTag);
    static CapsStoreParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): CapsStore;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<CapsStore>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<CapsStore>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function getResourceAddr_($c: AptosDataCache): HexString;
export declare function getResourceAddress_($c: AptosDataCache): HexString;
export declare function getResourceSigner_($c: AptosDataCache): HexString;
export declare function getSwapConfig_($c: AptosDataCache): [U64, U64, boolean, U64];
export declare function getSwapConfigAptToApttRate_($c: AptosDataCache): U64;
export declare function getSwapConfigEnableRefund_($c: AptosDataCache): boolean;
export declare function getSwapConfigHardCap_($c: AptosDataCache): U64;
export declare function getSwapConfigSoftCap_($c: AptosDataCache): U64;
export declare function getSwapState_($c: AptosDataCache): U8;
export declare function initializeAptosPad_(aptospadAdmin: HexString, padAptosFund: U64, $c: AptosDataCache): void;
export declare function isBypassWhiteList_($c: AptosDataCache): boolean;
export declare function isEmergency_($c: AptosDataCache): boolean;
export declare function mintAtppTo_(investor: HexString, amount: U64, $c: AptosDataCache): void;
export declare function setApttSwapConfig_(aptospadAdmin: HexString, softCap: U64, hardCap: U64, refund: boolean, aptToApttRate: U64, bypassWhitelist: boolean, $c: AptosDataCache): void;
export declare function setApttSwapConfigV2_(aptospadAdmin: HexString, softCap: U64, hardCap: U64, refund: boolean, aptToApttRate: U64, bypassWhitelist: boolean, $c: AptosDataCache): void;
export declare function setBypassWhitelist_(aptospadAdmin: HexString, bypass: boolean, $c: AptosDataCache): void;
export declare function setEmergency_(aptospadAdmin: HexString, emergency: boolean, $c: AptosDataCache): void;
export declare function setSwapState_(state: U8, $c: AptosDataCache): void;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get ApttSwapConfig(): typeof ApttSwapConfig;
    loadApttSwapConfig(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<ApttSwapConfig>;
    get CapsStore(): typeof CapsStore;
    loadCapsStore(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<CapsStore>;
}
//# sourceMappingURL=config.d.ts.map