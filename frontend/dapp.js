// Set Token Creator Contract
const setTokenCreatorAddress = '0x324152c8Ada7AbCc083ACB6e2090fa6266e2AbeD'
const setTokenCreatorABI = [
  {
    "inputs": [
      {
        "internalType": "contract IController",
        "name": "_controller",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_setToken",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "_manager",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "_symbol",
        "type": "string"
      }
    ],
    "name": "SetTokenCreated",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "controller",
    "outputs": [
      {
        "internalType": "contract IController",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_components",
        "type": "address[]"
      },
      {
        "internalType": "int256[]",
        "name": "_units",
        "type": "int256[]"
      },
      {
        "internalType": "address[]",
        "name": "_modules",
        "type": "address[]"
      },
      {
        "internalType": "address",
        "name": "_manager",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_symbol",
        "type": "string"
      }
    ],
    "name": "create",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

// Basic Issuance Module Contract
const basicIssuanceModuleAddress = '0x8a070235a4B9b477655Bf4Eb65a1dB81051B3cC1'
const basicIssuanceModuleABI = [
  {
    "inputs": [
      {
        "internalType": "contract IController",
        "name": "_controller",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_setToken",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_issuer",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "_hookContract",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_quantity",
        "type": "uint256"
      }
    ],
    "name": "SetTokenIssued",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_setToken",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_redeemer",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_quantity",
        "type": "uint256"
      }
    ],
    "name": "SetTokenRedeemed",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "controller",
    "outputs": [
      {
        "internalType": "contract IController",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract ISetToken",
        "name": "_setToken",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_quantity",
        "type": "uint256"
      }
    ],
    "name": "getRequiredComponentUnitsForIssue",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      },
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract ISetToken",
        "name": "_setToken",
        "type": "address"
      },
      {
        "internalType": "contract IManagerIssuanceHook",
        "name": "_preIssueHook",
        "type": "address"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract ISetToken",
        "name": "_setToken",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_quantity",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      }
    ],
    "name": "issue",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract ISetToken",
        "name": "",
        "type": "address"
      }
    ],
    "name": "managerIssuanceHook",
    "outputs": [
      {
        "internalType": "contract IManagerIssuanceHook",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract ISetToken",
        "name": "_setToken",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_quantity",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      }
    ],
    "name": "redeem",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "removeModule",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

// Streaming Fee Module Contract
const streamingFeeModuleAddress = '0xE038E59DEEC8657d105B6a3Fb5040b3a6189Dd51'
const streamingFeeModuleABI = [
  {
    "inputs": [
      {
        "internalType": "contract IController",
        "name": "_controller",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_setToken",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_managerFee",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_protocolFee",
        "type": "uint256"
      }
    ],
    "name": "FeeActualized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_setToken",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "_newFeeRecipient",
        "type": "address"
      }
    ],
    "name": "FeeRecipientUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_setToken",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_newStreamingFee",
        "type": "uint256"
      }
    ],
    "name": "StreamingFeeUpdated",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "contract ISetToken",
        "name": "_setToken",
        "type": "address"
      }
    ],
    "name": "accrueFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "controller",
    "outputs": [
      {
        "internalType": "contract IController",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract ISetToken",
        "name": "",
        "type": "address"
      }
    ],
    "name": "feeStates",
    "outputs": [
      {
        "internalType": "address",
        "name": "feeRecipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "maxStreamingFeePercentage",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "streamingFeePercentage",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "lastStreamingFeeTimestamp",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract ISetToken",
        "name": "_setToken",
        "type": "address"
      }
    ],
    "name": "getFee",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract ISetToken",
        "name": "_setToken",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "feeRecipient",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "maxStreamingFeePercentage",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "streamingFeePercentage",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lastStreamingFeeTimestamp",
            "type": "uint256"
          }
        ],
        "internalType": "struct StreamingFeeModule.FeeState",
        "name": "_settings",
        "type": "tuple"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "removeModule",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract ISetToken",
        "name": "_setToken",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_newFeeRecipient",
        "type": "address"
      }
    ],
    "name": "updateFeeRecipient",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract ISetToken",
        "name": "_setToken",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_newFee",
        "type": "uint256"
      }
    ],
    "name": "updateStreamingFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

