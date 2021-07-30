import { Chat } from "@/types/Chat";
import { ComputedRef, Ref } from "vue";

export interface IUseChatsOpen {
    chatsOpen: ComputedRef<Chat[]>;
    activeChat: Ref<Chat | null>;
    send(mensagem: string): void;
}
