<template>
    <div class="box">
        <ul class="tab-nav">
            <li
                v-for="tab in tabs"
                :class=" { active: currentTab.name === tab.name }"
                :key="tab.name"
                :data-teste="tab.name"
                @click="currentTab = tab">
                {{tab.name}}
            </li>
        </ul>
        <component :is="currentTabComponent" data-teste="componentTab" />
    </div>
</template>

<script lang="ts">
    import Itabs from "@/types/ITabs";
    import { defineComponent, toRefs, Ref } from "vue";
    import useTabs from "./functions/UseTabs";

    export default defineComponent({
        props: {
            tabs: null,
        },
        setup(props) {
            const { tabs } = toRefs(props);
            const tabsResult = tabs as Ref<Itabs[]>;

            return { ...useTabs(tabsResult) };
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
    .box {
        width: 500px;
        height: 500px;
    }
</style>