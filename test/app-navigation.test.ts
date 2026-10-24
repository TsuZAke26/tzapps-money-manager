import { defineComponent, h } from 'vue';
import { describe, expect, it } from 'vitest';
import { mount, shallowMount, RouterLinkStub } from '@vue/test-utils';

import AppNavbar from '../src/components/AppNavbar.vue';
import AppNavbarItem from '../src/components/AppNavbarItem.vue';
import AppSidebar from '../src/components/AppSidebar.vue';
import {
	logoutNavItem,
	viewNavigationItems,
} from '../src/components/navigation-config';

/* 
  Defined stubs to allow for testing of components that use slots, such as 
  the sidebar and its children. This is necessary because the sidebar and its 
  children are not being tested directly, but rather their presence and structure 
  is being verified through the AppSidebar component.
*/
const SlotStub = defineComponent({
	setup(_, { slots }) {
		return () => h('div', slots.default?.());
	},
});

describe('navigation components', () => {
	it('passes the configured navigation items to the navbar', () => {
		const wrapper = mount(AppNavbar, {
			global: {
				stubs: {
					RouterLink: RouterLinkStub,
				},
			},
		});

		const items = wrapper.findAllComponents(AppNavbarItem);

		expect(items.map((item) => item.props('item'))).toEqual([
			...viewNavigationItems,
			logoutNavItem,
		]);
	});

	it('renders sidebar links for each configured destination', () => {
		const wrapper = shallowMount(AppSidebar, {
			global: {
				stubs: {
					Sidebar: SlotStub,
					SidebarHeader: SlotStub,
					SidebarContent: SlotStub,
					SidebarGroup: SlotStub,
					SidebarGroupContent: SlotStub,
					SidebarMenu: SlotStub,
					SidebarMenuItem: SlotStub,
					SidebarMenuButton: SlotStub,
					RouterLink: RouterLinkStub,
				},
			},
		});

		const destinations = wrapper
			.findAllComponents(RouterLinkStub)
			.map((link) => link.props('to'));

		expect(destinations).toEqual([
			...viewNavigationItems.map((item) => item.to),
			logoutNavItem.to,
		]);
	});
});
