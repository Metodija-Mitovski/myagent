const express = require("express");
const router = express.Router();
const { isAuth } = require("../authMiddleware/auth");

const postController = require("../controllers/post-controller");

// add new post
router.post("/newpost", isAuth, postController.post_addNewPost);

// update post
// get post
// get multiple posts
//delete post

module.exports = router;
