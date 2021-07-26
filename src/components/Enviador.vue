<template>
    <div class="enviador-content">
        <div class="enviador-col">
            <label for="Data" v-text="label" />
            <input type="text" id="Data" v-model="data" data-teste="nome" style="width:100%" />
        </div>
        <div class="enviador-col">
            <button @click="send(data)" data-teste="criar" v-text="'Enviar'" />
        </div>
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
    }
    .enviador-col {
        width: 50%;
        margin: auto;
        text-align: center;
    }
    button {
        background-color: #333;
        border: none;
        padding: 10px 20px;
        color: wheat;
    }
</style>