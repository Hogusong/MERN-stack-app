import React, { useState } from "react";

import "../../css/all-place-list.css";
import PlaceItem from "./place-item";
import Card from "../../shared/components/UIElements/card";
import Button from "../../shared/components/FormElements/button";
import Avatar from "../../shared/components/UIElements/avatar";

const AllPlaceList = props => {
  const [showDetail, setShowDetail] = useState(false);
  const [place, setPlace] = useState(null);

  if (!props.places || props.places.length < 1) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    );
  }

  const showInBig = place => {
    setShowDetail(true);
    setPlace(place);
  };

  const markup = props.places.map(place => {
    return (
      <li className="place-small-item" key={place.id}>
        <Card className="place-small-item__content">
          <div className="detail" onClick={() => showInBig(place)}>
            <div className="place-small-item__image">
              <Avatar image={place.imageUrl} alt={place.title} />
            </div>
            <div className="place-small-item__info">
              <h3>{place.title}</h3>
              <h4>{place.address}</h4>
            </div>
          </div>
        </Card>
      </li>
    );
  });

  return (
    <ul className="places-list">
      {!showDetail ? (
        markup
      ) : (
        <PlaceItem
          key={place.id}
          place={place}
          fromAllPlaces={true}
          onClose={() => setShowDetail(false)}
        />
      )}
    </ul>
  );
};

export default AllPlaceList;
