import { Store } from "@/store";
import { Chat } from "@/types/Chat";
import { computed, ComputedRef, Ref, shallowRef } from "vue";
import InjectStrict from "@/Utils/InjectStrict";

interface IUseChatsOpen {
    chatsOpen: ComputedRef<Chat[]>;
    activeChat: Ref<Chat>;
    send(mensagem: string): void;
}

export function UseChatsOpen(): IUseChatsOpen {
    const store = InjectStrict<Store>("store");

    const chatsOpen: ComputedRef<Chat[]> = computed<Chat[]>(() => {
        return store.state.chats.value.filter((c) => c.isAberto());
    });

    const activeChat = shallowRef(chatsOpen.value[0]);

    const send = (mensagem: string): void => {
        store.adicionarMensagem(mensagem, activeChat.value.id);
    };

    return { chatsOpen, activeChat, send };
}