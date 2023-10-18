<template>
	<div>
		<RouterLink to="/">Pokemon List</RouterLink>
		<RouterLink to="/id">Pokemon by id</RouterLink>
		<RouterLink to="/about">About</RouterLink>
	</div>
</template>

<script lang="ts">
export default {
	name: 'Navbar',
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
