/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BMON, BMONInterface } from "../BMON";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "bmonc",
        type: "address",
      },
    ],
    name: "allowBuyingBoosters",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "delegate",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "delegate",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "numTokens",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenOwner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "delegate",
        type: "address",
      },
    ],
    name: "boosterBuyingAllowance",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "boosterBuyingAllowance",
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
    inputs: [
      {
        internalType: "uint256",
        name: "numTokens",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
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
    inputs: [],
    name: "seedAndPresale",
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
        internalType: "bool",
        name: "enable",
        type: "bool",
      },
    ],
    name: "setBotProtection",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "setRestrictionAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "seedAndPresale_",
        type: "address",
      },
    ],
    name: "setSeedAndPresale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "state",
    outputs: [
      {
        internalType: "enum BMON.State",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "numTokens",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "numTokens",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "whitelistAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526af8277896582678ac0000006003556af8277896582678ac00000060095534801561002e57600080fd5b50600080546001600160a01b0319163390811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3600c805460ff1916905560035433600081815260056020908152604080832085905551938452919290917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3611419806100d26000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c806383af0403116100b8578063c19d93fb1161007c578063c19d93fb14610301578063d2ae85301461031b578063dd62ed3e1461032e578063ddef907a14610367578063f2f827121461037a578063f2fde38b1461038d57600080fd5b806383af0403146102525780638b35bf50146102925780638da5cb5b146102bd57806395d89b41146102ce578063a9059cbb146102ee57600080fd5b806342966c681161010a57806342966c68146101d357806345e8dbe2146101e657806363e0c2f8146101fb5780636b4d9b781461020e57806370a0823114610221578063715018a61461024a57600080fd5b806306fdde0314610147578063095ea7b31461017c57806318160ddd1461019f57806323b872dd146101b1578063313ce567146101c4575b600080fd5b6040805180820190915260078152662134b730b6b7b760c91b60208201525b6040516101739190611258565b60405180910390f35b61018f61018a3660046111cf565b6103a0565b6040519015158152602001610173565b6003545b604051908152602001610173565b61018f6101bf366004611194565b61040d565b60405160128152602001610173565b61018f6101e1366004611218565b6108dd565b6101f96101f4366004611148565b6109d7565b005b6101f9610209366004611148565b610a23565b61018f61021c366004611162565b610a71565b6101a361022f366004611148565b6001600160a01b031660009081526005602052604090205490565b6101f9610aa8565b61018f610260366004611148565b33600090815260076020526040902080546001600160a01b0319166001600160a01b0392909216919091179055600190565b6004546102a5906001600160a01b031681565b6040516001600160a01b039091168152602001610173565b6000546001600160a01b03166102a5565b6040805180820190915260048152632126a7a760e11b6020820152610166565b61018f6102fc3660046111cf565b610b1c565b600c5461030e9060ff1681565b6040516101739190611230565b61018f610329366004611148565b610f2a565b6101a361033c366004611162565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205490565b6101f96103753660046111f8565b610f36565b6101f9610388366004611218565b610fba565b6101f961039b366004611148565b610fe9565b3360008181526006602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906103fb9086815260200190565b60405180910390a35060015b92915050565b600083838383600c5460ff16600281111561043857634e487b7160e01b600052602160045260246000fd5b14156104cf576000546001600160a01b038481169116148061046757506004546001600160a01b038481169116145b8061048a57506001600160a01b0383166000908152600a602052604090205460ff165b6104cf5760405162461bcd60e51b8152602060048201526011602482015270151bdad95b9cc8185c99481b1bd8dad959607a1b60448201526064015b60405180910390fd5b6001600c5460ff1660028111156104f657634e487b7160e01b600052602160045260246000fd5b14156107095760095481111561051e5760405162461bcd60e51b81526004016104c690611328565b6001600160a01b0383166000908152600a602052604090205460ff1615801561056057506001600160a01b0382166000908152600a602052604090205460ff16155b15610605576001600160a01b0383166000908152600b6020526040902054429061058b90603c6110d3565b111580156105bd57506001600160a01b0382166000908152600b602052604090205442906105ba90603c6110d3565b11155b6105d95760405162461bcd60e51b81526004016104c6906112ab565b6001600160a01b038084166000908152600b602052604080822042908190559285168252902055610709565b6001600160a01b0382166000908152600a602052604090205460ff16610689576001600160a01b0382166000908152600b6020526040902054429061064b90603c6110d3565b11156106695760405162461bcd60e51b81526004016104c6906112ab565b6001600160a01b0382166000908152600b60205260409020429055610709565b6001600160a01b0383166000908152600a602052604090205460ff16610709576001600160a01b0383166000908152600b602052604090205442906106cf90603c6110d3565b11156106ed5760405162461bcd60e51b81526004016104c6906112ab565b6001600160a01b0383166000908152600b602052604090204290555b6001600160a01b03871660009081526005602052604090205485111561072e57600080fd5b6001600160a01b038781166000908152600760205260409020541633148061077957506001600160a01b03871660009081526006602090815260408083203384529091529020548511155b61078257600080fd5b6001600160a01b0387166000908152600560205260409020546107a59086611107565b6001600160a01b03808916600090815260056020908152604080832094909455600790529190912054163314610890576001600160a01b03871660009081526006602090815260408083203384529091529020546108039086611107565b6001600160a01b03808916600090815260066020908152604080832033845282528083209490945591891681526005909152205461084190866110d3565b6001600160a01b0380881660008181526005602052604090819020939093559151908916906000805160206113c4833981519152906108839089815260200190565b60405180910390a36108d0565b60035461089d9086611107565b6003556040518581526000906001600160a01b038916906000805160206113c48339815191529060200160405180910390a35b5060019695505050505050565b6000336108f26000546001600160a01b031690565b6001600160a01b0316148061091157506004546001600160a01b031633145b6109525760405162461bcd60e51b815260206004820152601260248201527143616e6e6f74206275726e20746f6b656e7360701b60448201526064016104c6565b3360009081526005602052604090205482111561096e57600080fd5b336000908152600560205260409020546109889083611107565b336000908152600560205260409020556003546109a59083611107565b60035560405182815260009033906000805160206113c48339815191529060200160405180910390a35060015b919050565b6000546001600160a01b03163314610a015760405162461bcd60e51b81526004016104c6906112f3565b600480546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b03163314610a4d5760405162461bcd60e51b81526004016104c6906112f3565b6001600160a01b03166000908152600a60205260409020805460ff19166001179055565b6001600160a01b03828116600090815260076020526040812054909183811691161415610aa057506001610407565b506000610407565b6000546001600160a01b03163314610ad25760405162461bcd60e51b81526004016104c6906112f3565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b600033838383600c5460ff166002811115610b4757634e487b7160e01b600052602160045260246000fd5b1415610bd9576000546001600160a01b0384811691161480610b7657506004546001600160a01b038481169116145b80610b9957506001600160a01b0383166000908152600a602052604090205460ff165b610bd95760405162461bcd60e51b8152602060048201526011602482015270151bdad95b9cc8185c99481b1bd8dad959607a1b60448201526064016104c6565b6001600c5460ff166002811115610c0057634e487b7160e01b600052602160045260246000fd5b1415610e1357600954811115610c285760405162461bcd60e51b81526004016104c690611328565b6001600160a01b0383166000908152600a602052604090205460ff16158015610c6a57506001600160a01b0382166000908152600a602052604090205460ff16155b15610d0f576001600160a01b0383166000908152600b60205260409020544290610c9590603c6110d3565b11158015610cc757506001600160a01b0382166000908152600b60205260409020544290610cc490603c6110d3565b11155b610ce35760405162461bcd60e51b81526004016104c6906112ab565b6001600160a01b038084166000908152600b602052604080822042908190559285168252902055610e13565b6001600160a01b0382166000908152600a602052604090205460ff16610d93576001600160a01b0382166000908152600b60205260409020544290610d5590603c6110d3565b1115610d735760405162461bcd60e51b81526004016104c6906112ab565b6001600160a01b0382166000908152600b60205260409020429055610e13565b6001600160a01b0383166000908152600a602052604090205460ff16610e13576001600160a01b0383166000908152600b60205260409020544290610dd990603c6110d3565b1115610df75760405162461bcd60e51b81526004016104c6906112ab565b6001600160a01b0383166000908152600b602052604090204290555b60008511610e755760405162461bcd60e51b815260206004820152602960248201527f5472616e7366657220616d6f756e74206d7573742062652067726561746572206044820152687468616e207a65726f60b81b60648201526084016104c6565b33600090815260056020526040902054851115610e9157600080fd5b33600090815260056020526040902054610eab9086611107565b33600090815260056020526040808220929092556001600160a01b03881681522054610ed790866110d3565b6001600160a01b0387166000818152600560205260409081902092909255905133906000805160206113c483398151915290610f169089815260200190565b60405180910390a350600195945050505050565b60006104078233610a71565b6000546001600160a01b03163314610f605760405162461bcd60e51b81526004016104c6906112f3565b808015610f9157506000600c5460ff166002811115610f8f57634e487b7160e01b600052602160045260246000fd5b145b15610fa457600c805460ff191660011790555b80610fb757600c805460ff191660021790555b50565b6000546001600160a01b03163314610fe45760405162461bcd60e51b81526004016104c6906112f3565b600955565b6000546001600160a01b031633146110135760405162461bcd60e51b81526004016104c6906112f3565b6001600160a01b0381166110785760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104c6565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000806110e0838561137e565b90508381101561110057634e487b7160e01b600052600160045260246000fd5b9392505050565b60008282111561112757634e487b7160e01b600052600160045260246000fd5b6111008284611396565b80356001600160a01b03811681146109d257600080fd5b600060208284031215611159578081fd5b61110082611131565b60008060408385031215611174578081fd5b61117d83611131565b915061118b60208401611131565b90509250929050565b6000806000606084860312156111a8578081fd5b6111b184611131565b92506111bf60208501611131565b9150604084013590509250925092565b600080604083850312156111e1578182fd5b6111ea83611131565b946020939093013593505050565b600060208284031215611209578081fd5b81358015158114611100578182fd5b600060208284031215611229578081fd5b5035919050565b602081016003831061125257634e487b7160e01b600052602160045260246000fd5b91905290565b6000602080835283518082850152825b8181101561128457858101830151858201604001528201611268565b818111156112955783604083870101525b50601f01601f1916929092016040019392505050565b60208082526028908201527f424d4f4e3a206f6e6c79206f6e652074782f6d696e20696e2072657374726963604082015267746564206d6f646560c01b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526036908201527f424d4f4e3a20616d6f756e742067726561746572207468616e206d6178206c696040820152756d697420696e2072657374726963746564206d6f646560501b606082015260800190565b60008219821115611391576113916113ad565b500190565b6000828210156113a8576113a86113ad565b500390565b634e487b7160e01b600052601160045260246000fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220b17f1bc87fb3927835f761eb23e01b97bedd0fd70595765291b594bd5b443e0f64736f6c63430008040033";

type BMONConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BMONConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BMON__factory extends ContractFactory {
  constructor(...args: BMONConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "BMON";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BMON> {
    return super.deploy(overrides || {}) as Promise<BMON>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BMON {
    return super.attach(address) as BMON;
  }
  connect(signer: Signer): BMON__factory {
    return super.connect(signer) as BMON__factory;
  }
  static readonly contractName: "BMON";
  public readonly contractName: "BMON";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BMONInterface {
    return new utils.Interface(_abi) as BMONInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): BMON {
    return new Contract(address, _abi, signerOrProvider) as BMON;
  }
}