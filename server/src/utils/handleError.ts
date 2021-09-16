import express from 'express';
import { ErrorHandler } from './ErrorHandler';

export const handleError = (err: ErrorHandler, res: express.Response): void => {
    let { statusCode, message } = err;
    let status = 'Error';

    if (!statusCode) {
        statusCode = 500;
        status = 'Server Error';
    }

    res.status(statusCode).json({
        status,
        statusCode,
        message,
    });
};
