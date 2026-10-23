<template>
	<div class="w-full h-12 bg-blue-100 grid px-2 gap-4 grid-cols-4">
		<div
			v-for="item in items"
			:key="item.title"
			class="col-auto"
			@click="handleClick(item.pathName)"
		>
			<div
				class="h-full flex flex-col items-center justify-center cursor-pointer hover:bg-blue-300"
			>
				<component :is="item.icon" class="h-6 w-6" />
				<span class="text-xs">{{ item.title }}</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { RiDashboardLine } from '@remixicon/vue';

const router = useRouter();

const items = [
	{
		title: 'Dashboard',
		icon: RiDashboardLine,
		pathName: 'dashboard',
	},
	{
		title: 'Dashboard',
		icon: RiDashboardLine,
		pathName: 'dashboard',
	},
	{
		title: 'Dashboard',
		icon: RiDashboardLine,
		pathName: 'dashboard',
	},
	{
		title: 'Auth',
		icon: RiDashboardLine,
		pathName: 'auth',
	},
];

const handleClick = (name: string) => {
	router.push({ name });
};
</script>

<style scoped></style>
