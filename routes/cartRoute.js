import express from "express";
import { addCartItem, deleteCartItem, getAllCartItems } from "../controllers/cartController.js";

const router = express.Router();

//GET ALL Cart Items

router.get("/getAllCartItems", getAllCartItems);

// Add Product
router.post("/addCartItem", addCartItem);

// Delete Product
router.delete("/deleteCartItem/:id", deleteCartItem);

export default router;
