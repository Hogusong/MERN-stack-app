import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/place-list";
import PLACES from "../../shared/dummy-data/places";

const UserPlaces = () => {
  const id = useParams().id;
  return <PlaceList places={PLACES.filter(P => P.creator === id)}/>
}

export default UserPlaces;
