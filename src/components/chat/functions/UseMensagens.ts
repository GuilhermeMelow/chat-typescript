import { Store } from "@/store";
import { Chat } from "@/types/Chat";
import { Ref } from "vue";
import InjectStrict from "@/Utils/InjectStrict";
import { IUseMensagens } from "@/types/composableFunctions/IUseMensagens";

export function UseMensagens(activeChat: Ref<Chat | null>): IUseMensagens {
    const store = InjectStrict<Store>("store");

    const send = (mensagem: string): void => {
        if (activeChat.value) {
            store.adicionarMensagem(mensagem, activeChat.value.id);
        }
    };

    return { send };
}