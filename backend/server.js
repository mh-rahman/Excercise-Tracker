const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); //Mongoose will help us connect to mongoDB Atlas DB

require('dotenv').config();

const app = express();

// Get port from process.env file or use port 5000
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); //Allows us to parse JSON


const uri = process.env.ATLAS_URI; // Get our DB URI from the .env file. URI can be found on the Atlas dashboard
// Enable below flags to use new features of mongoDB - more details online
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true}); 

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully!'); // Callback function
});




// This starts the server on port
app.listen(port, () => {
    console.log('Server has started on port: ${port}');
});