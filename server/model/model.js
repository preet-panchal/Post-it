const mongoose = require('mongoose');
const { ServerApiVersion, ObjectId, Promise } = require('mongodb');
const Schema = mongoose.Schema;

//Database connection
/* mongoose.Promise = global.Promise; */
/* mongoose.connect('mongodb+srv://EihabSyed:Post-It@post-it.7es3b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1
    },function(error){
        if(error){
            console.error('Unable to connect to MongoDB: ', error);
        } else{
            console.log('Connected to MongoDB');
        }
    }
); */


/* Doesn't work after version 6.0???
mongoose.set('useCreateIndex', true);
*/

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