import { Conversa } from "../models/conversa";

export interface IRepositoryConversa {
    mostrar(): Promise<Conversa[]>;
    procurar(nome: string): Promise<Conversa>;
    adicionar(conversa: Conversa): Promise<void>;
    adicionarMensagem(nome: string, mensagem: string): Promise<void>;
}

export class RepositoryConversa implements IRepositoryConversa {
    private readonly conversas: Conversa[] = []

    public async adicionar(conversa: Conversa): Promise<void> {
        this.conversas.push(conversa);
    }

    public async adicionarMensagem(nome: string, mensagem: string): Promise<void> {
        const conversa = await this.procurar(nome);

        conversa.adicionarMensagem(mensagem);
    }

    public procurar(nome: string): Promise<Conversa> {
        const conversa = this.conversas.find(c => c.nome == nome);

        if (!conversa)
            throw new Error("Não foi possível encontrar a conversa!");

        return new Promise((resolve) => resolve(conversa));
    }

    public async mostrar(): Promise<Conversa[]> {
        return new Promise((resolve) => resolve(this.conversas.slice()));
    }
}