/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CollectionTypeMover,
  CollectionTypeMoverInterface,
} from "../CollectionTypeMover";

const _abi = [
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
    inputs: [
      {
        internalType: "address",
        name: "legacyAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "end",
        type: "uint256",
      },
    ],
    name: "copyLegacyTypes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getDelegates",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
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
    name: "isTrusted",
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
  "0x608060405234801561001057600080fd5b50600080546001600160a01b03191633179055610ac3806100326000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063c838ccb61161005b578063c838ccb6146100f3578063d4d0d6e614610108578063d55e62a01461011b578063f2fde38b1461012e57600080fd5b806342744978146100825780638da5cb5b1461009757806396d64879146100b7575b600080fd5b610095610090366004610712565b610141565b005b6000546040516001600160a01b0390911681526020015b60405180910390f35b6100e36100c53660046106f1565b6001600160a01b031660009081526001602052604090205460ff1690565b60405190151581526020016100ae565b6100fb610472565b6040516100ae91906108ad565b6100956101163660046106f1565b6104d4565b6100956101293660046106f1565b610562565b61009561013c3660046106f1565b6105ad565b3360009081526001602081905260409091205460ff161515148061016f57506000546001600160a01b031633145b6101b85760405162461bcd60e51b815260206004820152601560248201527410d85b1b195c881a5cc81b9bdd081d1c9d5cdd1959605a1b60448201526064015b60405180910390fd5b600084905060008490506000826001600160a01b031663f15df2e56040518163ffffffff1660e01b815260040160206040518083038186803b1580156101fd57600080fd5b505afa158015610211573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610235919061082f565b9050600061024386866109ff565b61024e9060016109e7565b67ffffffffffffffff81111561027457634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561029d578160200160208202803683370190505b509050855b8581111580156102b25750828111155b156104075760006001600160a01b038616635b7852c96102d36001856109ff565b6040518263ffffffff1660e01b81526004016102f191815260200190565b60006040518083038186803b15801561030957600080fd5b505afa15801561031d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103459190810190610753565b9050846001600160a01b031663bc8def328383602001518460400151856060015186608001516040518663ffffffff1660e01b815260040161038b95949392919061095f565b600060405180830381600087803b1580156103a557600080fd5b505af11580156103b9573d6000803e3d6000fd5b50505050818389846103cb91906109ff565b815181106103e957634e487b7160e01b600052603260045260246000fd5b602090810291909101015250806103ff81610a46565b9150506102a2565b506040516367c7d6ad60e01b81526001600160a01b038416906367c7d6ad9061043690849081906004016108fa565b600060405180830381600087803b15801561045057600080fd5b505af1158015610464573d6000803e3d6000fd5b505050505050505050505050565b606060028054806020026020016040519081016040528092919081815260200182805480156104ca57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116104ac575b5050505050905090565b6000546001600160a01b031633146104fe5760405162461bcd60e51b81526004016101af90610928565b6001600160a01b031660008181526001602081905260408220805460ff1916821790556002805491820181559091527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0180546001600160a01b0319169091179055565b6000546001600160a01b0316331461058c5760405162461bcd60e51b81526004016101af90610928565b6001600160a01b03166000908152600160205260409020805460ff19169055565b6000546001600160a01b031633146105d75760405162461bcd60e51b81526004016101af90610928565b6001600160a01b03811661062d5760405162461bcd60e51b815260206004820152601d60248201527f4e6577206f776e657220697320746865207a65726f206164647265737300000060448201526064016101af565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b80356001600160a01b038116811461066657600080fd5b919050565b600082601f83011261067b578081fd5b815167ffffffffffffffff8082111561069657610696610a77565b604051601f8301601f19908116603f011681019082821181831017156106be576106be610a77565b816040528381528660208588010111156106d6578485fd5b6106e7846020830160208901610a16565b9695505050505050565b600060208284031215610702578081fd5b61070b8261064f565b9392505050565b60008060008060808587031215610727578283fd5b6107308561064f565b935061073e6020860161064f565b93969395505050506040820135916060013590565b600060208284031215610764578081fd5b815167ffffffffffffffff8082111561077b578283fd5b9083019060a0828603121561078e578283fd5b6107966109be565b825181526020830151828111156107ab578485fd5b6107b78782860161066b565b6020830152506040830151828111156107ce578485fd5b6107da8782860161066b565b6040830152506060830151828111156107f1578485fd5b6107fd8782860161066b565b606083015250608083015182811115610814578485fd5b6108208782860161066b565b60808301525095945050505050565b600060208284031215610840578081fd5b5051919050565b6000815180845260208085019450808401835b838110156108765781518752958201959082019060010161085a565b509495945050505050565b60008151808452610899816020860160208601610a16565b601f01601f19169290920160200192915050565b6020808252825182820181905260009190848201906040850190845b818110156108ee5783516001600160a01b0316835292840192918401916001016108c9565b50909695505050505050565b60408152600061090d6040830185610847565b828103602084015261091f8185610847565b95945050505050565b60208082526017908201527f43616c6c6572206973206e6f7420746865206f776e6572000000000000000000604082015260600190565b85815260a06020820152600061097860a0830187610881565b828103604084015261098a8187610881565b9050828103606084015261099e8186610881565b905082810360808401526109b28185610881565b98975050505050505050565b60405160a0810167ffffffffffffffff811182821017156109e1576109e1610a77565b60405290565b600082198211156109fa576109fa610a61565b500190565b600082821015610a1157610a11610a61565b500390565b60005b83811015610a31578181015183820152602001610a19565b83811115610a40576000848401525b50505050565b6000600019821415610a5a57610a5a610a61565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220eb601ee2d08267fe6dda6b294b490fb101ee6c2d84d23349af4418bdc89d8a4b64736f6c63430008040033";

type CollectionTypeMoverConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CollectionTypeMoverConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CollectionTypeMover__factory extends ContractFactory {
  constructor(...args: CollectionTypeMoverConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "CollectionTypeMover";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CollectionTypeMover> {
    return super.deploy(overrides || {}) as Promise<CollectionTypeMover>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CollectionTypeMover {
    return super.attach(address) as CollectionTypeMover;
  }
  connect(signer: Signer): CollectionTypeMover__factory {
    return super.connect(signer) as CollectionTypeMover__factory;
  }
  static readonly contractName: "CollectionTypeMover";
  public readonly contractName: "CollectionTypeMover";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CollectionTypeMoverInterface {
    return new utils.Interface(_abi) as CollectionTypeMoverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CollectionTypeMover {
    return new Contract(address, _abi, signerOrProvider) as CollectionTypeMover;
  }
}
