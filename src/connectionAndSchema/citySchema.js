const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema(
  {
    city: { type: String, unique: true },
    favorite: { type: String },
  }
);

const cityModel = mongoose.model("citys", citySchema);
module.exports = cityModel;
