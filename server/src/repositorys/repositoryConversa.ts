import { Conversa } from "../models/conversa";

export interface IRepositoryConversa {
    adicionar(conversa: Conversa): Promise<void>;
    procurar(nome: string): Promise<Conversa | undefined>;
    mostrar(): Promise<Conversa[]>;
}

export class RepositoryConversa implements IRepositoryConversa {
    private readonly conversas: Conversa[] = []

    public async adicionar(conversa: Conversa): Promise<void> {
        this.conversas.push(conversa);
    }

    public procurar(nome: string): Promise<Conversa | undefined> {
        return new Promise((resolve) => resolve(this.conversas.find(c => c.nome == nome)));
    }

    public async mostrar(): Promise<Conversa[]> {
        return new Promise((resolve) => resolve(this.conversas.slice()));
    }
}