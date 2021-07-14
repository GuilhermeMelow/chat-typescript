export interface IChatService {
    adicionar(chat: IChat): Promise<number>;

    entrar(nome: string): Promise<IChat>;

    pegarChats(): Promise<IChat[]>;
}

export interface IChat {
    id: string;
    nome: string;
    aberto: boolean;
}