// Trade Module Contract
const tradeModuleAddress = '0xC93c8CDE0eDf4963ea1eea156099B285A945210a'
const tradeModuleABI = [
  {
    "inputs": [
      {
        "internalType": "contract IController",
        "name": "_controller",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "contract ISetToken",
        "name": "_setToken",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_sendToken",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_receiveToken",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "contract IExchangeAdapter",
        "name": "_exchangeAdapter",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_totalSendAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_totalReceiveAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_protocolFee",
        "type": "uint256"
      }
    ],
    "name": "ComponentExchanged",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "controller",
    "outputs": [
      {
        "internalType": "contract IController",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract ISetToken",
        "name": "_setToken",
        "type": "address"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "removeModule",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract ISetToken",
        "name": "_setToken",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_exchangeName",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "_sendToken",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_sendQuantity",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_receiveToken",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_minReceiveQuantity",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "trade",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

// Set Token Contract 
const PBSocialSetTokenAddress = '0x3FfEb36c81664e7758576C8eeDEBC9990c68B01f'
const setTokenABI = [
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_components",
        "type": "address[]"
      },
      {
        "internalType": "int256[]",
        "name": "_units",
        "type": "int256[]"
      },
      {
        "internalType": "address[]",
        "name": "_modules",
        "type": "address[]"
      },
      {
        "internalType": "contract IController",
        "name": "_controller",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_manager",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_symbol",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_component",
        "type": "address"
      }
    ],
    "name": "ComponentAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_component",
        "type": "address"
      }
    ],
    "name": "ComponentRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_component",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "int256",
        "name": "_realUnit",
        "type": "int256"
      }
    ],
    "name": "DefaultPositionUnitEdited",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_component",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_positionModule",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "ExternalPositionDataEdited",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_component",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_positionModule",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "int256",
        "name": "_realUnit",
        "type": "int256"
      }
    ],
    "name": "ExternalPositionUnitEdited",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_target",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "_returnValue",
        "type": "bytes"
      }
    ],
    "name": "Invoked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_newManager",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "_oldManager",
        "type": "address"
      }
    ],
    "name": "ManagerEdited",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_module",
        "type": "address"
      }
    ],
    "name": "ModuleAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_module",
        "type": "address"
      }
    ],
    "name": "ModuleInitialized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_module",
        "type": "address"
      }
    ],
    "name": "ModuleRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_module",
        "type": "address"
      }
    ],
    "name": "PendingModuleRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_component",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_positionModule",
        "type": "address"
      }
    ],
    "name": "PositionModuleAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_component",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_positionModule",
        "type": "address"
      }
    ],
    "name": "PositionModuleRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "int256",
        "name": "_newMultiplier",
        "type": "int256"
      }
    ],
    "name": "PositionMultiplierEdited",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_component",
        "type": "address"
      }
    ],
    "name": "addComponent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_component",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_positionModule",
        "type": "address"
      }
    ],
    "name": "addExternalPositionModule",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_module",
        "type": "address"
      }
    ],
    "name": "addModule",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_account",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_quantity",
        "type": "uint256"
      }
    ],
    "name": "burn",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "components",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "controller",
    "outputs": [
      {
        "internalType": "contract IController",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_component",
        "type": "address"
      },
      {
        "internalType": "int256",
        "name": "_realUnit",
        "type": "int256"
      }
    ],
    "name": "editDefaultPositionUnit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_component",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_positionModule",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "editExternalPositionData",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_component",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_positionModule",
        "type": "address"
      },
      {
        "internalType": "int256",
        "name": "_realUnit",
        "type": "int256"
      }
    ],
    "name": "editExternalPositionUnit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "int256",
        "name": "_newMultiplier",
        "type": "int256"
      }
    ],
    "name": "editPositionMultiplier",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getComponents",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_component",
        "type": "address"
      }
    ],
    "name": "getDefaultPositionRealUnit",
    "outputs": [
      {
        "internalType": "int256",
        "name": "",
        "type": "int256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_component",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_positionModule",
        "type": "address"
      }
    ],
    "name": "getExternalPositionData",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_component",
        "type": "address"
      }
    ],
    "name": "getExternalPositionModules",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_component",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_positionModule",
        "type": "address"
      }
    ],
    "name": "getExternalPositionRealUnit",
    "outputs": [
      {
        "internalType": "int256",
        "name": "",
        "type": "int256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getModules",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getPositions",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "component",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "module",
            "type": "address"
          },
          {
            "internalType": "int256",
            "name": "unit",
            "type": "int256"
          },
          {
            "internalType": "uint8",
            "name": "positionState",
            "type": "uint8"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "internalType": "struct ISetToken.Position[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_component",
        "type": "address"
      }
    ],
    "name": "getTotalComponentRealUnits",
    "outputs": [
      {
        "internalType": "int256",
        "name": "",
        "type": "int256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "initializeModule",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_target",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "invoke",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "_returnValue",
        "type": "bytes"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_component",
        "type": "address"
      }
    ],
    "name": "isComponent",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_component",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_module",
        "type": "address"
      }
    ],
    "name": "isExternalPositionModule",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_module",
        "type": "address"
      }
    ],
    "name": "isInitializedModule",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "isLocked",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_module",
        "type": "address"
      }
    ],
    "name": "isPendingModule",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "lock",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "locker",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "manager",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_account",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_quantity",
        "type": "uint256"
      }
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "moduleStates",
    "outputs": [
      {
        "internalType": "enum ISetToken.ModuleState",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "modules",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "positionMultiplier",
    "outputs": [
      {
        "internalType": "int256",
        "name": "",
        "type": "int256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_component",
        "type": "address"
      }
    ],
    "name": "removeComponent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_component",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_positionModule",
        "type": "address"
      }
    ],
    "name": "removeExternalPositionModule",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_module",
        "type": "address"
      }
    ],
    "name": "removeModule",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_module",
        "type": "address"
      }
    ],
    "name": "removePendingModule",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_manager",
        "type": "address"
      }
    ],
    "name": "setManager",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "unlock",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]

