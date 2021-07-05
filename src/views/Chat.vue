<template>
    <List-chats :chats="chats" />

    <Criar-Chat />
</template>

<script lang="ts">
    import { defineComponent, onMounted } from "vue";
    import ListChats from "@/components/chat/ListChats.vue";
    import CriarChat from "@/components/chat/CriarChat.vue";
    import useChats from "@/components/chat/functions/UseChats";

    export default defineComponent({
        components: { ListChats, CriarChat },

        setup() {
            const chats = useChats();
            onMounted(async () => await chats.inicializar());

            return { ...chats };
        },
    });
</script>

<style lang="scss">
</style>