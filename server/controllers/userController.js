const asyncHandler = require('express-async-handler');

const Users = require('../model/users.js');
const bcrypt = require("bcryptjs");

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

  if (!req.body.firstName || !req.body.firstName.match(/^[A-z]+$/)) {
    res.status(401).json({ error: "Invalid First Name" });
  } else if (!req.body.lastName || !req.body.lastName.match(/^[A-z]+$/)) {
    res.status(401).json({ error: "Invalid Last Name" });
  } else if (!req.body.email || !req.body.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    res.status(401).json({ error: "Invalid email" });
  } else if (!req.body.password || req.body.password.length < 8) {
    res.status(401).json({ error: "Invalid password" });
  } else {
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
  }
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

const loginUser = asyncHandler(async (req, res) => {
  const user = await Users.findOne({ email: req.body.email });
  if (user) {
    // check user password with hashed password stored in the database
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (validPassword) {
      res.status(200).json(user);
    } else {
      res.status(400).json({ error: "Invalid Password" });
    }
  } else {
    res.status(401).json({ error: "User does not exist" });
  }
});


/* function (username, password, callback) {
  console.log(password.body)
  Users.findOne({username: username}).exec(function(error, user) {
    if (error) {
      callback({error: true})
    } else if (!user) {
      callback({error: true})
    } else {
      user.comparePassword(password, function(matchError, isMatch) {
        if (matchError) {
          callback({error: true})
        } else if (!isMatch) {
          callback({error: true})
        } else {
          callback({success: true})
        }
      })
    }
  });
}; */

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  loginUser
}