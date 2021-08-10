<template>
    <div class="tabs-content">
        <ul class="tab-nav">
            <li v-for="sala in salasAbertas"
                :key="sala"
                v-text="sala.nome"
                @click="abrirSala(sala)"
                :class='{"tab_selected": state.chat != null && sala == state.chat}' />
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
    import { defineComponent, toRefs } from "vue";
    import Enviador from "@/components/Enviador.vue";
    import List from "@/components/List.vue";

    export default defineComponent({
        name: "chatsOpen",
        components: { List, Enviador },
        props: {
            chatsFunctions: Object,
        },
        setup(props) {
            const { chatsFunctions } = toRefs(props);

            return { ...chatsFunctions?.value };
        },
    });
</script>

<style lang="scss" scoped>
    .tabs-content {
        height: 13%;
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