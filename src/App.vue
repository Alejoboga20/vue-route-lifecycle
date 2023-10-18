<template>
	<header>
		<SharedNavbar />
		<img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
	</header>
	<router-view> </router-view>
</template>

<script setup lang="ts">
import SharedNavbar from '@/modules/shared/components/Navbar.vue';
</script>

<style scoped>
header {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
