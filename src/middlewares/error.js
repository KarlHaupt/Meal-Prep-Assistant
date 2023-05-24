module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    if(process.env.NODE_ENV !== 'DEVELOPMENT') {
        res.status(err.statusCode).json({
            success: false,
            error: err,
            errMessage: err.message,
            stack: err.stack
        });
    }

    if(process.env.NODE_ENV !== 'PRODUCTION') {
        //TODO: Find the unique constraint error with tedious and pass it here

        res.status(err.statusCode || 500).json({
            success: false,
            message: err.message || 'Internal Server Error'
        });
    }
}