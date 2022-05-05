import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";
// require('dotenv').config();

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
