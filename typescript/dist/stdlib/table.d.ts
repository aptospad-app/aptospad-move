import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
export declare const packageName = "AptosStdlib";
export declare const moduleAddress: HexString;
export declare const moduleName = "table";
export declare class Box {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    val: any;
    constructor(proto: any, typeTag: TypeTag);
    static BoxParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): Box;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<Box>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<Box>;
    static makeTag($p: TypeTag[]): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class Table {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    handle: HexString;
    constructor(proto: any, typeTag: TypeTag);
    static TableParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): Table;
    static makeTag($p: TypeTag[]): StructTag;
    toTypedTable<K = any, V = any>(): TypedTable<K, V>;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function add_(table: Table, key: any, val: any, $c: AptosDataCache, $p: TypeTag[]): void;
export declare function add_box_(table: Table, key: any, val: Box, $c: AptosDataCache, $p: TypeTag[]): void;
export declare function borrow_(table: Table, key: any, $c: AptosDataCache, $p: TypeTag[]): any;
export declare function borrow_box_(table: Table, key: any, $c: AptosDataCache, $p: TypeTag[]): Box;
export declare function borrow_box_mut_(table: Table, key: any, $c: AptosDataCache, $p: TypeTag[]): Box;
export declare function borrow_mut_(table: Table, key: any, $c: AptosDataCache, $p: TypeTag[]): any;
export declare function borrow_mut_with_default_(table: Table, key: any, default__: any, $c: AptosDataCache, $p: TypeTag[]): any;
export declare function contains_(table: Table, key: any, $c: AptosDataCache, $p: TypeTag[]): boolean;
export declare function contains_box_(table: Table, key: any, $c: AptosDataCache, $p: TypeTag[]): boolean;
export declare function destroy_(table: Table, $c: AptosDataCache, $p: TypeTag[]): void;
export declare function destroy_empty_box_(table: Table, $c: AptosDataCache, $p: TypeTag[]): void;
export declare function drop_unchecked_box_(table: Table, $c: AptosDataCache, $p: TypeTag[]): void;
export declare function new___($c: AptosDataCache, $p: TypeTag[]): Table;
export declare function new_table_handle_($c: AptosDataCache, $p: TypeTag[]): HexString;
export declare function remove_(table: Table, key: any, $c: AptosDataCache, $p: TypeTag[]): any;
export declare function remove_box_(table: Table, key: any, $c: AptosDataCache, $p: TypeTag[]): Box;
export declare function upsert_(table: Table, key: any, value: any, $c: AptosDataCache, $p: TypeTag[]): void;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get Box(): typeof Box;
    loadBox(owner: HexString, $p: TypeTag[], /* <V> */ loadFull?: boolean, fillCache?: boolean): Promise<Box>;
    get Table(): typeof Table;
}
export declare class TypedTable<K = any, V = any> {
    table: Table;
    keyTag: TypeTag;
    valueTag: TypeTag;
    static fromTable<K = any, V = any>(table: Table): TypedTable<K, V>;
    constructor(table: Table, keyTag: TypeTag, valueTag: TypeTag);
    loadEntryRaw(client: AptosClient, key: K): Promise<any>;
    loadEntry(client: AptosClient, repo: AptosParserRepo, key: K): Promise<V>;
}
//# sourceMappingURL=table.d.ts.map