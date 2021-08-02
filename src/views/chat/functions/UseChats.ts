import InjectStrict from "@/Utils/InjectStrict";
import { Store } from "@/store";
import { IUseChats } from "@/types/composableFunctions/IUseChats";
import { onMounted } from "vue";
import { Chat } from "@/types/Chat";

export function UseChats(): IUseChats {
    const store = InjectStrict<Store>("store");
    const chats = store.state.chats;

    onMounted(async () => await store.inicializar());

    const abrirConversa = (chat: Chat): void => store.abrirConversa(chat);

    const criarConversa = (nome: string): void => {
        const chat = new Chat(nome);

        store.adicionar(chat);
        store.abrirConversa(chat);
    }

    return { chats, abrirConversa, criarConversa };
}