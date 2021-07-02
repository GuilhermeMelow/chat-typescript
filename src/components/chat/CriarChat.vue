<template>
    <div class="criarChat">
        <pre>{{ chats }}</pre>
        <label for="nome"> Nome Chat: </label>
        <input type="text" v-model="nomeChat" />

        <button @click="adicionar(nomeChat)">Criar</button>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from "vue";
    import useChats from "@/components/chat/functions/UseChats";

    export default defineComponent({
        async setup() {
            const nomeChat = ref("");
            const x = await useChats();

            return { nomeChat, ...x };
        },
    });
</script>
