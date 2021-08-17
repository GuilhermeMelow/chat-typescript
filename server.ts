import 'reflect-metadata';
import express, { Response, Request, NextFunction, Application } from 'express';
import Container from 'typedi';
import { ConversaController } from './src/controllers/conversaController';
import { ErrorHandler } from './src/utils/ErrorHandler';
import { handleError } from "./src/utils/handleError";
import { RepositoryConversa } from './src/repositorys/repositoryConversa';

const startUp = () => {
    const app = express();

    serverManager(app);
    dependeciesManager(app);
    errorManager(app);
}

const serverManager = (app: Application) => {
    const PORT = 8001;

    app.get('/', (req, res) => res.send('Conectado'));

    app.listen(PORT, () => {
        console.log(`\n ⚡️[server]: Server is running at http://localhost:${PORT}/\n`);
    });
}

const dependeciesManager = (app: Application) => {
    Container.set("app", app);
    Container.set("repository.conversa", new RepositoryConversa());

    Container.get(ConversaController);
}

const errorManager = (app: Application) => {
    app.get("/error", (req, res) => {
        throw new ErrorHandler(500, "Internal server error");
    });

    app.use((err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
        handleError(err, res);
    });
}

startUp();