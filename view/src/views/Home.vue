<template>
    <div class="position-absolute top-50 start-50 translate-middle">
        <Login />
    </div>
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
