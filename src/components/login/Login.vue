<template>
    <div class="hello">
        <section>
            <h1 v-html="usuario.nome" data-test="h1-title" />
        </section>
        <section>
            <input type="text" v-model="nome" data-teste='nome-usuario' />
            <button data-test="btn-entrar" @click="entrar">Entrar</button>
        </section>
        <section>
            <p font-color="red" v-html="error" data-teste="error-message" />
        </section>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import useLogin from "./functions/UseLogin";

    export default defineComponent({
        name: "Login",

        setup() {
            return {
                ...useLogin(),
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
