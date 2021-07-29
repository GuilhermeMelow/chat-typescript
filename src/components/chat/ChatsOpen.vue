<template>
    <div class="tabs-content">
        <ul class="tab-nav">
            <li v-for="chat in chatsOpen"
                :key="chat"
                v-text="chat.nome"
                :data-teste="chat.id"
                @click="activeChat = chat" />
        </ul>
    </div>

    <div v-if="activeChat" class="load-content">
        <List class="list" :values="activeChat.mensagens">
            <template #="{ item }">
                <div v-text="item" />
            </template>
        </List>

        <Enviador class="enviador" @send=" send" />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import Enviador from "../Enviador.vue";
    import List from "../List.vue";
    import * as functions from "./functions/Index";

    export default defineComponent({
        name: "chatsOpen",
        components: { List, Enviador },
        setup() {
            return { ...functions.UseChatsOpen() };
        },
    });
</script>

<style lang="scss" scoped>
    .tabs-content {
        height: 13%;
        overflow: auto;
        .tab-nav {
            list-style-type: none;
            margin: 0;
            padding: 0;
            width: 100%;
            height: 60%;
            display: inline-flex;
            li {
                float: left;
                display: list-item;
                text-align: center;
                padding: 1% 15%;
                margin-right: 0.5%;
                background: #333;
                cursor: pointer;
                color: white;
                &:hover {
                    background: rgb(71, 70, 70);
                }
                li.active {
                    background: rgb(71, 70, 70);
                }
            }
        }
    }
    .load-content {
        height: 87%;
        .list {
            height: 87%;
            overflow: auto;
        }
        .enviador {
            height: 13%;
        }
    }
</style>