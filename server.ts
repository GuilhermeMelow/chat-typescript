import 'reflect-metadata';
import express from 'express';
import Container from 'typedi';
import { ConversaController } from './src/conversaController';

const app = express();

const PORT = 8001;

app.get('/', (req, res) => res.send('Conectado'));

app.listen(PORT, () => {
    console.log(`\n ⚡️[server]: Server is running at http://localhost:${PORT}/\n`);
});

Container.set("app", app);

Container.get(ConversaController);