<script lang="ts">
	import Input from 'flowbite-svelte/Input.svelte';
	import ButtonBlack from './button-black.svelte';

	const onSubmit = () => {
		const formEl = document.getElementById('subscribe') as HTMLFormElement;
		const data = new FormData(formEl);

		fetch('/api/subscribe', {
			method: 'POST',
			body: JSON.stringify(data)
		});
	};
</script>

<form
	on:submit|preventDefault={onSubmit}
	class="min-h-svh bg-[url('$lib/assets/images/subscribe-bg.png')] bg-cover bg-center flex flex-col items-center justify-center text-white py-[80px] px-[30px]"
	id="subscribe"
>
	<h3 class=" font-serif text-[60px]">Subscribe</h3>
	<p class=" text-[16px] text-center my-[65px]">
		Stay tuned for more updates about our wedding! You can message either of us but let's make use
		of this site we created.
		<br />
		We will be updating this site with all the exciting details leading up to our big day. Thank you
		for joining us on this incredible ride.
	</p>
	<Input
		size="lg"
		name="email"
		placeholder="johndoe@mail.com"
		type="email"
		class="rounded-none md:w-2/4 w-3/4"
	/>
	<ButtonBlack class="font-sans not-italic bg-transparent mt-[30px]" type="submit"
		>Submit</ButtonBlack
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
