<template>
    <List-chats />
    <Suspense>
        <template #default>
            <div>
                <Criar-Chat />
            </div>
        </template>
        <template #fallback>
            <span> carregando... </span>
        </template>
    </Suspense>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import ListChats from "@/components/chat/ListChats.vue";
    import CriarChat from "@/components/chat/CriarChat.vue";

    export default defineComponent({
        components: { ListChats, CriarChat },

        setup() {
            return {};
        },
    });
</script>

<style lang="scss">
</style>