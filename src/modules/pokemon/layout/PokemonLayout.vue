<template>
	<div class="pokemon-layout">
		<h1>Pokemon Layout</h1>
		<router-view></router-view>
	</div>
</template>
<script>
export default {
	name: 'PokemonLayout',
};
</script>

<style lang="css" scoped>
.pokemon-layout {
	background-color: deeppink;
}
</style>
