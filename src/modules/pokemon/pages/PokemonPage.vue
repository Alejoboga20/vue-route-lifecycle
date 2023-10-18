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
		return {};
	},
	created() {},
};
</script>
