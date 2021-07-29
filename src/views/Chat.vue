<template>
    <div class="main">
        <div class="side-menu">
            <List class="list" :values="chats">
                <template #="{ item }">
                    <div v-text="item.nome" :data-teste="item.id" @click="abrirConversa(item.id)" />
                </template>
            </List>
            <Enviador class="enviador" @send="criarConversa" />
        </div>
        <div class="main-container">
            <ChatsOpen />
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import List from "@/components/List.vue";
    import Enviador from "@/components/Enviador.vue";
    import ChatsOpen from "@/components/chat/ChatsOpen.vue";
    import * as functions from "@/components/chat/functions/Index";

    export default defineComponent({
        components: { List, Enviador, ChatsOpen },

        setup() {
            return {
                ...functions.UseChats(),
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
    }
</style>