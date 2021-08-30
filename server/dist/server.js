"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const typedi_1 = __importDefault(require("typedi"));
const conversaController_1 = require("./src/controllers/conversaController");
const ErrorHandler_1 = require("./src/utils/ErrorHandler");
const handleError_1 = require("./src/utils/handleError");
const repositoryConversa_1 = require("./src/repositorys/repositoryConversa");
const cors_1 = __importDefault(require("cors"));
const serverWs_1 = require("./serverWs");
function startUp() {
    const app = express_1.default();
    serverWs_1.serverWs();
    middlewares(app);
    serverManager(app);
    injectionDependecies(app);
    errorManager(app);
}
function serverManager(app) {
    const PORT = process.env.PORT || 8001;
    app.get('/', (req, res) => res.send('Conectado'));
    app.listen(PORT, () => {
        console.log(`\n ⚡️[server]: Server is running at port: ${PORT}\n`);
    });
}
function errorManager(app) {
    app.get("/error", (req, res) => {
        throw new ErrorHandler_1.ErrorHandler(500, "Internal server error");
    });
    app.use((err, req, res, next) => {
        handleError_1.handleError(err, res);
    });
}
function injectionDependecies(app) {
    typedi_1.default.set("app", app);
    typedi_1.default.set("repository.conversa", new repositoryConversa_1.RepositoryConversa());
    typedi_1.default.get(conversaController_1.ConversaController);
}
function middlewares(app) {
    app.use(cors_1.default({
        origin: 'http://localhost:8080',
        optionsSuccessStatus: 200
    }));
    app.use(express_1.default.json());
}
startUp();
//# sourceMappingURL=server.js.map