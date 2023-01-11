import * as $ from "@manahippo/move-to-ts";
import {AptosDataCache, AptosParserRepo, DummyCache, AptosLocalCache} from "@manahippo/move-to-ts";
import {U8, U64, U128} from "@manahippo/move-to-ts";
import {u8, u64, u128} from "@manahippo/move-to-ts";
import {TypeParamDeclType, FieldDeclType} from "@manahippo/move-to-ts";
import {AtomicTypeTag, StructTag, TypeTag, VectorTag, SimpleStructTag} from "@manahippo/move-to-ts";
import {OptionTransaction} from "@manahippo/move-to-ts";
import {HexString, AptosClient, AptosAccount, TxnBuilderTypes, Types} from "aptos";
import * as Stdlib from "../stdlib";
import * as Aptospad_coin_boot from "./aptospad_coin_boot";
export const packageName = "AptosPad";
export const moduleAddress = new HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0");
export const moduleName = "config";

export const CAP_100K : U64 = (u64("100000000")).mul(u64("100000"));
export const CAP_10K : U64 = (u64("100000000")).mul(u64("10000"));
export const CAP_190K : U64 = (u64("100000000")).mul(u64("190000"));
export const CAP_200K : U64 = (u64("100000000")).mul(u64("200000"));
export const CAP_20K : U64 = (u64("100000000")).mul(u64("20000"));
export const CAP_300K : U64 = (u64("100000000")).mul(u64("300000"));
export const CAP_400K : U64 = (u64("100000000")).mul(u64("400000"));
export const CAP_40K : U64 = (u64("100000000")).mul(u64("40000"));
export const CAP_500K : U64 = (u64("100000000")).mul(u64("500000"));
export const CAP_50K : U64 = (u64("100000000")).mul(u64("50000"));
export const CAP_80K : U64 = (u64("100000000")).mul(u64("80000"));
export const ERR_EMERGENCY : U64 = u64("405");
export const ERR_HARDCAP_REACHED : U64 = u64("410");
export const ERR_INITIALIZED : U64 = u64("412");
export const ERR_INVALID_CAP : U64 = u64("414");
export const ERR_INVALID_RATE : U64 = u64("413");
export const ERR_INVALID_SUPPLY : U64 = u64("411");
export const ERR_PERMISSIONS : U64 = u64("403");
export const ERR_SEASON_ACTIVE : U64 = u64("408");
export const ERR_SEASON_ENDED : U64 = u64("406");
export const ERR_SEASON_NOT_RESET : U64 = u64("407");
export const ERR_SEASON_STATE : U64 = u64("409");
export const STATE_BUY : U8 = u8("3");
export const STATE_ENDED : U8 = u8("5");
export const STATE_INIT : U8 = u8("1");
export const STATE_RELEASE : U8 = u8("4");
export const STATE_WL : U8 = u8("2");


export class ApttSwapConfig 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "ApttSwapConfig";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  { name: "emgergency", typeTag: AtomicTypeTag.Bool },
  { name: "softCap", typeTag: AtomicTypeTag.U64 },
  { name: "hardCap", typeTag: AtomicTypeTag.U64 },
  { name: "refund", typeTag: AtomicTypeTag.Bool },
  { name: "aptToApttRate", typeTag: AtomicTypeTag.U64 },
  { name: "state", typeTag: AtomicTypeTag.U8 },
  { name: "bypassWhiteList", typeTag: AtomicTypeTag.Bool }];

  emgergency: boolean;
  softCap: U64;
  hardCap: U64;
  refund: boolean;
  aptToApttRate: U64;
  state: U8;
  bypassWhiteList: boolean;

  constructor(proto: any, public typeTag: TypeTag) {
    this.emgergency = proto['emgergency'] as boolean;
    this.softCap = proto['softCap'] as U64;
    this.hardCap = proto['hardCap'] as U64;
    this.refund = proto['refund'] as boolean;
    this.aptToApttRate = proto['aptToApttRate'] as U64;
    this.state = proto['state'] as U8;
    this.bypassWhiteList = proto['bypassWhiteList'] as boolean;
  }

  static ApttSwapConfigParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : ApttSwapConfig {
    const proto = $.parseStructProto(data, typeTag, repo, ApttSwapConfig);
    return new ApttSwapConfig(proto, typeTag);
  }

  static async load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]) {
    const result = await repo.loadResource(client, address, ApttSwapConfig, typeParams);
    return result as unknown as ApttSwapConfig;
  }
  static async loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]) {
    const result = await app.repo.loadResource(app.client, address, ApttSwapConfig, typeParams);
    await result.loadFullState(app)
    return result as unknown as ApttSwapConfig;
  }
  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "ApttSwapConfig", []);
  }
  async loadFullState(app: $.AppType) {
    this.__app = app;
  }

}

