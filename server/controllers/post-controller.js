const Post = require("../models/post-model");
const User = require("../models/user-model");
const { postError } = require("../errors/error-handler");
const mongoose = require("mongoose");
const WishList = require("../models/wish-list-model");
const cloudinary = require("../cloudinary");
const validate = require("../pkg/validators/post_validator");
const sanitaze = require("../pkg/sanitazers/sanitaze");

module.exports.post_addNewPost = async (req, res) => {
  let newPost = req.body;
  newPost.user = req.userId;

  sanitaze.clearWhiteSpace(newPost);

  try {
    await validate(newPost, "CREATE");
  } catch (error) {
    return res.status(400).send(error);
  }

  try {
    const post = await Post.create(newPost);
    res.status(200).json(post);
  } catch (error) {
    if (error.errors) {
      const errorData = postError(error);
      return res.status(400).json(errorData);
    }
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports.patch_addImages = async (req, res) => {
  const userId = req.userId;
  const postId = req.params.id;
  const images = req.body.images;

  try {
    await validate(req.body, "IMG_INSERT");
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }

  try {
    const post = await Post.findOne({ _id: postId, user: userId });

    if (!post) throw new Error();

    post.images = [...post.images, ...images];
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports.patch_removeImages = async (req, res) => {
  const userId = req.userId;
  const postId = req.params.id;
  const pubId = req.query.pub_id;

  try {
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).send("Bad request");
    }

    if (userId != post.user) {
      return res.status(400).send("Bad request");
    }

    // remove from cloud
    let imgDelete = await cloudinary.uploader.destroy(pubId);

    if (imgDelete.result !== "ok") {
      throw new Error("Failed to delete image");
    }
    //

    post.images = post.images.filter((img) => img.publicId != pubId);

    await post.save();

    res.status(204).send();
  } catch (error) {
    res.status(400).send(error);
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
    const post = await Post.findById(postId).populate({
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
    await WishList.create({ user: userId, post: postId });
    res.status(201).send("успешно додавање во листа на желби");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.delete_fromWishList = async (req, res) => {
  const userId = req.userId;
  const postId = req.params.id;

  try {
    const post = await WishList.findOne({ user: userId, post: postId });

    if (!post) return res.status(404).send("Not found");

    await WishList.deleteOne({ _id: post._id, user: userId });
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
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
      res.status(404).send("не постои во листа на желби");
    }
  } catch (error) {
    res.status(500).send(error);
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
    res.status(404).json(error);
  }
};

module.exports.delete_Post = async (req, res) => {
  const postId = req.params.id;
  const userId = req.userId;

  try {
    const post = await Post.findOne({ _id: postId, user: userId });

    if (post.images.length > 0) {
      const imgIds = post.images.map((img) => img.publicId);
      cloudinary.api.delete_resources(imgIds, (error, result) => {
        if (error) {
          return res.status(400).send("Internal server error");
        }
      });
    }
    await Post.deleteOne({ _id: postId, user: userId });
    res.status(204).json({ message: "delete-success", id: post._id });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.patch_updatePost = async (req, res) => {
  const postId = req.params.id;
  const userId = req.userId;

  try {
    await validate(req.body, "CREATE");
  } catch (error) {
    return res.status(400).send(error);
  }

  try {
    const post = await Post.updateOne({ _id: postId, user: userId }, req.body);

    if (!post.n) {
      return res.status(404).send("Постот не е пронајден");
    }

    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
