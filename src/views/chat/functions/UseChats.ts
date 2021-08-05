import { Store } from "@/store";
import { Chat } from "@/types/Chat";
import { computed, ComputedRef } from "vue";
import InjectStrict from "@/Utils/InjectStrict";

export function UseChats() {
    const store = InjectStrict<Store>("store");

    const chatsOpen: ComputedRef<Chat[]> = computed<Chat[]>(() => {
        return store.state.chats.filter((c) => c.isAberto());
    });

    return {
        state: store.state,
        chatsOpen,
        adicionar: (nome: string) => store.adicionar(nome),
        abrirConversa: (chat: Chat) => store.abrirConversa(chat),
        send: (mensagem: string) => store.enviarMensagem(mensagem)
    };
}