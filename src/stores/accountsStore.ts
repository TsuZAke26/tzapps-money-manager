import { ref, type Ref, computed } from 'vue';
import { defineStore } from 'pinia';

import { fetchAll } from '@/lib/supabase/db/accounts-db';
import type { Database } from '@/lib/supabase/types';

export const useAccountsStore = defineStore('accounts', () => {
	const accounts: Ref<Database['accounts']['Tables']['accounts']['Row'][]> =
		ref([]);

	const visibleAccounts = computed(() => {
		return accounts.value.filter((account) => !account.hidden);
	});

	const loadData = async () => {
		if (!accounts.value.length) {
			const data = await fetchAll();
			accounts.value = data;
		}
	};

	return { accounts, visibleAccounts, loadData };
});