export class CapsStore 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "CapsStore";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  { name: "signer_cap", typeTag: new StructTag(new HexString("0x1"), "account", "SignerCapability", []) },
  { name: "mint_cap", typeTag: new StructTag(new HexString("0x1"), "coin", "MintCapability", [new StructTag(new HexString("0xd227f6b4afc330dae10d99c9ae176fd3b45314a0f351d2a3e88b79aeb71db2b0"), "aptospad_coin", "AptosPadCoin", [])]) },
  { name: "burn_cap", typeTag: new StructTag(new HexString("0x1"), "coin", "BurnCapability", [new StructTag(new HexString("0xd227f6b4afc330dae10d99c9ae176fd3b45314a0f351d2a3e88b79aeb71db2b0"), "aptospad_coin", "AptosPadCoin", [])]) },
  { name: "freeze_cap", typeTag: new StructTag(new HexString("0x1"), "coin", "FreezeCapability", [new StructTag(new HexString("0xd227f6b4afc330dae10d99c9ae176fd3b45314a0f351d2a3e88b79aeb71db2b0"), "aptospad_coin", "AptosPadCoin", [])]) }];

  signer_cap: Stdlib.Account.SignerCapability;
  mint_cap: Stdlib.Coin.MintCapability;
  burn_cap: Stdlib.Coin.BurnCapability;
  freeze_cap: Stdlib.Coin.FreezeCapability;

  constructor(proto: any, public typeTag: TypeTag) {
    this.signer_cap = proto['signer_cap'] as Stdlib.Account.SignerCapability;
    this.mint_cap = proto['mint_cap'] as Stdlib.Coin.MintCapability;
    this.burn_cap = proto['burn_cap'] as Stdlib.Coin.BurnCapability;
    this.freeze_cap = proto['freeze_cap'] as Stdlib.Coin.FreezeCapability;
  }

  static CapsStoreParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : CapsStore {
    const proto = $.parseStructProto(data, typeTag, repo, CapsStore);
    return new CapsStore(proto, typeTag);
  }

  static async load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]) {
    const result = await repo.loadResource(client, address, CapsStore, typeParams);
    return result as unknown as CapsStore;
  }
  static async loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]) {
    const result = await app.repo.loadResource(app.client, address, CapsStore, typeParams);
    await result.loadFullState(app)
    return result as unknown as CapsStore;
  }
  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "CapsStore", []);
  }
  async loadFullState(app: $.AppType) {
    await this.signer_cap.loadFullState(app);
    await this.mint_cap.loadFullState(app);
    await this.burn_cap.loadFullState(app);
    await this.freeze_cap.loadFullState(app);
    this.__app = app;
  }

}
export function getResourceAddr_ (
  $c: AptosDataCache,
): HexString {
  let temp$1;
  temp$1 = getResourceSigner_($c);
  return Stdlib.Signer.address_of_(temp$1, $c);
}

export function getResourceAddress_ (
  $c: AptosDataCache,
): HexString {
  let signerCap;
  signerCap = $c.borrow_global<CapsStore>(new SimpleStructTag(CapsStore), new HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).signer_cap;
  return Stdlib.Account.get_signer_capability_address_(signerCap, $c);
}

export function getResourceSigner_ (
  $c: AptosDataCache,
): HexString {
  let signerCap;
  signerCap = $c.borrow_global<CapsStore>(new SimpleStructTag(CapsStore), new HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).signer_cap;
  return Stdlib.Account.create_signer_with_capability_(signerCap, $c);
}

export function getSwapConfig_ (
  $c: AptosDataCache,
): [U64, U64, boolean, U64] {
  let config, signerCap;
  signerCap = $c.borrow_global<CapsStore>(new SimpleStructTag(CapsStore), new HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).signer_cap;
  config = $c.borrow_global<ApttSwapConfig>(new SimpleStructTag(ApttSwapConfig), Stdlib.Account.get_signer_capability_address_(signerCap, $c));
  return [$.copy(config.hardCap), $.copy(config.softCap), $.copy(config.refund), $.copy(config.aptToApttRate)];
}