// WETH Contract
const wethAddress = '0xd0A1E359811322d97991E03f863a0C30C2cF029C'
const wethABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]

// Dai Contract
const daiAddress = '0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa'
const daiABI = [{"inputs":[{"internalType":"uint256","name":"chainId_","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"guy","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":true,"inputs":[{"indexed":true,"internalType":"bytes4","name":"sig","type":"bytes4"},{"indexed":true,"internalType":"address","name":"usr","type":"address"},{"indexed":true,"internalType":"bytes32","name":"arg1","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"arg2","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"LogNote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"guy","type":"address"}],"name":"deny","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"move","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"bool","name":"allowed","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"pull","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"push","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"guy","type":"address"}],"name":"rely","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"wards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]

// Social Trading Manager Contract
const socialTradingManagerAddress = '0xF7c1492D705cfa50181dE7Ec27dE4727A1346390'
const socialTradingManagerABI = [
  {
    "inputs": [
      {
        "internalType": "contract ISetToken",
        "name": "_setToken",
        "type": "address"
      },
      {
        "internalType": "contract ITradeModule",
        "name": "_tradeModule",
        "type": "address"
      },
      {
        "internalType": "contract IStreamingFeeModule",
        "name": "_feeModule",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_operator",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_methodologist",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_operatorFeeSplit",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_totalFees",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_operatorTake",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_methodologistTake",
        "type": "uint256"
      }
    ],
    "name": "FeesAccrued",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_oldMethodologist",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "_newMethodologist",
        "type": "address"
      }
    ],
    "name": "MethodologistChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "_upgradeHash",
        "type": "bytes32"
      }
    ],
    "name": "MutualUpgradeRegistered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_oldOperator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "_newOperator",
        "type": "address"
      }
    ],
    "name": "OperatorChanged",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "feeModule",
    "outputs": [
      {
        "internalType": "contract IStreamingFeeModule",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "methodologist",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "mutualUpgrades",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "operator",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "operatorFeeSplit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "setToken",
    "outputs": [
      {
        "internalType": "contract ISetToken",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "tradeModule",
    "outputs": [
      {
        "internalType": "contract ITradeModule",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "contract ISetToken",
        "name": "_setToken",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_exchangeName",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "_sendToken",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_sendQuantity",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_receiveToken",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_minReceiveQuantity",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "trade",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "accrueFeeAndDistribute",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_newManager",
        "type": "address"
      }
    ],
    "name": "updateManager",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_module",
        "type": "address"
      }
    ],
    "name": "addModule",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_module",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "interactModule",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_module",
        "type": "address"
      }
    ],
    "name": "removeModule",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_newFee",
        "type": "uint256"
      }
    ],
    "name": "updateStreamingFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_newFeeRecipient",
        "type": "address"
      }
    ],
    "name": "updateFeeRecipient",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_newFeeSplit",
        "type": "uint256"
      }
    ],
    "name": "updateFeeSplit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract ITradeModule",
        "name": "_newTradeModule",
        "type": "address"
      }
    ],
    "name": "updateTradeModule",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_newMethodologist",
        "type": "address"
      }
    ],
    "name": "updateMethodologist",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_newOperator",
        "type": "address"
      }
    ],
    "name": "updateOperator",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

