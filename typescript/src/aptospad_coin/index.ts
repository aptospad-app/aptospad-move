
import { AptosClient } from "aptos";
import { AptosParserRepo, AptosLocalCache, AptosSyncedCache } from "@manahippo/move-to-ts";
import * as Aptospad_coin from './aptospad_coin';

export * as Aptospad_coin from './aptospad_coin';


export function loadParsers(repo: AptosParserRepo) {
  Aptospad_coin.loadParsers(repo);
}

export function getPackageRepo(): AptosParserRepo {
  const repo = new AptosParserRepo();
  loadParsers(repo);
  repo.addDefaultParsers();
  return repo;
}

export type AppType = {
  client: AptosClient,
  repo: AptosParserRepo,
  cache: AptosLocalCache,
};

export class App {
  aptospad_coin : Aptospad_coin.App
  constructor(
    public client: AptosClient,
    public repo: AptosParserRepo,
    public cache: AptosLocalCache,
  ) {
    this.aptospad_coin = new Aptospad_coin.App(client, repo, cache);
  }
}
