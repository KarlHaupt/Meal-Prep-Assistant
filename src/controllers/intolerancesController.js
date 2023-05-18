const Request = require('tedious').Request;
const { connection } = require('../config/connectDatabase');
const ErrorHandler = require('../utils/ErrorHandler');
const catchAsyncError = require('../middlewares/catchAsyncError');
const { TYPES } = require('tedious');

//Get user intolerances
exports.getIntolerances = catchAsyncError(async (req, res, next) => {
    const { email } = req.body;
    //const email = 'test';

    let sql = 'spIntolerances_GetByUserEmail';

    const request = new Request(sql, function(err, rowCount, rows) {
        if(err) {
            return next(new ErrorHandler('Internal Server Error', 500));
        } 

        if(rows.length >= 1) {
            return next(new ErrorHandler('Invalid Email or Password', 401));
        }
    });

    request.addParameter('email', TYPES.NVarChar, email);

    connection.callProcedure(request);

    request.on('doneInProc', (rowCount, more, rows) => {
        intolerancesReceived = false;

        if(rows.length >= 1) {
            intolerancesReceived = true;
        }

        if(!intolerancesReceived) {
            return next(new ErrorHandler('Unable to obtain intolerances', 401));
        }
        
        res.status(200).json({
            success: true,
            message: 'Intolerances obtained',
            user_intolerances: rows
        });
    });
    /*request.on('doneInProc', function(rowCount, more, rows) {
        const intolerancesReceived = false;
        console.log("This is the row count: " + rowCount);
        console.log("More: " + more);
        if(rowCount >= 1) {
            intolerancesReceived = true;
        }

        if(!intolerancesReceived) {
            return next(new ErrorHandler('Unable to obtain intolerances', 401));
        }
        
        res.status(200).json({
            success: true,
            message: 'Intolerances obtained',
            user_intolerances: rows
        });
    });*/
});