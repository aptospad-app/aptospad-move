import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
import * as Coin from "./coin";
export declare const packageName = "AptosFramework";
export declare const moduleAddress: HexString;
export declare const moduleName = "transaction_fee";
export declare class AptosCoinCapabilities {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    burn_cap: Coin.BurnCapability;
    constructor(proto: any, typeTag: TypeTag);
    static AptosCoinCapabilitiesParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): AptosCoinCapabilities;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<AptosCoinCapabilities>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<AptosCoinCapabilities>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function burn_fee_(account: HexString, fee: U64, $c: AptosDataCache): void;
export declare function store_aptos_coin_burn_cap_(aptos_framework: HexString, burn_cap: Coin.BurnCapability, $c: AptosDataCache): void;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get AptosCoinCapabilities(): typeof AptosCoinCapabilities;
    loadAptosCoinCapabilities(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<AptosCoinCapabilities>;
}
//# sourceMappingURL=transaction_fee.d.ts.map