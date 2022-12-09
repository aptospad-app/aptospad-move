import * as $ from "@manahippo/move-to-ts";
import {AptosDataCache, AptosParserRepo, DummyCache, AptosLocalCache} from "@manahippo/move-to-ts";
import {U8, U64, U128} from "@manahippo/move-to-ts";
import {u8, u64, u128} from "@manahippo/move-to-ts";
import {TypeParamDeclType, FieldDeclType} from "@manahippo/move-to-ts";
import {AtomicTypeTag, StructTag, TypeTag, VectorTag, SimpleStructTag} from "@manahippo/move-to-ts";
import {OptionTransaction} from "@manahippo/move-to-ts";
import {HexString, AptosClient, AptosAccount, TxnBuilderTypes, Types} from "aptos";
import * as Aptospad_swap from "./aptospad_swap";
import * as Config from "./config";
export const packageName = "AptosPad";
export const moduleAddress = new HexString("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea");
export const moduleName = "scripts";


export function addWhiteList_ (
  admin: HexString,
  user: HexString,
  cap: U64,
  $c: AptosDataCache,
): void {
  Aptospad_swap.addWhiteList_(admin, $.copy(user), $.copy(cap), $c);
  return;
}


export function buildPayload_addWhiteList (
  user: HexString,
  cap: U64,
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = [] as string[];
  return $.buildPayload(
    new HexString("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea"),
    "scripts",
    "addWhiteList",
    typeParamStrings,
    [
      user,
      cap,
    ],
    isJSON,
  );

}

export function bidAptosPad_ (
  user: HexString,
  amount: U64,
  $c: AptosDataCache,
): void {
  Aptospad_swap.bidAptosPadV5_(user, $.copy(amount), $c);
  return;
}


export function buildPayload_bidAptosPad (
  amount: U64,
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = [] as string[];
  return $.buildPayload(
    new HexString("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea"),
    "scripts",
    "bidAptosPad",
    typeParamStrings,
    [
      amount,
    ],
    isJSON,
  );

}

export function distributeSeason_ (
  admin: HexString,
  $c: AptosDataCache,
): void {
  Aptospad_swap.distributeSeasonV3_(admin, $c);
  return;
}


export function buildPayload_distributeSeason (
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = [] as string[];
  return $.buildPayload(
    new HexString("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea"),
    "scripts",
    "distributeSeason",
    typeParamStrings,
    [],
    isJSON,
  );

}

export function initializeAptosPad_ (
  admin: HexString,
  preFundAptos: U64,
  $c: AptosDataCache,
): void {
  Config.initializeAptosPad_(admin, $.copy(preFundAptos), $c);
  Aptospad_swap.initialize_(admin, $c);
  return;
}


export function buildPayload_initializeAptosPad (
  preFundAptos: U64,
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = [] as string[];
  return $.buildPayload(
    new HexString("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea"),
    "scripts",
    "initializeAptosPad",
    typeParamStrings,
    [
      preFundAptos,
    ],
    isJSON,
  );

}

export function launchPadSeason_ (
  admin: HexString,
  $c: AptosDataCache,
): void {
  Aptospad_swap.launchPadSeason_(admin, $c);
  return;
}


export function buildPayload_launchPadSeason (
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = [] as string[];
  return $.buildPayload(
    new HexString("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea"),
    "scripts",
    "launchPadSeason",
    typeParamStrings,
    [],
    isJSON,
  );

}

export function paycoinAndRefund_ (
  admin: HexString,
  $c: AptosDataCache,
): void {
  Aptospad_swap.paycoinAndRefund_(admin, $c);
  return;
}


export function buildPayload_paycoinAndRefund (
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = [] as string[];
  return $.buildPayload(
    new HexString("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea"),
    "scripts",
    "paycoinAndRefund",
    typeParamStrings,
    [],
    isJSON,
  );

}

export function resetSeason_ (
  admin: HexString,
  $c: AptosDataCache,
): void {
  Aptospad_swap.resetSeason_(admin, $c);
  return;
}


export function buildPayload_resetSeason (
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = [] as string[];
  return $.buildPayload(
    new HexString("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea"),
    "scripts",
    "resetSeason",
    typeParamStrings,
    [],
    isJSON,
  );

}

export function setApttSwapConfig_ (
  admin: HexString,
  softCap: U64,
  hardCap: U64,
  enableRefund: boolean,
  aptToApttRate: U64,
  bypassWhitelist: boolean,
  $c: AptosDataCache,
): void {
  Config.setApttSwapConfigV2_(admin, $.copy(softCap), $.copy(hardCap), enableRefund, $.copy(aptToApttRate), bypassWhitelist, $c);
  return;
}


