<script lang="ts">
	import Navigation from '$lib/components/navigation.svelte';
	import Hero from '$lib/components/hero.svelte';
	import OurStory from '$lib/components/our-story.svelte';
	import Venue from '$lib/components/the-venue.svelte';
	import Events from '$lib/components/events.svelte';
	import Gallery from '$lib/components/gallery.svelte';
	import Registry from '$lib/components/registry.svelte';
	import Subscribe from '$lib/components/subscribe.svelte';
	import ImageBreak from '$lib/components/image-break.svelte';
	import Squad from '$lib/components/squad.svelte';
</script>

<main>
	<Navigation isPublic={true} />
	<Hero />
	<OurStory />
	<Events />
	<Registry />
	<ImageBreak />
	<Squad />
	<Venue />
	<Gallery />
	<Subscribe />
</main>
