<template>
	<div class="flex flex-row min-h-screen justify-center items-center">
		<Button @click="handleClick" variant="outline">Hello Button</Button>
	</div>
</template>

<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';

const handleClick = () => {
	alert('Hello Moto');
};
</script>

<style scoped></style>
