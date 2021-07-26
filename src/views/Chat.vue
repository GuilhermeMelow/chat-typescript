<template>
    <div class="main">
        <div class="content">
            <div class="side-menu">
                <List :values="chats">
                    <template #="{ item }">
                        <div v-text="item.nome" :data-teste="item.id" @click="abrirConversa(item.id)" />
                    </template>
                </List>
                <Enviador @send="criarConversa" />
            </div>
            <div class="main-container">
                <ChatsOpen />
            </div>
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
                ...functions.UseAbrirConversa(),
                ...functions.UseCriarConversa(),
            };
        },
    });
</script>

<style lang="scss">
    div.content {
        display: flex;
        height: 100%;
    }
    .main {
        margin: auto;
        width: 80%;
        height: 100;
    }
    .side-menu {
        width: 30%;
    }
    .main-container {
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }
</style>