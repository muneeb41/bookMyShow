const express = require('express');
const {postBooking , getLastBooking} = require('../controllers/controllers.js') // Import controller functions for handling routes

// Create a new router instance
const Router = express.Router();

Router.get('/booking',getLastBooking);
Router.post('/booking',postBooking);


// Define route for GET requests to '/booking' to fetch the last booking
/**
 * @swagger
 * /api/booking:
 *   get:
 *     summary: Retrieve the last booking
 *     description: Returns the most recent booking details.
 *     responses:
 *       200:
 *         description: Successfully retrieved the last booking
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 movie:
 *                   type: string
 *                   description: The movie name
 *                 slot:
 *                   type: string
 *                   description: The time slot for the booking
 *                 seats:
 *                   type: object
 *                   properties:
 *                     A1:
 *                       type: integer
 *                       description: Seat A1 status
 *                     A2:
 *                       type: integer
 *                       description: Seat A2 status
 *                     A3:
 *                       type: integer
 *                       description: Seat A3 status
 *                     A4:
 *                       type: integer
 *                       description: Seat A4 status
 *                     D1:
 *                       type: integer
 *                       description: Seat D1 status
 *                     D2:
 *                       type: integer
 *                       description: Seat D2 status
 *               example:
 *                 movie: "Inception"
 *                 slot: "18:00"
 *                 seats:
 *                   A1: 1
 *                   A2: 0
 *                   A3: 1
 *                   A4: 0
 *                   D1: 1
 *                   D2: 0
 *       500:
 *         description: Internal server error
 */


// Define route for POST requests to '/booking' to create a new booking
/**
 * @swagger
 * /api/booking:
 *   post:
 *     summary: Create a new booking
 *     description: Creates a new booking with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - movie
 *               - slot
 *               - seats
 *             properties:
 *               movie:
 *                 type: string
 *                 description: The movie name
 *               slot:
 *                 type: string
 *                 description: The time slot for the booking
 *               seats:
 *                 type: object
 *                 properties:
 *                   A1:
 *                     type: integer
 *                     description: Seat A1 status
 *                   A2:
 *                     type: integer
 *                     description: Seat A2 status
 *                   A3:
 *                     type: integer
 *                     description: Seat A3 status
 *                   A4:
 *                     type: integer
 *                     description: Seat A4 status
 *                   D1:
 *                     type: integer
 *                     description: Seat D1 status
 *                   D2:
 *                     type: integer
 *                     description: Seat D2 status
 *             example:
 *               movie: "Inception"
 *               slot: "18:00"
 *               seats:
 *                 A1: 1
 *                 A2: 0
 *                 A3: 1
 *                 A4: 0
 *                 D1: 1
 *                 D2: 0
 *     responses:
 *       200:
 *         description: Booking created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Booking successful
 *                 data:
 *                   type: object
 *                   properties:
 *                     movie:
 *                       type: string
 *                       description: The movie name
 *                     slot:
 *                       type: string
 *                       description: The time slot for the booking
 *                     seats:
 *                       type: object
 *                       properties:
 *                         A1:
 *                           type: integer
 *                           description: Seat A1 status
 *                         A2:
 *                           type: integer
 *                           description: Seat A2 status
 *                         A3:
 *                           type: integer
 *                           description: Seat A3 status
 *                         A4:
 *                           type: integer
 *                           description: Seat A4 status
 *                         D1:
 *                           type: integer
 *                           description: Seat D1 status
 *                         D2:
 *                           type: integer
 *                           description: Seat D2 status
 *       400:
 *         description: Bad request, invalid input
 *       500:
 *         description: Internal server error
 */






// Export the router to be used in other parts of the application
module.exports = Router;