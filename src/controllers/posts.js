const posts = require("../data/posts.json");

getAllPosts = () => {
  // return all posts
  return posts;
};

getPostById = (postId) => {
  // return specific post
  return posts.filter((post) => post.id == postId);
};

module.exports = {
  getAllPosts,
  getPostById,
};
