import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U64, U128 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
export declare const packageName = "AptosFramework";
export declare const moduleAddress: HexString;
export declare const moduleName = "aggregator";
export declare const EAGGREGATOR_OVERFLOW: U64;
export declare const EAGGREGATOR_UNDERFLOW: U64;
export declare const ENOT_SUPPORTED: U64;
export declare class Aggregator {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    handle: HexString;
    key: HexString;
    limit: U128;
    constructor(proto: any, typeTag: TypeTag);
    static AggregatorParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): Aggregator;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function add_(aggregator: Aggregator, value: U128, $c: AptosDataCache): void;
export declare function destroy_(aggregator: Aggregator, $c: AptosDataCache): void;
export declare function limit_(aggregator: Aggregator, $c: AptosDataCache): U128;
export declare function read_(aggregator: Aggregator, $c: AptosDataCache): U128;
export declare function sub_(aggregator: Aggregator, value: U128, $c: AptosDataCache): void;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get Aggregator(): typeof Aggregator;
}
//# sourceMappingURL=aggregator.d.ts.map