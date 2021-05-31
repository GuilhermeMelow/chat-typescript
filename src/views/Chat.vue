<template>
    <div class="main">
        <List-chats :chats="chats" />
    </div>
</template>

<script lang="ts">
    import { defineComponent, onMounted, Ref, ref } from "vue";
    import ListChats from "@/components/chat/ListChats.vue";
    import useChats from "@/components/chat/functions/UseChats";
    import { IChat } from "@/types/IChatService";

    export default defineComponent({
        components: { ListChats },
        setup() {
            const chats: Ref<IChat[]> = ref([]);

            onMounted(async () => {
                const res = await useChats();
                chats.value = res.chats.value;
            });

            return { chats };
        },
    });
</script>

<style lang="scss">
</style>