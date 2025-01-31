<script lang="ts">
	const groomSquad = Array.from([...Array(8)]).map((_, i) => ({
		alt: `Groom Squad ${i + 1}`,
		src: `/images/groom-squad/${i + 1}.webp`
	}));
	const brideSquad = Array.from([...Array(14)]).map((_, i) => ({
		alt: `Bride Squad ${i + 1}`,
		src: `/images/bride-squad/${i + 1}.webp`
	}));
</script>

<div class="flex flex-col items-center py-[60px] px-[30px] gap-[50px]" id="squad">
	<div class="flex flex-col gap-[30px] items-center">
		<h3 class="font-serif text-[50px]">The Squad</h3>
		<p class="text-[14px] text-center leading-[170%] md:max-w-[1000px]">
			Behind every great couple is an amazing group of friends and family who've been there through
			it all. Meet our Bride Squad and Groom Squad—our closest companions, partners-in-crime, and
			the ones who've made life a little brighter (and a lot more fun).
			<br />
			<br />
			These are the people who've laughed, cried, and celebrated with us every step of the way, and we
			couldn't imagine our special day without them.We're beyond excited to have them by our side on
			the big day, not only to celebrate with us but also to perform an epic song and dance that will
			have everyone cheering!
		</p>
	</div>

	<div class="flex flex-col gap-[30px] items-center">
		<h3 class="font-serif text-[50px] text-center">The Groom Squad</h3>
		<div class="flex flex-wrap gap-[10px] masonry groom md:justify-center">
			{#each groomSquad as { alt, src } (src)}
				<img {src} {alt} />
			{/each}
		</div>
	</div>
	<div class="flex flex-col gap-[30px] items-center">
		<h3 class="font-serif text-[50px] text-center">The Bride Squad</h3>
		<div class="flex flex-wrap gap-[10px] masonry bride md:hidden">
			{#each brideSquad as { alt, src } (src)}
				<img {src} {alt} />
			{/each}
		</div>

		<div class="hidden md:flex flex-col gap-[10px]">
			<div class="flex flex-wrap gap-[10px] justify-center">
				<img src="/images/bride-squad/1.webp" alt="Bride Squad 1" class="w-[calc(12%-10px)]" />
				<img src="/images/bride-squad/2.webp" alt="Bride Squad 2" class="w-[calc(25%-10px)]" />
				<img src="/images/bride-squad/3.webp" alt="Bride Squad 3" class="w-[calc(12%-10px)]" />
				<img src="/images/bride-squad/4.webp" alt="Bride Squad 4" class="w-[calc(25%-10px)]" />
				<img src="/images/bride-squad/5.webp" alt="Bride Squad 5" class="w-[calc(12%-10px)]" />
			</div>
			<div class="flex flex-wrap gap-[10px] justify-center">
				<img src="/images/bride-squad/6.webp" alt="Bride Squad 6" class="w-[calc(23%-10px)]" />
				<img src="/images/bride-squad/7.webp" alt="Bride Squad 7" class="w-[calc(18%-10px)]" />
				<img src="/images/bride-squad/8.webp" alt="Bride Squad 8" class="w-[calc(23%-10px)]" />
				<img src="/images/bride-squad/9.webp" alt="Bride Squad 9" class="w-[calc(18%-10px)]" />
			</div>
		</div>
		<div class="flex flex-wrap gap-[10px] justify-center">
			<img src="/images/bride-squad/10.webp" alt="Bride Squad 10" class="w-[calc(25%-10px)]" />
			<img src="/images/bride-squad/11.webp" alt="Bride Squad 11" class="w-[calc(12%-10px)]" />
			<img src="/images/bride-squad/12.webp" alt="Bride Squad 12" class="w-[calc(23%-10px)]" />
			<img src="/images/bride-squad/13.webp" alt="Bride Squad 13" class="w-[calc(15%-10px)]" />
			<img src="/images/bride-squad/14.webp" alt="Bride Squad 14" class="w-[calc(25%-10px)]" />
		</div>
	</div>
</div>

<style>
	.masonry img {
		width: calc(50% - 10px);
		height: auto;
	}

	.masonry img:nth-child(4n + 1) {
		width: calc(40% - 10px);
	}

	.masonry img:nth-child(4n + 2) {
		width: calc(60% - 10px);
	}

	@media (min-width: 769px) {
		.groom.masonry img {
			width: calc(20% - 10px);
		}

		.groom.masonry img:nth-child(4n + 1) {
			width: calc(11% - 10px);
		}
		.groom.masonry img:nth-child(4n + 2) {
			width: calc(20% - 10px);
		}

		.groom.masonry img:nth-child(6),
		.groom.masonry img:nth-child(7),
		.groom.masonry img:nth-child(8) {
			width: calc(24% - 10px);
		}
	}
</style>
