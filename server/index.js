const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()  // Load environment variables from .env file
const connectionDB = require('./config/config.js')
const Router = require('./routes/routes.js');
const { swaggerUi, swaggerSpec } = require('./api documentation/swagger.js');

const app = express();


// Middleware setup
app.use(express.json());  // Parse incoming JSON requests
app.use(cors());   // Enable Cross-Origin Resource Sharing



// connect with database
connectionDB();

// set up Routes 
app.use('/api',Router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start the server and listen on the specified port
app.listen(process.env.PORT,()=>{
    console.log(`this server is running on ${process.env.PORT}`);
})