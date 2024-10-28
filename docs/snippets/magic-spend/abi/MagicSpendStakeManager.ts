export const MagicSpendStakeManagerAbi = [
    {
      "type": "constructor",
      "inputs": [
        {
          "name": "_owner",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "receive",
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "ONE_DAY",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint32",
          "internalType": "uint32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "addStake",
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
        },
        {
          "name": "unstakeDelaySec",
          "type": "uint32",
          "internalType": "uint32"
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "claim",
      "inputs": [
        {
          "name": "request",
          "type": "tuple",
          "internalType": "struct ClaimRequest",
          "components": [
            {
              "name": "account",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "claims",
              "type": "tuple[]",
              "internalType": "struct ClaimStruct[]",
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
                  "name": "fee",
                  "type": "uint128",
                  "internalType": "uint128"
                },
                {
                  "name": "chainId",
                  "type": "uint128",
                  "internalType": "uint128"
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
        },
        {
          "name": "claimId",
          "type": "uint8",
          "internalType": "uint8"
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
      "name": "claimed",
      "inputs": [
        {
          "name": "asset",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint128",
          "internalType": "uint128"
        }
      ],
      "stateMutability": "view"
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
      "name": "getClaimRequestHash",
      "inputs": [
        {
          "name": "request",
          "type": "tuple",
          "internalType": "struct ClaimRequest",
          "components": [
            {
              "name": "account",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "claims",
              "type": "tuple[]",
              "internalType": "struct ClaimStruct[]",
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
                  "name": "fee",
                  "type": "uint128",
                  "internalType": "uint128"
                },
                {
                  "name": "chainId",
                  "type": "uint128",
                  "internalType": "uint128"
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
      "name": "getClaimStructHash",
      "inputs": [
        {
          "name": "claim_",
          "type": "tuple",
          "internalType": "struct ClaimStruct",
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
              "name": "fee",
              "type": "uint128",
              "internalType": "uint128"
            },
            {
              "name": "chainId",
              "type": "uint128",
              "internalType": "uint128"
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
      "name": "getStakeInfo",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "asset",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "info",
          "type": "tuple",
          "internalType": "struct StakeManager.StakeInfo",
          "components": [
            {
              "name": "amount",
              "type": "uint128",
              "internalType": "uint128"
            },
            {
              "name": "unstakeDelaySec",
              "type": "uint32",
              "internalType": "uint32"
            },
            {
              "name": "withdrawTime",
              "type": "uint48",
              "internalType": "uint48"
            },
            {
              "name": "staked",
              "type": "bool",
              "internalType": "bool"
            }
          ]
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
      "name": "skim",
      "inputs": [
        {
          "name": "asset",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "stakeOf",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "asset",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint128",
          "internalType": "uint128"
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
      "name": "unlockStake",
      "inputs": [
        {
          "name": "asset",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "withdrawStake",
      "inputs": [
        {
          "name": "asset",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "recipient",
          "type": "address",
          "internalType": "address payable"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "AssetSkimmed",
      "inputs": [
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
      "name": "EIP712DomainChanged",
      "inputs": [],
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
      "name": "RequestClaimed",
      "inputs": [
        {
          "name": "hash_",
          "type": "bytes32",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "name": "account",
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
      "name": "StakeClaimed",
      "inputs": [
        {
          "name": "account",
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
      "name": "StakeLocked",
      "inputs": [
        {
          "name": "account",
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
        },
        {
          "name": "unstakeDelaySec",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "StakeUnlocked",
      "inputs": [
        {
          "name": "account",
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
          "name": "withdrawTime",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "StakeWithdrawn",
      "inputs": [
        {
          "name": "account",
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
      "type": "error",
      "name": "AlreadyUsed",
      "inputs": []
    },
    {
      "type": "error",
      "name": "AmountTooHigh",
      "inputs": []
    },
    {
      "type": "error",
      "name": "AmountTooLow",
      "inputs": []
    },
    {
      "type": "error",
      "name": "InsufficientFunds",
      "inputs": []
    },
    {
      "type": "error",
      "name": "InvalidClaimId",
      "inputs": []
    },
    {
      "type": "error",
      "name": "InvalidShortString",
      "inputs": []
    },
    {
      "type": "error",
      "name": "InvalidUnstakeDelay",
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
      "name": "StakeAlreadyUnlocked",
      "inputs": []
    },
    {
      "type": "error",
      "name": "StakeIsLocked",
      "inputs": []
    },
    {
      "type": "error",
      "name": "StakeTooHigh",
      "inputs": []
    },
    {
      "type": "error",
      "name": "StakeTooLow",
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
  