const Post = require("../models/post-model");
const User = require("../models/user-model");
const { postError } = require("../errors/error-handler");

module.exports.post_addNewPost = async (req, res) => {
  const newPost = req.body;
  newPost.userId = req.userId;

  try {
    await Post.create(newPost);
    res.status(200).json(newPost);
  } catch (error) {
    const errorData = postError(error);
    res.status(400).json(errorData);
  }
};
