import { Sala } from "./Sala";

export interface IChatApi {
    adicionar(chat: Sala): Promise<void>;

    enviar(mensagem: string, chat: Sala): Promise<void>;

    entrar(nome: string): Promise<Sala>;

    pegarChats(): Promise<Sala[]>;
}
