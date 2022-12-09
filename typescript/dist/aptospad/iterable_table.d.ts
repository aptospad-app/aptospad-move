import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
import * as Stdlib from "../stdlib";
export declare const packageName = "AptosPad";
export declare const moduleAddress: HexString;
export declare const moduleName = "iterable_table";
export declare class IterableTable {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    inner: Stdlib.Table_with_length.TableWithLength;
    head: Stdlib.Option.Option;
    tail: Stdlib.Option.Option;
    constructor(proto: any, typeTag: TypeTag);
    static IterableTableParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): IterableTable;
    static makeTag($p: TypeTag[]): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class IterableValue {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    val: any;
    prev: Stdlib.Option.Option;
    next: Stdlib.Option.Option;
    constructor(proto: any, typeTag: TypeTag);
    static IterableValueParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): IterableValue;
    static makeTag($p: TypeTag[]): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function add_(table: IterableTable, key: any, val: any, $c: AptosDataCache, $p: TypeTag[]): void;
export declare function append_(v1: IterableTable, v2: IterableTable, $c: AptosDataCache, $p: TypeTag[]): void;
export declare function borrow_(table: IterableTable, key: any, $c: AptosDataCache, $p: TypeTag[]): any;
export declare function borrow_iter_(table: IterableTable, key: any, $c: AptosDataCache, $p: TypeTag[]): [any, Stdlib.Option.Option, Stdlib.Option.Option];
export declare function borrow_iter_mut_(table: IterableTable, key: any, $c: AptosDataCache, $p: TypeTag[]): [any, Stdlib.Option.Option, Stdlib.Option.Option];
export declare function borrow_mut_(table: IterableTable, key: any, $c: AptosDataCache, $p: TypeTag[]): any;
export declare function borrow_mut_with_default_(table: IterableTable, key: any, default__: any, $c: AptosDataCache, $p: TypeTag[]): any;
export declare function contains_(table: IterableTable, key: any, $c: AptosDataCache, $p: TypeTag[]): boolean;
export declare function destroy_empty_(table: IterableTable, $c: AptosDataCache, $p: TypeTag[]): void;
export declare function empty_(table: IterableTable, $c: AptosDataCache, $p: TypeTag[]): boolean;
export declare function head_key_(table: IterableTable, $c: AptosDataCache, $p: TypeTag[]): Stdlib.Option.Option;
export declare function length_(table: IterableTable, $c: AptosDataCache, $p: TypeTag[]): U64;
export declare function new___($c: AptosDataCache, $p: TypeTag[]): IterableTable;
export declare function remove_(table: IterableTable, key: any, $c: AptosDataCache, $p: TypeTag[]): any;
export declare function remove_iter_(table: IterableTable, key: any, $c: AptosDataCache, $p: TypeTag[]): [any, Stdlib.Option.Option, Stdlib.Option.Option];
export declare function tail_key_(table: IterableTable, $c: AptosDataCache, $p: TypeTag[]): Stdlib.Option.Option;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get IterableTable(): typeof IterableTable;
    get IterableValue(): typeof IterableValue;
}
//# sourceMappingURL=iterable_table.d.ts.map