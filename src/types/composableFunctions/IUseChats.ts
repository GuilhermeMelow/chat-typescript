import { Chat } from "@/types/Chat";
import { Ref } from "vue";

export interface IUseChats {
    chats: Ref<Chat[]>;
}
