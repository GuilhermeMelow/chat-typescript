<template>
    <div id="list-chat">
        <List-chats :chats="chats" />
    </div>
</template>

<script lang="ts">
    import ListChats from "@/components/chat/ListChats.vue";
    import { IChatService } from "@/types/IChatService";
    import { defineComponent, inject, ref } from "vue";

    export default defineComponent({
        components: { ListChats },
        async setup() {
            const service = inject("chatService") as IChatService;
            const chats = ref(await service.pegarChats());

            return { chats };
        },
    });
</script>

<style lang="scss">
</style>