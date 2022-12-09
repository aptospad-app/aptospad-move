import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U8, U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
import * as Option from "./option";
export declare const packageName = "AptosStdlib";
export declare const moduleAddress: HexString;
export declare const moduleName = "secp256k1";
export declare const E_DESERIALIZE: U64;
export declare const RAW_PUBLIC_KEY_NUM_BYTES: U64;
export declare const SIGNATURE_NUM_BYTES: U64;
export declare class ECDSARawPublicKey {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    bytes: U8[];
    constructor(proto: any, typeTag: TypeTag);
    static ECDSARawPublicKeyParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): ECDSARawPublicKey;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class ECDSASignature {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    bytes: U8[];
    constructor(proto: any, typeTag: TypeTag);
    static ECDSASignatureParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): ECDSASignature;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function ecdsa_raw_public_key_from_64_bytes_(bytes: U8[], $c: AptosDataCache): ECDSARawPublicKey;
export declare function ecdsa_raw_public_key_to_bytes_(pk: ECDSARawPublicKey, $c: AptosDataCache): U8[];
export declare function ecdsa_recover_(message: U8[], recovery_id: U8, signature: ECDSASignature, $c: AptosDataCache): Option.Option;
export declare function ecdsa_recover_internal_(message: U8[], recovery_id: U8, signature: U8[], $c: AptosDataCache): [U8[], boolean];
export declare function ecdsa_signature_from_bytes_(bytes: U8[], $c: AptosDataCache): ECDSASignature;
export declare function ecdsa_signature_to_bytes_(sig: ECDSASignature, $c: AptosDataCache): U8[];
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get ECDSARawPublicKey(): typeof ECDSARawPublicKey;
    get ECDSASignature(): typeof ECDSASignature;
}
//# sourceMappingURL=secp256k1.d.ts.map