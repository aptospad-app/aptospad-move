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
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = exports.getPackageRepo = exports.loadParsers = exports.Scripts = exports.Project = exports.Iterable_table = exports.Config = exports.Aptospad_swap = exports.Aptospad_coin_boot = void 0;
const move_to_ts_1 = require("@manahippo/move-to-ts");
const Aptospad_coin_boot = __importStar(require("./aptospad_coin_boot"));
const Aptospad_swap = __importStar(require("./aptospad_swap"));
const Config = __importStar(require("./config"));
const Iterable_table = __importStar(require("./iterable_table"));
const Project = __importStar(require("./project"));
const Scripts = __importStar(require("./scripts"));
exports.Aptospad_coin_boot = __importStar(require("./aptospad_coin_boot"));
exports.Aptospad_swap = __importStar(require("./aptospad_swap"));
exports.Config = __importStar(require("./config"));
exports.Iterable_table = __importStar(require("./iterable_table"));
exports.Project = __importStar(require("./project"));
exports.Scripts = __importStar(require("./scripts"));
function loadParsers(repo) {
    Aptospad_coin_boot.loadParsers(repo);
    Aptospad_swap.loadParsers(repo);
    Config.loadParsers(repo);
    Iterable_table.loadParsers(repo);
    Project.loadParsers(repo);
    Scripts.loadParsers(repo);
}
exports.loadParsers = loadParsers;
function getPackageRepo() {
    const repo = new move_to_ts_1.AptosParserRepo();
    loadParsers(repo);
    repo.addDefaultParsers();
    return repo;
}
exports.getPackageRepo = getPackageRepo;
class App {
    constructor(client, repo, cache) {
        this.client = client;
        this.repo = repo;
        this.cache = cache;
        this.aptospad_coin_boot = new Aptospad_coin_boot.App(client, repo, cache);
        this.aptospad_swap = new Aptospad_swap.App(client, repo, cache);
        this.config = new Config.App(client, repo, cache);
        this.iterable_table = new Iterable_table.App(client, repo, cache);
        this.project = new Project.App(client, repo, cache);
        this.scripts = new Scripts.App(client, repo, cache);
    }
}
exports.App = App;
//# sourceMappingURL=index.js.map