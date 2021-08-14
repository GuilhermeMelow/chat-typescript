import express from "express";

export class ErrorHandler extends Error {
    public statusCode: number;

    constructor(statusCode: number, message: string) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

export const handleError = (err: ErrorHandler, res: express.Response) => {
    const { statusCode, message } = err;

    res.status(statusCode).json({
        status: "error",
        statusCode,
        message
    });
}