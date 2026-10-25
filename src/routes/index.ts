import { createWebHistory, createRouter } from 'vue-router';

import { supabase } from '@/lib/supabase/clients';
import { routes } from './routes';

export const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach(async (to) => {
	const isAuthorized = (await supabase.auth.getSession()).data.session;
	if (to.meta?.auth && !isAuthorized) {
		return { name: 'auth' };
	} else if (!to.meta?.auth && isAuthorized) {
		return { name: 'dashboard' };
	}
	return true;
});
