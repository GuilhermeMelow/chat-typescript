import { IUser } from "@/types/IChatService";
import { computed, Ref } from "vue";

export default function useSobrenome(usuario: Ref<IUser>) {
    const sobrenome = computed(() => usuario.value.nome + "123");

    return { sobrenome };
}
