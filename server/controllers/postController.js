const asyncHandler = require('express-async-handler');

const Posts = require('../model/posts.js');
const Users = require('../model/users.js');

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Posts.find();
  res.status(200).json(posts);
});

const getPostsByUser = asyncHandler(async (req, res) => {
  const posts = await Posts.find({"userid": req.params.id});
  res.status(200).json(posts);
});

const deletePost = asyncHandler(async (req, res) => {
  const findPost = await Posts.findOne({"_id": req.params.id});
  Users.findOne({"_id": findPost.userid}, (err, user) => {
    let index = user.posts.indexOf(req.params.id);
    user.posts.splice(index, 1);
    user.save();
  });
  const posts = await Posts.deleteOne({"_id": req.params.id});
  res.status(200).json(posts);
});

const updatePost = asyncHandler(async (req, res) => {
  const Post = Posts.findOne({"_id": req.params.id}, (err, post) => {
    if (req.body.type === 'upVote') {
      post.upvotes = post.upvotes + 1;
    } else if (req.body.type === 'downVote') {
      post.downvotes = post.downvotes + 1;
    }
    post.save();
  });
});


// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const createPost = asyncHandler(async (req, res) => {
/*   if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  } */

  const post = await Posts.create({
    title: req.body.title,
    body: req.body.body,
    datePosted: req.body.datePosted,
    upvotes: req.body.upvotes,
    downvotes: req.body.downvotes,
    author: req.body.author,
    userid: req.body.userid
  });

  Users.findOne({"_id": req.body.userid}, (err, user) => {
    user.posts.push(post._id);
    user.save();
  });

  res.status(200).json(post);
})

module.exports = {
  getPosts,
  createPost,
  getPostsByUser,
  deletePost,
  updatePost
}