const express = require('express');
//const randomId = require('random-id');
const path = require('path');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// place holder for the data
const users = [
  {
    userid: "1",
    firstName: "first1",
    lastName: "last1",
    email: "first@gmail.com",
    posts: [
      {
        postid: "11",
        title: "post1",
        body: "post1"
      }
    ]
  },
  {
    userid: "2",
    firstName: "first2",
    lastName: "last2",
    email: "second@gmail.com",
    posts: [
      {
        postid: "21",
        title: "post2",
        body: "post2"
      }
    ]
  },
  {
    userid: "3",
    firstName: "first3",
    lastName: "last3",
    email: "third@gmail.com",
    posts: [
      
    ]
  }
];

app.get('/api/posts', (req, res) => {
  console.log('api/posts called!!!!!!!')
  res.json(users);
});

app.post('/api/post', (req, res) => {
  const user = req.body.user;
  user.id = randomId(10);
  console.log('Adding user:::::', user);
  users.push(user);
  res.json("user addedd");
});

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
