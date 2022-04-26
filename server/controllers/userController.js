const asyncHandler = require('express-async-handler');
const Users = require('../model/users.js');
const bcrypt = require("bcryptjs");
const passport = require('passport');
const session = require('express-session');
const cookie = require('cookie');

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

// @desc    create user
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
      userName: req.body.userName,
      dateOfBirth: req.body.dateOfBirth,
      email: req.body.email,
      password: req.body.password,
      posts: [
  /*         {
              postid: ObjectId,
          } */
      ],
      followers: 0
    });
  
    res.status(200).json(user);
  }
})


// @desc    Login user
// @route   POST /users
// @access  Private
const loginUser = asyncHandler(async (req, res, next) => {

/*   let email = req.body.email;
  let password = req.body.password;
  // retrieve user from the database
  Users.findOne({email: email}, function(err, user){
      if (err) return res.status(500).end(err);
      if (!user) return res.status(401).json({ error: "Invalid user" });
      bcrypt.compare(password, user.password, function(err, valid) {
         if (err) return res.status(500).end(err);
         if (!valid) return res.status(401).json({ error: "Invalid password" });
         // start a session
         req.session.email = email;
         res.setHeader('Set-Cookie', cookie.serialize('userid', user._id, {
              //secure: true,
              sameSite: true,
              path : '/', 
              maxAge: 60 * 60 * 24 * 7 // 1 week in number of seconds
         }));
         return res.json(email);
      });
  }); */





  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) {
      res.status(401).json({ error: info.message });
    }
    else {
      req.session.email = req.body.email;
      res.setHeader('Set-Cookie', cookie.serialize('userid', user._id, {
          //secure: true,
          sameSite: true,
          path : '/', 
          maxAge: 60 * 60 * 24 * 7 // 1 week in number of seconds
      }));
      req.login(user, (err) => {
        if (err) throw err;
        res.status(200).send(req.session.passport.user);
        //console.log(req.session);
      });
    }
  })(req, res, next);

/*   const user = await Users.findOne({ email: req.body.email });
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
  } */
});


const logoutUser = asyncHandler(async (req, res) => {
  req.session.destroy();
  res.setHeader('Set-Cookie', cookie.serialize('userid', '', {
        path : '/', 
        maxAge: 60 * 60 * 24 * 7 // 1 week in number of seconds
  }));
  return res.redirect("/login");
});

module.exports = {
  getUsers,
  getUserById,
  createUser,
  loginUser,
  logoutUser
}