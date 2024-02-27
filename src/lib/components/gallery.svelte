<script>
	import ButtonBlack from './button-black.svelte';
	import Gallery1 from '$lib/assets/images/gallery-1.png';
	import Gallery2 from '$lib/assets/images/gallery-2.png';
	import Gallery3 from '$lib/assets/images/gallery-3.png';
	import Gallery4 from '$lib/assets/images/gallery-4.png';
</script>

<div class="min-h-svh py-[100px] flex flex-col items-center gap-[90px] bg-bgDark" id="gallery">
	<h3 class="font-serif text-[60px] text-center">Gallery</h3>

	<div class="grid grid-cols-2 md:grid-cols-4">
		<img src={Gallery1} alt="Matt and Ella in red" />
		<img src={Gallery2} alt="Matt and Ella in white laughing" />
		<img src={Gallery3} alt="Matt and Ella running towards the camera" class="hidden md:block" />
		<img src={Gallery4} alt="Matt and Ella riding a bicycle" class="hidden md:block" />
	</div>

	<a href="/gallery">
		<ButtonBlack>View all photos</ButtonBlack>
	</a>
</div>
