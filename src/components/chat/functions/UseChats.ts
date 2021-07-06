import InjectStrict from "@/Utils/InjectStrict";
import { IChat, IChatService } from "@/types/IChatService";
import { Ref, ref } from "vue";

interface IUseChats {
    inicializar(): void,
    adicionar(nome: string): void,
    chats: Ref<IChat[]>
}

const chats: Ref<IChat[]> = ref([]);

export default function useChats(): IUseChats {
    const service = InjectStrict<IChatService>("chatService");

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