import React from "react";
import styles from "../../../styles/Modules.module.css";
import Head from "next/head";

const Episodes = () => {
  return (
    <>
      <Head>
        <title>Rick and Morty | Episodios</title>
        <meta name="keywords" content="RickMorty" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Episodios</h1>
    </>
  );
};

export default Episodes;
