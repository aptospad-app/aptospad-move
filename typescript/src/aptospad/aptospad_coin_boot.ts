import * as $ from "@manahippo/move-to-ts";
import {AptosDataCache, AptosParserRepo, DummyCache, AptosLocalCache} from "@manahippo/move-to-ts";
import {U8, U64, U128} from "@manahippo/move-to-ts";
import {u8, u64, u128} from "@manahippo/move-to-ts";
import {TypeParamDeclType, FieldDeclType} from "@manahippo/move-to-ts";
import {AtomicTypeTag, StructTag, TypeTag, VectorTag, SimpleStructTag} from "@manahippo/move-to-ts";
import {OptionTransaction} from "@manahippo/move-to-ts";
import {HexString, AptosClient, AptosAccount, TxnBuilderTypes, Types} from "aptos";
import * as Stdlib from "../stdlib";
export const packageName = "AptosPadCoinBoot";
export const moduleAddress = new HexString("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea");
export const moduleName = "aptospad_coin_boot";

export const ERR_PERMISSIONS : U64 = u64("403");


export class BootResourceSignerStore 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "BootResourceSignerStore";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  { name: "resource_signer_cap", typeTag: new StructTag(new HexString("0x1"), "account", "SignerCapability", []) }];

  resource_signer_cap: Stdlib.Account.SignerCapability;

  constructor(proto: any, public typeTag: TypeTag) {
    this.resource_signer_cap = proto['resource_signer_cap'] as Stdlib.Account.SignerCapability;
  }

  static BootResourceSignerStoreParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : BootResourceSignerStore {
    const proto = $.parseStructProto(data, typeTag, repo, BootResourceSignerStore);
    return new BootResourceSignerStore(proto, typeTag);
  }

  static async load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]) {
    const result = await repo.loadResource(client, address, BootResourceSignerStore, typeParams);
    return result as unknown as BootResourceSignerStore;
  }
  static async loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]) {
    const result = await app.repo.loadResource(app.client, address, BootResourceSignerStore, typeParams);
    await result.loadFullState(app)
    return result as unknown as BootResourceSignerStore;
  }
  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "BootResourceSignerStore", []);
  }
  async loadFullState(app: $.AppType) {
    await this.resource_signer_cap.loadFullState(app);
    this.__app = app;
  }

}
export function initializeWithResourceAccount_ (
  aptospadAdmin: HexString,
  metadata: U8[],
  byteCode: U8[],
  $c: AptosDataCache,
): void {
  let resourceSigner, resourceSignerCap;
  if (!((Stdlib.Signer.address_of_(aptospadAdmin, $c)).hex() === (new HexString("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea")).hex())) {
    throw $.abortCode($.copy(ERR_PERMISSIONS));
  }
  [resourceSigner, resourceSignerCap] = Stdlib.Account.create_resource_account_(aptospadAdmin, [u8("97"), u8("112"), u8("116"), u8("111"), u8("115"), u8("112"), u8("97"), u8("100"), u8("95"), u8("97"), u8("99"), u8("99"), u8("111"), u8("117"), u8("110"), u8("116"), u8("95"), u8("115"), u8("101"), u8("101"), u8("100")], $c);
  Stdlib.Code.publish_package_txn_(resourceSigner, $.copy(metadata), [$.copy(byteCode)], $c);
  $c.move_to(new SimpleStructTag(BootResourceSignerStore), aptospadAdmin, new BootResourceSignerStore({ resource_signer_cap: resourceSignerCap }, new SimpleStructTag(BootResourceSignerStore)));
  return;
}


export function buildPayload_initializeWithResourceAccount (
  metadata: U8[],
  byteCode: U8[],
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = [] as string[];
  return $.buildPayload(
    new HexString("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea"),
    "aptospad_coin_boot",
    "initializeWithResourceAccount",
    typeParamStrings,
    [
      metadata,
      byteCode,
    ],
    isJSON,
  );

}
export function retrieveResourceSignerCap_ (
  aptospadAdmin: HexString,
  $c: AptosDataCache,
): Stdlib.Account.SignerCapability {
  if (!((Stdlib.Signer.address_of_(aptospadAdmin, $c)).hex() === (new HexString("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea")).hex())) {
    throw $.abortCode($.copy(ERR_PERMISSIONS));
  }
  let { resource_signer_cap: resource_signer_cap } = $c.move_from<BootResourceSignerStore>(new SimpleStructTag(BootResourceSignerStore), Stdlib.Signer.address_of_(aptospadAdmin, $c));
  return resource_signer_cap;
}

export function loadParsers(repo: AptosParserRepo) {
  repo.addParser("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea::aptospad_coin_boot::BootResourceSignerStore", BootResourceSignerStore.BootResourceSignerStoreParser);
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
  get BootResourceSignerStore() { return BootResourceSignerStore; }
  async loadBootResourceSignerStore(
    owner: HexString,
    loadFull=true,
    fillCache=true,
  ) {
    const val = await BootResourceSignerStore.load(this.repo, this.client, owner, [] as TypeTag[]);
    if (loadFull) {
      await val.loadFullState(this);
    }
    if (fillCache) {
      this.cache.set(val.typeTag, owner, val);
    }
    return val;
  }
  payload_initializeWithResourceAccount(
    metadata: U8[],
    byteCode: U8[],
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_initializeWithResourceAccount(metadata, byteCode, isJSON);
  }
  async initializeWithResourceAccount(
    _account: AptosAccount,
    metadata: U8[],
    byteCode: U8[],
    option?: OptionTransaction,
    _isJSON = false
  ) {
    const payload__ = buildPayload_initializeWithResourceAccount(metadata, byteCode, _isJSON);
    return $.sendPayloadTx(this.client, _account, payload__, option);
  }
}

