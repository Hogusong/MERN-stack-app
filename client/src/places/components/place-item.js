import React, { useState, useContext } from "react";

import Card from "../../shared/components/UIElements/card";
import Button from "../../shared/components/FormElements/button";
import Map from "../../shared/components/UIElements/map";
import Modal from "../../shared/components/UIElements/modal";
import { AuthContext } from "../../shared/context/auth-context";

const PlaceItem = props => {
  const auth = useContext(AuthContext);
  const place = props.place;

  const [showMap, setShowMap] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);
  const openConfirmHandler = () => setShowConfirm(true);
  const closeConfirmHandler = () => setShowConfirm(false);

  const deletePlace = () => {
    console.log("deleted...");
    setShowConfirm(false);
  };

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
          <Map center={place.location} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={showConfirm}
        header="Confirm to Delete"
        contentClass="place-item__modal-delete"
        footerClass="place-item__modal-action"
        footer={
          <React.Fragment>
            <div className="center">
              <Button danger onClick={deletePlace}>
                Confirm
              </Button>
              <Button inverse onClick={closeConfirmHandler}>
                Cancel
              </Button>
            </div>
          </React.Fragment>
        }
      >
        <p className="center">Are you sure to delete '{place.title}'?</p>
        <p className="center">
          {" "}
          Please note that it can't be undone thereafter.
        </p>
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
            {auth.userId === place.creator && (
              <Button to={`/places/edit/${place.id}`} inverse>
                EDIT
              </Button>
            )}
            {auth.userId === place.creator && (
              <Button danger onClick={openConfirmHandler}>
                DELETE
              </Button>
            )}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
