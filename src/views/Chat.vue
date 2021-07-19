<template>
    <div class="main">
        <div class="content">
            <List :values="chats">
                <template #="{ item }">
                    <p v-text="item.nome" :data-teste="item.id" @click="abrirConversa(item.id)" />
                </template>
            </List>
            <ListChatsOpen :chatsOpen="chatsOpen" />
        </div>

        <Enviador :labelButton="'Criar chat'" @sendInformation="adicionar" />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import List from "@/components/chat/List.vue";
    import Enviador from "@/components/chat/Enviador.vue";
    import ListChatsOpen from "@/components/chat/ListChatsOpen.vue";
    import UseChats from "@/components/chat/functions/UseChats";

    export default defineComponent({
        components: { List, Enviador, ListChatsOpen },

        setup() {
            return { ...UseChats() };
        },
    });
</script>

<style lang="scss">
    div.content {
        display: flex;
    }
</style>