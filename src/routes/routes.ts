import { type RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: () => import('@/layouts/MainLayout.vue'),
		children: [
			{
				path: '',
				name: 'dashboard',
				component: () => import('@/views/DashboardView.vue'),
			},
			{
				path: '/accounts',
				name: 'accounts',
				component: () => import('@/views/AccountsView.vue'),
			},
			{
				path: '/budget',
				name: 'budget',
				component: () => import('@/views/BudgetView.vue'),
			},
			{
				path: '/reports',
				name: 'reports',
				component: () => import('@/views/ReportsView.vue'),
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
