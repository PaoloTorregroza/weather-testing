import type { Suggestion } from '$lib/types';
import { render, screen } from '@testing-library/svelte';
import Autocomplete from './Autocomplete.svelte';

describe('Autocomplete component', () => {
	test('Render 2 suggestions', () => {
		const suggestions: Suggestion[] = [
			{ id: 0, name: 'Location', region: undefined },
			{ id: 1, name: 'Location 2', region: 'A region' }
		];
		const props = { suggestions: suggestions };

		render(Autocomplete, { props });

		expect(screen.findByText('Location 2, A region')).toBeTruthy();
		expect(screen.findByText('Location')).toBeTruthy();
	});

	test('Do not render without suggestions', () => {
		const suggestions: Suggestion[] = [];
		const props = { suggestions };

		render(Autocomplete, { props });

		expect(screen.queryByTestId('suggestions-list')).toBeFalsy();
	});
});
