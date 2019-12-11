const express = require("express");
const { check } = require("express-validator");

const ctrl = require("../controllers/ctrl-user");

const router = express.Router();

router.get("/", ctrl.getUsers);

router.patch("/login", ctrl.login);

router.post(
  "/signup",
  [
    check("name").notEmpty(),
    check("email").notEmpty(),
    check("password").isLength(4)
  ],
  ctrl.signup
);

router.patch("/edit",
  [
    check("name").notEmpty(),
    check("email").notEmpty(),
    check("password").isLength(4)
  ], 
  ctrl.updateUser
);

router.delete("/:id", ctrl.deleteUser);

module.exports = router;
