"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = exports.loadParsers = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const aptos_1 = require("aptos");
exports.packageName = "AptosPad";
exports.moduleAddress = new aptos_1.HexString("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea");
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