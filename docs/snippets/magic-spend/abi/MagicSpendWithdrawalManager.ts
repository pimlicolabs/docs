export const MagicSpendWithdrawalManagerAbi = [
    {
      "type": "function",
      "name": "addLiquidity",
      "inputs": [
        {
          "name": "token",
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
      "name": "getCallHash",
      "inputs": [
        {
          "name": "call",
          "type": "tuple",
          "internalType": "struct Call",
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
      "name": "getWithdrawalHash",
      "inputs": [
        {
          "name": "withdrawal",
          "type": "tuple",
          "internalType": "struct Withdrawal",
          "components": [
            {
              "name": "token",
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
              "internalType": "struct Call[]",
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
              "internalType": "struct Call[]",
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
      "name": "initialize",
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
      "outputs": [],
      "stateMutability": "nonpayable"
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
          "name": "token",
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
          "name": "withdrawal",
          "type": "tuple",
          "internalType": "struct Withdrawal",
          "components": [
            {
              "name": "token",
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
              "internalType": "struct Call[]",
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
              "internalType": "struct Call[]",
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
      "name": "Initialized",
      "inputs": [
        {
          "name": "version",
          "type": "uint64",
          "indexed": false,
          "internalType": "uint64"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "LiquidityAdded",
      "inputs": [
        {
          "name": "token",
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
          "name": "token",
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
      "type": "event",
      "name": "WithdrawalExecuted",
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
          "name": "token",
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
      "type": "error",
      "name": "AlreadyUsed",
      "inputs": []
    },
    {
      "type": "error",
      "name": "InsufficientLiquidity",
      "inputs": [
        {
          "name": "token",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "InvalidInitialization",
      "inputs": []
    },
    {
      "type": "error",
      "name": "NotInitializing",
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
      "name": "SignatureInvalid",
      "inputs": []
    },
    {
      "type": "error",
      "name": "WithdrawalExpired",
      "inputs": []
    },
    {
      "type": "error",
      "name": "WithdrawalInvalidChain",
      "inputs": []
    },
    {
      "type": "error",
      "name": "WithdrawalNotYetValid",
      "inputs": []
    }
  ] as const
  