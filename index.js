// Import required modules
const express = require('express');
const mongoose = require('mongoose');

// Initialize Express app
const app = express();
const port = 3000;

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('We are going to connect MongoDB to NodeJS Server');
});

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost:27017')
.then(() => {
    console.log('DB Connected Successfully');
}).catch((error) => {
    console.error('DB Connection Error:', error);
});

// Start the Express server
app.listen(3000, () => {
    console.log(`Server is running on port ${port}`);
});
