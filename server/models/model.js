
const mongoose = require('mongoose');
const bookMovieSchema = require('./schema'); // Import the schema

// Create the Mongoose model using the imported schema
const BookModel = mongoose.model('Booking', bookMovieSchema);

// Export the model
module.exports = BookModel;
