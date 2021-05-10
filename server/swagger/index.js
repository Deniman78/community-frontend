const swagger = require('express-swagger-generator');

module.exports = (app) => {
    const expressSwagger = swagger(app);

    let options = {
        swaggerDefinition: {
            info: {
                description: 'Description of Community API',
                title: 'Community',
                version: '1.0.0',
            },
            host: 'localhost:5000',
            basePath: '/',
            produces: [
                "application/json",
                "application/xml"
            ],
            schemes: ['http', 'https'],
            securityDefinitions: {
                JWT: {
                    type: 'apiKey',
                    in: 'header',
                    name: 'Authorization',
                    description: "",
                }
            }
        },
        basedir: __dirname,
        files: ['../routes/*.js', '../vm/**/*.js'],
    };
    expressSwagger(options);
};
