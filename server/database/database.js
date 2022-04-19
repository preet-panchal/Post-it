const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
const connectDB = async () => {
    try {
      const conn = await mongoose.connect('mongodb+srv://EihabSyed:Post-It@post-it.7es3b.mongodb.net/Post-It?retryWrites=true&w=majority')
      console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
      console.log(error)
    }
};

module.exports = connectDB