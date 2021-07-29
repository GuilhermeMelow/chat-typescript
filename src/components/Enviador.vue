<template>
    <div class="enviador-content">
        <input type="text" id="Data" v-model="data" data-teste="nome" style="width:65%" />

        <button @click="send(data)" data-teste="criar" v-text="'Enviar'" style="width:25%" />
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

<style lang="scss" >
    .enviador-content {
        display: flex;
        * {
            margin: auto;
        }
    }
</style>