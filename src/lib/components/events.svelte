<script lang="ts">
	import Timeline from 'flowbite-svelte/Timeline.svelte';
	import TimelineItem from 'flowbite-svelte/TimelineItem.svelte';
	import ButtonWhite from './button-white.svelte';
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
				<div class="bg-bgLight py-[30px] px-[20px] flex flex-col gap-[15px]">
					<h3 class="font-serif text-[24px] font-medium">Welcome Dinner</h3>
					<h4 class="uppercase text-[14px]">Motif and Dress Code:</h4>
					<p class="text-[14px]">
						For the welcome dinner, may we request our guests to wear a comfortable <span
							class="font-serif italic font-bold">white cocktail or beach dress or pantsuits</span
						>
						for women, and for men
						<span class="font-serif italic font-bold">white button down shirts and pants.</span> Any
						comfortable footwear.
					</p>
					<a
						href="https://www.pinterest.com/ellasarmago/welcome-dinner"
						target="_blank"
						rel="noopener noreferrer"
					>
						<ButtonWhite class="font-sans not-italic">View Pinterest Board</ButtonWhite>
					</a>
				</div>
			</TimelineItem>
			<TimelineItem
				date="Mar 1, 2025"
				classTime="text-white font-serif text-[20px] font-semibold"
				classLi="mb-[24px]"
			>
				<div class="bg-bgLight py-[30px] px-[20px] flex flex-col gap-[15px]">
					<h3 class="font-serif text-[24px] font-medium">Wedding Day</h3>
					<h4 class="uppercase text-[14px]">Motif and Dress Code:</h4>
					<p class="text-[14px]">
						Our wedding will be taking place outdoors. May we suggest <span
							class="font-serif italic font-bold"
							>chic sundresses or gowns that are ankle to floor length.</span
						>
						The ceremony will be held poolside,
						<span class="font-serif italic font-bold">sandals, wedge or any comfortable heels</span>
						can be worn.
						<br />
						For men, <span class="font-serif italic font-bold">formal and simple.</span> We ask the
						men to wear a <span class="font-serif italic font-bold">dark suit and tie.</span><br
						/>Sunglasses and sunscreens are a must too! <br />Our motif is
						<span class="font-serif italic font-bold">simple and sophisticated.</span> Wear your color.
					</p>
					<a
						href="https://www.pinterest.ph/ellasarmago/wedding-guests"
						target="_blank"
						rel="noopener noreferrer"
					>
						<ButtonWhite class="font-sans not-italic">View Pinterest Board</ButtonWhite>
					</a>
				</div>
			</TimelineItem>
		</Timeline>
	</div>
</div>
