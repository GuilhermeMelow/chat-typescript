<template>
    <div class="tabs-content">
        <ul class="tab-nav">
            <li v-for="sala in salas"
                :key="sala"
                v-text="sala.nome"
                @click="$emit('abrirSala', sala)"
                :class='{"tab_selected": chat != null && sala == chat}' />
        </ul>
    </div>
    <div v-if="chat" class="load-content">
        <List class="list" :values="chat.mensagens">
            <template #="{ item }">
                <div v-text="item" />
            </template>
        </List>
        <Enviador class="enviador" @send="emit('enviar', $event)" />
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
            salas: Array,
            chat: Object,
        },
        emits: ["abrirSala", "enviar"],
        setup(props, { emit }) {
            return {
                emit,
                ...toRefs(props),
            };
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