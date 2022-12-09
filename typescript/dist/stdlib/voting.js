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
exports.App = exports.loadParsers = exports.vote_ = exports.resolve_ = exports.register_ = exports.is_voting_period_over_ = exports.is_voting_closed_ = exports.is_resolved_ = exports.get_proposal_state_ = exports.get_proposal_expiration_secs_ = exports.get_execution_hash_ = exports.create_proposal_ = exports.can_be_resolved_early_ = exports.VotingForum = exports.VotingEvents = exports.VoteEvent = exports.ResolveProposal = exports.RegisterForumEvent = exports.Proposal = exports.CreateProposalEvent = exports.RESOLVABLE_TIME_METADATA_KEY = exports.PROPOSAL_STATE_SUCCEEDED = exports.PROPOSAL_STATE_PENDING = exports.PROPOSAL_STATE_FAILED = exports.EVOTING_FORUM_ALREADY_REGISTERED = exports.ERESOLUTION_CANNOT_BE_ATOMIC = exports.EPROPOSAL_VOTING_ALREADY_ENDED = exports.EPROPOSAL_EXECUTION_HASH_NOT_MATCHING = exports.EPROPOSAL_EMPTY_EXECUTION_HASH = exports.EPROPOSAL_CANNOT_BE_RESOLVED = exports.EPROPOSAL_ALREADY_RESOLVED = exports.EINVALID_MIN_VOTE_THRESHOLD = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Account = __importStar(require("./account"));
const Bcs = __importStar(require("./bcs"));
const Error = __importStar(require("./error"));
const Event = __importStar(require("./event"));
const From_bcs = __importStar(require("./from_bcs"));
const Option = __importStar(require("./option"));
const Signer = __importStar(require("./signer"));
const Simple_map = __importStar(require("./simple_map"));
const String = __importStar(require("./string"));
const Table = __importStar(require("./table"));
const Timestamp = __importStar(require("./timestamp"));
const Transaction_context = __importStar(require("./transaction_context"));
const Type_info = __importStar(require("./type_info"));
const Vector = __importStar(require("./vector"));
exports.packageName = "AptosFramework";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "voting";
exports.EINVALID_MIN_VOTE_THRESHOLD = (0, move_to_ts_1.u64)("7");
exports.EPROPOSAL_ALREADY_RESOLVED = (0, move_to_ts_1.u64)("3");
exports.EPROPOSAL_CANNOT_BE_RESOLVED = (0, move_to_ts_1.u64)("2");
exports.EPROPOSAL_EMPTY_EXECUTION_HASH = (0, move_to_ts_1.u64)("4");
exports.EPROPOSAL_EXECUTION_HASH_NOT_MATCHING = (0, move_to_ts_1.u64)("1");
exports.EPROPOSAL_VOTING_ALREADY_ENDED = (0, move_to_ts_1.u64)("5");
exports.ERESOLUTION_CANNOT_BE_ATOMIC = (0, move_to_ts_1.u64)("8");
exports.EVOTING_FORUM_ALREADY_REGISTERED = (0, move_to_ts_1.u64)("6");
exports.PROPOSAL_STATE_FAILED = (0, move_to_ts_1.u64)("3");
exports.PROPOSAL_STATE_PENDING = (0, move_to_ts_1.u64)("0");
exports.PROPOSAL_STATE_SUCCEEDED = (0, move_to_ts_1.u64)("1");
exports.RESOLVABLE_TIME_METADATA_KEY = [(0, move_to_ts_1.u8)("82"), (0, move_to_ts_1.u8)("69"), (0, move_to_ts_1.u8)("83"), (0, move_to_ts_1.u8)("79"), (0, move_to_ts_1.u8)("76"), (0, move_to_ts_1.u8)("86"), (0, move_to_ts_1.u8)("65"), (0, move_to_ts_1.u8)("66"), (0, move_to_ts_1.u8)("76"), (0, move_to_ts_1.u8)("69"), (0, move_to_ts_1.u8)("95"), (0, move_to_ts_1.u8)("84"), (0, move_to_ts_1.u8)("73"), (0, move_to_ts_1.u8)("77"), (0, move_to_ts_1.u8)("69"), (0, move_to_ts_1.u8)("95"), (0, move_to_ts_1.u8)("77"), (0, move_to_ts_1.u8)("69"), (0, move_to_ts_1.u8)("84"), (0, move_to_ts_1.u8)("65"), (0, move_to_ts_1.u8)("68"), (0, move_to_ts_1.u8)("65"), (0, move_to_ts_1.u8)("84"), (0, move_to_ts_1.u8)("65"), (0, move_to_ts_1.u8)("95"), (0, move_to_ts_1.u8)("75"), (0, move_to_ts_1.u8)("69"), (0, move_to_ts_1.u8)("89")];
class CreateProposalEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.proposal_id = proto['proposal_id'];
        this.early_resolution_vote_threshold = proto['early_resolution_vote_threshold'];
        this.execution_hash = proto['execution_hash'];
        this.expiration_secs = proto['expiration_secs'];
        this.metadata = proto['metadata'];
        this.min_vote_threshold = proto['min_vote_threshold'];
    }
    static CreateProposalEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, CreateProposalEvent);
        return new CreateProposalEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "CreateProposalEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.early_resolution_vote_threshold.loadFullState(app);
            yield this.metadata.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.CreateProposalEvent = CreateProposalEvent;
