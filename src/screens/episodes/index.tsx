import React, { useState } from "react";
import styles from "../../../styles/Home.module.css";
import Head from "next/head";
import MUIDataTable, { MUIDataTableOptions } from "mui-datatables";
import { columnsCustom } from "./components/columns";
import { useEpisodes, useEpisodesDates } from "../../hooks/useEpisodes";
import { DateRange } from "@mui/lab/DateRangePicker";
import BasicDateRangePicker from "../../components/DateRangePicker";
import "dayjs/plugin/isBetween";

const Episodes = () => {
  const { episodes } = useEpisodes();
  const { dates } = useEpisodesDates();

  const [cols, setCols] = useState(columnsCustom);
  const [dateRange, setDateRange] = useState<DateRange<Date>>([null, null]);
  const [airDate, setAirDate] = useState([]);

  const options: MUIDataTableOptions = {
    selectableRows: "none",
    responsive: "standard",
    download: "false",
    filter: "false",
    print: "false",
  };

  const handleSelect: any = (value: any) => {
    setDateRange(value);
    console.log(dateRange, "rango");
  };

  const filterDates: any = () => {
    const list = dates.map((date) => {
      return date.air_date.isBetween(dateRange);
    });

    console.log(list);
  };

  return (
    <>
      <Head>
        <title>Rick and Morty | Episodios</title>
        <meta name="keywords" content="RickMorty" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Episodios</h1>
      <BasicDateRangePicker selected={dateRange} onSelect={handleSelect} />
      <br />
      <MUIDataTable
        title={"Lista de Episodios"}
        columns={cols}
        data={episodes}
        options={options}
      />
    </>
  );
};

export default Episodes;