export function buildPayload_setApttSwapConfig (
  softCap: U64,
  hardCap: U64,
  enableRefund: boolean,
  aptToApttRate: U64,
  bypassWhitelist: boolean,
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = [] as string[];
  return $.buildPayload(
    new HexString("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea"),
    "scripts",
    "setApttSwapConfig",
    typeParamStrings,
    [
      softCap,
      hardCap,
      enableRefund,
      aptToApttRate,
      bypassWhitelist,
    ],
    isJSON,
  );

}

export function setBypassWhiteList_ (
  admin: HexString,
  bypass: boolean,
  $c: AptosDataCache,
): void {
  Config.setBypassWhitelist_(admin, bypass, $c);
  return;
}


export function buildPayload_setBypassWhiteList (
  bypass: boolean,
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = [] as string[];
  return $.buildPayload(
    new HexString("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea"),
    "scripts",
    "setBypassWhiteList",
    typeParamStrings,
    [
      bypass,
    ],
    isJSON,
  );

}

export function setEmergency_ (
  admin: HexString,
  emergency: boolean,
  $c: AptosDataCache,
): void {
  Config.setEmergency_(admin, emergency, $c);
  return;
}


export function buildPayload_setEmergency (
  emergency: boolean,
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = [] as string[];
  return $.buildPayload(
    new HexString("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea"),
    "scripts",
    "setEmergency",
    typeParamStrings,
    [
      emergency,
    ],
    isJSON,
  );

}

export function whiteListSeason_ (
  admin: HexString,
  $c: AptosDataCache,
): void {
  Aptospad_swap.whiteListSeason_(admin, $c);
  return;
}


export function buildPayload_whiteListSeason (
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = [] as string[];
  return $.buildPayload(
    new HexString("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea"),
    "scripts",
    "whiteListSeason",
    typeParamStrings,
    [],
    isJSON,
  );

}

export function withdrawAptos_ (
  admin: HexString,
  debit: HexString,
  amount: U64,
  $c: AptosDataCache,
): void {
  Aptospad_swap.withdrawAptos_(admin, $.copy(debit), $.copy(amount), $c);
  return;
}


export function buildPayload_withdrawAptos (
  debit: HexString,
  amount: U64,
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = [] as string[];
  return $.buildPayload(
    new HexString("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea"),
    "scripts",
    "withdrawAptos",
    typeParamStrings,
    [
      debit,
      amount,
    ],
    isJSON,
  );

}

export function withdrawAptosPad_ (
  admin: HexString,
  debit: HexString,
  amount: U64,
  $c: AptosDataCache,
): void {
  Aptospad_swap.withdrawAptosPad_(admin, $.copy(debit), $.copy(amount), $c);
  return;
}


export function buildPayload_withdrawAptosPad (
  debit: HexString,
  amount: U64,
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = [] as string[];
  return $.buildPayload(
    new HexString("0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea"),
    "scripts",
    "withdrawAptosPad",
    typeParamStrings,
    [
      debit,
      amount,
    ],
    isJSON,
  );

}

