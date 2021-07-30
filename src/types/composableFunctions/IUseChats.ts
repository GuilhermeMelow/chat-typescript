import { Chat } from "@/types/Chat";
import { Ref } from "vue";

export interface IUseChats {
    chats: Ref<Chat[]>;
    abrirConversa(chat: Chat): void;
    criarConversa(nome: string): void;
}
