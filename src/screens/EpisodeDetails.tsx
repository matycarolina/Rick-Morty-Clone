import React from "react";
import style from "../../styles/Details.module.css";
import { useRouter } from "next/router";
import { useSingleEpisode } from "../hooks/useEpisodes";

const EpisodeDetails = () => {
  const router = useRouter();
  const { episodeId } = router.query;

  const { episode } = useSingleEpisode(episodeId as string);

  return (
    <div className={style.profile_card_container}>
      <div className={style.profile_description}>
        <p>
          {episode.name}
        </p>
      </div>
      <div className={style.profile_stats}>
        <div>
          <p>Fecha de Emision: {episode.air_date}</p>
        </div>
        <div>
          <p>Episodio: {episode.episode}</p>
        </div>
      </div>
    </div>
  );
};

export default EpisodeDetails;
