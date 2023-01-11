import * as $ from "@manahippo/move-to-ts";
import {AptosDataCache, AptosParserRepo, DummyCache, AptosLocalCache} from "@manahippo/move-to-ts";
import {U8, U64, U128} from "@manahippo/move-to-ts";
import {u8, u64, u128} from "@manahippo/move-to-ts";
import {TypeParamDeclType, FieldDeclType} from "@manahippo/move-to-ts";
import {AtomicTypeTag, StructTag, TypeTag, VectorTag, SimpleStructTag} from "@manahippo/move-to-ts";
import {OptionTransaction} from "@manahippo/move-to-ts";
import {HexString, AptosClient, AptosAccount, TxnBuilderTypes, Types} from "aptos";
export const packageName = "AptosPadCoin";
export const moduleAddress = new HexString("0xd227f6b4afc330dae10d99c9ae176fd3b45314a0f351d2a3e88b79aeb71db2b0");
export const moduleName = "aptospad_coin";



export class AptosPadCoin 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "AptosPadCoin";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  ];

  constructor(proto: any, public typeTag: TypeTag) {

  }

  static AptosPadCoinParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : AptosPadCoin {
    const proto = $.parseStructProto(data, typeTag, repo, AptosPadCoin);
    return new AptosPadCoin(proto, typeTag);
  }

  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "AptosPadCoin", []);
  }
  async loadFullState(app: $.AppType) {
    this.__app = app;
  }

}
export function loadParsers(repo: AptosParserRepo) {
  repo.addParser("0xd227f6b4afc330dae10d99c9ae176fd3b45314a0f351d2a3e88b79aeb71db2b0::aptospad_coin::AptosPadCoin", AptosPadCoin.AptosPadCoinParser);
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
  get AptosPadCoin() { return AptosPadCoin; }
}

