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
        height: 100%;
        overflow: hidden;
    }
    .list-item {
        border-left: 2px solid;
        margin: 20px;
        padding: 10px;
        background-color: #eaeaea !important;
    }
</style>