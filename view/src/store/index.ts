import { IChatApi } from "@/types/IChatApi"
import { Chat } from "@/types/Chat";
import { reactive } from "vue"
import { IState } from "../types/IState";
import { IStore } from "../types/IStore";
import { IEventWs } from "@/services/EventWs";


export function CreateStore(chatApi: IChatApi, eventWs: IEventWs): IStore {
    const state: IState = reactive({
        salas: [],
        chat: null
    });

    const criarSala = (nome: string): void => {
        const sala = new Chat(nome);

        chatApi.adicionar(sala);
        state.salas.push(sala);

        eventWs.send("criarSala", sala);

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

    const redirecionarSala = () => {
        const salasAtivas = state.salas.filter(s => s.aberto);

        state.chat = salasAtivas.length > 0 ? salasAtivas[0] : null;
    }

    const fecharSala = (sala: Chat): void => {
        const salaNaLista = state.salas.find(s => s.nome == sala.nome);

        if (!salaNaLista || !state.chat) return;

        salaNaLista.fechar();

        const salaAtiva = salaNaLista.nome === state.chat.nome;
        if (salaAtiva) redirecionarSala();
    }

    const enviar = async (mensagem: string): Promise<void> => {
        if (!state.chat)
            throw new Error("Não existe chat ativo...");

        await chatApi.enviar(mensagem, state.chat);
        state.chat.enviar(mensagem);

        eventWs.send("enviarMensagem", { nome: state.chat.nome, mensagem });
    }

    eventWs.createListener("criarSala", (data: any) => {
        state.salas.push(new Chat(data.nome, data.mensagens));
    });

    eventWs.createListener("enviarMensagem", (data: any) => {
        const sala = state.salas.find(s => s.nome == data.nome);
        sala?.enviar(data.mensagem);
    });

    return {
        state,
        criarSala,
        abrirSala,
        fecharSala,
        inicializarSalas,
        enviar
    }
}