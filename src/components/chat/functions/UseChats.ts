import InjectStrict from "@/Utils/InjectStrict";
import { Store } from "@/store";
import { IUseChats } from "@/types/composableFunctions/IUseChats";
import { computed, onMounted } from "vue";

export function UseChats(): IUseChats {
    const store = InjectStrict<Store>("store");

    const chats = store.state.chats;
    const chatsOpen = computed(() => chats.value.filter((c) => c.isAberto()));

    onMounted(async () => await store.inicializar());

    return { chats, chatsOpen };
}