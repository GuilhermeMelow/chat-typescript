<template>
    <div class="login-content">
        <h3> Logar </h3>
        <enviador :label="'Escreva seu nome:'" @send="entrar"></enviador>
        <p v-text="error" data-teste="error-message" />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import Enviador from "@/components/Enviador.vue";
    import useLogin from "./functions/UseLogin";

    export default defineComponent({
        name: "Login",
        components: { Enviador },

        setup() {
            return {
                ...useLogin(),
                nome: "",
            };
        },
    });
</script>

<style lang="scss">
    .login-content {
        margin: auto;
        width: 25%;
        padding: 7.5em;
    }
</style>
