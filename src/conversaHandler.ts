import { Inject, Service } from "typedi";
import { Conversa } from "./model/conversa";
import { RepositoryConversa } from "./repository/repositoryConversa";

@Service('handler.conversa')
export class ConversaHandler {
    private readonly repositorio: RepositoryConversa;

    constructor(@Inject("repository.conversa") repository: RepositoryConversa) {
        this.repositorio = repository;
    }

    public async GetConversas(): Promise<Conversa[]> {
        return await this.repositorio.mostrar();
    }

    public async FindConversas(nome: string): Promise<Conversa> {
        const conversa = await this.repositorio.procurar(nome);

        if (!conversa)
            throw Error("Não foi possível encontrar a conversa!");

        return conversa;
    }

    public async postConversa(nome: string): Promise<void> {
        const conversa = new Conversa(nome);

        await this.repositorio.adicionar(conversa);
    }
}