import { IChatService } from "@/types/IChatService"
import { Chat } from "@/types/Chat";
import { reactive, readonly, ref } from "vue"
import { IState } from "../types/IState";

export interface IStore {
    state: IState,
    adicionar(): void,
}

export class Store {
    private service: IChatService;

    constructor(service: IChatService) {
        this.service = service;
    }

    public state: IState = reactive({
        chats: [],
        chat: null
    });

    private getChatAtivo(): Chat {
        if (!this.state.chat)
            throw new Error("Não existe chat ativo...");

        return this.state.chat;
    }

    public async carregarConversas(): Promise<void> {
        const chats = await this.service.pegarChats();
        this.state.chats = chats;
    }

    public adicionar(nome: string): void {
        const chat = new Chat(nome);

        this.service.adicionar(chat);
        this.state.chats.push(chat);

        this.abrirConversa(chat);
    }

    public abrirConversa(chat: Chat): void {
        this.state.chat = chat;

        chat.abrir();
    }

    public enviarMensagem(mensagem: string): void {
        this.getChatAtivo().enviarMensagem(mensagem);
    }
}