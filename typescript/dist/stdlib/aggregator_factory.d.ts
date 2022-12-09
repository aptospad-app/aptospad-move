import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U64, U128 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
import * as Aggregator from "./aggregator";
import * as Table from "./table";
export declare const packageName = "AptosFramework";
export declare const moduleAddress: HexString;
export declare const moduleName = "aggregator_factory";
export declare const EAGGREGATOR_FACTORY_NOT_FOUND: U64;
export declare class AggregatorFactory {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    phantom_table: Table.Table;
    constructor(proto: any, typeTag: TypeTag);
    static AggregatorFactoryParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): AggregatorFactory;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<AggregatorFactory>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<AggregatorFactory>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function create_aggregator_(account: HexString, limit: U128, $c: AptosDataCache): Aggregator.Aggregator;
export declare function create_aggregator_internal_(limit: U128, $c: AptosDataCache): Aggregator.Aggregator;
export declare function initialize_aggregator_factory_(aptos_framework: HexString, $c: AptosDataCache): void;
export declare function new_aggregator_(aggregator_factory: AggregatorFactory, limit: U128, $c: AptosDataCache): Aggregator.Aggregator;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get AggregatorFactory(): typeof AggregatorFactory;
    loadAggregatorFactory(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<AggregatorFactory>;
}
//# sourceMappingURL=aggregator_factory.d.ts.map