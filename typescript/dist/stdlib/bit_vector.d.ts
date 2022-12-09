import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
export declare const packageName = "MoveStdlib";
export declare const moduleAddress: HexString;
export declare const moduleName = "bit_vector";
export declare const EINDEX: U64;
export declare const ELENGTH: U64;
export declare const MAX_SIZE: U64;
export declare const WORD_SIZE: U64;
export declare class BitVector {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    length: U64;
    bit_field: boolean[];
    constructor(proto: any, typeTag: TypeTag);
    static BitVectorParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): BitVector;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function is_index_set_(bitvector: BitVector, bit_index: U64, $c: AptosDataCache): boolean;
export declare function length_(bitvector: BitVector, $c: AptosDataCache): U64;
export declare function longest_set_sequence_starting_at_(bitvector: BitVector, start_index: U64, $c: AptosDataCache): U64;
export declare function new___(length: U64, $c: AptosDataCache): BitVector;
export declare function set_(bitvector: BitVector, bit_index: U64, $c: AptosDataCache): void;
export declare function shift_left_(bitvector: BitVector, amount: U64, $c: AptosDataCache): void;
export declare function unset_(bitvector: BitVector, bit_index: U64, $c: AptosDataCache): void;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get BitVector(): typeof BitVector;
}
//# sourceMappingURL=bit_vector.d.ts.map