import { Chat } from "@/types/Chat";
import { ComputedRef, Ref } from "vue";

export interface IUseChats {
    chats: Ref<Chat[]>;
    chatsOpen: ComputedRef<Chat[]>;
}
