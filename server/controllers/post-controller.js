const Post = require("../models/post-model");
const User = require("../models/user-model");
const { postError } = require("../errors/error-handler");
const mongoose = require("mongoose");
const WishList = require("../models/wish-list-model");
const cloudinary = require("../cloudinary");

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

module.exports.get_latestPosts = async (req, res) => {
  try {
    const latestPosts = await Post.find()
      .sort({ createdAt: "desc" })
      .populate({ path: "user", select: "firstName lastName profileImg -_id" });

    if (!latestPosts) throw new Error();

    res.status(200).json(latestPosts);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.get_singlePost = async (req, res) => {
  const postId = req.params.id;

  try {
    const post = await Post.findById(postId)
      .select("-title -shortDesc")
      .populate({
        path: "user",
        select: "firstName lastName profileImg",
      });
    if (!post) throw new Error("Постот не е пронајден");

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports.get_RelatedPosts = async (req, res) => {
  const query = req.query;
  const id = mongoose.Types.ObjectId(query.id);

  try {
    const data = await Post.find({
      _id: { $ne: id },
      location: { city: req.query.location },
      realEstateType: req.query.realEstateType,
      purpose: req.query.purpose,
    }).select("images title price");

    if (!data) throw new Error();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports.post_addToWishList = async (req, res) => {
  const userId = req.userId;
  const postId = req.params.id;

  try {
    const wishListPost = await WishList.findOne({ user: userId, post: postId });
    if (wishListPost) {
      await WishList.deleteOne({ _id: wishListPost._id });
      res.status(202).send("постот е избришан од листа на желби");
      return;
    }

    await WishList.create({ user: userId, post: postId });

    res.status(200).send("успешно додавање во листа на желби");
  } catch (error) {
    if (error.name === "CastError") {
      res.status(404).send("не е пронајден");
      return;
    }

    res.status(400).send("серверска грешка");
  }
};

module.exports.get_WishList = async (req, res) => {
  const userId = req.userId;
  const postId = req.params.id;

  try {
    const wishListPost = await WishList.findOne({ user: userId, post: postId });

    if (wishListPost) {
      res.status(200).send("постои во листа на желби");
    } else {
      res.status(204).send("не постои во листа на желби");
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports.get_MyPosts = async (req, res) => {
  const userId = req.userId;

  try {
    const myPosts = await Post.find({ user: userId }).select(
      "images title price"
    );

    if (!myPosts) throw new Error();
    res.status(200).json(myPosts);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};

module.exports.delete_Post = async (req, res) => {
  const postId = req.params.id;

  try {
    const post = await Post.findOne({ _id: postId });

    if (post.images.length > 0) {
      const imgIds = post.images.map((img) => img.publicId);
      cloudinary.api.delete_resources(imgIds, (error, result) => {
        if (error) {
          throw new Error();
        }
      });
    }
    await Post.deleteOne({ _id: postId });
    res.status(204).json({ message: "delete-success", id: post._id });
  } catch (error) {
    res.status(400).json(error);
  }
};