CreateProposalEvent.moduleAddress = exports.moduleAddress;
CreateProposalEvent.moduleName = exports.moduleName;
CreateProposalEvent.structName = "CreateProposalEvent";
CreateProposalEvent.typeParameters = [];
CreateProposalEvent.fields = [
    { name: "proposal_id", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "early_resolution_vote_threshold", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "option", "Option", [move_to_ts_2.AtomicTypeTag.U128]) },
    { name: "execution_hash", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) },
    { name: "expiration_secs", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "metadata", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "simple_map", "SimpleMap", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8)]) },
    { name: "min_vote_threshold", typeTag: move_to_ts_2.AtomicTypeTag.U128 }
];
class Proposal {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.proposer = proto['proposer'];
        this.execution_content = proto['execution_content'];
        this.metadata = proto['metadata'];
        this.creation_time_secs = proto['creation_time_secs'];
        this.execution_hash = proto['execution_hash'];
        this.min_vote_threshold = proto['min_vote_threshold'];
        this.expiration_secs = proto['expiration_secs'];
        this.early_resolution_vote_threshold = proto['early_resolution_vote_threshold'];
        this.yes_votes = proto['yes_votes'];
        this.no_votes = proto['no_votes'];
        this.is_resolved = proto['is_resolved'];
        this.resolution_time_secs = proto['resolution_time_secs'];
    }
    static ProposalParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Proposal);
        return new Proposal(proto, typeTag);
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Proposal", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.execution_content.loadFullState(app);
            yield this.metadata.loadFullState(app);
            yield this.early_resolution_vote_threshold.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.Proposal = Proposal;
Proposal.moduleAddress = exports.moduleAddress;
Proposal.moduleName = exports.moduleName;
Proposal.structName = "Proposal";
Proposal.typeParameters = [
    { name: "ProposalType", isPhantom: false }
];
Proposal.fields = [
    { name: "proposer", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "execution_content", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "option", "Option", [new $.TypeParamIdx(0)]) },
    { name: "metadata", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "simple_map", "SimpleMap", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8)]) },
    { name: "creation_time_secs", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "execution_hash", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) },
    { name: "min_vote_threshold", typeTag: move_to_ts_2.AtomicTypeTag.U128 },
    { name: "expiration_secs", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "early_resolution_vote_threshold", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "option", "Option", [move_to_ts_2.AtomicTypeTag.U128]) },
    { name: "yes_votes", typeTag: move_to_ts_2.AtomicTypeTag.U128 },
    { name: "no_votes", typeTag: move_to_ts_2.AtomicTypeTag.U128 },
    { name: "is_resolved", typeTag: move_to_ts_2.AtomicTypeTag.Bool },
    { name: "resolution_time_secs", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class RegisterForumEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.hosting_account = proto['hosting_account'];
        this.proposal_type_info = proto['proposal_type_info'];
    }
    static RegisterForumEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, RegisterForumEvent);
        return new RegisterForumEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "RegisterForumEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.proposal_type_info.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.RegisterForumEvent = RegisterForumEvent;
