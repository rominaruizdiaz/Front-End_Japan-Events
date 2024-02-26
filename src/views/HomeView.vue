<script setup>
import Card from './../components/card.vue';
import CardFilter from './../components/CardFilter.vue';
import HeaderVue from './../components/general/Header.vue';
import FooterVue from './../components/general/Footer.vue';

import {ref, reactive, onBeforeMount, onMounted} from 'vue';
import EventRepository from '@/components/repositories/events/EventsRepository';
import EventService from '@/service/events/EventService';

let events = reactive([])
let isLoaded = ref(false)

const repository = new EventRepository()
const service = new EventService(repository)

onBeforeMount( async () => {
   events = await service.index()
   isLoaded.value = true
   console.log(events)
})
</script>


<template>
  <body>
    <HeaderVue />
    <main>
      <section>
        <div>
          <CardFilter />
          <div id="cards_container">
            <div v-for="event in events">
              <Card :event="event" />
            </div>
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
