import type { Database } from '@/lib/supabase/types';
import type { AccountUI } from './uiTypes';

export const accountRowToAccountUI = (
	account: Database['accounts']['Tables']['accounts']['Row']
): AccountUI => {
	return {
		id: account.id,
		name: account.name,
		balance: account.balance,
		account_type: account.account_type,
	};
};
