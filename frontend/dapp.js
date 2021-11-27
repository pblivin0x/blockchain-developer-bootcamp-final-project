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

// Social Trading Manager Contract
// const socialTradingManagerAddress = ''
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
    "type": "function"
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
    "type": "function"
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
    "type": "function"
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
    "type": "function"
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
    "type": "function"
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
    "type": "function"
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

// Investor: Get Required Components for Issue
const requireSubmit = document.getElementById('investor-require-button');
requireSubmit.onclick = async () => {
  const setTokenAddress = document.getElementById('investor-require-token-input-box').value;
  const quantity = document.getElementById('investor-require-quantity-input-box').value;
  
  console.log(setTokenAddress, quantity);

  var web3 = new Web3(window.ethereum)

  const basicIssuanceModule = new web3.eth.Contract(basicIssuanceModuleABI, basicIssuanceModuleAddress);
  basicIssuanceModule.setProvider(window.ethereum)
  var componentUnits = await basicIssuanceModule.methods.getRequiredComponentUnitsForIssue(setTokenAddress, quantity).call()

  console.log(componentUnits);
}

// Investor: Issue
const issueSubmit = document.getElementById('investor-issue-button');
issueSubmit.onclick = async () => {
  const setTokenAddress = document.getElementById('investor-issue-token-input-box').value;
  const quantity = document.getElementById('investor-issue-quantity-input-box').value;
  const userAddress = document.getElementById('investor-issue-to-input-box').value;

  console.log(setTokenAddress, quantity, userAddress);

  var web3 = new Web3(window.ethereum)

  const basicIssuanceModule = new web3.eth.Contract(basicIssuanceModuleABI, basicIssuanceModuleAddress);
  basicIssuanceModule.setProvider(window.ethereum)
  var issueResult = await basicIssuanceModule.methods.issue(setTokenAddress, quantity, userAddress).send({from: ethereum.selectedAddress})

  console.log(issueResult);
}

// Investor: Redeem
const redeemSubmit = document.getElementById('investor-redeem-button');
redeemSubmit.onclick = async () => {
  const setTokenAddress = document.getElementById('investor-redeem-token-input-box').value;
  const quantity = document.getElementById('investor-redeem-quantity-input-box').value;
  const userAddress = document.getElementById('investor-redeem-to-input-box').value;

  console.log(setTokenAddress, quantity, userAddress);

  var web3 = new Web3(window.ethereum)

  const basicIssuanceModule = new web3.eth.Contract(basicIssuanceModuleABI, basicIssuanceModuleAddress);
  basicIssuanceModule.setProvider(window.ethereum)
  var redeemResult = await basicIssuanceModule.methods.redeem(setTokenAddress, quantity, userAddress).send({from: ethereum.selectedAddress})

  console.log(redeemResult);
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
    
    console.log(stmTradeSetTokenAddress, 
        stmTradeExchangeName, 
        stmTradeSendToken, 
        stmTradeSendQuantity, 
        stmTradeReceiveToken, 
        stmTradeReceiveQuantity
    )

    var web3 = new Web3(window.ethereum)

    const socialTradingManager = new web3.eth.Contract(socialTradingManagerABI, socialTradingManagerAddress)
    socialTradingManager.setProvider(window.ethereum)
    await socialTradingManager.methods.trade(stmTradeSetTokenAddress, 
        stmTradeExchangeName, 
        stmTradeSendToken, 
        stmTradeSendQuantity, 
        stmTradeReceiveToken, 
        stmTradeReceiveQuantity).send({from: ethereum.selectedAddress})
};

// Operator: Change Operator
const stmOperatorSubmit = document.getElementById('stm-changeoperator-input-button');
stmOperatorSubmit.onclick = async () => {
    const stmOperatorAddress = document.getElementById('stm-changeoperator-input-box').value;
    
    console.log(stmOperatorAddress);

    var web3 = new Web3(window.ethereum)

    const socialTradingManager = new web3.eth.Contract(socialTradingManagerABI, socialTradingManagerAddress);
    socialTradingManager.setProvider(window.ethereum)
    await socialTradingManager.methods.updateOperator(stmOperatorAddress).send({from: ethereum.selectedAddress})
}

