const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://test:test@cluster0.mn9ivt1.mongodb.net/");
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }
    catch{
        console.log(`Error: ${err.message}`);
        process.exit(1)
    }
}

module.exports = connectDB;