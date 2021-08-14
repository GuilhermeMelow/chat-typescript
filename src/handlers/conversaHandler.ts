import { Inject, Service } from "typedi";
import { Conversa } from "../models/conversa";
import { IRepositoryConversa } from "../repositorys/repositoryConversa";
import { ErrorHandler } from "../utils/ErrorHandler";

@Service('handler.conversa')
export class ConversaHandler {
    private readonly repositorio: IRepositoryConversa;

    constructor(@Inject("repository.conversa") repository: IRepositoryConversa) {
        this.repositorio = repository;
    }

    public async GetConversas(): Promise<Conversa[]> {
        return await this.repositorio.mostrar();
    }

    public async FindConversas(nome: string): Promise<Conversa> {
        const conversa: Conversa | undefined = await this.repositorio.procurar(nome);

        if (!conversa) {
            throw new ErrorHandler(404, "Não foi possível encontrar a conversa!");
        }

        return conversa;
    }

    public async postConversa(nome: string): Promise<void> {
        if (nome.trim() === "") {
            throw new ErrorHandler(404, "Não é possível criar uma conversa com um nome vazio!");
        }

        const conversa: Conversa = new Conversa(nome);

        await this.repositorio.adicionar(conversa);
    }
}