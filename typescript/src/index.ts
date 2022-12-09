
import { AptosClient } from "aptos";
import { AptosParserRepo, AptosLocalCache, AptosSyncedCache, u8, u64, u128 } from "@manahippo/move-to-ts";
import * as aptospad from './aptospad';
import * as aptospad_coin from './aptospad_coin';
import * as stdlib from './stdlib';

export * as aptospad from './aptospad';
export * as aptospad_coin from './aptospad_coin';
export * as stdlib from './stdlib';

export { u8, u64, u128 };

export function getProjectRepo(): AptosParserRepo {
  const repo = new AptosParserRepo();
  aptospad.loadParsers(repo);
  aptospad_coin.loadParsers(repo);
  stdlib.loadParsers(repo);
  repo.addDefaultParsers();
  return repo;
}

export class App {
  parserRepo: AptosParserRepo;
  cache: AptosLocalCache;
  aptospad : aptospad.App
  aptospad_coin : aptospad_coin.App
  stdlib : stdlib.App
  constructor(
    public client: AptosClient,
  ) {
    this.parserRepo = getProjectRepo();
    this.cache = new AptosLocalCache();
    this.aptospad = new aptospad.App(client, this.parserRepo, this.cache);
    this.aptospad_coin = new aptospad_coin.App(client, this.parserRepo, this.cache);
    this.stdlib = new stdlib.App(client, this.parserRepo, this.cache);
  }
}
