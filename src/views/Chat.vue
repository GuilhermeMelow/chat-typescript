<template>
    <div class="main">
        <div class="content">
            <List-chats :chats="chats" />
            <ListChatsOpen :chatsOpen="chatsOpen" />
        </div>

        <Enviador :labelButton="'Criar chat'" @sendInformation="adicionar" />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import ListChats from "@/components/chat/ListChats.vue";
    import Enviador from "@/components/chat/Enviador.vue";
    import ListChatsOpen from "@/components/chat/ListChatsOpen.vue";
    import UseChats from "@/components/chat/functions/UseChats";

    export default defineComponent({
        components: { ListChats, Enviador, ListChatsOpen },

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