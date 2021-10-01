import { Chat } from "../store/models/chat/Chat";
import { Message } from "./Message";

export interface IChatApi {
    adicionar(chat: Chat): Promise<void>;

    enviar(mensagem: Message, chat: Chat): Promise<void>;

    entrar(nome: string): Promise<Chat>;

    pegarChats(): Promise<Chat[]>;
}
