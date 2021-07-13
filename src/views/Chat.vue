<template>
    <List-chats :chats="chats" />

    <ListChatsOpen :chatsOpen="chatsOpen" />

    <Criar-Chat />
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import ListChats from "@/components/chat/ListChats.vue";
    import CriarChat from "@/components/chat/CriarChat.vue";
    import ListChatsOpen from "@/components/chat/ListChatsOpen.vue";
    import UseChats from "@/components/chat/functions/UseChats";

    export default defineComponent({
        components: { ListChats, CriarChat, ListChatsOpen },

        setup() {
            return { ...UseChats() };
        },
    });
</script>

<style lang="scss">
</style>