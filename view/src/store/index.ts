import { IChatApi } from "@/types/IChatApi"
import { reactive } from "vue"
import { IEventWs } from "@/services/EventWs";
import { IMessageResponse } from "@/types/IMessageResponse";
import { Chat, IState, IStore } from "./models/chat/Index";
import { Message } from "@/types/Message";


export const createStore = (chatApi: IChatApi, eventWs: IEventWs): IStore => {

    const state: IState = reactive({
        chat: null,
        salas: [],
    });

    const abrirSala = (chat?: Chat): void => {
        if (!chat) {
            return;
        }

        state.chat = chat;
        state.chat.abrir();
    }

    const criarSala = async (nome: string): Promise<void> => {
        const sala = new Chat(nome);

        await chatApi.adicionar(sala);
        state.salas.push(sala);
        eventWs.send("criarSala", sala);

        abrirSala(sala);
    }

    const inicializarSalas = async (): Promise<void> => {
        state.salas = await chatApi.pegarChats();
        const lastIndex = state.salas.length - 1;
        const ultimaSala = state.salas[lastIndex];

        abrirSala(ultimaSala);
    }

    const fecharSala = (sala: Chat): void => {

        sala.fechar();

        const isSalaAtiva = sala.nome === state.chat?.nome;

        if (isSalaAtiva) {
            state.chat = state.salas.filter((p) => p.aberto)?.[0];
        }
    }

    const enviar = async (value: string, sender: string): Promise<void> => {
        const mensagem: Message = { sender, value };

        if (!state.chat) {
            throw new Error("Não existe chat ativo...");
        }

        await chatApi.enviar(mensagem, state.chat);
        state.chat.enviar(mensagem);
        const message: IMessageResponse = { nome: state.chat.nome, mensagem };

        eventWs.send<IMessageResponse>("enviarMensagem", message);
    }

    eventWs.createListener<Chat>("criarSala", (data: Chat) => {
        state.salas.push(new Chat(data.nome, data.mensagens));
    });

    eventWs.createListener<IMessageResponse>("enviarMensagem", (data: IMessageResponse) => {
        const sala = state.salas.find((s) => s.nome === data.nome);
        sala?.enviar(data.mensagem);
    });

    return {
        abrirSala,
        criarSala,
        enviar,
        fecharSala,
        inicializarSalas,
        state,
    }
}
