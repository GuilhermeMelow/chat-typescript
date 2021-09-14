import { Chat } from "@/types/Chat";
import { IState } from "./IState";

export interface IStore {
    abrirSala(chat: Chat): void;
    criarSala(nome: string): Promise<void>;
    enviar(mensagem: string): Promise<void>;
    fecharSala(sala: Chat): void;
    inicializarSalas(): Promise<void>;
    state: IState;
}
