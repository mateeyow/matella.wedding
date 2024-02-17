<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	let btnClass = '';
	$: btnClass = twMerge(
		'py-[20px] px-[40px] hover:bg-black hover:text-white font-serif text-[14px] italic font-normal bg-bgLight transition-colors duration-300 ease-in-out text-black border-black border',
		$$props.class
	);
</script>

<button class={btnClass}>
	<slot />
</button>
