import { IChatService, IUser } from "@/types/IChatService";
import { inject, Ref, ref } from "vue";
import { useRouter } from "vue-router";

export default function useLogin(nome: Ref<string>) {
    const service = inject("chatService") as IChatService;
    const router = useRouter();
    const error = ref("");

    const usuario: Ref<IUser> = ref({
        id: "",
        nome: "",
    });

    const entrar = async () => {
        if (nome.value === "")
            return error.value = "Não possível entrar com este nome de usuário."

        const user = service.entrar(nome.value);
        usuario.value.nome = user.nome;

        await router.push('/chat/' + nome.value)
    };

    return { usuario, entrar, nome, error };
}