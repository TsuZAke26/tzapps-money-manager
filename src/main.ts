import { createApp } from 'vue';
import { createPinia } from 'pinia';

import './css/style.css';
import App from './App.vue';

import { supabase } from '@/lib/supabase/clients';
import { router } from '@/routes';

supabase.auth.onAuthStateChange((event) => {
	if (event === 'SIGNED_IN') {
		router.push({ name: 'dashboard' });
	}

	if (event === 'SIGNED_OUT') {
		router.push({ name: 'auth' });
	}
});

const app = createApp(App);
const pinia = createPinia();

app.use(pinia).use(router).mount('#app');
