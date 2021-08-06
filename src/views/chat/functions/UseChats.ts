import { IStore } from "@/store/IStore";
import { Chat } from "@/types/Chat";
import { computed, onMounted, shallowReactive } from "vue";
import InjectStrict from "@/Utils/InjectStrict";

export function UseChats() {
    const store = shallowReactive(InjectStrict<IStore>("store"));

    onMounted(async () => await store.carregarConversas());

    return {
        ...store,
        chatsOpen: computed<Chat[]>(() => store.conversasAbertas())
    };
}