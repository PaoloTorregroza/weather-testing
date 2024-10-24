<script lang="ts">
	interface Props {
		city: string;
		temperature: number;
		humidity: number;
	}

	let { city, temperature, humidity }: Props = $props();
</script>

<div class="flex p-4 md:p-8">
	<div class="w-2/3 flex items-start flex-col justify-center align-middle">
		<h2 class="dark:text-teal-50 text-4xl text-teal-950 font-bold">{city}</h2>
		<p class="dark:text-slate-400 text-slate-700">Humidity: {humidity}%</p>
		<h2 class="text-6xl dark:text-teal-100 text-teal-900 font-bold mt-10">{temperature}°</h2>
	</div>
	<img class="w-1/3" src="https://placehold.co/400" alt="weather" />
</div>

<style></style>
