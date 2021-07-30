import { Store } from "@/store";
import { Chat } from "@/types/Chat";
import { computed, ComputedRef, Ref } from "vue";
import InjectStrict from "@/Utils/InjectStrict";

interface IUseChatsOpen {
    chatsOpen: ComputedRef<Chat[]>;
    activeChat: Ref<Chat | null>;
    send(mensagem: string): void;
}

export function UseChatsOpen(): IUseChatsOpen {
    const store = InjectStrict<Store>("store");

    const chatsOpen: ComputedRef<Chat[]> = computed<Chat[]>(() => {
        return store.state.chats.value.filter((c) => c.isAberto());
    });

    const send = (mensagem: string): void => {
        store.adicionarMensagem(mensagem);
    };

    return { chatsOpen, activeChat: store.state.chat, send };
}