<template>
	<h1>About Page</h1>
	<hr />
	<p>My name is {{ name }}</p>
	<button @click="onChangeName">change name</button>
</template>

<script lang="ts">
export default {
	name: 'AboutPage',
	data() {
		return {
			name: 'test name',
		};
	},
	methods: {
		onChangeName() {
			this.name = 'new name';
		},
	},
	beforeCreate() {
		console.log('beforeCreate');
	},
	created() {
		/* Http petitions */
		console.log('created');
	},
	beforeMount() {
		console.log('beforeMount');
	},
	mounted() {
		console.log('mounted');
	},
	beforeUpdate() {
		console.log('beforeUpdate');
	},
	updated() {
		console.log('updated');
	},
	activated() {
		console.log('activated');
	},
	deactivated() {
		console.log('deactivated');
	},
	beforeUnmount() {
		console.log('beforeUnmount');
	},
	unmounted() {
		console.log('unmounted');
	},
	errorCaptured() {
		console.log('errorCaptured');
	},
	renderTracked() {
		console.log('renderTracked');
	},
	renderTriggered() {
		console.log('renderTriggered');
	},
};
</script>
