import { Store } from "@/store";
import { Chat } from "@/types/Chat";
import { computed, ComputedRef } from "vue";
import InjectStrict from "@/Utils/InjectStrict";

interface IUseChatsOpen {
    chatsOpen: ComputedRef<Chat[]>
}

export function UseChatsOpen(): IUseChatsOpen {
    const store = InjectStrict<Store>("store");

    const chatsOpen = computed(() => {
        return store.state.chats.value.filter((c) => c.isAberto());
    });

    return { chatsOpen };
}