// Detect if MetaMask is installed 
window.addEventListener('load', function() {
  
    if (typeof window.ethereum !== 'undefined') {
      console.log('window.ethereum is enabled')
      if (window.ethereum.isMetaMask === true) {
        console.log('MetaMask is active')
        var web3 = new Web3(window.ethereum)
      } else {
        console.log('MetaMask is not available')
        let mmDetected = document.getElementById('mm-detected')
        mmDetected.innerHTML += '<p>Warning: MetaMask Not Available!<p>'
      }
    } else {
      console.log('window.ethereum is not found')
      let mmDetected = document.getElementById('mm-detected')
      mmDetected.innerHTML += '<p>Warning: MetaMask Not Available!<p>'
    }
  })

var web3 = new Web3(window.ethereum)

// Allow user access to MetaMask
const mmEnable = document.getElementById('mm-connect');
mmEnable.onclick = async () => {
    await ethereum.request({method: 'eth_requestAccounts' })
    var mmCurrentAccount = document.getElementById('mm-current-account');
    mmCurrentAccount.innerHTML = 'Current account: ' + ethereum.selectedAddress
}

// Allow user send a transaction / update contract state

// PBSocial: Get Manager
const pbsocialGetManager = document.getElementById('get-pbsocial-manager-address');
pbsocialGetManager.onclick = async () => {
  var web3 = new Web3(window.ethereum)

  const pbsocial = new web3.eth.Contract(setTokenABI, PBSocialSetTokenAddress);
  pbsocial.setProvider(window.ethereum)
  var pbsocialGetManagerResult = await pbsocial.methods.manager().call()
  console.log(pbsocialGetManagerResult);

  var pbsocialManager = document.getElementById('pbsocial-manager-address');
  pbsocialManager.innerHTML = 'PBSocial Manager Address: ' + pbsocialGetManagerResult;
}

// PBSocial: Get Components
const pbsocialGetComponents = document.getElementById('get-pbsocial-components');
pbsocialGetComponents.onclick = async () => {
  var web3 = new Web3(window.ethereum)
  const pbsocial = new web3.eth.Contract(setTokenABI, PBSocialSetTokenAddress);
  pbsocial.setProvider(window.ethereum)
  var pbsocialGetComponentsResult = await pbsocial.methods.getComponents().call()
  console.log(pbsocialGetComponentsResult);

  var pbsocialComponents = document.getElementById('pbsocial-components');
  pbsocialComponents.innerHTML = 'PBSocial Components: ' + pbsocialGetComponentsResult;
}

// Social Trading Manager: Get Operator
const stmGetOperator = document.getElementById('get-stm-operator');
stmGetOperator.onclick = async () => {
  var web3 = new Web3(window.ethereum)

  const stmManager = new web3.eth.Contract(socialTradingManagerABI, socialTradingManagerAddress);
  stmManager.setProvider(window.ethereum)
  var stmGetOperatorResult = await stmManager.methods.operator().call()
  console.log(stmGetOperatorResult);

  var stmOperatorDiv = document.getElementById('stm-operator');
  stmOperatorDiv.innerHTML = 'Social Trading Manager Operator: ' + stmGetOperatorResult;
}

// Social Trading Manager: Get Methodologist
const stmGetMethodologist = document.getElementById('get-stm-methodologist');
stmGetMethodologist.onclick = async () => {
  var web3 = new Web3(window.ethereum)

  const stmManager = new web3.eth.Contract(socialTradingManagerABI, socialTradingManagerAddress);
  stmManager.setProvider(window.ethereum)
  var stmGetMethodologistResult = await stmManager.methods.methodologist().call()
  console.log(stmGetMethodologistResult);

  var stmMethodologistDiv = document.getElementById('stm-methodologist');
  stmMethodologistDiv.innerHTML = 'Social Trading Manager Methodologist: ' + stmGetMethodologistResult;
}


