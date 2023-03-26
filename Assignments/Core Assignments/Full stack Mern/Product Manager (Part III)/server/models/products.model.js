const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      
    },
  },
  { timestamps: true }
);
// create a constructor function for our model and store in variable 'User'
const product = mongoose.model("product", ProductSchema);
module.exports = product;
