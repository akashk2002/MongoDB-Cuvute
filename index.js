// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Initialize Express app
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('We are going to connect MongoDB to NodeJS Server');
});

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MongoURL)
.then(() => {
    console.log('DB Connected Successfully');
}).catch((error) => {
    console.error('DB Connection Error:', error);
});

// Start the Express server
app.listen(process.env.PORT, () => {
    console.log('Server is running on port');
});
