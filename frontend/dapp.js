const setTokenCreatorAddress = '0xB24F7367ee8efcB5EAbe4491B42fA222EC68d411'

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

// const socialTradingManagerAddress = ''
// const socialTradingManagerABI = []


// Detect if MetaMask is installed 
window.addEventListener('load', function() {
  
    if (typeof window.ethereum !== 'undefined') {
      console.log('window.ethereum is enabled')
      if (window.ethereum.isMetaMask === true) {
        console.log('MetaMask is active')
        let mmDetected = document.getElementById('mm-detected')
        mmDetected.innerHTML += 'MetaMask Is Available!'
        var web3 = new Web3(window.ethereum)
      } else {
        console.log('MetaMask is not available')
        let mmDetected = document.getElementById('mm-detected')
        mmDetected.innerHTML += 'MetaMask Not Available!'
      }
    } else {
      console.log('window.ethereum is not found')
      let mmDetected = document.getElementById('mm-detected')
      mmDetected.innerHTML += '<p>MetaMask Not Available!<p>'
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

    var web3 = new web3(window.ethereum)

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

    var web3 = new web3(window.ethereum)

    const socialTradingManager = new web3.eth.Contract(socialTradingManagerABI, socialTradingManagerAddress);
    socialTradingManager.setProvider(window.ethereum)
    await socialTradingManager.methods.updateOperator(stmOperatorAddress).send({from: ethereum.selectedAddress})
}

// Methodologist: Change Streaming Fee
const stmStreamingSubmit = document.getElementById('stm-streamingfee-input-button');
stmStreamingSubmit.onclick = async () => {
    const stmStreamingFee = document.getElementById('stm-streamingfee-input-box').value;
    
    console.log(stmStreamingFee);

    var web3 = new web3(window.ethereum)

    const socialTradingManager = new web3.eth.Contract(socialTradingManagerABI, socialTradingManagerAddress);
    socialTradingManager.setProvider(window.ethereum)
    await socialTradingManager.methods.updateStreamingFee(stmStreamingFee).send({from: ethereum.selectedAddress})
}

// Methodologist: Change Methodologist
const stmMethodologistSubmit = document.getElementById('stm-changemethodologist-input-button');
stmMethodologistSubmit.onclick = async () => {
    const stmMethodologistAddress = document.getElementById('stm-changemethodologist-input-box').value;
    
    console.log(stmMethodologistAddress);

    var web3 = new web3(window.ethereum)

    const socialTradingManager = new web3.eth.Contract(socialTradingManagerABI, socialTradingManagerAddress);
    socialTradingManager.setProvider(window.ethereum)
    await socialTradingManager.methods.updateMethodologist(stmMethodologistAddress).send({from: ethereum.selectedAddress})
}

// Preliminary: Create Set
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

  // var web3 = new web3(window.ethereum)

  const setTokenCreator = new web3.eth.Contract(setTokenCreatorABI, setTokenCreatorAddress);
  setTokenCreator.setProvider(window.ethereum)
  await setTokenCreator.methods.create([wethAddress, daiAddress],
                                       [setWETH, setDAI],
                                       [basicIssuanceModuleAddress, streamingFeeModuleAddress, tradeModuleAddress],
                                       setManager,
                                       setName,
                                       setSymbol).send({from: ethereum.selectedAddress})
}