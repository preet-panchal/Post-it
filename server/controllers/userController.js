const asyncHandler = require('express-async-handler');

const Users = require('../model/users.js');

// @desc    Get users
// @route   GET /users
// @access  Private
const getUsers = asyncHandler(async (req, res) => {
  const users = await Users.find();
  res.status(200).json(users);
});

const getUserById = asyncHandler(async (req, res) => {
  const user = await Users.find({"_id": req.params.id});
  res.status(200).json(user);
});

// @desc    Set user
// @route   POST /users
// @access  Private
const createUser = asyncHandler(async (req, res) => {

  const user = await Users.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    posts: [
/*         {
            postid: ObjectId,
        } */
    ]
  });

  res.status(200).json(user);
})

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  /* if (!user) {
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
  }) */

  res.status(200).json(updatedUser)
})

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deletePost = asyncHandler(async (req, res) => {
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
})

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deletePost,
}


/*
exports.createUser = (req, res) => {
  const newUser = new User(req.body);
  newUser.save((err, user) => {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.read_a_task = (req, res) => {
  task.findById(req.params.taskId, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.addPost = (req, res) => {
  task.findOneAndUpdate(
    { _id: req.params.taskId },
    req.body,
    { new: true },
    (err, task) => {
      if (err) res.send(err);
      res.json(task);
    }
  );
};

exports.deletePost = (req, res) => {
  User.deleteOne({ _id: req.params.taskId }, err => {
    if (err) res.send(err);
    res.json({
      message: 'task successfully deleted',
     _id: req.params.postid
    });
  });
}; */