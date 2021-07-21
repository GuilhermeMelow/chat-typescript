import { Chat } from "@/types/Chat";
import { ComputedRef, Ref } from "vue";

export interface IUseChats {
    criarConversa(nome: string): void;
    abrirConversa(id: string): void;
    chats: Ref<Chat[]>;
    chatsOpen: ComputedRef<Chat[]>;
}
