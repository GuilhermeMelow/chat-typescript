import { IStore } from "@/types/IStore";
import { Chat } from "@/types/Chat";
import { computed, onMounted } from "vue";

export function UseChats(store: IStore) {

    return {
        ...store,
        salasAbertas: computed<Chat[]>(() => store.state.salas.filter(p => p.isAberto()))
    };
}