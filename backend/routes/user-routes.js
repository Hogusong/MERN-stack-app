const express = require('express');

const ctrl = require('../controllers/ctrl-user');

const router = express.Router();

router.get('/', ctrl.getUsers);

router.patch('/login', ctrl.login);

router.post('/signup', ctrl.signup);

router.patch('/edit', ctrl.updateUser);

router.delete('/:id', ctrl.deleteUser);

module.exports = router;
