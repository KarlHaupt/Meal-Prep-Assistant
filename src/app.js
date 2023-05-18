const express = require('express');
const app = express();

const errorMiddleware = require('./middlewares/error');

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static("src/public"))

const users = require('./routes/user');

app.use('/api/v1', users)

app.use(errorMiddleware);

module.exports = app;