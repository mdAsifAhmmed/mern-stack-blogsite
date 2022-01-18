import Post from "../schema/post_schema.js";

export const createPost = async (request, response) => {
  console.log(request.body);
  try {
    const post = await new Post(request.body);
    post.save();
    response.status(200).json("blog save successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getAllPosts = async (request, response) => {
  let username = request.query.username;
  let categories = request.query.categories;
  let posts;
  try {
    if (username) posts = await Post.find({ username: username });
    else if (categories) posts = await Post.find({ categories: categories });
    else posts = await Post.find({});

    response.status(200).json(posts);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getPost = async (request, response) => {
  try {
    const post = await Post.findById(request.params.id);
    response.status(200).json(post);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const upDatePost = async (request, response) => {
  try {
    await Post.findByIdAndUpdate(request.params.id, { $set: request.body });
    response.status(200).json("Blog Updated successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

export const deletePost = async (request, response) => {
  try {
    const post = await Post.findById(request.params.id);
    await post.delete();
    response.status(200).json("Blog delete successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};
