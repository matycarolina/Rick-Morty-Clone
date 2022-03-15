import React from "react";
import style from "../../styles/Details.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSingleCharacter } from "../hooks/useCharacters";

const CharacterDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const { character } = useSingleCharacter(id as string);

  return (
    <div className={style.profile_card_container}>
      <div className={style.profile_image_container}>
        <div>
          <img
            src={character.image}
            alt={character.name}
          />
        </div>
      </div>
      <div className={style.profile_description}>
        <p>
          {character.name}
        </p>
      </div>
      <div className={style.profile_stats}>
        <div>
          <p>Estado: {character.status}</p>
        </div>
        <div>
          <p>Especie: {character.species}</p>
        </div>
        <div>
          <p>Genero: {character.gender}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
