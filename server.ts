import 'reflect-metadata';
import express, { Response, Request, NextFunction } from 'express';
import Container from 'typedi';
import { ConversaController } from './src/conversaController';
import { ErrorHandler, handleError } from './src/utils/ErrorHandler';

const app = express();

const PORT = 8001;

app.get('/', (req, res) => res.send('Conectado'));

app.get("/error", (req, res) => {
    throw new ErrorHandler(500, "Internal server error");
});

app.listen(PORT, () => {
    console.log(`\n ⚡️[server]: Server is running at http://localhost:${PORT}/\n`);
});

app.use((err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
    handleError(err, res);
});

Container.set("app", app);

Container.get(ConversaController);