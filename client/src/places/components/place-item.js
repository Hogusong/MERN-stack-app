import React from "react";

import Card from "../../shared/components/UIElements/card";
import Button from "../../shared/components/FormElements/button";

const PlaceItem = props => {
  const place = props.place;

  return (
    <React.Fragment>
      <li className="place-item">
        <Card className="place-content">
          <div className="place-image">
            <img src={place.imageUrl} alt={place.title} />
          </div>
          <div className="place-info">
            <h2>{place.title}</h2>
            <h3>{place.address}</h3>
            <p>{place.description}</p>
          </div>
          <div className="place-actions">
            <Button inverse>
              View On Map
            </Button>
            <Button to={`/places/edit/${place.id}`} inverse>
              EDIT
            </Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
