import express from "express";
import { getAllProducts, getProductById } from "./../controllers/productController.js";
const router = express.Router();

//GET ALL Product

router.get("/getAllProducts", getAllProducts);

// Get Product By Short Code
router.get("/getProductById/:id", getProductById);

export default router;
