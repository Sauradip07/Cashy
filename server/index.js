const dotenv = require('dotenv').config();
const path = require('path');
const express = require('express');
const colors = require('colors');
const cors = require('cors');
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorHandler');
const fileUpload = require('express-fileupload');


connectDB();

const app = express();
app.use(cors());
app.options('*', cors());

// express file uplode function temp file true 
app.use(
    fileUpload({
      useTempFiles: true,
    })
)

const PORT = process.env.PORT || 8080;


app.get('/', (req, res) => {
    res.send('api is running...')
})

app.listen(PORT, () =>
  console.log(
    `Server Running on Port: http://localhost:${PORT} at ${new Date().toLocaleString(
      'en-US'
    )}`
  )
)
