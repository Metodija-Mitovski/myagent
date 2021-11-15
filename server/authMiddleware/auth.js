const User = require("../models/user-model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const isAuth = (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    const decoded = jwt.verify(token, process.env.USER_SECRET);

    if (!decoded.id) throw new Error();
    req.userId = decoded.id;

    next();
  } catch (err) {
    res.status(401).json("Немате авторизација");
  }
};

const confirmUpdate = async (req, res, next) => {
  const userId = req.userId;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).send("Немате авторизација");
    }

    if ("password" in req.body && !"currentPassword" in req.body) {
      return res.status(400).send("внесете лозинка");
    }

    if ("currentPassword" in req.body && "password" in req.body) {
      const checkOldPass = await bcrypt.compare(
        req.body.currentPassword,
        user.password
      );

      if (!checkOldPass) {
        return res.status(400).send("Невалидна лозинка");
      }
    }

    next();
  } catch (error) {
    res.status(500).send(error);
  }
};

const confirmDeleteAcc = async (req, res, next) => {
  const userId = req.userId;

  if (!req.body.password) {
    return res.status(400).send("внеси лозинка");
  }

  try {
    const user = await User.findById(userId);

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).send("невалидна лозинка");
    }

    next();
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  isAuth,
  confirmUpdate,
  confirmDeleteAcc,
};
