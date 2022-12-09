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
exports.App = exports.loadParsers = exports.AptosPadCoin = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
exports.packageName = "AptosPadCoin";
exports.moduleAddress = new aptos_1.HexString("0x1c07732f8f9bed7ee795519629ce8c334d08348fccadbb473d859464042a3ba7");
exports.moduleName = "aptospad_coin";
class AptosPadCoin {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
    }
    static AptosPadCoinParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, AptosPadCoin);
        return new AptosPadCoin(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_1.StructTag(exports.moduleAddress, exports.moduleName, "AptosPadCoin", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.AptosPadCoin = AptosPadCoin;
AptosPadCoin.moduleAddress = exports.moduleAddress;
AptosPadCoin.moduleName = exports.moduleName;
AptosPadCoin.structName = "AptosPadCoin";
AptosPadCoin.typeParameters = [];
AptosPadCoin.fields = [];
function loadParsers(repo) {
    repo.addParser("0x1c07732f8f9bed7ee795519629ce8c334d08348fccadbb473d859464042a3ba7::aptospad_coin::AptosPadCoin", AptosPadCoin.AptosPadCoinParser);
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
    get AptosPadCoin() { return AptosPadCoin; }
}
exports.App = App;
//# sourceMappingURL=aptospad_coin.js.map