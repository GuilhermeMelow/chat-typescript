import { Chat } from "@/types/Chat";
import { Ref } from "vue";

export interface IState {
    chats: Ref<Chat[]>;
    chat: Ref<Chat | null>;
}
