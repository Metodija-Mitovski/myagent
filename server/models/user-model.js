const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      maxLength: [15, "Максималниот број на карактери е 15"],
      required: true,
    },
    lastName: {
      type: String,
      maxLength: [15, "Максималниот број на карактери е 15"],
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [isEmail, "Внесете валидна и-мејл адреса"],
    },
    profileImg: {
      url: { type: String, default: "" },
      id: { type: String },
    },
    password: {
      type: String,
      required: true,
      minLength: [8, "Лозинката мора да содржи најмалку 8 карактери"],
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
    if (isCorrectPassword) return user;
    throw new Error("не валиден и-мејл или лозинка");
  }

  throw new Error("не валиден и-мејл или лозинка");
};

module.exports = mongoose.model("User", userSchema);
