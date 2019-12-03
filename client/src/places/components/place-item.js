import React from "react";

import Card from "../../shared/components/UIElements/card";

const PlaceItem = props => {
  return (
      <li className="place-item">
        <Card className="place-content">
          <div className="place-image">
            Image of the place
          </div>
          <div className="place-info">
            Info. of the place
          </div>
          <div className="place-actions">
            <button>View on Map</button>
            <button>EDIT</button>
            <button>DELETE</button>
          </div>
        </Card>
      </li>
  );
};

export default PlaceItem;
