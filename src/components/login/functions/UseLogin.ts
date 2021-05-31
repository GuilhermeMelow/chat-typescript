import { IChatService, IChat } from "@/types/IChatService";
import { inject, Ref, ref } from "vue";
import { useRouter } from "vue-router";

export default function useLogin(nome: Ref<string>) {
    const service = inject("chatService") as IChatService;
    const router = useRouter();
    const error = ref("");

    const chat: Ref<IChat> = ref({
        id: "",
        nome: "",
    });

    const entrar = async () => {
        try {
            const user = await service.entrar(nome.value);
            chat.value.nome = user.nome;

            await router.push('/chat/' + nome.value);
        }
        catch (catched) {
            error.value = catched;
        }
    }

    return { chat, entrar, nome, error };
}