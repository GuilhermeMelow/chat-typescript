<template>
    <div class="tabs-content">
        <ul class="tab-nav">
            <li v-for="item in salas"
                :key="item"
                v-text="item.nome"
                @click="$emit('abrirSala', item)"
                :class='{"tab_selected": sala != null && item == sala}' />
        </ul>
    </div>
    <div v-if="sala" class="load-content">
        <List class="list" :values="sala.mensagens">
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
        name: "salasAbertas",
        components: { List, Enviador },
        props: {
            salas: Array,
            sala: Object,
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