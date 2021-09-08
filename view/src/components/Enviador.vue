<template>
    <div class="enviador-content">
        <input type="text" v-model="text" data-teste="nome" style="width:65%" class="form-input" />
        <button @click="send()" data-teste="criar" v-text="'Enviar'" style="width:25%" class="form-button" />
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from "vue";

    export default defineComponent({
        name: "Criar",
        props: {
            label: String,
        },
        setup(props, { emit }) {
            const text = ref("");

            return {
                text,
                send: () => {
                    emit("send", text.value.slice());
                    text.value = "";
                },
            };
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