<template>
    <div id="nav">
    </div>
    <router-view />
</template>

<script lang="ts">
    import { defineComponent, provide } from "vue";
    import { ChatService } from "./services/ChatService";
    import { Store } from "./store";

    export default defineComponent({
        setup() {
            const memoryChat = new ChatService();
            const store: Store = new Store(memoryChat);

            provide("chatService", memoryChat);
            provide("store", store);
        },
    });
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        height: 100%;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
    input[type="text"] {
        padding: 10px 10px;
        border: 1;
    }
    button {
        background-color: #333;
        border: none;
        border-radius: 5em;
        padding: 10px 20px;
        color: white;
    }
</style>
