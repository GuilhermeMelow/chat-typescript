import InjectStrict from "@/Utils/InjectStrict";
import { Store } from "@/store";
import { computed, onMounted } from "vue";
import { IUseChats } from "../../../types/IUseChats";
import { Chat } from "@/types/Chat";

export default function useChats(): IUseChats {
    const chatsOpen = computed(() => chats.value.filter((c) => c.isAberto()));
    const store = InjectStrict<Store>("store");
    const chats = store.state.chats;

    onMounted(async () => await store.inicializar());

    const abrirConversa = (id: string) => store.abrirConversa(id);

    const criarConversa = (nome: string) => {
        const chat = new Chat(nome);

        store.adicionar(chat);
        store.abrirConversa(chat.id)
    }

    return { criarConversa, chats, abrirConversa, chatsOpen };
}