import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U8, U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { OptionTransaction } from "@manahippo/move-to-ts";
import { HexString, AptosClient, AptosAccount, TxnBuilderTypes, Types } from "aptos";
import * as Account from "./account";
import * as Simple_map from "./simple_map";
export declare const packageName = "AptosFramework";
export declare const moduleAddress: HexString;
export declare const moduleName = "resource_account";
export declare const ECONTAINER_NOT_PUBLISHED: U64;
export declare const ZERO_AUTH_KEY: U8[];
export declare class Container {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    store: Simple_map.SimpleMap;
    constructor(proto: any, typeTag: TypeTag);
    static ContainerParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): Container;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<Container>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<Container>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function create_resource_account_(origin: HexString, seed: U8[], optional_auth_key: U8[], $c: AptosDataCache): void;
export declare function buildPayload_create_resource_account(seed: U8[], optional_auth_key: U8[], isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function create_resource_account_and_fund_(origin: HexString, seed: U8[], optional_auth_key: U8[], fund_amount: U64, $c: AptosDataCache): void;
export declare function buildPayload_create_resource_account_and_fund(seed: U8[], optional_auth_key: U8[], fund_amount: U64, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function create_resource_account_and_publish_package_(origin: HexString, seed: U8[], metadata_serialized: U8[], code: U8[][], $c: AptosDataCache): void;
export declare function buildPayload_create_resource_account_and_publish_package(seed: U8[], metadata_serialized: U8[], code: U8[][], isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function retrieve_resource_account_cap_(resource: HexString, source_addr: HexString, $c: AptosDataCache): Account.SignerCapability;
export declare function rotate_account_authentication_key_and_store_capability_(origin: HexString, resource: HexString, resource_signer_cap: Account.SignerCapability, optional_auth_key: U8[], $c: AptosDataCache): void;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get Container(): typeof Container;
    loadContainer(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<Container>;
    payload_create_resource_account(seed: U8[], optional_auth_key: U8[], isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    create_resource_account(_account: AptosAccount, seed: U8[], optional_auth_key: U8[], option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
    payload_create_resource_account_and_fund(seed: U8[], optional_auth_key: U8[], fund_amount: U64, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    create_resource_account_and_fund(_account: AptosAccount, seed: U8[], optional_auth_key: U8[], fund_amount: U64, option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
    payload_create_resource_account_and_publish_package(seed: U8[], metadata_serialized: U8[], code: U8[][], isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    create_resource_account_and_publish_package(_account: AptosAccount, seed: U8[], metadata_serialized: U8[], code: U8[][], option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
}
//# sourceMappingURL=resource_account.d.ts.map