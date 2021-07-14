import { Ref } from "vue";

export interface IUseLogin {
    entrar(nome: string): Promise<void>;
    error: Ref<string>;
}
