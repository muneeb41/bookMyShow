// swagger.js
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'BookMyShow API',
    version: '1.0.0',
    description: 'A simple API of BookMyShow',
  },
  servers: [
    {
      url: 'http://localhost:8080/',
      description: 'API server',
    },
  ],
};

// Options for the swagger-jsdoc
const options = {
  swaggerDefinition,
  // Path to the API specs
  apis: ['./routes/routes.js'], 
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);



module.exports = { swaggerUi, swaggerSpec };