export function loadParsers(repo: AptosParserRepo) {
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
  payload_addWhiteList(
    user: HexString,
    cap: U64,
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_addWhiteList(user, cap, isJSON);
  }
  async addWhiteList(
    _account: AptosAccount,
    user: HexString,
    cap: U64,
    option?: OptionTransaction,
    _isJSON = false
  ) {
    const payload__ = buildPayload_addWhiteList(user, cap, _isJSON);
    return $.sendPayloadTx(this.client, _account, payload__, option);
  }
  payload_bidAptosPad(
    amount: U64,
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_bidAptosPad(amount, isJSON);
  }
  async bidAptosPad(
    _account: AptosAccount,
    amount: U64,
    option?: OptionTransaction,
    _isJSON = false
  ) {
    const payload__ = buildPayload_bidAptosPad(amount, _isJSON);
    return $.sendPayloadTx(this.client, _account, payload__, option);
  }
  payload_distributeSeason(
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_distributeSeason(isJSON);
  }
  async distributeSeason(
    _account: AptosAccount,
    option?: OptionTransaction,
    _isJSON = false
  ) {
    const payload__ = buildPayload_distributeSeason(_isJSON);
    return $.sendPayloadTx(this.client, _account, payload__, option);
  }
  payload_initializeAptosPad(
    preFundAptos: U64,
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_initializeAptosPad(preFundAptos, isJSON);
  }
  async initializeAptosPad(
    _account: AptosAccount,
    preFundAptos: U64,
    option?: OptionTransaction,
    _isJSON = false
  ) {
    const payload__ = buildPayload_initializeAptosPad(preFundAptos, _isJSON);
    return $.sendPayloadTx(this.client, _account, payload__, option);
  }
  payload_launchPadSeason(
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_launchPadSeason(isJSON);
  }
  async launchPadSeason(
    _account: AptosAccount,
    option?: OptionTransaction,
    _isJSON = false
  ) {
    const payload__ = buildPayload_launchPadSeason(_isJSON);
    return $.sendPayloadTx(this.client, _account, payload__, option);
  }
  payload_paycoinAndRefund(
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_paycoinAndRefund(isJSON);
  }
  async paycoinAndRefund(
    _account: AptosAccount,
    option?: OptionTransaction,
    _isJSON = false
  ) {
    const payload__ = buildPayload_paycoinAndRefund(_isJSON);
    return $.sendPayloadTx(this.client, _account, payload__, option);
  }
  payload_resetSeason(
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_resetSeason(isJSON);
  }
  async resetSeason(
    _account: AptosAccount,
    option?: OptionTransaction,
    _isJSON = false
  ) {
    const payload__ = buildPayload_resetSeason(_isJSON);
    return $.sendPayloadTx(this.client, _account, payload__, option);
  }
  payload_setApttSwapConfig(
    softCap: U64,
    hardCap: U64,
    enableRefund: boolean,
    aptToApttRate: U64,
    bypassWhitelist: boolean,
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_setApttSwapConfig(softCap, hardCap, enableRefund, aptToApttRate, bypassWhitelist, isJSON);
  }
  async setApttSwapConfig(
    _account: AptosAccount,
    softCap: U64,
    hardCap: U64,
    enableRefund: boolean,
    aptToApttRate: U64,
    bypassWhitelist: boolean,
    option?: OptionTransaction,
    _isJSON = false
  ) {
    const payload__ = buildPayload_setApttSwapConfig(softCap, hardCap, enableRefund, aptToApttRate, bypassWhitelist, _isJSON);
    return $.sendPayloadTx(this.client, _account, payload__, option);
  }
  payload_setBypassWhiteList(
    bypass: boolean,
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_setBypassWhiteList(bypass, isJSON);
  }
  async setBypassWhiteList(
    _account: AptosAccount,
    bypass: boolean,
    option?: OptionTransaction,
    _isJSON = false
  ) {
    const payload__ = buildPayload_setBypassWhiteList(bypass, _isJSON);
    return $.sendPayloadTx(this.client, _account, payload__, option);
  }
  payload_setEmergency(
    emergency: boolean,
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_setEmergency(emergency, isJSON);
  }
  async setEmergency(
    _account: AptosAccount,
    emergency: boolean,
    option?: OptionTransaction,
    _isJSON = false
  ) {
    const payload__ = buildPayload_setEmergency(emergency, _isJSON);
    return $.sendPayloadTx(this.client, _account, payload__, option);
  }
  payload_whiteListSeason(
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_whiteListSeason(isJSON);
  }
  async whiteListSeason(
    _account: AptosAccount,
    option?: OptionTransaction,
    _isJSON = false
  ) {
    const payload__ = buildPayload_whiteListSeason(_isJSON);
    return $.sendPayloadTx(this.client, _account, payload__, option);
  }
  payload_withdrawAptos(
    debit: HexString,
    amount: U64,
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_withdrawAptos(debit, amount, isJSON);
  }
  async withdrawAptos(
    _account: AptosAccount,
    debit: HexString,
    amount: U64,
    option?: OptionTransaction,
    _isJSON = false
  ) {
    const payload__ = buildPayload_withdrawAptos(debit, amount, _isJSON);
    return $.sendPayloadTx(this.client, _account, payload__, option);
  }
  payload_withdrawAptosPad(
    debit: HexString,
    amount: U64,
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_withdrawAptosPad(debit, amount, isJSON);
  }
  async withdrawAptosPad(
    _account: AptosAccount,
    debit: HexString,
    amount: U64,
    option?: OptionTransaction,
    _isJSON = false
  ) {
    const payload__ = buildPayload_withdrawAptosPad(debit, amount, _isJSON);
    return $.sendPayloadTx(this.client, _account, payload__, option);
  }
}

