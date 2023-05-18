const Request = require('tedious').Request;
const { connection } = require('../config/connectDatabase');
const ErrorHandler = require('../utils/ErrorHandler');
const catchAsyncError = require('../middlewares/catchAsyncError');
const { TYPES } = require('tedious');

//Get user intolerances
exports.getIntolerances = catchAsyncError(async (req, res, next) => {
    //const { email } = req.body;
    const email = 'test';

    let sql = 'spIntolerances_GetByUserEmail';

    const request = new Request(sql, function(err, rowCount, rows) {
        if(err) {
            return next(new ErrorHandler('Internal Server Error', 500));
        } 

        if(rows.length >= 1) {
            return next(new ErrorHandler('Invalid Email', 401));
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
});

exports.addIntolerance = catchAsyncError(async (req, res, next) => {
    //const { intolerance, email } = req.body;
    const intolerance = 'Grain';
    const email = 'test';

    let sql = 'spIntolerances_InsertUserIntolerance';

    const request = new Request(sql, function(err, rowCount, rows) {
        if(err) {
            return next(new ErrorHandler('Internal Server Error', 500));
        }
    });

    request.addParameter('user_intolerance', TYPES.VarChar, intolerance);
    request.addParameter('user_email', TYPES.NVarChar, email);

    connection.callProcedure(request);    
    
    request.on('requestCompleted', () => {            
        res.status(200).json({
            success: true,
            message: 'Intolerance added'
        });
    });
});