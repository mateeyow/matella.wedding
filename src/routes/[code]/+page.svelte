<script lang="ts">
	import Navigation from '$lib/components/navigation.svelte';
	import Save from '$lib/components/save.svelte';
	import Hero from '$lib/components/hero.svelte';
	import OurStory from '$lib/components/our-story.svelte';
	import Venue from '$lib/components/the-venue.svelte';
	import Stay from '$lib/components/stay.svelte';
	import Events from '$lib/components/events.svelte';
	import Gallery from '$lib/components/gallery.svelte';
	import Registry from '$lib/components/registry.svelte';
	import Subscribe from '$lib/components/subscribe.svelte';
	import ImageBreak from '$lib/components/image-break.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { LS_CODE } from '$lib/constants';

	export let data;

	onMount(() => {
		if (!browser) return;

		localStorage.setItem(LS_CODE, $page.params.code);
	});
</script>

<main>
	<Navigation isPublic={false} />
	<Hero />
	<Save {data} />
	<OurStory />
	<Venue />
	<Stay />
	<ImageBreak />
	<Events />
	<Gallery />
	<Registry />
	<Subscribe />
</main>
