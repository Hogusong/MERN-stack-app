const uuid = require("uuid/v4");
const PLACES = require("../dummy-data/places");
const HttpError = require("../models/http-error");

let placesData = [...PLACES];

const getPlaceById = (req, res, next) => {
  const placeId = req.params.id;
  const place = placesData.find(p => p.id === placeId);
  if (place) res.json(place);
  // handling this error directly.
  else res.status(404).json(`No place is founded with placeId: ${placeId}.`);
};

const getAllPlaces = (req, res, next) => {
  if (placesData.length > 0) res.json(placesData);
  else {
    throw new HttpError(404, "No place is founded...");
  }
};

const getPlacesByUserId = (req, res, next) => {
  const userId = req.params.id;
  const places = placesData.filter(p => p.creator === userId);
  if (places.length > 0) res.json(places);
  else {
    return next(
      new HttpError(404, `No place is founded with userId: ${userId}.`)
    );
  }
};

const createPlace = (req, res, next) => {
  const { title, description, imageUrl, location, address, creator } = req.body;
  const newPlace = {
    id: uuid(),
    title,
    description,
    imageUrl,
    location,
    address,
    creator
  };
  placesData.push(newPlace);
  res.status(200).json(placesData);
};

const updatePlace = (req, res, next) => {
  const { id, title, description, imageUrl, location, address, creator } = req.body;
  const index = placesData.findIndex(place => place.id === id);
  if (index < 0) {
    throw new HttpError(404, `Can't find place id: ${id}. Try again...`)
  }
  const newPlace = {
    id,
    title,
    description,
    imageUrl,
    location,
    address,
    creator
  };
  placesData[index] = newPlace;
  res.status(200).json(placesData[index]);
};

const deletePlace = (req, res, next) => {
  const placeId = req.params.id;
  const index = placesData.findIndex(p => p.id === placeId);
  if (index < 0) {
    throw new HttpError(404, `Can't find place id: ${id}. Try again...`)
  }
  placesData.splice(index, 1);
  res.status(200).json(placesData);
};

module.exports = {
  getPlaceById,
  getAllPlaces,
  getPlacesByUserId,
  createPlace,
  updatePlace,
  deletePlace
};
