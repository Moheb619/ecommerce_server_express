import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";
import compression from "compression";

// import routes start
import productRoute from "./routes/productRoute.js";
import cartRoute from "./routes/cartRoute.js";
import indexRoute from "./routes/indexRoute.js";
// import routes end

// Initialize express to app
const app = express();

// Config environment
dotenv.config();
// mongoose.set("strictQuery", true);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

//middlewares use start
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression());
//middlewares use end

app.use(express.static(path.join(__dirname, "public")));

// All routes start
app.use("/", indexRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
// All routes end

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(5000, () => {
  connect();
  console.log("Connected to backend.");
});
