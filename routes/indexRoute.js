import express from "express";
import { getHomePage } from "../controllers/indexController.js";

const router = express.Router();

//GET ALL Cart Items

router.get("", getHomePage);

export default router;
