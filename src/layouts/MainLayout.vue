<template>
	<SidebarProvider>
		<AppSidebar />
		<main class="w-full max-h-screen">
			<div class="hidden sm:inline relative">
				<SidebarTrigger />
			</div>

			<!-- Main route content -->
			<RouterView />

			<!-- Mobile navigation -->
			<AppNavbar class="block sm:hidden absolute bottom-0 left-0" />
		</main>
	</SidebarProvider>
</template>

<script setup lang="ts">
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebar from '@/components/AppSidebar.vue';
import AppNavbar from '@/components/AppNavbar.vue';
</script>

<style scoped></style>
