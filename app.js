const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')

const {ErrorMiddleware} = require('./server/middlewares')

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Routes

require('./server/routes')(app);

app.use(ErrorMiddleware);


module.exports = app;
