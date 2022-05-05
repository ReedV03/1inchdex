// import Image from "next/image";
// import Image from "next-optimized-images";
// import Logo from "./images/Web3Auth.svg";
import { useMoralis } from "react-moralis";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function SignIn() {
  const { authenticate, authError, isAuthenticating, Moralis } = useMoralis();

  const handleCustomLogin = async () => {
    await authenticate({
      provider: "web3Auth",
      clientId: "BItvnWxTZwRz3mjWxeNZ4VUutQjNkSWUdIqUoYq8fq-hKjEQmIxfTPfz16zvVCbTPutq3OlhYr3UcKQm83xK91Q",
      chainId: Moralis.Chains.POLYGON_MAINNET,
    });
  };

  return (
    <div className={styles.card}>
      {isAuthenticating && <p className={styles.green}>Authenticating</p>}
      {authError && (
        <p className={styles.error}>{JSON.stringify(authError.message)}</p>
      )}
      <div className={styles.buttonCard}>
        <button className={styles.loginButton} onClick={handleCustomLogin}>
          Login with Web3Auth
        </button>
      </div>
    </div>
  );
}
