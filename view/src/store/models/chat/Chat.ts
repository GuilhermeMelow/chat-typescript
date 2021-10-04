import { Message } from "@/types/Message";

export class Chat {
    public nome: string;
    private _aberto: boolean;
    private _mensagens: Message[] = [];

    constructor(nome: string, mensagens: Message[] = []) {
        this.nome = nome;
        this._mensagens = mensagens;
        this._aberto = false;
    }

    public get aberto(): boolean {
        return this._aberto;
    }

    public get mensagens(): Message[] {
        return this._mensagens.slice();
    }

    public abrir(): void {
        this._aberto = true
    }

    public fechar(): void {
        this._aberto = false;
    }

    public enviar(mensagem: Message): void {
        this._mensagens.push(mensagem);
    }
}
