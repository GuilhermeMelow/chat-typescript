
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
                @enviar="enviar" />
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, onMounted } from "vue";
    import { UseChats } from "./functions/UseChats";
    import { IStore } from "@/types/IStore";
    import InjectStrict from "@/Utils/InjectStrict";
    import SalasAbertas from "./components/SalasAbertas.vue";
    import SalasMenu from "./components/SalasMenu.vue";

    export default defineComponent({
        components: { SalasAbertas, SalasMenu },

        setup() {
            const store = InjectStrict<IStore>("store");
            onMounted(async () => await store.inicializarSalas());

            return {
                ...UseChats(store),
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