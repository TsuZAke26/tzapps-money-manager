import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

const supabase = createClient<Database>(supabaseUrl, supabasePublishableKey);

// const accountsClient = createClient(supabaseUrl, supabasePublishableKey, {
// 	db: {
// 		schema: 'accounts',
// 	},
// });

// const budgetsClient = createClient(supabaseUrl, supabasePublishableKey, {
// 	db: {
// 		schema: 'budgets',
// 	},
// });

// const usersClient = createClient(supabaseUrl, supabasePublishableKey, {
// 	db: {
// 		schema: 'users',
// 	},
// });

export { supabase };
