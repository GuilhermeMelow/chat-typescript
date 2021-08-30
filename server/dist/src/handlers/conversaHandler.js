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
exports.ConversaHandler = void 0;
const typedi_1 = require("typedi");
const conversa_1 = require("../models/conversa");
const ErrorHandler_1 = require("../utils/ErrorHandler");
let ConversaHandler = class ConversaHandler {
    constructor(repository) {
        this.repositorio = repository;
    }
    GetConversas() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repositorio.mostrar();
        });
    }
    FindConversa(nome) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repositorio.procurar(nome);
        });
    }
    postConversa(nome) {
        return __awaiter(this, void 0, void 0, function* () {
            if (nome.trim() === "")
                throw new ErrorHandler_1.ErrorHandler(404, "Não é possível criar uma conversa com um nome vazio!");
            yield this.repositorio.adicionar(new conversa_1.Conversa(nome));
        });
    }
    AdicionarMensagem(conversaRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            if (conversaRequest.mensagem === '' || conversaRequest.mensagem == null)
                throw new ErrorHandler_1.ErrorHandler(404, "Não é possível enviar uma mensagem vazia!");
            yield this.repositorio.adicionarMensagem(conversaRequest.nome, conversaRequest.mensagem);
        });
    }
};
ConversaHandler = __decorate([
    typedi_1.Service(),
    __param(0, typedi_1.Inject("repository.conversa")),
    __metadata("design:paramtypes", [Object])
], ConversaHandler);
exports.ConversaHandler = ConversaHandler;
//# sourceMappingURL=conversaHandler.js.map