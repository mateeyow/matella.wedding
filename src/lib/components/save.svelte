<script lang="ts">
	import type { InviteData } from '$lib/types';
	import Modal from 'flowbite-svelte/Modal.svelte';
	import { invalidateAll } from '$app/navigation';
	import ButtonBlack from './button-black.svelte';
	import ButtonWhite from './button-white.svelte';
	import { invites } from '$lib/stores/invites';
	import dayjs from 'dayjs';

	export let data: InviteData;
	let open = false;
	let withPlusOne = false;
	let inviteName = data.name;

	const formattedDate = dayjs(data.deadline || new Date('2024-08-31 12:00:00.000Z')).format(
		'MMMM DD, YYYY'
	);
	const sendData = async (payload: Partial<InviteData>) => {
		invites.set(true);
		await fetch('/api/invites', {
			method: 'POST',
			body: JSON.stringify({ ...payload, responded: true, id: data.id })
		});
		await invalidateAll();
	};

	const notGoing = () => {
		sendData({
			going: false
		});
	};

	const goingAlone = () => {
		open = true;
		sendData({
			going: true,
			bringPlusOne: false
		});
	};

	const goingWithPlusOne = () => {
		open = true;
		withPlusOne = true;
		sendData({
			going: true,
			bringPlusOne: true
		});
	};

	const goingDinner = () => {
		open = false;
		sendData({
			dinner: true
		});
	};

	const notGoingDinner = () => {
		open = false;
		sendData({
			dinner: false
		});
	};

	$: plusOne = data.partner || 'my plus one';
	$: dinnerText = withPlusOne
		? `Yes, we can make it on Feb 28 for the Welcome Dinner`
		: 'Yes, I can make it on Feb 28 for the Welcome Dinner';
	$: answerText = data.going ? 'See you there!' : 'We will miss you!';
	$: inviteName = data.partnerName ? `${data.name} & ${data.partnerName}` : data.name;
</script>

<div id="save-the-date" class="grid md:grid-cols-2 md:min-h-svh">
	<div class="md:min-h-svh py-[100px] px-[30px] md:px-[60px] md:py-[60px]">
		{#if !data.isLateInvite}
			<h3 class="font-serif text-[25px] font-medium mb-[60px] md:text-[30px]">{inviteName}.</h3>
			<p class="text-[20px] font-thin">
				We're Over the Moon!
				<br />
				<br />
				Thank you for saying “yes” to celebrating our special day with us! We're so excited to share
				this unforgettable moment with you, surrounded by the sound of the waves, a stunning sunset,
				and the best company we could ever ask for—you.
				<br />
				<br />
				See you in Bali.
				<br />
				<br />
				<br />
				<br />
				Lovelots,
				<br />
				<br />
				Matt & Ella
			</p>
		{:else}
			<h3 class="font-serif text-[50px] font-medium mb-[40px]">Save the date</h3>
			<p class="text-[14px]">
				Hi {data.name},
				<br />
				<br />
				<br />
				With the sound of the waves and the sunset at our backs, we are beyond thrilled to extend our
				heartfelt invitation to you.
				<br />
				<br />
				Our special day promises a day filled with laughter, sunkissed skin, bottoms up, after-wedding
				hangover and most especially a memory that will linger in our hearts for a lifetime.
				<br />
				<br />
				Please join us in this "intimate but rowdy" celebration of our love. You are special to us, and
				we hope to share this moment with you like how you have shared your special moments with us.
				<br />
				<br />
				We are looking forward to celebrating with you. The courtesy of a reply is requested by
				<strong>{formattedDate}</strong>.
			</p>

			{#if !$invites}
				<div class="flex flex-col gap-[10px] mt-[40px]">
					<ButtonBlack on:click={goingAlone} type="button"
						>Yes, I am packed and ready to celebrate in person!</ButtonBlack
					>
					{#if data.hasPlusOne}
						<ButtonBlack on:click={goingWithPlusOne}
							>Yes, and I will be bringing {plusOne} with me.</ButtonBlack
						>
					{/if}
					<ButtonWhite on:click={notGoing}
						>No, I will be there in spirit and will forever regret this decision.</ButtonWhite
					>
				</div>
			{:else}
				<p class="text-[14px] mt-[40px]">Thanks for your response! {answerText}</p>
			{/if}
		{/if}
	</div>

	<div
		class="bg-[url('$lib/assets/images/save-the-date.png')] h-svh md:min-h-svh md:h-full sm:bg-bottom bg-[-50px] bg-no-repeat bg-cover"
	></div>
</div>

<Modal
	{open}
	on:close={() => {
		open = false;
	}}
	size="xl"
	outsideclose={false}
	dismissable={false}
	classBackdrop="opacity-90 bg-opacity-90"
	class="min-h-[500px] bg-bgLight shadow-none"
>
	<div class="flex flex-col items-center justify-center h-full">
		<h3 class="text-[60px] font-serif font-medium text-black text-center leading-tight">
			See you in Bali!
		</h3>
		<p class="text-[16px] text-black my-[40px] text-center">
			Let's meet for a few drinks before the wedding day.
		</p>
		<div class="flex flex-col gap-[10px] w-full md:w-[80%]">
			<ButtonBlack type="button" on:click={goingDinner}>{dinnerText}</ButtonBlack>
			<ButtonWhite type="button" on:click={notGoingDinner}
				>No, we'll see you on your wedding day.</ButtonWhite
			>
		</div>
	</div>
</Modal>
