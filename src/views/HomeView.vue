<script setup>
import { useEventStore } from "@/stores/CallStore";

const store = useEventStore()
store.getEvents()
console.log(store.getEvents())

</script>


<template>
  <body>
    <section>
      <h1>Your official Japan travel guide.</h1>
    </section>
     <main>
    </main>
  </body>
  
</template>


<style scoped lang="scss">
body {
  width: 100vw;
  height: 100vh;
}

section {
  height: 80vh;
  width: 100%;
  background-image: url(./../assets/images/imagenFondoHeader.jpg);
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 8rem;
    font-weight: 400;
    color: white;
    filter: drop-shadow(0 0 0.75rem rgb(0, 0, 0));
  }
}


@media (max-width: 600px) {
  section {
  height: 30vh;

    h1 {
      font-size: 3rem;
      filter: drop-shadow(0 0 0.75rem rgb(0, 0, 0));

      z-index: 999;
    }
  }
  
}

</style>
