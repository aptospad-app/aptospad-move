import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U64, U128 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
import * as Option from "./option";
export declare const packageName = "AptosFramework";
export declare const moduleAddress: HexString;
export declare const moduleName = "optional_aggregator";
export declare const EAGGREGATOR_OVERFLOW: U64;
export declare const EAGGREGATOR_UNDERFLOW: U64;
export declare class Integer {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    value: U128;
    limit: U128;
    constructor(proto: any, typeTag: TypeTag);
    static IntegerParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): Integer;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class OptionalAggregator {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    aggregator: Option.Option;
    integer: Option.Option;
    constructor(proto: any, typeTag: TypeTag);
    static OptionalAggregatorParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): OptionalAggregator;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function add_(optional_aggregator: OptionalAggregator, value: U128, $c: AptosDataCache): void;
export declare function add_integer_(integer: Integer, value: U128, $c: AptosDataCache): void;
export declare function destroy_(optional_aggregator: OptionalAggregator, $c: AptosDataCache): void;
export declare function destroy_integer_(integer: Integer, $c: AptosDataCache): void;
export declare function destroy_optional_aggregator_(optional_aggregator: OptionalAggregator, $c: AptosDataCache): U128;
export declare function destroy_optional_integer_(optional_aggregator: OptionalAggregator, $c: AptosDataCache): U128;
export declare function is_parallelizable_(optional_aggregator: OptionalAggregator, $c: AptosDataCache): boolean;
export declare function limit_(integer: Integer, $c: AptosDataCache): U128;
export declare function new___(limit: U128, parallelizable: boolean, $c: AptosDataCache): OptionalAggregator;
export declare function new_integer_(limit: U128, $c: AptosDataCache): Integer;
export declare function read_(optional_aggregator: OptionalAggregator, $c: AptosDataCache): U128;
export declare function read_integer_(integer: Integer, $c: AptosDataCache): U128;
export declare function sub_(optional_aggregator: OptionalAggregator, value: U128, $c: AptosDataCache): void;
export declare function sub_integer_(integer: Integer, value: U128, $c: AptosDataCache): void;
export declare function switch_(optional_aggregator: OptionalAggregator, $c: AptosDataCache): void;
export declare function switch_and_zero_out_(optional_aggregator: OptionalAggregator, $c: AptosDataCache): void;
export declare function switch_to_aggregator_and_zero_out_(optional_aggregator: OptionalAggregator, $c: AptosDataCache): U128;
export declare function switch_to_integer_and_zero_out_(optional_aggregator: OptionalAggregator, $c: AptosDataCache): U128;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get Integer(): typeof Integer;
    get OptionalAggregator(): typeof OptionalAggregator;
}
//# sourceMappingURL=optional_aggregator.d.ts.map