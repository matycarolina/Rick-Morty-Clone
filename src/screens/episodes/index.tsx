import React from "react";
import styles from "../../../styles/Home.module.css";
import Head from "next/head";
import MUIDataTable, { MUIDataTableOptions } from "mui-datatables";
import { columnsCustom } from "./components/columns"
import { useEpisodes } from "../../hooks/useEpisodes";

const Episodes = () => {
  const { episodes } = useEpisodes();

  const options: MUIDataTableOptions = {
    selectableRows: "none",
    responsive: "standard",
    download: "false",
    filter: "false",
    print: "false",
  };

  return (
    <>
      <Head>
        <title>Rick and Morty | Episodios</title>
        <meta name="keywords" content="RickMorty" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Episodios</h1>
      <MUIDataTable
        title={"Lista de Episodios"}
        columns={columnsCustom}
        data={episodes}
        options={options}
      />
    </>
  );
};

export default Episodes;
