<script lang="ts">
	import type { TimeForecast } from '$lib/types';

	interface ForecastProps {
		forecast: TimeForecast[];
	}

	let { forecast }: ForecastProps = $props();
</script>

<div class="font-bold flex flex-col items-start card">
	<h6 class="uppercase text-sm">Today's forecast</h6>
	<div class="flex gap-7 md:justify-center items-center w-full overflow-scroll">
		{#each forecast as el, i (el.time + el.temperature)}
			<div class="">
				<p>{el.time}</p>
				<img class="mt-2 min-w-16 h-auto" src={el.icon + '.svg'} alt="Forecast icon" />
				<p class="dark:text-teal-50 text-teal-950 text-2xl">{el.temperature.toFixed(1)}°</p>
			</div>
			{#if i < forecast.length - 1}
				<div class="border-r border-slate-500 h-28"></div>
			{/if}
		{/each}
	</div>
</div>

<style></style>
