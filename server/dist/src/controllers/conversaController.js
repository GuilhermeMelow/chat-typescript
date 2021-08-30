"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversaController = void 0;
const typedi_1 = require("typedi");
const conversaHandler_1 = require("../handlers/conversaHandler");
let ConversaController = class ConversaController {
    constructor(app, handler) {
        this.handler = handler;
        this.app = app;
        this.app.get("/conversas", (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.Get(res); }));
        this.app.get("/conversas/:nome", (req, res, next) => __awaiter(this, void 0, void 0, function* () { return this.Find(req, res, next); }));
        this.app.post("/conversas/adicionar/:nome", (req, res, next) => __awaiter(this, void 0, void 0, function* () { return this.Add(req, res, next); }));
        this.app.post("/conversas/mensagens/adicionar", (req, res, next) => __awaiter(this, void 0, void 0, function* () { return this.AddMensagem(req, res, next); }));
    }
    Get(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const conversas = yield this.handler.GetConversas();
            response.send(conversas);
        });
    }
    Add(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const nome = request.params.nome;
                response.send(yield this.handler.postConversa(nome));
            }
            catch (error) {
                next(error);
            }
        });
    }
    Find(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const nome = request.params.nome;
                response.send(yield this.handler.FindConversa(nome));
            }
            catch (error) {
                next(error);
            }
        });
    }
    AddMensagem(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conversaRequest = request.body;
                response.send(yield this.handler.AdicionarMensagem(conversaRequest));
            }
            catch (error) {
                next(error);
            }
        });
    }
};
ConversaController = __decorate([
    typedi_1.Service(),
    __param(0, typedi_1.Inject("app")),
    __metadata("design:paramtypes", [Function, conversaHandler_1.ConversaHandler])
], ConversaController);
exports.ConversaController = ConversaController;
//# sourceMappingURL=conversaController.js.map