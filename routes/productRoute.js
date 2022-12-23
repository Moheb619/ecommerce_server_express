import express from "express";
import { addProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "./../controllers/productController.js";
const router = express.Router();

//GET ALL Product

router.get("/getAllProducts", getAllProducts);

// Get Product By Short Code
router.get("/getProductById/:id", getProductById);

// Add Product
router.post("/addProduct", addProduct);

// Update Product
router.put("/updateProduct/:id", updateProduct);

// Delete Product
router.delete("/deleteProduct/:id", deleteProduct);

export default router;
