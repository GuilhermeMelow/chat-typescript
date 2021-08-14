import { Service } from "typedi";
import { Conversa } from "../models/conversa";

@Service("repository.conversa")
export class RepositoryConversa {
    private readonly conversas: Conversa[];

    constructor() {
        this.conversas = [];
    }

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