const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const Users = require("../model/users");


module.exports = function(passport) {
  passport.use(
      new LocalStrategy({usernameField : 'email'}, (email, password, done) => {
              //match user
              Users.findOne({email: email})
              .then((user)=>{
               if(!user) {
                   return done(null, false, {message : 'That email is not registered!'});
               }
               //match pass
               bcrypt.compare(password, user.password, (err, isMatch) => {
                   if(err) throw err;

                   if(isMatch) {
                       return done(null, user);
                   } else {
                       return done(null, false, {message : 'Password incorrect'});
                   }
               })
              })
              .catch((err) => {console.log(err)})
      })
      
  )
  passport.serializeUser( function (user, done) {
      done(null, user.id);
  });
    
  passport.deserializeUser((id, cb) => {
    console.log("Fasd");
    Users.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        userName: user.username,
        userId: user._id,
        userFirstName: user.firstName,
        userLastName: user.lastName,
        userDateOfBirth: user.dateOfBirth,
        userEmail: user.email,
        userFollowers: user.followers,
        userPosts: user.posts
      };
      cb(err, userInformation);
    });
  });
/*   passport.deserializeUser( function (id, done) {
    console.log(id)
    Users.findById(id, function(err, user) {
      console.log(user)
      done(err, user);
    });
  });  */
}; 