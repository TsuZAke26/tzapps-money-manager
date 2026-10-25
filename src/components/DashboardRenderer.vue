<template>
	<ul class="w-full min-h-12 bg-green-500">
		<li v-for="account in accounts" :key="account.id">
			{{ account.name }}
		</li>
	</ul>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';

import { supabase } from '@/lib/supabase/clients';
import type { Database } from '@/lib/supabase/types';

const accounts: Ref<
	Database['accounts']['Tables']['accounts']['Row'][] | null
> = ref([]);

const { data, error } = await supabase
	.schema('accounts')
	.from('accounts')
	.select();
accounts.value = data;
</script>

<style scoped></style>
