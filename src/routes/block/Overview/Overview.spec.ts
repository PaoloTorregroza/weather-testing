import { render, screen } from '@testing-library/svelte';
import Overview from './Overview.svelte';

describe('Overview component', () => {
	test('Checks props', () => {
		const city = 'Arauca';
		const temperature = 25;
		const humidity = 69;
		render(Overview, { props: { city, temperature, humidity } });

		expect(screen.queryByText(/Arauca/i)).toBeTruthy();
		expect(screen.queryByText('25°')).toBeTruthy();
		expect(screen.queryByText(/Humidity: 69%/i));
	});
});
