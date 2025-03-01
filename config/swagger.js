// Packages
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';


const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Evo API',
            version: '1.0.0',
            description: 'Evo üçün APİ - dokumentasiyası',
        },
        servers: [
            {
                url: 'https://www.coffeeme.app/api',
            },
        ],
    },

    apis: ['./routes/**/*.js',"./models/**/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

export const setupSwagger = app => app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));