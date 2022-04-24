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

/* // @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (!user) {
    res.status(400)
    throw new Error('Goal not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (user.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedUser)
}) */

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
/*c onst deletePost = asyncHandler(async (req, res) => {
  const post = await User.findById(req.params.id)

  if (!post) {
    res.status(400)
    throw new Error('Goal not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (post.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await post.remove()

  res.status(200).json({ id: req.params.id })
}) */

module.exports = {
  getPosts,
  createPost,
  getPostsByUser,
  deletePost,
  updatePost
}