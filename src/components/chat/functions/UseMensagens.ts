import { Store } from "@/store";
import { Chat } from "@/types/Chat";
import { Ref } from "vue";
import InjectStrict from "@/Utils/InjectStrict";
import { IUseMensagens } from "@/types/composableFunctions/IUseMensagens";

export function UseMensagens(chatOpen: Ref<Chat> | Ref<undefined>): IUseMensagens {
    const store = InjectStrict<Store>("store");

    const send = (mensagem: string): void => {
        if (chatOpen.value) {
            store.adicionarMensagem(mensagem, chatOpen.value.id);
        }
    };

    return { send };
}