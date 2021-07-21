import { Ref } from "vue";

export interface IUseLogin {
    entrar(nome: string): void;
    error: Ref<string>;
}
