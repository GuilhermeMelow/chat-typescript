"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const handleError = (err, res) => {
    let { statusCode, message } = err;
    let status = "Error";
    if (!statusCode) {
        statusCode = 500;
        status = "Server Error";
    }
    res.status(statusCode).json({
        status,
        statusCode,
        message
    });
};
exports.handleError = handleError;
//# sourceMappingURL=handleError.js.map