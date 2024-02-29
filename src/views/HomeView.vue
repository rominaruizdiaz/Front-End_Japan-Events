<script setup>
import { useEventStore } from "@/stores/CallStore";
import Card from './../components/Card.vue';
import CardFilter from './../components/CardFilter.vue';

const store = useEventStore()
store.getEvents()
console.log(store.getEvents())

</script>


<template>
  <body>

    <header>
      <h1>Your official Japan travel guide.</h1>
    </header>

    <main>
      <section>
        <CardFilter />
        <div id="cards_container">
          <div v-for="event in store.events">
            <Card :event="event" />
          </div>
        </div>
      </section>
    </main>
  </body>
  
</template>



<style scoped lang="scss">
header {
  height: 35vh;
  width: 100%;
  background-image: url(./../assets/images/imagenFondoHeader.jpg);
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: calc(16px  + 3vw);
    margin: 7rem 5rem 0 5rem;
    font-weight: 400;
    color: white;
    filter: drop-shadow(0 0 0.75rem rgb(0, 0, 0));
  }
}

#cards_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
}


@media (min-width: 800px) {
header {
  height: 80vh;

    h1 {
      text-align: center;
      font-family: 'Poppins', sans-serif;
      font-size: calc(16px  + 3vw);
      margin: 7rem 5rem 0 5rem;
      font-weight: 400;
      color: white;
      filter: drop-shadow(0 0 0.75rem rgb(0, 0, 0));
    }
  
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#cards_container {
  width: 80%;
  margin: 5rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
  justify-content: center;
}
}

</style>
