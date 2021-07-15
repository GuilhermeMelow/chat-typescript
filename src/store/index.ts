import { IChat, IChatService } from "@/types/IChatService"
import { ref, Ref } from "vue"

export interface IState {
    chats: Ref<IChat[]>
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

    public adicionar(chat: IChat): IChat {
        if (chat.id === "") chat.id = Math.random().toString(36).substring(7);

        this.service.adicionar(chat);
        this.state.chats.value.push(chat);

        return chat;
    }

    public abrirConversa(id: string): void {
        const chat = this.state.chats.value.find(c => c.id == id);

        if (chat == null) throw new Error("Não existe a conversa.");

        chat.aberto = true;
    }
}