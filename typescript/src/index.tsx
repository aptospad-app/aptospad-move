import * as aptospad$_ from './aptospad';

import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import ReactDOM from 'react-dom/client';
import { AptosParserRepo, getTypeTagFullname, StructTag, TypeTag, AtomicTypeTag, VectorTag, parseTypeTagOrThrow, u8, u64, u128, print, strToU8, u8str, DummyCache }
from
"@manahippo/move-to-ts";
import './index.css';
import { AptosAccount, AptosClient, HexString, Types } from "aptos";

interface IArg {
  name: string;
  typeTag: TypeTag;
}

interface ICommand {
  module: string;
  name: string;
  typeArgs: string[];
  args: IArg[];
  type: "cmd";
  invoker: Function;
}

interface IShow {
  module: string;
  name: string;
  type: "show",
}

interface IModule {
  package: string;
  name: string;
  commands: ICommand[];
}

interface IPackage {
  name: string;
  modules: IModule[];
  shows: IShow[];
}

interface IContent {
  packages: IPackage[];
}

function isShow(v: any) {
  return v.type === 'show';
}

/*
function isCommand(v: any) {
  return v.type === 'command';
}
*/


const App = () => {
  const [mainItem, setMainItem] = useState(null as (IShow | ICommand | null))

  const NavContent = (content: IContent) => {
    return (
      <div>
        {content.packages.map(NavPackage)}
      </div>
    )
  }


  const NavPackage = (pkg: IPackage) => {
    return (
      <div>
        <h3 className="ui header">{pkg.name}</h3>
        <div>
          {pkg.modules.map(NavModule)}
        </div>
        <div>
          {pkg.shows.map(NavShow)}
        </div>
      </div>
    )
  }

  const NavModule = (module: IModule) => {
    return (
      <div>
        <h4 className="ui header">{module.package}::{module.name}</h4>
        <div>
          {module.commands.map(NavCommand)}
        </div>
      </div>
    )
  }

  const NavCommand = (cmd: ICommand) => {
    function setCurrentCommand() {
      setMainItem(cmd);
    }
    return (
      <div className="NavCommand" onClick={setCurrentCommand}>
        {cmd.name}
      </div>
    )
  }

  const NavShow = (show: IShow) => {
    function setCurrentShow() {
      setMainItem(show);
    }
    return (
      <div className="NavShow" onClick={setCurrentShow}>
        {show.name}
      </div>
    )
  }

  const TypeArgInput = (typeArg: string) => {
    return (
      <div>
        <Input label={typeArg} placeholder="0xaddr::module_name::StructName"></Input>
      </div>
    )
  }

  const ArgInput = (arg: IArg) => {
    return (
      <div>
        <Input label={arg.name} placeholder={getTypeTagFullname(arg.typeTag)}></Input>
      </div>
    )
  }

  const CommandContainer = (cmd: ICommand) => {
    return (
      <div className="CommandContainer">
        <h1 className="ui header">{`Command: ${cmd.name}`}</h1>
        <div className="CommandContent">
          <div>Module: {cmd.module}</div>
          <div>Command: {cmd.name}</div>
          {cmd.typeArgs.map(TypeArgInput)}
          {cmd.args.map(ArgInput)}
        </div>
      </div>
    )
  }

  const ShowContainer = (show: IShow) => {
    return (
      <h1 className="ui header">{`Show: ${show.name}`}</h1>
    )
  }

  return (
    <div className="App">
      <div className="NavBar">
        {NavContent(content)}
      </div>
      <div className="Main">
        {
          mainItem === null ? (<div></div>) :
          isShow(mainItem) ? ShowContainer(mainItem as IShow) :
          CommandContainer(mainItem as ICommand)
        }
      </div>
    </div>
  )
}

