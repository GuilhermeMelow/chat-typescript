import { IChatService } from "@/types/IChatService"
import { Chat } from "@/types/Chat";
import { ref, Ref } from "vue"

export interface IState {
    chats: Ref<Chat[]>
    chat: Ref<Chat | null>
}

export class Store {
    private service: IChatService;

    constructor(service: IChatService) {
        this.service = service;
    }

    public readonly state: IState = {
        chats: ref([]),
        chat: ref(null)
    };

    public async inicializar(): Promise<void> {
        const chats = await this.service.pegarChats();
        this.state.chats.value = chats;
    }

    public adicionar(chat: Chat): void {
        this.service.adicionar(chat);
        this.state.chats.value.push(chat);

        this.abrirConversa(chat.id);
    }

    public abrirConversa(id: string): void {
        const chat = this.findChat(id);
        this.state.chat.value = chat;
        chat.abrir();
    }

    public adicionarMensagem(mensagem: string): void {
        const chatAtivo = this.state.chat;

        if (chatAtivo.value)
            chatAtivo.value.adicionarMensagem(mensagem);
    }

    public findChat(id: string): Chat {
        const chat = this.state.chats.value.find(c => c.id == id);
        if (chat == null) throw new Error("Não existe a conversa.");

        return chat;
    }
}