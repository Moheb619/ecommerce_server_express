var express = require("express");
var dotenv = require("dotenv");
var mongoose = require("mongoose");
var cookieParser = require("cookie-parser");
var cors = require("cors");
var bodyParser = require("body-parser");

// import routes start
// var authRoute = require("./routes/auth.js");
// import routes end

// Initialize express to app
const app = express();

// Confit environment
dotenv.config();
mongoose.set("strictQuery", true);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
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
//middlewares use end

// All routes start
// app.use("/api/auth", authRoute);
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

app.listen(8800, () => {
  connect();
  console.log("Connected to backend.");
});
