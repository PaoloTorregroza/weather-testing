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
			<div class="flex justify-between w-full">
				<p>{el.dayName}</p>
				<div class="flex gap-2">
					<p>☀️</p>
					<p>{el.weather}</p>
				</div>
				<p>{el.day}</p>
			</div>
			{#if i < days.length - 1}
				<div class="border-b border-slate-500 w-full"></div>
			{/if}
		{/each}
	</div>
</div>
