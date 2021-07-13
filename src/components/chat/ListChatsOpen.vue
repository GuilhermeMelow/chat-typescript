<template>
    <div>
        <ul>
            <li v-for="chat in chatsOpen"
                :key="chat"
                v-text="chat.nome"
                :data-teste="chat.id" />
        </ul>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "chatsOpen",
        props: {
            chatsOpen: { type: Array, default: () => [] },
        },
    });
</script>

<style>
</style>