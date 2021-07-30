import { IChatService } from "@/types/IChatService"
import { Chat } from "@/types/Chat";
import { ref } from "vue"
import { IState } from "../types/IState";

export class Store {
    private service: IChatService;

    constructor(service: IChatService) {
        this.service = service;
    }

    public readonly state: IState = {
        chats: ref([]),
        chat: ref(null)
    };

    private getChatAtivo(): Chat {
        if (!this.state.chat.value)
            throw new Error("Não existe chat ativo...");

        return this.state.chat.value;
    }

    public async inicializar(): Promise<void> {
        const chats = await this.service.pegarChats();
        this.state.chats.value = chats;
    }

    public adicionar(chat: Chat): void {
        this.service.adicionar(chat);
        this.state.chats.value.push(chat);

        this.abrirConversa(chat);
    }

    public abrirConversa(chat: Chat): void {
        this.state.chat.value = chat;

        chat.abrir();
    }

    public enviarMensagem(mensagem: string): void {
        this.getChatAtivo().enviarMensagem(mensagem);
    }
}