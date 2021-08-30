"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
class ErrorHandler extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}
exports.ErrorHandler = ErrorHandler;
//# sourceMappingURL=ErrorHandler.js.map