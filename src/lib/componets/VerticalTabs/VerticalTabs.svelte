<script lang="ts">
	let selectedIndex = 0;

	const changeSecondTab = () => {
		selectedIndex = 1;
	};
</script>

<div class="flex flex-row items-center border border-gray-500">
	<ul class="p-12 list-none border-r-gray-500 border-r space-y-8">
		<li>First tab</li>
		<li on:click={() => changeSecondTab()}>Second tab</li>
		<li>Third tab</li>
	</ul>

	<div class="flex-1">
		{#if selectedIndex == 0}
			<h2>First Tab Heading</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aut deserunt veniam tempora
				deleniti quos reprehenderit natus. Animi, obcaecati dolorum, culpa, maiores maxime ullam
				soluta unde rerum nihil temporibus quibusdam!
			</p>
		{:else if selectedIndex == 1}
			<h2>Second Tab Heading</h2>
			<p>Test</p>
		{/if}
	</div>
</div>
