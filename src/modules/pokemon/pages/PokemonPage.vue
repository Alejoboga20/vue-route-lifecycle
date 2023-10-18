<template>
	<h1>Pokemon Page - ID: {{ pokemonId }}</h1>
</template>

<script lang="ts">
export default {
	name: 'PokemonPage',
	data() {
		return {
			pokemonId: '',
		};
	},
	created() {
		const { pokemonId } = this.$route.params;
		this.pokemonId = pokemonId as string;
	},
};
</script>
