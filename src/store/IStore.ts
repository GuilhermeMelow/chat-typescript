import { Chat } from "@/types/Chat";
import { IState } from "../types/IState";


export interface IStore {
    state: IState;
    conversasAbertas(): Chat[]
    adicionar(nome: string): void;
    abrirConversa(chat: Chat): void;
    carregarConversas(): Promise<void>;
    enviarMensagem(mensagem: string): void;
}
