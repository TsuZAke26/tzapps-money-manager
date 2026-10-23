import { createApp } from 'vue';

import './css/style.css';

import { router } from '@/routes/routes';
import App from './App.vue';

createApp(App).use(router).mount('#app');
