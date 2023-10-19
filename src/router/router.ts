import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: { name: 'home' },
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'not-found',
		component: () =>
			import(/* webpackChunkName: "NotFoundPage" */ '@/modules/shared/pages/NotFoundPage.vue'),
	},
	{
		path: '/pokemon',
		name: 'pokemon',
		component: () => import('@/modules/pokemon/layout/PokemonLayout.vue'),
		children: [
			{
				path: '',
				name: 'home',
				component: () =>
					import(/* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage.vue'),
			},
			{
				path: 'about',
				name: 'about',
				component: () =>
					import(/* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage.vue'),
			},
			{
				path: 'pokemon-id/:pokemonId',
				name: 'pokemon-id',
				props: (route) => {
					const id = Number(route.params.pokemonId);

					if (isNaN(id)) return { id: 1 };

					return { id };
				},
				component: () =>
					import(/* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage.vue'),
			},
		],
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
