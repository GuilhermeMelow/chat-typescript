import { Store } from "@/store";
import { IUseAbrirConversa } from "@/types/composableFunctions/IUseAbrirConversa";
import InjectStrict from "@/Utils/InjectStrict";

export function UseAbrirConversa(): IUseAbrirConversa {
    const store = InjectStrict<Store>("store");

    const abrirConversa = (id: string): void => store.abrirConversa(id);

    return { abrirConversa };
}