import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U8, U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { OptionTransaction } from "@manahippo/move-to-ts";
import { HexString, AptosClient, AptosAccount, TxnBuilderTypes, Types } from "aptos";
import * as Coin from "./coin";
export declare const packageName = "AptosFramework";
export declare const moduleAddress: HexString;
export declare const moduleName = "managed_coin";
export declare const ENO_CAPABILITIES: U64;
export declare class Capabilities {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    burn_cap: Coin.BurnCapability;
    freeze_cap: Coin.FreezeCapability;
    mint_cap: Coin.MintCapability;
    constructor(proto: any, typeTag: TypeTag);
    static CapabilitiesParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): Capabilities;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<Capabilities>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<Capabilities>;
    static makeTag($p: TypeTag[]): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function burn_(account: HexString, amount: U64, $c: AptosDataCache, $p: TypeTag[]): void;
export declare function buildPayload_burn(amount: U64, $p: TypeTag[], /* <CoinType>*/ isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function initialize_(account: HexString, name: U8[], symbol: U8[], decimals: U8, monitor_supply: boolean, $c: AptosDataCache, $p: TypeTag[]): void;
export declare function buildPayload_initialize(name: U8[], symbol: U8[], decimals: U8, monitor_supply: boolean, $p: TypeTag[], /* <CoinType>*/ isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function mint_(account: HexString, dst_addr: HexString, amount: U64, $c: AptosDataCache, $p: TypeTag[]): void;
export declare function buildPayload_mint(dst_addr: HexString, amount: U64, $p: TypeTag[], /* <CoinType>*/ isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function register_(account: HexString, $c: AptosDataCache, $p: TypeTag[]): void;
export declare function buildPayload_register($p: TypeTag[], /* <CoinType>*/ isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get Capabilities(): typeof Capabilities;
    loadCapabilities(owner: HexString, $p: TypeTag[], /* <CoinType> */ loadFull?: boolean, fillCache?: boolean): Promise<Capabilities>;
    payload_burn(amount: U64, $p: TypeTag[], /* <CoinType>*/ isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    burn(_account: AptosAccount, amount: U64, $p: TypeTag[], /* <CoinType>*/ option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
    payload_initialize(name: U8[], symbol: U8[], decimals: U8, monitor_supply: boolean, $p: TypeTag[], /* <CoinType>*/ isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    initialize(_account: AptosAccount, name: U8[], symbol: U8[], decimals: U8, monitor_supply: boolean, $p: TypeTag[], /* <CoinType>*/ option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
    payload_mint(dst_addr: HexString, amount: U64, $p: TypeTag[], /* <CoinType>*/ isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    mint(_account: AptosAccount, dst_addr: HexString, amount: U64, $p: TypeTag[], /* <CoinType>*/ option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
    payload_register($p: TypeTag[], /* <CoinType>*/ isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    register(_account: AptosAccount, $p: TypeTag[], /* <CoinType>*/ option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
}
//# sourceMappingURL=managed_coin.d.ts.map