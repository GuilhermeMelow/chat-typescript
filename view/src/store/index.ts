import { IChatApi } from "@/types/IChatApi"
import { Chat } from "@/types/Chat";
import { reactive } from "vue"
import { IState } from "../types/IState";
import { IStore } from "../types/IStore";

export function CreateStore(chatApi: IChatApi): IStore {

    const state: IState = reactive({
        salas: [],
        chat: null
    });

    const criarSala = (nome: string): void => {
        const sala = new Chat(nome);

        chatApi.adicionar(sala);
        state.salas.push(sala);

        abrirSala(sala);
    }

    const inicializarSalas = async (): Promise<void> => {
        state.salas = await chatApi.pegarChats();
        const lastIndex = state.salas.length - 1;

        abrirSala(state.salas[lastIndex]);
    }

    const abrirSala = (chat?: Chat): void => {
        if (!chat) return;

        state.chat = chat;
        state.chat.abrir();
    }

    const enviar = async (mensagem: string): Promise<void> => {
        if (!state.chat)
            throw new Error("Não existe chat ativo...");

        await chatApi.enviar(mensagem, state.chat);
        state.chat.enviar(mensagem);
    }

    return {
        state,
        criarSala,
        abrirSala,
        inicializarSalas,
        enviar
    }
}