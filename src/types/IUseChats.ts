import { IChat } from "@/types/IChatService";
import { ComputedRef, Ref } from "vue";

export interface IUseChats {
    adicionar(nome: string): void;
    abrirConversa(id: string): void;
    chats: Ref<IChat[]>;
    chatsOpen: ComputedRef<IChat[]>;
}
