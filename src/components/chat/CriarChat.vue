<template>
    <div class="criarChat">
        <label for="nome"> Nome Chat: </label>
        <input type="text" v-model="nome" />

        <button @click="adicionar(nome)">Criar</button>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import useChats from "@/components/chat/functions/UseChats";

    export default defineComponent({
        setup() {
            return { nome: "", ...useChats() };
        },
    });
</script>
