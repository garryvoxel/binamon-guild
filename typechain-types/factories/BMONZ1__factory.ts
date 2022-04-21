/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BMONZ1, BMONZ1Interface } from "../BMONZ1";

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
        name: "account",
        type: "address",
      },
      {
        internalType: "bool",
        name: "ban",
        type: "bool",
      },
    ],
    name: "blacklistAccount",
    outputs: [],
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
    inputs: [],
    name: "state",
    outputs: [
      {
        internalType: "enum BMON_Z1.State",
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
];

const _bytecode =
  "0x60806040526b09b18ab5df7180b6b80000006001556b09b18ab5df7180b6b800000060065534801561003057600080fd5b5060008054336001600160a01b0319909116811782556009805460ff19169055600154818352600260209081526040808520839055519182529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3611249806100a66000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806383af0403116100ad578063d2ae853011610071578063d2ae8530146102cb578063dd62ed3e146102de578063ddef907a14610317578063f2f827121461032a578063f2fde38b1461033d57600080fd5b806383af0403146102205780638da5cb5b1461026057806395d89b411461027b578063a9059cbb1461029e578063c19d93fb146102b157600080fd5b80632d5a5d34116100f45780632d5a5d34146101ad578063313ce567146101c257806342966c68146101d15780636b4d9b78146101e457806370a08231146101f757600080fd5b806306fdde0314610126578063095ea7b31461016557806318160ddd1461018857806323b872dd1461019a575b600080fd5b604080518082019091526011815270109a5b985b5bdb88168c48141b185b995d607a1b60208201525b60405161015c9190611059565b60405180910390f35b610178610173366004610fd6565b610350565b604051901515815260200161015c565b6001545b60405190815260200161015c565b6101786101a8366004610f72565b6103bd565b6101c06101bb366004610fad565b61083a565b005b6040516012815260200161015c565b6101786101df366004611019565b61088f565b6101786101f2366004610f40565b61093f565b61018c610205366004610f26565b6001600160a01b031660009081526002602052604090205490565b61017861022e366004610f26565b33600090815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055600190565b6000546040516001600160a01b03909116815260200161015c565b604080518082019091526007815266424d4f4e2d5a3160c81b602082015261014f565b6101786102ac366004610fd6565b610976565b6009546102be9060ff1681565b60405161015c9190611031565b6101786102d9366004610f26565b610d31565b61018c6102ec366004610f40565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205490565b6101c0610325366004610fff565b610d3d565b6101c0610338366004611019565b610dc1565b6101c061034b366004610f26565b610df0565b3360008181526003602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906103ab9086815260200190565b60405180910390a35060015b92915050565b60008383838360095460ff1660028111156103e857634e487b7160e01b600052602160045260246000fd5b1415610444576000546001600160a01b038481169116146104445760405162461bcd60e51b8152602060048201526011602482015270151bdad95b9cc8185c99481b1bd8dad959607a1b60448201526064015b60405180910390fd5b600160095460ff16600281111561046b57634e487b7160e01b600052602160045260246000fd5b141561052f576006548111156104935760405162461bcd60e51b815260040161043b90611129565b6001600160a01b03831660009081526008602052604090205442906104b990603c610ea1565b111580156104eb57506001600160a01b03821660009081526008602052604090205442906104e890603c610ea1565b11155b6105075760405162461bcd60e51b815260040161043b906110ac565b6001600160a01b03808416600090815260086020526040808220429081905592851682529020555b600260095460ff16600281111561055657634e487b7160e01b600052602160045260246000fd5b1415610666576001600160a01b03821660009081526007602052604090205460ff16156105e3576001600160a01b03821660009081526008602052604090205442906105a59062278d006111ae565b11156105c35760405162461bcd60e51b815260040161043b90611179565b6001600160a01b0382166000908152600860205260409020429055610666565b6001600160a01b03831660009081526007602052604090205460ff1615610666576001600160a01b038316600090815260086020526040902054429061062c9062278d006111ae565b111561064a5760405162461bcd60e51b815260040161043b90611179565b6001600160a01b03831660009081526008602052604090204290555b6001600160a01b03871660009081526002602052604090205485111561068b57600080fd5b6001600160a01b03878116600090815260046020526040902054163314806106d657506001600160a01b03871660009081526003602090815260408083203384529091529020548511155b6106df57600080fd5b6001600160a01b0387166000908152600260205260409020546107029086610ed5565b6001600160a01b038089166000908152600260209081526040808320949094556004905291909120541633146107ed576001600160a01b03871660009081526003602090815260408083203384529091529020546107609086610ed5565b6001600160a01b03808916600090815260036020908152604080832033845282528083209490945591891681526002909152205461079e9086610ea1565b6001600160a01b0380881660008181526002602052604090819020939093559151908916906000805160206111f4833981519152906107e09089815260200190565b60405180910390a361082d565b6001546107fa9086610ed5565b6001556040518581526000906001600160a01b038916906000805160206111f48339815191529060200160405180910390a35b5060019695505050505050565b6000546001600160a01b031633146108645760405162461bcd60e51b815260040161043b906110f4565b6001600160a01b03919091166000908152600760205260409020805460ff1916911515919091179055565b600080546001600160a01b031633146108ba5760405162461bcd60e51b815260040161043b906110f4565b336000908152600260205260409020548211156108d657600080fd5b336000908152600260205260409020546108f09083610ed5565b3360009081526002602052604090205560015461090d9083610ed5565b60015560405182815260009033906000805160206111f48339815191529060200160405180910390a35060015b919050565b6001600160a01b0382811660009081526004602052604081205490918381169116141561096e575060016103b7565b5060006103b7565b60003383838360095460ff1660028111156109a157634e487b7160e01b600052602160045260246000fd5b14156109f8576000546001600160a01b038481169116146109f85760405162461bcd60e51b8152602060048201526011602482015270151bdad95b9cc8185c99481b1bd8dad959607a1b604482015260640161043b565b600160095460ff166002811115610a1f57634e487b7160e01b600052602160045260246000fd5b1415610ae357600654811115610a475760405162461bcd60e51b815260040161043b90611129565b6001600160a01b0383166000908152600860205260409020544290610a6d90603c610ea1565b11158015610a9f57506001600160a01b0382166000908152600860205260409020544290610a9c90603c610ea1565b11155b610abb5760405162461bcd60e51b815260040161043b906110ac565b6001600160a01b03808416600090815260086020526040808220429081905592851682529020555b600260095460ff166002811115610b0a57634e487b7160e01b600052602160045260246000fd5b1415610c1a576001600160a01b03821660009081526007602052604090205460ff1615610b97576001600160a01b0382166000908152600860205260409020544290610b599062278d006111ae565b1115610b775760405162461bcd60e51b815260040161043b90611179565b6001600160a01b0382166000908152600860205260409020429055610c1a565b6001600160a01b03831660009081526007602052604090205460ff1615610c1a576001600160a01b0383166000908152600860205260409020544290610be09062278d006111ae565b1115610bfe5760405162461bcd60e51b815260040161043b90611179565b6001600160a01b03831660009081526008602052604090204290555b60008511610c7c5760405162461bcd60e51b815260206004820152602960248201527f5472616e7366657220616d6f756e74206d7573742062652067726561746572206044820152687468616e207a65726f60b81b606482015260840161043b565b33600090815260026020526040902054851115610c9857600080fd5b33600090815260026020526040902054610cb29086610ed5565b33600090815260026020526040808220929092556001600160a01b03881681522054610cde9086610ea1565b6001600160a01b0387166000818152600260205260409081902092909255905133906000805160206111f483398151915290610d1d9089815260200190565b60405180910390a350600195945050505050565b60006103b7823361093f565b6000546001600160a01b03163314610d675760405162461bcd60e51b815260040161043b906110f4565b808015610d985750600060095460ff166002811115610d9657634e487b7160e01b600052602160045260246000fd5b145b15610dab576009805460ff191660011790555b80610dbe576009805460ff191660021790555b50565b6000546001600160a01b03163314610deb5760405162461bcd60e51b815260040161043b906110f4565b600655565b6000546001600160a01b03163314610e1a5760405162461bcd60e51b815260040161043b906110f4565b6001600160a01b038116610e7f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161043b565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b600080610eae83856111ae565b905083811015610ece57634e487b7160e01b600052600160045260246000fd5b9392505050565b600082821115610ef557634e487b7160e01b600052600160045260246000fd5b610ece82846111c6565b80356001600160a01b038116811461093a57600080fd5b8035801515811461093a57600080fd5b600060208284031215610f37578081fd5b610ece82610eff565b60008060408385031215610f52578081fd5b610f5b83610eff565b9150610f6960208401610eff565b90509250929050565b600080600060608486031215610f86578081fd5b610f8f84610eff565b9250610f9d60208501610eff565b9150604084013590509250925092565b60008060408385031215610fbf578182fd5b610fc883610eff565b9150610f6960208401610f16565b60008060408385031215610fe8578182fd5b610ff183610eff565b946020939093013593505050565b600060208284031215611010578081fd5b610ece82610f16565b60006020828403121561102a578081fd5b5035919050565b602081016003831061105357634e487b7160e01b600052602160045260246000fd5b91905290565b6000602080835283518082850152825b8181101561108557858101830151858201604001528201611069565b818111156110965783604083870101525b50601f01601f1916929092016040019392505050565b60208082526028908201527f424d4f4e3a206f6e6c79206f6e652074782f6d696e20696e2072657374726963604082015267746564206d6f646560c01b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526030908201527f416d6f756e742067726561746572207468616e206d6178206c696d697420696e60408201526f2072657374726963746564206d6f646560801b606082015260800190565b6020808252818101527f4f6e6c79206f6e652074782f6d6f6e746820696e2062616e6e6564206d6f6465604082015260600190565b600082198211156111c1576111c16111dd565b500190565b6000828210156111d8576111d86111dd565b500390565b634e487b7160e01b600052601160045260246000fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220b75ca5609fdf22bb27d3623df68c7a6c13de61de272f0308d7d6b737c43ab76064736f6c63430008040033";

type BMONZ1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BMONZ1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BMONZ1__factory extends ContractFactory {
  constructor(...args: BMONZ1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "BMONZ1";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BMONZ1> {
    return super.deploy(overrides || {}) as Promise<BMONZ1>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BMONZ1 {
    return super.attach(address) as BMONZ1;
  }
  connect(signer: Signer): BMONZ1__factory {
    return super.connect(signer) as BMONZ1__factory;
  }
  static readonly contractName: "BMONZ1";
  public readonly contractName: "BMONZ1";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BMONZ1Interface {
    return new utils.Interface(_abi) as BMONZ1Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): BMONZ1 {
    return new Contract(address, _abi, signerOrProvider) as BMONZ1;
  }
}
