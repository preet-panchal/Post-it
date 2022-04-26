const mongoose = require('mongoose');
const { ServerApiVersion, ObjectId, Promise } = require('mongodb');
const Schema = mongoose.Schema;

//user Schema that contains username and passwords
const postSchema = Schema({
    title: {
        required: true,
        type: String
    },
    body: {
        required: true,
        type: String
    },
    datePosted: {
        required: true,
        type: String
    },
    upvotes: Number,
    downvotes: Number,
    author: {
        required: true,
        type: String
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    } //reference
},{
    collection: 'Posts'
});

//Link the Database with our objects
module.exports = mongoose.model('Posts', postSchema);