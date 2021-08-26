export class Sala {
    public nome: string;
    private _aberto: boolean;
    private _mensagens: string[] = [];

    constructor(nome: string, mensagens: string[] = []) {
        this.nome = nome;
        this._mensagens = mensagens;
        this._aberto = false;
    }

    public abrir(): void {
        this._aberto = true
    }

    public fechar(): void {
        this._aberto = false;
    }

    public enviar(mensagem: string): void {
        this._mensagens.push(mensagem);
    }

    public get aberto(): boolean {
        return this._aberto;
    }

    public get mensagens(): string[] {
        return this._mensagens.slice();
    }
}