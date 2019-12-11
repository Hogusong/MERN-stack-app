const express = require("express");
const { check } = require("express-validator");

const ctrl = require("../controllers/ctrl-place");

const router = express.Router();

router.get("/:id", ctrl.getPlaceById);

router.get("/", ctrl.getAllPlaces);

router.get("/user/:id", ctrl.getPlacesByUserId);

router.post(
  "/new",
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }),
    check("address").notEmpty()
  ],
  ctrl.createPlace
);

router.patch(
  "/edit",
  [
    check("title").notEmpty(),
    check("description").isLength({ min: 5 }),
    check("address").not().isEmpty()
  ],
  ctrl.updatePlace
);

router.delete("/:id", ctrl.deletePlace);

module.exports = router;
