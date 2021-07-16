<template>
    <div>
        <ul class="tab-nav">
            <li v-for="chat in chatsOpen"
                :key="chat"
                v-text="chat.nome"
                :data-teste="chat.id" />
        </ul>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "chatsOpen",
        props: {
            chatsOpen: { type: Array, default: () => [] },
        },
    });
</script>

<style lang="scss">
    ul.tab-nav {
        list-style-type: none;
        margin: 0;
        padding: 0;
        height: 35px;
        width: 1000px;
        overflow: hidden;
        margin: 2px;
        li {
            float: left;
            height: 250px;
            display: list-item;
            line-height: 1.5;
            padding: 5px 50px 10px 50px;
            background: #333;
            cursor: pointer;
            color: white;
        }
        li:hover {
            background: rgb(71, 70, 70);
        }
        li.active {
            background: rgb(71, 70, 70);
        }
    }
    p.messages {
        padding: 5px 0px 5px 0;
    }
</style>