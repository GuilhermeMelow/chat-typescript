<template>
    <List class="list" v-if="salas != null" :values="salas">
        <template #="{ item }">
            <div v-text="item.nome" :data-teste="item.id" @click="emit('abrirSala', item)" />
        </template>
    </List>
    <Enviador class="enviador" @send="emit('criarSala', $event)" />
</template>

<script lang="ts">
    import { defineComponent, toRefs } from "vue";
    import Enviador from "@/components/Enviador.vue";
    import List from "@/components/List.vue";

    export default defineComponent({
        name: "SalasMenu",
        components: { List, Enviador },
        props: {
            salas: Array,
        },
        emits: ["abrirSala", "criarSala"],
        setup(props, { emit }) {
            return {
                emit,
                ...toRefs(props),
            };
        },
    });
</script>

<style lang="scss">
    .enviador {
        height: 10%;
    }

    .list {
        height: 90%;
        overflow: auto;
    }
</style>