// Social Trading Manager: Accrue Fee and Distribute
const pbsocialAccrueFee = document.getElementById('accrue-fee-button');
pbsocialAccrueFee.onclick = async () => {
  var web3 = new Web3(window.ethereum)
  const pbsocialManager = new web3.eth.Contract(socialTradingManagerABI, socialTradingManagerAddress);
  pbsocialManager.setProvider(window.ethereum)
  var accrueFeeResult = await pbsocialManager.methods.accrueFeeAndDistribute().send({from: ethereum.selectedAddress})
  console.log(accrueFeeResult);

  var accrueFeeTotal = document.getElementById('accrue-fee-total');
  var accrueFeeMethodologist = document.getElementById('accrue-fee-methodologist');
  var accrueFeeOperator = document.getElementById('accrue-fee-operator');
  
  accrueFeeTotal.innerHTML = 'Total Fees Accrued: ' + accrueFeeResult.events.FeesAccrued.returnValues._totalFees + " Wei";
  accrueFeeMethodologist.innerHTML = 'Methodologist Take: ' + accrueFeeResult.events.FeesAccrued.returnValues._methodologistTake + " Wei";
  accrueFeeOperator.innerHTML = 'Operator Take: ' + accrueFeeResult.events.FeesAccrued.returnValues._operatorTake + " Wei";
}


// Investor: Get Required Components for Issue
const requireSubmit = document.getElementById('investor-require-button');
requireSubmit.onclick = async () => {
  const setTokenAddress = document.getElementById('investor-require-token-input-box').value;
  const quantity = document.getElementById('investor-require-quantity-input-box').value;

  var web3 = new Web3(window.ethereum)

  const quantity_shifted = web3.utils.toWei(quantity, "ether");
  
  console.log(setTokenAddress, quantity_shifted);

  const basicIssuanceModule = new web3.eth.Contract(basicIssuanceModuleABI, basicIssuanceModuleAddress);
  basicIssuanceModule.setProvider(window.ethereum)
  var componentUnits = await basicIssuanceModule.methods.getRequiredComponentUnitsForIssue(setTokenAddress, quantity_shifted).call()

  console.log(componentUnits);

  var requiredWETH = document.getElementById('required-weth');
  var requiredDAI = document.getElementById('required-dai');

  const requiredWETH_shifted = web3.utils.fromWei(componentUnits[1][0], "ether");
  const requiredDAI_shifted = web3.utils.fromWei(componentUnits[1][1], "ether");

  requiredWETH.innerHTML = 'Required WETH Units: ' + requiredWETH_shifted;
  requiredDAI.innerHTML = 'Required DAI Units: ' + requiredDAI_shifted;
}

// Investor: Approve WETH
const approveWethSubmit = document.getElementById('investor-approve-weth-button');
approveWethSubmit.onclick = async () => {
  const userAddress = document.getElementById('investor-approve-weth-address-input-box').value;
  const amount = document.getElementById('investor-approve-weth-amount-input-box').value;

  var web3 = new Web3(window.ethereum)

  const amount_shifted = web3.utils.toWei(amount, "ether");

  console.log(userAddress, amount_shifted);

  const wethContract = new web3.eth.Contract(wethABI, wethAddress);
  wethContract.setProvider(window.ethereum)
  var approveResult = await wethContract.methods.approve(userAddress, amount_shifted).send({from: ethereum.selectedAddress})

  console.log(approveResult);
  const approveWETHResult = document.getElementById('approve-weth');
  if (approveResult.status) {
    approveWETHResult.innerHTML = 'WETH Approval Successful!';
  } else {
    approveWETHResult.innerHTML = 'Warning: WETH Approval Unsuccessful!';
  }
}

// Investor: Approve DAI
const approveDaiSubmit = document.getElementById('investor-approve-dai-button');
approveDaiSubmit.onclick = async () => {
  const userAddress = document.getElementById('investor-approve-dai-address-input-box').value;
  const amount = document.getElementById('investor-approve-dai-amount-input-box').value;

  var web3 = new Web3(window.ethereum)

  const amount_shifted = web3.utils.toWei(amount, "ether");

  console.log(userAddress, amount_shifted);

  const daiContract = new web3.eth.Contract(daiABI, daiAddress);
  daiContract.setProvider(window.ethereum)
  var approveResult = await daiContract.methods.approve(userAddress, amount_shifted).send({from: ethereum.selectedAddress})

  console.log(approveResult);
  const approveDAIResult = document.getElementById('approve-dai');
  if (approveResult.status) {
    approveDAIResult.innerHTML = 'DAI Approval Successful!';
  } else {
    approveDAIResult.innerHTML = 'Warning: DAI Approval Unsuccessful!';
  }
}

