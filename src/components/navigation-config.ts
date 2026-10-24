import type { Component } from 'vue';

import {
	RiBankLine,
	RiDashboardLine,
	RiLogoutBoxLine,
	RiPieChart2Line,
	RiWallet3Line,
} from '@remixicon/vue';

export interface NavigationItem {
	title: string;
	icon: Component;
	to: {
		name: string;
		params?: Record<string, string | number>;
	};
}

export const viewNavigationItems: NavigationItem[] = [
	{
		title: 'Dashboard',
		icon: RiDashboardLine,
		to: { name: 'dashboard' },
	},
	{
		title: 'Accounts',
		icon: RiBankLine,
		to: { name: 'accounts' },
	},
	{
		title: 'Budget',
		icon: RiWallet3Line,
		to: { name: 'budget' },
	},
	{
		title: 'Reports',
		icon: RiPieChart2Line,
		to: { name: 'reports' },
	},
];

export const logoutNavItem: NavigationItem = {
	title: 'Logout',
	icon: RiLogoutBoxLine,
	to: { name: 'auth' },
};
