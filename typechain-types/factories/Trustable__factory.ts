/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Trustable, TrustableInterface } from "../Trustable";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "addTrusted",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "removeTrusted",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b0319163317815561028d90819061003390396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80638da5cb5b14610051578063d4d0d6e614610070578063d55e62a014610085578063f2fde38b14610098575b600080fd5b600054604080516001600160a01b039092168252519081900360200190f35b61008361007e3660046101f2565b6100ab565b005b6100836100933660046101f2565b610105565b6100836100a63660046101f2565b610150565b6000546001600160a01b031633146100de5760405162461bcd60e51b81526004016100d590610220565b60405180910390fd5b6001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b6000546001600160a01b0316331461012f5760405162461bcd60e51b81526004016100d590610220565b6001600160a01b03166000908152600160205260409020805460ff19169055565b6000546001600160a01b0316331461017a5760405162461bcd60e51b81526004016100d590610220565b6001600160a01b0381166101d05760405162461bcd60e51b815260206004820152601d60248201527f4e6577206f776e657220697320746865207a65726f206164647265737300000060448201526064016100d5565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b600060208284031215610203578081fd5b81356001600160a01b0381168114610219578182fd5b9392505050565b60208082526017908201527f43616c6c6572206973206e6f7420746865206f776e657200000000000000000060408201526060019056fea26469706673582212208d26593128cd676c21285d0dfa46c06889d8b168335bb6831b95f709e814a46f64736f6c63430008040033";

type TrustableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TrustableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Trustable__factory extends ContractFactory {
  constructor(...args: TrustableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Trustable";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Trustable> {
    return super.deploy(overrides || {}) as Promise<Trustable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Trustable {
    return super.attach(address) as Trustable;
  }
  connect(signer: Signer): Trustable__factory {
    return super.connect(signer) as Trustable__factory;
  }
  static readonly contractName: "Trustable";
  public readonly contractName: "Trustable";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TrustableInterface {
    return new utils.Interface(_abi) as TrustableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Trustable {
    return new Contract(address, _abi, signerOrProvider) as Trustable;
  }
}
