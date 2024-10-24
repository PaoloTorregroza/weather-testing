import type { ExtraInfo } from '$lib/types';
import { render, screen } from '@testing-library/svelte';
import Extra from './Extra.svelte';

describe('Extra info component', () => {
	test('Render extra weather information', async () => {
		const extra: ExtraInfo = {
			realFeel: 33,
			windSpeed: 0.2,
			rainChance: 0,
			UVIndex: 4
		};

		render(Extra, { props: { extra } });

		expect(await screen.findByText('33°')).toBeTruthy();
		expect(await screen.findByText('0.2 km/h')).toBeTruthy();
		expect(await screen.findByText('0%')).toBeTruthy();
		expect(await screen.findByText('4')).toBeTruthy();
	});
});
