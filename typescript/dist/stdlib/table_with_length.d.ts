import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
import * as Table from "./table";
export declare const packageName = "AptosStdlib";
export declare const moduleAddress: HexString;
export declare const moduleName = "table_with_length";
export declare const EALREADY_EXISTS: U64;
export declare const ENOT_EMPTY: U64;
export declare const ENOT_FOUND: U64;
export declare class TableWithLength {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    inner: Table.Table;
    length: U64;
    constructor(proto: any, typeTag: TypeTag);
    static TableWithLengthParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): TableWithLength;
    static makeTag($p: TypeTag[]): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function add_(table: TableWithLength, key: any, val: any, $c: AptosDataCache, $p: TypeTag[]): void;
export declare function borrow_(table: TableWithLength, key: any, $c: AptosDataCache, $p: TypeTag[]): any;
export declare function borrow_mut_(table: TableWithLength, key: any, $c: AptosDataCache, $p: TypeTag[]): any;
export declare function borrow_mut_with_default_(table: TableWithLength, key: any, default__: any, $c: AptosDataCache, $p: TypeTag[]): any;
export declare function contains_(table: TableWithLength, key: any, $c: AptosDataCache, $p: TypeTag[]): boolean;
export declare function destroy_empty_(table: TableWithLength, $c: AptosDataCache, $p: TypeTag[]): void;
export declare function empty_(table: TableWithLength, $c: AptosDataCache, $p: TypeTag[]): boolean;
export declare function length_(table: TableWithLength, $c: AptosDataCache, $p: TypeTag[]): U64;
export declare function new___($c: AptosDataCache, $p: TypeTag[]): TableWithLength;
export declare function remove_(table: TableWithLength, key: any, $c: AptosDataCache, $p: TypeTag[]): any;
export declare function upsert_(table: TableWithLength, key: any, value: any, $c: AptosDataCache, $p: TypeTag[]): void;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get TableWithLength(): typeof TableWithLength;
}
//# sourceMappingURL=table_with_length.d.ts.map