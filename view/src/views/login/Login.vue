<template>
    <b-card title="Login" style="max-width: 20rem;">
        <enviador :label="'Nickname'" :buttonTitle="'Sign in'" @send="entrar"></enviador>
        <p v-text="error" data-teste="error-message" />
    </b-card>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import Enviador from "@/components/Enviador.vue";
    import { useLogin } from "./functions/UseLogin";
    import { injecStrict } from "@/Utils/InjectStrict";
    import { IStore } from "@/store/models/chat/IChatStore";

    export default defineComponent({
        name: "Login",
        components: { Enviador },

        setup() {
            return {
                ...useLogin(injecStrict<IStore>("store")),
                nome: "",
            };
        },
    });
</script>
