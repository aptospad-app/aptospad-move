import * as $ from "@manahippo/move-to-ts";
import {AptosDataCache, AptosParserRepo, DummyCache, AptosLocalCache} from "@manahippo/move-to-ts";
import {U8, U64, U128} from "@manahippo/move-to-ts";
import {u8, u64, u128} from "@manahippo/move-to-ts";
import {TypeParamDeclType, FieldDeclType} from "@manahippo/move-to-ts";
import {AtomicTypeTag, StructTag, TypeTag, VectorTag, SimpleStructTag} from "@manahippo/move-to-ts";
import {OptionTransaction} from "@manahippo/move-to-ts";
import {HexString, AptosClient, AptosAccount, TxnBuilderTypes, Types} from "aptos";
import * as Stdlib from "../stdlib";
import * as Config from "./config";
import * as Iterable_table from "./iterable_table";
export const packageName = "AptosPad";
export const moduleAddress = new HexString("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea");
export const moduleName = "aptospad_swap";

export const DEFAULT_CAP_1K : U64 = (u64("100000000")).mul(u64("100"));
export const DEFAULT_OVERFLOW_100 : U64 = (u64("100000000")).mul(u64("100"));
export const ERR_BID_OVERFLOW : U64 = u64("412");
export const ERR_EMERGENCY : U64 = u64("405");
export const ERR_HARDCAP_REACHED : U64 = u64("410");
export const ERR_NOT_IN_WHITELIST : U64 = u64("411");
export const ERR_PERMISSIONS : U64 = u64("403");
export const ERR_SEASON_ACTIVE : U64 = u64("408");
export const ERR_SEASON_ENDED : U64 = u64("406");
export const ERR_SEASON_NOT_RESET : U64 = u64("407");
export const ERR_SEASON_STATE : U64 = u64("409");
export const REFUND_CHARGE_RATE_PER_100K : U64 = u64("100");
export const STATE_DISTRIBUTE : U8 = u8("4");
export const STATE_DISTRIBUTE2 : U8 = u8("5");
export const STATE_ENDED : U8 = u8("5");
export const STATE_INIT : U8 = u8("1");
export const STATE_LAUNCHPAD : U8 = u8("3");
export const STATE_WL : U8 = u8("2");


export class BidAptosPadEvent 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "BidAptosPadEvent";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  { name: "cap", typeTag: AtomicTypeTag.U64 },
  { name: "bid", typeTag: AtomicTypeTag.U64 },
  { name: "investor", typeTag: AtomicTypeTag.Address }];

  cap: U64;
  bid: U64;
  investor: HexString;

  constructor(proto: any, public typeTag: TypeTag) {
    this.cap = proto['cap'] as U64;
    this.bid = proto['bid'] as U64;
    this.investor = proto['investor'] as HexString;
  }

  static BidAptosPadEventParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : BidAptosPadEvent {
    const proto = $.parseStructProto(data, typeTag, repo, BidAptosPadEvent);
    return new BidAptosPadEvent(proto, typeTag);
  }

  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "BidAptosPadEvent", []);
  }
  async loadFullState(app: $.AppType) {
    this.__app = app;
  }

}

export class DistributeAptospadEvent 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "DistributeAptospadEvent";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  { name: "cap", typeTag: AtomicTypeTag.U64 },
  { name: "bid", typeTag: AtomicTypeTag.U64 },
  { name: "distributedToken", typeTag: AtomicTypeTag.U64 },
  { name: "refund", typeTag: AtomicTypeTag.U64 },
  { name: "investor", typeTag: AtomicTypeTag.Address }];

  cap: U64;
  bid: U64;
  distributedToken: U64;
  refund: U64;
  investor: HexString;

  constructor(proto: any, public typeTag: TypeTag) {
    this.cap = proto['cap'] as U64;
    this.bid = proto['bid'] as U64;
    this.distributedToken = proto['distributedToken'] as U64;
    this.refund = proto['refund'] as U64;
    this.investor = proto['investor'] as HexString;
  }

  static DistributeAptospadEventParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : DistributeAptospadEvent {
    const proto = $.parseStructProto(data, typeTag, repo, DistributeAptospadEvent);
    return new DistributeAptospadEvent(proto, typeTag);
  }

  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "DistributeAptospadEvent", []);
  }
  async loadFullState(app: $.AppType) {
    this.__app = app;
  }

}

export class LaunchPadRegistry 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "LaunchPadRegistry";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  { name: "investors", typeTag: new StructTag(new HexString("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea"), "iterable_table", "IterableTable", [AtomicTypeTag.Address, new StructTag(new HexString("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea"), "aptospad_swap", "TokenDistribute", [])]) },
  { name: "totalBid", typeTag: AtomicTypeTag.U64 },
  { name: "bidaptospad_events", typeTag: new StructTag(new HexString("0x1"), "event", "EventHandle", [new StructTag(new HexString("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea"), "aptospad_swap", "BidAptosPadEvent", [])]) },
  { name: "distributeaptospad_events", typeTag: new StructTag(new HexString("0x1"), "event", "EventHandle", [new StructTag(new HexString("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea"), "aptospad_swap", "DistributeAptospadEvent", [])]) },
  { name: "whitelist_events", typeTag: new StructTag(new HexString("0x1"), "event", "EventHandle", [new StructTag(new HexString("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea"), "aptospad_swap", "WhiteListEvent", [])]) }];

  investors: Iterable_table.IterableTable;
  totalBid: U64;
  bidaptospad_events: Stdlib.Event.EventHandle;
  distributeaptospad_events: Stdlib.Event.EventHandle;
  whitelist_events: Stdlib.Event.EventHandle;

  constructor(proto: any, public typeTag: TypeTag) {
    this.investors = proto['investors'] as Iterable_table.IterableTable;
    this.totalBid = proto['totalBid'] as U64;
    this.bidaptospad_events = proto['bidaptospad_events'] as Stdlib.Event.EventHandle;
    this.distributeaptospad_events = proto['distributeaptospad_events'] as Stdlib.Event.EventHandle;
    this.whitelist_events = proto['whitelist_events'] as Stdlib.Event.EventHandle;
  }

  static LaunchPadRegistryParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : LaunchPadRegistry {
    const proto = $.parseStructProto(data, typeTag, repo, LaunchPadRegistry);
    return new LaunchPadRegistry(proto, typeTag);
  }

  static async load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]) {
    const result = await repo.loadResource(client, address, LaunchPadRegistry, typeParams);
    return result as unknown as LaunchPadRegistry;
  }
  static async loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]) {
    const result = await app.repo.loadResource(app.client, address, LaunchPadRegistry, typeParams);
    await result.loadFullState(app)
    return result as unknown as LaunchPadRegistry;
  }
  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "LaunchPadRegistry", []);
  }
  async loadFullState(app: $.AppType) {
    await this.investors.loadFullState(app);
    await this.bidaptospad_events.loadFullState(app);
    await this.distributeaptospad_events.loadFullState(app);
    await this.whitelist_events.loadFullState(app);
    this.__app = app;
  }

}

export class TokenDistribute 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "TokenDistribute";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  { name: "cap", typeTag: AtomicTypeTag.U64 },
  { name: "bid", typeTag: AtomicTypeTag.U64 },
  { name: "distributed", typeTag: AtomicTypeTag.U64 },
  { name: "distributedToken", typeTag: AtomicTypeTag.U64 },
  { name: "refund", typeTag: AtomicTypeTag.U64 },
  { name: "investor", typeTag: AtomicTypeTag.Address }];

  cap: U64;
  bid: U64;
  distributed: U64;
  distributedToken: U64;
  refund: U64;
  investor: HexString;

  constructor(proto: any, public typeTag: TypeTag) {
    this.cap = proto['cap'] as U64;
    this.bid = proto['bid'] as U64;
    this.distributed = proto['distributed'] as U64;
    this.distributedToken = proto['distributedToken'] as U64;
    this.refund = proto['refund'] as U64;
    this.investor = proto['investor'] as HexString;
  }

  static TokenDistributeParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : TokenDistribute {
    const proto = $.parseStructProto(data, typeTag, repo, TokenDistribute);
    return new TokenDistribute(proto, typeTag);
  }

  static async load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]) {
    const result = await repo.loadResource(client, address, TokenDistribute, typeParams);
    return result as unknown as TokenDistribute;
  }
  static async loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]) {
    const result = await app.repo.loadResource(app.client, address, TokenDistribute, typeParams);
    await result.loadFullState(app)
    return result as unknown as TokenDistribute;
  }
  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "TokenDistribute", []);
  }
  async loadFullState(app: $.AppType) {
    this.__app = app;
  }

}

