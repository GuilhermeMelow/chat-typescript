
<template>
    <div class="main">
        <div class="side-menu">
            <SalasMenu
                :salas="state.salas"
                @criarSala="criarSala"
                @abrirSala="abrirSala" />
        </div>
        <div class="main-container">
            <SalasAbertas
                :salas="salasAbertas"
                :chat="state.chat"
                @abrirSala="abrirSala"
                @fecharSala="fecharSala"
                @enviar="enviar" />
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, onMounted } from "vue";
    import { useChats } from "./functions/UseChats";
    import { IStore } from "@/types/IStore";
    import SalasAbertas from "./components/SalasAbertas.vue";
    import SalasMenu from "./components/SalasMenu.vue";
    import { injecStrict } from "@/Utils/InjectStrict";
    import { IUserStore } from "@/store/userStore";

    export default defineComponent({
        components: { SalasAbertas, SalasMenu },

        setup() {
            const store = injecStrict<IStore>("store");
            const userStore = injecStrict<IUserStore>("userStore");

            onMounted(async () => {
                await store.inicializarSalas();
                await userStore.createUser();
            });

            return {
                ...useChats(store),
            };
        },
    });
</script>

<style lang="scss">
    .main {
        margin: auto;
        width: 95%;
        display: flex;
        height: 500px;
    }

    .side-menu {
        width: 30%;
        height: 100%;
        padding: 1%;
        border: 2px solid #333;
        border-radius: 0.75rem;
    }

    .main-container {
        margin: 0 auto;
        width: 50%;
        height: 100%;
        padding: 1%;
        border: 2px solid #333;
        border-radius: 0.75rem;
    }
</style>
