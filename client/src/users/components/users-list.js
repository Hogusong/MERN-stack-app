import React from "react";

import UserItem from "./user-item";

const UsersList = props => {
  if (!props.users || props.users.length < 1) {
    return (
      <div className="center">
        <h2>Loading ...</h2>
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
