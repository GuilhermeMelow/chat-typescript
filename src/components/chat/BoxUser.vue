<template>
    <div class="box-user">
        <ul class="tab-nav">
            <li
                v-for="tab in tabs"
                :class=" { active: currentTab === tab }"
                :key="tab"
                :data-teste="tab"
                @click="currentTab = tab">
                {{tab}}
            </li>
        </ul>
        <component :is="currentTabComponent" data-teste="componentTab" />
    </div>
</template>

<script lang="ts">
    import useTabs from "@/components/chat/functions/UseTabs";

    import { defineComponent } from "vue";
    import ListUsuarios from "@/components/chat/ListUsuarios.vue";
    import ListChats from "@/components/chat/ListChats.vue";

    export default defineComponent({
        components: { ListChats, ListUsuarios },
        setup() {
            return { ...useTabs() };
        },
    });
</script>

<style lang="scss">
    ul.tab-nav {
        list-style-type: none;
        margin: 0;
        padding: 0;
        height: 35px;
        overflow: hidden;
        margin: 2px;
    }
    ul.tab-nav li {
        float: left;
        display: list-item;
        text-align: center;
        line-height: 1.5;
        padding: 5px 50px 10px 50px;
        background: #333;
        cursor: pointer;
        color: white;
    }
    ul.tab-nav li:hover {
        background: rgb(71, 70, 70);
    }
    ul.tab-nav li.active {
        background: rgb(71, 70, 70);
    }
    .box-user {
        width: 500px;
        height: 500px;
    }
</style>
