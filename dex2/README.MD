# 1inch DEX - Using multiple file (latest code)

[Source Code by Moralis](https://github.com/MoralisWeb3/demo-apps/tree/6fdf394f69262866318d4708975e772805cd738e/dex-tutorial)
[How to Create a DEX in 5 Steps](https://moralis.io/how-to-create-a-dex-in-5-steps/)


Updated code to work for Polygon chain
Changed "Moralis.enable()" ===> Moralis.enableWeb3()
Changed current trade symbol from "ETH" to "MATIC": `if(currentTrade.from.symbol !== "MATIC")`
