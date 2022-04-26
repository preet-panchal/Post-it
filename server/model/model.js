const mongoose = require('mongoose');
const { ServerApiVersion, ObjectId, Promise } = require('mongodb');
const Schema = mongoose.Schema;

//Database connection

//user Schema that contains username and passwords
const userSchema = Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    posts: [
        {
            postid: ObjectId,
/*             title: String,
            body: String,
            upvotes: Number,
            downvotes: Number */
        }
    ]
},{
    collection: 'Users'
});

//Link the Database with our objects
module.exports = mongoose.model('Users', userSchema);