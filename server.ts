import express from 'express';

const app = express();

const PORT = 8000;

app.get('/', (req, res) => res.send('Conectado'));

app.get('/teste', (req, res) => res.send('testando...'));

app.listen(PORT, () => {
    console.log(`\n ⚡️[server]: Server is running at http://localhost:${PORT}/\n`);
});