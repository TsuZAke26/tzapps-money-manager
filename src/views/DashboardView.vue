<template>
	<div class="flex flex-row min-h-screen justify-center items-center">
		<Suspense>
			<DashboardRenderer />
			<template #fallback>Dashboard View</template>
		</Suspense>
	</div>
</template>

<script setup lang="ts">
import DashboardRenderer from '@/components/DashboardRenderer.vue';
</script>

<style scoped></style>
