import { Chat } from "../store/models/chat/Chat";

export interface IChatApi {
    adicionar(chat: Chat): Promise<void>;

    enviar(mensagem: string, chat: Chat): Promise<void>;

    entrar(nome: string): Promise<Chat>;

    pegarChats(): Promise<Chat[]>;
}
