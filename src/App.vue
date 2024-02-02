<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/general/Header.vue';
</script>

<template>
  <header>
    <Header />
    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>

  </footer>
</template>

<style scoped lang="scss">

</style>
