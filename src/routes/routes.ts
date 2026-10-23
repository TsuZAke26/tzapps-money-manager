import {
	createWebHistory,
	createRouter,
	type RouteRecordRaw,
} from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: () => import('@/layouts/MainLayout.vue'),
		children: [
			{
				path: '',
				name: 'dashboard',
				component: () => import('@/views/DashboardView.vue'),
			},
		],
		meta: {
			auth: true,
		},
	},
	{
		path: '/auth',
		component: () => import('@/layouts/AuthLayout.vue'),
		children: [
			{
				path: '',
				name: 'auth',
				component: () => import('@/views/AuthView.vue'),
			},
		],
	},
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
