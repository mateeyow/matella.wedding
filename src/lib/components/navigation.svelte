<script lang="ts">
	import Navbar from 'flowbite-svelte/Navbar.svelte';
	import NavHamburger from 'flowbite-svelte/NavHamburger.svelte';
	import NavContainer from 'flowbite-svelte/NavContainer.svelte';
	import NavUl from 'flowbite-svelte/NavUl.svelte';
	import NavLi from 'flowbite-svelte/NavLi.svelte';
</script>

<Navbar class="bg-transparent fixed z-20 top-0 start-0">
	<NavContainer>
		<NavHamburger />
		<NavUl class="mx-auto uppercase">
			<NavLi class="text-white" href="#save-the-date">Save the date</NavLi>
			<NavLi class="text-white" href="#our-story">Our story</NavLi>
			<NavLi class="text-white" href="#the-venue">The venue</NavLi>
			<NavLi class="text-white" href="#where-you-can-stay">Where you can stay</NavLi>
			<NavLi class="text-white" href="#events">Events</NavLi>
			<NavLi class="text-white" href="#gallery">Gallery</NavLi>
			<NavLi class="text-white" href="#gift-registry">Gift registry</NavLi>
			<NavLi class="text-white" href="#subscribe">Subscribe</NavLi>
		</NavUl>
	</NavContainer>
</Navbar>
