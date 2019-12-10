const express = require('express');

const ctrl = require('../controllers/ctrl-place');

const router = express.Router();

router.get('/:id', ctrl.getPlaceById);

router.get('/', ctrl.getAllPlaces);

router.get('/user/:id', ctrl.getPlacesByUserId);

router.post('/new', ctrl.createPlace);

router.post('/edit', ctrl.updatePlace);

module.exports = router;
