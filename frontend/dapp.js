// const socialTradingManagerAddress = ''
// const socialTradingManagerABI = []

// Detect if MetaMask is installed 
window.addEventListener('load', function() {
    if (typeof window.ethereum !== undefined) {
        console.log('MetaMask detected!')
        let mmDetected = document.getElementById('mm-detected')
        mmDetected.innerHTML = 'MetaMask has been detected!'
    }
    else {
        console.log('MetaMask not detected!')
        alert('MetaMask required for this dApp!')
    }
})

// Allow user access to MetaMask
const mmEnable = document.getElementById('mm-connect');
mmEnable.onclick = async () => {
    await ethereum.request({ method:'eth_requestAccounts'})

    const mmCurrentAccount = document.getElementById('mm-current-account');

    mmCurrentAccount.innerHTML = 'Current account' + ethereum.selectedAddress
};

// Allow user send a transaction / update contract state

// Operator: Submit Trade
const stmTradeSubmit = document.getElementById('stm-trade-input-button');
stmTradeSubmit.onclick = aysnc () => {
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
    );

    var web3 = new web3(window.ethereum)

    const socialTradingManager = new web3.eth.contract(socialTradingManagerABI, socialTradingManagerAddress)

    await socialTradingManager.methods.trade(stmTradeSetTokenAddress, 
        stmTradeExchangeName, 
        stmTradeSendToken, 
        stmTradeSendQuantity, 
        stmTradeReceiveToken, 
        stmTradeReceiveQuantity).send({from: ethereum.selectedAddress})
};

// Operator: Change Operator
const stmOperatorSubmit = document.getElementById('stm-changeoperator-input-button');
stmOperatorSubmit.onclick = aysnc () => {
    const stmOperatorAddress = document.getElementById('stm-changeoperator-input-box').value;
    
    console.log(stmOperatorAddress);

    var web3 = new web3(window.ethereum)

    const socialTradingManager = new web3.eth.contract(socialTradingManagerABI, socialTradingManagerAddress);

    await socialTradingManager.methods.updateOperator(stmOperatorAddress).send({from: ethereum.selectedAddress})
}

// Methodologist: Change Streaming Fee
const stmStreamingtSubmit = document.getElementById('stm-streamingfee-input-button');
stmStreamingSubmit.onclick = aysnc () => {
    const stmStreamingFee = document.getElementById('stm-streamingfee-input-box').value;
    
    console.log(stmStreamingFee);

    var web3 = new web3(window.ethereum)

    const socialTradingManager = new web3.eth.contract(socialTradingManagerABI, socialTradingManagerAddress);

    await socialTradingManager.methods.updateStreamingFee(stmStreamingFee).send({from: ethereum.selectedAddress})
}

// Methodologist: Change Methodologist
const stmMethodologistSubmit = document.getElementById('stm-changemethodologist-input-button');
stmMethodologistSubmit.onclick = aysnc () => {
    const stmMethodologistAddress = document.getElementById('stm-changemethodologist-input-box').value;
    
    console.log(stmMethodologistAddress);

    var web3 = new web3(window.ethereum)

    const socialTradingManager = new web3.eth.contract(socialTradingManagerABI, socialTradingManagerAddress);

    await socialTradingManager.methods.updateMethodologist(stmMethodologistAddress).send({from: ethereum.selectedAddress})
}
