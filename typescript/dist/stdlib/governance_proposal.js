"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = exports.loadParsers = exports.create_proposal_ = exports.create_empty_proposal_ = exports.GovernanceProposal = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
exports.packageName = "AptosFramework";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "governance_proposal";
class GovernanceProposal {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
    }
    static GovernanceProposalParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, GovernanceProposal);
        return new GovernanceProposal(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_1.StructTag(exports.moduleAddress, exports.moduleName, "GovernanceProposal", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.GovernanceProposal = GovernanceProposal;
GovernanceProposal.moduleAddress = exports.moduleAddress;
GovernanceProposal.moduleName = exports.moduleName;
GovernanceProposal.structName = "GovernanceProposal";
GovernanceProposal.typeParameters = [];
GovernanceProposal.fields = [];
function create_empty_proposal_($c) {
    return create_proposal_($c);
}
exports.create_empty_proposal_ = create_empty_proposal_;
function create_proposal_($c) {
    return new GovernanceProposal({}, new move_to_ts_1.SimpleStructTag(GovernanceProposal));
}
exports.create_proposal_ = create_proposal_;
function loadParsers(repo) {
    repo.addParser("0x1::governance_proposal::GovernanceProposal", GovernanceProposal.GovernanceProposalParser);
}
exports.loadParsers = loadParsers;
class App {
    constructor(client, repo, cache) {
        this.client = client;
        this.repo = repo;
        this.cache = cache;
    }
    get moduleAddress() { {
        return exports.moduleAddress;
    } }
    get moduleName() { {
        return exports.moduleName;
    } }
    get GovernanceProposal() { return GovernanceProposal; }
}
exports.App = App;
//# sourceMappingURL=governance_proposal.js.map