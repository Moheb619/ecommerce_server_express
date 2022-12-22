import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  short_code: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  is_best_achieved: {
    type: Boolean,
    required: true,
  },
  created_date: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("products", ProductSchema);
