<script lang="ts">
	import ButtonBlack from './button-black.svelte';
	import ButtonWhite from './button-white.svelte';
</script>

<div id="save-the-date" class="grid md:grid-cols-2 md:h-svh">
	<div class="md:h-svh py-[100px] px-[30px] md:px-[60px] md:py-[60px]">
		<h3 class="font-serif text-[50px] font-medium mb-[40px]">Save the date</h3>
		<p class="text-[14px]">
			Hi [name],
			<br />
			<br />
			<br />
			With the sound of the waves and the sunset at our backs, we are beyond thrilled to extend our heartfelt
			invitation to you.
			<br />
			<br />
			Our special day promises a day filled with laughter, sunkissed skin, bottoms up, after-wedding
			hangover and most especially a memory that will linger in our hearts for a lifetime.
			<br />
			<br />
			Please join us in this "intimate but rowdy" celebration of our love. You are special to us, and
			we hope to share this moment with you like how you have shared your special moments with us.
			<br />
			<br />
			We are looking forward to celebrating with you. The courtesy of a reply is requested by May 15,
			2024.
		</p>

		<div class="flex flex-col gap-[10px] mt-[40px]">
			<ButtonBlack>Yes, I am packed and ready to celebrate in person!</ButtonBlack>
			<ButtonBlack>Yes, and I will be bringing [plus one name] with me.</ButtonBlack>
			<ButtonWhite>No, I will be there in spirit and will forever regret this decision.</ButtonWhite
			>
		</div>
	</div>

	<div
		class="bg-[url('$lib/assets/images/save-the-date.png')] h-svh bg-bottom bg-no-repeat bg-cover"
	></div>
</div>
