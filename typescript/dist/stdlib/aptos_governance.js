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
exports.App = exports.loadParsers = exports.buildPayload_vote = exports.vote_ = exports.update_governance_config_ = exports.store_signer_cap_ = exports.resolve_ = exports.remove_approved_hash_ = exports.reconfigure_ = exports.initialize_for_verification_ = exports.initialize_ = exports.get_voting_power_ = exports.get_voting_duration_secs_ = exports.get_signer_testnet_only_ = exports.get_signer_ = exports.get_required_proposer_stake_ = exports.get_min_voting_threshold_ = exports.create_proposal_metadata_ = exports.buildPayload_create_proposal = exports.create_proposal_ = exports.buildPayload_add_approved_script_hash_script = exports.add_approved_script_hash_script_ = exports.add_approved_script_hash_ = exports.VotingRecords = exports.VoteEvent = exports.UpdateConfigEvent = exports.RecordKey = exports.GovernanceResponsbility = exports.GovernanceEvents = exports.GovernanceConfig = exports.CreateProposalEvent = exports.ApprovedExecutionHashes = exports.PROPOSAL_STATE_SUCCEEDED = exports.METADATA_LOCATION_KEY = exports.METADATA_HASH_KEY = exports.EUNAUTHORIZED = exports.EPROPOSAL_NOT_RESOLVED_YET = exports.EPROPOSAL_NOT_RESOLVABLE_YET = exports.ENO_VOTING_POWER = exports.ENOT_DELEGATED_VOTER = exports.EMETADATA_LOCATION_TOO_LONG = exports.EMETADATA_HASH_TOO_LONG = exports.EINSUFFICIENT_STAKE_LOCKUP = exports.EINSUFFICIENT_PROPOSER_STAKE = exports.EALREADY_VOTED = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Account = __importStar(require("./account"));
const Aptos_coin = __importStar(require("./aptos_coin"));
const Coin = __importStar(require("./coin"));
const Error = __importStar(require("./error"));
const Event = __importStar(require("./event"));
const Governance_proposal = __importStar(require("./governance_proposal"));
const Option = __importStar(require("./option"));
const Reconfiguration = __importStar(require("./reconfiguration"));
const Signer = __importStar(require("./signer"));
const Simple_map = __importStar(require("./simple_map"));
const Stake = __importStar(require("./stake"));
const Staking_config = __importStar(require("./staking_config"));
const String = __importStar(require("./string"));
const System_addresses = __importStar(require("./system_addresses"));
const Table = __importStar(require("./table"));
const Timestamp = __importStar(require("./timestamp"));
const Voting = __importStar(require("./voting"));
exports.packageName = "AptosFramework";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "aptos_governance";
exports.EALREADY_VOTED = (0, move_to_ts_1.u64)("4");
exports.EINSUFFICIENT_PROPOSER_STAKE = (0, move_to_ts_1.u64)("1");
exports.EINSUFFICIENT_STAKE_LOCKUP = (0, move_to_ts_1.u64)("3");
exports.EMETADATA_HASH_TOO_LONG = (0, move_to_ts_1.u64)("10");
exports.EMETADATA_LOCATION_TOO_LONG = (0, move_to_ts_1.u64)("9");
exports.ENOT_DELEGATED_VOTER = (0, move_to_ts_1.u64)("2");
exports.ENO_VOTING_POWER = (0, move_to_ts_1.u64)("5");
exports.EPROPOSAL_NOT_RESOLVABLE_YET = (0, move_to_ts_1.u64)("6");
exports.EPROPOSAL_NOT_RESOLVED_YET = (0, move_to_ts_1.u64)("8");
exports.EUNAUTHORIZED = (0, move_to_ts_1.u64)("11");
exports.METADATA_HASH_KEY = [(0, move_to_ts_1.u8)("109"), (0, move_to_ts_1.u8)("101"), (0, move_to_ts_1.u8)("116"), (0, move_to_ts_1.u8)("97"), (0, move_to_ts_1.u8)("100"), (0, move_to_ts_1.u8)("97"), (0, move_to_ts_1.u8)("116"), (0, move_to_ts_1.u8)("97"), (0, move_to_ts_1.u8)("95"), (0, move_to_ts_1.u8)("104"), (0, move_to_ts_1.u8)("97"), (0, move_to_ts_1.u8)("115"), (0, move_to_ts_1.u8)("104")];
exports.METADATA_LOCATION_KEY = [(0, move_to_ts_1.u8)("109"), (0, move_to_ts_1.u8)("101"), (0, move_to_ts_1.u8)("116"), (0, move_to_ts_1.u8)("97"), (0, move_to_ts_1.u8)("100"), (0, move_to_ts_1.u8)("97"), (0, move_to_ts_1.u8)("116"), (0, move_to_ts_1.u8)("97"), (0, move_to_ts_1.u8)("95"), (0, move_to_ts_1.u8)("108"), (0, move_to_ts_1.u8)("111"), (0, move_to_ts_1.u8)("99"), (0, move_to_ts_1.u8)("97"), (0, move_to_ts_1.u8)("116"), (0, move_to_ts_1.u8)("105"), (0, move_to_ts_1.u8)("111"), (0, move_to_ts_1.u8)("110")];
exports.PROPOSAL_STATE_SUCCEEDED = (0, move_to_ts_1.u64)("1");
class ApprovedExecutionHashes {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.hashes = proto['hashes'];
    }
    static ApprovedExecutionHashesParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, ApprovedExecutionHashes);
        return new ApprovedExecutionHashes(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, ApprovedExecutionHashes, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, ApprovedExecutionHashes, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "ApprovedExecutionHashes", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.hashes.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.ApprovedExecutionHashes = ApprovedExecutionHashes;
ApprovedExecutionHashes.moduleAddress = exports.moduleAddress;
ApprovedExecutionHashes.moduleName = exports.moduleName;
ApprovedExecutionHashes.structName = "ApprovedExecutionHashes";
ApprovedExecutionHashes.typeParameters = [];
ApprovedExecutionHashes.fields = [
    { name: "hashes", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "simple_map", "SimpleMap", [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8)]) }
];
class CreateProposalEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.proposer = proto['proposer'];
        this.stake_pool = proto['stake_pool'];
        this.proposal_id = proto['proposal_id'];
        this.execution_hash = proto['execution_hash'];
        this.proposal_metadata = proto['proposal_metadata'];
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
            yield this.proposal_metadata.loadFullState(app);
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
    { name: "proposer", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "stake_pool", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "proposal_id", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "execution_hash", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) },
    { name: "proposal_metadata", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "simple_map", "SimpleMap", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8)]) }
];
class GovernanceConfig {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.min_voting_threshold = proto['min_voting_threshold'];
        this.required_proposer_stake = proto['required_proposer_stake'];
        this.voting_duration_secs = proto['voting_duration_secs'];
    }
    static GovernanceConfigParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, GovernanceConfig);
        return new GovernanceConfig(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, GovernanceConfig, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, GovernanceConfig, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "GovernanceConfig", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.GovernanceConfig = GovernanceConfig;
GovernanceConfig.moduleAddress = exports.moduleAddress;
GovernanceConfig.moduleName = exports.moduleName;
GovernanceConfig.structName = "GovernanceConfig";
GovernanceConfig.typeParameters = [];
GovernanceConfig.fields = [
    { name: "min_voting_threshold", typeTag: move_to_ts_2.AtomicTypeTag.U128 },
    { name: "required_proposer_stake", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "voting_duration_secs", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class GovernanceEvents {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.create_proposal_events = proto['create_proposal_events'];
        this.update_config_events = proto['update_config_events'];
        this.vote_events = proto['vote_events'];
    }
    static GovernanceEventsParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, GovernanceEvents);
        return new GovernanceEvents(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, GovernanceEvents, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, GovernanceEvents, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "GovernanceEvents", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.create_proposal_events.loadFullState(app);
            yield this.update_config_events.loadFullState(app);
            yield this.vote_events.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.GovernanceEvents = GovernanceEvents;
GovernanceEvents.moduleAddress = exports.moduleAddress;
GovernanceEvents.moduleName = exports.moduleName;
GovernanceEvents.structName = "GovernanceEvents";
GovernanceEvents.typeParameters = [];
GovernanceEvents.fields = [
    { name: "create_proposal_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_governance", "CreateProposalEvent", [])]) },
    { name: "update_config_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_governance", "UpdateConfigEvent", [])]) },
    { name: "vote_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_governance", "VoteEvent", [])]) }
];
class GovernanceResponsbility {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.signer_caps = proto['signer_caps'];
    }
    static GovernanceResponsbilityParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, GovernanceResponsbility);
        return new GovernanceResponsbility(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, GovernanceResponsbility, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, GovernanceResponsbility, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "GovernanceResponsbility", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.signer_caps.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.GovernanceResponsbility = GovernanceResponsbility;
GovernanceResponsbility.moduleAddress = exports.moduleAddress;
GovernanceResponsbility.moduleName = exports.moduleName;
GovernanceResponsbility.structName = "GovernanceResponsbility";
GovernanceResponsbility.typeParameters = [];
GovernanceResponsbility.fields = [
    { name: "signer_caps", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "simple_map", "SimpleMap", [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "account", "SignerCapability", [])]) }
];
class RecordKey {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.stake_pool = proto['stake_pool'];
        this.proposal_id = proto['proposal_id'];
    }
    static RecordKeyParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, RecordKey);
        return new RecordKey(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "RecordKey", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.RecordKey = RecordKey;
RecordKey.moduleAddress = exports.moduleAddress;
RecordKey.moduleName = exports.moduleName;
RecordKey.structName = "RecordKey";
RecordKey.typeParameters = [];
RecordKey.fields = [
    { name: "stake_pool", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "proposal_id", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class UpdateConfigEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.min_voting_threshold = proto['min_voting_threshold'];
        this.required_proposer_stake = proto['required_proposer_stake'];
        this.voting_duration_secs = proto['voting_duration_secs'];
    }
    static UpdateConfigEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, UpdateConfigEvent);
        return new UpdateConfigEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "UpdateConfigEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.UpdateConfigEvent = UpdateConfigEvent;
UpdateConfigEvent.moduleAddress = exports.moduleAddress;
UpdateConfigEvent.moduleName = exports.moduleName;
UpdateConfigEvent.structName = "UpdateConfigEvent";
UpdateConfigEvent.typeParameters = [];
UpdateConfigEvent.fields = [
    { name: "min_voting_threshold", typeTag: move_to_ts_2.AtomicTypeTag.U128 },
    { name: "required_proposer_stake", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "voting_duration_secs", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class VoteEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.proposal_id = proto['proposal_id'];
        this.voter = proto['voter'];
        this.stake_pool = proto['stake_pool'];
        this.num_votes = proto['num_votes'];
        this.should_pass = proto['should_pass'];
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
    { name: "voter", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "stake_pool", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "num_votes", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "should_pass", typeTag: move_to_ts_2.AtomicTypeTag.Bool }
];
class VotingRecords {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.votes = proto['votes'];
    }
    static VotingRecordsParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, VotingRecords);
        return new VotingRecords(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, VotingRecords, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, VotingRecords, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "VotingRecords", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.votes.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.VotingRecords = VotingRecords;
VotingRecords.moduleAddress = exports.moduleAddress;
VotingRecords.moduleName = exports.moduleName;
VotingRecords.structName = "VotingRecords";
VotingRecords.typeParameters = [];
VotingRecords.fields = [
    { name: "votes", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "table", "Table", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_governance", "RecordKey", []), move_to_ts_2.AtomicTypeTag.Bool]) }
];
function add_approved_script_hash_(proposal_id, $c) {
    let approved_hashes, execution_hash, proposal_state;
    approved_hashes = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(ApprovedExecutionHashes), new aptos_1.HexString("0x1"));
    if (Simple_map.contains_key_(approved_hashes.hashes, proposal_id, $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8)])) {
        return;
    }
    else {
    }
    proposal_state = Voting.get_proposal_state_(new aptos_1.HexString("0x1"), $.copy(proposal_id), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "governance_proposal", "GovernanceProposal", [])]);
    if (!($.copy(proposal_state)).eq(($.copy(exports.PROPOSAL_STATE_SUCCEEDED)))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EPROPOSAL_NOT_RESOLVABLE_YET), $c));
    }
    execution_hash = Voting.get_execution_hash_(new aptos_1.HexString("0x1"), $.copy(proposal_id), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "governance_proposal", "GovernanceProposal", [])]);
    Simple_map.add_(approved_hashes.hashes, $.copy(proposal_id), $.copy(execution_hash), $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8)]);
    return;
}
exports.add_approved_script_hash_ = add_approved_script_hash_;
function add_approved_script_hash_script_(proposal_id, $c) {
    return add_approved_script_hash_($.copy(proposal_id), $c);
}
exports.add_approved_script_hash_script_ = add_approved_script_hash_script_;
function buildPayload_add_approved_script_hash_script(proposal_id, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "aptos_governance", "add_approved_script_hash_script", typeParamStrings, [
        proposal_id,
    ], isJSON);
}
exports.buildPayload_add_approved_script_hash_script = buildPayload_add_approved_script_hash_script;
function create_proposal_(proposer, stake_pool, execution_hash, metadata_location, metadata_hash, $c) {
    let temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, current_time, early_resolution_vote_threshold, events, governance_config, proposal_expiration, proposal_id, proposal_metadata, proposer_address, stake_balance, total_supply, total_voting_token_supply;
    proposer_address = Signer.address_of_(proposer, $c);
    if (!((Stake.get_delegated_voter_($.copy(stake_pool), $c)).hex() === ($.copy(proposer_address)).hex())) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.ENOT_DELEGATED_VOTER), $c));
    }
    governance_config = $c.borrow_global(new move_to_ts_2.SimpleStructTag(GovernanceConfig), new aptos_1.HexString("0x1"));
    stake_balance = get_voting_power_($.copy(stake_pool), $c);
    if (!($.copy(stake_balance)).ge($.copy(governance_config.required_proposer_stake))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EINSUFFICIENT_PROPOSER_STAKE), $c));
    }
    current_time = Timestamp.now_seconds_($c);
    proposal_expiration = ($.copy(current_time)).add($.copy(governance_config.voting_duration_secs));
    if (!(Stake.get_lockup_secs_($.copy(stake_pool), $c)).ge($.copy(proposal_expiration))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EINSUFFICIENT_STAKE_LOCKUP), $c));
    }
    proposal_metadata = create_proposal_metadata_($.copy(metadata_location), $.copy(metadata_hash), $c);
    total_voting_token_supply = Coin.supply_($c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    early_resolution_vote_threshold = Option.none_($c, [move_to_ts_2.AtomicTypeTag.U128]);
    if (Option.is_some_(total_voting_token_supply, $c, [move_to_ts_2.AtomicTypeTag.U128])) {
        total_supply = $.copy(Option.borrow_(total_voting_token_supply, $c, [move_to_ts_2.AtomicTypeTag.U128]));
        early_resolution_vote_threshold = Option.some_((($.copy(total_supply)).div((0, move_to_ts_1.u128)("2"))).add((0, move_to_ts_1.u128)("1")), $c, [move_to_ts_2.AtomicTypeTag.U128]);
    }
    else {
    }
    proposal_id = Voting.create_proposal_($.copy(proposer_address), new aptos_1.HexString("0x1"), Governance_proposal.create_proposal_($c), $.copy(execution_hash), $.copy(governance_config.min_voting_threshold), $.copy(proposal_expiration), $.copy(early_resolution_vote_threshold), $.copy(proposal_metadata), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "governance_proposal", "GovernanceProposal", [])]);
    events = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(GovernanceEvents), new aptos_1.HexString("0x1"));
    temp$6 = events.create_proposal_events;
    temp$1 = $.copy(proposal_id);
    temp$2 = $.copy(proposer_address);
    temp$3 = $.copy(stake_pool);
    temp$4 = $.copy(execution_hash);
    temp$5 = $.copy(proposal_metadata);
    Event.emit_event_(temp$6, new CreateProposalEvent({ proposer: temp$2, stake_pool: temp$3, proposal_id: temp$1, execution_hash: temp$4, proposal_metadata: temp$5 }, new move_to_ts_2.SimpleStructTag(CreateProposalEvent)), $c, [new move_to_ts_2.SimpleStructTag(CreateProposalEvent)]);
    return;
}
exports.create_proposal_ = create_proposal_;
function buildPayload_create_proposal(stake_pool, execution_hash, metadata_location, metadata_hash, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "aptos_governance", "create_proposal", typeParamStrings, [
        stake_pool,
        execution_hash,
        metadata_location,
        metadata_hash,
    ], isJSON);
}
exports.buildPayload_create_proposal = buildPayload_create_proposal;
function create_proposal_metadata_(metadata_location, metadata_hash, $c) {
    let temp$1, temp$2, metadata;
    temp$1 = String.utf8_($.copy(metadata_location), $c);
    if (!(String.length_(temp$1, $c)).le((0, move_to_ts_1.u64)("256"))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EMETADATA_LOCATION_TOO_LONG), $c));
    }
    temp$2 = String.utf8_($.copy(metadata_hash), $c);
    if (!(String.length_(temp$2, $c)).le((0, move_to_ts_1.u64)("256"))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EMETADATA_HASH_TOO_LONG), $c));
    }
    metadata = Simple_map.create_($c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8)]);
    Simple_map.add_(metadata, String.utf8_($.copy(exports.METADATA_LOCATION_KEY), $c), $.copy(metadata_location), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8)]);
    Simple_map.add_(metadata, String.utf8_($.copy(exports.METADATA_HASH_KEY), $c), $.copy(metadata_hash), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8)]);
    return $.copy(metadata);
}
exports.create_proposal_metadata_ = create_proposal_metadata_;
function get_min_voting_threshold_($c) {
    return $.copy($c.borrow_global(new move_to_ts_2.SimpleStructTag(GovernanceConfig), new aptos_1.HexString("0x1")).min_voting_threshold);
}
exports.get_min_voting_threshold_ = get_min_voting_threshold_;
function get_required_proposer_stake_($c) {
    return $.copy($c.borrow_global(new move_to_ts_2.SimpleStructTag(GovernanceConfig), new aptos_1.HexString("0x1")).required_proposer_stake);
}
exports.get_required_proposer_stake_ = get_required_proposer_stake_;
function get_signer_(signer_address, $c) {
    let governance_responsibility, signer_cap;
    governance_responsibility = $c.borrow_global(new move_to_ts_2.SimpleStructTag(GovernanceResponsbility), new aptos_1.HexString("0x1"));
    signer_cap = Simple_map.borrow_(governance_responsibility.signer_caps, signer_address, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "account", "SignerCapability", [])]);
    return Account.create_signer_with_capability_(signer_cap, $c);
}
exports.get_signer_ = get_signer_;
function get_signer_testnet_only_(core_resources, signer_address, $c) {
    System_addresses.assert_core_resource_(core_resources, $c);
    if (!Aptos_coin.has_mint_capability_(core_resources, $c)) {
        throw $.abortCode(Error.unauthenticated_($.copy(exports.EUNAUTHORIZED), $c));
    }
    return get_signer_($.copy(signer_address), $c);
}
exports.get_signer_testnet_only_ = get_signer_testnet_only_;
function get_voting_duration_secs_($c) {
    return $.copy($c.borrow_global(new move_to_ts_2.SimpleStructTag(GovernanceConfig), new aptos_1.HexString("0x1")).voting_duration_secs);
}
exports.get_voting_duration_secs_ = get_voting_duration_secs_;
function get_voting_power_(pool_address, $c) {
    let temp$1, temp$2, active, allow_validator_set_change, pending_active, pending_inactive;
    temp$1 = Staking_config.get_($c);
    allow_validator_set_change = Staking_config.get_allow_validator_set_change_(temp$1, $c);
    if (allow_validator_set_change) {
        [active, , pending_active, pending_inactive] = Stake.get_stake_($.copy(pool_address), $c);
        temp$2 = (($.copy(active)).add($.copy(pending_active))).add($.copy(pending_inactive));
    }
    else {
        temp$2 = Stake.get_current_epoch_voting_power_($.copy(pool_address), $c);
    }
    return temp$2;
}
exports.get_voting_power_ = get_voting_power_;
function initialize_(aptos_framework, min_voting_threshold, required_proposer_stake, voting_duration_secs, $c) {
    let temp$1, temp$2, temp$3, temp$4;
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    Voting.register_(aptos_framework, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "governance_proposal", "GovernanceProposal", [])]);
    temp$4 = aptos_framework;
    temp$1 = $.copy(voting_duration_secs);
    temp$2 = $.copy(min_voting_threshold);
    temp$3 = $.copy(required_proposer_stake);
    $c.move_to(new move_to_ts_2.SimpleStructTag(GovernanceConfig), temp$4, new GovernanceConfig({ min_voting_threshold: temp$2, required_proposer_stake: temp$3, voting_duration_secs: temp$1 }, new move_to_ts_2.SimpleStructTag(GovernanceConfig)));
    $c.move_to(new move_to_ts_2.SimpleStructTag(GovernanceEvents), aptos_framework, new GovernanceEvents({ create_proposal_events: Account.new_event_handle_(aptos_framework, $c, [new move_to_ts_2.SimpleStructTag(CreateProposalEvent)]), update_config_events: Account.new_event_handle_(aptos_framework, $c, [new move_to_ts_2.SimpleStructTag(UpdateConfigEvent)]), vote_events: Account.new_event_handle_(aptos_framework, $c, [new move_to_ts_2.SimpleStructTag(VoteEvent)]) }, new move_to_ts_2.SimpleStructTag(GovernanceEvents)));
    $c.move_to(new move_to_ts_2.SimpleStructTag(VotingRecords), aptos_framework, new VotingRecords({ votes: Table.new___($c, [new move_to_ts_2.SimpleStructTag(RecordKey), move_to_ts_2.AtomicTypeTag.Bool]) }, new move_to_ts_2.SimpleStructTag(VotingRecords)));
    return $c.move_to(new move_to_ts_2.SimpleStructTag(ApprovedExecutionHashes), aptos_framework, new ApprovedExecutionHashes({ hashes: Simple_map.create_($c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8)]) }, new move_to_ts_2.SimpleStructTag(ApprovedExecutionHashes)));
}
exports.initialize_ = initialize_;
function initialize_for_verification_(aptos_framework, min_voting_threshold, required_proposer_stake, voting_duration_secs, $c) {
    initialize_(aptos_framework, $.copy(min_voting_threshold), $.copy(required_proposer_stake), $.copy(voting_duration_secs), $c);
    return;
}
exports.initialize_for_verification_ = initialize_for_verification_;
function reconfigure_(aptos_framework, $c) {
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    Reconfiguration.reconfigure_($c);
    return;
}
exports.reconfigure_ = reconfigure_;
function remove_approved_hash_(proposal_id, $c) {
    let temp$1, temp$2, approved_hashes;
    if (!Voting.is_resolved_(new aptos_1.HexString("0x1"), $.copy(proposal_id), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "governance_proposal", "GovernanceProposal", [])])) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EPROPOSAL_NOT_RESOLVED_YET), $c));
    }
    approved_hashes = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(ApprovedExecutionHashes), new aptos_1.HexString("0x1")).hashes;
    [temp$1, temp$2] = [approved_hashes, proposal_id];
    if (Simple_map.contains_key_(temp$1, temp$2, $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8)])) {
        Simple_map.remove_(approved_hashes, proposal_id, $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8)]);
    }
    else {
    }
    return;
}
exports.remove_approved_hash_ = remove_approved_hash_;
function resolve_(proposal_id, signer_address, $c) {
    Voting.resolve_(new aptos_1.HexString("0x1"), $.copy(proposal_id), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "governance_proposal", "GovernanceProposal", [])]);
    remove_approved_hash_($.copy(proposal_id), $c);
    return get_signer_($.copy(signer_address), $c);
}
exports.resolve_ = resolve_;
function store_signer_cap_(aptos_framework, signer_address, signer_cap, $c) {
    let signer_caps;
    System_addresses.assert_framework_reserved_address_(aptos_framework, $c);
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(GovernanceResponsbility), new aptos_1.HexString("0x1"))) {
        $c.move_to(new move_to_ts_2.SimpleStructTag(GovernanceResponsbility), aptos_framework, new GovernanceResponsbility({ signer_caps: Simple_map.create_($c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "account", "SignerCapability", [])]) }, new move_to_ts_2.SimpleStructTag(GovernanceResponsbility)));
    }
    else {
    }
    signer_caps = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(GovernanceResponsbility), new aptos_1.HexString("0x1")).signer_caps;
    Simple_map.add_(signer_caps, $.copy(signer_address), signer_cap, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "account", "SignerCapability", [])]);
    return;
}
exports.store_signer_cap_ = store_signer_cap_;
function update_governance_config_(aptos_framework, min_voting_threshold, required_proposer_stake, voting_duration_secs, $c) {
    let events, governance_config;
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    governance_config = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(GovernanceConfig), new aptos_1.HexString("0x1"));
    governance_config.voting_duration_secs = $.copy(voting_duration_secs);
    governance_config.min_voting_threshold = $.copy(min_voting_threshold);
    governance_config.required_proposer_stake = $.copy(required_proposer_stake);
    events = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(GovernanceEvents), new aptos_1.HexString("0x1"));
    Event.emit_event_(events.update_config_events, new UpdateConfigEvent({ min_voting_threshold: $.copy(min_voting_threshold), required_proposer_stake: $.copy(required_proposer_stake), voting_duration_secs: $.copy(voting_duration_secs) }, new move_to_ts_2.SimpleStructTag(UpdateConfigEvent)), $c, [new move_to_ts_2.SimpleStructTag(UpdateConfigEvent)]);
    return;
}
exports.update_governance_config_ = update_governance_config_;
function vote_(voter, stake_pool, proposal_id, should_pass, $c) {
    let temp$1, events, proposal_expiration, proposal_state, record_key, voter_address, voting_power, voting_records;
    voter_address = Signer.address_of_(voter, $c);
    if (!((Stake.get_delegated_voter_($.copy(stake_pool), $c)).hex() === ($.copy(voter_address)).hex())) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.ENOT_DELEGATED_VOTER), $c));
    }
    voting_records = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(VotingRecords), new aptos_1.HexString("0x1"));
    record_key = new RecordKey({ stake_pool: $.copy(stake_pool), proposal_id: $.copy(proposal_id) }, new move_to_ts_2.SimpleStructTag(RecordKey));
    if (!!Table.contains_(voting_records.votes, $.copy(record_key), $c, [new move_to_ts_2.SimpleStructTag(RecordKey), move_to_ts_2.AtomicTypeTag.Bool])) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EALREADY_VOTED), $c));
    }
    Table.add_(voting_records.votes, $.copy(record_key), true, $c, [new move_to_ts_2.SimpleStructTag(RecordKey), move_to_ts_2.AtomicTypeTag.Bool]);
    voting_power = get_voting_power_($.copy(stake_pool), $c);
    if (!($.copy(voting_power)).gt((0, move_to_ts_1.u64)("0"))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.ENO_VOTING_POWER), $c));
    }
    proposal_expiration = Voting.get_proposal_expiration_secs_(new aptos_1.HexString("0x1"), $.copy(proposal_id), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "governance_proposal", "GovernanceProposal", [])]);
    if (!(Stake.get_lockup_secs_($.copy(stake_pool), $c)).ge($.copy(proposal_expiration))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EINSUFFICIENT_STAKE_LOCKUP), $c));
    }
    temp$1 = Governance_proposal.create_empty_proposal_($c);
    Voting.vote_(temp$1, new aptos_1.HexString("0x1"), $.copy(proposal_id), $.copy(voting_power), should_pass, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "governance_proposal", "GovernanceProposal", [])]);
    events = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(GovernanceEvents), new aptos_1.HexString("0x1"));
    Event.emit_event_(events.vote_events, new VoteEvent({ proposal_id: $.copy(proposal_id), voter: $.copy(voter_address), stake_pool: $.copy(stake_pool), num_votes: $.copy(voting_power), should_pass: should_pass }, new move_to_ts_2.SimpleStructTag(VoteEvent)), $c, [new move_to_ts_2.SimpleStructTag(VoteEvent)]);
    proposal_state = Voting.get_proposal_state_(new aptos_1.HexString("0x1"), $.copy(proposal_id), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "governance_proposal", "GovernanceProposal", [])]);
    if (($.copy(proposal_state)).eq(($.copy(exports.PROPOSAL_STATE_SUCCEEDED)))) {
        add_approved_script_hash_($.copy(proposal_id), $c);
    }
    else {
    }
    return;
}
exports.vote_ = vote_;
function buildPayload_vote(stake_pool, proposal_id, should_pass, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "aptos_governance", "vote", typeParamStrings, [
        stake_pool,
        proposal_id,
        should_pass,
    ], isJSON);
}
exports.buildPayload_vote = buildPayload_vote;
function loadParsers(repo) {
    repo.addParser("0x1::aptos_governance::ApprovedExecutionHashes", ApprovedExecutionHashes.ApprovedExecutionHashesParser);
    repo.addParser("0x1::aptos_governance::CreateProposalEvent", CreateProposalEvent.CreateProposalEventParser);
    repo.addParser("0x1::aptos_governance::GovernanceConfig", GovernanceConfig.GovernanceConfigParser);
    repo.addParser("0x1::aptos_governance::GovernanceEvents", GovernanceEvents.GovernanceEventsParser);
    repo.addParser("0x1::aptos_governance::GovernanceResponsbility", GovernanceResponsbility.GovernanceResponsbilityParser);
    repo.addParser("0x1::aptos_governance::RecordKey", RecordKey.RecordKeyParser);
    repo.addParser("0x1::aptos_governance::UpdateConfigEvent", UpdateConfigEvent.UpdateConfigEventParser);
    repo.addParser("0x1::aptos_governance::VoteEvent", VoteEvent.VoteEventParser);
    repo.addParser("0x1::aptos_governance::VotingRecords", VotingRecords.VotingRecordsParser);
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
    get ApprovedExecutionHashes() { return ApprovedExecutionHashes; }
    loadApprovedExecutionHashes(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield ApprovedExecutionHashes.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get CreateProposalEvent() { return CreateProposalEvent; }
    get GovernanceConfig() { return GovernanceConfig; }
    loadGovernanceConfig(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield GovernanceConfig.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get GovernanceEvents() { return GovernanceEvents; }
    loadGovernanceEvents(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield GovernanceEvents.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get GovernanceResponsbility() { return GovernanceResponsbility; }
    loadGovernanceResponsbility(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield GovernanceResponsbility.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get RecordKey() { return RecordKey; }
    get UpdateConfigEvent() { return UpdateConfigEvent; }
    get VoteEvent() { return VoteEvent; }
    get VotingRecords() { return VotingRecords; }
    loadVotingRecords(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield VotingRecords.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    payload_add_approved_script_hash_script(proposal_id, isJSON = false) {
        return buildPayload_add_approved_script_hash_script(proposal_id, isJSON);
    }
    add_approved_script_hash_script(_account, proposal_id, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_add_approved_script_hash_script(proposal_id, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_create_proposal(stake_pool, execution_hash, metadata_location, metadata_hash, isJSON = false) {
        return buildPayload_create_proposal(stake_pool, execution_hash, metadata_location, metadata_hash, isJSON);
    }
    create_proposal(_account, stake_pool, execution_hash, metadata_location, metadata_hash, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_create_proposal(stake_pool, execution_hash, metadata_location, metadata_hash, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_vote(stake_pool, proposal_id, should_pass, isJSON = false) {
        return buildPayload_vote(stake_pool, proposal_id, should_pass, isJSON);
    }
    vote(_account, stake_pool, proposal_id, should_pass, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_vote(stake_pool, proposal_id, should_pass, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
}
exports.App = App;
//# sourceMappingURL=aptos_governance.js.map