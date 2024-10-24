<script lang="ts">
	import Forecast from './block/Forecast/Forecast.svelte';
	import type { ExtraInfo, FutureForecast, TimeForecast } from '../lib/types';
	import Overview from './block/Overview/Overview.svelte';
	import Extra from './block/Extra/Extra.svelte';
	import FutureForecasts from './block/FutureForecasts/FutureForecasts.svelte';
	import { DataParser } from '$lib/utils/DataParser/DataParser';

	let { data } = $props();
	console.log(data.result);

	const dataParser = new DataParser();

	let overview = $derived(dataParser.getOverview(data.result));
	let forecast = $derived(dataParser.getTimeForecast(data.result));
	let extra = $derived(dataParser.getExtra(data.result));
	let futureForecast = $derived(dataParser.getFutureForecast(data.result));
</script>

<div class="flex flex-col lg:flex-row">
	<div class="lg:w-3/5 m-4 p-3 space-y-5">
		<div class="relative">
			<input
				class="shadow-inner w-full focus:outline-none rounded-lg py-3 px-2 bg-gray-200 dark:bg-slate-800 dark:text-teal-50 text-teal-950"
				type="text"
				placeholder="Seach location..."
			/>
			<span class="absolute inset-y-0 right-0 flex items-center pr-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 text-gray-400"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 4a6 6 0 100 12 6 6 0 000-12zm4  11.25M14 14l3.5 3.5-1.5 1.5L12 15.5"
					/>
				</svg>
			</span>
		</div>
		{#if data.result}
			<Overview
				humidity={overview.humidity}
				temperature={overview.temperature}
				city={overview.city}
			/>
			<Forecast {forecast} />
			<Extra {extra} />
		{:else}
			<p>No information found</p>
		{/if}
	</div>
	<div class="lg:w-2/5 mx-4 p-3">
		<FutureForecasts days={futureForecast} />
	</div>
</div>
