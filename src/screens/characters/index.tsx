import React from "react";
import styles from "../../../styles/Modules.module.css";
import Head from "next/head";
import { useCharacters } from "../../hooks/useCharacters";
import MUIDataTable, {
  MUIDataTableOptions} from "mui-datatables";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "reactstrap";
import { columnsCustom } from "./components/columns";

const Characters = () => {
  const { characters } = useCharacters();

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
        <title>Rick and Morty | Personajes</title>
        <meta name="keywords" content="RickMorty" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Personajes</h1>
      <div>
        <Card className="shadow-none border-0 mb-0 rounded-0">
          <div>
            <MUIDataTable
              title={"Lista de Personajes"}
              columns={columnsCustom}
              data={characters}
              options={options}
            />
          </div>
        </Card>
      </div>
    </>
  );
};

export default Characters;
