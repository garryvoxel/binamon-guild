/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface GuildFactoryInterface extends utils.Interface {
  contractName: "GuildFactory";
  functions: {
    "BLAND_ADDRESS()": FunctionFragment;
    "BMONC_ADDRESS()": FunctionFragment;
    "BMONC_Z1_ADDRESS()": FunctionFragment;
    "BMONEC_ADDRESS()": FunctionFragment;
    "BMON_ADDRESS()": FunctionFragment;
    "BMON_Z2_ADDRES()": FunctionFragment;
    "BNRG_ADDRES()": FunctionFragment;
    "_centralPayment()": FunctionFragment;
    "_createGenesisMonstersNum()": FunctionFragment;
    "_createLockingBmonMinAmount()": FunctionFragment;
    "_createPayBmonAmount()": FunctionFragment;
    "addTrusted(address)": FunctionFragment;
    "createGuild(uint256,uint256,string,string,string,uint256[])": FunctionFragment;
    "getGuildAddress(uint256)": FunctionFragment;
    "isAlreadySubscribedGuild(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "removeTrusted(address)": FunctionFragment;
    "setCentralPaymentAddress(address)": FunctionFragment;
    "setCreateGenesisMonstersNum(uint256)": FunctionFragment;
    "setCreateLockingBmonMinAmount(uint256)": FunctionFragment;
    "setCreatePayBmonAmount(uint256)": FunctionFragment;
    "setTreasuryWallet(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "BLAND_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "BMONC_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "BMONC_Z1_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "BMONEC_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "BMON_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "BMON_Z2_ADDRES",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "BNRG_ADDRES",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_centralPayment",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_createGenesisMonstersNum",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_createLockingBmonMinAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_createPayBmonAmount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "addTrusted", values: [string]): string;
  encodeFunctionData(
    functionFragment: "createGuild",
    values: [BigNumberish, BigNumberish, string, string, string, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getGuildAddress",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isAlreadySubscribedGuild",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeTrusted",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setCentralPaymentAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setCreateGenesisMonstersNum",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setCreateLockingBmonMinAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setCreatePayBmonAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTreasuryWallet",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "BLAND_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BMONC_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BMONC_Z1_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BMONEC_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BMON_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BMON_Z2_ADDRES",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BNRG_ADDRES",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_centralPayment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_createGenesisMonstersNum",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_createLockingBmonMinAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_createPayBmonAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addTrusted", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createGuild",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGuildAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAlreadySubscribedGuild",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeTrusted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCentralPaymentAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCreateGenesisMonstersNum",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCreateLockingBmonMinAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCreatePayBmonAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTreasuryWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "GuildCreated(bool,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GuildCreated"): EventFragment;
}

export type GuildCreatedEvent = TypedEvent<
  [boolean, string, BigNumber],
  { sucess: boolean; owner: string; guildId: BigNumber }
>;

export type GuildCreatedEventFilter = TypedEventFilter<GuildCreatedEvent>;

export interface GuildFactory extends BaseContract {
  contractName: "GuildFactory";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GuildFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    BLAND_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    BMONC_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    BMONC_Z1_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    BMONEC_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    BMON_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    BMON_Z2_ADDRES(overrides?: CallOverrides): Promise<[string]>;

    BNRG_ADDRES(overrides?: CallOverrides): Promise<[string]>;

    _centralPayment(overrides?: CallOverrides): Promise<[string]>;

    _createGenesisMonstersNum(overrides?: CallOverrides): Promise<[BigNumber]>;

    _createLockingBmonMinAmount(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    _createPayBmonAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    addTrusted(
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createGuild(
      bmonLockingAmount: BigNumberish,
      landElement: BigNumberish,
      name: string,
      symbol: string,
      logo: string,
      genesisMonsters: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getGuildAddress(
      guildId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    isAlreadySubscribedGuild(
      user: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeTrusted(
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setCentralPaymentAddress(
      cpAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setCreateGenesisMonstersNum(
      genesisMonstersNum: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setCreateLockingBmonMinAmount(
      lockingBmonMinAMount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setCreatePayBmonAmount(
      payBmonAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTreasuryWallet(
      tWallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  BLAND_ADDRESS(overrides?: CallOverrides): Promise<string>;

  BMONC_ADDRESS(overrides?: CallOverrides): Promise<string>;

  BMONC_Z1_ADDRESS(overrides?: CallOverrides): Promise<string>;

  BMONEC_ADDRESS(overrides?: CallOverrides): Promise<string>;

  BMON_ADDRESS(overrides?: CallOverrides): Promise<string>;

  BMON_Z2_ADDRES(overrides?: CallOverrides): Promise<string>;

  BNRG_ADDRES(overrides?: CallOverrides): Promise<string>;

  _centralPayment(overrides?: CallOverrides): Promise<string>;

  _createGenesisMonstersNum(overrides?: CallOverrides): Promise<BigNumber>;

  _createLockingBmonMinAmount(overrides?: CallOverrides): Promise<BigNumber>;

  _createPayBmonAmount(overrides?: CallOverrides): Promise<BigNumber>;

  addTrusted(
    user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createGuild(
    bmonLockingAmount: BigNumberish,
    landElement: BigNumberish,
    name: string,
    symbol: string,
    logo: string,
    genesisMonsters: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getGuildAddress(
    guildId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  isAlreadySubscribedGuild(
    user: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  removeTrusted(
    user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setCentralPaymentAddress(
    cpAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setCreateGenesisMonstersNum(
    genesisMonstersNum: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setCreateLockingBmonMinAmount(
    lockingBmonMinAMount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setCreatePayBmonAmount(
    payBmonAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTreasuryWallet(
    tWallet: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    BLAND_ADDRESS(overrides?: CallOverrides): Promise<string>;

    BMONC_ADDRESS(overrides?: CallOverrides): Promise<string>;

    BMONC_Z1_ADDRESS(overrides?: CallOverrides): Promise<string>;

    BMONEC_ADDRESS(overrides?: CallOverrides): Promise<string>;

    BMON_ADDRESS(overrides?: CallOverrides): Promise<string>;

    BMON_Z2_ADDRES(overrides?: CallOverrides): Promise<string>;

    BNRG_ADDRES(overrides?: CallOverrides): Promise<string>;

    _centralPayment(overrides?: CallOverrides): Promise<string>;

    _createGenesisMonstersNum(overrides?: CallOverrides): Promise<BigNumber>;

    _createLockingBmonMinAmount(overrides?: CallOverrides): Promise<BigNumber>;

    _createPayBmonAmount(overrides?: CallOverrides): Promise<BigNumber>;

    addTrusted(user: string, overrides?: CallOverrides): Promise<void>;

    createGuild(
      bmonLockingAmount: BigNumberish,
      landElement: BigNumberish,
      name: string,
      symbol: string,
      logo: string,
      genesisMonsters: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    getGuildAddress(
      guildId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    isAlreadySubscribedGuild(
      user: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    removeTrusted(user: string, overrides?: CallOverrides): Promise<void>;

    setCentralPaymentAddress(
      cpAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setCreateGenesisMonstersNum(
      genesisMonstersNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setCreateLockingBmonMinAmount(
      lockingBmonMinAMount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setCreatePayBmonAmount(
      payBmonAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTreasuryWallet(
      tWallet: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "GuildCreated(bool,address,uint256)"(
      sucess?: null,
      owner?: string | null,
      guildId?: null
    ): GuildCreatedEventFilter;
    GuildCreated(
      sucess?: null,
      owner?: string | null,
      guildId?: null
    ): GuildCreatedEventFilter;
  };

  estimateGas: {
    BLAND_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    BMONC_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    BMONC_Z1_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    BMONEC_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    BMON_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    BMON_Z2_ADDRES(overrides?: CallOverrides): Promise<BigNumber>;

    BNRG_ADDRES(overrides?: CallOverrides): Promise<BigNumber>;

    _centralPayment(overrides?: CallOverrides): Promise<BigNumber>;

    _createGenesisMonstersNum(overrides?: CallOverrides): Promise<BigNumber>;

    _createLockingBmonMinAmount(overrides?: CallOverrides): Promise<BigNumber>;

    _createPayBmonAmount(overrides?: CallOverrides): Promise<BigNumber>;

    addTrusted(
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createGuild(
      bmonLockingAmount: BigNumberish,
      landElement: BigNumberish,
      name: string,
      symbol: string,
      logo: string,
      genesisMonsters: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getGuildAddress(
      guildId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isAlreadySubscribedGuild(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeTrusted(
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setCentralPaymentAddress(
      cpAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setCreateGenesisMonstersNum(
      genesisMonstersNum: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setCreateLockingBmonMinAmount(
      lockingBmonMinAMount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setCreatePayBmonAmount(
      payBmonAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTreasuryWallet(
      tWallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BLAND_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    BMONC_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    BMONC_Z1_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    BMONEC_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    BMON_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    BMON_Z2_ADDRES(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    BNRG_ADDRES(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _centralPayment(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _createGenesisMonstersNum(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _createLockingBmonMinAmount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _createPayBmonAmount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addTrusted(
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createGuild(
      bmonLockingAmount: BigNumberish,
      landElement: BigNumberish,
      name: string,
      symbol: string,
      logo: string,
      genesisMonsters: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getGuildAddress(
      guildId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isAlreadySubscribedGuild(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeTrusted(
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setCentralPaymentAddress(
      cpAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setCreateGenesisMonstersNum(
      genesisMonstersNum: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setCreateLockingBmonMinAmount(
      lockingBmonMinAMount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setCreatePayBmonAmount(
      payBmonAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTreasuryWallet(
      tWallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}