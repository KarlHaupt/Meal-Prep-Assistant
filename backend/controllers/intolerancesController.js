const Request = require('tedious').Request;
const { connection } = require('../config/connectDatabase');
const ErrorHandler = require('../utils/ErrorHandler');
const catchAsyncError = require('../middlewares/catchAsyncError');
const { TYPES } = require('tedious');

//Get user intolerances
exports.getPreferences = catchAsyncError(async (req, res, next) => {
    const { email } = req.body;
    
    let sql = "spIntolerances_GetByUserEmail"
    
    const request = new Request(sql, function(err) {
        if(err) {
            return next(new ErrorHandler('Internal Server Error', 500));
        } 
    });

    request.addParameter('email', TYPES.NVarChar, email);

    connection.callProcedure(request);

    request.on('requestCompleted', function(rowCount, rows) {
        const intolerancesReceived = false;
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
    });
});