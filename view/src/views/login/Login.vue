<template>
    <q-card flat bordered class="my-card q-mx-auto q-pa-md">
        <q-card-section>
            <div class="text-h5"> Login </div>
        </q-card-section>

        <q-separator inset />

        <q-card-actions>
            <enviador :label="'Nickname'" :buttonTitle="'Sign in'" @send="entrar"></enviador>
            <p v-text="error" data-teste="error-message" />
        </q-card-actions>
    </q-card>
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

<style lang="scss">
    .my-card {
        width: 100%;
        max-width: 350px;

        height: 100%;
        max-height: 350px;
    }
</style>
