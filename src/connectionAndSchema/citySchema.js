const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema(
  {
    city: { type: String,required:true, unique: true },
  }
);

const cityModel = mongoose.model("citys", citySchema);
module.exports = cityModel;
