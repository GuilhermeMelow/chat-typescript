<template>
    <q-page>
        <div class="fixed-center">
            <Login />
        </div>
    </q-page>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import Login from "@/views/login/Login.vue"; // @ is an alias to /src

    export default defineComponent({
        name: "Home",
        components: {
            Login,
        },
    });
</script>
