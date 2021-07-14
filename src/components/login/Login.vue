<template>
    <div class="login-content">
        <div class="form-content">
            <label for="nome">Nome:</label>
            <input id="nome" type="text" v-model="nome" data-teste='nome-usuario' />
            <button data-test="btn-entrar" @click="entrar(nome)">Entrar</button>
        </div>
        <div class="error-content">
            <p font-color="red" v-text="error" data-teste="error-message" />
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import * as FunctionsLogin from "./functions/Index";

    export default defineComponent({
        name: "Login",

        setup() {
            return {
                ...FunctionsLogin.useLogin(),
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
