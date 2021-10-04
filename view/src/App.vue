<template>

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <div id="nav">
    </div>
    <router-view />
</template>

<script lang="ts">
    import { defineComponent, provide } from "vue";
    import { ChatApi } from "./services/ChatApi";
    import { EventWs } from "./services/EventWs";
    import { UserApi } from "./services/UserApi";
    import { createStore } from "./store";
    import { createUserStore } from "./store/userStore";

    export default defineComponent({
        setup() {
            const url = process.env.VUE_APP_API_ROOT.replace(/^http/, "ws");
            const eventWs = new EventWs(new WebSocket(url));

            provide("userStore", createUserStore(new UserApi()));
            provide("store", createStore(new ChatApi(), eventWs));
        },
    });
</script>

<style lang="scss">
    @import "../style/form-elements.scss";
    @import "../style/custom-scrollbar.scss";
    @import "@/../style/custom-tabs.scss";

    * {
        margin: 0;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        height: 100%;
    }
    #nav {
        padding: 20px;
        margin-bottom: 3em;
        background-color: #333;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
