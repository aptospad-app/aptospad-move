import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U8, U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
import * as Guid from "./guid";
export declare const packageName = "AptosFramework";
export declare const moduleAddress: HexString;
export declare const moduleName = "event";
export declare class EventHandle {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    counter: U64;
    guid: Guid.GUID;
    constructor(proto: any, typeTag: TypeTag);
    static EventHandleParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): EventHandle;
    static makeTag($p: TypeTag[]): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function counter_(handle_ref: EventHandle, $c: AptosDataCache, $p: TypeTag[]): U64;
export declare function destroy_handle_(handle: EventHandle, $c: AptosDataCache, $p: TypeTag[]): void;
export declare function emit_event_(handle_ref: EventHandle, msg: any, $c: AptosDataCache, $p: TypeTag[]): void;
export declare function guid_(handle_ref: EventHandle, $c: AptosDataCache, $p: TypeTag[]): Guid.GUID;
export declare function new_event_handle_(guid: Guid.GUID, $c: AptosDataCache, $p: TypeTag[]): EventHandle;
export declare function write_to_event_store_(guid: U8[], count: U64, msg: any, $c: AptosDataCache, $p: TypeTag[]): void;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get EventHandle(): typeof EventHandle;
}
//# sourceMappingURL=event.d.ts.map