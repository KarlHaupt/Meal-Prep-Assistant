const catchAsyncError = require('../middlewares/catchAsyncError');

//Login User => api/v1/login
exports.loginUser = catchAsyncError(async (req, res, next) => {
    //Note: Logic here

    res.status(200).json({
        success: true,
        message: 'Login Successfully'
    });
});