export function getSwapConfigAptToApttRate_ (
  $c: AptosDataCache,
): U64 {
  let rate;
  [, , , rate] = getSwapConfig_($c);
  return $.copy(rate);
}

export function getSwapConfigEnableRefund_ (
  $c: AptosDataCache,
): boolean {
  let enableRefund;
  [, , enableRefund, ] = getSwapConfig_($c);
  return enableRefund;
}

export function getSwapConfigHardCap_ (
  $c: AptosDataCache,
): U64 {
  let hardcap;
  [hardcap, , , ] = getSwapConfig_($c);
  return $.copy(hardcap);
}

export function getSwapConfigSoftCap_ (
  $c: AptosDataCache,
): U64 {
  let softcap;
  [, softcap, , ] = getSwapConfig_($c);
  return $.copy(softcap);
}

export function getSwapState_ (
  $c: AptosDataCache,
): U8 {
  let config, signerCap;
  signerCap = $c.borrow_global<CapsStore>(new SimpleStructTag(CapsStore), new HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).signer_cap;
  config = $c.borrow_global<ApttSwapConfig>(new SimpleStructTag(ApttSwapConfig), Stdlib.Account.get_signer_capability_address_(signerCap, $c));
  return $.copy(config.state);
}

export function initializeAptosPad_ (
  aptospadAdmin: HexString,
  padAptosFund: U64,
  $c: AptosDataCache,
): void {
  let temp$1, burn_cap, config, freeze_cap, mint_cap, resourceSigner, resourceSignerCap;
  if (!((Stdlib.Signer.address_of_(aptospadAdmin, $c)).hex() === (new HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).hex())) {
    throw $.abortCode($.copy(ERR_PERMISSIONS));
  }
  resourceSignerCap = Aptospad_coin_boot.retrieveResourceSignerCap_(aptospadAdmin, $c);
  temp$1 = Stdlib.Account.create_signer_with_capability_(resourceSignerCap, $c);
  resourceSigner = temp$1;
  if (!!$c.exists(new SimpleStructTag(ApttSwapConfig), Stdlib.Signer.address_of_(resourceSigner, $c))) {
    throw $.abortCode($.copy(ERR_INITIALIZED));
  }
  [burn_cap, freeze_cap, mint_cap] = Stdlib.Coin.initialize_(resourceSigner, Stdlib.String.utf8_([u8("65"), u8("112"), u8("116"), u8("111"), u8("115"), u8("80"), u8("97"), u8("100"), u8("32"), u8("67"), u8("111"), u8("105"), u8("110")], $c), Stdlib.String.utf8_([u8("65"), u8("80"), u8("68")], $c), u8("8"), true, $c, [new StructTag(new HexString("0xd227f6b4afc330dae10d99c9ae176fd3b45314a0f351d2a3e88b79aeb71db2b0"), "aptospad_coin", "AptosPadCoin", [])]);
  Stdlib.Coin.register_(resourceSigner, $c, [new StructTag(new HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
  Stdlib.Coin.register_(resourceSigner, $c, [new StructTag(new HexString("0xd227f6b4afc330dae10d99c9ae176fd3b45314a0f351d2a3e88b79aeb71db2b0"), "aptospad_coin", "AptosPadCoin", [])]);
  Stdlib.Coin.transfer_(aptospadAdmin, Stdlib.Signer.address_of_(resourceSigner, $c), $.copy(padAptosFund), $c, [new StructTag(new HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
  $c.move_to(new SimpleStructTag(CapsStore), aptospadAdmin, new CapsStore({ signer_cap: resourceSignerCap, mint_cap: $.copy(mint_cap), burn_cap: $.copy(burn_cap), freeze_cap: $.copy(freeze_cap) }, new SimpleStructTag(CapsStore)));
  config = new ApttSwapConfig({ emgergency: false, softCap: $.copy(CAP_10K), hardCap: $.copy(CAP_50K), refund: false, aptToApttRate: u64("1000"), state: $.copy(STATE_INIT), bypassWhiteList: false }, new SimpleStructTag(ApttSwapConfig));
  $c.move_to(new SimpleStructTag(ApttSwapConfig), resourceSigner, config);
  Stdlib.Coin.destroy_mint_cap_($.copy(mint_cap), $c, [new StructTag(new HexString("0xd227f6b4afc330dae10d99c9ae176fd3b45314a0f351d2a3e88b79aeb71db2b0"), "aptospad_coin", "AptosPadCoin", [])]);
  Stdlib.Coin.destroy_freeze_cap_($.copy(freeze_cap), $c, [new StructTag(new HexString("0xd227f6b4afc330dae10d99c9ae176fd3b45314a0f351d2a3e88b79aeb71db2b0"), "aptospad_coin", "AptosPadCoin", [])]);
  Stdlib.Coin.destroy_burn_cap_($.copy(burn_cap), $c, [new StructTag(new HexString("0xd227f6b4afc330dae10d99c9ae176fd3b45314a0f351d2a3e88b79aeb71db2b0"), "aptospad_coin", "AptosPadCoin", [])]);
  return;
}

export function isBypassWhiteList_ (
  $c: AptosDataCache,
): boolean {
  let signerCap;
  signerCap = $c.borrow_global<CapsStore>(new SimpleStructTag(CapsStore), new HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).signer_cap;
  return $.copy($c.borrow_global<ApttSwapConfig>(new SimpleStructTag(ApttSwapConfig), Stdlib.Account.get_signer_capability_address_(signerCap, $c)).bypassWhiteList);
}

export function isEmergency_ (
  $c: AptosDataCache,
): boolean {
  let config, signerCap;
  signerCap = $c.borrow_global<CapsStore>(new SimpleStructTag(CapsStore), new HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).signer_cap;
  config = $c.borrow_global<ApttSwapConfig>(new SimpleStructTag(ApttSwapConfig), Stdlib.Account.get_signer_capability_address_(signerCap, $c));
  return $.copy(config.emgergency);
}

export function mintAtppTo_ (
  investor: HexString,
  amount: U64,
  $c: AptosDataCache,
): void {
  let mintCap;
  mintCap = $c.borrow_global<CapsStore>(new SimpleStructTag(CapsStore), new HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).mint_cap;
  Stdlib.Coin.deposit_($.copy(investor), Stdlib.Coin.mint_($.copy(amount), mintCap, $c, [new StructTag(new HexString("0xd227f6b4afc330dae10d99c9ae176fd3b45314a0f351d2a3e88b79aeb71db2b0"), "aptospad_coin", "AptosPadCoin", [])]), $c, [new StructTag(new HexString("0xd227f6b4afc330dae10d99c9ae176fd3b45314a0f351d2a3e88b79aeb71db2b0"), "aptospad_coin", "AptosPadCoin", [])]);
  return;
}

export function setApttSwapConfig_ (
  aptospadAdmin: HexString,
  softCap: U64,
  hardCap: U64,
  refund: boolean,
  aptToApttRate: U64,
  bypassWhitelist: boolean,
  $c: AptosDataCache,
): void {
  let temp$1, temp$2, config, signerCap;
  if (!((Stdlib.Signer.address_of_(aptospadAdmin, $c)).hex() === (new HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).hex())) {
    throw $.abortCode($.copy(ERR_PERMISSIONS));
  }
  if (!(getSwapState_($c)).eq(($.copy(STATE_INIT)))) {
    throw $.abortCode($.copy(ERR_SEASON_STATE));
  }
  if (($.copy(softCap)).gt(u64("0"))) {
    temp$1 = ($.copy(hardCap)).gt(u64("0"));
  }
  else{
    temp$1 = false;
  }
  if (temp$1) {
    temp$2 = ($.copy(hardCap)).gt($.copy(softCap));
  }
  else{
    temp$2 = false;
  }
  if (!temp$2) {
    throw $.abortCode($.copy(ERR_INVALID_CAP));
  }
  if (!($.copy(aptToApttRate)).gt(u64("0"))) {
    throw $.abortCode($.copy(ERR_INVALID_RATE));
  }
  signerCap = $c.borrow_global<CapsStore>(new SimpleStructTag(CapsStore), new HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).signer_cap;
  config = $c.borrow_global_mut<ApttSwapConfig>(new SimpleStructTag(ApttSwapConfig), Stdlib.Account.get_signer_capability_address_(signerCap, $c));
  config.softCap = $.copy(softCap);
  config.hardCap = $.copy(hardCap);
  config.refund = refund;
  config.aptToApttRate = $.copy(aptToApttRate);
  config.bypassWhiteList = bypassWhitelist;
  return;
}

export function setApttSwapConfigV2_ (
  aptospadAdmin: HexString,
  softCap: U64,
  hardCap: U64,
  refund: boolean,
  aptToApttRate: U64,
  bypassWhitelist: boolean,
  $c: AptosDataCache,
): void {
  let temp$1, temp$2, config, signerCap;
  if (!((Stdlib.Signer.address_of_(aptospadAdmin, $c)).hex() === (new HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).hex())) {
    throw $.abortCode($.copy(ERR_PERMISSIONS));
  }
  if (($.copy(softCap)).gt(u64("0"))) {
    temp$1 = ($.copy(hardCap)).gt(u64("0"));
  }
  else{
    temp$1 = false;
  }
  if (temp$1) {
    temp$2 = ($.copy(hardCap)).gt($.copy(softCap));
  }
  else{
    temp$2 = false;
  }
  if (!temp$2) {
    throw $.abortCode($.copy(ERR_INVALID_CAP));
  }
  if (!($.copy(aptToApttRate)).gt(u64("0"))) {
    throw $.abortCode($.copy(ERR_INVALID_RATE));
  }
  signerCap = $c.borrow_global<CapsStore>(new SimpleStructTag(CapsStore), new HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).signer_cap;
  config = $c.borrow_global_mut<ApttSwapConfig>(new SimpleStructTag(ApttSwapConfig), Stdlib.Account.get_signer_capability_address_(signerCap, $c));
  config.softCap = $.copy(softCap);
  config.hardCap = $.copy(hardCap);
  config.refund = refund;
  config.aptToApttRate = $.copy(aptToApttRate);
  config.bypassWhiteList = bypassWhitelist;
  return;
}

export function setBypassWhitelist_ (
  aptospadAdmin: HexString,
  bypass: boolean,
  $c: AptosDataCache,
): void {
  let config, signerCap;
  if (!((Stdlib.Signer.address_of_(aptospadAdmin, $c)).hex() === (new HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).hex())) {
    throw $.abortCode($.copy(ERR_PERMISSIONS));
  }
  signerCap = $c.borrow_global<CapsStore>(new SimpleStructTag(CapsStore), new HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).signer_cap;
  config = $c.borrow_global_mut<ApttSwapConfig>(new SimpleStructTag(ApttSwapConfig), Stdlib.Account.get_signer_capability_address_(signerCap, $c));
  config.bypassWhiteList = bypass;
  return;
}

export function setEmergency_ (
  aptospadAdmin: HexString,
  emergency: boolean,
  $c: AptosDataCache,
): void {
  let config, signerCap;
  if (!((Stdlib.Signer.address_of_(aptospadAdmin, $c)).hex() === (new HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).hex())) {
    throw $.abortCode($.copy(ERR_PERMISSIONS));
  }
  signerCap = $c.borrow_global<CapsStore>(new SimpleStructTag(CapsStore), new HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).signer_cap;
  config = $c.borrow_global_mut<ApttSwapConfig>(new SimpleStructTag(ApttSwapConfig), Stdlib.Account.get_signer_capability_address_(signerCap, $c));
  config.emgergency = emergency;
  return;
}

export function setSwapState_ (
  state: U8,
  $c: AptosDataCache,
): void {
  let config, signerCap;
  signerCap = $c.borrow_global<CapsStore>(new SimpleStructTag(CapsStore), new HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).signer_cap;
  config = $c.borrow_global_mut<ApttSwapConfig>(new SimpleStructTag(ApttSwapConfig), Stdlib.Account.get_signer_capability_address_(signerCap, $c));
  config.state = $.copy(state);
  return;
}

export function loadParsers(repo: AptosParserRepo) {
  repo.addParser("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0::config::ApttSwapConfig", ApttSwapConfig.ApttSwapConfigParser);
  repo.addParser("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0::config::CapsStore", CapsStore.CapsStoreParser);
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
  get ApttSwapConfig() { return ApttSwapConfig; }
  async loadApttSwapConfig(
    owner: HexString,
    loadFull=true,
    fillCache=true,
  ) {
    const val = await ApttSwapConfig.load(this.repo, this.client, owner, [] as TypeTag[]);
    if (loadFull) {
      await val.loadFullState(this);
    }
    if (fillCache) {
      this.cache.set(val.typeTag, owner, val);
    }
    return val;
  }
  get CapsStore() { return CapsStore; }
  async loadCapsStore(
    owner: HexString,
    loadFull=true,
    fillCache=true,
  ) {
    const val = await CapsStore.load(this.repo, this.client, owner, [] as TypeTag[]);
    if (loadFull) {
      await val.loadFullState(this);
    }
    if (fillCache) {
      this.cache.set(val.typeTag, owner, val);
    }
    return val;
  }
}

