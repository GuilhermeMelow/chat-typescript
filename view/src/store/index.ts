import { IChatApi } from "@/types/IChatApi"
import { Sala } from "@/types/Sala";
import { reactive } from "vue"
import { IState } from "../types/IState";
import { IStore } from "../types/IStore";


export function CreateStore(chatApi: IChatApi): IStore {

    const state: IState = reactive({
        salas: [],
        sala: null
    });

    const criarSala = (nome: string): void => {
        const sala = new Sala(nome);

        chatApi.adicionar(sala);
        state.salas.push(sala);

        abrirSala(sala);
    }

    const inicializarSalas = async (): Promise<void> => {
        state.salas = await chatApi.pegarChats();
        const lastIndex = state.salas.length - 1;

        abrirSala(state.salas[lastIndex]);
    }

    const abrirSala = (sala?: Sala): void => {
        if (!sala) return;

        state.sala = sala;
        state.sala.abrir();
    }

    const enviar = async (mensagem: string): Promise<void> => {
        if (!state.sala)
            throw new Error("Não existe chat ativo...");

        await chatApi.enviar(mensagem, state.sala);
        state.sala.enviar(mensagem);
    }

    return {
        state,
        criarSala,
        abrirSala,
        inicializarSalas,
        enviar
    }
}