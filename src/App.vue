<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/general/Header.vue';
import Footer from './components/general/Footer.vue';
// import HeaderEventVue from './components/general/HeaderEvent.vue';

</script>

<template>
  <header>
    <!-- <HeaderEventVue /> -->
    <Header />
  
    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/events">Events</RouterLink>
      </nav>
    </div>
  </header>
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style scoped lang="scss">

</style>
