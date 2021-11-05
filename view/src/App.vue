<template>
    <q-layout view="lHh Lpr lFf">
        <q-header>
            <q-toolbar color="primary" style="background-color: #333">
                <q-toolbar-title>
                    Chat
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
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
