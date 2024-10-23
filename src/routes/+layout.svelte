<script lang="ts">
	import ThemeSwitch from '$lib/componets/ThemeSwitch/ThemeSwitch.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div>
	<ThemeSwitch />
	{@render children()}
</div>
