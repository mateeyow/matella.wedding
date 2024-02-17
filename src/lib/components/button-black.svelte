<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	let btnClass = '';
	$: btnClass = twMerge(
		'py-[20px] px-[40px] bg-black text-white font-serif text-[14px] italic font-normal hover:bg-bgLight transition-colors duration-300 ease-in-out hover:text-black hover:border-black border',
		$$props.class
	);
</script>

<button {...$$props} class={btnClass}>
	<slot />
</button>
