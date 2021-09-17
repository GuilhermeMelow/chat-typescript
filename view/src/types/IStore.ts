import { Chat } from "@/types/Chat";
import { IState } from "./IState";

export interface IStore {
    state: IState;
    abrirSala(chat: Chat): void;
    criarSala(nome: string): Promise<void>;
    enviar(mensagem: string): Promise<void>;
    fecharSala(sala: Chat): void;
    inicializarSalas(): Promise<void>;
}
