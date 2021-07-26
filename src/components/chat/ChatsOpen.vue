<template>
    <div>
        <div class="tabs">
            <ul class="tab-nav">
                <li v-for="chat in chats"
                    :key="chat"
                    v-text="chat.nome"
                    :data-teste="chat.id"
                    @click="activeChat = chat" />
            </ul>
        </div>

        <div v-if="activeChat" class="load-content">
            <div class="row">
                <List :values="activeChat.mensagens">
                    <template #="{ item }">
                        <div v-text="item" />
                    </template>
                </List>
            </div>
            <div class="row">
                <Enviador @send="send" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Chat } from "@/types/Chat";
    import { defineComponent, ref, Ref } from "vue";
    import Enviador from "../Enviador.vue";
    import List from "../List.vue";
    import * as functions from "./functions/Index";

    export default defineComponent({
        name: "chatsOpen",
        components: { List, Enviador },
        setup() {
            const chats = functions.UseChatsOpen().chatsOpen;
            const activeChat: Ref<Chat | null> = ref(null);

            return { ...functions.UseMensagens(activeChat), chats, activeChat };
        },
    });
</script>

<style lang="scss">
    .tab-nav {
        list-style-type: none;
        margin: 0;
        padding: 0;
        height: 35px;
        width: 100%;
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
    .load-content {
        .row {
            margin: 3% 0%;
        }
    }
</style>