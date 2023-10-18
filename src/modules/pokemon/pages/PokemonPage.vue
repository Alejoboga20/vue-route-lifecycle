<template>
	<h1>Pokemon Page - ID: {{ id }}</h1>
</template>

<script lang="ts">
export default {
	name: 'PokemonPage',
	props: {
		id: {
			type: Number,
			required: true,
		},
	},
	data() {
		return {
			pokemon: null,
		};
	},
	methods: {
		async getPokemon() {
			try {
				const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
				const pokemonData = await pokemonResponse.json();

				this.pokemon = pokemonData;
			} catch (error) {
				this.$router.push('/about');
			}
		},
	},
	created() {
		this.getPokemon();
	},
};
</script>
