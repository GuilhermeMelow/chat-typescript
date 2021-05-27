<template>
    <div id="list-chat">
        <List-chats />
    </div>
</template>

<script lang="ts">
    import ListChats from "@/components/chat/ListChats.vue";
    import { defineComponent } from "vue";

    export default defineComponent({
        components: { ListChats },
        name: "Chat",
    });
</script>

<style lang="scss">
</style>