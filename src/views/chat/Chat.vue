<template>
    <div class="main">
        <div class="side-menu">
            <List class="list" :values="state.salas">
                <template #="{ item }">
                    <div v-text="item.nome" :data-teste="item.id" @click="abrirSala(item)" />
                </template>
            </List>
            <Enviador class="enviador" @send="criarSala" />
        </div>
        <div class="main-container">
            <Salas-abertas />
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import { UseChats } from "./functions/UseChats";
    import { IStore } from "@/types/IStore";
    import InjectStrict from "@/Utils/InjectStrict";
    import List from "@/components/List.vue";
    import Enviador from "@/components/Enviador.vue";
    import SalasAbertas from "./components/SalasAbertas.vue";

    export default defineComponent({
        components: { List, Enviador, SalasAbertas },

        setup() {
            return {
                ...UseChats(InjectStrict<IStore>("store")),
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

        .enviador {
            height: 10%;
        }

        .list {
            height: 90%;
            overflow: auto;
        }
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