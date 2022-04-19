const mongoose = require('mongoose');
const { ServerApiVersion, ObjectId, Promise } = require('mongodb');
const Schema = mongoose.Schema;

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

//Link the Database with our objects
module.exports = mongoose.model('Users', userSchema);