<template>
    <List class="list" v-if="state.salas != null" :values="state.salas">
        <template #="{ item }">
            <div v-text="item.nome" :data-teste="item.id" @click="abrirSala(item)" />
        </template>
    </List>
    <Enviador class="enviador" @send="criarSala" />
</template>

<script lang="ts">
    import { defineComponent, toRefs } from "vue";
    import Enviador from "@/components/Enviador.vue";
    import List from "@/components/List.vue";

    export default defineComponent({
        name: "SalasMenu",
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

<style lang="scss">
    .enviador {
        height: 10%;
    }

    .list {
        height: 90%;
        overflow: auto;
    }
</style>