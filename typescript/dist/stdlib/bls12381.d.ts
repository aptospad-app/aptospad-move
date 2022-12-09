import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U8, U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
import * as Option from "./option";
export declare const packageName = "AptosStdlib";
export declare const moduleAddress: HexString;
export declare const moduleName = "bls12381";
export declare const EWRONG_SIZE: U64;
export declare const EZERO_PUBKEYS: U64;
export declare const PUBLIC_KEY_NUM_BYTES: U64;
export declare const RANDOM_PK: U8[];
export declare const RANDOM_SIGNATURE: U8[];
export declare const SIGNATURE_SIZE: U64;
export declare class AggrOrMultiSignature {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    bytes: U8[];
    constructor(proto: any, typeTag: TypeTag);
    static AggrOrMultiSignatureParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): AggrOrMultiSignature;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class AggrPublicKeysWithPoP {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    bytes: U8[];
    constructor(proto: any, typeTag: TypeTag);
    static AggrPublicKeysWithPoPParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): AggrPublicKeysWithPoP;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class ProofOfPossession {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    bytes: U8[];
    constructor(proto: any, typeTag: TypeTag);
    static ProofOfPossessionParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): ProofOfPossession;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class PublicKey {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    bytes: U8[];
    constructor(proto: any, typeTag: TypeTag);
    static PublicKeyParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): PublicKey;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class PublicKeyWithPoP {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    bytes: U8[];
    constructor(proto: any, typeTag: TypeTag);
    static PublicKeyWithPoPParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): PublicKeyWithPoP;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class Signature {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    bytes: U8[];
    constructor(proto: any, typeTag: TypeTag);
    static SignatureParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): Signature;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function aggr_or_multi_signature_from_bytes_(bytes: U8[], $c: AptosDataCache): AggrOrMultiSignature;
export declare function aggr_or_multi_signature_subgroup_check_(signature: AggrOrMultiSignature, $c: AptosDataCache): boolean;
export declare function aggr_or_multi_signature_to_bytes_(sig: AggrOrMultiSignature, $c: AptosDataCache): U8[];
export declare function aggregate_pubkey_to_bytes_(apk: AggrPublicKeysWithPoP, $c: AptosDataCache): U8[];
export declare function aggregate_pubkeys_(public_keys: PublicKeyWithPoP[], $c: AptosDataCache): AggrPublicKeysWithPoP;
export declare function aggregate_pubkeys_internal_(public_keys: PublicKeyWithPoP[], $c: AptosDataCache): [U8[], boolean];
export declare function aggregate_signatures_(signatures: Signature[], $c: AptosDataCache): Option.Option;
export declare function aggregate_signatures_internal_(signatures: Signature[], $c: AptosDataCache): [U8[], boolean];
export declare function proof_of_possession_from_bytes_(bytes: U8[], $c: AptosDataCache): ProofOfPossession;
export declare function proof_of_possession_to_bytes_(pop: ProofOfPossession, $c: AptosDataCache): U8[];
export declare function public_key_from_bytes_(bytes: U8[], $c: AptosDataCache): Option.Option;
export declare function public_key_from_bytes_with_pop_(pk_bytes: U8[], pop: ProofOfPossession, $c: AptosDataCache): Option.Option;
export declare function public_key_to_bytes_(pk: PublicKey, $c: AptosDataCache): U8[];
export declare function public_key_with_pop_to_bytes_(pk: PublicKeyWithPoP, $c: AptosDataCache): U8[];
export declare function signature_from_bytes_(bytes: U8[], $c: AptosDataCache): Signature;
export declare function signature_subgroup_check_(signature: Signature, $c: AptosDataCache): boolean;
export declare function signature_subgroup_check_internal_(signature: U8[], $c: AptosDataCache): boolean;
export declare function signature_to_bytes_(sig: Signature, $c: AptosDataCache): U8[];
export declare function validate_pubkey_internal_(public_key: U8[], $c: AptosDataCache): boolean;
export declare function verify_aggregate_signature_(aggr_sig: AggrOrMultiSignature, public_keys: PublicKeyWithPoP[], messages: U8[][], $c: AptosDataCache): boolean;
export declare function verify_aggregate_signature_internal_(aggsig: U8[], public_keys: PublicKeyWithPoP[], messages: U8[][], $c: AptosDataCache): boolean;
export declare function verify_multisignature_(multisig: AggrOrMultiSignature, aggr_public_key: AggrPublicKeysWithPoP, message: U8[], $c: AptosDataCache): boolean;
export declare function verify_multisignature_internal_(multisignature: U8[], agg_public_key: U8[], message: U8[], $c: AptosDataCache): boolean;
export declare function verify_normal_signature_(signature: Signature, public_key: PublicKey, message: U8[], $c: AptosDataCache): boolean;
export declare function verify_normal_signature_internal_(signature: U8[], public_key: U8[], message: U8[], $c: AptosDataCache): boolean;
export declare function verify_proof_of_possession_internal_(public_key: U8[], proof_of_possesion: U8[], $c: AptosDataCache): boolean;
export declare function verify_signature_share_(signature_share: Signature, public_key: PublicKeyWithPoP, message: U8[], $c: AptosDataCache): boolean;
export declare function verify_signature_share_internal_(signature_share: U8[], public_key: U8[], message: U8[], $c: AptosDataCache): boolean;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get AggrOrMultiSignature(): typeof AggrOrMultiSignature;
    get AggrPublicKeysWithPoP(): typeof AggrPublicKeysWithPoP;
    get ProofOfPossession(): typeof ProofOfPossession;
    get PublicKey(): typeof PublicKey;
    get PublicKeyWithPoP(): typeof PublicKeyWithPoP;
    get Signature(): typeof Signature;
}
//# sourceMappingURL=bls12381.d.ts.map