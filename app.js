const express = require('express');

const app = express();

app.use(express.json({extended: true}))

// Routes

require('./server/routes')(app)

module.exports = app;
