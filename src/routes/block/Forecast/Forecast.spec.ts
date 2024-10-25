import { render, screen } from '@testing-library/svelte';
import Forecast from './Forecast.svelte';
import { WeatherIcon } from '$lib/types';

describe('Forecast component', () => {
	test('Render 3 hour forecast', () => {
		const props = {
			forecast: [
				{
					time: '6:00 AM',
					temperature: 25.6,
					icon: WeatherIcon.Cloudy
				},
				{
					time: '7:00 AM',
					temperature: 26.1,
					icon: WeatherIcon.Rainy
				},
				{
					time: '6:00 PM',
					temperature: 17.2,
					icon: WeatherIcon.Sunny
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
