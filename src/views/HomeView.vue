<script setup>
import Card from './../components/card.vue'
</script>


<template>
  <body>
    <main>
      <section>
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
        
      </section>
    </main>
  </body>
  
</template>


<style scoped lang="scss">

#cards_container {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3vh;
}
@media (min-width: 1100px) {
  section {
    display: flex;
    justify-content: center;
    flex-direction: row;
}
  #cards_container {
    display: flex;
    justify-content: space-between;
    width: 74vw;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5vh;
}
}
</style>
