const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  purpose: {
    type: String,
    required: ["Намена е задолжително поле"],
  },
  realEstateType: {
    type: String,
    required: ["Тип е задолжително поле"],
  },
  price: String,
  title: {
    type: String,
    required: ["Наслов е задолжително поле"],
    maxLength: [30, "Полето може да содржи максимум 30 карактери"],
  },
  shortDesc: {
    type: String,
    required: ["Краток опис е задолжително поле"],
    maxLength: [150, "Полето може да содржи максимум 150 карактери"],
  },
  desc: {
    type: String,
    required: ["Опис е задолжително поле"],
    maxLength: [1000, "Полето може да содржи максимум 1000 карактери"],
  },
  specs: {
    bedrooms: String,
    baths: String,
    area: String,
  },
  location: {
    city: String,
    settlement: String,
    street: String,
  },
  contactNumber: String,
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Post", postSchema);
