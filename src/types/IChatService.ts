export interface IChatService {
    adicionar(usuario: IUser): void;

    entrar(username: string): IUser;
}

export interface IUser {
    id: string;
    nome: string;
}