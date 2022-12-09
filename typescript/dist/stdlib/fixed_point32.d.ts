import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U64, U128 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
export declare const packageName = "MoveStdlib";
export declare const moduleAddress: HexString;
export declare const moduleName = "fixed_point32";
export declare const EDENOMINATOR: U64;
export declare const EDIVISION: U64;
export declare const EDIVISION_BY_ZERO: U64;
export declare const EMULTIPLICATION: U64;
export declare const ERATIO_OUT_OF_RANGE: U64;
export declare const MAX_U64: U128;
export declare class FixedPoint32 {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    value: U64;
    constructor(proto: any, typeTag: TypeTag);
    static FixedPoint32Parser(data: any, typeTag: TypeTag, repo: AptosParserRepo): FixedPoint32;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function create_from_rational_(numerator: U64, denominator: U64, $c: AptosDataCache): FixedPoint32;
export declare function create_from_raw_value_(value: U64, $c: AptosDataCache): FixedPoint32;
export declare function divide_u64_(val: U64, divisor: FixedPoint32, $c: AptosDataCache): U64;
export declare function get_raw_value_(num: FixedPoint32, $c: AptosDataCache): U64;
export declare function is_zero_(num: FixedPoint32, $c: AptosDataCache): boolean;
export declare function multiply_u64_(val: U64, multiplier: FixedPoint32, $c: AptosDataCache): U64;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get FixedPoint32(): typeof FixedPoint32;
}
//# sourceMappingURL=fixed_point32.d.ts.map