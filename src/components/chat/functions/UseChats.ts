import { Store } from "@/store";
import { IChat } from "@/types/IChatService";
import { Ref } from "vue";
import InjectStrict from "@/Utils/InjectStrict";

interface IUseChats {
    inicializar(): void,
    adicionar(nome: string): void,
    chats: Ref<IChat[]>
}

export default function useChats(): IUseChats {
    const store = InjectStrict<Store>("store");

    const inicializar = async () => await store.inicializar();

    const adicionar = (nome: string) => {
        const chat: IChat = { id: "asdf", nome }
        store.adicionar(chat);
    }

    return { adicionar, inicializar, chats: store.state.chats };
}