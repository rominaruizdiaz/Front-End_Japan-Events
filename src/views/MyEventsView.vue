<script setup>
// import Card from './../components/Card.vue';
import FooterVue from './../components/general/Footer.vue';
import CardMyEvents from '@/components/CardMyEvents.vue';
</script>

<template>
    <body>
      <main>
        <section>
          <div>
            <CardFilter />
            <div id="cards_container">
             <CardMyEvents />
            </div>
          </div>
        </section>
      </main>
      <FooterVue />
    </body>
    
  </template>
  <style scoped lang="scss">

  section {
    background-image: url(./../assets/images/background-cards.png);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
  
    > div {
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 3vh;
    }
  }
  
  #cards_container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      gap: 3vh;
  }
  
  @media (min-width: 500px) {
  #cards_container {
    display: grid;
    grid-template-columns: auto;
  }
  }
  
  @media (min-width: 800px) {
  #cards_container {
    grid-template-columns: auto auto;
  }
  }
  @media (min-width: 1200px) {
    section {
  
      > div {
        width: 70%;
      }
    }
  #cards_container {
      gap: 5vh;
      display: grid;
      grid-template-columns: auto auto auto auto;
  }
  
  }
  @media (min-width: 1600px) {
    section {
  
      > div {
        width: 70%;
      }
    }
  #cards_container {
      gap: 5vh;
      display: grid;
      grid-template-columns: auto auto auto auto;
  }
  
  }
  </style>