require("dotenv").config();
const express = require("express");
const cors = require("cors");
var cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

//import routes
const userRoutes = require("./routes/user-routes");
const postRoutes = require("./routes/post-routes");

//middleware
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

//register routes
app.use("/user", userRoutes);
app.use("/posts", postRoutes);

mongoose
  .connect("mongodb://localhost:27017/my-agent", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT} - database connected`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
