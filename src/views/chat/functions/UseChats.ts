import { IStore } from "@/store/IStore";
import { Chat } from "@/types/Chat";
import { computed, ComputedRef, onMounted, shallowReactive } from "vue";
import InjectStrict from "@/Utils/InjectStrict";

export function UseChats() {
    const store = shallowReactive(InjectStrict<IStore>("store"));

    onMounted(async () => await store.carregarConversas());

    const chatsOpen: ComputedRef<Chat[]> = computed<Chat[]>(() => {
        return store.state.chats.filter((c) => c.isAberto());
    });

    return {
        ...store,
        chatsOpen
    };
}