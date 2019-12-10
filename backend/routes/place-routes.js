const express = require('express');

const ctrl = require('../controllers/ctrl-place');

const router = express.Router();

router.get('/:id', ctrl.getPlace);

router.get('/', ctrl.getAllPlaces);

router.get('/user/:id', ctrl.getUserPlaces);

module.exports = router;
