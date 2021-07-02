<template>
    <div class="box">
        <div class="item" v-for="chat in chats" :key="chat">
            <span v-html="chat.nome" :data-teste="chat.nome" />
            <span v-html="chat.id" :data-teste="chat.id" />
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, onMounted } from "vue";
    import useChats from "@/components/chat/functions/UseChats";

    export default defineComponent({
        name: "ListChats",
        setup() {
            const chats = useChats();
            onMounted(async () => await chats.inicializar());

            return { ...chats };
        },
    });
</script>

<style lang="scss">
    .box {
        height: 300px;
        width: 300px;
    }
</style>