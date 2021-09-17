import { inject, InjectionKey } from "vue";

export const injecStrict = <T>(key: string | InjectionKey<unknown>) => {
    const injectObject = inject<T>(key);

    if (!injectObject) {
        throw new Error("Não existe objeto em:" + injectObject);
    }
    return injectObject;
}
