<template>
    <div class="box" data-teste="itens">
        <div class="item" v-for="item in values" :key="item.id">
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
    .box {
        text-align: center;
        width: 300px;
    }
    p.item {
        cursor: pointer;
    }
    p.item:hover {
        background: rgb(71, 70, 70);
        color: rgb(255, 255, 255);
    }
</style>