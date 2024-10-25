import { render, screen } from '@testing-library/svelte';
import Page from './+page.svelte';
import { mockWeatherApiResponse } from '$lib/mocks/WeatherApiResponseMock';
import type { PageData } from './$types';
import Layout from './+layout.svelte';
import { createRawSnippet, type Snippet } from 'svelte';

describe('Tests home page', () => {
	let data: PageData;

	beforeEach(() => {
		data = { result: mockWeatherApiResponse() };
	});

	test('Page renders correctly', () => {
		render(Page, { props: { data } });

		// Show city name
		expect(screen.queryByText(data.result?.location.name ?? 'FAIL')).toBeTruthy();
		// Show location temperature
		expect(screen.queryByText(data.result?.current.temp_c + '°')).toBeTruthy();
	});

	test('Show message if no information is found', () => {
		render(Page, { props: { data: { result: undefined } } });

		expect(screen.queryByText(/no information found/i)).toBeTruthy();
	});
});

describe('Test layout', () => {
	test('Renders properly', () => {
		const children: Snippet<[]> = createRawSnippet(() => ({
			render: () => '<div />'
		}));

		render(Layout, { children });

		expect(screen.queryByTestId('theme-switch')).toBeTruthy();
	});
});
