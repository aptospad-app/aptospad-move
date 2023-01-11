import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U8, U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
import * as Stdlib from "../stdlib";
import * as Iterable_table from "./iterable_table";
export declare const packageName = "AptosPad";
export declare const moduleAddress: HexString;
export declare const moduleName = "aptospad_swap";
export declare const DEFAULT_CAP_1K: U64;
export declare const DEFAULT_OVERFLOW_100: U64;
export declare const ERR_BID_OVERFLOW: U64;
export declare const ERR_EMERGENCY: U64;
export declare const ERR_HARDCAP_REACHED: U64;
export declare const ERR_NOT_IN_WHITELIST: U64;
export declare const ERR_PERMISSIONS: U64;
export declare const ERR_SEASON_ACTIVE: U64;
export declare const ERR_SEASON_ENDED: U64;
export declare const ERR_SEASON_NOT_RESET: U64;
export declare const ERR_SEASON_STATE: U64;
export declare const REFUND_CHARGE_RATE_PER_100K: U64;
export declare const STATE_DISTRIBUTE: U8;
export declare const STATE_DISTRIBUTE2: U8;
export declare const STATE_ENDED: U8;
export declare const STATE_INIT: U8;
export declare const STATE_LAUNCHPAD: U8;
export declare const STATE_WL: U8;
export declare class BidAptosPadEvent {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    cap: U64;
    bid: U64;
    investor: HexString;
    constructor(proto: any, typeTag: TypeTag);
    static BidAptosPadEventParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): BidAptosPadEvent;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class DistributeAptospadEvent {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    cap: U64;
    bid: U64;
    distributedToken: U64;
    refund: U64;
    investor: HexString;
    constructor(proto: any, typeTag: TypeTag);
    static DistributeAptospadEventParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): DistributeAptospadEvent;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class LaunchPadRegistry {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    investors: Iterable_table.IterableTable;
    totalBid: U64;
    bidaptospad_events: Stdlib.Event.EventHandle;
    distributeaptospad_events: Stdlib.Event.EventHandle;
    whitelist_events: Stdlib.Event.EventHandle;
    constructor(proto: any, typeTag: TypeTag);
    static LaunchPadRegistryParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): LaunchPadRegistry;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<LaunchPadRegistry>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<LaunchPadRegistry>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class TokenDistribute {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    cap: U64;
    bid: U64;
    distributed: U64;
    distributedToken: U64;
    refund: U64;
    investor: HexString;
    constructor(proto: any, typeTag: TypeTag);
    static TokenDistributeParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): TokenDistribute;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<TokenDistribute>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<TokenDistribute>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class WhiteListEvent {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    cap: U64;
    bid: U64;
    distributed: U64;
    distributedToken: U64;
    refund: U64;
    investor: HexString;
    constructor(proto: any, typeTag: TypeTag);
    static WhiteListEventParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): WhiteListEvent;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function addWhiteList_(aptospadAdmin: HexString, account: HexString, cap: U64, $c: AptosDataCache): void;
export declare function assert_admin_(aptosAdmin: HexString, $c: AptosDataCache): void;
export declare function assert_no_emergency_($c: AptosDataCache): void;
export declare function bidAptosPad_(user: HexString, aptosAmount: U64, $c: AptosDataCache): void;
export declare function bidAptosPadV2_(user: HexString, aptosAmount: U64, $c: AptosDataCache): void;
export declare function bidAptosPadV3_(user: HexString, aptosAmount: U64, $c: AptosDataCache): void;
export declare function bidAptosPadV4_(user: HexString, aptosAmount: U64, $c: AptosDataCache): void;
export declare function bidAptosPadV5_(user: HexString, aptosAmount: U64, $c: AptosDataCache): void;
export declare function checkBidOverflow_(_bid: U64, _cap: U64, $c: AptosDataCache): void;
export declare function distributeAll_($c: AptosDataCache): void;
export declare function distributeAllV2_($c: AptosDataCache): void;
export declare function distributeAllV3_($c: AptosDataCache): void;
export declare function distributeAtpp_($c: AptosDataCache): void;
export declare function distributeAtppV2_($c: AptosDataCache): void;
export declare function distributeAtppV3_($c: AptosDataCache): void;
export declare function distributePerAccount_(poolBill: TokenDistribute, toPadRate: U64, moreAptAllocated: U64, $c: AptosDataCache): void;
export declare function distributePerAccountV2_(poolBill: TokenDistribute, toPadRate: U64, moreAptAllocated: U64, $c: AptosDataCache): void;
export declare function distributeSeason_(account: HexString, $c: AptosDataCache): void;
export declare function distributeSeasonV2_(account: HexString, $c: AptosDataCache): void;
export declare function distributeSeasonV3_(account: HexString, $c: AptosDataCache): void;
export declare function getSwapTotalBid_($c: AptosDataCache): U64;
export declare function getWhiteList_(account: HexString, $c: AptosDataCache): [U64, U64, U64, U64, U64];
export declare function getWhiteLists_($c: AptosDataCache): HexString[];
export declare function initialize_(account: HexString, $c: AptosDataCache): void;
export declare function launchPadSeason_(account: HexString, $c: AptosDataCache): void;
export declare function payCoinAndRefund_($c: AptosDataCache): void;
export declare function paycoinAndRefund_(account: HexString, $c: AptosDataCache): void;
export declare function refundAll_($c: AptosDataCache): void;
export declare function refundAllV2_($c: AptosDataCache): void;
export declare function refundAllV3_($c: AptosDataCache): void;
export declare function refundAptos_(resourceSigner: HexString, investor: HexString, bidAmt: U64, $c: AptosDataCache): void;
export declare function refundAptosV2_(resourceSigner: HexString, poolBill: TokenDistribute, moreRefundAptAmt: U64, $c: AptosDataCache): void;
export declare function refundAptosV3_(_resourceSigner: HexString, poolBill: TokenDistribute, moreRefundAptAmt: U64, $c: AptosDataCache): void;
export declare function resetSeason_(account: HexString, $c: AptosDataCache): void;
export declare function whiteListSeason_(account: HexString, $c: AptosDataCache): void;
export declare function withdrawAptos_(admin: HexString, debit: HexString, amount: U64, $c: AptosDataCache): void;
export declare function withdrawAptosPad_(admin: HexString, debit: HexString, amount: U64, $c: AptosDataCache): void;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get BidAptosPadEvent(): typeof BidAptosPadEvent;
    get DistributeAptospadEvent(): typeof DistributeAptospadEvent;
    get LaunchPadRegistry(): typeof LaunchPadRegistry;
    loadLaunchPadRegistry(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<LaunchPadRegistry>;
    get TokenDistribute(): typeof TokenDistribute;
    loadTokenDistribute(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<TokenDistribute>;
    get WhiteListEvent(): typeof WhiteListEvent;
}
//# sourceMappingURL=aptospad_swap.d.ts.map