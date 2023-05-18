const express = require('express');
const app = express();

const Request = require('tedious').Request;
const { comparePassword, encryptPassword } = require('./utils/encryptionUtils');
const { connection } = require('./config/connectDatabase');
const ErrorHandler = require('./utils/ErrorHandler');
const bcrypt = require('bcryptjs');

app.use(express.urlencoded({extended: 'false'}))
app.use(express.json())

app.use(express.static("public"))

//NOTE: Import all the routes
const users = require('./routes/user');

app.use('/api/v1', users)
//NOTE: Add Middleware

app.post("/auth/register", async (req, res, next) => {
    const { email, username, password, confirm_password} = req.body;

    if(password != confirm_password) {
        return next(new ErrorHandler("Passwords don't match!", 400));
    }

    const encryptedPassword = await bcrypt.hash(password, 10);
    const sql = `INSERT INTO user_details (firstname, lastname, email, password) VALUES ('${username}', '${username}', '${email}', '${encryptedPassword}')`

    let request = new Request(sql, function(err, rowCount, rows) {
        if(err) {
            return next(new ErrorHandler('Internal Server Error', 500));
        } 

        if(rowCount === 0) {
            return next(new ErrorHandler('Incorrect Details Supplied', 401));
        }
    });

    connection.execSql(request);

    res.status(200).json({
        success: true,
        message: 'Register successful'
    });
});

app.post("/auth/login", (req, res, next) => {
    const { email, password } = req.body;

    

    if(!email || !password) {
        return next(new ErrorHandler('Please enter email and password', 400));
    }

    const request = new Request(`SELECT * FROM user_details WHERE email = '${email}'`, function(err, rowCount, rows) {
        if(err) {
            return next(new ErrorHandler('Internal Server Error', 500));
        } 
        
        if(rowCount === 0) {
            return next(new ErrorHandler('Invalid Email or Password', 401));
        }
    });

    connection.execSql(request.on('doneInProc', async function(rowCount, more, rows) {
        if(rowCount >= 1) {
            const isPasswordMatched = await bcrypt.compare(password, rows[0][4].value);
            if(!isPasswordMatched) {
                return next(new ErrorHandler('Invalid Email or Password', 401));
            }
        }
        
        res.status(200).json({
            success: true,
            message: 'Login Successfully',
            user: rows[0][1].value
        });
    }));
});

module.exports = app;