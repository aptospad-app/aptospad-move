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
exports.App = exports.loadParsers = exports.update_total_coins_ = exports.transfer_shares_ = exports.total_shares_ = exports.total_coins_ = exports.to_u128_ = exports.shares_to_amount_with_total_coins_ = exports.shares_to_amount_ = exports.shares_ = exports.shareholders_count_ = exports.shareholders_ = exports.redeem_shares_ = exports.multiply_then_divide_ = exports.destroy_empty_ = exports.deduct_shares_ = exports.create_with_scaling_factor_ = exports.create_ = exports.contains_ = exports.buy_in_ = exports.balance_ = exports.amount_to_shares_with_total_coins_ = exports.amount_to_shares_ = exports.add_shares_ = exports.Pool = exports.MAX_U64 = exports.ETOO_MANY_SHAREHOLDERS = exports.ESHAREHOLDER_SHARES_OVERFLOW = exports.ESHAREHOLDER_NOT_FOUND = exports.EPOOL_TOTAL_SHARES_OVERFLOW = exports.EPOOL_TOTAL_COINS_OVERFLOW = exports.EPOOL_IS_NOT_EMPTY = exports.EINSUFFICIENT_SHARES = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Error = __importStar(require("./error"));
const Simple_map = __importStar(require("./simple_map"));
const Vector = __importStar(require("./vector"));
exports.packageName = "AptosStdlib";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "pool_u64";
exports.EINSUFFICIENT_SHARES = (0, move_to_ts_1.u64)("4");
exports.EPOOL_IS_NOT_EMPTY = (0, move_to_ts_1.u64)("3");
exports.EPOOL_TOTAL_COINS_OVERFLOW = (0, move_to_ts_1.u64)("6");
exports.EPOOL_TOTAL_SHARES_OVERFLOW = (0, move_to_ts_1.u64)("7");
exports.ESHAREHOLDER_NOT_FOUND = (0, move_to_ts_1.u64)("1");
exports.ESHAREHOLDER_SHARES_OVERFLOW = (0, move_to_ts_1.u64)("5");
exports.ETOO_MANY_SHAREHOLDERS = (0, move_to_ts_1.u64)("2");
exports.MAX_U64 = (0, move_to_ts_1.u64)("18446744073709551615");
class Pool {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.shareholders_limit = proto['shareholders_limit'];
        this.total_coins = proto['total_coins'];
        this.total_shares = proto['total_shares'];
        this.shares = proto['shares'];
        this.shareholders = proto['shareholders'];
        this.scaling_factor = proto['scaling_factor'];
    }
    static PoolParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Pool);
        return new Pool(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Pool", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.shares.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.Pool = Pool;
Pool.moduleAddress = exports.moduleAddress;
Pool.moduleName = exports.moduleName;
Pool.structName = "Pool";
Pool.typeParameters = [];
Pool.fields = [
    { name: "shareholders_limit", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "total_coins", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "total_shares", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "shares", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "simple_map", "SimpleMap", [move_to_ts_2.AtomicTypeTag.Address, move_to_ts_2.AtomicTypeTag.U64]) },
    { name: "shareholders", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.Address) },
    { name: "scaling_factor", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
function add_shares_(pool, shareholder, new_shares, $c) {
    let temp$1, temp$2, temp$3, temp$4, current_shares, existing_shares;
    [temp$1, temp$2] = [pool, $.copy(shareholder)];
    if (contains_(temp$1, temp$2, $c)) {
        existing_shares = Simple_map.borrow_mut_(pool.shares, shareholder, $c, [move_to_ts_2.AtomicTypeTag.Address, move_to_ts_2.AtomicTypeTag.U64]);
        current_shares = $.copy(existing_shares);
        if (!(($.copy(exports.MAX_U64)).sub($.copy(current_shares))).ge($.copy(new_shares))) {
            throw $.abortCode(Error.invalid_argument_($.copy(exports.ESHAREHOLDER_SHARES_OVERFLOW), $c));
        }
        $.set(existing_shares, ($.copy(current_shares)).add($.copy(new_shares)));
        temp$4 = $.copy(existing_shares);
    }
    else {
        if (($.copy(new_shares)).gt((0, move_to_ts_1.u64)("0"))) {
            if (!(Vector.length_(pool.shareholders, $c, [move_to_ts_2.AtomicTypeTag.Address])).lt($.copy(pool.shareholders_limit))) {
                throw $.abortCode(Error.invalid_state_($.copy(exports.ETOO_MANY_SHAREHOLDERS), $c));
            }
            Vector.push_back_(pool.shareholders, $.copy(shareholder), $c, [move_to_ts_2.AtomicTypeTag.Address]);
            Simple_map.add_(pool.shares, $.copy(shareholder), $.copy(new_shares), $c, [move_to_ts_2.AtomicTypeTag.Address, move_to_ts_2.AtomicTypeTag.U64]);
            temp$3 = $.copy(new_shares);
        }
        else {
            temp$3 = $.copy(new_shares);
        }
        temp$4 = temp$3;
    }
    return temp$4;
}
exports.add_shares_ = add_shares_;
function amount_to_shares_(pool, coins_amount, $c) {
    return amount_to_shares_with_total_coins_(pool, $.copy(coins_amount), $.copy(pool.total_coins), $c);
}
exports.amount_to_shares_ = amount_to_shares_;
function amount_to_shares_with_total_coins_(pool, coins_amount, total_coins, $c) {
    let temp$1, temp$2;
    if (($.copy(pool.total_coins)).eq(((0, move_to_ts_1.u64)("0")))) {
        temp$1 = true;
    }
    else {
        temp$1 = ($.copy(pool.total_shares)).eq(((0, move_to_ts_1.u64)("0")));
    }
    if (temp$1) {
        temp$2 = ($.copy(coins_amount)).mul($.copy(pool.scaling_factor));
    }
    else {
        temp$2 = multiply_then_divide_(pool, $.copy(coins_amount), $.copy(pool.total_shares), $.copy(total_coins), $c);
    }
    return temp$2;
}
exports.amount_to_shares_with_total_coins_ = amount_to_shares_with_total_coins_;
function balance_(pool, shareholder, $c) {
    let num_shares;
    num_shares = shares_(pool, $.copy(shareholder), $c);
    return shares_to_amount_(pool, $.copy(num_shares), $c);
}
exports.balance_ = balance_;
function buy_in_(pool, shareholder, coins_amount, $c) {
    let temp$1, temp$2, new_shares;
    if (($.copy(coins_amount)).eq(((0, move_to_ts_1.u64)("0")))) {
        return (0, move_to_ts_1.u64)("0");
    }
    else {
    }
    [temp$1, temp$2] = [pool, $.copy(coins_amount)];
    new_shares = amount_to_shares_(temp$1, temp$2, $c);
    if (!(($.copy(exports.MAX_U64)).sub($.copy(pool.total_coins))).ge($.copy(coins_amount))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EPOOL_TOTAL_COINS_OVERFLOW), $c));
    }
    if (!(($.copy(exports.MAX_U64)).sub($.copy(pool.total_shares))).ge($.copy(new_shares))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EPOOL_TOTAL_COINS_OVERFLOW), $c));
    }
    pool.total_coins = ($.copy(pool.total_coins)).add($.copy(coins_amount));
    pool.total_shares = ($.copy(pool.total_shares)).add($.copy(new_shares));
    add_shares_(pool, $.copy(shareholder), $.copy(new_shares), $c);
    return $.copy(new_shares);
}
exports.buy_in_ = buy_in_;
function contains_(pool, shareholder, $c) {
    return Simple_map.contains_key_(pool.shares, shareholder, $c, [move_to_ts_2.AtomicTypeTag.Address, move_to_ts_2.AtomicTypeTag.U64]);
}
exports.contains_ = contains_;
function create_(shareholders_limit, $c) {
    return create_with_scaling_factor_($.copy(shareholders_limit), (0, move_to_ts_1.u64)("1"), $c);
}
exports.create_ = create_;
function create_with_scaling_factor_(shareholders_limit, scaling_factor, $c) {
    return new Pool({ shareholders_limit: $.copy(shareholders_limit), total_coins: (0, move_to_ts_1.u64)("0"), total_shares: (0, move_to_ts_1.u64)("0"), shares: Simple_map.create_($c, [move_to_ts_2.AtomicTypeTag.Address, move_to_ts_2.AtomicTypeTag.U64]), shareholders: Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.Address]), scaling_factor: $.copy(scaling_factor) }, new move_to_ts_2.SimpleStructTag(Pool));
}
exports.create_with_scaling_factor_ = create_with_scaling_factor_;
function deduct_shares_(pool, shareholder, num_shares, $c) {
    let temp$1, temp$2, temp$3, temp$4, existing_shares, remaining_shares, shareholder_index;
    [temp$1, temp$2] = [pool, $.copy(shareholder)];
    if (!contains_(temp$1, temp$2, $c)) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.ESHAREHOLDER_NOT_FOUND), $c));
    }
    [temp$3, temp$4] = [pool, $.copy(shareholder)];
    if (!(shares_(temp$3, temp$4, $c)).ge($.copy(num_shares))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EINSUFFICIENT_SHARES), $c));
    }
    existing_shares = Simple_map.borrow_mut_(pool.shares, shareholder, $c, [move_to_ts_2.AtomicTypeTag.Address, move_to_ts_2.AtomicTypeTag.U64]);
    $.set(existing_shares, ($.copy(existing_shares)).sub($.copy(num_shares)));
    remaining_shares = $.copy(existing_shares);
    if (($.copy(remaining_shares)).eq(((0, move_to_ts_1.u64)("0")))) {
        [, shareholder_index] = Vector.index_of_(pool.shareholders, shareholder, $c, [move_to_ts_2.AtomicTypeTag.Address]);
        Vector.remove_(pool.shareholders, $.copy(shareholder_index), $c, [move_to_ts_2.AtomicTypeTag.Address]);
        Simple_map.remove_(pool.shares, shareholder, $c, [move_to_ts_2.AtomicTypeTag.Address, move_to_ts_2.AtomicTypeTag.U64]);
    }
    else {
    }
    return $.copy(remaining_shares);
}
exports.deduct_shares_ = deduct_shares_;
function destroy_empty_(pool, $c) {
    if (!($.copy(pool.total_coins)).eq(((0, move_to_ts_1.u64)("0")))) {
        throw $.abortCode(Error.invalid_state_($.copy(exports.EPOOL_IS_NOT_EMPTY), $c));
    }
    pool;
    return;
}
exports.destroy_empty_ = destroy_empty_;
function multiply_then_divide_(_pool, x, y, z, $c) {
    let result;
    result = ((to_u128_($.copy(x), $c)).mul(to_u128_($.copy(y), $c))).div(to_u128_($.copy(z), $c));
    return (0, move_to_ts_1.u64)($.copy(result));
}
exports.multiply_then_divide_ = multiply_then_divide_;
function redeem_shares_(pool, shareholder, shares_to_redeem, $c) {
    let temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, redeemed_coins;
    [temp$1, temp$2] = [pool, $.copy(shareholder)];
    if (!contains_(temp$1, temp$2, $c)) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.ESHAREHOLDER_NOT_FOUND), $c));
    }
    [temp$3, temp$4] = [pool, $.copy(shareholder)];
    if (!(shares_(temp$3, temp$4, $c)).ge($.copy(shares_to_redeem))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EINSUFFICIENT_SHARES), $c));
    }
    if (($.copy(shares_to_redeem)).eq(((0, move_to_ts_1.u64)("0")))) {
        return (0, move_to_ts_1.u64)("0");
    }
    else {
    }
    [temp$5, temp$6] = [pool, $.copy(shares_to_redeem)];
    redeemed_coins = shares_to_amount_(temp$5, temp$6, $c);
    pool.total_coins = ($.copy(pool.total_coins)).sub($.copy(redeemed_coins));
    pool.total_shares = ($.copy(pool.total_shares)).sub($.copy(shares_to_redeem));
    deduct_shares_(pool, $.copy(shareholder), $.copy(shares_to_redeem), $c);
    return $.copy(redeemed_coins);
}
exports.redeem_shares_ = redeem_shares_;
function shareholders_(pool, $c) {
    return $.copy(pool.shareholders);
}
exports.shareholders_ = shareholders_;
function shareholders_count_(pool, $c) {
    return Vector.length_(pool.shareholders, $c, [move_to_ts_2.AtomicTypeTag.Address]);
}
exports.shareholders_count_ = shareholders_count_;
function shares_(pool, shareholder, $c) {
    let temp$1;
    if (contains_(pool, $.copy(shareholder), $c)) {
        temp$1 = $.copy(Simple_map.borrow_(pool.shares, shareholder, $c, [move_to_ts_2.AtomicTypeTag.Address, move_to_ts_2.AtomicTypeTag.U64]));
    }
    else {
        temp$1 = (0, move_to_ts_1.u64)("0");
    }
    return temp$1;
}
exports.shares_ = shares_;
function shares_to_amount_(pool, shares, $c) {
    return shares_to_amount_with_total_coins_(pool, $.copy(shares), $.copy(pool.total_coins), $c);
}
exports.shares_to_amount_ = shares_to_amount_;
function shares_to_amount_with_total_coins_(pool, shares, total_coins, $c) {
    let temp$1, temp$2;
    if (($.copy(pool.total_coins)).eq(((0, move_to_ts_1.u64)("0")))) {
        temp$1 = true;
    }
    else {
        temp$1 = ($.copy(pool.total_shares)).eq(((0, move_to_ts_1.u64)("0")));
    }
    if (temp$1) {
        temp$2 = (0, move_to_ts_1.u64)("0");
    }
    else {
        temp$2 = multiply_then_divide_(pool, $.copy(shares), $.copy(total_coins), $.copy(pool.total_shares), $c);
    }
    return temp$2;
}
exports.shares_to_amount_with_total_coins_ = shares_to_amount_with_total_coins_;
function to_u128_(num, $c) {
    return (0, move_to_ts_1.u128)($.copy(num));
}
exports.to_u128_ = to_u128_;
function total_coins_(pool, $c) {
    return $.copy(pool.total_coins);
}
exports.total_coins_ = total_coins_;
function total_shares_(pool, $c) {
    return $.copy(pool.total_shares);
}
exports.total_shares_ = total_shares_;
function transfer_shares_(pool, shareholder_1, shareholder_2, shares_to_transfer, $c) {
    let temp$1, temp$2, temp$3, temp$4;
    [temp$1, temp$2] = [pool, $.copy(shareholder_1)];
    if (!contains_(temp$1, temp$2, $c)) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.ESHAREHOLDER_NOT_FOUND), $c));
    }
    [temp$3, temp$4] = [pool, $.copy(shareholder_1)];
    if (!(shares_(temp$3, temp$4, $c)).ge($.copy(shares_to_transfer))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EINSUFFICIENT_SHARES), $c));
    }
    if (($.copy(shares_to_transfer)).eq(((0, move_to_ts_1.u64)("0")))) {
        return;
    }
    else {
    }
    deduct_shares_(pool, $.copy(shareholder_1), $.copy(shares_to_transfer), $c);
    add_shares_(pool, $.copy(shareholder_2), $.copy(shares_to_transfer), $c);
    return;
}
exports.transfer_shares_ = transfer_shares_;
function update_total_coins_(pool, new_total_coins, $c) {
    pool.total_coins = $.copy(new_total_coins);
    return;
}
exports.update_total_coins_ = update_total_coins_;
function loadParsers(repo) {
    repo.addParser("0x1::pool_u64::Pool", Pool.PoolParser);
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
    get Pool() { return Pool; }
}
exports.App = App;
//# sourceMappingURL=pool_u64.js.map