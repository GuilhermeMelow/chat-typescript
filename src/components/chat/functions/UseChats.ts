import InjectStrict from "@/Utils/InjectStrict";
import { Store } from "@/store";
import { IUseChats } from "@/types/composableFunctions/IUseChats";
import { onMounted } from "vue";
import { Chat } from "@/types/Chat";

export function UseChats(): IUseChats {
    const store = InjectStrict<Store>("store");
    const chats = store.state.chats;

    onMounted(async () => await store.inicializar());

    const abrirConversa = (id: string): void => store.abrirConversa(id);

    const criarConversa = (nome: string): void => {
        const chat = new Chat(nome);

        store.adicionar(chat);
        store.abrirConversa(chat.id)
    }

    return { chats, abrirConversa, criarConversa };
}