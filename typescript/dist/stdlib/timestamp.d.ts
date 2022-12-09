import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
export declare const packageName = "AptosFramework";
export declare const moduleAddress: HexString;
export declare const moduleName = "timestamp";
export declare const EINVALID_TIMESTAMP: U64;
export declare const ENOT_OPERATING: U64;
export declare const MICRO_CONVERSION_FACTOR: U64;
export declare class CurrentTimeMicroseconds {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    microseconds: U64;
    constructor(proto: any, typeTag: TypeTag);
    static CurrentTimeMicrosecondsParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): CurrentTimeMicroseconds;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<CurrentTimeMicroseconds>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<CurrentTimeMicroseconds>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function now_microseconds_($c: AptosDataCache): U64;
export declare function now_seconds_($c: AptosDataCache): U64;
export declare function set_time_has_started_(aptos_framework: HexString, $c: AptosDataCache): void;
export declare function update_global_time_(account: HexString, proposer: HexString, timestamp: U64, $c: AptosDataCache): void;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get CurrentTimeMicroseconds(): typeof CurrentTimeMicroseconds;
    loadCurrentTimeMicroseconds(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<CurrentTimeMicroseconds>;
}
//# sourceMappingURL=timestamp.d.ts.map