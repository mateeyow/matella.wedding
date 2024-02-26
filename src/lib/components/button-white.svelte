<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	let btnClass = '';

	$: btnClass = twMerge(
		'underline-hover py-[20px] px-[40px] font-serif text-[14px] italic font-normal bg-bgLight transition-colors duration-300 ease-in-out text-black border-black border disabled:cursor-not-allowed disabled:bg-white/50',
		$$props.class
	);
</script>

<button {...$$restProps} class={btnClass} on:click>
	<div class="relative inline-block">
		<slot />
	</div>
</button>

<style>
	.underline-hover {
		--underline-hover-color: theme('colors.black');
	}
</style>
