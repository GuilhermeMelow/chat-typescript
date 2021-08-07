import { IStore } from "@/store/IStore";
import { Chat } from "@/types/Chat";
import { computed, onMounted, shallowReactive } from "vue";
import InjectStrict from "@/Utils/InjectStrict";

export function UseChats() {
    const store = shallowReactive(InjectStrict<IStore>("store"));

    onMounted(async () => await store.inicializarSalas());

    return {
        ...store,
        salasAbertas: computed<Chat[]>(() => store.state.salas.filter(p => p.isAberto()))
    };
}