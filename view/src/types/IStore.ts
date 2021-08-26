import { Sala } from "@/types/Sala";
import { IState } from "./IState";

export interface IStore {
    state: IState;
    criarSala(nome: string): void;
    abrirSala(chat: Sala): void;
    inicializarSalas(): Promise<void>;
    enviar(mensagem: string): Promise<void>;
}
