const mongoose = require('mongoose');
const { ServerApiVersion, ObjectId, Promise } = require('mongodb');
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

//user Schema that contains username and passwords
const userSchema = Schema({
    firstName: {
        required: true,
        type: String,
        match: [/^[A-z]+$/, 'Please provide a valid first name.']
    },
    lastName: {
        rquired: true,
        type: String,
        match: [/^[A-z]+$/, 'Please provide a valid last name.']
    },
    email: {
        required: true,
        type: String,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address.']
    },
    password: {
        required: true,
        type: String,
        minlength: [8, 'Minimun password length must be 8 characters']
    },
    posts: [
        {
            postid: ObjectId,
        }
    ]
},{
    collection: 'Users'
});

userSchema.pre("save", async function (next) {
  // only hash the password if it has been modified (or is new)
  if (!this.isModified('password')) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
  } catch (err) {
    console.log(err)
  }
});


//Link the Database with our objects
module.exports = mongoose.model('Users', userSchema);