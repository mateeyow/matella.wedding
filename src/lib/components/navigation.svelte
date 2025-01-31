<script lang="ts">
	import Navbar from 'flowbite-svelte/Navbar.svelte';
	import NavHamburger from 'flowbite-svelte/NavHamburger.svelte';
	import NavContainer from 'flowbite-svelte/NavContainer.svelte';
	import NavUl from 'flowbite-svelte/NavUl.svelte';
	import NavLi from 'flowbite-svelte/NavLi.svelte';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	export let isPublic: boolean = true;
	onMount(() => {
		if (!browser) {
			return;
		}

		const navbar = document.querySelector('.navbar-container');

		const callback = () => {
			if (window.scrollY > 500) {
				navbar?.classList.add('md:bg-[#2D272799]');
				navbar?.classList.remove('bg-transparent');
			} else {
				navbar?.classList.add('bg-transparent');
				navbar?.classList.remove('md:bg-[#2D272799]');
			}
		};

		window.addEventListener('scroll', callback);

		return () => {
			window.removeEventListener('scroll', callback);
		};
	});
</script>

<Navbar class="bg-transparent fixed z-20 top-0 start-0 navbar-container transition-colors ease-in">
	<NavContainer class="justify-end">
		<div>
			<NavHamburger menuClass="text-white" class="bg-[#2D272799] hover:bg-[#2D272799]" />
		</div>
		<NavUl
			class="mx-auto uppercase"
			ulClass="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:text-sm md:font-medium bg-[#2D272799] md:bg-transparent"
			nonActiveClass="hover:bg-transparent"
		>
			{#if !isPublic}
				<NavLi class="text-white tracking-[2.50px]" href="#save-the-date">Save the date</NavLi>
			{/if}
			<NavLi class="text-white tracking-[2.50px]" href="#our-story">Our story</NavLi>
			<NavLi class="text-white tracking-[2.50px]" href="#events">Events</NavLi>
			<NavLi class="text-white tracking-[2.50px]" href="#gift-registry">Gifts</NavLi>
			<NavLi class="text-white tracking-[2.50px]" href="#squad">The Squad</NavLi>
			<NavLi class="text-white tracking-[2.50px]" href="#the-venue">The venue</NavLi>
			<NavLi class="text-white tracking-[2.50px]" href="#gallery">Gallery</NavLi>
		</NavUl>
	</NavContainer>
</Navbar>
