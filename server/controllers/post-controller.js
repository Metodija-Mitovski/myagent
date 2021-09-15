const Post = require("../models/post-model");
const User = require("../models/user-model");
const { postError } = require("../errors/error-handler");

module.exports.post_addNewPost = async (req, res) => {
  const newPost = req.body;
  newPost.user = req.userId;

  try {
    const post = await Post.create(newPost);
    res.status(200).json(post);
  } catch (error) {
    if (error.errors) {
      const errorData = postError(error);
      res.status(400).json(errorData);
      return;
    }

    res.status(400).send("Серверска грешка");
  }
};

module.exports.patch_addImages = async (req, res) => {
  const postId = req.params.id;
  const images = req.body.images;
  console.log(req.body);

  try {
    const post = await Post.findById(postId);
    if (!post) throw new Error();
    post.images = images;
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json(error);
  }
};
