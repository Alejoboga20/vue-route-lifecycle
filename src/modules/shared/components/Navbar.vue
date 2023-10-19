<template>
	<div>
		<!-- <RouterLink to="/">Pokemon List</RouterLink>
		<RouterLink :to="{ name: 'pokemon-id', params: { pokemonId: 10 } }">Pokemon by id</RouterLink>
		<RouterLink :to="{ name: 'about' }">About</RouterLink> -->
		<CustomLink v-for="link in links" :key="link.to" :link="link" />
	</div>
</template>

<script lang="ts">
import { defineAsyncComponent } from 'vue';

export default {
	name: 'Navbar',
	components: {
		CustomLink: defineAsyncComponent(() => import('./CustomLink.vue')),
	},
	data() {
		return {
			links: [
				{ to: '/', name: 'Pokemons' },
				{ to: '/pokemon/50', name: 'By Id' },
				{ to: '/about', name: 'About' },
				{ to: 'https://google.com', name: 'Google' },
			],
		};
	},
};
</script>

<style lang="css" scoped>
div {
	padding: 0 32px;
}

div a {
	color: #2c3e50;
	font-weight: bold;
	margin: 10px;
}

a.router-link-exact-active {
	color: #42b983;
}
</style>
