export const MagicSpendLiquidityManagerAbi = [
    {
      "type": "constructor",
      "inputs": [
        {
          "name": "_owner",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "_signer",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "addLiquidity",
      "inputs": [
        {
          "name": "asset",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint128",
          "internalType": "uint128"
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "addSigner",
      "inputs": [
        {
          "name": "_signer",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "eip712Domain",
      "inputs": [],
      "outputs": [
        {
          "name": "fields",
          "type": "bytes1",
          "internalType": "bytes1"
        },
        {
          "name": "name",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "version",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "chainId",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "verifyingContract",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "salt",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "extensions",
          "type": "uint256[]",
          "internalType": "uint256[]"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getCallStructHash",
      "inputs": [
        {
          "name": "call",
          "type": "tuple",
          "internalType": "struct CallStruct",
          "components": [
            {
              "name": "to",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "value",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "data",
              "type": "bytes",
              "internalType": "bytes"
            }
          ]
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "getSigner",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getWithdrawRequestHash",
      "inputs": [
        {
          "name": "request",
          "type": "tuple",
          "internalType": "struct WithdrawRequest",
          "components": [
            {
              "name": "asset",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "amount",
              "type": "uint128",
              "internalType": "uint128"
            },
            {
              "name": "chainId",
              "type": "uint128",
              "internalType": "uint128"
            },
            {
              "name": "recipient",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "preCalls",
              "type": "tuple[]",
              "internalType": "struct CallStruct[]",
              "components": [
                {
                  "name": "to",
                  "type": "address",
                  "internalType": "address"
                },
                {
                  "name": "value",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                {
                  "name": "data",
                  "type": "bytes",
                  "internalType": "bytes"
                }
              ]
            },
            {
              "name": "postCalls",
              "type": "tuple[]",
              "internalType": "struct CallStruct[]",
              "components": [
                {
                  "name": "to",
                  "type": "address",
                  "internalType": "address"
                },
                {
                  "name": "value",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                {
                  "name": "data",
                  "type": "bytes",
                  "internalType": "bytes"
                }
              ]
            },
            {
              "name": "validUntil",
              "type": "uint48",
              "internalType": "uint48"
            },
            {
              "name": "validAfter",
              "type": "uint48",
              "internalType": "uint48"
            },
            {
              "name": "salt",
              "type": "uint48",
              "internalType": "uint48"
            }
          ]
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "owner",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "removeLiquidity",
      "inputs": [
        {
          "name": "asset",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint128",
          "internalType": "uint128"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "renounceOwnership",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "requestStatuses",
      "inputs": [
        {
          "name": "hash_",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "transferOwnership",
      "inputs": [
        {
          "name": "newOwner",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "withdraw",
      "inputs": [
        {
          "name": "request",
          "type": "tuple",
          "internalType": "struct WithdrawRequest",
          "components": [
            {
              "name": "asset",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "amount",
              "type": "uint128",
              "internalType": "uint128"
            },
            {
              "name": "chainId",
              "type": "uint128",
              "internalType": "uint128"
            },
            {
              "name": "recipient",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "preCalls",
              "type": "tuple[]",
              "internalType": "struct CallStruct[]",
              "components": [
                {
                  "name": "to",
                  "type": "address",
                  "internalType": "address"
                },
                {
                  "name": "value",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                {
                  "name": "data",
                  "type": "bytes",
                  "internalType": "bytes"
                }
              ]
            },
            {
              "name": "postCalls",
              "type": "tuple[]",
              "internalType": "struct CallStruct[]",
              "components": [
                {
                  "name": "to",
                  "type": "address",
                  "internalType": "address"
                },
                {
                  "name": "value",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                {
                  "name": "data",
                  "type": "bytes",
                  "internalType": "bytes"
                }
              ]
            },
            {
              "name": "validUntil",
              "type": "uint48",
              "internalType": "uint48"
            },
            {
              "name": "validAfter",
              "type": "uint48",
              "internalType": "uint48"
            },
            {
              "name": "salt",
              "type": "uint48",
              "internalType": "uint48"
            }
          ]
        },
        {
          "name": "signature",
          "type": "bytes",
          "internalType": "bytes"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "EIP712DomainChanged",
      "inputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "LiquidityAdded",
      "inputs": [
        {
          "name": "asset",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint128",
          "indexed": false,
          "internalType": "uint128"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "LiquidityRemoved",
      "inputs": [
        {
          "name": "asset",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint128",
          "indexed": false,
          "internalType": "uint128"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "OwnershipTransferred",
      "inputs": [
        {
          "name": "previousOwner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "newOwner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RequestWithdrawn",
      "inputs": [
        {
          "name": "hash_",
          "type": "bytes32",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "name": "recipient",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "asset",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "SignerAdded",
      "inputs": [
        {
          "name": "signer",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "AlreadyUsed",
      "inputs": []
    },
    {
      "type": "error",
      "name": "InsufficientLiquidity",
      "inputs": [
        {
          "name": "asset",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "InvalidShortString",
      "inputs": []
    },
    {
      "type": "error",
      "name": "OwnableInvalidOwner",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "OwnableUnauthorizedAccount",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "PostCallReverted",
      "inputs": [
        {
          "name": "revertReason",
          "type": "bytes",
          "internalType": "bytes"
        }
      ]
    },
    {
      "type": "error",
      "name": "PreCallReverted",
      "inputs": [
        {
          "name": "revertReason",
          "type": "bytes",
          "internalType": "bytes"
        }
      ]
    },
    {
      "type": "error",
      "name": "ReentrancyGuardReentrantCall",
      "inputs": []
    },
    {
      "type": "error",
      "name": "RequestExpired",
      "inputs": []
    },
    {
      "type": "error",
      "name": "RequestInvalidChain",
      "inputs": []
    },
    {
      "type": "error",
      "name": "RequestNotYetValid",
      "inputs": []
    },
    {
      "type": "error",
      "name": "SignatureInvalid",
      "inputs": []
    },
    {
      "type": "error",
      "name": "StringTooLong",
      "inputs": [
        {
          "name": "str",
          "type": "string",
          "internalType": "string"
        }
      ]
    }
  ]
  