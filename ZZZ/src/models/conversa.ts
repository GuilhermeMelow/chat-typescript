export class Conversa {
    public nome: string;
    private _mensagens: string[] = [];

    constructor(nome: string) {
        this.nome = nome;
    }

    public enviar(mensagem: string): void {
        this._mensagens.push(mensagem);
    }

    public get mensagens(): string[] {
        return this._mensagens.slice();
    }
}
