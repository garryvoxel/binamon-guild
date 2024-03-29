/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BMONSeedAndPreSale,
  BMONSeedAndPreSaleInterface,
} from "../BMONSeedAndPreSale";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "address",
        name: "beneficiary_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "DELAY_BEFORE_PRESALE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PRESALE_DURATION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PRESALE_MAX_BUY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PRESALE_MIN_BUY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PRESALE_PRICE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PRESALE_TOKENS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SEED_DURATION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SEED_MAX_BUY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SEED_MIN_BUY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SEED_PRICE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SEED_TOKENS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "benificiary",
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
    inputs: [],
    name: "buyTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "closePreSale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getSalesAtPresale",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getSalesAtSeed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getState",
    outputs: [
      {
        internalType: "enum BMONSeedAndPreSale.State",
        name: "",
        type: "uint8",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "salesAtPresale",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "salesAtSeed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "setStartTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract BMON",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalPresaleBnbCollected",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalPresaleTokensSold",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSeedBnbCollected",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSeedTokensSold",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516111df3803806111df83398101604081905261002f916100bb565b600080546001600160a01b0319163390811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3600380546001600160a01b039384166001600160a01b031991821617909155600480549290931691161790556100ed565b80516001600160a01b03811681146100b657600080fd5b919050565b600080604083850312156100cd578182fd5b6100d68361009f565b91506100e46020840161009f565b90509250929050565b6110e3806100fc6000396000f3fe6080604052600436106101c55760003560e01c806378e97925116100f7578063c1cd1d5911610095578063fb89ac8811610064578063fb89ac88146104c6578063fc0c546a146104e2578063fe64273014610251578063fe786c73146104c657600080fd5b8063c1cd1d5914610489578063d073c1691461043d578063d0febe4c1461049e578063f2fde38b146104a657600080fd5b80638da5cb5b116100d15780638da5cb5b1461041f578063945e40131461043d578063b26bc2ab14610454578063b322dca91461047357600080fd5b806378e97925146103b957806379109e79146103cf57806380bc3f57146103e957600080fd5b80634549fb75116101645780636ddb627c1161013e5780636ddb627c14610358578063715018a6146103775780637365e2d71461038c57806376cac44c146103a257600080fd5b80634549fb75146102f2578063584ebbbb1461030857806362dc6e211461033e57600080fd5b80631865c57d116101a05780631865c57d1461026d57806338ea929f1461028f5780633e0a322d146102a5578063423a0024146102c557600080fd5b80623b50da146101d95780630405c35714610219578063072e387a1461025157600080fd5b366101d4576101d2610502565b005b600080fd5b3480156101e557600080fd5b506102066101f4366004610f65565b60066020526000908152604090205481565b6040519081526020015b60405180910390f35b34801561022557600080fd5b50600454610239906001600160a01b031681565b6040516001600160a01b039091168152602001610210565b34801561025d57600080fd5b50610206674563918244f4000081565b34801561027957600080fd5b50610282610a76565b6040516102109190610fe3565b34801561029b57600080fd5b50610206600b5481565b3480156102b157600080fd5b506101d26102c0366004610fb3565b610bfd565b3480156102d157600080fd5b506102066102e0366004610f65565b60076020526000908152604090205481565b3480156102fe57600080fd5b5061020660085481565b34801561031457600080fd5b50610206610323366004610f65565b6001600160a01b031660009081526007602052604090205490565b34801561034a57600080fd5b506102066522faaaa3580081565b34801561036457600080fd5b506102066a35c4490f820855e100000081565b34801561038357600080fd5b506101d2610c2c565b34801561039857600080fd5b5061020660095481565b3480156103ae57600080fd5b506102066201275081565b3480156103c557600080fd5b5061020660055481565b3480156103db57600080fd5b506102066519bd1b72780081565b3480156103f557600080fd5b50610206610404366004610f65565b6001600160a01b031660009081526006602052604090205490565b34801561042b57600080fd5b506000546001600160a01b0316610239565b34801561044957600080fd5b506102066201518081565b34801561046057600080fd5b506102066a2bd72fc1d06d325500000081565b34801561047f57600080fd5b50610206600a5481565b34801561049557600080fd5b506101d2610ca0565b6101d2610502565b3480156104b257600080fd5b506101d26104c1366004610f65565b610e7b565b3480156104d257600080fd5b50610206670de0b6b3a764000081565b3480156104ee57600080fd5b50600354610239906001600160a01b031681565b600061050c610a76565b9050600181600481111561053057634e487b7160e01b600052602160045260246000fd5b148061055b5750600381600481111561055957634e487b7160e01b600052602160045260246000fd5b145b6105a45760405162461bcd60e51b815260206004820152601560248201527450726573616c65206973206e6f742061637469766560581b60448201526064015b60405180910390fd5b600060018260048111156105c857634e487b7160e01b600052602160045260246000fd5b14156107d957670de0b6b3a764000034101580156105ee5750674563918244f400003411155b61063a5760405162461bcd60e51b815260206004820152601c60248201527f496e636f7272656374207472616e73616374696f6e20616d6f756e7400000000604482015260640161059b565b61064a6519bd1b72780034611058565b61065c90670de0b6b3a7640000611078565b905080600860008282546106709190611040565b9250508190555034600a60008282546106899190611040565b909155505033600090815260066020526040812080543492906106ad908490611040565b909155505033600090815260066020526040902054674563918244f4000010156107195760405162461bcd60e51b815260206004820152601e60248201527f427579206c696d697420657863656564656420666f72206163636f756e740000604482015260640161059b565b60035460405163a9059cbb60e01b8152336004820152602481018390526001600160a01b039091169063a9059cbb90604401602060405180830381600087803b15801561076557600080fd5b505af1158015610779573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079d9190610f93565b506004546040516001600160a01b03909116903480156108fc02916000818181858888f193505050501580156107d7573d6000803e3d6000fd5b505b60038260048111156107fb57634e487b7160e01b600052602160045260246000fd5b1415610a0c57670de0b6b3a764000034101580156108215750674563918244f400003411155b61086d5760405162461bcd60e51b815260206004820152601c60248201527f496e636f7272656374207472616e73616374696f6e20616d6f756e7400000000604482015260640161059b565b61087d6522faaaa3580034611058565b61088f90670de0b6b3a7640000611078565b905080600960008282546108a39190611040565b9250508190555034600b60008282546108bc9190611040565b909155505033600090815260076020526040812080543492906108e0908490611040565b909155505033600090815260076020526040902054674563918244f40000101561094c5760405162461bcd60e51b815260206004820152601e60248201527f427579206c696d697420657863656564656420666f72206163636f756e740000604482015260640161059b565b60035460405163a9059cbb60e01b8152336004820152602481018390526001600160a01b039091169063a9059cbb90604401602060405180830381600087803b15801561099857600080fd5b505af11580156109ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d09190610f93565b506004546040516001600160a01b03909116903480156108fc02916000818181858888f19350505050158015610a0a573d6000803e3d6000fd5b505b6a2bd72fc1d06d325500000060085411158015610a3657506a35c4490f820855e100000060095411155b610a725760405162461bcd60e51b815260206004820152600d60248201526c4f7574206f6620746f6b656e7360981b604482015260640161059b565b5050565b6000600554421015610a885750600090565b6005544210158015610aa9575062015180600554610aa69190611040565b42105b15610ae357610ac46a2bd72fc1d06d32550000006063611078565b600854610ad2906064611078565b10610add5750600290565b50600190565b62015180600554610af49190611040565b4210158015610b2057506201275062015180600554610b139190611040565b610b1d9190611040565b42105b15610b2b5750600290565b6201275062015180600554610b409190611040565b610b4a9190611040565b4210158015610b845750620151806201275062015180600554610b6d9190611040565b610b779190611040565b610b819190611040565b42105b15610bbe57610b9f6a35c4490f820855e10000006063611078565b600954610bad906064611078565b10610bb85750600490565b50600390565b620151806201275062015180600554610bd79190611040565b610be19190611040565b610beb9190611040565b4210610bf75750600490565b50600490565b6000546001600160a01b03163314610c275760405162461bcd60e51b815260040161059b9061100b565b600555565b6000546001600160a01b03163314610c565760405162461bcd60e51b815260040161059b9061100b565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b03163314610cca5760405162461bcd60e51b815260040161059b9061100b565b6000610cd4610a76565b90506004816004811115610cf857634e487b7160e01b600052602160045260246000fd5b14610d455760405162461bcd60e51b815260206004820152601b60248201527f50726573616c65206973206e6f74207965742066696e69736865640000000000604482015260640161059b565b6003546040516370a0823160e01b81523060048201526001600160a01b03909116906342966c689082906370a082319060240160206040518083038186803b158015610d9057600080fd5b505afa158015610da4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dc89190610fcb565b6040518263ffffffff1660e01b8152600401610de691815260200190565b602060405180830381600087803b158015610e0057600080fd5b505af1158015610e14573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e389190610f93565b504715610e78576004546040516001600160a01b03909116904780156108fc02916000818181858888f19350505050158015610a72573d6000803e3d6000fd5b50565b6000546001600160a01b03163314610ea55760405162461bcd60e51b815260040161059b9061100b565b6001600160a01b038116610f0a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161059b565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b600060208284031215610f76578081fd5b81356001600160a01b0381168114610f8c578182fd5b9392505050565b600060208284031215610fa4578081fd5b81518015158114610f8c578182fd5b600060208284031215610fc4578081fd5b5035919050565b600060208284031215610fdc578081fd5b5051919050565b602081016005831061100557634e487b7160e01b600052602160045260246000fd5b91905290565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6000821982111561105357611053611097565b500190565b60008261107357634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161561109257611092611097565b500290565b634e487b7160e01b600052601160045260246000fdfea26469706673582212203ed4314db136194a065c011b05cfad0aba4816cf1e7d4bb3a59a9dba69b71d0e64736f6c63430008040033";

type BMONSeedAndPreSaleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BMONSeedAndPreSaleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BMONSeedAndPreSale__factory extends ContractFactory {
  constructor(...args: BMONSeedAndPreSaleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "BMONSeedAndPreSale";
  }

  deploy(
    token_: string,
    beneficiary_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BMONSeedAndPreSale> {
    return super.deploy(
      token_,
      beneficiary_,
      overrides || {}
    ) as Promise<BMONSeedAndPreSale>;
  }
  getDeployTransaction(
    token_: string,
    beneficiary_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(token_, beneficiary_, overrides || {});
  }
  attach(address: string): BMONSeedAndPreSale {
    return super.attach(address) as BMONSeedAndPreSale;
  }
  connect(signer: Signer): BMONSeedAndPreSale__factory {
    return super.connect(signer) as BMONSeedAndPreSale__factory;
  }
  static readonly contractName: "BMONSeedAndPreSale";
  public readonly contractName: "BMONSeedAndPreSale";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BMONSeedAndPreSaleInterface {
    return new utils.Interface(_abi) as BMONSeedAndPreSaleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BMONSeedAndPreSale {
    return new Contract(address, _abi, signerOrProvider) as BMONSeedAndPreSale;
  }
}
