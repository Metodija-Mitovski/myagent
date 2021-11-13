const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    profileImg: {
      url: { type: String, default: "" },
      id: { type: String },
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });

  if (user) {
    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (isCorrectPassword) {
      return user;
    } else {
      return false;
    }
  }
  return false
};

module.exports = mongoose.model("User", userSchema);
