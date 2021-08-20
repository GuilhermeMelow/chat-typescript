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

    public async AdicionarMensagem(conversaRequest: IConversaRequest): Promise<void> {
        if (conversaRequest.mensagem === '' || conversaRequest.mensagem == null) {
            throw new ErrorHandler(404, "Não é possível enviar uma mensagem vazia!")
        }

        const conversa = await this.FindConversas(conversaRequest.nome);

        conversa.enviar(conversaRequest.mensagem);
    }
}