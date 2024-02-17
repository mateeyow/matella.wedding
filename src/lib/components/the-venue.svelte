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

<div class="h-svh" id="the-venue">
	<Carousel {images} let:Indicators>
		<Indicators />
	</Carousel>

	<div>
		<h3>The Venue</h3>
		<h4>Villa Plenilunio</h4>
		<p>
			The venue is situated in Uluwatu, Bali. It is best to book for an accomodation in the Pecatu
			area. From there, all major things to do in Uluwatu is a 20 minute motorbike ride. Please
			consider checking the maps to see how far your intended accomodation from Villa Plenilunio,
			for easy pick up and drop off on our wedding day.
		</p>
		<p>
			You can also stay outside Uluwatu. If surfing is your priority, Uluwatu waves is not beginner
			friendly. You can stay somewhere Kuta, Seminyak, or Canggu instead-- one hour away from
			Uluwatu. We can still help you arrange for a transportation.
		</p>
	</div>
</div>
