const Request = require('tedious').Request;
const { connection } = require('../config/connectDatabase');
const ErrorHandler = require('../utils/ErrorHandler');
const catchAsyncError = require('../middlewares/catchAsyncError');
const { TYPES } = require('tedious');

//Get user preferences
exports.getPreferences = catchAsyncError(async (req, res, next) => {
    //const { email } = req.body;
    const email = 'test'

    let sql = "spPreferences_GetByUserEmail"
    
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
        preferencesReceived = false;

        if(rows.length >= 1) {
            preferencesReceived = true;
        }

        if(!preferencesReceived) {
            return next(new ErrorHandler('Unable to obtain preferences', 401));
        }
        
        res.status(200).json({
            success: true,
            message: 'Preferences obtained',
            user_preferences: rows
        });
    });
});