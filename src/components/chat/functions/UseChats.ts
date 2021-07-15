import { Store } from "@/store";
import { computed, onMounted } from "vue";
import { IUseChats } from "../../../types/IUseChats";
import InjectStrict from "@/Utils/InjectStrict";

export default function useChats(): IUseChats {
    const store = InjectStrict<Store>("store");
    const chats = store.state.chats;

    const abrirConversa = (id: string) => store.abrirConversa(id);

    onMounted(async () => await store.inicializar());

    const chatsOpen = computed(() => chats.value.filter((c) => c.aberto));

    const adicionar = (nome: string) => {
        const chat = store.adicionar({ id: "", nome, aberto: false });
        store.abrirConversa(chat.id);
    }

    return { adicionar, chats, abrirConversa, chatsOpen };
}