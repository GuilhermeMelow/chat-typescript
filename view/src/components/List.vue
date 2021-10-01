<template>
    <div class="list-box" data-teste="itens">
        <div v-for="item in values" :key="item.id">
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
        max-width: 100%;
        overflow: hidden;
    }
</style>
