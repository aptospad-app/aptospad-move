import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U8, U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { OptionTransaction } from "@manahippo/move-to-ts";
import { HexString, AptosClient, AptosAccount, TxnBuilderTypes, Types } from "aptos";
import * as Stdlib from "../stdlib";
export declare const packageName = "AptosPadCoinBoot";
export declare const moduleAddress: HexString;
export declare const moduleName = "aptospad_coin_boot";
export declare const ERR_PERMISSIONS: U64;
export declare class BootResourceSignerStore {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    resource_signer_cap: Stdlib.Account.SignerCapability;
    constructor(proto: any, typeTag: TypeTag);
    static BootResourceSignerStoreParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): BootResourceSignerStore;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<BootResourceSignerStore>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<BootResourceSignerStore>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function initializeWithResourceAccount_(aptospadAdmin: HexString, metadata: U8[], byteCode: U8[], $c: AptosDataCache): void;
export declare function buildPayload_initializeWithResourceAccount(metadata: U8[], byteCode: U8[], isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function retrieveResourceSignerCap_(aptospadAdmin: HexString, $c: AptosDataCache): Stdlib.Account.SignerCapability;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get BootResourceSignerStore(): typeof BootResourceSignerStore;
    loadBootResourceSignerStore(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<BootResourceSignerStore>;
    payload_initializeWithResourceAccount(metadata: U8[], byteCode: U8[], isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    initializeWithResourceAccount(_account: AptosAccount, metadata: U8[], byteCode: U8[], option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
}
//# sourceMappingURL=aptospad_coin_boot.d.ts.map