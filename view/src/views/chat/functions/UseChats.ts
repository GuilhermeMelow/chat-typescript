import { IStore } from "@/types/IStore";
import { Chat } from "@/types/Chat";
import { computed } from "vue";

export const useChats = (store: IStore) => {

    return {
        ...store,
        salasAbertas: computed<Chat[]>(() => store.state.salas.filter((p) => p.aberto)),
    };
}
