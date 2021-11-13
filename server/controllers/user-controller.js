const User = require("../models/user-model");
const Post = require("../models/post-model");
const sanitaze = require("../pkg/sanitazers/sanitaze");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const cloudinary = require("../cloudinary");
const validate = require("../pkg/validators/user_validator");

module.exports.post_signUpUser = async (req, res) => {
  sanitaze.clearWhiteSpace(req.body);

  try {
    await validate(req.body, "CREATE");
  } catch (error) {
    return res.status(400).send(error);
  }

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

    res.status(201).send(user);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).send(error);
    }

    return res.status(500).send(error);
  }
};

module.exports.post_loginUser = async (req, res) => {
  sanitaze.clearWhiteSpace(req.body);

  try {
    const { email, password } = req.body;

    const user = await User.login(email, password);
    if (!user) {
      return res.status(400).send("Невалиден и-мејл или лозинка");
    }
    const token = jwt.sign({ id: user._id }, process.env.USER_SECRET, {
      expiresIn: 24 * 60 * 60,
    });

    res.cookie("jwt", token, {
      path: "/",
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    res.status(200).send({
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports.get_logoutUser = (req, res) => {
  try {
    res.cookie("jwt", "", {
      maxAge: 1,
    });

    res.status(200).send({ message: "logout" });
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports.patch_updateUser = async (req, res) => {
  const userId = req.userId;
  sanitaze.clearWhiteSpace(req.body);

  try {
    await validate(req.body, "UPDATE");
  } catch (error) {
    return res.status(400).send(error);
  }

  try {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      req.body.password = hashedPassword;
    }

    const user = await User.findById(userId);

    for (const userKey in req.body) {
      user[userKey] = req.body[userKey];
    }

    await user.save();

    res.status(200).send({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      profileImg: { url: user.profileImg.url, id: user.profileImg.id },
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).send(error);
    }

    res.status(500).send(error);
  }
};

module.exports.delete_User = async (req, res) => {
  const userId = req.userId;

  try {
    const userPosts = await Post.find({ user: userId });
    let imageIds = [];
    // get only image id for cloud
    userPosts.forEach((post) => {
      post.images.forEach((img) => {
        imageIds = [...imageIds, img.publicId];
      });
    });

    // remove posts
    await Post.deleteMany({ user: userId });

    // remove images from cloud
    if (imageIds.length > 0) {
      cloudinary.api.delete_resources(imageIds, (error) => {
        if (error) {
          throw error;
        }
      });
    }

    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(400).send("Bad request");
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

module.exports.get_currentUser = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await User.findById(userId).select(
      "firstName lastName email profileImg"
    );

    if (!user) {
      return res.status(400).send("Bad request");
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.delete_profileImg = async (req, res) => {
  const userId = req.userId;
  const imgId = req.params.id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).send("Bad request");
    }

    const imgDelete = await cloudinary.uploader.destroy(imgId);

    if (imgDelete.result === "ok") {
      user.profileImg = "";
      user.profileImg.id = "";
      await user.save();
      res.status(200).send({ userImg: user.profileImg });
    } else {
      throw new Error();
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
