<template>
    <div class="box">
        <div class="item" v-for="chat in chats" :key="chat">
            <span v-html="chat.nome" :data-teste="chat.nome" />
            <span v-html="chat.id" :data-teste="chat.id" />
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "ListChats",
        props: {
            chats: null,
        },
        setup() {
            return {};
        },
    });
</script>