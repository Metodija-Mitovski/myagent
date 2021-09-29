const User = require("../models/user-model");
const errorHandler = require("../errors/error-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const cloudinary = require("../cloudinary");

module.exports.post_signUpUser = async (req, res) => {
  try {
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    const user = new User(req.body);
    await user.save();

    if (!user) {
      throw new Error();
    }

    res.status(201).json(user);
  } catch (error) {
    const errData = errorHandler.userError(error);
    res.status(400).json(errData);
  }
};

module.exports.post_loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      throw new Error("сите полиња мора да бидат пополнети");
    }

    const user = await User.login(email, password);
    const token = jwt.sign({ id: user._id }, process.env.USER_SECRET, {
      expiresIn: 24 * 60 * 60,
    });

    res.cookie("jwt", token, {
      path: "/",
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    res.status(200).json({
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });
  } catch (error) {
    const errData = errorHandler.userError(error);
    res.status(400).json(errData);
  }
};

module.exports.get_logoutUser = (req, res) => {
  res.cookie("jwt", "", {
    maxAge: 1,
  });

  res.status(200).json({ message: "logout" });
};

module.exports.patch_updateUser = async (req, res) => {
  const userId = req.userId;

  try {
    if (req.body.newPassword) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.newPassword, salt);
      req.body.password = hashedPassword;
    }

    const user = await User.findById(userId);

    for (const userKey in req.body) {
      user[userKey] = req.body[userKey];
    }

    await user.save();

    res.status(200).json({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      profileImg: { url: user.profileImg.url, id: user.profileImg.id },
    });
  } catch (error) {
    console.log(error);
    const errData = errorHandler.userError(error);
    res.status(400).json(errData);
  }
};

module.exports.delete_User = async (req, res) => {
  const userId = req.userId;

  try {
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) throw new Error("Грешка");
    res.status(200).json("Профилот е успешно деактивиран");
  } catch (error) {
    const errData = errorHandler.userError(error);
    res.status(400).json(errData);
  }
};

module.exports.get_currentUser = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await User.findById(userId).select(
      "firstName lastName email profileImg"
    );

    if (!user) throw new Error();
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports.delete_profileImg = async (req, res) => {
  const userId = req.userId;
  const imgId = req.params.id;

  try {
    const user = await User.findById(userId);

    const imgDelete = await cloudinary.uploader.destroy(imgId);

    if (imgDelete.result === "ok") {
      user.profileImg = "";
      user.profileImg.id = "";
      await user.save();
      res.status(200).send({ userImg: user.profileImg });
    } else {
      throw new Error("Грешка");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};
