import React from "react";

import "../../css/place-list.css";
import PlaceItem from "./place-item";
import Card from "../../shared/components/UIElements/card";
import Button from "../../shared/components/FormElements/button";

const PlaceList = props => {
  if (!props.places || props.places.length < 1) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    )
  }

  return (
    <ul className="place-list">
      {props.places.map(place => <PlaceItem key={place.id} place={place}/>)}
    </ul>
  )
}

export default PlaceList;

