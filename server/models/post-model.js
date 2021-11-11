const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
    price: {
      type: Number,
    },
    purpose: {
      type: String,
      enum: {
        values: ["продажба", "изнајмување"],
        message: "дозволени опции:(продажба,изнајмување)",
      },
    },
    realEstateType: {
      type: String,
      enum: {
        values: ["стан", "куќа", "гарсоњера"],
        message: "дозволени опции:(стан,куќа,гарсоњера)",
      },
    },
    specs: {
      bedrooms: String,
      baths: String,
      area: Number,
      balcony: String,
      parking: Boolean,
    },
    location: {
      city: String,
      settlement: String,
      street: String,
      streetNumber: String,
    },
    mapLocation: {
      lat: Number,
      lng: Number,
    },
    contactNumber: {
      type: Number,
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
