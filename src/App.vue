<script setup>
import { RouterLink, RouterView } from "vue-router";
import HeaderVue from "./components/general/Header.vue";
import FooterVue from "./components/general/Footer.vue";
</script>

<template>
	<main>
		<HeaderVue />
		<div>
			<RouterView />
		</div>
		<FooterVue />
	</main>
</template>

<style scoped lang="scss"></style>
