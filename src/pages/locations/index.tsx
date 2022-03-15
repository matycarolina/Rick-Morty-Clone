import React from "react";
import styles from "../../../styles/Modules.module.css";
import Head from "next/head";

const Locations = () => {
  return (
    <>
      <Head>
        <title>Rick and Morty | Ubicaciones</title>
        <meta name="keywords" content="RickMorty" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Ubicaciones</h1>
    </>
  );
};

export default Locations;
