<template>
    <List class="list-menu" v-if="salas !== null" :values="salas">
        <template #="{ item }">
            <div class="list-item-menu"
                v-text="item.nome.charAt(0).toUpperCase() + item.nome.slice(1)"
                :data-teste="item.id"
                @click="emit('abrirSala', item)" />
        </template>
    </List>
    <Enviador :buttonTitle="'Criar Sala'" class="enviador" @send="emit('criarSala', $event)" />
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
    .title {
        text-align: center;
        font-size: 2em;
        font-weight: 450;
    }
    .enviador {
        height: 10%;
    }

    .list-item-menu {
        padding: 1em;
        margin: 1em;

        font-size: 1.05em;
        color: white;

        background: rgb(87, 87, 87);
        border: 2px solid rgb(87, 87, 87);
        border-radius: 0.25em;
    }

    .list-menu {
        height: 90%;
        overflow: auto;

        border-bottom: 1px solid rgb(87, 87, 87);
    }
</style>
