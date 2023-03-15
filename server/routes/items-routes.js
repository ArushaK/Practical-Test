const express = require("express");
const ItemController = require("../controllers/item-controller");

const router = express.Router();

router.get("/:item", ItemController.getItems);

module.exports = router;
