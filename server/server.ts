import 'reflect-metadata';
import express, { Response, Request, NextFunction, Application } from 'express';
import Container from 'typedi';
import { ConversaController } from './src/controllers/conversaController';
import { ErrorHandler } from './src/utils/ErrorHandler';
import { handleError } from './src/utils/handleError';
import { RepositoryConversa } from './src/repositorys/repositoryConversa';
import cors from 'cors';
import { serverWs } from './serverWs';
import { Server } from 'http';
import errorCode from './src/utils/HttpCodes.json';


const serverManager = (app: Application): Server => {
    const LOCALPORT = 8001;
    const PORT = process.env.PORT || LOCALPORT;

    app.get('/', (req, res) => res.send('Conectado'));

    return app.listen(PORT, () => {
        console.log(`\n ⚡️[server]: Server is running at port: ${PORT}\n`);
    });
};

const errorManager = (app: Application): void => {
    app.get('/error', (req, res) => {
        throw new ErrorHandler(errorCode.ServerError, 'Internal server error');
    });

    app.use((err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
        handleError(err, res);
    });
};

const injectionDependecies = (app: Application): void => {
    Container.set('app', app);
    Container.set('repository.conversa', new RepositoryConversa());

    Container.get(ConversaController);
};

const middlewares = (app: Application): void => {
    app.use(cors({
        optionsSuccessStatus: 200,
        origin: ['https://chat-front-end.vercel.app', 'http://localhost:8080'],
    }));
    app.use(express.json());
};

const startUp = (): void => {
    const app = express();

    const server = serverManager(app);
    serverWs(server);
    middlewares(app);
    injectionDependecies(app);
    errorManager(app);
};

startUp();