export class WhiteListEvent 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "WhiteListEvent";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  { name: "cap", typeTag: AtomicTypeTag.U64 },
  { name: "bid", typeTag: AtomicTypeTag.U64 },
  { name: "distributed", typeTag: AtomicTypeTag.U64 },
  { name: "distributedToken", typeTag: AtomicTypeTag.U64 },
  { name: "refund", typeTag: AtomicTypeTag.U64 },
  { name: "investor", typeTag: AtomicTypeTag.Address }];

  cap: U64;
  bid: U64;
  distributed: U64;
  distributedToken: U64;
  refund: U64;
  investor: HexString;

  constructor(proto: any, public typeTag: TypeTag) {
    this.cap = proto['cap'] as U64;
    this.bid = proto['bid'] as U64;
    this.distributed = proto['distributed'] as U64;
    this.distributedToken = proto['distributedToken'] as U64;
    this.refund = proto['refund'] as U64;
    this.investor = proto['investor'] as HexString;
  }

  static WhiteListEventParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : WhiteListEvent {
    const proto = $.parseStructProto(data, typeTag, repo, WhiteListEvent);
    return new WhiteListEvent(proto, typeTag);
  }

  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "WhiteListEvent", []);
  }
  async loadFullState(app: $.AppType) {
    this.__app = app;
  }

}
export function addWhiteList_ (
  aptospadAdmin: HexString,
  account: HexString,
  cap: U64,
  $c: AptosDataCache,
): void {
  let temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7, temp$8, investors, registry, wl, wlEventHandler;
  assert_admin_(aptospadAdmin, $c);
  if (!(Config.getSwapState_($c)).eq(($.copy(STATE_WL)))) {
    throw $.abortCode($.copy(ERR_SEASON_STATE));
  }
  registry = $c.borrow_global_mut<LaunchPadRegistry>(new SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
  investors = registry.investors;
  wlEventHandler = registry.whitelist_events;
  temp$8 = investors;
  temp$7 = $.copy(account);
  temp$1 = u64("0");
  temp$2 = u64("0");
  temp$3 = u64("0");
  temp$4 = u64("0");
  temp$5 = u64("0");
  temp$6 = $.copy(account);
  wl = Iterable_table.borrow_mut_with_default_(temp$8, temp$7, new TokenDistribute({ cap: temp$1, bid: temp$4, distributed: temp$2, distributedToken: temp$3, refund: temp$5, investor: temp$6 }, new SimpleStructTag(TokenDistribute)), $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
  wl.cap = $.copy(cap);
  Stdlib.Event.emit_event_(wlEventHandler, new WhiteListEvent({ cap: $.copy(wl.cap), bid: $.copy(wl.bid), distributed: $.copy(wl.distributedToken), distributedToken: $.copy(wl.refund), refund: $.copy(wl.refund), investor: $.copy(wl.investor) }, new SimpleStructTag(WhiteListEvent)), $c, [new SimpleStructTag(WhiteListEvent)]);
  return;
}

export function assert_admin_ (
  aptosAdmin: HexString,
  $c: AptosDataCache,
): void {
  if (!((Stdlib.Signer.address_of_(aptosAdmin, $c)).hex() === (new HexString("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea")).hex())) {
    throw $.abortCode($.copy(ERR_PERMISSIONS));
  }
  return;
}

export function assert_no_emergency_ (
  $c: AptosDataCache,
): void {
  if (!!Config.isEmergency_($c)) {
    throw $.abortCode($.copy(ERR_EMERGENCY));
  }
  return;
}

export function bidAptosPad_ (
  user: HexString,
  aptosAmount: U64,
  $c: AptosDataCache,
): void {
  let temp$1, temp$2, bypassWhitelistEnabled, eventHandler, hardCap, isWhitelisted, registry, wl;
  assert_no_emergency_($c);
  if (!(Config.getSwapState_($c)).eq(($.copy(STATE_LAUNCHPAD)))) {
    throw $.abortCode($.copy(ERR_SEASON_STATE));
  }
  hardCap = Config.getSwapConfigHardCap_($c);
  registry = $c.borrow_global_mut<LaunchPadRegistry>(new SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
  bypassWhitelistEnabled = Config.isBypassWhiteList_($c);
  [temp$1, temp$2] = [registry.investors, Stdlib.Signer.address_of_(user, $c)];
  isWhitelisted = Iterable_table.contains_(temp$1, temp$2, $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
  if (!(bypassWhitelistEnabled || isWhitelisted)) {
    throw $.abortCode($.copy(ERR_NOT_IN_WHITELIST));
  }
  if (!($.copy(registry.totalBid)).le($.copy(hardCap))) {
    throw $.abortCode($.copy(ERR_HARDCAP_REACHED));
  }
  registry.totalBid = ($.copy(registry.totalBid)).add($.copy(aptosAmount));
  eventHandler = registry.bidaptospad_events;
  Stdlib.Coin.transfer_(user, Config.getResourceAddress_($c), $.copy(aptosAmount), $c, [new StructTag(new HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
  Stdlib.Coin.register_(user, $c, [new StructTag(new HexString("0x1c07732f8f9bed7ee795519629ce8c334d08348fccadbb473d859464042a3ba7"), "aptospad_coin", "AptosPadCoin", [])]);
  wl = Iterable_table.borrow_mut_with_default_(registry.investors, Stdlib.Signer.address_of_(user, $c), new TokenDistribute({ cap: $.copy(DEFAULT_CAP_1K), bid: u64("0"), distributed: u64("0"), distributedToken: u64("0"), refund: u64("0"), investor: Stdlib.Signer.address_of_(user, $c) }, new SimpleStructTag(TokenDistribute)), $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
  wl.bid = $.copy(aptosAmount);
  Stdlib.Event.emit_event_(eventHandler, new BidAptosPadEvent({ cap: $.copy(wl.cap), bid: $.copy(wl.bid), investor: $.copy(wl.investor) }, new SimpleStructTag(BidAptosPadEvent)), $c, [new SimpleStructTag(BidAptosPadEvent)]);
  return;
}

export function bidAptosPadV2_ (
  user: HexString,
  aptosAmount: U64,
  $c: AptosDataCache,
): void {
  let temp$1, temp$2, bypassWhitelistEnabled, eventHandler, hardCap, isWhitelisted, registry, wl;
  assert_no_emergency_($c);
  if (!(Config.getSwapState_($c)).eq(($.copy(STATE_LAUNCHPAD)))) {
    throw $.abortCode($.copy(ERR_SEASON_STATE));
  }
  hardCap = Config.getSwapConfigHardCap_($c);
  registry = $c.borrow_global_mut<LaunchPadRegistry>(new SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
  bypassWhitelistEnabled = Config.isBypassWhiteList_($c);
  [temp$1, temp$2] = [registry.investors, Stdlib.Signer.address_of_(user, $c)];
  isWhitelisted = Iterable_table.contains_(temp$1, temp$2, $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
  if (!(bypassWhitelistEnabled || isWhitelisted)) {
    throw $.abortCode($.copy(ERR_NOT_IN_WHITELIST));
  }
  if (!($.copy(registry.totalBid)).le($.copy(hardCap))) {
    throw $.abortCode($.copy(ERR_HARDCAP_REACHED));
  }
  registry.totalBid = ($.copy(registry.totalBid)).add($.copy(aptosAmount));
  eventHandler = registry.bidaptospad_events;
  Stdlib.Coin.transfer_(user, Config.getResourceAddress_($c), $.copy(aptosAmount), $c, [new StructTag(new HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
  if (!Stdlib.Coin.is_account_registered_(Stdlib.Signer.address_of_(user, $c), $c, [new StructTag(new HexString("0x1c07732f8f9bed7ee795519629ce8c334d08348fccadbb473d859464042a3ba7"), "aptospad_coin", "AptosPadCoin", [])])) {
    Stdlib.Coin.register_(user, $c, [new StructTag(new HexString("0x1c07732f8f9bed7ee795519629ce8c334d08348fccadbb473d859464042a3ba7"), "aptospad_coin", "AptosPadCoin", [])]);
  }
  else{
  }
  wl = Iterable_table.borrow_mut_with_default_(registry.investors, Stdlib.Signer.address_of_(user, $c), new TokenDistribute({ cap: $.copy(DEFAULT_CAP_1K), bid: u64("0"), distributed: u64("0"), distributedToken: u64("0"), refund: u64("0"), investor: Stdlib.Signer.address_of_(user, $c) }, new SimpleStructTag(TokenDistribute)), $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
  wl.bid = ($.copy(wl.bid)).add($.copy(aptosAmount));
  Stdlib.Event.emit_event_(eventHandler, new BidAptosPadEvent({ cap: $.copy(wl.cap), bid: $.copy(wl.bid), investor: $.copy(wl.investor) }, new SimpleStructTag(BidAptosPadEvent)), $c, [new SimpleStructTag(BidAptosPadEvent)]);
  return;
}

export function bidAptosPadV3_ (
  user: HexString,
  aptosAmount: U64,
  $c: AptosDataCache,
): void {
  let temp$1, temp$2, bypassWhitelistEnabled, eventHandler, hardCap, isWhitelisted, registry, wl;
  assert_no_emergency_($c);
  if (!(Config.getSwapState_($c)).eq(($.copy(STATE_LAUNCHPAD)))) {
    throw $.abortCode($.copy(ERR_SEASON_STATE));
  }
  hardCap = Config.getSwapConfigHardCap_($c);
  registry = $c.borrow_global_mut<LaunchPadRegistry>(new SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
  bypassWhitelistEnabled = Config.isBypassWhiteList_($c);
  [temp$1, temp$2] = [registry.investors, Stdlib.Signer.address_of_(user, $c)];
  isWhitelisted = Iterable_table.contains_(temp$1, temp$2, $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
  if (!(bypassWhitelistEnabled || isWhitelisted)) {
    throw $.abortCode($.copy(ERR_NOT_IN_WHITELIST));
  }
  if (!($.copy(registry.totalBid)).le($.copy(hardCap))) {
    throw $.abortCode($.copy(ERR_HARDCAP_REACHED));
  }
  wl = Iterable_table.borrow_mut_with_default_(registry.investors, Stdlib.Signer.address_of_(user, $c), new TokenDistribute({ cap: $.copy(DEFAULT_CAP_1K), bid: u64("0"), distributed: u64("0"), distributedToken: u64("0"), refund: u64("0"), investor: Stdlib.Signer.address_of_(user, $c) }, new SimpleStructTag(TokenDistribute)), $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
  wl.bid = ($.copy(wl.bid)).add($.copy(aptosAmount));
  checkBidOverflow_($.copy(wl.bid), $.copy(wl.cap), $c);
  registry.totalBid = ($.copy(registry.totalBid)).add($.copy(aptosAmount));
  eventHandler = registry.bidaptospad_events;
  Stdlib.Coin.transfer_(user, Config.getResourceAddress_($c), $.copy(aptosAmount), $c, [new StructTag(new HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
  if (!Stdlib.Coin.is_account_registered_(Stdlib.Signer.address_of_(user, $c), $c, [new StructTag(new HexString("0x1c07732f8f9bed7ee795519629ce8c334d08348fccadbb473d859464042a3ba7"), "aptospad_coin", "AptosPadCoin", [])])) {
    Stdlib.Coin.register_(user, $c, [new StructTag(new HexString("0x1c07732f8f9bed7ee795519629ce8c334d08348fccadbb473d859464042a3ba7"), "aptospad_coin", "AptosPadCoin", [])]);
  }
  else{
  }
  Stdlib.Event.emit_event_(eventHandler, new BidAptosPadEvent({ cap: $.copy(wl.cap), bid: $.copy(wl.bid), investor: $.copy(wl.investor) }, new SimpleStructTag(BidAptosPadEvent)), $c, [new SimpleStructTag(BidAptosPadEvent)]);
  return;
}

export function bidAptosPadV4_ (
  user: HexString,
  aptosAmount: U64,
  $c: AptosDataCache,
): void {
  let temp$1, temp$2, bypassWhitelistEnabled, eventHandler, hardCap, isWhitelisted, registry, userAddr, wl;
  assert_no_emergency_($c);
  if (!(Config.getSwapState_($c)).eq(($.copy(STATE_LAUNCHPAD)))) {
    throw $.abortCode($.copy(ERR_SEASON_STATE));
  }
  userAddr = Stdlib.Signer.address_of_(user, $c);
  hardCap = Config.getSwapConfigHardCap_($c);
  registry = $c.borrow_global_mut<LaunchPadRegistry>(new SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
  bypassWhitelistEnabled = Config.isBypassWhiteList_($c);
  [temp$1, temp$2] = [registry.investors, Stdlib.Signer.address_of_(user, $c)];
  isWhitelisted = Iterable_table.contains_(temp$1, temp$2, $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
  if (!(bypassWhitelistEnabled || isWhitelisted)) {
    throw $.abortCode($.copy(ERR_NOT_IN_WHITELIST));
  }
  if (!($.copy(registry.totalBid)).le($.copy(hardCap))) {
    throw $.abortCode($.copy(ERR_HARDCAP_REACHED));
  }
  wl = Iterable_table.borrow_mut_with_default_(registry.investors, Stdlib.Signer.address_of_(user, $c), new TokenDistribute({ cap: $.copy(DEFAULT_CAP_1K), bid: u64("0"), distributed: u64("0"), distributedToken: u64("0"), refund: u64("0"), investor: Stdlib.Signer.address_of_(user, $c) }, new SimpleStructTag(TokenDistribute)), $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
  wl.bid = ($.copy(wl.bid)).add($.copy(aptosAmount));
  checkBidOverflow_($.copy(wl.bid), $.copy(wl.cap), $c);
  if ($c.exists(new SimpleStructTag(TokenDistribute), $.copy(userAddr))) {
    $c.move_from<TokenDistribute>(new SimpleStructTag(TokenDistribute), Stdlib.Signer.address_of_(user, $c));
  }
  else{
  }
  $c.move_to(new SimpleStructTag(TokenDistribute), user, $.copy(wl));
  registry.totalBid = ($.copy(registry.totalBid)).add($.copy(aptosAmount));
  eventHandler = registry.bidaptospad_events;
  Stdlib.Coin.transfer_(user, Config.getResourceAddress_($c), $.copy(aptosAmount), $c, [new StructTag(new HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
  if (!Stdlib.Coin.is_account_registered_(Stdlib.Signer.address_of_(user, $c), $c, [new StructTag(new HexString("0x1c07732f8f9bed7ee795519629ce8c334d08348fccadbb473d859464042a3ba7"), "aptospad_coin", "AptosPadCoin", [])])) {
    Stdlib.Coin.register_(user, $c, [new StructTag(new HexString("0x1c07732f8f9bed7ee795519629ce8c334d08348fccadbb473d859464042a3ba7"), "aptospad_coin", "AptosPadCoin", [])]);
  }
  else{
  }
  Stdlib.Event.emit_event_(eventHandler, new BidAptosPadEvent({ cap: $.copy(wl.cap), bid: $.copy(wl.bid), investor: $.copy(wl.investor) }, new SimpleStructTag(BidAptosPadEvent)), $c, [new SimpleStructTag(BidAptosPadEvent)]);
  return;
}

export function bidAptosPadV5_ (
  user: HexString,
  aptosAmount: U64,
  $c: AptosDataCache,
): void {
  let temp$1, temp$2, bill, bypassWhitelistEnabled, eventHandler, hardCap, isWhitelisted, registry, userAddr, wl;
  assert_no_emergency_($c);
  if (!(Config.getSwapState_($c)).eq(($.copy(STATE_LAUNCHPAD)))) {
    throw $.abortCode($.copy(ERR_SEASON_STATE));
  }
  userAddr = Stdlib.Signer.address_of_(user, $c);
  hardCap = Config.getSwapConfigHardCap_($c);
  registry = $c.borrow_global_mut<LaunchPadRegistry>(new SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
  bypassWhitelistEnabled = Config.isBypassWhiteList_($c);
  [temp$1, temp$2] = [registry.investors, Stdlib.Signer.address_of_(user, $c)];
  isWhitelisted = Iterable_table.contains_(temp$1, temp$2, $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
  if (!(bypassWhitelistEnabled || isWhitelisted)) {
    throw $.abortCode($.copy(ERR_NOT_IN_WHITELIST));
  }
  if (!($.copy(registry.totalBid)).le($.copy(hardCap))) {
    throw $.abortCode($.copy(ERR_HARDCAP_REACHED));
  }
  wl = Iterable_table.borrow_mut_with_default_(registry.investors, Stdlib.Signer.address_of_(user, $c), new TokenDistribute({ cap: $.copy(DEFAULT_CAP_1K), bid: u64("0"), distributed: u64("0"), distributedToken: u64("0"), refund: u64("0"), investor: Stdlib.Signer.address_of_(user, $c) }, new SimpleStructTag(TokenDistribute)), $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
  wl.bid = ($.copy(wl.bid)).add($.copy(aptosAmount));
  registry.totalBid = ($.copy(registry.totalBid)).add($.copy(aptosAmount));
  checkBidOverflow_($.copy(wl.bid), $.copy(wl.cap), $c);
  if (!$c.exists(new SimpleStructTag(TokenDistribute), $.copy(userAddr))) {
    $c.move_to(new SimpleStructTag(TokenDistribute), user, $.copy(wl));
  }
  else{
    bill = $c.borrow_global_mut<TokenDistribute>(new SimpleStructTag(TokenDistribute), Stdlib.Signer.address_of_(user, $c));
    bill.bid = ($.copy(bill.bid)).add($.copy(aptosAmount));
  }
  eventHandler = registry.bidaptospad_events;
  Stdlib.Coin.transfer_(user, Config.getResourceAddress_($c), $.copy(aptosAmount), $c, [new StructTag(new HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
  if (!Stdlib.Coin.is_account_registered_(Stdlib.Signer.address_of_(user, $c), $c, [new StructTag(new HexString("0x1c07732f8f9bed7ee795519629ce8c334d08348fccadbb473d859464042a3ba7"), "aptospad_coin", "AptosPadCoin", [])])) {
    Stdlib.Coin.register_(user, $c, [new StructTag(new HexString("0x1c07732f8f9bed7ee795519629ce8c334d08348fccadbb473d859464042a3ba7"), "aptospad_coin", "AptosPadCoin", [])]);
  }
  else{
  }
  Stdlib.Event.emit_event_(eventHandler, new BidAptosPadEvent({ cap: $.copy(wl.cap), bid: $.copy(wl.bid), investor: $.copy(wl.investor) }, new SimpleStructTag(BidAptosPadEvent)), $c, [new SimpleStructTag(BidAptosPadEvent)]);
  return;
}

export function checkBidOverflow_ (
  bid: U64,
  _cap: U64,
  $c: AptosDataCache,
): void {
  if (!($.copy(bid)).le($.copy(DEFAULT_OVERFLOW_100))) {
    throw $.abortCode($.copy(ERR_BID_OVERFLOW));
  }
  return;
}

export function distributeAll_ (
  $c: AptosDataCache,
): void {
  let temp$14, temp$2, temp$22, temp$28, temp$6, _prev, _prev__17, _prev__25, _prev__9, allocatedApt, availToAllocate, bidApt, bidApt__27, capApt, distributed, eventHandler, eventHandler__13, eventHandler__21, eventHandler__5, hardCapApt, investor, investor__16, investor__24, investor__8, investors, investors__12, investors__20, investors__4, looper, looper__15, looper__23, looper__7, moreAllocated, morePad, next, next__10, next__18, next__26, registry, registry__1, registry__11, registry__19, registry__3, toPadRate, totalBidApt;
  hardCapApt = Config.getSwapConfigHardCap_($c);
  toPadRate = Config.getSwapConfigAptToApttRate_($c);
  registry = $c.borrow_global_mut<LaunchPadRegistry>(new SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
  totalBidApt = $.copy(registry.totalBid);
  if (($.copy(totalBidApt)).le($.copy(hardCapApt))) {
    registry__1 = $c.borrow_global_mut<LaunchPadRegistry>(new SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
    investors = registry__1.investors;
    eventHandler = registry__1.distributeaptospad_events;
    temp$2 = Iterable_table.head_key_(investors, $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
    looper = temp$2;
    while (Stdlib.Option.is_some_(looper, $c, [AtomicTypeTag.Address])) {
      {
        [investor, _prev, next] = Iterable_table.borrow_iter_mut_(investors, Stdlib.Option.extract_(looper, $c, [AtomicTypeTag.Address]), $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
        investor.distributed = $.copy(investor.bid);
        investor.distributedToken = ($.copy(investor.distributed)).mul($.copy(toPadRate));
        Config.mintAtppTo_($.copy(investor.investor), $.copy(investor.distributedToken), $c);
        Stdlib.Event.emit_event_(eventHandler, new DistributeAptospadEvent({ cap: $.copy(investor.cap), bid: $.copy(investor.bid), distributedToken: $.copy(investor.distributedToken), refund: $.copy(investor.refund), investor: $.copy(investor.investor) }, new SimpleStructTag(DistributeAptospadEvent)), $c, [new SimpleStructTag(DistributeAptospadEvent)]);
        looper = next;
      }

    }}
  else{
    availToAllocate = $.copy(hardCapApt);
    registry__3 = $c.borrow_global_mut<LaunchPadRegistry>(new SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
    investors__4 = registry__3.investors;
    eventHandler__5 = registry__3.distributeaptospad_events;
    temp$6 = Iterable_table.head_key_(investors__4, $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
    looper__7 = temp$6;
    while (Stdlib.Option.is_some_(looper__7, $c, [AtomicTypeTag.Address])) {
      {
        [investor__8, _prev__9, next__10] = Iterable_table.borrow_iter_mut_(investors__4, Stdlib.Option.extract_(looper__7, $c, [AtomicTypeTag.Address]), $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
        capApt = $.copy(investor__8.cap);
        bidApt = $.copy(investor__8.bid);
        allocatedApt = Stdlib.Math64.min_(Stdlib.Math64.min_($.copy(capApt), $.copy(bidApt), $c), $.copy(availToAllocate), $c);
        if (($.copy(allocatedApt)).gt(u64("0"))) {
          investor__8.distributed = $.copy(allocatedApt);
          investor__8.distributedToken = ($.copy(allocatedApt)).mul($.copy(toPadRate));
          availToAllocate = ($.copy(availToAllocate)).sub($.copy(allocatedApt));
          Config.mintAtppTo_($.copy(investor__8.investor), $.copy(investor__8.distributedToken), $c);
          Stdlib.Event.emit_event_(eventHandler__5, new DistributeAptospadEvent({ cap: $.copy(investor__8.cap), bid: $.copy(investor__8.bid), distributedToken: $.copy(investor__8.distributedToken), refund: $.copy(investor__8.refund), investor: $.copy(investor__8.investor) }, new SimpleStructTag(DistributeAptospadEvent)), $c, [new SimpleStructTag(DistributeAptospadEvent)]);
        }
        else{
        }
        if (($.copy(availToAllocate)).le(u64("0"))) {
          break;
        }
        else{
          looper__7 = next__10;
          continue;
        }
      }

    }if (($.copy(availToAllocate)).gt(u64("0"))) {
      registry__11 = $c.borrow_global_mut<LaunchPadRegistry>(new SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
      investors__12 = registry__11.investors;
      eventHandler__13 = registry__11.distributeaptospad_events;
      temp$14 = Iterable_table.head_key_(investors__12, $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
      looper__15 = temp$14;
      while (Stdlib.Option.is_some_(looper__15, $c, [AtomicTypeTag.Address])) {
        {
          [investor__16, _prev__17, next__18] = Iterable_table.borrow_iter_mut_(investors__12, Stdlib.Option.extract_(looper__15, $c, [AtomicTypeTag.Address]), $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
          moreAllocated = Stdlib.Math64.min_(Stdlib.Math64.max_(($.copy(investor__16.bid)).sub($.copy(investor__16.distributed)), u64("0"), $c), $.copy(availToAllocate), $c);
          if (($.copy(moreAllocated)).gt(u64("0"))) {
            investor__16.distributed = ($.copy(investor__16.distributed)).add($.copy(moreAllocated));
            morePad = ($.copy(moreAllocated)).mul($.copy(toPadRate));
            investor__16.distributedToken = ($.copy(investor__16.distributedToken)).add($.copy(morePad));
            availToAllocate = ($.copy(availToAllocate)).sub($.copy(moreAllocated));
            Config.mintAtppTo_($.copy(investor__16.investor), $.copy(morePad), $c);
            Stdlib.Event.emit_event_(eventHandler__13, new DistributeAptospadEvent({ cap: $.copy(investor__16.cap), bid: $.copy(investor__16.bid), distributedToken: $.copy(investor__16.distributedToken), refund: $.copy(investor__16.refund), investor: $.copy(investor__16.investor) }, new SimpleStructTag(DistributeAptospadEvent)), $c, [new SimpleStructTag(DistributeAptospadEvent)]);
          }
          else{
          }
          if (($.copy(availToAllocate)).le(u64("0"))) {
            break;
          }
          else{
            looper__15 = next__18;
            continue;
          }
        }

      }}
    else{
    }
    if (!($.copy(availToAllocate)).le(u64("0"))) {
      throw $.abortCode(u64("100001"));
    }
    registry__19 = $c.borrow_global_mut<LaunchPadRegistry>(new SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
    investors__20 = registry__19.investors;
    eventHandler__21 = registry__19.distributeaptospad_events;
    temp$22 = Iterable_table.head_key_(investors__20, $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
    looper__23 = temp$22;
    while (Stdlib.Option.is_some_(looper__23, $c, [AtomicTypeTag.Address])) {
      {
        [investor__24, _prev__25, next__26] = Iterable_table.borrow_iter_mut_(investors__20, Stdlib.Option.extract_(looper__23, $c, [AtomicTypeTag.Address]), $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
        bidApt__27 = $.copy(investor__24.bid);
        distributed = $.copy(investor__24.distributed);
        if (!($.copy(bidApt__27)).ge($.copy(distributed))) {
          throw $.abortCode(u64("10001"));
        }
        investor__24.refund = Stdlib.Math64.max_(($.copy(bidApt__27)).sub($.copy(distributed)), u64("0"), $c);
        if (($.copy(investor__24.refund)).gt(u64("0"))) {
          temp$28 = Config.getResourceSigner_($c);
          refundAptos_(temp$28, $.copy(investor__24.investor), $.copy(investor__24.refund), $c);
          Stdlib.Event.emit_event_(eventHandler__21, new DistributeAptospadEvent({ cap: $.copy(investor__24.cap), bid: $.copy(investor__24.bid), distributedToken: $.copy(investor__24.distributedToken), refund: $.copy(investor__24.refund), investor: $.copy(investor__24.investor) }, new SimpleStructTag(DistributeAptospadEvent)), $c, [new SimpleStructTag(DistributeAptospadEvent)]);
        }
        else{
        }
        looper__23 = next__26;
      }

    }}
  return;
}

export function distributeAllV2_ (
  $c: AptosDataCache,
): void {
  let temp$14, temp$2, temp$22, temp$27, temp$6, _prev, _prev__17, _prev__25, _prev__9, allocatedApt, availToAllocate, eventHandler, eventHandler__13, eventHandler__21, eventHandler__5, hardCapApt, investors, investors__12, investors__20, investors__4, looper, looper__15, looper__23, looper__7, moreAllocated, moreAptAllocated, next, next__10, next__18, next__26, poolBill, poolBill__16, poolBill__24, poolBill__8, refundAmt, registry, registry__1, registry__11, registry__19, registry__3, toPadRate, totalBidApt;
  hardCapApt = Config.getSwapConfigHardCap_($c);
  toPadRate = Config.getSwapConfigAptToApttRate_($c);
  registry = $c.borrow_global_mut<LaunchPadRegistry>(new SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
  totalBidApt = $.copy(registry.totalBid);
  if (($.copy(totalBidApt)).le($.copy(hardCapApt))) {
    registry__1 = $c.borrow_global_mut<LaunchPadRegistry>(new SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
    investors = registry__1.investors;
    eventHandler = registry__1.distributeaptospad_events;
    temp$2 = Iterable_table.head_key_(investors, $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
    looper = temp$2;
    while (Stdlib.Option.is_some_(looper, $c, [AtomicTypeTag.Address])) {
      {
        [poolBill, _prev, next] = Iterable_table.borrow_iter_mut_(investors, Stdlib.Option.extract_(looper, $c, [AtomicTypeTag.Address]), $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
        moreAptAllocated = $.copy(poolBill.bid);
        distributePerAccount_(poolBill, $.copy(toPadRate), $.copy(moreAptAllocated), $c);
        Stdlib.Event.emit_event_(eventHandler, new DistributeAptospadEvent({ cap: $.copy(poolBill.cap), bid: $.copy(poolBill.bid), distributedToken: $.copy(poolBill.distributedToken), refund: $.copy(poolBill.refund), investor: $.copy(poolBill.investor) }, new SimpleStructTag(DistributeAptospadEvent)), $c, [new SimpleStructTag(DistributeAptospadEvent)]);
        looper = next;
      }

    }}
  else{
    availToAllocate = $.copy(hardCapApt);
    registry__3 = $c.borrow_global_mut<LaunchPadRegistry>(new SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
    investors__4 = registry__3.investors;
    eventHandler__5 = registry__3.distributeaptospad_events;
    temp$6 = Iterable_table.head_key_(investors__4, $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
    looper__7 = temp$6;
    while (Stdlib.Option.is_some_(looper__7, $c, [AtomicTypeTag.Address])) {
      {
        [poolBill__8, _prev__9, next__10] = Iterable_table.borrow_iter_mut_(investors__4, Stdlib.Option.extract_(looper__7, $c, [AtomicTypeTag.Address]), $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
        allocatedApt = Stdlib.Math64.min_(Stdlib.Math64.min_($.copy(poolBill__8.cap), $.copy(poolBill__8.bid), $c), $.copy(availToAllocate), $c);
        if (($.copy(allocatedApt)).gt(u64("0"))) {
          availToAllocate = ($.copy(availToAllocate)).sub($.copy(allocatedApt));
          distributePerAccount_(poolBill__8, $.copy(toPadRate), $.copy(allocatedApt), $c);
          Stdlib.Event.emit_event_(eventHandler__5, new DistributeAptospadEvent({ cap: $.copy(poolBill__8.cap), bid: $.copy(poolBill__8.bid), distributedToken: $.copy(poolBill__8.distributedToken), refund: $.copy(poolBill__8.refund), investor: $.copy(poolBill__8.investor) }, new SimpleStructTag(DistributeAptospadEvent)), $c, [new SimpleStructTag(DistributeAptospadEvent)]);
        }
        else{
        }
        if (($.copy(availToAllocate)).le(u64("0"))) {
          break;
        }
        else{
          looper__7 = next__10;
          continue;
        }
      }

    }if (($.copy(availToAllocate)).gt(u64("0"))) {
      registry__11 = $c.borrow_global_mut<LaunchPadRegistry>(new SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
      investors__12 = registry__11.investors;
      eventHandler__13 = registry__11.distributeaptospad_events;
      temp$14 = Iterable_table.head_key_(investors__12, $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
      looper__15 = temp$14;
      while (Stdlib.Option.is_some_(looper__15, $c, [AtomicTypeTag.Address])) {
        {
          [poolBill__16, _prev__17, next__18] = Iterable_table.borrow_iter_mut_(investors__12, Stdlib.Option.extract_(looper__15, $c, [AtomicTypeTag.Address]), $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
          moreAllocated = Stdlib.Math64.min_(Stdlib.Math64.max_(($.copy(poolBill__16.bid)).sub($.copy(poolBill__16.distributed)), u64("0"), $c), $.copy(availToAllocate), $c);
          if (($.copy(moreAllocated)).gt(u64("0"))) {
            availToAllocate = ($.copy(availToAllocate)).sub($.copy(moreAllocated));
            distributePerAccount_(poolBill__16, $.copy(toPadRate), $.copy(moreAllocated), $c);
            Stdlib.Event.emit_event_(eventHandler__13, new DistributeAptospadEvent({ cap: $.copy(poolBill__16.cap), bid: $.copy(poolBill__16.bid), distributedToken: $.copy(poolBill__16.distributedToken), refund: $.copy(poolBill__16.refund), investor: $.copy(poolBill__16.investor) }, new SimpleStructTag(DistributeAptospadEvent)), $c, [new SimpleStructTag(DistributeAptospadEvent)]);
          }
          else{
          }
          if (($.copy(availToAllocate)).le(u64("0"))) {
            break;
          }
          else{
            looper__15 = next__18;
            continue;
          }
        }

      }}
    else{
    }
    if (!($.copy(availToAllocate)).le(u64("0"))) {
      throw $.abortCode(u64("100001"));
    }
    registry__19 = $c.borrow_global_mut<LaunchPadRegistry>(new SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
    investors__20 = registry__19.investors;
    eventHandler__21 = registry__19.distributeaptospad_events;
    temp$22 = Iterable_table.head_key_(investors__20, $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
    looper__23 = temp$22;
    while (Stdlib.Option.is_some_(looper__23, $c, [AtomicTypeTag.Address])) {
      {
        [poolBill__24, _prev__25, next__26] = Iterable_table.borrow_iter_mut_(investors__20, Stdlib.Option.extract_(looper__23, $c, [AtomicTypeTag.Address]), $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
        if (!($.copy(poolBill__24.bid)).ge($.copy(poolBill__24.distributed))) {
          throw $.abortCode(u64("10001"));
        }
        refundAmt = Stdlib.Math64.max_(($.copy(poolBill__24.bid)).sub($.copy(poolBill__24.distributed)), u64("0"), $c);
        if (($.copy(refundAmt)).gt(u64("0"))) {
          temp$27 = Config.getResourceSigner_($c);
          refundAptosV2_(temp$27, poolBill__24, $.copy(refundAmt), $c);
          Stdlib.Event.emit_event_(eventHandler__21, new DistributeAptospadEvent({ cap: $.copy(poolBill__24.cap), bid: $.copy(poolBill__24.bid), distributedToken: $.copy(poolBill__24.distributedToken), refund: $.copy(poolBill__24.refund), investor: $.copy(poolBill__24.investor) }, new SimpleStructTag(DistributeAptospadEvent)), $c, [new SimpleStructTag(DistributeAptospadEvent)]);
        }
        else{
        }
        looper__23 = next__26;
      }

    }}
  return;
}

export function distributeAllV3_ (
  $c: AptosDataCache,
): void {
  let temp$12, temp$19, temp$2, temp$24, temp$5, _prev, _prev__15, _prev__22, _prev__8, allocatedApt, availToAllocate, hardCapApt, investors, investors__11, investors__18, investors__4, looper, looper__13, looper__20, looper__6, moreAllocated, moreAptAllocated, next, next__16, next__23, next__9, poolBill, poolBill__14, poolBill__21, poolBill__7, refundAmt, registry, registry__1, registry__10, registry__17, registry__3, toPadRate, totalBidApt;
  hardCapApt = Config.getSwapConfigHardCap_($c);
  toPadRate = Config.getSwapConfigAptToApttRate_($c);
  registry = $c.borrow_global_mut<LaunchPadRegistry>(new SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
  totalBidApt = $.copy(registry.totalBid);
  if (($.copy(totalBidApt)).le($.copy(hardCapApt))) {
    registry__1 = $c.borrow_global_mut<LaunchPadRegistry>(new SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
    investors = registry__1.investors;
    temp$2 = Iterable_table.head_key_(investors, $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
    looper = temp$2;
    while (Stdlib.Option.is_some_(looper, $c, [AtomicTypeTag.Address])) {
      {
        [poolBill, _prev, next] = Iterable_table.borrow_iter_mut_(investors, Stdlib.Option.extract_(looper, $c, [AtomicTypeTag.Address]), $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
        moreAptAllocated = $.copy(poolBill.bid);
        distributePerAccountV2_(poolBill, $.copy(toPadRate), $.copy(moreAptAllocated), $c);
        looper = next;
      }

    }}
  else{
    availToAllocate = $.copy(hardCapApt);
    registry__3 = $c.borrow_global_mut<LaunchPadRegistry>(new SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
    investors__4 = registry__3.investors;
    temp$5 = Iterable_table.head_key_(investors__4, $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
    looper__6 = temp$5;
    while (Stdlib.Option.is_some_(looper__6, $c, [AtomicTypeTag.Address])) {
      {
        [poolBill__7, _prev__8, next__9] = Iterable_table.borrow_iter_mut_(investors__4, Stdlib.Option.extract_(looper__6, $c, [AtomicTypeTag.Address]), $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
        allocatedApt = Stdlib.Math64.min_(Stdlib.Math64.min_($.copy(poolBill__7.cap), $.copy(poolBill__7.bid), $c), $.copy(availToAllocate), $c);
        if (($.copy(allocatedApt)).gt(u64("0"))) {
          availToAllocate = ($.copy(availToAllocate)).sub($.copy(allocatedApt));
          distributePerAccountV2_(poolBill__7, $.copy(toPadRate), $.copy(allocatedApt), $c);
        }
        else{
        }
        if (($.copy(availToAllocate)).le(u64("0"))) {
          break;
        }
        else{
          looper__6 = next__9;
          continue;
        }
      }

    }if (($.copy(availToAllocate)).gt(u64("0"))) {
      registry__10 = $c.borrow_global_mut<LaunchPadRegistry>(new SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
      investors__11 = registry__10.investors;
      temp$12 = Iterable_table.head_key_(investors__11, $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
      looper__13 = temp$12;
      while (Stdlib.Option.is_some_(looper__13, $c, [AtomicTypeTag.Address])) {
        {
          [poolBill__14, _prev__15, next__16] = Iterable_table.borrow_iter_mut_(investors__11, Stdlib.Option.extract_(looper__13, $c, [AtomicTypeTag.Address]), $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
          moreAllocated = Stdlib.Math64.min_(Stdlib.Math64.max_(($.copy(poolBill__14.bid)).sub($.copy(poolBill__14.distributed)), u64("0"), $c), $.copy(availToAllocate), $c);
          if (($.copy(moreAllocated)).gt(u64("0"))) {
            availToAllocate = ($.copy(availToAllocate)).sub($.copy(moreAllocated));
            distributePerAccountV2_(poolBill__14, $.copy(toPadRate), $.copy(moreAllocated), $c);
          }
          else{
          }
          if (($.copy(availToAllocate)).le(u64("0"))) {
            break;
          }
          else{
            looper__13 = next__16;
            continue;
          }
        }

      }}
    else{
    }
    if (!($.copy(availToAllocate)).le(u64("0"))) {
      throw $.abortCode(u64("100001"));
    }
    registry__17 = $c.borrow_global_mut<LaunchPadRegistry>(new SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
    investors__18 = registry__17.investors;
    temp$19 = Iterable_table.head_key_(investors__18, $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
    looper__20 = temp$19;
    while (Stdlib.Option.is_some_(looper__20, $c, [AtomicTypeTag.Address])) {
      {
        [poolBill__21, _prev__22, next__23] = Iterable_table.borrow_iter_mut_(investors__18, Stdlib.Option.extract_(looper__20, $c, [AtomicTypeTag.Address]), $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
        if (!($.copy(poolBill__21.bid)).ge($.copy(poolBill__21.distributed))) {
          throw $.abortCode(u64("10001"));
        }
        refundAmt = Stdlib.Math64.max_(($.copy(poolBill__21.bid)).sub($.copy(poolBill__21.distributed)), u64("0"), $c);
        if (($.copy(refundAmt)).gt(u64("0"))) {
          temp$24 = Config.getResourceSigner_($c);
          refundAptosV3_(temp$24, poolBill__21, $.copy(refundAmt), $c);
        }
        else{
        }
        looper__20 = next__23;
      }

    }}
  return;
}

export function distributeAtpp_ (
  $c: AptosDataCache,
): void {
  let temp$1, enableRefund, softCap, totalBuy;
  softCap = Config.getSwapConfigSoftCap_($c);
  totalBuy = $.copy($c.borrow_global_mut<LaunchPadRegistry>(new SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c)).totalBid);
  enableRefund = Config.getSwapConfigEnableRefund_($c);
  if (enableRefund) {
    temp$1 = ($.copy(totalBuy)).lt($.copy(softCap));
  }
  else{
    temp$1 = false;
  }
  if (temp$1) {
    refundAll_($c);
  }
  else{
    distributeAll_($c);
  }
  return;
}

export function distributeAtppV2_ (
  $c: AptosDataCache,
): void {
  let temp$1, enableRefund, softCap, totalBuy;
  softCap = Config.getSwapConfigSoftCap_($c);
  totalBuy = $.copy($c.borrow_global_mut<LaunchPadRegistry>(new SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c)).totalBid);
  enableRefund = Config.getSwapConfigEnableRefund_($c);
  if (enableRefund) {
    temp$1 = ($.copy(totalBuy)).lt($.copy(softCap));
  }
  else{
    temp$1 = false;
  }
  if (temp$1) {
    refundAllV2_($c);
  }
  else{
    distributeAllV2_($c);
  }
  return;
}

export function distributeAtppV3_ (
  $c: AptosDataCache,
): void {
  let temp$1, enableRefund, softCap, totalBuy;
  softCap = Config.getSwapConfigSoftCap_($c);
  totalBuy = $.copy($c.borrow_global_mut<LaunchPadRegistry>(new SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c)).totalBid);
  enableRefund = Config.getSwapConfigEnableRefund_($c);
  if (enableRefund) {
    temp$1 = ($.copy(totalBuy)).lt($.copy(softCap));
  }
  else{
    temp$1 = false;
  }
  if (temp$1) {
    refundAllV3_($c);
  }
  else{
    distributeAllV3_($c);
  }
  return;
}

export function distributePerAccount_ (
  poolBill: TokenDistribute,
  toPadRate: U64,
  moreAptAllocated: U64,
  $c: AptosDataCache,
): void {
  let morePad, userBill;
  poolBill.distributed = ($.copy(poolBill.distributed)).add($.copy(moreAptAllocated));
  morePad = ($.copy(moreAptAllocated)).mul($.copy(toPadRate));
  poolBill.distributedToken = ($.copy(poolBill.distributedToken)).add($.copy(morePad));
  if ($c.exists(new SimpleStructTag(TokenDistribute), $.copy(poolBill.investor))) {
    userBill = $c.borrow_global_mut<TokenDistribute>(new SimpleStructTag(TokenDistribute), $.copy(poolBill.investor));
    userBill.distributed = $.copy(poolBill.distributed);
    userBill.distributedToken = $.copy(poolBill.distributedToken);
  }
  else{
  }
  Config.mintAtppTo_($.copy(poolBill.investor), $.copy(morePad), $c);
  return;
}

export function distributePerAccountV2_ (
  poolBill: TokenDistribute,
  toPadRate: U64,
  moreAptAllocated: U64,
  $c: AptosDataCache,
): void {
  let morePad, userBill;
  poolBill.distributed = ($.copy(poolBill.distributed)).add($.copy(moreAptAllocated));
  morePad = ($.copy(moreAptAllocated)).mul($.copy(toPadRate));
  poolBill.distributedToken = ($.copy(poolBill.distributedToken)).add($.copy(morePad));
  if ($c.exists(new SimpleStructTag(TokenDistribute), $.copy(poolBill.investor))) {
    userBill = $c.borrow_global_mut<TokenDistribute>(new SimpleStructTag(TokenDistribute), $.copy(poolBill.investor));
    userBill.distributed = $.copy(poolBill.distributed);
    userBill.distributedToken = $.copy(poolBill.distributedToken);
  }
  else{
  }
  return;
}

export function distributeSeason_ (
  account: HexString,
  $c: AptosDataCache,
): void {
  assert_admin_(account, $c);
  assert_no_emergency_($c);
  if (!(Config.getSwapState_($c)).eq(($.copy(STATE_LAUNCHPAD)))) {
    throw $.abortCode($.copy(ERR_SEASON_STATE));
  }
  Config.setSwapState_($.copy(STATE_DISTRIBUTE), $c);
  distributeAtpp_($c);
  Config.setSwapState_($.copy(STATE_ENDED), $c);
  return;
}

export function distributeSeasonV2_ (
  account: HexString,
  $c: AptosDataCache,
): void {
  assert_admin_(account, $c);
  assert_no_emergency_($c);
  if (!(Config.getSwapState_($c)).eq(($.copy(STATE_LAUNCHPAD)))) {
    throw $.abortCode($.copy(ERR_SEASON_STATE));
  }
  Config.setSwapState_($.copy(STATE_DISTRIBUTE), $c);
  distributeAtppV2_($c);
  Config.setSwapState_($.copy(STATE_ENDED), $c);
  return;
}

export function distributeSeasonV3_ (
  account: HexString,
  $c: AptosDataCache,
): void {
  assert_admin_(account, $c);
  assert_no_emergency_($c);
  if (!(Config.getSwapState_($c)).eq(($.copy(STATE_LAUNCHPAD)))) {
    throw $.abortCode($.copy(ERR_SEASON_STATE));
  }
  Config.setSwapState_($.copy(STATE_DISTRIBUTE), $c);
  distributeAtppV3_($c);
  return;
}

export function getSwapTotalBid_ (
  $c: AptosDataCache,
): U64 {
  return $.copy($c.borrow_global<LaunchPadRegistry>(new SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c)).totalBid);
}

export function getWhiteList_ (
  account: HexString,
  $c: AptosDataCache,
): [U64, U64, U64, U64, U64] {
  let temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7, temp$8, details, wl;
  details = $c.borrow_global_mut<LaunchPadRegistry>(new SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c)).investors;
  temp$8 = details;
  temp$7 = $.copy(account);
  temp$1 = u64("0");
  temp$2 = u64("0");
  temp$3 = u64("0");
  temp$4 = u64("0");
  temp$5 = u64("0");
  temp$6 = $.copy(account);
  wl = Iterable_table.borrow_mut_with_default_(temp$8, temp$7, new TokenDistribute({ cap: temp$1, bid: temp$4, distributed: temp$2, distributedToken: temp$3, refund: temp$5, investor: temp$6 }, new SimpleStructTag(TokenDistribute)), $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
  return [$.copy(wl.cap), $.copy(wl.bid), $.copy(wl.distributed), $.copy(wl.distributedToken), $.copy(wl.refund)];
}

export function getWhiteLists_ (
  $c: AptosDataCache,
): HexString[] {
  let temp$1, _prev, investor, investors, looper, next, output;
  investors = $c.borrow_global_mut<LaunchPadRegistry>(new SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c)).investors;
  output = Stdlib.Vector.empty_($c, [AtomicTypeTag.Address]);
  temp$1 = Iterable_table.head_key_(investors, $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
  looper = temp$1;
  while (Stdlib.Option.is_some_(looper, $c, [AtomicTypeTag.Address])) {
    {
      [investor, _prev, next] = Iterable_table.borrow_iter_mut_(investors, Stdlib.Option.extract_(looper, $c, [AtomicTypeTag.Address]), $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
      Stdlib.Vector.push_back_(output, $.copy(investor.investor), $c, [AtomicTypeTag.Address]);
      looper = next;
    }

  }return $.copy(output);
}

export function initialize_ (
  account: HexString,
  $c: AptosDataCache,
): void {
  let temp$1, temp$10, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7, temp$8, temp$9;
  assert_admin_(account, $c);
  temp$9 = Config.getResourceSigner_($c);
  temp$10 = temp$9;
  temp$1 = Iterable_table.new___($c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
  temp$2 = u64("0");
  temp$3 = Config.getResourceSigner_($c);
  temp$4 = Stdlib.Account.new_event_handle_(temp$3, $c, [new SimpleStructTag(WhiteListEvent)]);
  temp$5 = Config.getResourceSigner_($c);
  temp$6 = Stdlib.Account.new_event_handle_(temp$5, $c, [new SimpleStructTag(BidAptosPadEvent)]);
  temp$7 = Config.getResourceSigner_($c);
  temp$8 = Stdlib.Account.new_event_handle_(temp$7, $c, [new SimpleStructTag(DistributeAptospadEvent)]);
  $c.move_to(new SimpleStructTag(LaunchPadRegistry), temp$10, new LaunchPadRegistry({ investors: temp$1, totalBid: temp$2, bidaptospad_events: temp$6, distributeaptospad_events: temp$8, whitelist_events: temp$4 }, new SimpleStructTag(LaunchPadRegistry)));
  Config.setSwapState_($.copy(STATE_INIT), $c);
  return;
}

export function launchPadSeason_ (
  account: HexString,
  $c: AptosDataCache,
): void {
  assert_admin_(account, $c);
  if (!(Config.getSwapState_($c)).eq(($.copy(STATE_WL)))) {
    throw $.abortCode($.copy(ERR_SEASON_STATE));
  }
  Config.setSwapState_($.copy(STATE_LAUNCHPAD), $c);
  return;
}

export function payCoinAndRefund_ (
  $c: AptosDataCache,
): void {
  let temp$1, temp$2, _prev, investor, investors, looper, next, poolBill, refundAmt, registry, resourceSigner, tokenAmt;
  registry = $c.borrow_global_mut<LaunchPadRegistry>(new SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
  investors = registry.investors;
  temp$1 = Config.getResourceSigner_($c);
  resourceSigner = temp$1;
  temp$2 = Iterable_table.head_key_(investors, $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
  looper = temp$2;
  while (Stdlib.Option.is_some_(looper, $c, [AtomicTypeTag.Address])) {
    {
      [poolBill, _prev, next] = Iterable_table.borrow_iter_mut_(investors, Stdlib.Option.extract_(looper, $c, [AtomicTypeTag.Address]), $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
      investor = $.copy(poolBill.investor);
      tokenAmt = $.copy(poolBill.distributedToken);
      refundAmt = $.copy(poolBill.refund);
      if (($.copy(tokenAmt)).gt(u64("0"))) {
        Config.mintAtppTo_($.copy(investor), $.copy(tokenAmt), $c);
      }
      else{
      }
      if (($.copy(refundAmt)).gt(u64("0"))) {
        Stdlib.Coin.transfer_(resourceSigner, $.copy(investor), $.copy(refundAmt), $c, [new StructTag(new HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
      }
      else{
      }
      looper = next;
    }

  }return;
}

export function paycoinAndRefund_ (
  account: HexString,
  $c: AptosDataCache,
): void {
  assert_admin_(account, $c);
  assert_no_emergency_($c);
  if (!(Config.getSwapState_($c)).eq(($.copy(STATE_DISTRIBUTE)))) {
    throw $.abortCode($.copy(ERR_SEASON_STATE));
  }
  payCoinAndRefund_($c);
  Config.setSwapState_($.copy(STATE_ENDED), $c);
  return;
}

export function refundAll_ (
  $c: AptosDataCache,
): void {
  let temp$1, temp$2, temp$3, temp$4, _prev, eventHandler, investor, investors, looper, next, registry, resourceSigner;
  registry = $c.borrow_global_mut<LaunchPadRegistry>(new SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
  investors = registry.investors;
  eventHandler = registry.distributeaptospad_events;
  temp$1 = Iterable_table.head_key_(investors, $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
  looper = temp$1;
  temp$2 = Config.getResourceSigner_($c);
  resourceSigner = temp$2;
  while (Stdlib.Option.is_some_(looper, $c, [AtomicTypeTag.Address])) {
    {
      [temp$3, temp$4] = [investors, Stdlib.Option.extract_(looper, $c, [AtomicTypeTag.Address])];
      [investor, _prev, next] = Iterable_table.borrow_iter_(temp$3, temp$4, $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
      refundAptos_(resourceSigner, $.copy(investor.investor), $.copy(investor.bid), $c);
      Stdlib.Event.emit_event_(eventHandler, new DistributeAptospadEvent({ cap: $.copy(investor.cap), bid: $.copy(investor.bid), distributedToken: $.copy(investor.distributedToken), refund: $.copy(investor.refund), investor: $.copy(investor.investor) }, new SimpleStructTag(DistributeAptospadEvent)), $c, [new SimpleStructTag(DistributeAptospadEvent)]);
      looper = next;
    }

  }return;
}

export function refundAllV2_ (
  $c: AptosDataCache,
): void {
  let temp$1, temp$2, _prev, eventHandler, investors, looper, moreRefundAptAmt, next, poolBill, registry, resourceSigner;
  registry = $c.borrow_global_mut<LaunchPadRegistry>(new SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
  investors = registry.investors;
  eventHandler = registry.distributeaptospad_events;
  temp$1 = Iterable_table.head_key_(investors, $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
  looper = temp$1;
  temp$2 = Config.getResourceSigner_($c);
  resourceSigner = temp$2;
  while (Stdlib.Option.is_some_(looper, $c, [AtomicTypeTag.Address])) {
    {
      [poolBill, _prev, next] = Iterable_table.borrow_iter_mut_(investors, Stdlib.Option.extract_(looper, $c, [AtomicTypeTag.Address]), $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
      moreRefundAptAmt = $.copy(poolBill.bid);
      refundAptosV2_(resourceSigner, poolBill, $.copy(moreRefundAptAmt), $c);
      Stdlib.Event.emit_event_(eventHandler, new DistributeAptospadEvent({ cap: $.copy(poolBill.cap), bid: $.copy(poolBill.bid), distributedToken: $.copy(poolBill.distributedToken), refund: $.copy(poolBill.refund), investor: $.copy(poolBill.investor) }, new SimpleStructTag(DistributeAptospadEvent)), $c, [new SimpleStructTag(DistributeAptospadEvent)]);
      looper = next;
    }

  }return;
}

export function refundAllV3_ (
  $c: AptosDataCache,
): void {
  let temp$1, temp$2, _prev, investors, looper, moreRefundAptAmt, next, poolBill, registry, resourceSigner;
  registry = $c.borrow_global_mut<LaunchPadRegistry>(new SimpleStructTag(LaunchPadRegistry), Config.getResourceAddress_($c));
  investors = registry.investors;
  temp$1 = Iterable_table.head_key_(investors, $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
  looper = temp$1;
  temp$2 = Config.getResourceSigner_($c);
  resourceSigner = temp$2;
  while (Stdlib.Option.is_some_(looper, $c, [AtomicTypeTag.Address])) {
    {
      [poolBill, _prev, next] = Iterable_table.borrow_iter_mut_(investors, Stdlib.Option.extract_(looper, $c, [AtomicTypeTag.Address]), $c, [AtomicTypeTag.Address, new SimpleStructTag(TokenDistribute)]);
      moreRefundAptAmt = $.copy(poolBill.bid);
      refundAptosV3_(resourceSigner, poolBill, $.copy(moreRefundAptAmt), $c);
      looper = next;
    }

  }return;
}

export function refundAptos_ (
  resourceSigner: HexString,
  investor: HexString,
  bidAmt: U64,
  $c: AptosDataCache,
): void {
  Stdlib.Coin.transfer_(resourceSigner, $.copy(investor), $.copy(bidAmt), $c, [new StructTag(new HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
  return;
}

export function refundAptosV2_ (
  resourceSigner: HexString,
  poolBill: TokenDistribute,
  moreRefundAptAmt: U64,
  $c: AptosDataCache,
): void {
  let investorBill, realRefund;
  realRefund = ($.copy(moreRefundAptAmt)).sub((($.copy(moreRefundAptAmt)).mul($.copy(REFUND_CHARGE_RATE_PER_100K))).div(u64("100000")));
  poolBill.refund = ($.copy(poolBill.refund)).add($.copy(realRefund));
  Stdlib.Coin.transfer_(resourceSigner, $.copy(poolBill.investor), $.copy(realRefund), $c, [new StructTag(new HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
  if ($c.exists(new SimpleStructTag(TokenDistribute), $.copy(poolBill.investor))) {
    investorBill = $c.borrow_global_mut<TokenDistribute>(new SimpleStructTag(TokenDistribute), $.copy(poolBill.investor));
    investorBill.refund = ($.copy(investorBill.refund)).add($.copy(realRefund));
  }
  else{
  }
  return;
}

export function refundAptosV3_ (
  _resourceSigner: HexString,
  poolBill: TokenDistribute,
  moreRefundAptAmt: U64,
  $c: AptosDataCache,
): void {
  let investorBill, realRefund;
  realRefund = ($.copy(moreRefundAptAmt)).sub((($.copy(moreRefundAptAmt)).mul($.copy(REFUND_CHARGE_RATE_PER_100K))).div(u64("100000")));
  poolBill.refund = ($.copy(poolBill.refund)).add($.copy(realRefund));
  if ($c.exists(new SimpleStructTag(TokenDistribute), $.copy(poolBill.investor))) {
    investorBill = $c.borrow_global_mut<TokenDistribute>(new SimpleStructTag(TokenDistribute), $.copy(poolBill.investor));
    investorBill.refund = ($.copy(investorBill.refund)).add($.copy(realRefund));
  }
  else{
  }
  return;
}

export function resetSeason_ (
  account: HexString,
  $c: AptosDataCache,
): void {
  assert_admin_(account, $c);
  if (!(Config.getSwapState_($c)).eq(($.copy(STATE_ENDED)))) {
    throw $.abortCode($.copy(ERR_SEASON_ENDED));
  }
  Config.setSwapState_($.copy(STATE_INIT), $c);
  return;
}

export function whiteListSeason_ (
  account: HexString,
  $c: AptosDataCache,
): void {
  assert_admin_(account, $c);
  if (!(Config.getSwapState_($c)).eq(($.copy(STATE_INIT)))) {
    throw $.abortCode($.copy(ERR_SEASON_NOT_RESET));
  }
  Config.setSwapState_($.copy(STATE_WL), $c);
  return;
}

export function withdrawAptos_ (
  admin: HexString,
  debit: HexString,
  amount: U64,
  $c: AptosDataCache,
): void {
  let temp$1;
  assert_admin_(admin, $c);
  temp$1 = Config.getResourceSigner_($c);
  Stdlib.Coin.transfer_(temp$1, $.copy(debit), $.copy(amount), $c, [new StructTag(new HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
  return;
}

export function withdrawAptosPad_ (
  admin: HexString,
  debit: HexString,
  amount: U64,
  $c: AptosDataCache,
): void {
  let temp$1;
  assert_admin_(admin, $c);
  temp$1 = Config.getResourceSigner_($c);
  Stdlib.Coin.transfer_(temp$1, $.copy(debit), $.copy(amount), $c, [new StructTag(new HexString("0x1c07732f8f9bed7ee795519629ce8c334d08348fccadbb473d859464042a3ba7"), "aptospad_coin", "AptosPadCoin", [])]);
  return;
}

export function loadParsers(repo: AptosParserRepo) {
  repo.addParser("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea::aptospad_swap::BidAptosPadEvent", BidAptosPadEvent.BidAptosPadEventParser);
  repo.addParser("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea::aptospad_swap::DistributeAptospadEvent", DistributeAptospadEvent.DistributeAptospadEventParser);
  repo.addParser("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea::aptospad_swap::LaunchPadRegistry", LaunchPadRegistry.LaunchPadRegistryParser);
  repo.addParser("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea::aptospad_swap::TokenDistribute", TokenDistribute.TokenDistributeParser);
  repo.addParser("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea::aptospad_swap::WhiteListEvent", WhiteListEvent.WhiteListEventParser);
}
export class App {
  constructor(
    public client: AptosClient,
    public repo: AptosParserRepo,
    public cache: AptosLocalCache,
  ) {
  }
  get moduleAddress() {{ return moduleAddress; }}
  get moduleName() {{ return moduleName; }}
  get BidAptosPadEvent() { return BidAptosPadEvent; }
  get DistributeAptospadEvent() { return DistributeAptospadEvent; }
  get LaunchPadRegistry() { return LaunchPadRegistry; }
  async loadLaunchPadRegistry(
    owner: HexString,
    loadFull=true,
    fillCache=true,
  ) {
    const val = await LaunchPadRegistry.load(this.repo, this.client, owner, [] as TypeTag[]);
    if (loadFull) {
      await val.loadFullState(this);
    }
    if (fillCache) {
      this.cache.set(val.typeTag, owner, val);
    }
    return val;
  }
  get TokenDistribute() { return TokenDistribute; }
  async loadTokenDistribute(
    owner: HexString,
    loadFull=true,
    fillCache=true,
  ) {
    const val = await TokenDistribute.load(this.repo, this.client, owner, [] as TypeTag[]);
    if (loadFull) {
      await val.loadFullState(this);
    }
    if (fillCache) {
      this.cache.set(val.typeTag, owner, val);
    }
    return val;
  }
  get WhiteListEvent() { return WhiteListEvent; }
}

