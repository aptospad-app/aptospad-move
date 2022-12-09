import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { OptionTransaction } from "@manahippo/move-to-ts";
import { HexString, AptosClient, AptosAccount, TxnBuilderTypes, Types } from "aptos";
import * as Coin from "./coin";
import * as Option from "./option";
export declare const packageName = "AptosFramework";
export declare const moduleAddress: HexString;
export declare const moduleName = "aptos_coin";
export declare const EALREADY_DELEGATED: U64;
export declare const EDELEGATION_NOT_FOUND: U64;
export declare const ENO_CAPABILITIES: U64;
export declare class AptosCoin {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    constructor(proto: any, typeTag: TypeTag);
    static AptosCoinParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): AptosCoin;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<AptosCoin>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<AptosCoin>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class DelegatedMintCapability {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    to: HexString;
    constructor(proto: any, typeTag: TypeTag);
    static DelegatedMintCapabilityParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): DelegatedMintCapability;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class Delegations {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    inner: DelegatedMintCapability[];
    constructor(proto: any, typeTag: TypeTag);
    static DelegationsParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): Delegations;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<Delegations>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<Delegations>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class MintCapStore {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    mint_cap: Coin.MintCapability;
    constructor(proto: any, typeTag: TypeTag);
    static MintCapStoreParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): MintCapStore;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<MintCapStore>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<MintCapStore>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function claim_mint_capability_(account: HexString, $c: AptosDataCache): void;
export declare function buildPayload_claim_mint_capability(isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function configure_accounts_for_test_(aptos_framework: HexString, core_resources: HexString, mint_cap: Coin.MintCapability, $c: AptosDataCache): void;
export declare function delegate_mint_capability_(account: HexString, to: HexString, $c: AptosDataCache): void;
export declare function buildPayload_delegate_mint_capability(to: HexString, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function destroy_mint_cap_(aptos_framework: HexString, $c: AptosDataCache): void;
export declare function find_delegation_(addr: HexString, $c: AptosDataCache): Option.Option;
export declare function has_mint_capability_(account: HexString, $c: AptosDataCache): boolean;
export declare function initialize_(aptos_framework: HexString, $c: AptosDataCache): [Coin.BurnCapability, Coin.MintCapability];
export declare function mint_(account: HexString, dst_addr: HexString, amount: U64, $c: AptosDataCache): void;
export declare function buildPayload_mint(dst_addr: HexString, amount: U64, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get AptosCoin(): typeof AptosCoin;
    loadAptosCoin(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<AptosCoin>;
    get DelegatedMintCapability(): typeof DelegatedMintCapability;
    get Delegations(): typeof Delegations;
    loadDelegations(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<Delegations>;
    get MintCapStore(): typeof MintCapStore;
    loadMintCapStore(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<MintCapStore>;
    payload_claim_mint_capability(isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    claim_mint_capability(_account: AptosAccount, option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
    payload_delegate_mint_capability(to: HexString, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    delegate_mint_capability(_account: AptosAccount, to: HexString, option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
    payload_mint(dst_addr: HexString, amount: U64, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    mint(_account: AptosAccount, dst_addr: HexString, amount: U64, option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
}
//# sourceMappingURL=aptos_coin.d.ts.map