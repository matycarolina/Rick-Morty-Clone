import { useState, useEffect } from "react";
import { getEpisodesService, getSingleEpisodeService } from "../services/episodeServices";

export const useEpisodes = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const getEpisodes = async () => {
      const { data } = await getEpisodesService();
      console.log(data);
      setEpisodes(data);
    };
    getEpisodes();
  }, []);
  return { episodes };
};

export const useSingleEpisode = (episodeId: string) => {
  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    const getSingleEpisode = async () => {
      const { data } = await getSingleEpisodeService( episodeId );
      console.log(data);
      setEpisode(data);
    };
    getSingleEpisode();
  }, []);
  return { episode };
};
