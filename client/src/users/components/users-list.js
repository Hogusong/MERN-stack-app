import React from "react";

import "../../css/users-list.css";
import UserItem from "./user-item";
import Card from "../../shared/components/UIElements/card";

const UsersList = props => {
  if (!props.users || props.users.length < 1) {
    return (
      <div className="center">
        <Card><h2>Loading ...</h2></Card>
      </div>
    );
  }
  return (
    <ul className="users-list">
      {props.users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UsersList;
