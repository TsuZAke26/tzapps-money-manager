<template>
	<div class="min-h-screen p-4">
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
