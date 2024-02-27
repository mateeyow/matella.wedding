<div id="hero" class="h-svh text-white bg-center bg-cover flex flex-col relative overflow-hidden">
	<span
		class="bg-[url('$lib/assets/images/hero-bg.png')] absolute top-0 left-0 w-full h-full bg-center bg-cover -z-10 bg-hero"
	></span>
	<div class="m-auto text-center">
		<!-- Mobile -->
		<div class="flex flex-col md:hidden gap-[20px]">
			<div class="flex flex-col gap-[10px]">
				<h1 class="text-[40px] font-serif uppercase tracking-[20px] me-[-20px]">Matthew</h1>
				<h1 class="text-[30px] font-serif italic font-medium">and</h1>
				<h1 class="text-[40px] font-serif uppercase tracking-[20px] me-[-20px]">Ella</h1>
			</div>
			<div class="flex flex-col gap-[10px]">
				<h2 class="uppercase text-[14px] tracking-[2.8px]">03 . 01 . 2025</h2>
				<h2 class="uppercase text-[14px] tracking-[2.8px]">Villa Plenilunio, Uluwatu Bali</h2>
			</div>
		</div>

		<!-- Desktop -->
		<div class="md:flex hidden flex-col gap-[55px]">
			<div class="flex flex-wrap gap-[40px] items-baseline">
				<h1 class="text-[80px] font-serif uppercase tracking-[20px] me-[-20px]">Matthew</h1>
				<h1 class="text-[50px] font-serif italic font-medium">and</h1>
				<h1 class="text-[80px] font-serif uppercase tracking-[20px]">Ella</h1>
			</div>
			<div>
				<h2 class="uppercase text-[20px] tracking-[4px]">
					03 . 01 . 2025 | Villa Plenilunio, Uluwatu Bali
				</h2>
			</div>
		</div>
	</div>
	<p class="uppercase mb-[24px] mx-auto text-[10px] tracking-[5px]">Scroll down</p>
	<div class="h-[50px] mx-auto bg-white w-[1px] scroll-bar relative overflow-hidden" />
</div>

<style>
	span.bg-hero {
		transform: translate3d(0, 0, 0) scale(1.25);
		animation: scale 6.5s linear forwards;
		/* transform: scale(1);
		transition: 6.5s transform; */
	}

	.scroll-bar::after {
		height: 55%;
		content: ' ';
		position: absolute;
		top: 0;
		width: 100%;
		animation: scrollbar 2.5s linear infinite;
		background-color: black;
	}

	@keyframes scale {
		100% {
			transform: scale(1);
		}
	}

	@keyframes scrollbar {
		0% {
			transform: translateY(-50px);
		}
		100% {
			transform: translateY(50px);
		}
	}
</style>
