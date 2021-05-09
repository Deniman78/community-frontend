const express = require('express');

const app = express();


// Routes

require('./server/routes')(app)

module.exports = app;
