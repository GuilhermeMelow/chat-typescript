import { Inject, Service } from "typedi";
import { Conversa } from "../models/conversa";
import { IConversaRequest } from "../models/IConversaRequest";
import { IRepositoryConversa } from "../repositorys/repositoryConversa";
import { ErrorHandler } from "../utils/ErrorHandler";

@Service()
export class ConversaHandler {
    private readonly repositorio: IRepositoryConversa;

    constructor(@Inject("repository.conversa") repository: IRepositoryConversa) {
        this.repositorio = repository;
    }

    public async GetConversas(): Promise<Conversa[]> {
        return await this.repositorio.mostrar();
    }

    public async FindConversa(nome: string): Promise<Conversa> {
        return await this.repositorio.procurar(nome);
    }

    public async postConversa(nome: string): Promise<void> {
        if (nome.trim() === "")
            throw new ErrorHandler(404, "Não é possível criar uma conversa com um nome vazio!");

        await this.repositorio.adicionar(new Conversa(nome));
    }

    public async AdicionarMensagem(conversaRequest: IConversaRequest): Promise<void> {
        if (conversaRequest.mensagem === '' || conversaRequest.mensagem == null)
            throw new ErrorHandler(404, "Não é possível enviar uma mensagem vazia!")

        await this.repositorio.adicionarMensagem(conversaRequest.nome, conversaRequest.mensagem);
    }
}