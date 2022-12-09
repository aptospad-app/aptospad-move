import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
export declare const packageName = "AptosFramework";
export declare const moduleAddress: HexString;
export declare const moduleName = "governance_proposal";
export declare class GovernanceProposal {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    constructor(proto: any, typeTag: TypeTag);
    static GovernanceProposalParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): GovernanceProposal;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function create_empty_proposal_($c: AptosDataCache): GovernanceProposal;
export declare function create_proposal_($c: AptosDataCache): GovernanceProposal;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get GovernanceProposal(): typeof GovernanceProposal;
}
//# sourceMappingURL=governance_proposal.d.ts.map