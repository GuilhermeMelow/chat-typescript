<template>
    <q-input class=" q-mx-auto" label="NickName" v-model="text" data-teste="nome" />
    <q-btn size="md" class="my-button q-mx-auto" data-teste="criar" @click="send()">
        <span class="my-font q-ma-sm"> Sign in </span>
    </q-btn>
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
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");

    .my-font {
        font-family: "Roboto", sans-serif;
        font-size: 0.85rem;
    }

    .my-button {
        background-color: #333;
        color: white;
    }
</style>
