<script setup>
import HeaderVue from './../components/general/Header.vue';
import FooterVue from './../components/general/Footer.vue';
import { useContentStore } from '@/stores/ContentStore';
import { ref, watchEffect  } from 'vue';

const props = defineProps({
  id_event: String,
});

const contentStore = useContentStore();
const content = ref(null);

console.log(contentStore);

watchEffect(() => {
  if (props.id_event) {
    contentStore.fetchContentById(props.id_event).then(() => {
      content.value = contentStore.content;
    });
  }
});

</script>
<template>
    <HeaderVue /> 
    <main>  
        <div class="title">
            <h2>{{ content.name }}</h2>
        </div>
        <div class="container_elements">
            <p>Lugar: {{ content.ubication }}</p>
            <p>Plazas disponibles: {{ content.capacity }}</p>
            <p>Fecha: {{ content.date }}</p>
            <p>Precio: ¥{{ content.price }}</p>
            <h4>Detalles:</h4>
            <p>{{ content.description }}</p>

            <button class="subscribe_event">Suscribete al evento</button>
        </div>
        <div v-if="loading">
            Cargando...
        </div>
        <div v-if="error">
            Ha ocurrido un error: {{ error.message }}
        </div>
    </main>
    <FooterVue /> 
</template>
<style scoped lang="scss">
p, .subscribe_event{
    font-size: 1.8rem;
    font-family: 'Poppins', sans-serif;
}
h4{
    font-size: 2rem;
    font-family: 'Poppins', sans-serif;
}
main{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
}
.title{
    text-align: center;
}
.subscribe_event{
    background-color: #D64747;
    color: #000;
    padding: 1rem;
    text-align: center;
    border: none;
    border-radius: 10px;
}
.container_elements{
    display: flex;
    flex-direction: column;
    width: 50%;
    border: 1px solid #000;
    border-radius: 10px;

    p, h4{
        margin-left: 1rem;
        margin-right: 1rem;
    }
}
</style>