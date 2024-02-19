<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	let btnClass = '';

	$: btnClass = twMerge(
		'underline-hover py-[20px] px-[40px] font-serif text-[14px] italic font-normal bg-bgLight transition-colors duration-300 ease-in-out text-black border-black border',
		$$props.class
	);
</script>

<button class={btnClass}>
	<div class="relative inline-block">
		<slot />
	</div>
</button>

<style>
	.underline-hover {
		--underline-hover-color: theme('colors.black');
	}
</style>
