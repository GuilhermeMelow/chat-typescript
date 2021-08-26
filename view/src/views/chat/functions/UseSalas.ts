import { IStore } from "@/types/IStore";
import { Sala } from "@/types/Sala";
import { computed } from "vue";

export function UseSalas(store: IStore) {

    return {
        ...store,
        salasAbertas: computed<Sala[]>(() => store.state.salas.filter(p => p.aberto))
    };
}