class ErrorResponse extends Error {
    constructor(message, ErrorMsg, statusCode) {
        super(message);
        this.ErrorMsg = ErrorMsg;
        this.statusCode = statusCode;
    }
};

class ErrorCustomResponse extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
};

module.exports = {
    ErrorResponse,
    ErrorCustomResponse
};