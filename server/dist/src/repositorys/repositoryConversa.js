"use strict";
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
exports.RepositoryConversa = void 0;
class RepositoryConversa {
    constructor() {
        this.conversas = [];
    }
    adicionar(conversa) {
        return __awaiter(this, void 0, void 0, function* () {
            this.conversas.push(conversa);
        });
    }
    adicionarMensagem(nome, mensagem) {
        return __awaiter(this, void 0, void 0, function* () {
            const conversa = yield this.procurar(nome);
            conversa.adicionarMensagem(mensagem);
        });
    }
    procurar(nome) {
        const conversa = this.conversas.find(c => c.nome == nome);
        if (!conversa)
            throw new Error("Não foi possível encontrar a conversa!");
        return new Promise((resolve) => resolve(conversa));
    }
    mostrar() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => resolve(this.conversas.slice()));
        });
    }
}
exports.RepositoryConversa = RepositoryConversa;
//# sourceMappingURL=repositoryConversa.js.map