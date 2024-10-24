import type { WeatherAPIResponse } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, url }) => {
	const city = url.searchParams.get('q') || 'El Dorado';
	const request_url = `http://api.weatherapi.com/v1/forecast.json?q=${city}&days=7&key=${process.env.API_KEY}`;
	const options = {
		method: 'GET'
	};
	try {
		const response = await fetch(request_url, options);
		const result: WeatherAPIResponse = await response.json();
		return {
			result
		};
	} catch (error) {
		console.error(error);
	}
};
