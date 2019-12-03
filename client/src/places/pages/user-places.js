import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/place-list";

const DUMMY_PLACES = [
  { 
    id: 'p1', title: 'Empire State Building',  description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/500px-Empire_State_Building_%28aerial_view%29.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: { lat: 40.7484405, lng: -73.9878584 },
    creator: 'u1'
  },
  { 
    id: 'p2', title: 'Twin Tower',  description: 'A Part of the World Trade Center in Manhattan!',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/World_Trade_Center%2C_New_York_City_-_aerial_view_%28March_2001%29.jpg/800px-World_Trade_Center%2C_New_York_City_-_aerial_view_%28March_2001%29.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: { lat: 40.463677, lng: -74.387969 },
    creator: 'u2'
  }
];

const UserPlaces = () => {
  const id = useParams().id;

  return <PlaceList places={DUMMY_PLACES.filter(P => P.creator === id)}/>;
};

export default UserPlaces;
