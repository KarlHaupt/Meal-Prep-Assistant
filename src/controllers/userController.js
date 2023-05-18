const Request = require('tedious').Request;
const { connection } = require('../config/connectDatabase');
const ErrorHandler = require('../utils/ErrorHandler');
const catchAsyncError = require('../middlewares/catchAsyncError');
const { comparePassword, encryptPassword } = require('../utils/encryptionUtils');

const path = require('path');

const registerView = (req, res) => {
    res.sendFile('register.html', { root: path.join(__dirname, '../views') });
}

const loginView = (req, res) => {
    res.sendFile('login.html', { root: path.join(__dirname, '../views') });
}



// //Login User => api/v1/login
// exports.loginUser = catchAsyncError(async (req, res, next) => {
//     const { email, password } = req.body;

//     if(!email || !password) {
//         return next(new ErrorHandler('Please enter email and password', 400));
//     }

//     const request = new Request(`SELECT * FROM user_details WHERE email = '${email}'`, function(err, rowCount, rows) {
//         if(err) {
//             return next(new ErrorHandler('Internal Server Error', 500));
//         } 
        
//         if(rowCount === 0) {
//             return next(new ErrorHandler('Invalid Email or Password', 401));
//         }
//     });

//     connection.execSql(request.on('doneInProc',function(rowCount, more, rows) {
//         if(rowCount >= 1) {
//             const isPasswordMatched = comparePassword(rows[0][4].value, password);

//             if(!isPasswordMatched) {
//                 return next(new ErrorHandler('Invalid Email or Password', 401));
//             }
//         }
        
//         res.status(200).json({
//             success: true,
//             message: 'Login Successfully',
//             user: rows[0]
//         });
//     }));
// });

// //Register User => api/v1/register
// exports.registerUser = catchAsyncError(async (req, res, next) => {
//     const { firstName, lastName, email, password } = req.body;

//     const encryptedPassword = encryptPassword(password); 

//     const sql = `INSERT INTO user_details (firstname, lastname, email, password) VALUES ('${firstName}', '${lastName}', '${email}', '${encryptedPassword}')`
//     const request = new Request(sql, function(err, rowCount, rows) {
//         if(err) {
//             return next(new ErrorHandler('Internal Server Error', 500));
//         } 

//         if(rowCount === 0) {
//             return next(new ErrorHandler('Incorrect Details Supplied', 401));
//         }
//     });

//     connection.execSql(request);

//     res.status(200).json({
//         success: true,
//         message: 'Register successful'
//     });
// });

module.exports =  {
    registerView,
    loginView
};