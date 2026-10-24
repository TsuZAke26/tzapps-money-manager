<template>
	<div
		class="h-full flex flex-col items-center justify-center cursor-pointer hover:bg-blue-300"
		@click="handleClick(item.to)"
	>
		<component :is="item.icon" class="h-6 w-6" />
		<span class="text-xs font-bold">{{ item.title }}</span>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import type { NavigationItem } from './navigation-config';

const props = defineProps<{
	item: NavigationItem;
}>();

const router = useRouter();

const handleClick = (to: {
	name: string;
	params?: Record<string, string | number>;
}) => {
	router.push(to);
};
</script>

<style scoped></style>
