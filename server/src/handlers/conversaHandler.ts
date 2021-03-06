import { Inject, Service } from 'typedi';
import { Conversa } from '../models/conversa';
import { IConversaRequest } from '../models/IConversaRequest';
import { IRepositoryConversa } from '../repositorys/repositoryConversa';
import { ErrorHandler } from '../utils/ErrorHandler';
import httpCodes from '../utils/HttpCodes.json';


@Service()
export class ConversaHandler {
    constructor(@Inject('repository.conversa') private readonly repositorio: IRepositoryConversa) { }

    public async getConversas(): Promise<Conversa[]> {
        return this.repositorio.mostrar();
    }

    public async findConversa(nome: string): Promise<Conversa> {
        return this.repositorio.procurar(nome);
    }

    public async postConversa(nome: string): Promise<void> {
        if (nome.trim() === '') {
            throw new ErrorHandler(httpCodes.NotFound, 'Não é possível criar uma conversa com um nome vazio!');
        }

        await this.repositorio.adicionar(new Conversa(nome));
    }

    public async adicionarMensagem(conversaRequest: IConversaRequest): Promise<void> {
        const hasMensagem: boolean = conversaRequest.mensagem.value !== ''
            && conversaRequest.mensagem.sender.toString() !== '';

        if (!hasMensagem || conversaRequest.mensagem === null) {
            throw new ErrorHandler(httpCodes.NotFound, 'Não é possível enviar uma mensagem vazia!');
        }

        await this.repositorio.adicionarMensagem(conversaRequest.nome, conversaRequest.mensagem);
    }
}
