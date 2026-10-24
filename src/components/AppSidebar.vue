<template>
	<Sidebar class="invisible sm:visible" side="left">
		<!-- Sidebar Title -->
		<SidebarHeader>
			<div>Money Manager</div>
			<Separator />
		</SidebarHeader>

		<!-- Sidebar "meat" -->
		<SidebarContent>
			<!-- First content group (main links) -->
			<SidebarGroup>
				<SidebarGroupContent>
					<SidebarMenu>
						<SidebarMenuItem
							v-for="item in viewNavigationItems"
							:key="item.title"
						>
							<SidebarMenuButton as-child>
								<RouterLink :to="item.to">
									<component :is="item.icon" />
									{{ item.title }}
								</RouterLink>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarGroupContent>
			</SidebarGroup>
		</SidebarContent>

		<SidebarFooter>
			<SidebarMenuItem>
				<SidebarMenuButton as-child>
					<RouterLink :to="logoutNavItem.to">
						<component :is="logoutNavItem.icon" />
						<span>{{ logoutNavItem.title }}</span>
					</RouterLink>
				</SidebarMenuButton>
			</SidebarMenuItem>
		</SidebarFooter>
	</Sidebar>
</template>

<script setup lang="ts">
import {
	Sidebar,
	SidebarHeader,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
} from '@/components/ui/sidebar';
import Separator from '@/components/ui/separator/Separator.vue';

import { viewNavigationItems, logoutNavItem } from './navigation-config.ts';
</script>

<style scoped></style>
