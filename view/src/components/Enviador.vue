<template>
    <div class="input-group my-5">
        <input type="text" :placeholder="label" class="form-control" v-model="text" data-teste="nome" />
        <button class="btn btn-dark" data-teste="criar" @click="send()" type="button">{{ buttonTitle }}</button>
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
