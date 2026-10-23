<template>
	<div class="flex flex-row min-h-screen justify-center items-center">
		<Button @click="handleClick" class="bg-red-500" variant="outline"
			>Auth View</Button
		>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import Button from '@/components/ui/button/Button.vue';

const router = useRouter();

const handleClick = () => {
	router.push('/');
};
</script>

<style scoped></style>