RegisterForumEvent.moduleAddress = exports.moduleAddress;
RegisterForumEvent.moduleName = exports.moduleName;
RegisterForumEvent.structName = "RegisterForumEvent";
RegisterForumEvent.typeParameters = [];
RegisterForumEvent.fields = [
    { name: "hosting_account", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "proposal_type_info", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "type_info", "TypeInfo", []) }
];
class ResolveProposal {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.proposal_id = proto['proposal_id'];
        this.yes_votes = proto['yes_votes'];
        this.no_votes = proto['no_votes'];
        this.resolved_early = proto['resolved_early'];
    }
    static ResolveProposalParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, ResolveProposal);
        return new ResolveProposal(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "ResolveProposal", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.ResolveProposal = ResolveProposal;
ResolveProposal.moduleAddress = exports.moduleAddress;
ResolveProposal.moduleName = exports.moduleName;
ResolveProposal.structName = "ResolveProposal";
ResolveProposal.typeParameters = [];
ResolveProposal.fields = [
    { name: "proposal_id", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "yes_votes", typeTag: move_to_ts_2.AtomicTypeTag.U128 },
    { name: "no_votes", typeTag: move_to_ts_2.AtomicTypeTag.U128 },
    { name: "resolved_early", typeTag: move_to_ts_2.AtomicTypeTag.Bool }
];
class VoteEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.proposal_id = proto['proposal_id'];
        this.num_votes = proto['num_votes'];
    }
    static VoteEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, VoteEvent);
        return new VoteEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "VoteEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.VoteEvent = VoteEvent;
