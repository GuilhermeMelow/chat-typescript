<template>
    <div id="list">
        <List-chats :chats="chats" />
    </div>
</template>

<script lang="ts">
    import ListChats from "@/components/chat/ListChats.vue";
    import { defineComponent } from "vue";
    import useChats from "@/components/chat/functions/UseChats";

    export default defineComponent({
        components: { ListChats },
        setup() {
            return { useChats };
        },
    });
</script>

<style lang="scss">
</style>