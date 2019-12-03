import React from "react";
import { Link } from "react-router-dom";

import Card from "../../shared/components/UIElements/card";
import Avatar from "../../shared/components/UIElements/avatar";

const UserItem = props => {
  if (!props.user) {
    return (
      <div className="center">
        <Card><h2>User is not available!</h2></Card>
      </div>
    );
  }
  const user = props.user;

  return (
    <li className="user-item">
      <Card className="user-content">
        <Link to={`/${user.id}/places`}>
          <div className="user-image">
            <Avatar image={user.image} alt={user.name} />
          </div>
          <div className="user-info">
            <h2>{user.name}</h2>
            <h3>
              {user.places} {user.places > 1 ? "places" : "place"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
