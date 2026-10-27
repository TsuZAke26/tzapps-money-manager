<template>
	<div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
		<Card class="w-full">
			<CardContent>
				<Item
					v-for="account in accountsCardData"
					:key="account.id"
					variant="outline"
				>
					<ItemContent>
						<div class="flex flex-row justify-between">
							<span>{{ account.name }}</span>
							<span>{{ account.balance }}</span>
						</div>
					</ItemContent>
				</Item>
			</CardContent>
			<CardFooter class="flex flex-row-reverse">
				<Button variant="outline" size="sm">All Accounts</Button>
			</CardFooter>
		</Card>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';

import { useAccountsStore } from '@/stores/accountsStore';
import { accountRowToAccountUI } from '@/util/transformers';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Item, ItemContent } from '@/components/ui/item';

const accountsStore = useAccountsStore();
const { visibleAccounts } = storeToRefs(accountsStore);
const { loadData } = accountsStore;

await loadData();

const accountsCardData = computed(() => {
	return visibleAccounts.value
		.sort((a, b) => {
			return a.name.localeCompare(b.name);
		})
		.map(accountRowToAccountUI)
		.slice(0, 3);
});
</script>

<style scoped></style>
