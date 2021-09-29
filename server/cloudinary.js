const dotenv = require("dotenv");
dotenv.config();

console.log(process.env.CLOUD_NAME);
console.log(process.env.USER_SECRET);
const path = require("path");
const cloudinary = require("cloudinary").v2;

// configure cloudinary

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

module.exports = cloudinary;
