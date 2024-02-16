<script setup>
import { RouterLink } from 'vue-router';
import FormVue from "@/components/FormVue.vue"
</script>

<template>
    <body>
        <main>
            <FormVue />
        </main>
    </body>
</template>

<style scoped lang="scss">
    * {
        font-family: 'Poppins', sans-serif;
        color: white;
    }
    body {
        background-image: url(./../assets/images/background-login.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
</style>
