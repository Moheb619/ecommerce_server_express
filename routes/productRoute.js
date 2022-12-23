import express from "express";
import { addProduct, getAllProducts, getProductById } from "./../controllers/productController.js";
const router = express.Router();

//GET ALL Product

router.get("/getAllProducts", getAllProducts);

// Get Product By Short Code
router.get("/getProductById/:id", getProductById);

// Add Product
router.post("/addProduct", addProduct);

export default router;
