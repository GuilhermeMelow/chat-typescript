<template>
    <div class="box">
        <ul class="tab-nav">
            <li
                v-for="tab in tabs"
                :class=" { active: currentTab.Key === tab.Key }"
                :key="tab.Key"
                :data-teste="tab.Value"
                @click="currentTab = tab">
                {{tab.Value}}
            </li>
        </ul>
        <component :is="currentTabComponent" data-teste="componentTab" />
    </div>
</template>

<script lang="ts">
    import IDictionary from "@/types/IDictionary";
    import { defineComponent, toRefs, Ref } from "vue";
    import useTabs from "./functions/UseTabs";

    export default defineComponent({
        props: {
            tabs: null,
        },
        setup(props) {
            const { tabs } = toRefs(props);
            const tabsDictionary = tabs as Ref<IDictionary<string, string>>;

            return { ...useTabs(tabsDictionary) };
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