var mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
  },
});

export default mongoose.model("Product", ProductSchema);
