import express from 'express';
import { ErrorHandler } from './ErrorHandler';

export const handleError = (err: ErrorHandler, res: express.Response): void => {
    const { message } = err;
    let { statusCode } = err;
    let status = 'Error';

    if (!statusCode) {
        statusCode = 500;
        status = 'Server Error';
    }

    res.status(statusCode).json({
        message,
        status,
        statusCode,
    });
};
