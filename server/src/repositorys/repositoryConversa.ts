import { Conversa } from '../models/conversa';
import { Mensagem } from '../models/mensagem';

export interface IRepositoryConversa {
    mostrar(): Promise<Conversa[]>;
    procurar(nome: string): Promise<Conversa>;
    adicionar(conversa: Conversa): Promise<void>;
    adicionarMensagem(nome: string, mensagem: Mensagem): Promise<void>;
}

export class RepositoryConversa implements IRepositoryConversa {
    private readonly conversas: Conversa[] = []

    public async adicionar(conversa: Conversa): Promise<void> {
        this.conversas.push(conversa);
    }

    public async adicionarMensagem(nome: string, mensagem: Mensagem): Promise<void> {
        const conversa = await this.procurar(nome);

        conversa.adicionarMensagem(mensagem);
    }

    public procurar(nome: string): Promise<Conversa> {
        const conversa = this.conversas.find((c) => c.nome === nome);

        if (!conversa) {
            throw new Error('Não foi possível encontrar a conversa!');
        }

        return Promise.resolve(conversa);
    }

    public async mostrar(): Promise<Conversa[]> {
        return Promise.resolve(this.conversas.slice());
    }
}
