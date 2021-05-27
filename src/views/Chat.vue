<template>
    <div id="box-user">
        <Box-user></Box-user>
    </div>
</template>

<script lang="ts">
    import BoxUser from "@/components/chat/BoxUser.vue";
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "Chat",
        components: {
            BoxUser,
        },
    });
</script>

<style lang="scss">
</style>