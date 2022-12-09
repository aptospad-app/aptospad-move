import * as $ from "@manahippo/move-to-ts";
import {AptosDataCache, AptosParserRepo, DummyCache, AptosLocalCache} from "@manahippo/move-to-ts";
import {U8, U64, U128} from "@manahippo/move-to-ts";
import {u8, u64, u128} from "@manahippo/move-to-ts";
import {TypeParamDeclType, FieldDeclType} from "@manahippo/move-to-ts";
import {AtomicTypeTag, StructTag, TypeTag, VectorTag, SimpleStructTag} from "@manahippo/move-to-ts";
import {OptionTransaction} from "@manahippo/move-to-ts";
import {HexString, AptosClient, AptosAccount, TxnBuilderTypes, Types} from "aptos";
export const packageName = "AptosPadCoin";
export const moduleAddress = new HexString("0x1c07732f8f9bed7ee795519629ce8c334d08348fccadbb473d859464042a3ba7");
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
  repo.addParser("0x1c07732f8f9bed7ee795519629ce8c334d08348fccadbb473d859464042a3ba7::aptospad_coin::AptosPadCoin", AptosPadCoin.AptosPadCoinParser);
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

