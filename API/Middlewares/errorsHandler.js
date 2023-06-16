const { ErrorCustomResponse } = require('../Utils/ErrorResponse');

const errorHandler = (err, req, res, next) => {
    let error = { ...err };

    error.message = err.message;

    console.log(err);

    //! duplicate email error
    if (err.code === 11000) {
        const message = 'that username is already registered';
        error = new ErrorCustomResponse(message, 400);
    }

    //! validation errors
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map((val) => val.message);
        error = new ErrorCustomResponse(message, 400);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'server Error'
    });
};

module.exports = {
    errorHandler
};