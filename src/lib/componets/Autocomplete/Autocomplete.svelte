<script lang="ts">
	import type { Suggestion } from '$lib/types';
	import { createEventDispatcher } from 'svelte';

	interface AutocompleteProps {
		suggestions: Suggestion[];
	}

	const dispatch = createEventDispatcher();

	let { suggestions }: AutocompleteProps = $props();

	function selectSuggestion(suggestion: string) {
		dispatch('select', suggestion);
	}
</script>

{#if suggestions.length > 0}
	<ul
		data-testid="suggestions-list"
		class="dark:bg-slate-800 dark:border-slate-900 absolute bg-white border border-gray-300 rounded-xl mt-1 shadow-lg w-full max-h-60 overflow-y-auto"
	>
		{#if suggestions.length > 0}
			{#each suggestions as suggestion}
				<button
					class="dark:hover:bg-slate-900 hover:bg-gray-300 p-2 w-full h-full cursor-pointer"
					onclick={() => selectSuggestion(suggestion.name)}
					>{suggestion.name}
					{#if suggestion.region}
						, {suggestion.region}
					{/if}</button
				>
			{/each}
		{/if}
	</ul>
{/if}
