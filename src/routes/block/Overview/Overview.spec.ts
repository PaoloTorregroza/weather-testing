import { render, screen } from '@testing-library/svelte';
import Overview from './Overview.svelte';

describe('Overview component', () => {
	test('Checks props', () => {
		const city = 'Arauca';
		const temperature = 25;
		const rainChance = 69;
		render(Overview, { props: { city, temperature, rainChance } });

		expect(screen.queryByText(/Arauca/i)).toBeTruthy();
		expect(screen.queryByText('25°')).toBeTruthy();
		expect(screen.queryByText(/Chande of rain: 69%/i));
	});
});
