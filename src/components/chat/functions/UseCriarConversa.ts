import { Store } from "@/store";
import { Chat } from "@/types/Chat";
import { IUseCriarConversa } from "@/types/composableFunctions/IUseCriarConversa";
import InjectStrict from "@/Utils/InjectStrict";

export function UseCriarConversa(): IUseCriarConversa {
    const store = InjectStrict<Store>("store");

    const criarConversa = (nome: string): void => {
        const chat = new Chat(nome);

        store.adicionar(chat);
        store.abrirConversa(chat.id)
    }

    return { criarConversa };
}