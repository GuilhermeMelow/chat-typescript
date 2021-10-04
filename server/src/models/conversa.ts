import { Mensagem } from "./mensagem";

export class Conversa {
    public nome: string;
    private _mensagens: Mensagem[] = [];

    constructor(nome: string) {
        this.nome = nome;
    }

    public get mensagens(): Mensagem[] {
        return this._mensagens.slice();
    }

    public adicionarMensagem(mensagem: Mensagem): void {
        this._mensagens.push(mensagem);
    }
}
