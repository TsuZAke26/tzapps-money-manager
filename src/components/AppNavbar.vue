<template>
	<div
		class="w-full h-12 bg-blue-100 grid justify-between px-2 gap-4 grid-cols-5"
	>
		<AppNavbarItem
			v-for="item in viewNavigationItems"
			:key="item.title"
			:item="item"
		/>
		<AppNavbarItem :item="logoutNavItem" />
	</div>
</template>

<script setup lang="ts">
import { viewNavigationItems, logoutNavItem } from './navigation-config.ts';
import AppNavbarItem from './AppNavbarItem.vue';
</script>

<style scoped></style>
