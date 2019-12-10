const express = require('express');

const ctrl = require('../controllers/ctrl-place');

const router = express.Router();

router.get('/:id', ctrl.getPlaceById);

router.get('/', ctrl.getAllPlaces);

router.get('/user/:id', ctrl.getPlacesByUserId);

module.exports = router;
