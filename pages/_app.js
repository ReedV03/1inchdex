import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";
// require('dotenv').config();

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider 
       serverUrl = 'https://9kvh9gu87jlu.usemoralis.com:2053/server'
       appId = '6BnusGi6mCQ03ihgnNdlaGeKpuqXbG3UL2QptvOD'
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
