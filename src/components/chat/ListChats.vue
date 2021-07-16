<template>
    <div class="box">
        <p class="item" v-for="chat in chats" :key="chat" @click="abrirConversa(chat.id)">
            <span v-html="chat.nome" :data-teste="chat.nome" />
            |
            <span v-html="chat.id" :data-teste="chat.id" />
        </p>
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
        text-align: center;
        width: 300px;
    }
    p.item {
        cursor: pointer;
    }
    p.item:hover {
        background: rgb(71, 70, 70);
        color: rgb(255, 255, 255);
    }
</style>