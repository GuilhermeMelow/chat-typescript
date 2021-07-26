import InjectStrict from "@/Utils/InjectStrict";
import { Store } from "@/store";
import { IUseChats } from "@/types/composableFunctions/IUseChats";
import { onMounted } from "vue";

export function UseChats(): IUseChats {
    const store = InjectStrict<Store>("store");
    const chats = store.state.chats;
    onMounted(async () => await store.inicializar());

    return { chats };
}