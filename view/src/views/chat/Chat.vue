<template>
    <div class="container">
        <div class="row" style="height: 670px">
            <div class="col height-100">
                <SalasMenu
                    :salas="state.salas"
                    @criarSala="criarSala"
                    @abrirSala="abrirSala" />
            </div>
            <div class="col height-100">
                <SalasAbertas
                    :salas="salasAbertas"
                    :chat="state.chat"
                    :user="userState.user"
                    @abrirSala="abrirSala"
                    @fecharSala="fecharSala"
                    @enviar="enviar" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, onMounted } from "vue";
    import { useChats } from "./functions/UseChats";
    import { IStore } from "@/store/models/chat/IChatStore";
    import SalasAbertas from "./components/SalasAbertas.vue";
    import SalasMenu from "./components/SalasMenu.vue";
    import { injecStrict } from "@/Utils/InjectStrict";
    import { IUserStore } from "@/store/models/user/IUserStore";

    export default defineComponent({
        components: { SalasAbertas, SalasMenu },

        setup() {
            const chatStore = injecStrict<IStore>("store");
            const userStore = injecStrict<IUserStore>("userStore");

            onMounted(async () => {
                await chatStore.inicializarSalas();
                await userStore.createUser();
            });

            return {
                ...useChats(chatStore, userStore),
            };
        },
    });
</script>

<style lang="scss">
    .height-100 {
        height: 100%;
    }
</style>
