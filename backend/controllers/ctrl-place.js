const PLACES = require('../dummy-data/places')
const HttpError = require('../models/http-error');

const getPlace = (req, res, next) => {
  const placeId = req.params.id;
  const place = PLACES.find(p => p.id === placeId);
  if (place) res.json(place);
  // handling this error directly.
  else res.status(404).json(`No place is founded with placeId: ${placeId}.`)
};

const getAllPlaces = (req, res, next) => {
  if (PLACES.length > 0) res.json(PLACES);
  else {
    throw new HttpError(404, 'No place is founded...');
  }
};

const getUserPlaces = (req, res, next) => {
  const userId = req.params.id;
  const places = PLACES.filter(p => p.creator === userId);
  if (places.length > 0) res.json(places);
  else {
    return next(new HttpError(404, `No place is founded with userId: ${userId}.`));
  }
}

module.exports = { getPlace, getAllPlaces, getUserPlaces };