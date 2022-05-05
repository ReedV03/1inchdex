# Quick Run

Module not found: Can't resolve 'magic-sdk'
```
yarn add magic-sdk@7.0.0 @walletconnect/web3-provider @web3auth/web3auth
yarn add magic-sdk@7.0.0 @web3auth/web3auth
```

ReactMoralisError: Provide a "appId" provided to <MoralisProvider>

Need to update correct serverUrl and appId values in .env

```
cat << EOF > pages/_app.js
import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider 
       serverUrl = {process.env.NEXT_PUBLIC_MORALIS_SERVER_URL}
       appId = {process.env.NEXT_PUBLIC_MORALIS_APPLICATION_ID}

    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
EOF
```

"\"clientId\" not provided, please provide clientId"

Get clientId from  [Web3Auth Client ID](https://dashboard.web3auth.io/home/web3auth)

```
      clientId: "BItvnWxTZwRz3mjWxeNZ4VUutQjNkSWUdIqUoYq8fq-hKjEQmIxfTPfz16zvVCbTPutq3OlhYr3UcKQm83xK91Q"
```

# Deploy on Moralis

Please update moralisApiKey and  moralisApiSecret into `.env`.

```
❯ yarn build && yarn export
yarn run v1.22.17
$ next build
info  - Loaded env from .env
...
...

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)

✨  Done in 18.71s.
yarn run v1.22.17
$ next export
...
...
info  - Copying "public" directory
info  - Exporting (2/2)
Export successful. Files written to "out"

❯ moralis-admin-cli deploy -p out
Following servers were found:
(0) MF-1
What server do you want to connect to?: 0
Deployed successfully!
Site is available at: https://prylzpawi05g.usemoralis.com
```

More about [moralis-admin-cli](https://docs.moralis.io/moralis-dapp/tools/moralis-admin-cli), which will describe about how to  deploy your dApp to be hosted on Moralis using the deploy command.
