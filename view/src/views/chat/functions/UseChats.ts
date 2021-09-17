import { IStore } from "@/types/IStore";
import { Chat } from "@/types/Chat";
import { computed } from "vue";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function UseChats(store: IStore) {

    return {
        ...store,
        salasAbertas: computed<Chat[]>(() => store.state.salas.filter((p) => p.aberto))
    };
}
