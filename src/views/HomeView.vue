<script setup>
import Card from './../components/card.vue';
import CardFilter from './../components/CardFilter.vue';
import HeaderVue from './../components/general/Header.vue';
import FooterVue from './../components/general/Footer.vue';

import { useEventStore } from "@/stores/CallStore";

const store = useEventStore()
store.getEvents()
console.log(store.getEvents())

</script>


<template>
  <body>
    <HeaderVue />
    <div id="header-image">
      <img src="./../assets/images/imagenFondoHeader.jpg" alt="">
    </div>
<!-- 
     <main>
      <section>
        <div>
          <CardFilter />

          <div id="cards_container">
            <div v-for="event in store.events">
              <Card :event="event" />
            </div>
          </div>

        </div>
      </section>
    </main>
    <FooterVue /> -->
  </body>
  
</template>


<style scoped lang="scss">
#header-image {
  height: 30vh;
  width: 100vw;

  img {
    object-fit: cover;
    width: 100%;
  }
}
// section {
//   background-image: url(./../assets/images/background-cards.png);
//   background-repeat: no-repeat;
//   background-size: cover;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   > div {
//     width: 90%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
//     gap: 3vh;
//   }
// }

// #cards_container {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     flex-direction: column;
//     gap: 3vh;
// }

// @media (min-width: 500px) {
// #cards_container {
//   display: grid;
//   grid-template-columns: auto;
// }
// }

// @media (min-width: 800px) {
// #cards_container {
//   grid-template-columns: auto auto;
// }
// }
// @media (min-width: 1200px) {
//   section {

//     > div {
//       width: 70%;
//     }
//   }
// #cards_container {
//     gap: 5vh;
//     display: grid;
//     grid-template-columns: auto auto auto auto;
// }

// }
// @media (min-width: 1600px) {
//   section {

//     > div {
//       width: 70%;
//     }
//   }
// #cards_container {
//     gap: 5vh;
//     display: grid;
//     grid-template-columns: auto auto auto auto;
// }

// }
</style>
