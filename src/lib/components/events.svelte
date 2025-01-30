<script lang="ts">
	import Timeline from 'flowbite-svelte/Timeline.svelte';
	import TimelineItem from 'flowbite-svelte/TimelineItem.svelte';
	import ButtonWhite from './button-white.svelte';

	let welcomeImages = Array.from([1, 2, 3, 4, 5]).map((i) => `/images/welcome${i}.webp`);
	let weddingImages = Array.from([1, 2, 3, 4, 5]).map((i) => `/images/wedding${i}.webp`);
</script>

<div
	class="bg-[url('$lib/assets/images/events-bg.png')] bg-right bg-cover min-h-svh py-[60px] px-[30px]"
	id="events"
>
	<div class="max-w-[1248px] mx-auto">
		<div>
			<h3 class="font-serif text-[50px] text-white">Events</h3>
		</div>

		<Timeline class="border-dashed mt-[30px]">
			<TimelineItem
				date="Feb 28, 2025"
				classTime="text-white font-serif text-[20px] font-semibold"
				classLi="mb-[24px]"
			>
				<div class="bg-bgLight py-[30px] px-[20px] flex flex-col gap-[30px]">
					<h3 class="font-serif text-[30px] font-medium">Welcome Dinner</h3>
					<div class="flex flex-col">
						<div class="grid grid-cols-4">
							<p class="font-semibold uppercase">Venue:</p>
							<p class="col-span-3">Ulu Cliffhouse</p>
						</div>
						<div class="grid grid-cols-4">
							<p class="font-semibold uppercase">Time:</p>
							<p class="col-span-3">4:00PM - 8:00PM</p>
						</div>
					</div>
					<p>
						This will be a low-alcohol evening filled with fun and friendly competition as we host
						an engaging trivia night!
					</p>
					<div class="flex flex-col gap-[22px]">
						<h4 class="uppercase font-semibold">Motif and Dress Code:</h4>
						<p class="">
							May we request our guests to wear a comfortable white cocktail or beach dress or
							pantsuits for women, and for men white button down shirts and pants. Any comfortable
							footwear.
						</p>
					</div>
					<div class="grid grid-cols-6 gap-[10px]">
						{#each welcomeImages as image (image)}
							<img src={image} alt="Welcome Dinner" class="h-[150px] w-full col-span-2 event-img" />
						{/each}
					</div>
				</div>
			</TimelineItem>
			<TimelineItem
				date="Mar 1, 2025"
				classTime="text-white font-serif text-[20px] font-semibold"
				classLi="mb-[24px]"
			>
				<div class="bg-bgLight py-[30px] px-[20px] flex flex-col gap-[30px]">
					<h3 class="font-serif text-[30px] font-medium">Wedding Day</h3>
					<div class="flex flex-col">
						<div class="grid grid-cols-4">
							<p class="font-semibold uppercase">Venue:</p>
							<p class="col-span-3">Villa Plenilunio</p>
						</div>
						<div class="grid grid-cols-4">
							<p class="font-semibold uppercase">Time:</p>
							<p class="col-span-3">3:00PM</p>
						</div>
					</div>
					<h4 class="uppercase font-semibold">Motif and Dress Code:</h4>
					<p class="">
						Our wedding will be taking place outdoors. May we suggest chic long dresses or gowns
						that are ankle to floor length. The ceremony will be held poolside, sandals, wedge or
						any comfortable heels can be worn.
						<br />
						<br />
						For men, formal and simple. We ask the men to be in a suit and tie during the ceremony.
						<br />
						<br />
						Sunglasses and sunscreens are a must too!
						<br />
						<br />
						Wear your color.
					</p>
					<div class="grid grid-cols-6 gap-[10px]">
						{#each weddingImages as image (image)}
							<img src={image} alt="Wedding" class="h-[150px] w-full col-span-2 event-img" />
						{/each}
					</div>
				</div>
			</TimelineItem>
		</Timeline>
	</div>
</div>

<style>
	.event-img:last-child,
	.event-img:nth-child(4) {
		grid-column: span 3 / span 3;
	}
</style>
