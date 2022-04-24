const express = require('express');
const { request } = require('express');
const path = require('path');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const Users = require('./model/users.js');
const Posts = require('./model/posts.js');
const bcrypt = require ('bcryptjs');
const cookieParser = require('cookie-parser')
const connectDB = require('./database/database');
const { getUsers, getUserById, createUser, loginUser, logoutUser } = require('./controllers/userController');
const { getPosts, createPost, getPostsByUser, deletePost, updatePost } = require('./controllers/postController');
const passport = require('passport');
const session = require('express-session');
const cookie = require('cookie');


connectDB();


app.use(session({
    secret: 'Post-It Secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
/*         httpOnly: true,
        secure: true, */
        sameSite: true
    },
}));

/* app.use(function (req, res, next){
    let cookies = cookie.parse(req.headers.cookie || '');
    req.username = (cookies.username)? cookies.username : null;
    console.log("HTTP requestu", req.username, req.method, req.url, req.body);
    next();
});

app.use(function (req, res, next){
    console.log("HTTP requesti", req.method, req.url, req.body);
    next();
}); */

/* const isAuthenticated = function(req, res, next) {
    if (!req.session.email) return res.status(401).end("access denied");
    next();
}; */






app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.get('/users', getUsers);
app.get('/users/:id', getUserById);
app.post('/users', createUser);

app.get('/posts', getPosts);
app.post('/posts', createPost);
app.delete('/posts/:id', deletePost);
app.post('/posts/:id', updatePost);

app.get('/profile/:id', getPostsByUser);

app.post('/login', loginUser);

app.get('/logout', logoutUser);


/* app.use(session({
    secret: "Post-It Secret",
    resave: true,
    saveUninitialized: true
})); */
app.use(cookieParser("Post-It Secret"));
app.use(passport.initialize());
app.use(passport.session());
require("./auth/passport-auth")(passport)



app.get('/', (req,res) => {
  console.log("jj");
  //res.send(users);
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
    console.log(`Listening for requests on port ${app.get('port')}.`);
});

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => res.sendFile(path.resolve('../client', 'dist', 'index.html')));
