<template>
	<h1>Pokemon Page - ID: {{ id }}</h1>
	<div v-if="pokemon">
		<img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
	</div>
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
	watch: {
		id() {
			this.getPokemon();
		},
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
