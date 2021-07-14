import { IChatService } from "@/types/IChatService";
import { inject, ref } from "vue";
import { useRouter } from "vue-router";
import { IUseLogin } from "../../../types/IUseLogin";

export function useLogin(): IUseLogin {
    const service = inject("chatService") as IChatService;
    const router = useRouter();
    const error = ref("");

    const entrar = async (nome: string) => {
        try {
            await service.entrar(nome);

            await router.push('/chat');
        }
        catch (catched) {
            error.value = catched;
        }
    }

    return { entrar, error };
}