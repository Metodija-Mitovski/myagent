const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");
const {
  isAuth,
  confirmUpdate,
  confirmDeleteAcc,
} = require("../authMiddleware/auth");

//create sign-up user
router.post("/signup", userController.post_signUpUser);

//login user
router.post("/login", userController.post_loginUser);

//get current user
router.get("/current", isAuth, userController.get_currentUser);

//logout user
router.get("/logout", isAuth, userController.get_logoutUser);

//update user
router.patch("/update", isAuth, confirmUpdate, userController.patch_updateUser);

//delete user
router.delete("/delete/", isAuth, confirmDeleteAcc, userController.delete_User);

//delete profile img
router.delete("/profile-img/:id", isAuth, userController.delete_profileImg);

module.exports = router;
