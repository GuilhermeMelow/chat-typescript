<template>
    <div class="criarChat">
        <label for="Data" v-text="label" />
        <input type="text" id="Data" v-model="data" data-teste="nome" />
        <button @click="send(data)" data-teste="criar" v-text="'Enviar'" />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "Criar",
        props: {
            label: String,
        },
        setup(props, { emit }) {
            return { data: "", send: (data: string) => emit("send", data) };
        },
    });
</script>