// Investor: Issue
const issueSubmit = document.getElementById('investor-issue-button');
issueSubmit.onclick = async () => {
  const setTokenAddress = document.getElementById('investor-issue-token-input-box').value;
  const quantity = document.getElementById('investor-issue-quantity-input-box').value;
  const userAddress = document.getElementById('investor-issue-to-input-box').value;

  var web3 = new Web3(window.ethereum)

  const quantity_shifted = web3.utils.toWei(quantity, "ether");

  console.log(setTokenAddress, quantity_shifted, userAddress);

  const basicIssuanceModule = new web3.eth.Contract(basicIssuanceModuleABI, basicIssuanceModuleAddress);
  basicIssuanceModule.setProvider(window.ethereum)
  var issueResult = await basicIssuanceModule.methods.issue(setTokenAddress, quantity_shifted, userAddress).send({from: ethereum.selectedAddress})

  console.log(issueResult);
  const issueResultUnits = web3.utils.fromWei(issueResult.events.SetTokenIssued.returnValues._quantity, "ether");
  const issueSetTokenResult = document.getElementById('issue-set-token');
  issueSetTokenResult.innerHTML = issueResultUnits + ' PBS Tokens Issued!';
}

// Investor: Redeem
const redeemSubmit = document.getElementById('investor-redeem-button');
redeemSubmit.onclick = async () => {
  const setTokenAddress = document.getElementById('investor-redeem-token-input-box').value;
  const quantity = document.getElementById('investor-redeem-quantity-input-box').value;
  const userAddress = document.getElementById('investor-redeem-to-input-box').value;

  var web3 = new Web3(window.ethereum)

  const quantity_shifted = web3.utils.toWei(quantity, "ether");

  console.log(setTokenAddress, quantity_shifted, userAddress);

  const basicIssuanceModule = new web3.eth.Contract(basicIssuanceModuleABI, basicIssuanceModuleAddress);
  basicIssuanceModule.setProvider(window.ethereum)
  var redeemResult = await basicIssuanceModule.methods.redeem(setTokenAddress, quantity_shifted, userAddress).send({from: ethereum.selectedAddress})

  console.log(redeemResult);
  const redeemResultUnits = web3.utils.fromWei(redeemResult.events.SetTokenRedeemed.returnValues._quantity, "ether");
  const redeemSetTokenResult = document.getElementById('redeem-set-token');
  redeemSetTokenResult.innerHTML = redeemResultUnits + ' PBS Tokens Redeemed!';
}

// Operator: Submit Trade
const stmTradeSubmit = document.getElementById('stm-trade-input-button');
stmTradeSubmit.onclick = async () => {
    const stmTradeSetTokenAddress = document.getElementById('stm-trade-settoken-input-box').value;
    const stmTradeExchangeName = document.getElementById('stm-trade-exchange-input-box').value;
    const stmTradeSendToken = document.getElementById('stm-trade-sendtoken-input-box').value;
    const stmTradeSendQuantity = document.getElementById('stm-trade-sendquantity-input-box').value;
    const stmTradeReceiveToken = document.getElementById('stm-trade-receivetoken-input-box').value;
    const stmTradeReceiveQuantity = document.getElementById('stm-trade-receivequantity-input-box').value;

    var web3 = new Web3(window.ethereum)

    const stmTradeSendQuantity_shifted = web3.utils.toWei(stmTradeSendQuantity, "ether");
    const stmTradeReceiveQuantity_shifted = web3.utils.toWei(stmTradeReceiveQuantity, "ether");
    
    console.log(stmTradeSetTokenAddress, 
        stmTradeExchangeName, 
        stmTradeSendToken, 
        stmTradeSendQuantity_shifted, 
        stmTradeReceiveToken, 
        stmTradeReceiveQuantity_shifted
    )

    const socialTradingManager = new web3.eth.Contract(socialTradingManagerABI, socialTradingManagerAddress)
    socialTradingManager.setProvider(window.ethereum)
    var tradeResult = await socialTradingManager.methods.trade(stmTradeSetTokenAddress, 
        stmTradeExchangeName, 
        stmTradeSendToken, 
        stmTradeSendQuantity_shifted, 
        stmTradeReceiveToken, 
        stmTradeReceiveQuantity_shifted,
        '0x').send({from: ethereum.selectedAddress})

    console.log(tradeResult)
    const tradeResultHTML = document.getElementById('trade-result');
    if (tradeResult.status) {
      tradeResultHTML.innerHTML = 'Trade Executed Successfully!';
    } else {
      tradeResultHTML.innerHTML = 'Warning: Trade Execution Unsuccessful!';
    }
};

