const express = require('express');
const app = express();

app.use(express.json());

//NOTE: Import all the routes
const users = require('./routes/user');

app.use('/api/v1', users)
//NOTE: Add Middleware

module.exports = app;