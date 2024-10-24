<script lang="ts">
	import type { ExtraInfo } from '$lib/types';

	interface ExtraProps {
		extra: ExtraInfo;
	}

	let { extra }: ExtraProps = $props();
</script>

<div class="card flex flex-col items-start">
	<h6 class="uppercase font-bold text-sm">Extra information</h6>
	<div class="flex flex-wrap gap-11">
		<div class="flex">
			<p class="text-3xl">🧣</p>
			<div class="items-start flex flex-col">
				<h5 class=" font-bold">Real Feel</h5>
				<p class="dark:text-teal-50 text-teal-950 text-3xl">{extra.realFeel}°</p>
			</div>
		</div>
		<div class="flex">
			<p class="text-3xl">🌬</p>
			<div class="items-start flex flex-col">
				<h5 class=" font-bold">️ Wind</h5>
				<p class="dark:text-teal-50 text-teal-950 text-3xl">{extra.windSpeed} km/h</p>
			</div>
		</div>
		<div class="flex">
			<p class="text-3xl">☔</p>
			<div class="items-start flex flex-col">
				<h5 class=" font-bold">Chance of rain</h5>
				<p class="dark:text-teal-50 text-teal-950 text-3xl">{extra.rainChance}%</p>
			</div>
		</div>
		<div class="flex">
			<p class="text-3xl">☀️</p>
			<div class="items-start flex flex-col">
				<h5 class=" font-bold">UV Index</h5>
				<p class="dark:text-teal-50 text-teal-950 text-3xl">{extra.UVIndex}</p>
			</div>
		</div>
	</div>
</div>

<style></style>
