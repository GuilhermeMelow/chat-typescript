<template>
    <div class="main">
        <div class="side-menu">
            <List class="list" :values="state.chats">
                <template #="{ item }">
                    <div v-text="item.nome" :data-teste="item.id" @click="abrirConversa(item)" />
                </template>
            </List>
            <Enviador class="enviador" @send="adicionar" />
        </div>
        <div class="main-container">
            <Chats-open />
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import List from "@/components/List.vue";
    import Enviador from "@/components/Enviador.vue";
    import ChatsOpen from "./components/ChatsOpen.vue";
    import { UseChats } from "./functions/UseChats";

    export default defineComponent({
        components: { List, Enviador, ChatsOpen },

        setup() {
            return {
                ...UseChats(),
            };
        },
    });
</script>

<style lang="scss">
    @import "@/../style/layout-page-chat";
</style>