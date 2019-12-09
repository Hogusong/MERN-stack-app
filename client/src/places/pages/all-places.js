import React from "react";

import AllPlaceList from "../components/all-place-list";
import PLACES from "../../shared/dummy-data/places";
import Card from "../../shared/components/UIElements/card";
import Button from "../../shared/components/FormElements/button";

const AllPlaces = () => {
  if (PLACES.length < 1) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    )
  }

  return <AllPlaceList places={PLACES} />
}

export default AllPlaces;