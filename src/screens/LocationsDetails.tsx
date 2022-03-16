import React from "react";
import style from "../../styles/Details.module.css";
import { useRouter } from "next/router";
import { useSingleLocation } from "../hooks/useLocations";

const LocationDetails = () => {
  const router = useRouter();
  const { locationId } = router.query;

  const { location } = useSingleLocation(locationId as string);

  return (
    <div className={style.profile_card_container}>
      <div className={style.profile_description}>
        <p>
          {location.name}
        </p>
      </div>
      <div className={style.profile_stats}>
        <div>
          <p>Tipo: {location.type}</p>
        </div>
        <div>
          <p>Dimension: {location.dimension}</p>
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
