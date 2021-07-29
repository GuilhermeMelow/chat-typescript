<template>
    <div class="list-box" data-teste="itens">
        <div class="list-item" v-for="item in values" :key="item.id">
            <slot v-bind="{item}" :data-teste="item.id"></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "ListChats",
        props: {
            values: { type: Array, default: () => [] },
        },
    });
</script>

<style lang="scss">
    .list-box {
        border-block: 2px solid;
        max-width: 100%;
        overflow: hidden;
    }
    .list-item {
        border-left: 0.7em solid #333;
        margin: 1em;
        padding: 1em;
        background-color: #eaeaea !important;
        &:hover {
            border-left-color: rgb(94, 94, 94);
            background-color: #969696 !important;
            color: #e4e3e3;
            cursor: pointer;
        }
    }
</style>