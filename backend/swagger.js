const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Admission Scolaire',
      version: '1.0.0',
      description: 'API pour gérer les admissions scolaires'
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
        description: 'Serveur local'
      }
    ]
  },
  apis: ['./routes/*.js'], // Chemin vers vos fichiers de routes
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};