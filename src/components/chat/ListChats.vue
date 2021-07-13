<template>
    <div class="box">
        <div class="item" v-for="chat in chats" :key="chat" @click="abrirConversa(chat.id)">
            <span v-html="chat.nome" :data-teste="chat.nome" />
            <span v-html="chat.id" :data-teste="chat.id" />
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import UseChats from "@/components/chat/functions/UseChats";

    export default defineComponent({
        name: "ListChats",
        props: {
            chats: { type: Array, default: () => [] },
        },
        setup() {
            return { abrirConversa: UseChats().abrirConversa };
        },
    });
</script>

<style lang="scss">
    .box {
        height: 300px;
        width: 300px;
    }
</style>