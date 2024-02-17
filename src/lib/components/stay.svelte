<script lang="ts">
	import ArrowRight from 'flowbite-svelte-icons/ArrowRightOutline.svelte';
	import BaliMap from '$lib/assets/images/bali-map.png';
</script>

<div class="min-h-svh py-[40px] px-[30px] md:py-[160px]" id="where-you-can-stay">
	<div class="flex flex-col gap-[30px]">
		<h3 class="font-serif text-[50px] font-medium text-center leading-[55px]">
			Where can you stay?
		</h3>
		<p class="text-center text-[14px]">
			Bali has everything for everyone. From five-star resorts, to thousands of smaller, yet just as
			amazing accommodations, and affordable Airbnbs
		</p>
	</div>

	<div class="mt-[30px] flex flex-col gap-[30px] md:grid md:grid-cols-2">
		<div class="bg-[#E3E1DA] p-[30px] flex flex-col gap-[40px]">
			<p class="text-[14px]">
				If you are planning on staying for just a few days (3 nights 4days), and be there just for
				the wedding, you can opt to stay in these hotels:
			</p>

			<ul class="font-serif text-[16px]">
				<li class="font-bold py-[20px] border-b border-[#D2D0D0]">
					<a
						href="https://www.pleniluniovilla.com/terrazza-plenilunio/"
						target="_blank"
						rel="noopener noreferrer"
						class="flex justify-between items-center"
					>
						Villa Plenilunio Terazza
						<ArrowRight strokeWidth="1px" size="lg" />
					</a>
				</li>
				<li class="font-bold py-[20px] border-b border-[#D2D0D0]">
					<a
						href="https://www.fourseasons.com/jimbaranbay/"
						target="_blank"
						rel="noopener noreferrer"
						class="flex justify-between items-center"
					>
						Four Seasons
						<ArrowRight strokeWidth="1px" size="lg" />
					</a>
				</li>
				<li class="font-bold py-[20px] border-b border-[#D2D0D0]">
					<a
						href="https://www.marriott.com/en-us/hotels/dpsuw-renaissance-bali-uluwatu-resort-and-spa/overview/"
						target="_blank"
						rel="noopener noreferrer"
						class="flex justify-between items-center"
					>
						Renaissance Uluwatu
						<ArrowRight strokeWidth="1px" size="lg" />
					</a>
				</li>
				<li class="font-bold py-[20px] border-b border-[#D2D0D0] last:border-b-0">
					<a
						href="https://www.booking.com/hotel/id/swiss-belresort-pecatu.en-gb.html"
						target="_blank"
						rel="noopener noreferrer"
						class="flex justify-between items-center"
					>
						Swissbel Hotel
						<ArrowRight strokeWidth="1px" size="lg" />
					</a>
				</li>
			</ul>

			<p>
				These are full-service hotels and are close to our venue. Of the four hotels, we have made
				an arrangement with Villa Plenilunio Terazza. They can offer our guests a 15% discount. Our
				coordinators from <span class="font-serif italic font-bold">@voweverwedding</span> will be more
				than happy to make the arrangements for your bookings.
			</p>
		</div>

		<div class="bg-[#E3E1DA]">
			<img src={BaliMap} alt="Bali Map" />
		</div>
	</div>

	<p class="text-center text-[14px] mt-[50px]">
		If you plan on staying for a week or more, we suggest you try booking a villa thorugh AirBnb.
		You can book as a group.<br /> If you are looking for a group to share a villa with, please message
		us and we will introduce you to the other guests. It will be a good way to meet other people too.
	</p>
</div>
