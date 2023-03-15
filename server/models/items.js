const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  img: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Item", itemSchema);
