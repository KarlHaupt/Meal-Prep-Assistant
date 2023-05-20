const express = require('express');
const app = express();

const errorMiddleware = require('./middlewares/error');

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static("src/public"))

const users = require('./routes/user');
const intolerances = require('./routes/intolerances')
const preferences = require('./routes/preferences');
const mealPlan = require('./routes/mealPlan');

app.use('/api/v1', users)
app.use('/api/v1', intolerances)
app.use('/api/v1', preferences)
app.use('/api/v1', mealPlan)


app.use(errorMiddleware);

module.exports = app;