// Methodologist: Change Streaming Fee
const stmStreamingSubmit = document.getElementById('stm-streamingfee-input-button');
stmStreamingSubmit.onclick = async () => {
    const stmStreamingFee = document.getElementById('stm-streamingfee-input-box').value;
    
    console.log(stmStreamingFee);

    var web3 = new Web3(window.ethereum)

    const socialTradingManager = new web3.eth.Contract(socialTradingManagerABI, socialTradingManagerAddress);
    socialTradingManager.setProvider(window.ethereum)
    await socialTradingManager.methods.updateStreamingFee(stmStreamingFee).send({from: ethereum.selectedAddress})
}

// Methodologist: Change Methodologist
const stmMethodologistSubmit = document.getElementById('stm-changemethodologist-input-button');
stmMethodologistSubmit.onclick = async () => {
    const stmMethodologistAddress = document.getElementById('stm-changemethodologist-input-box').value;
    
    console.log(stmMethodologistAddress);

    var web3 = new Web3(window.ethereum)

    const socialTradingManager = new web3.eth.Contract(socialTradingManagerABI, socialTradingManagerAddress);
    socialTradingManager.setProvider(window.ethereum)
    await socialTradingManager.methods.updateMethodologist(stmMethodologistAddress).send({from: ethereum.selectedAddress})
}

// Social Trader: Create Set
const createSetSubmit = document.getElementById('create-default-set-button');
createSetSubmit.onclick = async () => {
  const setManager = document.getElementById('create-default-set-manager-input-box').value;
  const setWETH = document.getElementById('create-default-set-weth-input-box').value;
  const setDAI = document.getElementById('create-default-set-dai-input-box').value;
  const setName = document.getElementById('create-default-set-name-input-box').value;
  const setSymbol = document.getElementById('create-default-set-symbol-input-box').value;

  console.log(setManager, setWETH, setDAI, setName, setSymbol);

  // Components
  const wethAddress = '0xd0A1E359811322d97991E03f863a0C30C2cF029C'
  const daiAddress = '0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa'

  // Modules
  const basicIssuanceModuleAddress = '0x8a070235a4B9b477655Bf4Eb65a1dB81051B3cC1'
  const streamingFeeModuleAddress = '0xE038E59DEEC8657d105B6a3Fb5040b3a6189Dd51'
  const tradeModuleAddress = '0xC93c8CDE0eDf4963ea1eea156099B285A945210a'

  var web3 = new Web3(window.ethereum)

  var createdSetAddress = document.getElementById('created-set-address');

  const setTokenCreator = new web3.eth.Contract(setTokenCreatorABI, setTokenCreatorAddress);
  setTokenCreator.setProvider(window.ethereum)
  var newAddress = await setTokenCreator.methods.create([wethAddress, daiAddress],
                                                        [setWETH, setDAI],
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
  await basicIssuanceModule.methods.initialize(setTokenAddress, '0x0000000000000000000000000000000000000000').send({from: ethereum.selectedAddress})
}

// Social Trader: Initialize Streaming Fee Module
const initSFSubmit = document.getElementById('initialize-sf-module-button');
initSFSubmit.onclick = async () => {
  const setTokenAddress = document.getElementById('initialize-sf-setToken-input-box').value;
  const feeRecepient = document.getElementById('initialize-sf-feeRecepient-input-box').value;
  const maxStreamingFeePercentage = document.getElementById('initialize-sf-maxFee-input-box').value;
  const streamingFeePercentage = document.getElementById('initialize-sf-feePercentage-input-box').value;

  console.log(setTokenAddress, feeRecepient, maxStreamingFeePercentage, streamingFeePercentage);

  const feeState = [feeRecepient, maxStreamingFeePercentage, streamingFeePercentage, 0];
  
  var web3 = new Web3(window.ethereum)

  const streamingFeeModule = new web3.eth.Contract(streamingFeeModuleABI, streamingFeeModuleAddress);
  streamingFeeModule.setProvider(window.ethereum)
  await streamingFeeModule.methods.initialize(setTokenAddress, feeState).send({from: ethereum.selectedAddress})
}

// Social Trader: Initialize Trade Module
const initTSubmit = document.getElementById('initialize-t-module-button');
initTSubmit.onclick = async () => {
  const setTokenAddress = document.getElementById('initialize-t-module-input-box').value;
  
  console.log(setTokenAddress);

  var web3 = new Web3(window.ethereum)

  const tradeModule = new web3.eth.Contract(tradeModuleABI, tradeModuleAddress);
  tradeModule.setProvider(window.ethereum)
  await tradeModule.methods.initialize(setTokenAddress).send({from: ethereum.selectedAddress})
}