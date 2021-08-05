import { IChatService } from "@/types/IChatService"
import { Chat } from "@/types/Chat";
import { reactive } from "vue"
import { IState } from "../types/IState";
import { IStore } from "./IStore";

export function CreateStore(service: IChatService): IStore {

    const state: IState = reactive({
        chats: [],
        chat: null
    });

    const conversasAbertas = () => state.chats.filter(p => p.isAberto())

    const chatAtivo = (): Chat => {
        if (!state.chat)
            throw new Error("Não existe chat ativo...");

        return state.chat;
    }

    const adicionar = (nome: string): void => {
        const chat = new Chat(nome);

        service.adicionar(chat);
        state.chats.push(chat);

        abrirConversa(chat);
    }

    const carregarConversas = async (): Promise<void> => {
        const chats = await service.pegarChats();
        state.chats = chats;

        abrirConversa(chats[0]);
    }

    const abrirConversa = (chat: Chat): void => {
        if (!chat) return;

        chat.abrir();
        state.chat = chat;
    }

    const enviarMensagem = (mensagem: string): void => {
        chatAtivo().enviarMensagem(mensagem);
    }

    return {
        state,
        conversasAbertas,
        adicionar,
        abrirConversa,
        carregarConversas,
        enviarMensagem
    }
}