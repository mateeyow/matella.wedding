<script lang="ts">
	import Gallery from 'flowbite-svelte/Gallery.svelte';
	import Modal from 'flowbite-svelte/Modal.svelte';
	import G1 from '$lib/assets/images/g1.png';
	import G2 from '$lib/assets/images/g2.png';
	import G3 from '$lib/assets/images/g3.png';
	import G4 from '$lib/assets/images/g4.png';
	import G5 from '$lib/assets/images/g5.png';
	import G6 from '$lib/assets/images/g6.png';
	import G7 from '$lib/assets/images/g7.png';
	import G8 from '$lib/assets/images/g8.png';
	import G9 from '$lib/assets/images/g9.png';
	import G10 from '$lib/assets/images/g10.png';
	import G11 from '$lib/assets/images/g11.png';
	import G12 from '$lib/assets/images/g12.png';
	import GU1 from '$lib/assets/images/gu1.png';
	import GU2 from '$lib/assets/images/gu2.png';
	import GU3 from '$lib/assets/images/gu3.png';
	import GU4 from '$lib/assets/images/gu4.png';
	import GU5 from '$lib/assets/images/gu5.png';
	import GU6 from '$lib/assets/images/gu6.png';
	import GU7 from '$lib/assets/images/gu7.png';
	import GU8 from '$lib/assets/images/gu8.png';
	import GU9 from '$lib/assets/images/gu9.png';
	import GU10 from '$lib/assets/images/gu10.png';
	import GU11 from '$lib/assets/images/gu11.png';
	import GU12 from '$lib/assets/images/gu12.png';
	import { afterNavigate } from '$app/navigation';
	import { base } from '$app/paths';

	let previousPage: string = base;

	afterNavigate(({ from }) => {
		previousPage = from?.url.pathname || previousPage;
	});

	let selectedImage = {
		src: '',
		alt: '',
		modal: ''
	};
	let isOpen = false;

	const col1 = [
		{
			alt: 'Matt & Ella in red',
			src: G1,
			modal: GU1
		},
		{
			alt: 'Matt & Ella in crossing the road holding hands',
			src: G2,
			modal: GU2
		},
		{
			alt: 'Matt & Ella in smiling looking in the camera',
			src: G3,
			modal: GU3
		},
		{
			alt: 'Matt & Ella in crossing the road holding hands',
			src: G4,
			modal: GU4
		}
	];

	const col2 = [
		{
			alt: 'Matt & Ella looking afar',
			src: G5,
			modal: GU5
		},
		{
			alt: 'Matt & Ella talking to each other with a yellow wall background',
			src: G6,
			modal: GU6
		},
		{
			alt: 'Matt & Ella looking at each other lovingly',
			src: G7,
			modal: GU7
		},
		{
			alt: 'Matt & Ella in a cafe sipping a drink',
			src: G8,
			modal: GU8
		}
	];

	const col3 = [
		{
			alt: 'Matt & Ella with sunglasses on',
			src: G9,
			modal: GU9
		},
		{
			alt: 'Matt & Ella laughing',
			src: G10,
			modal: GU10
		},
		{
			alt: 'Matt & Ella crossing a bridge',
			src: G11,
			modal: GU11
		},
		{
			alt: 'Matt & Ella in a cafe laughing',
			src: G12,
			modal: GU12
		}
	];

	const onImageClick = (item: { src: string; alt: string; modal: string }) => {
		selectedImage = item;
		isOpen = true;
	};
</script>

<div class="min-h-svh px-[40px] py-[80px] md:p-[100px]">
	<div class="flex flex-col gap-[30px] items-center">
		<h1 class="font-serif text-[60px] font-medium leading-3">Gallery</h1>
		<h2 class="text-[16px]">Vietnam, December 2023</h2>
		<a href={`${previousPage}#gallery`} class="text-[#ACA9A1]">Back to homepage</a>
	</div>

	<div class="mt-12">
		<Gallery class="gap-1 grid-cols-3 rounded-none">
			<Gallery>
				{#each col1 as item}
					<button on:click={() => onImageClick(item)}>
						<img src={item.src} alt={item.alt} class="rounded-none h-auto max-w-full" />
					</button>
				{/each}
			</Gallery>

			<Gallery>
				{#each col2 as item}
					<button on:click={() => onImageClick(item)}>
						<img src={item.src} alt={item.alt} class="rounded-none h-auto max-w-full" />
					</button>
				{/each}
			</Gallery>

			<Gallery>
				{#each col3 as item}
					<button on:click={() => onImageClick(item)}>
						<img src={item.src} alt={item.alt} class="rounded-none h-auto max-w-full" />
					</button>
				{/each}
			</Gallery>
		</Gallery>
	</div>
</div>

<Modal
	open={isOpen}
	on:close={() => (isOpen = false)}
	size="xl"
	outsideclose
	classBackdrop="opacity-90 bg-opacity-90"
	class="bg-transparent items-center shadow-none"
	bodyClass="overflow-visible space-y-0 text-white"
>
	<img
		src={selectedImage.modal}
		alt={selectedImage.alt}
		class="h-full max-w-full rounded-lg mt-0 max-h-svh"
	/>
</Modal>
