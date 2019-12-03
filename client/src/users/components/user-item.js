import React from "react";

const UserItem = props => {
  if (!props.user) return <h2>User is not available!</h2>;
  const user = props.user;

  return (
    <li className="user-item">
      <h2>{user.name}</h2>
    </li>
  );
};

export default UserItem;
