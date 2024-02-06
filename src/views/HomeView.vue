<script setup>
import Card from './../components/Card.vue';
import CardFilter from './../components/CardFilter.vue';
import FeaturedCard from '@/components/FeaturedCard.vue';
</script>


<template>
  <body>
    <main>
      <section id="section-slider">
        <FeaturedCard />
      </section>
      <div></div>
      <section id="section-card">
        <div>
          <CardFilter />
          <div id="cards_container">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </main>
  </body>
  
</template>


<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
}
#section-slider {
  background-color: #F8F8F8;
  padding: 1em;
}








#section-card {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(./assets/background-cards.png);
  background-repeat: no-repeat;
  background-size: cover;

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
#section-card {

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
#section-card {

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
