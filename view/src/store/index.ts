import { IChatApi } from "@/types/IChatApi"
import { Chat } from "@/types/Chat";
import { reactive } from "vue"
import { IState } from "../types/IState";
import { IStore } from "../types/IStore";
import { IEventWs } from "@/services/EventWs";
import { IMessage } from "@/types/IMessage";


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

    const redirecionarSala = () => {
        const salaAtiva = state.salas.find((s) => s.aberto);

        if (salaAtiva) {
            state.chat = salaAtiva;
        }
    }

    // TODO: Reestruturar esse metodo
    const fecharSala = (sala: Chat): void => {
        const salaNaLista = state.salas.find((s) => s.nome === sala.nome);
        if (!salaNaLista || !state.chat) {
            return;
        }

        salaNaLista.fechar();

        const salaAtiva = salaNaLista.nome === state.chat.nome;
        if (salaAtiva) {
            redirecionarSala();
        }
    }

    const enviar = async (mensagem: string): Promise<void> => {
        if (!state.chat) {
            throw new Error("Não existe chat ativo...");
        }

        await chatApi.enviar(mensagem, state.chat);
        state.chat.enviar(mensagem);
        const message: IMessage = { nome: state.chat.nome, mensagem };

        eventWs.send<IMessage>("enviarMensagem", message);
    }

    eventWs.createListener<Chat>("criarSala", (data: Chat) => {
        state.salas.push(new Chat(data.nome, data.mensagens));
    });

    eventWs.createListener<IMessage>("enviarMensagem", (data: IMessage) => {
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