// Operator: Change Operator
const stmOperatorSubmit = document.getElementById('stm-changeoperator-input-button');
stmOperatorSubmit.onclick = async () => {
    const stmOperatorAddress = document.getElementById('stm-changeoperator-input-box').value;
    
    console.log(stmOperatorAddress);

    var web3 = new Web3(window.ethereum)

    const socialTradingManager = new web3.eth.Contract(socialTradingManagerABI, socialTradingManagerAddress);
    socialTradingManager.setProvider(window.ethereum)
    var changeOperatorResult = await socialTradingManager.methods.updateOperator(stmOperatorAddress).send({from: ethereum.selectedAddress})

    console.log(changeOperatorResult)

    const coResult = document.getElementById('change-operator');
    coResult.innerHTML = 'New Operator Address: ' + changeOperatorResult.events.OperatorChanged.returnValues._newOperator;
}

// Methodologist: Change Streaming Fee
const stmStreamingSubmit = document.getElementById('stm-streamingfee-input-button');
stmStreamingSubmit.onclick = async () => {
    const stmStreamingFee = document.getElementById('stm-streamingfee-input-box').value;

    var web3 = new Web3(window.ethereum)

    const stmStreamingFee_shifted = web3.utils.toWei(stmStreamingFee, "ether");
    
    console.log(stmStreamingFee_shifted);

    const socialTradingManager = new web3.eth.Contract(socialTradingManagerABI, socialTradingManagerAddress);
    socialTradingManager.setProvider(window.ethereum)
    var updateFeeResult = await socialTradingManager.methods.updateStreamingFee(stmStreamingFee_shifted).send({from: ethereum.selectedAddress})

    console.log(updateFeeResult)
    const updateFResult = document.getElementById('update-fee');
    if (updateFeeResult.status) {
      updateFResult.innerHTML = 'Fee Update Successful!';
    } else {
      updateFResult.innerHTML = 'Warning: Fee Update Unsuccessful!';
    }
}

// Methodologist: Change Methodologist
const stmMethodologistSubmit = document.getElementById('stm-changemethodologist-input-button');
stmMethodologistSubmit.onclick = async () => {
    const stmMethodologistAddress = document.getElementById('stm-changemethodologist-input-box').value;
    
    console.log(stmMethodologistAddress);

    var web3 = new Web3(window.ethereum)

    const socialTradingManager = new web3.eth.Contract(socialTradingManagerABI, socialTradingManagerAddress);
    socialTradingManager.setProvider(window.ethereum)
    var changeMethodologistResult = await socialTradingManager.methods.updateMethodologist(stmMethodologistAddress).send({from: ethereum.selectedAddress})

    const moResult = document.getElementById('change-methodologist');
    moResult.innerHTML = 'New Methodologist Address: ' + changeMethodologistResult.events.MethodologistChanged.returnValues._newMethodologist;
}

// Social Trader: Create Set
const createSetSubmit = document.getElementById('create-default-set-button');
createSetSubmit.onclick = async () => {
  const setManager = document.getElementById('create-default-set-manager-input-box').value;
  const setWETH = document.getElementById('create-default-set-weth-input-box').value;
  const setDAI = document.getElementById('create-default-set-dai-input-box').value;
  const setName = document.getElementById('create-default-set-name-input-box').value;
  const setSymbol = document.getElementById('create-default-set-symbol-input-box').value;

  var web3 = new Web3(window.ethereum)

  const setWETH_shifted = web3.utils.toWei(setWETH, "ether");
  const setDAI_shifted = web3.utils.toWei(setDAI, "ether");

  console.log(setManager, setWETH_shifted, setDAI_shifted, setName, setSymbol);

  var createdSetAddress = document.getElementById('created-set-address');

  const setTokenCreator = new web3.eth.Contract(setTokenCreatorABI, setTokenCreatorAddress);
  setTokenCreator.setProvider(window.ethereum)
  var newAddress = await setTokenCreator.methods.create([wethAddress, daiAddress],
                                                        [setWETH_shifted, setDAI_shifted],
                                                        [basicIssuanceModuleAddress, streamingFeeModuleAddress, tradeModuleAddress],
                                                        setManager,
                                                        setName,
                                                        setSymbol).send({from: ethereum.selectedAddress})
  
  console.log(newAddress);
  createdSetAddress.innerHTML = 'New Set Token Address: ' + newAddress.events.SetTokenCreated.returnValues._setToken
}

