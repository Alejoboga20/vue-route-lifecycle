import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: () =>
			import(/* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage.vue'),
	},
	{
		path: '/about',
		component: () =>
			import(/* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage.vue'),
	},
	{
		path: '/pokemon/:pokemonId',
		name: 'pokemon-id',
		component: () =>
			import(/* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage.vue'),
	},
	{
		path: '/:pathMatch(.*)*',
		component: () =>
			import(/* webpackChunkName: "NotFoundPage" */ '@/modules/shared/pages/NotFoundPage.vue'),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
