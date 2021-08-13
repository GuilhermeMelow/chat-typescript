import { Conversa } from "../model/conversa";

export class RepositoryConversa {
    private readonly conversas: Conversa[];

    constructor() {
        this.conversas = [];
    }

    public adicionar(conversa: Conversa): void {
        this.conversas.push(conversa);
    }

    public procurar(nome: string): Conversa | undefined {
        return this.conversas.find(c => c.nome == nome);
    }

    public mostrar(): Conversa[] {
        return this.conversas.slice();
    }
}