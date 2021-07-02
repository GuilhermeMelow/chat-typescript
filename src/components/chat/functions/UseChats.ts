import { IChat, IChatService } from "@/types/IChatService";
import { inject, Ref, ref } from "vue";

const chats: Ref<IChat[]> = ref([]);

export default function useChats() {
    const service = inject("chatService") as IChatService;

    const inicializar = async () => {
        const response = await service.pegarChats();
        chats.value = response;
    }

    const adicionar = async (nome: string) => {
        const chat = { id: "asdf", nome };

        await service.adicionar(chat);
        chats.value.push(chat);
    }

    return { adicionar, chats, inicializar };
}