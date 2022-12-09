import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U8, U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
import * as Event from "./event";
export declare const packageName = "AptosFramework";
export declare const moduleAddress: HexString;
export declare const moduleName = "block";
export declare const EINVALID_PROPOSER: U64;
export declare const ENUM_NEW_BLOCK_EVENTS_DOES_NOT_MATCH_BLOCK_HEIGHT: U64;
export declare const EZERO_EPOCH_INTERVAL: U64;
export declare const MAX_U64: U64;
export declare class BlockResource {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    height: U64;
    epoch_interval: U64;
    new_block_events: Event.EventHandle;
    update_epoch_interval_events: Event.EventHandle;
    constructor(proto: any, typeTag: TypeTag);
    static BlockResourceParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): BlockResource;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<BlockResource>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<BlockResource>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class NewBlockEvent {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    hash: HexString;
    epoch: U64;
    round: U64;
    height: U64;
    previous_block_votes_bitvec: U8[];
    proposer: HexString;
    failed_proposer_indices: U64[];
    time_microseconds: U64;
    constructor(proto: any, typeTag: TypeTag);
    static NewBlockEventParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): NewBlockEvent;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class UpdateEpochIntervalEvent {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    old_epoch_interval: U64;
    new_epoch_interval: U64;
    constructor(proto: any, typeTag: TypeTag);
    static UpdateEpochIntervalEventParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): UpdateEpochIntervalEvent;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function block_prologue_(vm: HexString, hash: HexString, epoch: U64, round: U64, proposer: HexString, failed_proposer_indices: U64[], previous_block_votes_bitvec: U8[], timestamp: U64, $c: AptosDataCache): void;
export declare function emit_genesis_block_event_(vm: HexString, $c: AptosDataCache): void;
export declare function emit_new_block_event_(vm: HexString, event_handle: Event.EventHandle, new_block_event: NewBlockEvent, $c: AptosDataCache): void;
export declare function emit_writeset_block_event_(vm_signer: HexString, fake_block_hash: HexString, $c: AptosDataCache): void;
export declare function get_current_block_height_($c: AptosDataCache): U64;
export declare function get_epoch_interval_secs_($c: AptosDataCache): U64;
export declare function initialize_(aptos_framework: HexString, epoch_interval_microsecs: U64, $c: AptosDataCache): void;
export declare function update_epoch_interval_microsecs_(aptos_framework: HexString, new_epoch_interval: U64, $c: AptosDataCache): void;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get BlockResource(): typeof BlockResource;
    loadBlockResource(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<BlockResource>;
    get NewBlockEvent(): typeof NewBlockEvent;
    get UpdateEpochIntervalEvent(): typeof UpdateEpochIntervalEvent;
}
//# sourceMappingURL=block.d.ts.map