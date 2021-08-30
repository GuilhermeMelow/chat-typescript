"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conversa = void 0;
class Conversa {
    constructor(nome) {
        this._mensagens = [];
        this.nome = nome;
    }
    adicionarMensagem(mensagem) {
        this._mensagens.push(mensagem);
    }
    get mensagens() {
        return this._mensagens.slice();
    }
}
exports.Conversa = Conversa;
//# sourceMappingURL=conversa.js.map