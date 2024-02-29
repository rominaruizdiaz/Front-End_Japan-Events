<script setup>
import HeaderVue from "./../components/general/Header.vue";
import FooterVue from "./../components/general/Footer.vue";
import { useContentStore } from "@/stores/ContentStore";
import { ref, watchEffect } from "vue";

const props = defineProps({
	id_event: String,
});

const contentStore = useContentStore();
const content = ref(null);

<<<<<<< HEAD

watchEffect(() => {
    if (props.id_event) {
        contentStore.fetchContentById(props.id_event).then(() => {
            content.value = contentStore.content;
        });
    }
});

console.log(contentStore.content);

</script>
<template>
    <HeaderVue /> 
    <main>  
        <div class="title" v-if="content">
            <h2>{{ contentStore.content.name }}</h2>
        </div>
        <div class="container_elements" v-if="content">
            <p>Lugar: {{ contentStore.content.ubication }}</p>
            <p>Plazas disponibles: {{ contentStore.content.capacity }}</p>
            <p>Fecha: {{ contentStore.content.date }}</p>
            <p>Precio: ¥{{ contentStore.content.price }}</p>
            <h4>Detalles:</h4>
            <p>{{ contentStore.content.description }}</p>
=======
watchEffect(() => {
	if (props.id_event) {
		contentStore.fetchContentById(props.id_event).then(() => {
			content.value = contentStore.content;
		});
	}
});

console.log(contentStore.content);
</script>
<template>
	<main>
		<div
			:style="{
				'background-image': 'url(' + contentStore.content.image + ')',
			}"
			id="event_image"
			v-if="content"
		>
			<div class="title" v-if="content">
				<h1>{{ contentStore.content.name }}</h1>
			</div>
		</div>
		<article v-if="content">
			<div>
				<img src="./../assets/icons/event-icon-place.svg" alt="" />
				<p>Lugar: {{ contentStore.content.ubication }}</p>
			</div>
			<div>
				<img src="./../assets/icons/event-icon-seats.svg" alt="" />
>>>>>>> b966f75677fda1a9ca4104ff342b1fcea0941820

				<p>Plazas disponibles: {{ contentStore.content.capacity }}</p>
			</div>
			<div>
				<img src="./../assets/icons/event-icon-date.svg" alt="" />
				<p>Fecha: {{ contentStore.content.date }}</p>
			</div>
			<div>
				<img src="./../assets/icons/event-icon-ticket.svg" alt="" />
				<p>Precio: ¥{{ contentStore.content.price }}</p>
			</div>
			<section id="details">
				<h4>Detalles:</h4>
				<p>{{ contentStore.content.description }}</p>
			</section>

			<button>Suscribete al evento</button>
		</article>
		<div v-if="loading">Cargando...</div>
		<div v-if="error">Ha ocurrido un error: {{ error.message }}</div>
	</main>
</template>
<<<<<<< HEAD

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
=======
>>>>>>> b966f75677fda1a9ca4104ff342b1fcea0941820

<style scoped lang="scss">
#event_image {
	padding-top: 10rem;
	height: 80vh;
	width: 100%;
	background-size: cover;
	background-position: top;
	display: flex;
	align-items: center;
	justify-content: center;
	h1 {
		text-align: center;
		font-family: "Poppins", sans-serif;
		font-size: calc(16px + 3vw);
		font-weight: 400;
		color: white;
		padding: 2rem;
		filter: drop-shadow(0 0 0.75rem rgb(0, 0, 0));
	}
}

article {
	font-family: "Poppins", sans-serif;
	font-size: 2rem;
	margin: 5vw;
	padding: 2.5vh;
	border: 1px solid rgb(210, 210, 210);
	border-radius: 2rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	div {
		display: flex;
		gap: 1rem;
		img {
			height: 3rem;
		}
		align-items: center;
	}
}

button {
	padding: 2rem 1rem;
	border: none;
	border-radius: 1rem;
	background-color: #ff8080;
	color: white;
	font-size: 2rem;
	transition: ease-in-out 0.3s;
}

button:hover {
	background-color: #5097a6;
}

@media (min-width: 500px) {
	article {
		margin: 10vh 10vw;
		padding: 5vh;
	}
}
</style>
