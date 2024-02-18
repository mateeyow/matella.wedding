<script lang="ts">
	import { Carousel } from 'flowbite-svelte';
	import Villa1 from '$lib/assets/images/villa-1.png';
	import Villa2 from '$lib/assets/images/villa-2.png';
	import Villa3 from '$lib/assets/images/villa-3.png';
	import Villa4 from '$lib/assets/images/villa-4.png';
	import Villa5 from '$lib/assets/images/villa-5.png';

	const images = [
		{
			alt: 'Villa 1',
			src: Villa1
		},
		{
			alt: 'Villa 2',
			src: Villa2
		},
		{
			alt: 'Villa 3',
			src: Villa3
		},
		{
			alt: 'Villa 4',
			src: Villa4
		},
		{
			alt: 'Villa 5',
			src: Villa5
		}
	];
</script>

<div
	class="bg-bgDark py-[40px] px-[30px] min-h-svh md:h-svh md:py-[100px] md:px-[60px]"
	id="the-venue"
>
	<div class="max-w-[1248px] mx-auto md:grid md:grid-cols-[1fr_300px] md:gap-[60px]">
		<div>
			<Carousel
				{images}
				let:Indicators
				class="rounded-none md:h-[600px]"
				imgClass="md:object-contain md:h-full md:w-fit"
				duration={3000}
			>
				<Indicators class="translate-y-[50px] md:-translate-y-[10px]" />
			</Carousel>
		</div>

		<div class="mt-[80px]">
			<h3 class="font-serif text-[20px] font-semibold uppercase">The Venue</h3>
			<h4 class="font-serif text-[50px] font-medium tracking-[0.5px] my-[30px] flex gap-2">
				Villa Plenilunio
				<a
					href="https://www.instagram.com/villaplenilunio/"
					rel="noopener noreferrer"
					target="_blank"
					class="pt-2"
					><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" fill="none"
						><path
							d="M10.001 7.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm6.5-.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-6.5-2.75c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.408.15-.778.39-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C2.007 7.575 2 7.961 2 10.5c0 2.475.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333 1.104.052 1.49.058 4.029.058 2.475 0 2.878-.007 4.029-.058.782-.037 1.308-.142 1.797-.331a2.91 2.91 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08.19-.492.296-1.018.332-1.8.052-1.103.058-1.49.058-4.028 0-2.474-.007-2.878-.058-4.029-.037-.782-.143-1.31-.332-1.798a2.912 2.912 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331-1.103-.052-1.488-.058-4.028-.058ZM10 .5c2.717 0 3.056.01 4.123.06 1.064.05 1.79.217 2.427.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.884 4.884 0 0 1-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.427.465-1.067.047-1.406.06-4.123.06-2.717 0-3.056-.01-4.123-.06-1.064-.05-1.789-.218-2.427-.465a4.89 4.89 0 0 1-1.772-1.153A4.904 4.904 0 0 1 .525 17.05C.277 16.413.11 15.687.06 14.622.012 13.556 0 13.217 0 10.5c0-2.717.01-3.056.06-4.122.05-1.065.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 3.45 1.025C4.087.777 4.812.61 5.877.56 6.945.513 7.283.5 10 .5Z"
							fill="#1B1B1B"
						/></svg
					></a
				>
			</h4>
			<p class="font-sans text-[14px]">
				The venue is situated in Uluwatu, Bali. It is best to book for an accomodation in the Pecatu
				area. From there, all major things to do in Uluwatu is a 20 minute motorbike ride. Please
				consider checking the maps to see how far your intended accomodation from Villa Plenilunio,
				for easy pick up and drop off on our wedding day.
				<br /><br />
				You can also stay outside Uluwatu. If surfing is your priority, Uluwatu waves is not beginner
				friendly. You can stay somewhere Kuta, Seminyak, or Canggu instead-- one hour away from Uluwatu.
				We can still help you arrange for a transportation.
			</p>
		</div>
	</div>
</div>

<style>
	:root {
		--tw-translate-y: translateY(-50%);
	}
</style>
