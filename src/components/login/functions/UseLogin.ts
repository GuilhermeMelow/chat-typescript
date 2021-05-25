import { IChatService, IUser } from "@/types/IChatService";
import { inject, Ref, ref } from "vue";

export default function useLogin() {
    const service = inject("chatService") as IChatService;
    const nome = ref("");
    const error = ref("");

    const usuario: Ref<IUser> = ref({
        id: "",
        nome: "",
    });

    const entrar = () => {
        if (nome.value === "") {
            return error.value = "Não possível entrar com este nome de usuário."
        }
        const user = service.entrar(nome.value);
        usuario.value.nome = user.nome;
    };

    return { usuario, entrar, nome, error };
}