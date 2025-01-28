<script lang="ts">
	import Input from 'flowbite-svelte/Input.svelte';
	import ButtonBlack from './button-black.svelte';
	import z from 'zod';
	import { subscribed } from '$lib/stores/subscription';

	const SubscribePayload = z.object({
		email: z.string({ required_error: 'email is required' }).email('must be a valid email'),
		code: z.string().optional()
	});

	let error = '';
	let disabled = false;

	const onSubmit = async () => {
		disabled = true;
		const formEl = document.getElementById('subscribe') as HTMLFormElement;
		const data = new FormData(formEl);

		const payload = Object.fromEntries(data.entries());

		const result = SubscribePayload.safeParse(payload);

		if (result.success === false) {
			error = result.error.flatten().fieldErrors.email?.[0] ?? '';
			return;
		}

		const response = await fetch('/api/subscribe', {
			method: 'POST',
			body: JSON.stringify(payload),
			headers: {
				'content-type': 'application/json'
			}
		});
		disabled = false;

		if (response.ok) {
			subscribed.set(true);
			return;
		}

		const err = await response.json();
		console.error('error', err);
		error = err?.message as string;
	};
</script>

<form
	on:submit|preventDefault={onSubmit}
	class="min-h-svh bg-[url('$lib/assets/images/subscribe-bg.png')] bg-cover bg-center flex flex-col items-center justify-center text-white py-[80px] px-[30px]"
	id="subscribe"
>
	<p class="my-[65px]">Love lots,</p>
	<div class="flex flex-col gap-[30px] items-center">
		<h3 class="text-[40px] tracking-[20px] uppercase font-serif leading-none me-[-20px]">
			Matthew
		</h3>
		<h3 class="text-[30px] font-serif italic">and</h3>
		<h3 class="text-[40px] tracking-[20px] uppercase font-serif leading-none me-[-20px]">Ella</h3>
	</div>
</form>
