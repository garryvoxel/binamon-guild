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
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type UserTokenBalanceStruct = {
  guildTokenAmount: BigNumberish;
  bmonAmount: BigNumberish;
  bmonZ2Amount: BigNumberish;
  bnbAmount: BigNumberish;
};

export type UserTokenBalanceStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  guildTokenAmount: BigNumber;
  bmonAmount: BigNumber;
  bmonZ2Amount: BigNumber;
  bnbAmount: BigNumber;
};

export interface IGuildPayDistributionInterface extends utils.Interface {
  contractName: "IGuildPayDistribution";
  functions: {
    "balanceOfAll(address)": FunctionFragment;
    "balanceOfBMON(address)": FunctionFragment;
    "balanceOfBNB(address)": FunctionFragment;
    "balanceOfGT(address)": FunctionFragment;
    "balanceOfZ2(address)": FunctionFragment;
    "distributeForBreedFee(address,address,address,address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "balanceOfAll",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfBMON",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfBNB",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "balanceOfGT", values: [string]): string;
  encodeFunctionData(functionFragment: "balanceOfZ2", values: [string]): string;
  encodeFunctionData(
    functionFragment: "distributeForBreedFee",
    values: [string, string, string, string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "balanceOfAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfBMON",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfBNB",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfGT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfZ2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributeForBreedFee",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IGuildPayDistribution extends BaseContract {
  contractName: "IGuildPayDistribution";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IGuildPayDistributionInterface;

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
    balanceOfAll(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[UserTokenBalanceStructOutput]>;

    balanceOfBMON(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    balanceOfBNB(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    balanceOfGT(_user: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    balanceOfZ2(_user: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    distributeForBreedFee(
      _centralPayment: string,
      _guildOwner: string,
      _parentA: string,
      _parentB: string,
      _referral: string,
      breedFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  balanceOfAll(
    _user: string,
    overrides?: CallOverrides
  ): Promise<UserTokenBalanceStructOutput>;

  balanceOfBMON(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

  balanceOfBNB(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

  balanceOfGT(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

  balanceOfZ2(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

  distributeForBreedFee(
    _centralPayment: string,
    _guildOwner: string,
    _parentA: string,
    _parentB: string,
    _referral: string,
    breedFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    balanceOfAll(
      _user: string,
      overrides?: CallOverrides
    ): Promise<UserTokenBalanceStructOutput>;

    balanceOfBMON(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    balanceOfBNB(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    balanceOfGT(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    balanceOfZ2(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    distributeForBreedFee(
      _centralPayment: string,
      _guildOwner: string,
      _parentA: string,
      _parentB: string,
      _referral: string,
      breedFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    balanceOfAll(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    balanceOfBMON(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    balanceOfBNB(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    balanceOfGT(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    balanceOfZ2(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    distributeForBreedFee(
      _centralPayment: string,
      _guildOwner: string,
      _parentA: string,
      _parentB: string,
      _referral: string,
      breedFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOfAll(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOfBMON(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOfBNB(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOfGT(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOfZ2(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    distributeForBreedFee(
      _centralPayment: string,
      _guildOwner: string,
      _parentA: string,
      _parentB: string,
      _referral: string,
      breedFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}