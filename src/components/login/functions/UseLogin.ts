import { IChatService } from "@/types/IChatService";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { IUseLogin } from "../../../types/IUseLogin";
import InjectStrict from "@/Utils/InjectStrict";

export default function useLogin(): IUseLogin {
    const service = InjectStrict<IChatService>("chatService");
    const router = useRouter();
    const error = ref("");

    const entrar = (nome: string) => {
        service.entrar(nome)
            .then(() => router.push('/chat'))
            .catch(catched => error.value = catched);
    }

    return { entrar, error };
}