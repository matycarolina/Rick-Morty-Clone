import React from "react";
import styles from "../../../styles/Home.module.css";
import Head from "next/head";
import MUIDataTable, { MUIDataTableOptions } from "mui-datatables";
import { columnsCustom } from "../locations/components/columns";
import { useLocations } from "../../hooks/useLocations";

const Episodes = () => {
  const { locations } = useLocations();

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
        title={"Lista de Personajes"}
        columns={columnsCustom}
        data={locations}
        options={options}
      />
    </>
  );
};

export default Episodes;
