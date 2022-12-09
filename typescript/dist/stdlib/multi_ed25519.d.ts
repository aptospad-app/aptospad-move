import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U8, U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
import * as Option from "./option";
export declare const packageName = "AptosStdlib";
export declare const moduleAddress: HexString;
export declare const moduleName = "multi_ed25519";
export declare const BITMAP_NUM_OF_BYTES: U64;
export declare const E_WRONG_PUBKEY_SIZE: U64;
export declare const E_WRONG_SIGNATURE_SIZE: U64;
export declare const INDIVIDUAL_PUBLIC_KEY_NUM_BYTES: U64;
export declare const INDIVIDUAL_SIGNATURE_NUM_BYTES: U64;
export declare const MAX_NUMBER_OF_PUBLIC_KEYS: U64;
export declare const SIGNATURE_SCHEME_ID: U8;
export declare const THRESHOLD_SIZE_BYTES: U64;
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
export declare class UnvalidatedPublicKey {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    bytes: U8[];
    constructor(proto: any, typeTag: TypeTag);
    static UnvalidatedPublicKeyParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): UnvalidatedPublicKey;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class ValidatedPublicKey {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    bytes: U8[];
    constructor(proto: any, typeTag: TypeTag);
    static ValidatedPublicKeyParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): ValidatedPublicKey;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function new_signature_from_bytes_(bytes: U8[], $c: AptosDataCache): Signature;
export declare function new_unvalidated_public_key_from_bytes_(bytes: U8[], $c: AptosDataCache): UnvalidatedPublicKey;
export declare function new_validated_public_key_from_bytes_(bytes: U8[], $c: AptosDataCache): Option.Option;
export declare function public_key_bytes_to_authentication_key_(pk_bytes: U8[], $c: AptosDataCache): U8[];
export declare function public_key_into_unvalidated_(pk: ValidatedPublicKey, $c: AptosDataCache): UnvalidatedPublicKey;
export declare function public_key_to_unvalidated_(pk: ValidatedPublicKey, $c: AptosDataCache): UnvalidatedPublicKey;
export declare function public_key_validate_(pk: UnvalidatedPublicKey, $c: AptosDataCache): Option.Option;
export declare function public_key_validate_internal_(bytes: U8[], $c: AptosDataCache): boolean;
export declare function signature_to_bytes_(sig: Signature, $c: AptosDataCache): U8[];
export declare function signature_verify_strict_(multisignature: Signature, public_key: UnvalidatedPublicKey, message: U8[], $c: AptosDataCache): boolean;
export declare function signature_verify_strict_internal_(multisignature: U8[], public_key: U8[], message: U8[], $c: AptosDataCache): boolean;
export declare function signature_verify_strict_t_(multisignature: Signature, public_key: UnvalidatedPublicKey, data: any, $c: AptosDataCache, $p: TypeTag[]): boolean;
export declare function unvalidated_public_key_to_authentication_key_(pk: UnvalidatedPublicKey, $c: AptosDataCache): U8[];
export declare function unvalidated_public_key_to_bytes_(pk: UnvalidatedPublicKey, $c: AptosDataCache): U8[];
export declare function validated_public_key_to_authentication_key_(pk: ValidatedPublicKey, $c: AptosDataCache): U8[];
export declare function validated_public_key_to_bytes_(pk: ValidatedPublicKey, $c: AptosDataCache): U8[];
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get Signature(): typeof Signature;
    get UnvalidatedPublicKey(): typeof UnvalidatedPublicKey;
    get ValidatedPublicKey(): typeof ValidatedPublicKey;
}
//# sourceMappingURL=multi_ed25519.d.ts.map