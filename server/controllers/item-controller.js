const Item = require("../models/items");

const getItems = async (req, res, next) => {
  const itemId = req.params.itemId;
  let item;
  try {
    item = await Item.findById(itemId);
  } catch (err) {
    console.log("Something got wrong");
  }
};

exports.getItems = getItems;
