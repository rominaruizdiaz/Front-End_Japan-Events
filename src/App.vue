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
      </nav>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped lang="scss">

</style>
