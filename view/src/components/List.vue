<template>
    <div class="list-group mx-auto  m-2 width-90" data-teste="itens">
        <a v-for="item in values" :key="item.id"
            :data-teste="item.id"
            @click="emit('itemClicked', item)"
            class="d-flex  list-group-item list-group-item-action p-4">

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="28" fill="currentColor" class="bi bi-chat-dots-fill" style="width:20%" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
            </svg>

            <h5 v-text="item.nome" />
        </a>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "ListChats",
        emits: ["itemClicked"],
        props: {
            values: { type: Array, default: () => [] },
        },
        setup(props, { emit }) {
            return {
                emit,
            };
        },
    });
</script>

<style lang="scss">
    .width-90 {
        width: 90%;
    }
</style>
