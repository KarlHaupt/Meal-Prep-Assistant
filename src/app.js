const express = require('express');
const app = express();
const morgan = require('morgan');
const cookieParser = require("cookie-parser");
const session = require('express-session');

const errorMiddleware = require('./middlewares/error');
const { loginView } = require('./controllers/userController');
const oneDay = 1000 * 60 * 60 * 24;

app.use(morgan('tiny'));
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));
app.use(cookieParser())
app.use(express.static("src/public"))

const users = require('./routes/user');
const intolerances = require('./routes/intolerances');
const preferences = require('./routes/preferences');
const mealPlan = require('./routes/mealPlan');

app.get('/', loginView)

app.use('/api/v1', users);
app.use('/api/v1', intolerances);
app.use('/api/v1', preferences);
app.use('/api/v1', mealPlan);

app.use(errorMiddleware);

module.exports = app;