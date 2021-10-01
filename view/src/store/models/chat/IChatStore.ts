import { Chat } from "@/store/models/chat/Chat";
import { Message } from "@/types/Message";
import { IState } from "./IChatState";

export interface IStore {
    state: IState;
    abrirSala(chat: Chat): void;
    criarSala(nome: string): Promise<void>;
    enviar(mensagem: Message): Promise<void>;
    fecharSala(sala: Chat): void;
    inicializarSalas(): Promise<void>;
}
