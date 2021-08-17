import { inject, InjectionKey } from "vue";

export default function <T>(key: string | InjectionKey<unknown>): T {
    const injectObject = inject<T>(key);

    if (!injectObject) {
        throw new Error("Não existe objeto em:" + injectObject);
    }
    return injectObject;
}