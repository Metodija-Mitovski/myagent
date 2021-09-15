const User = require("../models/user-model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const errorHandler = require("../errors/error-handler");

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
  const updateData = {};
  for (key in req.body) {
    updateData[key] = req.body[key];
  }

  try {
    const user = await User.findById(userId);
    if (!user) throw new Error("Грешка");

    if ("currentPassword" in updateData && "newPassword" in updateData) {
      const checkOldPass = await bcrypt.compare(
        updateData.currentPassword,
        user.password
      );

      if (!checkOldPass) throw new Error("Невалиден пасворд");
      if (req.body.newPassword.length < 8) {
        throw new Error("Пасвордот мора да содржи најмалку 8 карактери");
      }
      delete updateData.currentPassword;
    }

    req.body = updateData;
    next();
  } catch (error) {
    const errData = errorHandler.userError(error);
    res.status(400).json(errData);
  }
};

const confirmDeleteAcc = async (req, res, next) => {
  const userId = req.userId;

  if (!req.params.password) throw new Error("Невалиден пасворд");

  try {
    const user = await User.findById(userId);

    const isPasswordCorrect = await bcrypt.compare(
      req.params.password,
      user.password
    );

    if (!isPasswordCorrect) {
      throw new Error("Невалиден пасворд");
    }

    next();
  } catch (error) {
    const errData = errorHandler.userError(error);
    res.status(400).json(errData);
  }
};

module.exports = {
  isAuth,
  confirmUpdate,
  confirmDeleteAcc,
};
