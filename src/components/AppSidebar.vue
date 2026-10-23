<template>
	<Sidebar class="invisible sm:visible" side="left" collapsible="icon">
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
						<SidebarMenuItem v-for="item in sidebarMenuItems" :key="item.title">
							<SidebarMenuButton as-child>
								<RouterLink :to="{ name: item.pathName }">
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
					<RouterLink :to="{ name: 'auth' }">
						<RiLogoutBoxLine />
						<span>Log Out</span>
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
import { RiDashboardLine, RiLogoutBoxLine } from '@remixicon/vue';

const sidebarMenuItems = [
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
];
</script>

<style scoped></style>
