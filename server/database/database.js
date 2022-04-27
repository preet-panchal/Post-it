const mongoose = require('mongoose')
require('dotenv').config();

mongoose.Promise = global.Promise;
const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.URI_KEY)
      console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
      console.log(error)
    }
};

module.exports = connectDB