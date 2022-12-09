import * as $ from "@manahippo/move-to-ts";
import { AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
export declare const packageName = "AptosPadCoin";
export declare const moduleAddress: HexString;
export declare const moduleName = "aptospad_coin";
export declare class AptosPadCoin {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    constructor(proto: any, typeTag: TypeTag);
    static AptosPadCoinParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): AptosPadCoin;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get AptosPadCoin(): typeof AptosPadCoin;
}
//# sourceMappingURL=aptospad_coin.d.ts.map