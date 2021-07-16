<template>
    <div class="criarChat">
        <input type="text" v-model="data" data-teste="nome" />
        <button @click="send(data)" data-teste="criar" v-text="labelButton" />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "Criar",
        props: {
            labelButton: String,
        },
        setup(props, { emit }) {
            const send = (data: string) => emit("sendInformation", data);

            return { data: "", send };
        },
    });
</script>
