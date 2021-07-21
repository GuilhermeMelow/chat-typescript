<template>
    <div class="main">
        <div class="content">
            <List :values="chats">
                <template #="{ item }">
                    <p v-text="item.nome" :data-teste="item.id" @click="abrirConversa(item.id)" />
                    <hr>
                </template>
            </List>
            <ListChatsOpen :chatsOpen="chatsOpen" />
        </div>

        <Enviador :label="'Criar chat:'" @send="criarConversa" />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import List from "@/components/chat/List.vue";
    import Enviador from "@/components/Enviador.vue";
    import ListChatsOpen from "@/components/chat/ListChatsOpen.vue";
    import * as functions from "@/components/chat/functions/Index";

    export default defineComponent({
        components: { List, Enviador, ListChatsOpen },

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
    }
</style>