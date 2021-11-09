<template>
    <div class="row control-overflow" style="max-height: 75%">
        <List v-if="salas !== null"
            :values="salas"
            @itemClicked="abrirSala" />
    </div>
    <div class="row" style="max-height: 25%">
        <Enviador :buttonTitle="'Criar Sala'" class="enviador" @send="emit('criarSala', $event)" />
    </div>
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
                abrirSala: (sala: any) => emit("abrirSala", sala),
                ...toRefs(props),
            };
        },
    });
</script>

<style lang="scss">
    .control-overflow {
        overflow: auto;
    }
</style>
