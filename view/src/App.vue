<template>
    <div id="app">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Chat</a>
            </div>
        </nav>

        <router-view></router-view>
    </div>
</template>

<script lang="ts">
    import { defineComponent, provide } from "vue";
    //ToDo: Indexar todos serviços
    import { ChatApi } from "./services/ChatApi";
    import { EventWs } from "./services/EventWs";
    import { UserApi } from "./services/UserApi";
    import { createStore } from "./store";
    import { createUserStore } from "./store/userStore";

    export default defineComponent({
        name: "LayoutDefault",
        setup() {
            const url = process.env.VUE_APP_API_ROOT.replace(/^http/, "ws");
            const eventWs = new EventWs(new WebSocket(url));

            provide("userStore", createUserStore(new UserApi()));
            provide("store", createStore(new ChatApi(), eventWs));
        },
    });
</script>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
</style>
