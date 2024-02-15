<script lang="ts">
	import Timeline from 'flowbite-svelte/Timeline.svelte';
	import TimelineItem from 'flowbite-svelte/TimelineItem.svelte';
</script>

<div class="h-svh px-[36px]" id="our-story">
	<h3>Our Story</h3>

	<Timeline>
		<TimelineItem date="2016">
			<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
				Matt left MedSpecialized for Singapore, Ella joined Medspecialized
			</p>
			<p>Lived one block away from each other. Never crossed paths.</p>
		</TimelineItem>
		<TimelineItem date="2020">
			<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
				Matt got heartbroken, Ella got heartbroken
			</p>
		</TimelineItem>
		<TimelineItem date="11/2021">
			<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
				Matt went to Argao to visit friends, Ella left Argao from same friends Matt visited
			</p>
		</TimelineItem>
		<TimelineItem date="11/25/2021">
			<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Unplanned lunch</p>
		</TimelineItem>
		<TimelineItem date="12/2021">
			<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
				Online dated each other
			</p>
		</TimelineItem>
		<TimelineItem date="02/2022">
			<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">In a relationship</p>
		</TimelineItem>
		<TimelineItem date="09/2022">Some Image</TimelineItem>
	</Timeline>
</div>
