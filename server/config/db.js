const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }
    catch{
        console.log(`Error: ${err.message}`);
        process.exit(1)
    }
}

module.exports = connectDB;