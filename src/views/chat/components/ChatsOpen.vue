<template>
    <div class="tabs-content">
        <ul class="tab-nav">
            <li v-for="chat in chatsOpen"
                :key="chat"
                v-text="chat.nome"
                @click="abrirConversa(chat)"
                :class='{"tab_selected": state.chat != null && chat == state.chat}' />
        </ul>
    </div>

    <div v-if="state.chat" class="load-content">
        <List class="list" :values="state.chat.mensagens">
            <template #="{ item }">
                <div v-text="item" />
            </template>
        </List>
        <Enviador class="enviador" @send=" enviarMensagem" />
    </div>

</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import Enviador from "@/components/Enviador.vue";
    import List from "@/components/List.vue";
    import { UseChats } from "../functions/UseChats";

    export default defineComponent({
        name: "chatsOpen",
        components: { List, Enviador },

        setup() {
            return {
                ...UseChats(),
            };
        },
    });
</script>

<style lang="scss" scoped>
    @import "@/../style/custom-tabs.scss";
    @import "@/../style/layout-chatsOpen.scss";
</style>