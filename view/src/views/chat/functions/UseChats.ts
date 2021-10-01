import { IStore } from "@/store/models/chat/IChatStore";
import { Chat } from "@/store/models/chat/Chat";
import { computed } from "vue";

export const useChats = (store: IStore) => {

    return {
        ...store,
        salasAbertas: computed<Chat[]>(() => store.state.salas.filter((p) => p.aberto)),
    };
}
