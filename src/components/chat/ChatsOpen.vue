<template>
    <div class="tabs-content">
        <ul class="tab-nav">
            <li v-for="chat in chatsOpen"
                :key="chat"
                v-text="chat.nome"
                :data-teste="chat.id"
                @click="activeChat = chat"
                :class='{"tab_selected": activeChat != null && chat == activeChat}' />
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
    @import "@/../style/custom-tabs.scss";
    @import "@/../style/layout-chatsOpen.scss";
</style>