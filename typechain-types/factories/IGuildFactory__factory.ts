/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IGuildFactory, IGuildFactoryInterface } from "../IGuildFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "sucess",
        type: "bool",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "guildId",
        type: "uint256",
      },
    ],
    name: "GuildCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "guildId",
        type: "uint256",
      },
    ],
    name: "getGuildAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "isAlreadySubscribedGuild",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IGuildFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IGuildFactoryInterface {
    return new utils.Interface(_abi) as IGuildFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IGuildFactory {
    return new Contract(address, _abi, signerOrProvider) as IGuildFactory;
  }
}