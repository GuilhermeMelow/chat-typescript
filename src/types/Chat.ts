export class Chat {
    public id: string;
    public nome: string;
    private aberto: boolean;
    private mensagens: string[] = [];

    constructor(nome: string, id?: string) {
        this.id = id ?? Math.random().toString(36).substring(7);
        this.nome = nome;
        this.aberto = false;
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

    public adicionarMensagem(mensagem: string): void {
        this.mensagens.push(mensagem);
    }

    public getMensagens(): string[] {
        const copyMensagens = this.mensagens.map(m => m);
        return copyMensagens;
    }
}