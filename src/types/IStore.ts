import { Chat } from "@/types/Chat";
import { IState } from "./IState";

export interface IStore {
    state: IState;
    criarSala(nome: string): void;
    abrirSala(chat: Chat): void;
    inicializarSalas(): Promise<void>;
    enviarMensagem(mensagem: string): void;
}
