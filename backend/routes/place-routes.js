const express = require('express');
const PLACES = require('../dummy-data/places')

const router = express.Router();

router.get('/:id', (req, res, next) => {
  const placeId = req.params.id;
  const place = PLACES.find(p => p.id === placeId);
  if (place) res.json(place);
  // handling this error directly.
  else res.status(404).json(`No place is founded with placeId: ${placeId}.`)
});

router.get('/', (req, res, next) => {
  if (PLACES.length > 0) res.json(PLACES);
  else {
    const error = new Error('No place is founded...');
    error.code = 404;
    throw error;
  }
});

router.get('/user/:id', (req, res, next) => {
  const userId = req.params.id;
  const places = PLACES.filter(p => p.creator === userId);
  if (places.length > 0) res.json(places);
  else {
    const error = new Error(`No place is founded with userId: ${userId}.`);
    error.code = 404;
    return next(error);
  }
});

module.exports = router;
