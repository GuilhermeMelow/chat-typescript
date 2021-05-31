import { IChatService } from "@/types/IChatService";
import { inject, ref } from "vue";

export default function useChats() {
    const service = inject("chatService") as IChatService;
    const chats = ref(service.pegarChats());

    return { chats };
}