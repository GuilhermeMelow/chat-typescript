import { Chat } from "@/types/Chat";
import { Ref } from "vue";

export interface IState {
    chats: Chat[];
    chat: Chat | null;
}
