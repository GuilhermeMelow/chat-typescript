<template>
    <div class="q-pb-md q-mx-auto">
        <q-input style="width:200px" class=" q-ma-auto" label="NickName" v-model="text" data-teste="nome" />
    </div>
    <div class="q-ma-md" style="heigth: 100%">
        <q-btn size="md" class="my-button q-mx-auto" data-teste="criar" @click="send()">
            <span class="my-font q-ma-sm"> Sign in </span>
        </q-btn>
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
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");

    .my-font {
        font-family: "Roboto", sans-serif;
        font-size: 0.85rem;
    }

    .my-button {
        width: 100%;
        background-color: #333;
        color: white;
    }
</style>
