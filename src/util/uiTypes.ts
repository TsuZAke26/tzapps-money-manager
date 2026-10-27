import type { Database } from '@/lib/supabase/types';

export interface AccountUI {
	id: number;
	name: string;
	balance: number;
	account_type: Database['public']['Enums']['account_type'];
}
