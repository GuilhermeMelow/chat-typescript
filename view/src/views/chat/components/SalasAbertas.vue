<template>
    <div class="tabs-content">
        <ul class="tab-nav">
            <div v-for="sala in salas"
                :key="sala"
                :class='{"tab_selected": chat !== null && sala === chat}'>
                <li @click="$emit('abrirSala', sala)"
                    :data-teste="sala.nome"> {{sala.nome}} </li>

                <button @click="$emit('fecharSala', sala)"
                    class="fechar-button"
                    :data-teste="`${sala.nome}-fechar`" v-text="'x'" />
            </div>
        </ul>
    </div>

    <div v-if="chat" class="load-content">

        <List class="list" :values="chat.mensagens">
            <template #="{ item }">
                <div v-text="item.value" class="list-item-messsage"
                    :class='isYourMessage(user, item) ?  "your-message": "other-message"'>
                </div>
            </template>
        </List>
        <Enviador class="enviador" @send="emit('enviar', $event, user.id)" />
    </div>
</template>

<script lang="ts">
    import { defineComponent, toRefs } from "vue";
    import Enviador from "@/components/Enviador.vue";
    import List from "@/components/List.vue";
    import { User } from "@/store/models/user/User";
    import { Message } from "@/types/Message";

    export default defineComponent({
        name: "chatsOpen",
        components: { List, Enviador },
        props: {
            salas: Array,
            user: Object,
            chat: Object,
        },
        emits: ["abrirSala", "fecharSala", "enviar"],
        setup(props, { emit }) {
            const isYourMessage = (user: User, message: Message) => {
                return user !== null && message.sender === user.id;
            };

            return {
                emit,
                isYourMessage,
                ...toRefs(props),
            };
        },
    });
</script>

<style lang="scss" scoped>
    .tabs-content {
        height: 13%;
    }

    .list-item-messsage {
        word-break: break-word;
        overflow: hidden;

        max-width: 65%;
        min-width: 10%;
        max-height: 100%;
        min-height: 10%;

        clear: both;
        border-radius: 0.15rem;
        margin: 1em;
        padding: 1em;
        background-color: #eaeaea !important;

        &:hover {
            border-left-color: rgb(94, 94, 94);
            background-color: #969696 !important;
            color: #e4e3e3;
            cursor: pointer;
        }
    }

    .other-message {
        float: left;
        border-left: 0.7em solid #333;
    }

    .your-message {
        float: right;
        border-right: 0.7em solid #817c7c;
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
