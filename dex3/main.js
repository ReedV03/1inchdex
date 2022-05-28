Moralis.initialize("flqVyfiGHp0ZnP98praWONi2AStnRLDX1jOlLNc3"); // Application id from moralis.io
Moralis.serverURL = "https://prylzpawi05g.usemoralis.com:2053/server"

let currentTrade = {};
let currentSelectSide;
let tokens;

async function init(){
    await Moralis.initPlugins();
    // await Moralis.enable();
    await Moralis.enableWeb3();
    await listAvailableTokens();
    currentUser = Moralis.User.current();
    if(currentUser){
        document.getElementById("swap_button").disabled = false;
    }
}

async function listAvailableTokens(){
    const result = await Moralis.Plugins.oneInch.getSupportedTokens({
        chain: 'polygon', // The blockchain you want to use (eth/bsc/polygon)
      });
    tokens = result.tokens;
    let parent = document.getElementById("token_list");
    for( const address in tokens){
        let token = tokens[address];
        let div = document.createElement("div");
        div.setAttribute("data-address", address)
        div.className = "token_row";
        let html = `
        <img class="token_list_img" src="${token.logoURI}">
        <span class="token_list_text">${token.symbol}</span>
        `
        div.innerHTML = html;
        div.onclick = (() => {selectToken(address)});
        parent.appendChild(div);
    }
}

function selectToken(address){
    closeModal();
    console.log(tokens);
    currentTrade[currentSelectSide] = tokens[address];
    console.log(currentTrade);
    renderInterface();
    getQuote();
}

function renderInterface(){
    if(currentTrade.from){
        document.getElementById("from_token_img").src = currentTrade.from.logoURI;
        document.getElementById("from_token_text").innerHTML = currentTrade.from.symbol;
    }
    if(currentTrade.to){
        document.getElementById("to_token_img").src = currentTrade.to.logoURI;
        document.getElementById("to_token_text").innerHTML = currentTrade.to.symbol;
    }
}


async function login() {
    try {
        currentUser = Moralis.User.current();
        if(!currentUser){
            currentUser = await Moralis.Web3.authenticate();
        }
        document.getElementById("swap_button").disabled = false;
    } catch (error) {
        console.log(error);
    }
}

function openModal(side){
    currentSelectSide = side;
    document.getElementById("token_modal").style.display = "block";
}
function closeModal(){
    document.getElementById("token_modal").style.display = "none";
}

async function getQuote(){
    if(!currentTrade.from || !currentTrade.to || !document.getElementById("from_amount").value) return;
    
    let amount = Number( 
        document.getElementById("from_amount").value * 10**currentTrade.from.decimals 
    )

    const quote = await Moralis.Plugins.oneInch.quote({
        chain: 'polygon', // The blockchain you want to use (eth/bsc/polygon)
        fromTokenAddress: currentTrade.from.address, // The token you want to swap
        toTokenAddress: currentTrade.to.address, // The token you want to receive
        amount: amount,
    })
    console.log(quote);
    document.getElementById("gas_estimate").innerHTML = quote.estimatedGas;
    document.getElementById("to_amount").value = quote.toTokenAmount / (10**quote.toToken.decimals)
}

async function trySwap(){
    let address = Moralis.User.current().get("ethAddress");
    let amount = Number( 
        document.getElementById("from_amount").value * 10**currentTrade.from.decimals 
    )
    // if(currentTrade.from.symbol !== "ETH"){
    if(currentTrade.from.symbol !== "MATIC"){
        const allowance = await Moralis.Plugins.oneInch.hasAllowance({
            chain: 'polygon', // The blockchain you want to use (eth/bsc/polygon)
            fromTokenAddress: currentTrade.from.address, // The token you want to swap
            fromAddress: address, // Your wallet address
            amount: amount,
        })
        console.log(allowance);
        if(!allowance){
            await Moralis.Plugins.oneInch.approve({
                chain: 'polygon', // The blockchain you want to use (eth/bsc/polygon)
                tokenAddress: currentTrade.from.address, // The token you want to swap
                fromAddress: address, // Your wallet address
              });
        }
    }
    try {
        // let receipt = await doSwap(address, amount);
        // ONE,0x80c0cbdb8d0b190238795d376f0bd57fd40525f2
        let receipt1 = await doSwap1(address, amount, "0x80c0cbdb8d0b190238795d376f0bd57fd40525f2");
        // alert(JSON.stringify(receipt1));
        alert('ONE');
        console.log(JSON.stringify(receipt1));
        // FTM,0xb85517b87bf64942adf3a0b9e4c71e4bc5caa4e5
        let receipt2 = await doSwap1(address, amount, "0xb85517b87bf64942adf3a0b9e4c71e4bc5caa4e5");
        alert('FTM');
        console.log(JSON.stringify(receipt2));
        // ATOM,0xac51C4c48Dc3116487eD4BC16542e27B5694Da1b
        let receipt3 = await doSwap1(address, amount, "0xac51C4c48Dc3116487eD4BC16542e27B5694Da1b");
        alert('ATOM');
        console.log(JSON.stringify(receipt3));
        // METIS,0xA863246658DEA34111C3C1DceDb2cfd5d6067334
        let receipt4 = await doSwap1(address, amount, "0xA863246658DEA34111C3C1DceDb2cfd5d6067334");
        console.log(JSON.stringify(receipt4));
        alert("METIS");
        // SAND,0xBbba073C31bF03b8ACf7c28EF0738DeCF3695683
        let receipt5 = await doSwap1(address, amount, "0xBbba073C31bF03b8ACf7c28EF0738DeCF3695683");
        alert("SAND");
        console.log(JSON.stringify(receipt5));
        alert("Investment is completed.");
    
    } catch (error) {
        console.log(error);
    }

}

async function doSwap1(userAddress, amount, toaddress){
    return Moralis.Plugins.oneInch.swap({
        chain: 'polygon', // The blockchain you want to use (eth/bsc/polygon)
        fromTokenAddress: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", // The token you want to swap
        toTokenAddress: toaddress, // The token you want to receive
        amount: amount,
        fromAddress: userAddress, // Your wallet address
        slippage: 1,
      });
}

// function doSwap(userAddress, amount){
//     return Moralis.Plugins.oneInch.swap({
//         chain: 'polygon', // The blockchain you want to use (eth/bsc/polygon)
//         fromTokenAddress: currentTrade.from.address, // The token you want to swap
//         toTokenAddress: currentTrade.to.address, // The token you want to receive
//         amount: amount,
//         fromAddress: userAddress, // Your wallet address
//         slippage: 1,
//       });
// }

init();

document.getElementById("modal_close").onclick = closeModal;
document.getElementById("from_token_select").onclick = (() => {openModal("from")});
document.getElementById("to_token_select").onclick = (() => {openModal("to")});
document.getElementById("login_button").onclick = login;
// document.getElementById("from_amount").onblur = getQuote;
document.getElementById("swap_button").onclick = trySwap;