const content: IContent = {
  packages: [
    {
      name: "aptospad",
      modules: [
        {
          name: "scripts",
          package: "aptospad",
          commands: [
            {
              module: "scripts",
              name: "addWhiteList",
              typeArgs: [],
              args: [
                {
                  name: "user",
                  typeTag: AtomicTypeTag.Address,
                },
                {
                  name: "cap",
                  typeTag: AtomicTypeTag.U64,
                },
              ],
              type: "cmd",
              invoker: async (client: AptosClient, account: AptosAccount, user_: string, cap_: string) => {
                const user = new HexString(user_);
                const cap = u64(cap_);
                const payload = Aptospad.Scripts.buildPayload_addWhiteList(user, cap);
                await sendPayloadTx(client, account, payload);
              }
            },
            {
              module: "scripts",
              name: "bidAptosPad",
              typeArgs: [],
              args: [
                {
                  name: "amount",
                  typeTag: AtomicTypeTag.U64,
                },
              ],
              type: "cmd",
              invoker: async (client: AptosClient, account: AptosAccount, amount_: string) => {
                const amount = u64(amount_);
                const payload = Aptospad.Scripts.buildPayload_bidAptosPad(amount);
                await sendPayloadTx(client, account, payload);
              }
            },
            {
              module: "scripts",
              name: "distributeSeason",
              typeArgs: [],
              args: [
              ],
              type: "cmd",
              invoker: async (client: AptosClient, account: AptosAccount, ) => {
                const payload = Aptospad.Scripts.buildPayload_distributeSeason();
                await sendPayloadTx(client, account, payload);
              }
            },
            {
              module: "scripts",
              name: "initializeAptosPad",
              typeArgs: [],
              args: [
                {
                  name: "preFundAptos",
                  typeTag: AtomicTypeTag.U64,
                },
              ],
              type: "cmd",
              invoker: async (client: AptosClient, account: AptosAccount, preFundAptos_: string) => {
                const preFundAptos = u64(preFundAptos_);
                const payload = Aptospad.Scripts.buildPayload_initializeAptosPad(preFundAptos);
                await sendPayloadTx(client, account, payload);
              }
            },
            {
              module: "scripts",
              name: "launchPadSeason",
              typeArgs: [],
              args: [
              ],
              type: "cmd",
              invoker: async (client: AptosClient, account: AptosAccount, ) => {
                const payload = Aptospad.Scripts.buildPayload_launchPadSeason();
                await sendPayloadTx(client, account, payload);
              }
            },
            {
              module: "scripts",
              name: "paycoinAndRefund",
              typeArgs: [],
              args: [
              ],
              type: "cmd",
              invoker: async (client: AptosClient, account: AptosAccount, ) => {
                const payload = Aptospad.Scripts.buildPayload_paycoinAndRefund();
                await sendPayloadTx(client, account, payload);
              }
            },
            {
              module: "scripts",
              name: "resetSeason",
              typeArgs: [],
              args: [
              ],
              type: "cmd",
              invoker: async (client: AptosClient, account: AptosAccount, ) => {
                const payload = Aptospad.Scripts.buildPayload_resetSeason();
                await sendPayloadTx(client, account, payload);
              }
            },
            {
              module: "scripts",
              name: "setApttSwapConfig",
              typeArgs: [],
              args: [
                {
                  name: "softCap",
                  typeTag: AtomicTypeTag.U64,
                },
                {
                  name: "hardCap",
                  typeTag: AtomicTypeTag.U64,
                },
                {
                  name: "enableRefund",
                  typeTag: AtomicTypeTag.Bool,
                },
                {
                  name: "aptToApttRate",
                  typeTag: AtomicTypeTag.U64,
                },
                {
                  name: "bypassWhitelist",
                  typeTag: AtomicTypeTag.Bool,
                },
              ],
              type: "cmd",
              invoker: async (client: AptosClient, account: AptosAccount, softCap_: string, hardCap_: string, enableRefund_: string, aptToApttRate_: string, bypassWhitelist_: string) => {
                const softCap = u64(softCap_);
                const hardCap = u64(hardCap_);
                const enableRefund = enableRefund_=='true';
                const aptToApttRate = u64(aptToApttRate_);
                const bypassWhitelist = bypassWhitelist_=='true';
                const payload = Aptospad.Scripts.buildPayload_setApttSwapConfig(softCap, hardCap, enableRefund, aptToApttRate, bypassWhitelist);
                await sendPayloadTx(client, account, payload);
              }
            },
            {
              module: "scripts",
              name: "setBypassWhiteList",
              typeArgs: [],
              args: [
                {
                  name: "bypass",
                  typeTag: AtomicTypeTag.Bool,
                },
              ],
              type: "cmd",
              invoker: async (client: AptosClient, account: AptosAccount, bypass_: string) => {
                const bypass = bypass_=='true';
                const payload = Aptospad.Scripts.buildPayload_setBypassWhiteList(bypass);
                await sendPayloadTx(client, account, payload);
              }
            },
            {
              module: "scripts",
              name: "setEmergency",
              typeArgs: [],
              args: [
                {
                  name: "emergency",
                  typeTag: AtomicTypeTag.Bool,
                },
              ],
              type: "cmd",
              invoker: async (client: AptosClient, account: AptosAccount, emergency_: string) => {
                const emergency = emergency_=='true';
                const payload = Aptospad.Scripts.buildPayload_setEmergency(emergency);
                await sendPayloadTx(client, account, payload);
              }
            },
            {
              module: "scripts",
              name: "whiteListSeason",
              typeArgs: [],
              args: [
              ],
              type: "cmd",
              invoker: async (client: AptosClient, account: AptosAccount, ) => {
                const payload = Aptospad.Scripts.buildPayload_whiteListSeason();
                await sendPayloadTx(client, account, payload);
              }
            },
            {
              module: "scripts",
              name: "withdrawAptos",
              typeArgs: [],
              args: [
                {
                  name: "debit",
                  typeTag: AtomicTypeTag.Address,
                },
                {
                  name: "amount",
                  typeTag: AtomicTypeTag.U64,
                },
              ],
              type: "cmd",
              invoker: async (client: AptosClient, account: AptosAccount, debit_: string, amount_: string) => {
                const debit = new HexString(debit_);
                const amount = u64(amount_);
                const payload = Aptospad.Scripts.buildPayload_withdrawAptos(debit, amount);
                await sendPayloadTx(client, account, payload);
              }
            },
            {
              module: "scripts",
              name: "withdrawAptosPad",
              typeArgs: [],
              args: [
                {
                  name: "debit",
                  typeTag: AtomicTypeTag.Address,
                },
                {
                  name: "amount",
                  typeTag: AtomicTypeTag.U64,
                },
              ],
              type: "cmd",
              invoker: async (client: AptosClient, account: AptosAccount, debit_: string, amount_: string) => {
                const debit = new HexString(debit_);
                const amount = u64(amount_);
                const payload = Aptospad.Scripts.buildPayload_withdrawAptosPad(debit, amount);
                await sendPayloadTx(client, account, payload);
              }
            },
          ],
        },
      ],
      shows: [
      ],
    },
  ]
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


export async function sendPayloadTx(
  client: AptosClient,
  account: AptosAccount,
  payload: Types.TransactionPayload,
  max_gas=1000
){
  const txnRequest = await client.generateTransaction(account.address(), payload, {max_gas_amount: `${max_gas}`});
  const signedTxn = await client.signTransaction(account, txnRequest);
  const txnResult = await client.submitTransaction(signedTxn);
  await client.waitForTransaction(txnResult.hash);
  const txDetails = (await client.getTransactionByHash(txnResult.hash)) as Types.UserTransaction;
  console.log(txDetails);
}