VoteEvent.moduleAddress = exports.moduleAddress;
VoteEvent.moduleName = exports.moduleName;
VoteEvent.structName = "VoteEvent";
VoteEvent.typeParameters = [];
VoteEvent.fields = [
    { name: "proposal_id", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "num_votes", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class VotingEvents {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.create_proposal_events = proto['create_proposal_events'];
        this.register_forum_events = proto['register_forum_events'];
        this.resolve_proposal_events = proto['resolve_proposal_events'];
        this.vote_events = proto['vote_events'];
    }
    static VotingEventsParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, VotingEvents);
        return new VotingEvents(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "VotingEvents", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.create_proposal_events.loadFullState(app);
            yield this.register_forum_events.loadFullState(app);
            yield this.resolve_proposal_events.loadFullState(app);
            yield this.vote_events.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.VotingEvents = VotingEvents;
VotingEvents.moduleAddress = exports.moduleAddress;
VotingEvents.moduleName = exports.moduleName;
VotingEvents.structName = "VotingEvents";
VotingEvents.typeParameters = [];
VotingEvents.fields = [
    { name: "create_proposal_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "voting", "CreateProposalEvent", [])]) },
    { name: "register_forum_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "voting", "RegisterForumEvent", [])]) },
    { name: "resolve_proposal_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "voting", "ResolveProposal", [])]) },
    { name: "vote_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "voting", "VoteEvent", [])]) }
];
class VotingForum {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.proposals = proto['proposals'];
        this.events = proto['events'];
        this.next_proposal_id = proto['next_proposal_id'];
    }
    static VotingForumParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, VotingForum);
        return new VotingForum(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, VotingForum, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, VotingForum, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "VotingForum", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.proposals.loadFullState(app);
            yield this.events.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.VotingForum = VotingForum;
VotingForum.moduleAddress = exports.moduleAddress;
VotingForum.moduleName = exports.moduleName;
VotingForum.structName = "VotingForum";
VotingForum.typeParameters = [
    { name: "ProposalType", isPhantom: false }
];
VotingForum.fields = [
    { name: "proposals", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "table", "Table", [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "voting", "Proposal", [new $.TypeParamIdx(0)])]) },
    { name: "events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "voting", "VotingEvents", []) },
    { name: "next_proposal_id", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
function can_be_resolved_early_(proposal, $c, $p) {
    let temp$1, early_resolution_threshold;
    if (Option.is_some_(proposal.early_resolution_vote_threshold, $c, [move_to_ts_2.AtomicTypeTag.U128])) {
        early_resolution_threshold = $.copy(Option.borrow_(proposal.early_resolution_vote_threshold, $c, [move_to_ts_2.AtomicTypeTag.U128]));
        if (($.copy(proposal.yes_votes)).ge($.copy(early_resolution_threshold))) {
            temp$1 = true;
        }
        else {
            temp$1 = ($.copy(proposal.no_votes)).ge($.copy(early_resolution_threshold));
        }
        if (temp$1) {
            return true;
        }
        else {
        }
    }
    else {
    }
    return false;
}
exports.can_be_resolved_early_ = can_be_resolved_early_;
function create_proposal_(proposer, voting_forum_address, execution_content, execution_hash, min_vote_threshold, expiration_secs, early_resolution_vote_threshold, metadata, $c, $p) {
    let temp$1, temp$10, temp$11, temp$12, temp$13, temp$14, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7, temp$8, temp$9, proposal_id, voting_forum;
    if (Option.is_some_(early_resolution_vote_threshold, $c, [move_to_ts_2.AtomicTypeTag.U128])) {
        if (!($.copy(min_vote_threshold)).le($.copy(Option.borrow_(early_resolution_vote_threshold, $c, [move_to_ts_2.AtomicTypeTag.U128])))) {
            throw $.abortCode(Error.invalid_argument_($.copy(exports.EINVALID_MIN_VOTE_THRESHOLD), $c));
        }
    }
    else {
    }
    if (!(Vector.length_(execution_hash, $c, [move_to_ts_2.AtomicTypeTag.U8])).gt((0, move_to_ts_1.u64)("0"))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EPROPOSAL_EMPTY_EXECUTION_HASH), $c));
    }
    voting_forum = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(VotingForum, [$p[0]]), $.copy(voting_forum_address));
    proposal_id = $.copy(voting_forum.next_proposal_id);
    voting_forum.next_proposal_id = ($.copy(voting_forum.next_proposal_id)).add((0, move_to_ts_1.u64)("1"));
    temp$14 = voting_forum.proposals;
    temp$13 = $.copy(proposal_id);
    temp$1 = $.copy(proposer);
    temp$2 = Timestamp.now_seconds_($c);
    temp$3 = Option.some_(execution_content, $c, [$p[0]]);
    temp$4 = $.copy(execution_hash);
    temp$5 = $.copy(metadata);
    temp$6 = $.copy(min_vote_threshold);
    temp$7 = $.copy(expiration_secs);
    temp$8 = $.copy(early_resolution_vote_threshold);
    temp$9 = (0, move_to_ts_1.u128)("0");
    temp$10 = (0, move_to_ts_1.u128)("0");
    temp$11 = false;
    temp$12 = (0, move_to_ts_1.u64)("0");
    Table.add_(temp$14, temp$13, new Proposal({ proposer: temp$1, execution_content: temp$3, metadata: temp$5, creation_time_secs: temp$2, execution_hash: temp$4, min_vote_threshold: temp$6, expiration_secs: temp$7, early_resolution_vote_threshold: temp$8, yes_votes: temp$9, no_votes: temp$10, is_resolved: temp$11, resolution_time_secs: temp$12 }, new move_to_ts_2.SimpleStructTag(Proposal, [$p[0]])), $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(Proposal, [$p[0]])]);
    Event.emit_event_(voting_forum.events.create_proposal_events, new CreateProposalEvent({ proposal_id: $.copy(proposal_id), early_resolution_vote_threshold: $.copy(early_resolution_vote_threshold), execution_hash: $.copy(execution_hash), expiration_secs: $.copy(expiration_secs), metadata: $.copy(metadata), min_vote_threshold: $.copy(min_vote_threshold) }, new move_to_ts_2.SimpleStructTag(CreateProposalEvent)), $c, [new move_to_ts_2.SimpleStructTag(CreateProposalEvent)]);
    return $.copy(proposal_id);
}
exports.create_proposal_ = create_proposal_;
function get_execution_hash_(voting_forum_address, proposal_id, $c, $p) {
    let proposal, voting_forum;
    voting_forum = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(VotingForum, [$p[0]]), $.copy(voting_forum_address));
    proposal = Table.borrow_mut_(voting_forum.proposals, $.copy(proposal_id), $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(Proposal, [$p[0]])]);
    return $.copy(proposal.execution_hash);
}
exports.get_execution_hash_ = get_execution_hash_;
function get_proposal_expiration_secs_(voting_forum_address, proposal_id, $c, $p) {
    let proposal, voting_forum;
    voting_forum = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(VotingForum, [$p[0]]), $.copy(voting_forum_address));
    proposal = Table.borrow_mut_(voting_forum.proposals, $.copy(proposal_id), $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(Proposal, [$p[0]])]);
    return $.copy(proposal.expiration_secs);
}
exports.get_proposal_expiration_secs_ = get_proposal_expiration_secs_;
function get_proposal_state_(voting_forum_address, proposal_id, $c, $p) {
    let temp$1, temp$2, temp$3, no_votes, proposal, voting_forum, yes_votes;
    if (is_voting_closed_($.copy(voting_forum_address), $.copy(proposal_id), $c, [$p[0]])) {
        voting_forum = $c.borrow_global(new move_to_ts_2.SimpleStructTag(VotingForum, [$p[0]]), $.copy(voting_forum_address));
        proposal = Table.borrow_(voting_forum.proposals, $.copy(proposal_id), $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(Proposal, [$p[0]])]);
        yes_votes = $.copy(proposal.yes_votes);
        no_votes = $.copy(proposal.no_votes);
        if (($.copy(yes_votes)).gt($.copy(no_votes))) {
            temp$1 = (($.copy(yes_votes)).add($.copy(no_votes))).ge($.copy(proposal.min_vote_threshold));
        }
        else {
            temp$1 = false;
        }
        if (temp$1) {
            temp$2 = $.copy(exports.PROPOSAL_STATE_SUCCEEDED);
        }
        else {
            temp$2 = $.copy(exports.PROPOSAL_STATE_FAILED);
        }
        temp$3 = temp$2;
    }
    else {
        temp$3 = $.copy(exports.PROPOSAL_STATE_PENDING);
    }
    return temp$3;
}
exports.get_proposal_state_ = get_proposal_state_;
function is_resolved_(voting_forum_address, proposal_id, $c, $p) {
    let proposal, voting_forum;
    voting_forum = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(VotingForum, [$p[0]]), $.copy(voting_forum_address));
    proposal = Table.borrow_mut_(voting_forum.proposals, $.copy(proposal_id), $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(Proposal, [$p[0]])]);
    return $.copy(proposal.is_resolved);
}
exports.is_resolved_ = is_resolved_;
function is_voting_closed_(voting_forum_address, proposal_id, $c, $p) {
    let temp$1, proposal, voting_forum;
    voting_forum = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(VotingForum, [$p[0]]), $.copy(voting_forum_address));
    proposal = Table.borrow_mut_(voting_forum.proposals, $.copy(proposal_id), $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(Proposal, [$p[0]])]);
    if (can_be_resolved_early_(proposal, $c, [$p[0]])) {
        temp$1 = true;
    }
    else {
        temp$1 = is_voting_period_over_(proposal, $c, [$p[0]]);
    }
    return temp$1;
}
exports.is_voting_closed_ = is_voting_closed_;
function is_voting_period_over_(proposal, $c, $p) {
    return (Timestamp.now_seconds_($c)).gt($.copy(proposal.expiration_secs));
}
exports.is_voting_period_over_ = is_voting_period_over_;
function register_(account, $c, $p) {
    let temp$1, temp$2, temp$3, addr, voting_forum;
    addr = Signer.address_of_(account, $c);
    if (!!$c.exists(new move_to_ts_2.SimpleStructTag(VotingForum, [$p[0]]), $.copy(addr))) {
        throw $.abortCode(Error.already_exists_($.copy(exports.EVOTING_FORUM_ALREADY_REGISTERED), $c));
    }
    temp$1 = (0, move_to_ts_1.u64)("0");
    temp$2 = Table.new___($c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(Proposal, [$p[0]])]);
    temp$3 = new VotingEvents({ create_proposal_events: Account.new_event_handle_(account, $c, [new move_to_ts_2.SimpleStructTag(CreateProposalEvent)]), register_forum_events: Account.new_event_handle_(account, $c, [new move_to_ts_2.SimpleStructTag(RegisterForumEvent)]), resolve_proposal_events: Account.new_event_handle_(account, $c, [new move_to_ts_2.SimpleStructTag(ResolveProposal)]), vote_events: Account.new_event_handle_(account, $c, [new move_to_ts_2.SimpleStructTag(VoteEvent)]) }, new move_to_ts_2.SimpleStructTag(VotingEvents));
    voting_forum = new VotingForum({ proposals: temp$2, events: temp$3, next_proposal_id: temp$1 }, new move_to_ts_2.SimpleStructTag(VotingForum, [$p[0]]));
    Event.emit_event_(voting_forum.events.register_forum_events, new RegisterForumEvent({ hosting_account: $.copy(addr), proposal_type_info: Type_info.type_of_($c, [$p[0]]) }, new move_to_ts_2.SimpleStructTag(RegisterForumEvent)), $c, [new move_to_ts_2.SimpleStructTag(RegisterForumEvent)]);
    $c.move_to(new move_to_ts_2.SimpleStructTag(VotingForum, [$p[0]]), account, voting_forum);
    return;
}
exports.register_ = register_;
function resolve_(voting_forum_address, proposal_id, $c, $p) {
    let temp$1, temp$2, proposal, proposal_state, resolvable_time, resolved_early, voting_forum;
    proposal_state = get_proposal_state_($.copy(voting_forum_address), $.copy(proposal_id), $c, [$p[0]]);
    if (!($.copy(proposal_state)).eq(($.copy(exports.PROPOSAL_STATE_SUCCEEDED)))) {
        throw $.abortCode(Error.invalid_state_($.copy(exports.EPROPOSAL_CANNOT_BE_RESOLVED), $c));
    }
    voting_forum = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(VotingForum, [$p[0]]), $.copy(voting_forum_address));
    proposal = Table.borrow_mut_(voting_forum.proposals, $.copy(proposal_id), $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(Proposal, [$p[0]])]);
    if (!!$.copy(proposal.is_resolved)) {
        throw $.abortCode(Error.invalid_state_($.copy(exports.EPROPOSAL_ALREADY_RESOLVED), $c));
    }
    temp$2 = proposal.metadata;
    temp$1 = String.utf8_($.copy(exports.RESOLVABLE_TIME_METADATA_KEY), $c);
    resolvable_time = From_bcs.to_u64_($.copy(Simple_map.borrow_(temp$2, temp$1, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8)])), $c);
    if (!(Timestamp.now_seconds_($c)).gt($.copy(resolvable_time))) {
        throw $.abortCode(Error.invalid_state_($.copy(exports.ERESOLUTION_CANNOT_BE_ATOMIC), $c));
    }
    resolved_early = can_be_resolved_early_(proposal, $c, [$p[0]]);
    proposal.is_resolved = true;
    proposal.resolution_time_secs = Timestamp.now_seconds_($c);
    if (!$.veq(Transaction_context.get_script_hash_($c), $.copy(proposal.execution_hash))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EPROPOSAL_EXECUTION_HASH_NOT_MATCHING), $c));
    }
    Event.emit_event_(voting_forum.events.resolve_proposal_events, new ResolveProposal({ proposal_id: $.copy(proposal_id), yes_votes: $.copy(proposal.yes_votes), no_votes: $.copy(proposal.no_votes), resolved_early: resolved_early }, new move_to_ts_2.SimpleStructTag(ResolveProposal)), $c, [new move_to_ts_2.SimpleStructTag(ResolveProposal)]);
    return Option.extract_(proposal.execution_content, $c, [$p[0]]);
}
exports.resolve_ = resolve_;
function vote_(_proof, voting_forum_address, proposal_id, num_votes, should_pass, $c, $p) {
    let temp$1, key, proposal, timestamp_secs_bytes, voting_forum;
    voting_forum = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(VotingForum, [$p[0]]), $.copy(voting_forum_address));
    proposal = Table.borrow_mut_(voting_forum.proposals, $.copy(proposal_id), $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(Proposal, [$p[0]])]);
    if (!!is_voting_period_over_(proposal, $c, [$p[0]])) {
        throw $.abortCode(Error.invalid_state_($.copy(exports.EPROPOSAL_VOTING_ALREADY_ENDED), $c));
    }
    if (!!$.copy(proposal.is_resolved)) {
        throw $.abortCode(Error.invalid_state_($.copy(exports.EPROPOSAL_ALREADY_RESOLVED), $c));
    }
    if (should_pass) {
        proposal.yes_votes = ($.copy(proposal.yes_votes)).add((0, move_to_ts_1.u128)($.copy(num_votes)));
    }
    else {
        proposal.no_votes = ($.copy(proposal.no_votes)).add((0, move_to_ts_1.u128)($.copy(num_votes)));
    }
    temp$1 = Timestamp.now_seconds_($c);
    timestamp_secs_bytes = Bcs.to_bytes_(temp$1, $c, [move_to_ts_2.AtomicTypeTag.U64]);
    key = String.utf8_($.copy(exports.RESOLVABLE_TIME_METADATA_KEY), $c);
    if (Simple_map.contains_key_(proposal.metadata, key, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8)])) {
        $.set(Simple_map.borrow_mut_(proposal.metadata, key, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8)]), $.copy(timestamp_secs_bytes));
    }
    else {
        Simple_map.add_(proposal.metadata, $.copy(key), $.copy(timestamp_secs_bytes), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8)]);
    }
    Event.emit_event_(voting_forum.events.vote_events, new VoteEvent({ proposal_id: $.copy(proposal_id), num_votes: $.copy(num_votes) }, new move_to_ts_2.SimpleStructTag(VoteEvent)), $c, [new move_to_ts_2.SimpleStructTag(VoteEvent)]);
    return;
}
exports.vote_ = vote_;
function loadParsers(repo) {
    repo.addParser("0x1::voting::CreateProposalEvent", CreateProposalEvent.CreateProposalEventParser);
    repo.addParser("0x1::voting::Proposal", Proposal.ProposalParser);
    repo.addParser("0x1::voting::RegisterForumEvent", RegisterForumEvent.RegisterForumEventParser);
    repo.addParser("0x1::voting::ResolveProposal", ResolveProposal.ResolveProposalParser);
    repo.addParser("0x1::voting::VoteEvent", VoteEvent.VoteEventParser);
    repo.addParser("0x1::voting::VotingEvents", VotingEvents.VotingEventsParser);
    repo.addParser("0x1::voting::VotingForum", VotingForum.VotingForumParser);
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
    get CreateProposalEvent() { return CreateProposalEvent; }
    get Proposal() { return Proposal; }
    get RegisterForumEvent() { return RegisterForumEvent; }
    get ResolveProposal() { return ResolveProposal; }
    get VoteEvent() { return VoteEvent; }
    get VotingEvents() { return VotingEvents; }
    get VotingForum() { return VotingForum; }
    loadVotingForum(owner, $p, /* <ProposalType> */ loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield VotingForum.load(this.repo, this.client, owner, $p);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
}
exports.App = App;
//# sourceMappingURL=voting.js.map