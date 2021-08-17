import express from "express";
import { ErrorHandler } from "./ErrorHandler";

export const handleError = (err: ErrorHandler, res: express.Response) => {
    const { statusCode, message } = err;

    res.status(statusCode).json({
        status: "error",
        statusCode,
        message
    });
};
