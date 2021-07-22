<template>
    <div>
        <div class="tabs">
            <ul class="tab-nav">
                <li v-for="chat in chats"
                    :key="chat"
                    v-text="chat.nome"
                    :data-teste="chat.id"
                    @click="chatOpen = chat" />
            </ul>
        </div>
        <div class="content" v-if="chatOpen">
            <List :values="chatOpen.getMensagens()">
                <template #="{ item }">
                    <p v-text="item" />
                    <hr>
                </template>
            </List>
            <Enviador :label="'Enviar mensagem:'" @send="send" />
        </div>
    </div>
</template>

<script lang="ts">
    import { Store } from "@/store";
    import InjectStrict from "@/Utils/InjectStrict";
    import { defineComponent, ref } from "vue";
    import Enviador from "../Enviador.vue";
    import { UseChatsOpen } from "./functions/UseChatsOpen";
    import List from "./List.vue";

    export default defineComponent({
        components: { List, Enviador },
        name: "chatsOpen",
        setup() {
            const store = InjectStrict<Store>("store");
            const chats = UseChatsOpen().chatsOpen;
            const chatOpen = ref(chats.value[0]);

            const send = (mensagem: string) => {
                if (mensagem !== "")
                    store.adicionarMensagem(mensagem, chatOpen.value.id);
            };

            return { chats, send, chatOpen };
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
</style>