// Social Trader: Initialize Basic Issuance Module
const initBISubmit = document.getElementById('initialize-bi-module-button');
initBISubmit.onclick = async () => {
  const setTokenAddress = document.getElementById('initialize-bi-module-input-box').value;
  
  console.log(setTokenAddress);

  var web3 = new Web3(window.ethereum)

  const basicIssuanceModule = new web3.eth.Contract(basicIssuanceModuleABI, basicIssuanceModuleAddress);
  basicIssuanceModule.setProvider(window.ethereum)
  var BIResult = await basicIssuanceModule.methods.initialize(setTokenAddress, '0x0000000000000000000000000000000000000000').send({from: ethereum.selectedAddress})

  console.log(BIResult)
  const initBIResult = document.getElementById('init-bi');
  if (BIResult.status) {
    initBIResult.innerHTML = 'BasicIssuanceModule Initialization Successful!';
  } else {
    initBIResult.innerHTML = 'Warning: BasicIssuanceModule Initialization Unsuccessful!';
  }
}

// Social Trader: Initialize Streaming Fee Module
const initSFSubmit = document.getElementById('initialize-sf-module-button');
initSFSubmit.onclick = async () => {
  const setTokenAddress = document.getElementById('initialize-sf-setToken-input-box').value;
  const feeRecepient = document.getElementById('initialize-sf-feeRecepient-input-box').value;
  const maxStreamingFeePercentage = document.getElementById('initialize-sf-maxFee-input-box').value;
  const streamingFeePercentage = document.getElementById('initialize-sf-feePercentage-input-box').value;

  var web3 = new Web3(window.ethereum)

  const maxStreamingFeePercentage_shifted = web3.utils.toWei(maxStreamingFeePercentage, "ether");
  const streamingFeePercentage_shifted = web3.utils.toWei(streamingFeePercentage, "ether");

  console.log(setTokenAddress, feeRecepient, maxStreamingFeePercentage_shifted, streamingFeePercentage_shifted);

  const feeState = [feeRecepient, maxStreamingFeePercentage_shifted, streamingFeePercentage_shifted, 0];

  const streamingFeeModule = new web3.eth.Contract(streamingFeeModuleABI, streamingFeeModuleAddress);
  streamingFeeModule.setProvider(window.ethereum)
  var SFResult = await streamingFeeModule.methods.initialize(setTokenAddress, feeState).send({from: ethereum.selectedAddress})

  console.log(SFResult)
  const initSFResult = document.getElementById('init-sf');
  if (SFResult.status) {
    initSFResult.innerHTML = 'StreamingFeeModule Initialization Successful!';
  } else {
    initSFResult.innerHTML = 'Warning: StreamingFeeModule Initialization Unsuccessful!';
  }
}

// Social Trader: Initialize Trade Module
const initTSubmit = document.getElementById('initialize-t-module-button');
initTSubmit.onclick = async () => {
  const setTokenAddress = document.getElementById('initialize-t-module-input-box').value;
  
  console.log(setTokenAddress);

  var web3 = new Web3(window.ethereum)

  const tradeModule = new web3.eth.Contract(tradeModuleABI, tradeModuleAddress);
  tradeModule.setProvider(window.ethereum)
  var TResult = await tradeModule.methods.initialize(setTokenAddress).send({from: ethereum.selectedAddress})

  console.log(TResult)
  const initTResult = document.getElementById('init-t');
  if (TResult.status) {
    initTResult.innerHTML = 'TradeModule Initialization Successful!';
  } else {
    initTResult.innerHTML = 'Warning: TradeModule Initialization Unsuccessful!';
  }
}

// Social Trader: Change Manager
const changeMSubmit = document.getElementById('change-manager-button');
changeMSubmit.onclick = async () => {
  const setTokenAddress = document.getElementById('change-manager-setToken-input-box').value;
  const newManagerAddress = document.getElementById('change-manager-newManager-input-box').value;
  
  console.log(setTokenAddress, newManagerAddress);

  var web3 = new Web3(window.ethereum)

  const setToken = new web3.eth.Contract(setTokenABI, setTokenAddress);
  setToken.setProvider(window.ethereum)
  var CMResult = await setToken.methods.setManager(newManagerAddress).send({from: ethereum.selectedAddress})

  console.log(CMResult)

  const changeManagerResult = document.getElementById('change-manager');
  changeManagerResult.innerHTML = 'New Manager Address: ' + CMResult.events.ManagerEdited.returnValues._newManager;
}