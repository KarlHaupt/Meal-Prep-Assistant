const Request = require('tedious').Request;
const { connection } = require('../config/connectDatabase');
const ErrorHandler = require('../utils/ErrorHandler');
const catchAsyncError = require('../middlewares/catchAsyncError');
const { comparePassword, encryptPassword } = require('../utils/encryptionUtils');
const bcrypt = require('bcryptjs');

const path = require('path');

const registerView = (req, res) => {
    res.sendFile('register.html', { root: path.join(__dirname, '../views') });
}

const loginView = (req, res) => {
    res.sendFile('login.html', { root: path.join(__dirname, '../views') });
}



//Login User => api/v1/login
const loginUser = catchAsyncError(async (req, res, next) => {
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

// //Register User => api/v1/register
const registerUser = async (req, res, next) => {
    const { email, username, password, confirm_password} = req.body;

    if(password != confirm_password) {
        return next(new ErrorHandler("Passwords don't match!", 400));
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const sql = `INSERT INTO user_details (username, email, password) VALUES ( '${username}', '${email}', '${encryptedPassword}')`

    let user = {}
    let request = new Request(sql, function(err, rowCount, rows) {
        if(err) {
            console.log("Hit 1");
            return next(new ErrorHandler('Internal Server Error', 500));
        } 

        if(rowCount === 0) {
            console.log("Hit 2");
            return next(new ErrorHandler('Incorrect Details Supplied', 401));
        }

        connection.execSql(request);
   });

   res.status(200).json({
    success: true,
    message: 'Register successful',
    user: user
});
};

module.exports =  {
    registerView,
    loginView,
    registerUser,
    loginUser
};