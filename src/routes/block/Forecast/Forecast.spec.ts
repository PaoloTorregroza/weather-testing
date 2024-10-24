import { render, screen } from '@testing-library/svelte';
import Forecast from './Forecast.svelte';

describe('Forecast component', () => {
	test('Render 3 hour forecast', () => {
		const props = {
			forecast: [
				{
					time: '6:00 AM',
					temperature: 25
				},
				{
					time: '7:00 AM',
					temperature: 26
				},
				{
					time: '6:00 PM',
					temperature: 17
				}
			]
		};
		render(Forecast, { props });

		for (const forecast of props.forecast) {
			expect(screen.queryByText(forecast.time)).toBeTruthy();
			expect(screen.queryByText(forecast.temperature + '°')).toBeTruthy();
		}
	});
});
