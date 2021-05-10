const express = require('express');
const swagger = require('./server/swagger');

const app = express();
app.use(express.json({extended: true}))

// Routes

require('./server/routes')(app)

swagger(app);

module.exports = app;
