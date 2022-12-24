import express from "express";
import { addCartItem, deleteCartItem, getAllCartItems, updateCartItem, getCartItemById, deleteAllCartItem } from "../controllers/cartController.js";

const router = express.Router();

//GET ALL Cart Items

router.get("/getAllCartItems", getAllCartItems);

// Add Product
router.post("/addCartItem", addCartItem);

// Get Cart by ID
router.post("/getCartItemById/:id", getCartItemById);

// Update Cart
router.put("/updateCartItem/:id", updateCartItem);

// Delete Product
router.delete("/deleteCartItem/:id", deleteCartItem);

// Delete all records
router.delete("/deleteAllCartItem", deleteAllCartItem);

export default router;
