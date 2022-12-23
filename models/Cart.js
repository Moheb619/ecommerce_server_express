import mongoose from "mongoose";
const CartSchema = new mongoose.Schema({
  product_id: {
    type: String,
    required: true,
  },
  product_quantity: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("carts", CartSchema);
