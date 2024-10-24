<script lang="ts">
	import type { FutureForecast } from '$lib/types';

	interface FutureForecastsProps {
		days: FutureForecast[];
	}

	let { days }: FutureForecastsProps = $props();
</script>

<div class="card font-bold flex flex-col items-start lg:mt-20">
	<h6 class="uppercase text-sm">7-day forecast</h6>
	<div class="flex flex-col gap-7 justify-start items-stretch w-full">
		{#each days as el, i}
			<div class="font-normal flex justify-between items-center w-full">
				<p>{el.dayName}</p>
				<div class="flex gap-2 items-center">
					<!-- <img class="max-w-9 h-auto" src={el.icon + '.svg'} alt="Future forecast" /> -->
					<p class="font-bold dark:text-teal-50 text-teal-950">{el.weather}</p>
				</div>
				<p>{el.day}</p>
			</div>
			{#if i < days.length - 1}
				<div class="border-b border-slate-300 dark:border-slate-700 w-full"></div>
			{/if}
		{/each}
	</div>
</div>
