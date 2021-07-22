import { IChatService } from "@/types/IChatService"
import { Chat } from "@/types/Chat";
import { ref, Ref } from "vue"

export interface IState {
    chats: Ref<Chat[]>
}

export class Store {
    private service: IChatService;

    constructor(service: IChatService) {
        this.service = service;
    }

    public readonly state: IState = {
        chats: ref([]),
    };

    public async inicializar(): Promise<void> {
        const chats = await this.service.pegarChats();
        this.state.chats.value = chats;
    }

    public adicionar(chat: Chat): void {
        this.service.adicionar(chat);
        this.state.chats.value.push(chat);
    }

    public abrirConversa(id: string): void {
        const chat = this.findChat(id)
        chat.abrir();
    }

    public adicionarMensagem(mensagem: string, id: string): void {
        const chat = this.findChat(id);
        chat.adicionarMensagem(mensagem);
    }

    private findChat(id: string): Chat {
        const chat = this.state.chats.value.find(c => c.id == id);
        if (chat == null) throw new Error("Não existe a conversa.");

        return chat;
    }
}