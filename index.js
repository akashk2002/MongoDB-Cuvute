// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Initialize Express app
const app = express();

// Users Collections 
// 1.FirstName
// 2.LastName
// 3.Email
// 4.PhoneNumber

// .model - Define Schema for collection's document
/*
- Model Name : Pascalcase, Singular
- Collection Name : Lowercase, Pural

*/

const User = mongoose.model('User',{
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: Number
})




// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('We are going to connect MongoDB to NodeJS Server');
});

// Fetching Details from Database -  READ: GET/users
app.get('/users', async (req,res) =>{
    try{
        const users = await User.find()
        res.json({
            status: 'SUCCESS',
            data: users
        })

    } catch(error){
        res.json({
            status: 'FAILED',
            message: 'Something Went Wrong'
        })

    }
    
});







// Connect to MongoDB using Mongoose
// mongoose.connect(process.env.MongoURL)
// .then(() => {
//     console.log('DB Connected Successfully :)');
// }).catch((error) => {
//     console.error('DB Connection Error:', error);
// });

// // Start the Express server
// app.listen(process.env.PORT, () => {
//     console.log('Server is running on port');
// });

app.listen(process.env.PORT,()=>{
    mongoose
        .connect(process.env.MongoURL)
        .then(()=> console.log('Server is Running :)'))
        .catch((error) => console.log(error));
});


