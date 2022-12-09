
import { AptosClient } from "aptos";
import { AptosParserRepo, AptosLocalCache, AptosSyncedCache } from "@manahippo/move-to-ts";
import * as Aptospad_coin_boot from './aptospad_coin_boot';
import * as Aptospad_swap from './aptospad_swap';
import * as Config from './config';
import * as Iterable_table from './iterable_table';
import * as Project from './project';
import * as Scripts from './scripts';

export * as Aptospad_coin_boot from './aptospad_coin_boot';
export * as Aptospad_swap from './aptospad_swap';
export * as Config from './config';
export * as Iterable_table from './iterable_table';
export * as Project from './project';
export * as Scripts from './scripts';


export function loadParsers(repo: AptosParserRepo) {
  Aptospad_coin_boot.loadParsers(repo);
  Aptospad_swap.loadParsers(repo);
  Config.loadParsers(repo);
  Iterable_table.loadParsers(repo);
  Project.loadParsers(repo);
  Scripts.loadParsers(repo);
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
  aptospad_coin_boot : Aptospad_coin_boot.App
  aptospad_swap : Aptospad_swap.App
  config : Config.App
  iterable_table : Iterable_table.App
  project : Project.App
  scripts : Scripts.App
  constructor(
    public client: AptosClient,
    public repo: AptosParserRepo,
    public cache: AptosLocalCache,
  ) {
    this.aptospad_coin_boot = new Aptospad_coin_boot.App(client, repo, cache);
    this.aptospad_swap = new Aptospad_swap.App(client, repo, cache);
    this.config = new Config.App(client, repo, cache);
    this.iterable_table = new Iterable_table.App(client, repo, cache);
    this.project = new Project.App(client, repo, cache);
    this.scripts = new Scripts.App(client, repo, cache);
  }
}
