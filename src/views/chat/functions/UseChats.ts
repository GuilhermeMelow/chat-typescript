import { IStore } from "@/types/IStore";
import { Chat } from "@/types/Chat";
import { computed, onMounted, shallowReactive } from "vue";

export function UseChats(store: IStore) {
    onMounted(async () => await store.inicializarSalas());

    return {
        ...store,
        salasAbertas: computed<Chat[]>(() => store.state.salas.filter(p => p.isAberto()))
    };
}