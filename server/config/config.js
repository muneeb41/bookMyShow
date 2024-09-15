const mongoose = require('mongoose');

// Retrieve MongoDB credentials from environment variables
const user = process.env.USER;
const password = process.env.PASSWORD;
const database = 'bookMyShow';

// MongoDB connection string using environment variables
const url = `mongodb+srv://${user}:${password}@cluster0.apgyudc.mongodb.net/${database}?retryWrites=true&w=majority&appName=Cluster0`


// Function to establish a connection to MongoDB
async function connectionDB() {
 try {
   // Attempt to connect to MongoDB
    await mongoose.connect(url);
    console.log('database is connected successfully');

 } catch (error) {
    console.log(`this is error in connection of database : ${error}`);
 }
}


module.exports = connectionDB;