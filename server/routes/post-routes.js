const express = require("express");
const router = express.Router();
const { isAuth } = require("../authMiddleware/auth");

const postController = require("../controllers/post-controller");

// add new post
router.post("/newpost", isAuth, postController.post_addNewPost);

// add images
router.patch("/images/:id", isAuth, postController.patch_addImages);

// update post
// get post
// get multiple posts
//delete post

module.exports = router;
