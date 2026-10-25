<template>
	<Card class="w-full max-w-sm">
		<CardHeader>
			<CardTitle>Login to your account</CardTitle>
			<CardDescription>
				Enter your email below to login to your account
			</CardDescription>
			<CardAction>
				<Button variant="link"> Sign Up </Button>
			</CardAction>
		</CardHeader>
		<CardContent>
			<form>
				<div class="grid w-full items-center gap-4">
					<div class="flex flex-col space-y-1.5">
						<Label for="email">Email</Label>
						<Input
							v-model:model-value="signInData.email"
							id="email"
							type="email"
							placeholder="m@example.com"
							required
						/>
					</div>
					<div class="flex flex-col space-y-1.5">
						<div class="flex items-center">
							<Label for="password">Password</Label>
							<a href="#" class="ml-auto inline-block text-sm underline">
								Forgot your password?
							</a>
						</div>
						<Input
							v-model:model-value="signInData.password"
							id="password"
							type="password"
							required
						/>
					</div>
				</div>
			</form>
		</CardContent>
		<CardFooter class="flex flex-col gap-2">
			<Button class="w-full" @click="handleLogin"> Login </Button>
		</CardFooter>
	</Card>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { supabase } from '@/lib/supabase/clients';

import { Button } from '@/components/ui/button';
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const signInData = reactive({
	email: '',
	password: '',
});

const handleLogin = async () => {
	try {
		const { error: signInError } =
			await supabase.auth.signInWithPassword(signInData);

		if (signInError) {
			throw signInError;
		}
	} catch (error) {
		console.error('Error logging in:', error);
	}
};
</script>

<style scoped></style>
