import { Chat } from "@/types/Chat";

export interface IState {
    salas: Chat[];
    chat: Chat | null;
}
