const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
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
    price: {
      type: String,
    },
    purpose: {
      type: String,
      required: ["Намена е задолжително поле"],
    },
    realEstateType: {
      type: String,
      required: ["Тип е задолжително поле"],
    },
    specs: {
      bedrooms: String,
      baths: String,
      area: String,
      balcony: String,
      parking: Boolean,
    },
    location: {
      city: {
        type: String,
        required: true,
      },
      settlement: String,
      street: String,
      streetNumber: String,
      mapLocation: {
        lat: Number,
        lng: Number,
      },
    },
    contactNumber: {
      type: String,
      required: ["Контакт број е задолжително поле"],
    },
    images: [
      {
        imgUrl: String,
        publicId: String,
      },
    ],
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
