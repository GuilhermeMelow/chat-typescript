<template>
    <div class="q-pb-md q-mx-auto">
        <q-input style="width:200px" class=" q-ma-auto" :label="label" v-model="text" data-teste="nome" />
    </div>
    <div class="q-ml-md">
        <q-btn size="md" class="my-button q-mx-auto" data-teste="criar" @click="send()">
            <span class="my-font q-ma-sm"> {{ buttonTitle }}</span>
        </q-btn>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from "vue";

    export default defineComponent({
        name: "Criar",
        props: {
            label: String,
            buttonTitle: String,
        },
        emits: ["send"],
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
