import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: { name: 'home' },
	},
	{
		path: '/home',
		name: 'home',
		component: () =>
			import(/* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage.vue'),
	},
	{
		path: '/about',
		name: 'about',
		redirect: { name: 'home' },
		// component: () =>
		// import(/* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage.vue'),
	},
	{
		path: '/pokemon/:pokemonId',
		name: 'pokemon-id',
		props: (route) => {
			const id = Number(route.params.pokemonId);

			if (isNaN(id)) return { id: 1 };

			return { id };
		},
		component: () =>
			import(/* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage.vue'),
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'not-found',
		component: () =>
			import(/* webpackChunkName: "NotFoundPage" */ '@/modules/shared/pages/NotFoundPage.vue'),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
