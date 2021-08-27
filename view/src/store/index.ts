import { IChatApi } from "@/types/IChatApi"
import { Chat } from "@/types/Chat";
import { reactive } from "vue"
import { IState } from "../types/IState";
import { IStore } from "../types/IStore";

/* eslint-disable  @typescript-eslint/no-explicit-any */

interface IEventListener {
    key: string,
    callback(data: any): void
}

export function CreateStore(chatApi: IChatApi, ws: WebSocket): IStore {

    const state: IState = reactive({
        salas: [],
        chat: null
    });

    const criarSala = (nome: string): void => {
        const sala = new Chat(nome);

        chatApi.adicionar(sala);
        state.salas.push(sala);
        ws.send(createEvent("criarSala", sala));

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

        ws.send(createEvent("enviarMensagem", { nome: state.chat.nome, mensagem }));
    }

    const eventListeners: IEventListener[] = [];

    const createEvent = (key: string, value: any): string => {
        return JSON.stringify({ key, value })
    }

    const createListener = (key: string, callback: (data: any) => void) => {
        eventListeners.push({ key, callback });
    }

    createListener("criarSala", (data: any) => {
        state.salas.push(new Chat(data.nome, data.mensagens));
    });

    createListener("enviarMensagem", (data: any) => {
        const sala = state.salas.find(s => s.nome == data.nome);
        sala?.enviar(data.mensagem);
    });

    ws.addEventListener("message", (message) => {
        const data = JSON.parse(message.data);
        const eventListener = eventListeners.find(l => l.key == data.key);

        eventListener?.callback(data.value);
    })

    return {
        state,
        criarSala,
        abrirSala,
        inicializarSalas,
        enviar
    }
}