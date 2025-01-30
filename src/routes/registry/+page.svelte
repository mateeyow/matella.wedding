<script lang="ts">
	import ButtonBlack from '$lib/components/button-black.svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { LS_CODE } from '$lib/constants';

	let previousPage: string = '/#gift-registry';

	onMount(() => {
		if (!browser) {
			return;
		}
		const code = localStorage.getItem(LS_CODE);

		if (code) {
			previousPage = `/${code}#gift-registry`;
		}
	});
</script>

<div class="min-h-svh bg-bgLight flex flex-col">
	<div
		class="flex flex-col items-center justify-center text-center gap-[50px] flex-1 px-[30px] py-[40px] max-w-[1248px] mx-auto"
	>
		<h1 class="text-[50px] font-medium font-serif">Gifts</h1>
		<p class="font-sans text-[14px]">
			Thank you for your generous contribution to our honeymon fund. We'll think of you as we enjoy
			the Camino de Santiago trail.
		</p>
		<div class="flex flex-col gap-[20px]">
			<img src="/images/gcash.webp" alt="GCash QR Code" />
			<img src="/images/paynow.webp" alt="PayNow QR Code" />
		</div>
		<p>
			For your convenience, you can use the QR Codes above for easy transfers. We will also provide
			envelopes at the wedding and happily accept any currency.
		</p>
		<div class="w-full">
			<a href={previousPage}>
				<ButtonBlack class="w-full">Back to homepage</ButtonBlack>
			</a>
		</div>
	</div>
</div>
