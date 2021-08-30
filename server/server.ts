import 'reflect-metadata';
import express, { Response, Request, NextFunction, Application } from 'express';
import Container from 'typedi';
import { ConversaController } from './src/controllers/conversaController';
import { ErrorHandler } from './src/utils/ErrorHandler';
import { handleError } from "./src/utils/handleError";
import { RepositoryConversa } from './src/repositorys/repositoryConversa';
import cors from "cors";
import { serverWs } from './serverWs';

function startUp(): void {
    const app = express();

    serverWs();
    middlewares(app);
    serverManager(app);
    injectionDependecies(app);
    errorManager(app);
}

function serverManager(app: Application): void {
    const PORT = 8001;

    app.get('/', (req, res) => res.send('Conectado'));

    app.listen(PORT, () => {
        console.log(`\n ⚡️[server]: Server is running at http://localhost:${PORT}/\n`);
    });
}

function errorManager(app: Application): void {
    app.get("/error", (req, res) => {
        throw new ErrorHandler(500, "Internal server error");
    });

    app.use((err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
        handleError(err, res);
    });
}

function injectionDependecies(app: Application): void {
    Container.set("app", app);
    Container.set("repository.conversa", new RepositoryConversa());

    Container.get(ConversaController);
}

function middlewares(app: Application): void {
    app.use(cors({
        origin: 'http://localhost:8080',
        optionsSuccessStatus: 200
    }));
    app.use(express.json());
}

startUp();