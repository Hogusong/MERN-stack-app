import React from "react";

import UsersLIst from "../components/users-list";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "John Smith",
      image:
        "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      places: 3
    },
    {
      id: "u2",
      name: "Jully Williams",
      image:
        "https://image.shutterstock.com/image-photo/avatar-woman-magical-forest-600w-308973533.jpg",
      places: 1
    },
    {
      id: "u3",
      name: "Michael Jordan",
      image:
        "https://cdn.pixabay.com/photo/2018/05/10/12/49/mystery-3387502_1280.jpg",
      places: 1
    },
    {
      id: "u4",
      name: "James Na",
      image:
        "https://cdn.pixabay.com/photo/2017/10/01/08/40/dusshera-2804586_1280.jpg",
      places: 5
    },
    {
      id: "u5",
      name: "Jedi Willer",
      image:
        "https://cdn.pixabay.com/photo/2015/05/15/18/29/avatar-769056_1280.jpg",
      places: 1
    }
  ];

  return <UsersLIst users={USERS}/>
};

export default Users;
