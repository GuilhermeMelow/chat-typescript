<template>
    <div class="login-content">
        <enviador :label="'Escreva seu nome:'" @send="entrar"></enviador>
        <div class="error-content">
            <p font-color="red" v-text="error" data-teste="error-message" />
        </div>
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

<style scoped lang="scss">
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
