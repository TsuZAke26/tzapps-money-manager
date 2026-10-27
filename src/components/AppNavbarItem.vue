<template>
	<div
		class="h-full flex flex-col items-center justify-center cursor-pointer hover:bg-blue-300"
		@click="handleClick"
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

const handleClick = () => {
	if (props.item.handleClick) {
		props.item.handleClick();
	} else {
		router.push(props.item.to);
	}
};
</script>

<style scoped></style>
