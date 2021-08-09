export class Chat {
    public id: string;
    public nome: string;
    private aberto: boolean;
    private _mensagens: string[] = [];

    constructor(nome: string, id?: string, aberto: boolean = false) {
        this.id = id ?? Math.random().toString(36).substring(7);
        this.nome = nome;
        this.aberto = aberto;
    }

    public isAberto(): boolean {
        return this.aberto;
    }

    public abrir(): void {
        this.aberto = true
    }

    public fechar(): void {
        this.aberto = false;
    }

    public enviarMensagem(mensagem: string): void {
        this._mensagens.push(mensagem);
    }

    public get mensagens(): string[] {
        const copyMensagens = this._mensagens.map(m => m);
        return copyMensagens;
    }
}