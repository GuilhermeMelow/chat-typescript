import { Chat } from "@/types/Chat";
import { Ref } from "vue";

export interface IState {
    salas: Chat[];
    chat: Chat | null;
}
