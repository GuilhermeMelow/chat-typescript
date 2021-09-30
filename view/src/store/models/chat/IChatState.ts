import { Chat } from "@/store/models/chat/Chat";

export interface IState {
    salas: Chat[];
    chat: Chat | null;
}
