<script lang="ts">
	import BreakImage1 from '$lib/assets/images/break-img-1.png';
	import BreakImage2 from '$lib/assets/images/break-img-2.png';
</script>

<div class="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
	<div class="overflow-hidden">
		<img
			src={BreakImage1}
			alt="Matt and Ella sitting"
			class="hover:scale-110 transition-transform ease-in duration-300"
		/>
	</div>
	<div class="overflow-hidden">
		<img
			src={BreakImage2}
			alt="Matt and Ella laughing while walking"
			class="hover:scale-110 transition-transform ease-in duration-300"
		/>
	</div>
</div>
