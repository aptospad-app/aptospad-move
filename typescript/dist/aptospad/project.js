"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = exports.loadParsers = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const aptos_1 = require("aptos");
exports.packageName = "AptosPad";
exports.moduleAddress = new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0");
exports.moduleName = "project";
function loadParsers(repo) {
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
}
exports.App = App;
//# sourceMappingURL=project.js.map