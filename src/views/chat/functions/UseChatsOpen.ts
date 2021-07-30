import { Store } from "@/store";
import { Chat } from "@/types/Chat";
import { computed, ComputedRef } from "vue";
import InjectStrict from "@/Utils/InjectStrict";
import { IUseChatsOpen } from "../../../types/composableFunctions/IUseChatsOpen";

export function UseChatsOpen(): IUseChatsOpen {
    const store = InjectStrict<Store>("store");

    const chatsOpen: ComputedRef<Chat[]> = computed<Chat[]>(() => {
        return store.state.chats.value.filter((c) => c.isAberto());
    });

    const send = (mensagem: string): void => {
        store.enviarMensagem(mensagem);
    };

    return { chatsOpen, activeChat: store.state.chat, send };
}