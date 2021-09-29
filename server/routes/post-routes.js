const express = require("express");
const router = express.Router();
const { isAuth } = require("../authMiddleware/auth");

const postController = require("../controllers/post-controller");

// add new post
router.post("/newpost", isAuth, postController.post_addNewPost);

//get my-posts
router.get("/my-posts", isAuth, postController.get_MyPosts);

// add images
router.patch("/images/:id", isAuth, postController.patch_addImages);

// add to wish list
router.post("/wish-list/:id", isAuth, postController.post_addToWishList);

// get  wish list
router.get("/wish-list/:id", isAuth, postController.get_WishList);

//get latest posts
router.get("/latest", postController.get_latestPosts);

//get related posts
router.get("/related", postController.get_RelatedPosts);

// delete post
router.delete("/:id", isAuth, postController.delete_Post);

// get single post
router.get("/:id", postController.get_singlePost);

// update post
// get multiple posts
//delete post

module.exports = router;
