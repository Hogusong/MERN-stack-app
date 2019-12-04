import React, { useState } from "react";

import Card from "../../shared/components/UIElements/card";
import Button from "../../shared/components/FormElements/button";
import Map from "../../shared/components/UIElements/map";
import Modal from "../../shared/components/UIElements/modal";

const PlaceItem = props => {
  const place = props.place;

  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        header={place.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-action"
        footer={<Button onClick={closeMapHandler}>Close</Button>}
      >
        <div className="map-container">
          <Map center={place.location} zoom={16}/>
        </div>
      </Modal>
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
            <Button inverse onClick={openMapHandler}>
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
