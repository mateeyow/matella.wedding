<script lang="ts">
	import Timeline from 'flowbite-svelte/Timeline.svelte';
	import TimelineItem from 'flowbite-svelte/TimelineItem.svelte';
	import OurStory1 from '$lib/assets/images/our-story-1.png';
	import OurStory2 from '$lib/assets/images/our-story-2.png';
</script>

<div class="bg-bgDark bg-center bg-cover px-[50px] py-[60px]" id="our-story">
	<div class="max-w-[1248px] mx-auto">
		<h3 class="font-serif text-[50px] mb-[20px]">Our Story</h3>

		<Timeline class="text-black border-dashed border-black">
			<TimelineItem
				date="2016"
				classTime="text-black font-serif text-[20px] font-semibold"
				classDiv="bg-black border-black"
				classLi="mb-[24px]"
			>
				<p class="mb-4 text-base font-normal font-sans dark:text-gray-400">
					Matt left MedSpecialized for Singapore, Ella joined Medspecialized
					<br />Lived one block away from each other. Never crossed paths.
				</p>
			</TimelineItem>
			<TimelineItem
				date="2020"
				classTime="text-black font-serif text-[20px] font-semibold"
				classDiv="bg-black border-black"
				classLi="mb-[24px]"
			>
				<p class="mb-4 text-base font-normal font-sans dark:text-gray-400">
					Matt got heartbroken, Ella got heartbroken
				</p>
			</TimelineItem>
			<TimelineItem
				date="Nov. 2021"
				classTime="text-black  font-serif text-[20px] font-semibold"
				classDiv="bg-black border-black"
				classLi="mb-[24px]"
			>
				<p class="mb-4 text-base font-normal font-sans dark:text-gray-400">
					Matt went to Argao to visit friends, Ella left Argao from same friends Matt visited
				</p>
			</TimelineItem>
			<TimelineItem
				date="Nov. 25, 2021"
				classTime="text-black  font-serif text-[20px] font-semibold"
				classDiv="bg-black border-black"
				classLi="mb-[24px]"
			>
				<p class="mb-4 text-base font-normal font-sans dark:text-gray-400">Unplanned lunch</p>
			</TimelineItem>
			<TimelineItem
				date="Dec. 2021"
				classTime="text-black  font-serif text-[20px] font-semibold"
				classDiv="bg-black border-black"
				classLi="mb-[24px]"
			>
				<p class="mb-4 text-base font-normal font-sans dark:text-gray-400">
					Online dated each other
				</p>
			</TimelineItem>
			<TimelineItem
				date="Feb. 2022"
				classTime="text-black  font-serif text-[20px] font-semibold"
				classDiv="bg-black border-black"
				classLi="mb-[24px]"
			>
				<p class="mb-4 text-base font-normal font-sans dark:text-gray-400">In a relationship</p>
			</TimelineItem>
			<TimelineItem
				date="Sept. 2023"
				classTime="text-black  font-serif text-[20px] font-semibold"
				classDiv="bg-black border-black"
				classLi="mb-[24px]"
			/>
		</Timeline>
		<div class="flex flex-col gap-[6px] md:flex-row">
			<img src={OurStory1} alt="Our Story 1" class="md:flex-1" />
			<img src={OurStory2} alt="Our Story 2" class="md:flex-1" />
		</div>
	</div>
</div>
