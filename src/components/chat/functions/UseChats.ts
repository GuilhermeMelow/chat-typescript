import { IChatService } from "@/types/IChatService";
import { inject, ref } from "vue";

export default async function useChats() {
    const service = inject("chatService") as IChatService;
    const chats = ref(await service.pegarChats());

    return { chats };
}