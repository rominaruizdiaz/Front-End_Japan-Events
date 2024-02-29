<script setup>
import { useEventStore } from "@/stores/CallStore";
import Card from "./../components/Card.vue";

const store = useEventStore();
store.getEvents();
console.log(store.getEvents());

</script>

<template>
	<body>
		<section>
			<h1>Your official Japan travel guide.</h1>
		</section>
		<main>
			<div id="cards_container">
				<div v-for="event in store.events">
					<Card :event="event" />
				</div>
			</div>
		</main>
	</body>
</template>

<style scoped lang="scss">
section {
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
		font-family: "Poppins", sans-serif;
		font-size: calc(16px + 3vw);
		margin: 7rem 5rem 0 5rem;
		font-weight: 400;
		color: white;
		filter: drop-shadow(0 0 0.75rem rgb(0, 0, 0));
	}
}

@media (min-width: 600px) {
	section {
		height: 80vh;

		h1 {
			text-align: center;
			font-family: "Poppins", sans-serif;
			font-size: calc(16px + 3vw);
			margin: 7rem 5rem 0 5rem;
			font-weight: 400;
			color: white;
			filter: drop-shadow(0 0 0.75rem rgb(0, 0, 0));
		}
	}
}
</style>
