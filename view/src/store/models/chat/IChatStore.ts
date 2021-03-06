import { Chat } from "@/store/models/chat/Chat";
import { IState } from "./IChatState";

export interface IStore {
    state: IState;
    abrirSala(chat: Chat): void;
    criarSala(nome: string): Promise<void>;
    enviar(mensagemValue: string, sender: string): Promise<void>;
    fecharSala(sala: Chat): void;
    inicializarSalas(): Promise<void>;
}
