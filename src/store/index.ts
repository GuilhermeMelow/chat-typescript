import { IChatService } from "@/types/IChatService"
import { Chat } from "@/types/Chat";
import { reactive, readonly } from "vue"
import { IState } from "../types/IState";
import { IStore } from "./IStore";

export function CreateStore(service: IChatService): IStore {

    const state: IState = reactive({
        chats: [],
        chat: null
    });

    const criarConversa = (nome: string): void => {
        const chat = new Chat(nome);

        service.adicionar(chat);
        state.chats.push(chat);

        abrirConversa(chat);
    }

    const carregarConversas = async (): Promise<void> => {
        const chats = await service.pegarChats();
        state.chats = chats;
        const lastIndex = chats.length - 1;

        abrirConversa(chats[lastIndex]);
    }

    const abrirConversa = (chat: Chat): void => {
        if (!chat) return;

        state.chat = chat;
        state.chat.abrir();
    }

    const enviarMensagem = (mensagem: string): void => {
        if (!state.chat)
            throw new Error("Não existe chat ativo...");

        state.chat.enviarMensagem(mensagem);
    }

    return {
        state,
        criarConversa,
        abrirConversa,
        carregarConversas,
        enviarMensagem
    }
}