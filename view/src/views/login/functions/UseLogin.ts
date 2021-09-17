import { ref } from "vue";
import { useRouter } from "vue-router";
import { IStore } from "@/types/IStore";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useLogin(store: IStore) {
    const router = useRouter();
    const error = ref("");

    const entrar = (nome: string) => {
        store.criarSala(nome);
        router.push('/chat');
    }

    return { entrar, error };
}
