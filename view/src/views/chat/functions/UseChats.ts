import { IStore } from "@/store/models/chat/IChatStore";
import { Chat } from "@/store/models/chat/Chat";
import { computed } from "vue";
import { IUserStore } from "@/store/models/user/IUserStore";

export const useChats = (chatStore: IStore, userStore: IUserStore) => {

    return {
        ...chatStore,
        user: userStore.state.user,
        salasAbertas: computed<Chat[]>(() => chatStore.state.salas.filter((p) => p.aberto)),
    };
}
